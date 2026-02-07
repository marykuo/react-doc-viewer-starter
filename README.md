# insurance-ebook

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
