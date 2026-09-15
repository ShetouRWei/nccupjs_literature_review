const DEFAULT_META = {
  course: "研究方法",
  term: "115-1",
  title: "Research Design",
  subtitle: "Qualitative, Quantitative, and Mixed Methods Approaches",
  author: "John W. Creswell",
  edition: "Third Edition",
  publisher: "SAGE Publications",
  year: "2009",
  tags: "研究設計, 質性研究, 量化研究, 混合方法",
};

const chapters = [
  {
    id: 1,
    title: "研究設計的選擇",
    original: "The Selection of a Research Design",
    summary: `
      <h2>核心概念</h2>
      <p>研究設計不是單一工具，而是從哲學假設一路連到資料蒐集與分析的完整計畫。設計的選擇同時受研究問題、研究者經驗與預期讀者影響。</p>
      <blockquote>研究設計 = 世界觀 + 研究策略 + 具體方法，再由問題、經驗與讀者共同校準。</blockquote>
      <h2>三種研究取向</h2>
      <h3>質性研究</h3><p>探索個人或群體賦予社會問題的意義。問題與程序可以逐漸形成，資料多在自然情境蒐集，並由個別材料歸納出主題。</p>
      <h3>量化研究</h3><p>透過測量變項關係來檢驗理論，使用統計分析數值資料，並重視偏誤控制、效度、信度、概化與複製。</p>
      <h3>混合方法</h3><p>有目的地結合並整合兩種方法，使整體理解超過任何單一方法。重點不是「兩種資料都有」，而是說明兩者如何連接與互補。</p>
      <h2>四種世界觀</h2>
      <ul><li><strong>後實證主義：</strong>以測量、因果與理論檢驗為主，但承認知識具有可錯性。</li><li><strong>社會建構主義：</strong>意義由個人透過社會、文化與歷史互動建構，研究者尋求多元理解。</li><li><strong>倡議／參與式：</strong>研究處理壓迫、不平等與賦權，並與參與者合作推動改變。</li><li><strong>實用主義：</strong>以研究問題與實際後果為中心，選擇最能解決問題的方法。</li></ul>
      <h2>研究策略與選擇標準</h2>
      <p>量化策略包括調查與實驗；質性策略包括民族誌、紮根理論、個案研究、現象學與敘事研究；混合方法可採序列、同時並行或轉化設計。</p>
      <p>若要辨認影響因素、評估介入或檢驗理論，通常選量化；若現象尚未被理解、變項未知或既有理論不適用，通常選質性；若同時需要概化與深入理解，則考慮混合方法。</p>`,
  },
  {
    id: 2,
    title: "文獻回顧",
    original: "Review of the Literature",
    summary: `
      <h2>文獻回顧要完成什麼</h2>
      <p>文獻回顧用來判斷題目是否值得研究、把研究放進既有學術對話、建立研究重要性，並說明新研究將填補、延伸或重新檢驗什麼。</p>
      <h2>先釐清研究主題</h2>
      <p>先用簡單句子完成「我的研究是關於……」，再寫一個不超過約十二個英文單字的暫定標題。接著區分題目<strong>能不能做</strong>與<strong>應不應該做</strong>：前者涉及參與者、時間與資源；後者涉及知識貢獻、社會價值、讀者興趣及個人生涯。</p>
      <h2>三種研究中的文獻位置</h2>
      <ul><li><strong>質性：</strong>前期通常較少，以免預先限制參與者觀點；可放在導論、獨立章節，或研究結果之後比較。</li><li><strong>量化：</strong>前期大量使用文獻來找理論、變項、問題與假設，研究結束後再比較結果。</li><li><strong>混合：</strong>依先質後量、先量後質、並行設計及兩種方法的權重決定。</li></ul>
      <h2>系統化搜尋七步驟</h2>
      <ol><li>找出關鍵字與同義詞。</li><li>搜尋圖書館與多個資料庫。</li><li>初步取得約五十篇相關研究。</li><li>快速篩選核心文獻。</li><li>繪製文獻地圖。</li><li>摘要研究並保留完整書目。</li><li>依主題整合，最後指出缺口與貢獻。</li></ol>
      <p>文獻來源大致優先考慮綜論、同儕審查期刊、研究專書、研討會論文、學位論文，再到經品質檢查的網路材料。</p>
      <h2>文獻地圖與單篇摘要</h2>
      <p>文獻地圖可採階層圖、流程圖或相交圓圈；它必須呈現研究群組、代表文獻、缺口與本研究的位置。單篇實證研究摘要應抽取問題、目的、樣本、方法、主要結果及必要的方法批判。</p>
      <h2>量化文獻回顧五段模型</h2>
      <p>依序交代章節結構、自變項文獻、依變項文獻、兩者關係的研究，最後總結主要主題、缺口與本研究的貢獻。</p>
      <h2>名詞定義</h2>
      <p>技術名詞應在第一次出現時定義。質性研究可採暫定與漸進定義；量化研究需較早提供精確及操作型定義；混合方法則依研究順序與權重處理。</p>`,
  },
  {
    id: 3,
    title: "理論的使用",
    original: "The Use of Theory",
    summary: `
      <h2>理論在不同取向中的位置</h2>
      <p>量化研究通常在前端提出理論並演繹檢驗；質性研究可以用理論作為開端的透鏡、在研究末端生成理論，或不明示理論；混合方法則可同時檢驗、生成，並以轉化理論統攝全程。</p>
      <h2>量化研究的變項</h2>
      <ul><li><strong>自變項：</strong>可能影響或預測結果。</li><li><strong>依變項：</strong>研究要解釋的結果。</li><li><strong>中介變項：</strong>解釋影響如何發生。</li><li><strong>調節變項：</strong>改變關係的強度或方向。</li><li><strong>控制變項：</strong>被測量並以統計方式控制。</li><li><strong>混淆變項：</strong>可能解釋關係，但未被測量或難以觀察。</li></ul>
      <h2>理論的功能與形式</h2>
      <p>理論由相互關聯的構念、定義與命題組成，回答變項之間「如何」和「為什麼」相關。理論可以寫成一組假設、if–then 陳述或視覺因果模型，也可以依解釋範圍分為微觀、中觀與宏觀理論。</p>
      <blockquote>量化邏輯：理論 → 問題／假設 → 操作化變項 → 測量 → 支持、否定或修正理論。</blockquote>
      <h2>量化理論章節</h2>
      <p>交代理論名稱、來源、過去用途、核心命題、如何套用於目前研究，以及為何預期自變項會影響依變項。理論可以放在導論、文獻回顧、假設後方或獨立章節；獨立成節最容易辨認。</p>
      <h2>質性理論的四種用法</h2>
      <ol><li>作為行為或文化的廣泛解釋。</li><li>作為性別、種族、階級、酷兒或障礙研究的倡議透鏡。</li><li>從資料、類別與主題中歸納生成理論。</li><li>不採明確理論，提供中心現象的厚實描述。</li></ol>
      <h2>轉化式混合方法</h2>
      <p>轉化理論必須影響問題形成、社群參與、研究設計、抽樣、工具、資料蒐集、分析與報告。它會檢查研究是否呈現群體內部差異、揭示權力關係、讓社群受益並促成改變。</p>`,
  },
  {
    id: 4,
    title: "寫作策略與倫理考量",
    original: "Writing Strategies and Ethical Considerations",
    summary: `
      <h2>研究計畫的九項論證</h2>
      <p>計畫要回答：讀者需要知道什麼、目前不知道什麼、研究要做什麼、在哪裡研究誰、如何蒐集與分析資料、如何驗證結果、有哪些倫理問題，以及初步結果是否支持研究的可行性與價值。</p>
      <h2>計畫格式</h2>
      <p><strong>質性計畫</strong>以問題、目的、研究問題與程序為核心，程序包含哲學假設、策略、研究者角色、蒐集與分析、效度、倫理和預期敘事；參與式版本還要交代合作及預期改變。</p>
      <p><strong>量化計畫</strong>通常包含導論、理論、問題或假設、文獻回顧、研究設計、母體與樣本、工具與變項、分析、倫理及預試。</p>
      <p><strong>混合方法計畫</strong>必須另外定義混合方法、說明混合理由與設計類型、提供程序圖，並分別交代兩套資料如何蒐集、分析、驗證及整合。</p>
      <h2>寫作即思考</h2>
      <p>先列架構並快速寫出一至兩頁概要，再移動、重組段落，最後才逐句編修。不要等待想法完全成熟，也不要在初稿階段被局部文字卡住。</p>
      <h2>可讀性</h2>
      <ul><li>同一變項或中心現象全文使用一致名稱。</li><li>以核心觀點、主要論點、支持細節與引導語分層。</li><li>使用 hook-and-eye 方法檢查句子及段落能否前後相接。</li><li>優先使用主動語態、強動詞及合適時態。</li><li>多次修訂，刪除堆疊修飾語與不必要文字。</li></ul>
      <h2>倫理貫穿全部流程</h2>
      <p>問題選擇不得進一步邊緣化參與者；研究目的應誠實公開；資料蒐集前要評估身體、心理、社會、經濟與法律風險，保護脆弱群體並取得知情同意。</p>
      <p>蒐集期間還要處理場域同意、研究干擾、控制組利益、互惠、敏感揭露及網路資料。分析階段要保護匿名、約定資料保存與所有權、準確解釋。寫作階段不得捏造、隱藏或扭曲結果，須避免偏見語言、作者掛名濫用與重複發表。</p>`,
  },
  {
    id: 5,
    title: "導論",
    original: "The Introduction",
    summary: `
      <h2>導論的任務</h2>
      <p>導論要在有限篇幅內引起興趣、提出研究問題、放入學術脈絡、指出文獻缺口、說明研究重要性，並引出目的陳述。研究問題是導致研究必要性的困難或知識缺口，不等於之後要回答的研究問題句。</p>
      <h2>三種研究的導論</h2>
      <ul><li><strong>質性：</strong>用於概念不成熟、理論不足或現象不適合量化時，可以交代研究者位置或批判透鏡。</li><li><strong>量化：</strong>聚焦哪些因素影響結果、哪些變項相關或何種理論需要檢驗。</li><li><strong>混合：</strong>同時呈現理解變項關係及深入探索經驗的需要。</li></ul>
      <h2>缺口模型：五段式導論</h2>
      <ol><li><strong>研究問題：</strong>以讀者能理解的敘事鉤子進場，清楚指出造成研究需要的問題。</li><li><strong>相關研究：</strong>摘要整批研究的主要群組，不在導論裡逐篇報告。</li><li><strong>文獻缺口：</strong>指出未研究的群體、場域、變項、方法問題、未被聽見的聲音或需重複檢驗之處。</li><li><strong>研究重要性：</strong>具體說明對學術、實務與政策讀者的價值。</li><li><strong>目的陳述：</strong>以明確句子宣告本研究將做什麼。</li></ol>
      <h2>倒三角形搜尋</h2>
      <p>若找不到完全相同的研究，就從較廣泛的相關領域逐步縮小到本研究。導論中的文獻應以近年研究為主，經典文獻則在確有持續影響時保留。</p>
      <h2>缺口不只是「很少人研究」</h2>
      <p>提出缺口後，必須繼續說明本研究如何補救。例如加入被忽略的變項、研究新的族群、改進方法，或把研究帶入新的場域。導論的論證因此形成：問題重要、前人處理過、仍有不足，而本研究能具體處理不足。</p>`,
  },
  {
    id: 6,
    title: "目的陳述",
    original: "The Purpose Statement",
    summary: `
      <h2>目的陳述是研究的控制中心</h2>
      <p>研究問題說明「為什麼需要研究」，目的陳述說明「本研究要完成什麼」，研究問題句則將目的拆成資料需要回答的具體問題。目的陳述最好獨立成一句或短段落。</p>
      <h2>質性目的陳述</h2>
      <p>聚焦一個中心現象，使用探索、理解、描述、發現或發展等開放動詞，避免成功、正面、有效等預設結果的語言。交代研究策略、參與者、場域、暫定定義及範圍。</p>
      <blockquote>本＿＿研究採用＿＿策略，目的在探索／理解＿＿現象，研究參與者為＿＿，場域為＿＿。目前將此現象暫定義為＿＿。</blockquote>
      <h2>量化目的陳述</h2>
      <p>指出理論、主要變項及其關係或群體比較，並交代調查或實驗策略、參與者、場域與變項定義。變項通常依自變項、中介／調節變項、依變項與控制變項的順序呈現。</p>
      <blockquote>本調查／實驗研究旨在檢驗＿＿理論，探討／比較自變項＿＿與依變項＿＿的關係／差異，並控制＿＿；研究對象為＿＿，場域為＿＿。</blockquote>
      <h2>混合方法目的陳述</h2>
      <p>除了兩部分各自的目的，還必須說明設計類型、時間順序、整合方式與混合理由。</p>
      <h3>先質後量</h3><p>先探索現象與未知變項，再依主題建立量表、假設或大樣本研究。</p>
      <h3>先量後質</h3><p>先發現統計關係或差異，再訪談少數參與者以解釋重要或意外結果。</p>
      <h3>同時並行</h3><p>同步蒐集數值趨勢與詳細經驗，最後合併解釋。</p>
      <h3>轉化式</h3><p>在混合設計中加入邊緣群體、權力或社會正義議題，並說明研究希望推動的改變。</p>
      <h2>最後檢查</h2>
      <p>目的陳述中的中心現象、變項、對象與場域，必須和題目、導論、理論、文獻分類及後續研究問題使用一致名稱。若這些元素對不起來，整個研究設計就會失去連貫性。</p>`,
  },
];

