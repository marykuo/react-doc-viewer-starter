import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchJson } from "../utils/fetchJson";

// 遞迴子組件
function SidebarItem({ item, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(
    item.isOpen !== undefined ? item.isOpen : true,
  );
  const hasChildren = item.type === "folder" && item.children;

  // 根據深度計算左側縮排
  const itemStyle = {
    paddingLeft: `${depth * 15 + 10}px`,
    paddingTop: "8px",
    paddingBottom: "8px",
    display: "block",
    textDecoration: "none",
    color: "#444",
    cursor: "pointer",
    fontSize: "0.95rem",
  };

  if (hasChildren) {
    return (
      <div>
        <div
          style={{
            ...itemStyle,
            fontWeight: "bold",
            color: "#666",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "📂 " : "📁 "} {item.title}
        </div>

        {/* 如果展開，則遞迴渲染子項目 */}
        {isOpen && (
          <div className="sidebar-sub-menu">
            {item.children.map((child, index) => (
              <SidebarItem key={index} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // 檔案類型的渲染 (Markdown 或 PDF)
  return (
    <NavLink
      to={`/docs/${item.id}`}
      style={({ isActive }) => ({
        ...itemStyle,
        backgroundColor: isActive ? "#e7f3ff" : "transparent",
        color: isActive ? "#007bff" : "#555",
      })}
    >
      {item.type === "pdf" ? "📄 " : "📝 "} {item.title}
    </NavLink>
  );
}

function HomepageLink() {
  return (
    <h2 style={{ paddingLeft: "10px" }}>
      <NavLink
        to="/"
        style={() => ({
          color: "#333",
          textDecoration: "none",
        })}
      >
        文件導覽
      </NavLink>
    </h2>
  );
}

// 主 Sidebar 組件
function Sidebar() {
  const [fileTree, setFileTree] = useState([]);

  useEffect(() => {
    fetchJson("/data/sidebar.json").then(setFileTree).catch(console.error);
  }, []);

  return (
    <aside className="sidebar">
      <HomepageLink />
      <hr />
      {fileTree.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </aside>
  );
}

export default Sidebar;
