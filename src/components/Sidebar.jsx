import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchJson } from "../utils/fetchJson";

function Sidebar() {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchJson("/data/files.json");
        setFileList(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error(err);
      }
    };
    fetchFiles();
  }, []);

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
        {loading && <li>載入中...</li>}
        {error && <li style={{ color: "red" }}>❌ 無法載入文件列表</li>}
        {!loading &&
          !error &&
          fileList.map((file) => (
            <li key={file.id} style={{ marginBottom: "0.5rem" }}>
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
