# 研究閱讀書架

一個無後端、可直接放上 GitHub Pages 的個人閱讀筆記原型。內容包括：

- 依課程分類的書架首頁
- 可編輯的文獻資訊
- Creswell《Research Design》第 1–6 章摘要
- 左側摘要、右側私人筆記的分割閱讀畫面
- 上一步、手動儲存、`Ctrl/Cmd + S` 與未儲存離開提醒
- 所有修改只存於瀏覽器 `localStorage`

## 本機預覽

在此資料夾執行：

```powershell
python -m http.server 4173
```

然後開啟 `http://localhost:4173`。

## 隱私與 GitHub Pages

此原型目前沒有登入系統，也沒有把資料傳到伺服器。筆記只存在當下瀏覽器，清除網站資料或更換裝置後不會自動同步。

一般 GitHub Pages 網站可被公開瀏覽。真正的私人 GitHub Pages 需要由 GitHub Enterprise Cloud 組織從 private 或 internal repository 發布並啟用存取控制。因此，在未確認帳號方案與存取控制前，不應把含私人內容的版本發布到一般 GitHub Pages。

## 檔案

- `index.html`：畫面結構
- `styles.css`：視覺與響應式版面
- `app.js`：書籍資料、章節摘要、路由、筆記與 metadata 儲存
- `assets/creswell-cover.jpg`：由使用者提供的 PDF 封面產生
