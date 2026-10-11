# 內容維護

文章採 YAML frontmatter + Markdown。分類路徑固定：knowledge、stories、recipes、brewing、origins、tasting。保留已公開的英文 slug，避免破壞讀者書籤。

每篇需 title、slug、category、tags、excerpt、publishedAt、updatedAt、coverImage、coverAlt、featured、status。日期格式 YYYY-MM-DD。分類名必須與資料夾相符。新增檔案後執行 `npm run build`，詳細頁、分類頁、相關閱讀與本地搜尋索引會重建。

正文用二級標題分節，區分確定事實、文化描述與傳說，避免以產地保證單一風味。涉及歷史、品種與技術時提供原始資料連結。天然咖啡風味與額外新增食材應清楚分開。

配方另需 recipe：servings、durationMinutes、difficulty、type、ingredients（name、quantity、unit，g 或 mL）、steps。正文補充器具、份量、時間、步驟、替代材料與注意事項。新增配方後檢查結構化資料與視覺清單一致。

下架將 status 改為 draft。正式網站若已有訪客，建議為原網址保留導引頁；本版本下架後舊連結會進入404，須先更新所有手動引用。每日知識從已發布知識／沖煮／品鑑文章建立，至少30則；隨機推薦只用已發布沖煮與特調。
