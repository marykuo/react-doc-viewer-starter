# insurance-ebook

## Project Structure

```text
my-doc-site/
├── public/                # 放置 PDF 檔案，讓瀏覽器能直接透過 URL 讀取
│   └── docs/
│       ├── manual.pdf
│       └── spec.pdf
├── src/
│   ├── assets/            # 放置圖片、全域 CSS
│   ├── components/        # 核心組件
│   │   ├── Sidebar.jsx    # 左側文件清單導覽
│   │   ├── MarkdownView.jsx # Markdown 渲染器
│   │   └── PDFView.jsx      # PDF 檢視器
│   ├── hooks/             # 自定義 Hook (例如: useFileSystem)
│   ├── pages/             # 頁面級組件
│   │   ├── Home.jsx       # 首頁
│   │   └── DocDetail.jsx  # 文件詳情頁
│   ├── content/           # 放置 Markdown 檔案 (如果想打包進去的話)
│   │   ├── intro.md
│   │   └── setup.md
│   ├── App.jsx            # 路由配置 (React Router)
│   └── main.jsx
├── data/                  # (選配) 用一個 JSON 紀錄文件清單
│   └── files.json         # 紀錄檔名、標籤、路徑等元數據
├── package.json
└── vite.config.js
```

## Setup Steps

1. create Vite project

```bash
# check node version
node -v

# create vite project
npm create vite@latest your-project-name -- --template react-swc
```

2. setup Vite config

在 `vite.config.js` 中，必須設定 `base` 路徑以對應 GitHub Pages 的 URL：

```javascript
export default {
  // your repository name
  base: "/your-project-name/",
};
```

3. create GitHub Actions workflow

Create a file at `.github/workflows/deploy.yml`.

4. run GitHub Actions

## Local Development

```bash
# 安裝套件
npm install

# 啟動開發伺服器
npm run dev

# 測試打包
npm run build
```
