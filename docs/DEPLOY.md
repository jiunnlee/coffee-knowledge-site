# GitHub Pages 部署

既定目標：GitHub 帳號 jiunnlee，建議 repo coffee-knowledge-site。建立 public repo 與啟用 Pages 必須由使用者確認；未確認前不釋出。

確認後設定 `src/data/site.json` 的 siteUrl 為 `https://jiunnlee.github.io`，basePath 為 `/coffee-knowledge-site/`。GitHub repository Settings → Pages → Source 選 GitHub Actions。

提交到 main 會執行 `.github/workflows/pages.yml`：npm ci、production build、內容與連結檢查、上傳靜態輸出並部署。原始 PDF、憑證、node_modules 與驗收瀏覽器暫存不得加入 Git。

成功標準是 remote commit 與 Actions/Pages 成功，且公開 URL `https://jiunnlee.github.io/coffee-knowledge-site/` 實際載入。只 push 不算部署完成。

若換 repo 名稱，同時修改 JSON 的 basePath 與 workflow 的 BASE_PATH；若換帳號，更新 siteUrl 與 SITE_URL。自訂網域改為 `/` 並重新建置。網站內部連結與搜尋、圖片、指令碼均使用同一 basePath。
