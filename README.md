# 咖啡知識網站

繁體中文、純靜態的咖啡閱讀誌。Markdown 文章、JSON 設定與本地全文索引；不需要資料庫或常駐伺服器。

## 本機啟動

需 Node.js 20 以上（部署使用 22）。在專案目錄開啟終端機：

```powershell
npm ci
npm run build
npm run dev
```

瀏覽 `http://127.0.0.1:4173/coffee-knowledge-site/`。修改內容後重新執行 build；dev 伺服器會直接讀取新輸出。停止請按 Ctrl+C。

```powershell
npm test
node scripts/browser-check.mjs
```

第二項使用已安裝的 Google Chrome 獨立無頭測試程式，不讀取個人瀏覽器資料。

## 更新

- 文章在 `src/content/分類/slug.md`，frontmatter 控制標題、摘要、標籤、日期、封面與發布狀態。`status: draft` 會排除於頁面及索引。
- 商家資料在 `src/data/site.json`。空值代表尚未確認，請勿填入猜測資訊。
- 圖片為 `public/images/` 的 WebP，生成母檔在 `assets/masters/`，來源與用途紀錄在 `assets/manifest.json`。
- 每次更新執行 build 與 test，透過後提交 Git；CI 會建置、檢查及釋出 GitHub Pages。

詳見 [內容維護](docs/CONTENT-GUIDE.md)、[圖片維護](docs/IMAGE-GUIDE.md)、[音樂維護](docs/MUSIC.md)、[部署](docs/DEPLOY.md)、[交接](docs/HANDOFF.md)、[驗收](docs/ACCEPTANCE.md)。

原始私人規格 PDF 不屬於公開原始碼，亦未納入專案。