const STORAGE = { meta: "reading-shelf:meta", notes: "reading-shelf:notes" };
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let meta = loadJSON(STORAGE.meta, DEFAULT_META);
let notes = loadJSON(STORAGE.notes, {});
let activeChapter = null;
let noteHistory = [];
let savedNote = "";

function loadJSON(key, fallback) {
  try { return { ...fallback, ...JSON.parse(localStorage.getItem(key) || "{}") }; }
  catch { return { ...fallback }; }
}

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function renderHome() {
  app.replaceChildren(cloneTemplate("#home-template"));
  setText("#course-title", meta.course);
  setText("#course-term", meta.term);
  setText("#book-title", meta.title);
  setText("#book-subtitle", meta.subtitle);
  setText("#book-author", meta.author);
  setText("#book-edition", meta.edition.toUpperCase());
  setText("#note-count", Object.values(notes).filter((note) => note.trim()).length);
  app.focus();
}

function renderBook() {
  app.replaceChildren(cloneTemplate("#book-template"));
  setText("#detail-course", `${meta.course} · ${meta.term}`);
  setText("#detail-title", meta.title);
  setText("#detail-subtitle", meta.subtitle);
  setText("#detail-author", meta.author);
  setText("#detail-edition", meta.edition);
  document.querySelector(".breadcrumb strong").textContent = meta.title;

  const list = document.querySelector("#chapter-list");
  chapters.forEach((chapter) => {
    const button = document.createElement("button");
    const hasNote = Boolean((notes[chapter.id] || "").trim());
    button.className = "chapter-item";
    button.dataset.chapter = chapter.id;
    button.innerHTML = `<span class="chapter-number">${String(chapter.id).padStart(2, "0")}</span>
      <span class="chapter-name"><strong>${chapter.title}</strong><span>${chapter.original}</span></span>
      <span class="chapter-progress ${hasNote ? "has-note" : ""}"><i></i>${hasNote ? "已有筆記" : "尚未筆記"}<b class="chapter-arrow">→</b></span>`;
    list.append(button);
  });

  const form = document.querySelector("#metadata-form");
  Object.entries(meta).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
  form.addEventListener("submit", saveMetadata);
  app.focus();
}

