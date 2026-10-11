# 背景音樂

兩首皆由使用者提供並授權加入本公開網站，原檔為 `Coffee Shop.mp3` 與 `Coffee Shop (1).mp3`。已依檔頭與音訊解析確認 MPEG Layer III，雙聲道、48 kHz、192 kbps，時長約 213.62 與 197.06 秒，檔案為 5,179,227 與 4,781,961 bytes。原始即為壓縮 MP3，因此沒有再次有損轉碼。

網站檔案在 `public/audio/coffee-shop-1.mp3`、`coffee-shop-2.mp3`，格式、大小、雜湊與原始檔名紀錄於 `src/data/music.json`。不需音樂 API 或第三方播放器。

預設關閉、preload none；點選頁首「播放音樂」才開始下載與播放。第一首結束切第二首，第二首結束回第一首。關閉、切到背景分頁、離開頁面與瀏覽器返回皆保持停止，須重新點選。整頁只有一個 audio 元件，不會產生重疊音軌。

替換曲目時更新 public/audio 與 music.json，重新 build；若曲目數量變更，播放清單依資料迴圈。音訊不出現在初次載入的必要請求，兩首總約 9.96 MB，僅在訪客播放時按需取得。

驗證用 `node scripts/music-check.mjs`，涵蓋實際播放及自然 ended 切換、關閉、快速切換、導覽返回、背景停止、缺檔與瀏覽器阻擋。
