import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function DocDetail() {
  const { docId } = useParams(); // 取得網址上的 id
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 每次 docId 改變時，就去抓新檔案
    setLoading(true);
    setError(false);

    // 假設你的檔案放在 public/content/ 之下，檔名為 {docId}.md
    fetch(`/content/${docId}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("找不到檔案");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [docId]);

  if (loading) return <div>載入中...</div>;
  if (error) return <div>❌ 找不到該文件，請確認檔案路徑是否正確。</div>;

  return (
    <article className="prose lg:prose-xl">
      {/* remarkGfm 讓 Markdown 支援表格、任務列表等功能 */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}

export default DocDetail;
