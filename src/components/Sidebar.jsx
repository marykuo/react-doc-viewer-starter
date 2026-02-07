import { Link, NavLink } from "react-router-dom";

// 模擬的文件資料，實際開發時可以放在單獨的 data/files.json
const fileList = [
  { id: "intro", title: "🚀 快速入門", type: "markdown" },
  { id: "install-guide", title: "📦 安裝指南", type: "markdown" },
  { id: "api-reference", title: "📚 API 文件", type: "pdf" },
  { id: "design-assets", title: "🎨 設計規範", type: "pdf" },
];

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#007bff" : "#333",
              textDecoration: "none",
            })}
          >
            首頁
          </NavLink>
        </li>
        <hr />
        {fileList.map((file) => (
          <li key={file.id} style={{ marginBottom: "0.5rem" }}>
            {/* 使用 NavLink 可以輕鬆處理「選中狀態」的樣式 */}
            <NavLink
              to={`/docs/${file.id}`}
              style={({ isActive }) => ({
                display: "block",
                padding: "5px 10px",
                borderRadius: "4px",
                textDecoration: "none",
                backgroundColor: isActive ? "#e7f3ff" : "transparent",
                color: isActive ? "#007bff" : "#555",
              })}
            >
              {file.type === "pdf" ? "📄 " : "📝 "}
              {file.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
