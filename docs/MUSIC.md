# 背景音樂

兩首皆由使用者提供並授權加入本公開網站，原檔為 `Coffee Shop.mp3` 與 `Coffee Shop (1).mp3`。已依檔頭與音訊解析確認 MPEG Layer III，雙聲道、48 kHz、192 kbps，時長約 213.62 與 197.06 秒，檔案為 5,179,227 與 4,781,961 bytes。原始即為壓縮 MP3，因此沒有再次有損轉碼。

網站檔案在 `public/audio/coffee-shop-1.mp3`、`coffee-shop-2.mp3`，格式、大小、雜湊與原始檔名紀錄於 `src/data/music.json`。不需音樂 API 或第三方播放器。

預設關閉、preload none；點選頁首「播放音樂」才開始下載與播放。第一首結束切第二首，第二首結束回第一首。站內連結、文章、分類、首頁、搜尋與前進／返回透過漸進式導航只替換主內容，保留同一個 audio 實體和播放位置，不會重新啟動音軌。切換到背景分頁仍繼續播放。訪客主動關閉或真正離站／關閉頁面才停止；真正離站後返回不會強制自動播放。整頁只有一個 audio 元件，不會產生重疊音軌。

替換曲目時更新 public/audio 與 music.json，重新 build；若曲目數量變更，播放清單依資料迴圈。音訊不出現在初次載入的必要請求，兩首總約 9.96 MB，僅在訪客播放時按需取得。

驗證用 `node scripts/music-check.mjs`，涵蓋實際播放及自然 ended 切換、關閉、快速切換、導覽返回、背景停止、缺檔與瀏覽器阻擋。

## 持久導航

`src/navigation.js` 攔截本站一般連結，以 fetch 讀取既有靜態 HTML，只更新 main、title、SEO metadata與URL歷史。頁首及播放器不重新掛載；每頁互動由 `coffee:navigation` 事件初始化，舊監聽器與計時器先清理。搜尋的查詢歷史仍可返回，主內容會獲得鍵盤焦點並回到適當捲動位置。新分頁、下載、外部連結與修飾鍵操作保留瀏覽器原生行為。

沒有JavaScript時仍以完整靜態HTML閱讀文章。這次修正不是保存currentTime再重播；測試以DOM identity及currentTime持續增加驗證。首次直接載入任一頁仍預設音樂關閉。
