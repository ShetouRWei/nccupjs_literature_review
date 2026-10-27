// Local note key is deliberately distinct from the existing Creswell chapter keys.
const thesisArticle = {
  id: "thesis-whisperer-prompt:1",
  bookId: "thesis-whisperer-prompt",
  chapterId: 1,
  title: "PhD 的 P，不是 Prompt 的 P",
  original: "The ‘P’ in PhD does not stand for ‘prompt’",
  summary: `
    <p><strong>Inger Mewburn · The Thesis Whisperer · 2026 年 6 月 18 日</strong></p>
    <p><a href="https://thesiswhisperer.com/2026/06/18/the-p-in-phd-does-not-stand-for-prompt/" target="_blank" rel="noopener noreferrer">閱讀英文原文 ↗</a></p>
    <h2>標題與短句翻譯</h2>
    <p>標題譯為「PhD 的 P，不是 Prompt 的 P」。「Prompt」指給 AI 的提示詞，標題藉此提醒博士訓練的目的。</p>
    <blockquote>“Writing helps us organise thought.”<br>「寫作幫助我們組織思想。」</blockquote>
    <p><small>本頁包含重點摘要、閱讀延伸，以及你提供的中文全文。文中第一人稱與 AI 使用聲明均屬原作者敘述。</small></p>
    <p><button class="secondary-button" type="button" onclick="document.getElementById('article-full-translation').scrollIntoView({behavior:'smooth'})">跳至中文全文 ↓</button></p>
    <h2>重點摘要</h2>
    <ul>
      <li><strong>效率與能力養成：</strong>作者肯定 AI 的效率，但擔心博士生依賴代讀、代寫，錯過建立獨立思考能力的練習。</li>
      <li><strong>文獻回顧的焦慮：</strong>追求讀遍所有文獻可能阻礙動筆。先寫再補證據雖能推進，也會累積核對引文的工作。</li>
      <li><strong>有範圍的工具使用：</strong>作者先閱讀並挑選材料，再讓 NotebookLM 協助定位相關段落。她仍需判斷證據是否支持論點，也承認記憶可能更依賴工具。</li>
      <li><strong>寫作與責任：</strong>寫作迫使研究者組織思想、面向讀者論證。作者主張透明揭露 AI 使用，並指出可接受的界線取決於使用情境。</li>
    </ul>
    <p>文中的效率提升屬作者個人經驗；對未來偵測能力的描述屬推測，不能當作已證實的能力。</p>
    <h2>課堂討論與個人筆記</h2>
    <p>以下是本書架延伸的自我檢核問題，並非作者原文：</p>
    <ol>
      <li>讀完摘要後，我能否回到原文，指出論點的依據與限制？</li>
      <li>這次使用 AI 省下了哪個步驟？那個步驟是否正是我需要練習的能力？</li>
      <li>我是否記錄工具用途、保留核對過程，並確認課程或投稿單位的揭露要求？</li>
    </ol>
    <h2 id="article-full-translation">中文全文</h2>
    <p><small>依你提供的中文譯文刊載，保留段落與用語。文字中提及的圖片、截圖及「這裡」連結未附於提供的文字，請參照英文原文。</small></p>
    ${thesisArticleTranslation.split(/\r?\n\s*\r?\n/).map(paragraph => `<p>${paragraph.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, "<br>")}</p>`).join("\n")}`,
};
