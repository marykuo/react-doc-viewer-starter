import { useParams } from "react-router-dom";

function DocDetail() {
  const { docId } = useParams();

  // 實務上這裡會根據 docId 去索引你的 files.json
  // 例如：const file = fileList.find(f => f.id === docId);

  return (
    <div>
      <h1>正在閱讀：{docId}</h1>
      {/* 這裡之後會放入 <MarkdownView /> 或 <PDFView /> */}
      <div className="content-viewer">{/* 邏輯判斷渲染器... */}</div>
    </div>
  );
}

export default DocDetail;
