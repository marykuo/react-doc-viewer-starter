export default function PDFView({ url }) {
  return (
    <div style={{ height: "90vh" }}>
      <iframe src={url} width="100%" height="100%" title="PDF Viewer" />
    </div>
  );
}
