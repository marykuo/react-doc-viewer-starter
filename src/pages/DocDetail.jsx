import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PDFView from "../components/PDFView";
import MarkdownView from "../components/MarkdownView";
import { fetchJson } from "../utils/fetchJson";

function DocDetail() {
  const { docId } = useParams(); // 取得網址上的 id
  const [doc, setDoc] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(`正在載入文件: ${docId}`);

    // 每次 docId 改變時，就去抓新檔案
    const fetchContent = async () => {
      const data = await fetchJson("/data/files.json");
      const foundDoc = data.find((f) => f.id === docId);
      if (!foundDoc) {
        setError(true);
        setLoading(false);
        return;
      }
      setDoc(foundDoc);
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(foundDoc.path);
        if (!res.ok) throw new Error("找不到檔案");
        const text = await res.text();
        setContent(text);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchContent();
  }, [docId]);

  if (loading) return <div>載入中...</div>;
  if (error) return <div>❌ 找不到該文件，請確認檔案路徑是否正確。</div>;

  return doc.type === "pdf" ? (
    <PDFView url={doc.path} />
  ) : (
    <MarkdownView content={content} />
  );
}

export default DocDetail;
