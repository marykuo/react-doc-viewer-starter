import { useState, useEffect } from "react";
import { fetchJson } from "../utils/fetchJson";

export function useDocument(docId) {
  const [doc, setDoc] = useState(null);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!docId) return;

    let isMounted = true;
    const controller = new AbortController();

    const loadData = async () => {
      setStatus("loading");
      setError(null);

      try {
        // 取得文件列表 (在真實專案中可能改用 React Query 或 Context 緩存)
        const fileList = await fetchJson("/data/files.json");
        const foundDoc = fileList.find((f) => f.id === docId);

        if (!foundDoc) {
          setStatus("error");
          setError({ message: "找不到該文件紀錄" });
          return;
        }

        // 如果元件已卸載，則不更新狀態
        if (!isMounted) return;

        setDoc(foundDoc);

        // Markdown: 讀取文字內容
        if (foundDoc.type === "markdown") {
          const res = await fetch(foundDoc.path, { signal: controller.signal });

          if (!res.ok) {
            setStatus("error");
            setError({ message: `讀取檔案失敗: ${foundDoc.path}` });
            return;
          }

          // 檔案存在但回傳 HTML，可能是 SPA Fallback 的 404 頁面
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("text/html")) {
            setStatus("error");
            setError({ message: "Markdown 檔案不存在或無法存取" });
            return;
          }

          const text = await res.text();

          if (isMounted) {
            setContent(text);
            setStatus("success");
          }
        } else if (foundDoc.type === "pdf") {
          // PDF: 雖然不用讀取內容，但仍需檢查檔案是否存在
          const res = await fetch(foundDoc.path, {
            method: "HEAD",
            signal: controller.signal,
          });
          const contentType = res.headers.get("content-type");

          if (!res.ok || (contentType && contentType.includes("text/html"))) {
            setStatus("error");
            setError({ message: "PDF 檔案不存在或無法存取" });
          } else if (isMounted) {
            setContent("");
            setStatus("success");
          }
        } else {
          setStatus("error");
          setError({ message: `不支援的文件類型: ${foundDoc.type}` });
        }
      } catch (err) {
        if (err.name === "AbortError") return;

        if (isMounted) {
          console.error(err);
          setStatus("error");
          setError({ message: err.message });
          setDoc(null);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [docId]);

  return {
    doc,
    content,
    isLoading: status === "loading",
    isError: status === "error",
    error,
  };
}