function renderReader(id) {
  activeChapter = chapters.find((chapter) => chapter.id === Number(id)) || chapters[0];
  app.replaceChildren(cloneTemplate("#reader-template"));
  setText("#reader-course", `${meta.course} · ${meta.term}`);
  setText("#reader-number", `CHAPTER ${String(activeChapter.id).padStart(2, "0")}`);
  setText("#reader-title", activeChapter.title);
  setText("#reader-original-title", activeChapter.original);
  document.querySelector("#summary-content").innerHTML = activeChapter.summary;

  const editor = document.querySelector("#note-editor");
  savedNote = notes[activeChapter.id] || "";
  editor.value = savedNote;
  noteHistory = [savedNote];
  updateNoteUI();
  editor.addEventListener("input", onNoteInput);
  editor.focus({ preventScroll: true });
}

function onNoteInput(event) {
  const value = event.target.value;
  const last = noteHistory[noteHistory.length - 1];
  if (value !== last) noteHistory.push(value);
  if (noteHistory.length > 100) noteHistory.shift();
  updateNoteUI();
}

function updateNoteUI() {
  const editor = document.querySelector("#note-editor");
  if (!editor) return;
  const dirty = editor.value !== savedNote;
  setText("#save-status", dirty ? "有尚未儲存的修改" : savedNote ? "已儲存" : "尚未儲存");
  setText("#word-count", `${editor.value.replace(/\s/g, "").length} 字`);
  document.querySelector("#undo-button").disabled = noteHistory.length <= 1;
}

