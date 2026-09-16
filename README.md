# 研究閱讀書架

一個無後端、可直接放上 GitHub Pages 的個人閱讀筆記原型。內容包括：

- 依課程分類的書架首頁
- 可編輯的文獻資訊
- Creswell《Research Design》第 1–6 章摘要
- 左側摘要、右側私人筆記的分割閱讀畫面
- 上一步、手動儲存、`Ctrl/Cmd + S` 與未儲存離開提醒
- Email magic link 登入與 Supabase 跨裝置筆記同步
- 瀏覽器 `localStorage` 本機備份與離線保護

## 本機預覽

在此資料夾執行：

```powershell
python -m http.server 4173
```

然後開啟 `http://localhost:4173`。

## 筆記同步與隱私

未登入時，筆記只存在當下瀏覽器。登入後，每次儲存會同時保留本機副本並同步至 Supabase；在其他裝置使用同一個 Email 登入，即可載入最新筆記。

網站與章節摘要公開發布於 GitHub Pages，但筆記資料表已啟用 Row Level Security。未登入訪客沒有資料表權限，登入者只能讀寫自己的資料列。`cloud-config.js` 只包含供瀏覽器使用的公開 anon key，不得在前端放置 `service_role` 或其他秘密金鑰。

## 檔案

- `index.html`：畫面結構
- `styles.css`：視覺與響應式版面
- `app.js`：書籍資料、章節摘要、路由、筆記與 metadata 儲存
- `cloud-config.js`：Supabase 公開前端連線設定
- `supabase-schema.sql`：筆記資料表、權限與 RLS 規則
- `assets/creswell-cover.jpg`：由使用者提供的 PDF 封面產生
