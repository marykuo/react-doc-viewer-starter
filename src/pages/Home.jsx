import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ maxWidth: "800px", lineHeight: "1.6" }}>
      <h1>歡迎使用文件中心 👋</h1>
      <p>請從左側選單選擇一個 Markdown 筆記或 PDF 檔案開始閱讀。</p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #eee",
        }}
      >
        <h3>快速開始</h3>
        <ul>
          <li>
            <strong>搜尋功能：</strong> 你可以使用 Ctrl + F 快速尋找頁面內容。
          </li>
          <li>
            <strong>格式支援：</strong> 我們支援標準 Markdown GFM 語法。
          </li>
          <li>
            <strong>離線閱讀：</strong> PDF 文件支援瀏覽器內建的列印與下載功能。
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/docs/intro"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          開始閱讀入門指南
        </Link>
      </div>
    </div>
  );
}

export default Home;