function undoNote() {
  const editor = document.querySelector("#note-editor");
  if (!editor || noteHistory.length <= 1) return;
  noteHistory.pop();
  editor.value = noteHistory[noteHistory.length - 1];
  updateNoteUI();
  editor.focus();
}

function saveNote() {
  const editor = document.querySelector("#note-editor");
  if (!editor || !activeChapter) return;
  notes[activeChapter.id] = editor.value;
  localStorage.setItem(STORAGE.notes, JSON.stringify(notes));
  savedNote = editor.value;
  updateNoteUI();
  showToast("筆記已儲存在此瀏覽器");
}

function saveMetadata(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  meta = Object.fromEntries(data.entries());
  localStorage.setItem(STORAGE.meta, JSON.stringify(meta));
  showToast("文獻資訊已更新");
  renderBook();
}

function toggleMetadata(show) {
  const form = document.querySelector("#metadata-form");
  if (!form) return;
  form.hidden = show === undefined ? !form.hidden : !show;
  if (!form.hidden) form.elements.course.focus();
}

function navigate(route) {
  if (location.hash === route) routeView();
  else location.hash = route;
}

function routeView() {
  const match = location.hash.match(/^#\/book\/creswell\/chapter\/(\d+)$/);
  if (match) return renderReader(match[1]);
  if (location.hash === "#/book/creswell") return renderBook();
  renderHome();
}

document.addEventListener("click", (event) => {
  const chapterButton = event.target.closest("[data-chapter]");
  if (chapterButton) return navigate(`#/book/creswell/chapter/${chapterButton.dataset.chapter}`);
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "home") navigate("#/home");
  if (action === "open-book") navigate("#/book/creswell");
  if (action === "toggle-meta") toggleMetadata();
  if (action === "cancel-meta") toggleMetadata(false);
  if (action === "undo-note") undoNote();
  if (action === "save-note") saveNote();
  if (action === "reset" && confirm("要清除所有本機筆記與文獻資訊修改嗎？此動作無法復原。")) {
    localStorage.removeItem(STORAGE.meta);
    localStorage.removeItem(STORAGE.notes);
    meta = { ...DEFAULT_META };
    notes = {};
    showToast("本機修改已清除");
    routeView();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    if (document.querySelector("#note-editor")) {
      event.preventDefault();
      saveNote();
    }
  }
});

window.addEventListener("hashchange", routeView);
window.addEventListener("beforeunload", (event) => {
  const editor = document.querySelector("#note-editor");
  if (editor && editor.value !== savedNote) {
    event.preventDefault();
    event.returnValue = "";
  }
});

if (!location.hash) location.hash = "#/home";
else routeView();
