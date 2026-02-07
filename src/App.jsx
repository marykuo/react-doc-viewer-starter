import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import DocDetail from "./pages/DocDetail";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* 左側固定導覽列 */}
        <nav
          style={{
            width: "250px",
            borderRight: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <Sidebar />
        </nav>

        {/* 右側動態內容區 */}
        <main style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            {/* root route */}
            <Route path="/" element={<Home />} />
            {/* dynamic route: shows document detail based on docId */}
            <Route path="/docs/:docId" element={<DocDetail />} />
            {/* catch-all route for undefined paths */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
