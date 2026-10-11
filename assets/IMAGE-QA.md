# 圖像資產交接

2026-10-12 使用 OpenAI built-in image_gen 逐張獨立生成，共 54 張使用中圖像：主視覺 3、首頁主題 10、飲品 15、產地 10、沖泡 8、知識 8。assets/manifest.json 為完整提示詞、來源、日期、用途、繁中 alt、母檔位置、尺寸與 SHA-256 記錄。

全部為 AI 示意，不能當作店家真實商品、設備、產地實拍或認證佐證。母檔 PNG 位於 assets/masters；網站圖片 WebP 位於 public/images。文章使用 1200 × 800，主視覺交付 2048 × 1152。工具未依提示輸出原生 2K：主視覺母檔 1672 × 941，WebP 尺寸為技術放大，並非原生 1920 × 1080，因此原生解析度要求仍有此缺口。手機可用 hero-2 搭配 CSS object-fit 裁切。

已檢閱全部 54 張聯絡表（qa-all.jpg），及主要 hero、飲品、產地、平底濾杯與電子秤單張；無文字、logo 或水印。首版 brewing-2 平底濾杯、brewing-8 電子秤構圖未達要求，已重生成並檢閱替換，棄用母檔在 assets/discarded 留存。其餘農園風景僅為環境示意，不能用作真實地理辨識。qa-all.jpg 在兩張修正版替換前生成，單張修正版已另外實際檢阅。

同時批次轉碼曾重複清理 base64 暫存導致單次 FileNotFoundError；已核對每張 PNG 與 WebP 存在可讀、54 筆 manifest、54 个不同 SHA-256，並無資產缺失。所有母檔均已保存於 Windows 本機。
