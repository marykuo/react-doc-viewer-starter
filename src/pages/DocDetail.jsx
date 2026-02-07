import { useParams } from "react-router-dom";
import PDFView from "../components/PDFView";
import MarkdownView from "../components/MarkdownView";
import { useDocument } from "../hooks/useDocument";

function DocDetail() {
  const { docId } = useParams();
  const { doc, content, isLoading, isError, error } = useDocument(docId);

  if (isLoading) {
    return (
      <div>
        <div>正在載入文件...</div>
      </div>
    );
  }

  if (isError || !doc) {
    return (
      <div>
        <h2>無法讀取文件</h2>
        <p>{error?.message || "找不到指定的文件 ID"}</p>
      </div>
    );
  }

  return (
    <div className="doc-container">
      {doc.type === "pdf" ? (
        <PDFView url={doc.path} />
      ) : (
        <MarkdownView content={content} />
      )}
    </div>
  );
}

export default DocDetail;
