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
      <p>若要辨認影響因素、評估介入或檢驗理論，通常選量化；若現象尚未被理解、變項未知或既有理論不適用，通常選質性；若同時需要概化與深入理解，則考慮混合方法。</p>
      <h2>研究取向的三個組成層次</h2>
      <ol><li><strong>哲學世界觀：</strong>研究者如何理解知識、真實、價值，以及研究者與被研究者的關係。</li><li><strong>探究策略：</strong>把世界觀轉成整體程序的研究設計，例如實驗、民族誌或序列式混合方法。</li><li><strong>研究方法：</strong>實際使用的資料蒐集、分析與詮釋技術，例如封閉式問卷、訪談、觀察、統計檢定或主題編碼。</li></ol>
      <p>三層必須彼此一致。主張多元意義的研究若只允許受訪者勾選預設答案，就可能在世界觀與方法之間產生衝突；實用主義研究則可以依問題需要調動多種方法，但仍須說明整合邏輯。</p>
      <h2>四種世界觀再拆解</h2>
      <h3>後實證主義</h3><p>假定真實存在但不能被完全掌握，因此透過觀察、測量、因果模型與反覆檢驗逼近較可信的解釋。研究從理論出發，提出問題或假設，控制可能的偏誤，並以資料決定是否支持、修正或拒絕理論。</p>
      <h3>社會建構主義</h3><p>個人會依歷史與社會互動形成多元、複雜的主觀意義。研究者使用開放問題，聆聽參與者如何理解世界，同時反思自己的背景如何影響提問與解釋。</p>
      <h3>倡議／參與式</h3><p>知識生產與政治、權力和社會處境相連。研究議題常來自受壓迫或邊緣群體的需要，參與者可共同設定問題、蒐集資料與採取行動，研究成果必須能回到社群並促進改變。</p>
      <h3>實用主義</h3><p>不先承諾單一哲學系統，而由研究問題、可行方案及行動後果決定方法。研究者可以自由使用質性與量化資料，重點是方法組合能否產生有用、可行而完整的理解。</p>
      <h2>各類探究策略</h2>
      <ul><li><strong>量化調查：</strong>以樣本推估母體的態度、趨勢或意見，可採橫斷或縱貫設計。</li><li><strong>量化實驗：</strong>操弄處置並比較結果，可能採真正實驗或準實驗，也可包含單一受試者設計。</li><li><strong>民族誌：</strong>長期進入自然場域，理解共享文化群體的行為、語言與意義系統。</li><li><strong>紮根理論：</strong>由參與者資料逐步形成能解釋歷程、行動或互動的理論。</li><li><strong>個案研究：</strong>針對有界線的個案，在一定時間內使用多種資料來源進行深入描述與分析。</li><li><strong>現象學：</strong>整理多人對同一現象的生活經驗，尋找經驗的共同本質。</li><li><strong>敘事研究：</strong>蒐集個人的生命故事，依時間、情境與研究者互動重新敘說。</li><li><strong>序列式混合方法：</strong>先完成一類資料，再讓結果引導下一階段。</li><li><strong>並行式混合方法：</strong>同時蒐集兩類資料，於分析或解釋階段比較、合併。</li><li><strong>轉化式混合方法：</strong>由社會正義或倡議理論引導兩類資料的選擇與整合。</li></ul>
      <h2>方法如何落地</h2>
      <p>質性資料多為開放式訪談、觀察、文件或影音，分析從材料形成編碼與主題，詮釋重視脈絡與研究者反思；量化資料多由工具測量，分析依統計程序檢驗變項關係或群體差異；混合方法不只並列兩套結果，還要在抽樣、建構工具、分析、比較或詮釋時明確整合。</p>
      <h2>選擇設計時的完整判斷</h2>
      <ol><li><strong>研究問題：</strong>探索意義選質性，測試關係選量化，同時需要廣度與深度則考慮混合。</li><li><strong>研究者經驗：</strong>統計訓練、質性田野能力、寫作風格與管理大型計畫的能力會影響可行性。</li><li><strong>預期讀者：</strong>論文委員、期刊、專業社群或資助單位對可接受的方法可能各有慣例。</li><li><strong>倫理與資源：</strong>時間、經費、資料可得性、參與者負擔及研究風險必須納入決定。</li></ol>
      <h2>本章實作檢查表</h2>
      <ul><li>我能否用一句話說明要探索意義、檢驗關係，還是整合兩者？</li><li>世界觀、探究策略和具體方法是否前後一致？</li><li>若採混合方法，兩種資料在哪個環節真正整合？</li><li>選擇是否同時符合研究問題、個人能力、讀者期待與現實資源？</li></ul>`,
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
      <p>技術名詞應在第一次出現時定義。質性研究可採暫定與漸進定義；量化研究需較早提供精確及操作型定義；混合方法則依研究順序與權重處理。</p>
      <h2>題目是否適合研究</h2>
      <p>研究題目要先通過兩種判斷。第一是<strong>可研究性</strong>：能否接觸參與者或資料、在時間與資源內完成、具備所需技能，並符合倫理要求。第二是<strong>研究價值</strong>：能否增加知識、改善實務、回應政策或社會議題，並對預期讀者具有意義。</p>
      <p>一個題目即使可以執行，也可能只是重複已有答案；相反地，一個非常重要的問題若無法取得資料，也需要縮小範圍或改變設計。</p>
      <h2>關鍵字如何形成</h2>
      <ol><li>從暫定題目與研究問題擷取核心概念。</li><li>列出日常用語、學術術語、同義詞、上位詞與下位詞。</li><li>從重要論文的摘要、關鍵字及資料庫主題詞反向擴充。</li><li>將概念以 AND、OR 等邏輯組合，保存每次搜尋式與結果。</li><li>以引用追蹤向前找新研究，並由參考文獻向後找奠基研究。</li></ol>
      <h2>資料來源與品質判斷</h2>
      <p>綜述可快速建立領域全貌；同儕審查期刊提供較即時且經審查的研究；專書適合掌握完整理論與歷史；研討會、學位論文與研究報告可能包含尚未進入期刊的材料。網路資料不能只因容易取得就採用，應檢查作者、出版機構、證據、更新日期與可追溯性。</p>
      <p>選文時同時看相關性、研究品質、年代、研究對象與方法。經典著作提供概念根源，近期研究呈現目前爭論；兩者用途不同，不宜只取其中一種。</p>
      <h2>快速閱讀與文獻紀錄</h2>
      <p>先讀題名與摘要，再看研究問題、方法、結論及限制，判斷是否需要全文細讀。每篇文獻應立即保存完整引文與可追溯位置，並以固定欄位記錄目的、樣本、場域、方法、主要發現、限制、與本研究的關係及可引用觀念。</p>
      <h2>文獻地圖的建構方法</h2>
      <ol><li>把研究主題放在圖的頂端或中心。</li><li>依理論、變項、族群、場域、方法或年代分成主要研究群。</li><li>在各群下放入代表性研究，而不是堆滿所有來源。</li><li>標出群組之間已知的關係與相互矛盾處。</li><li>在圖的末端留下尚未被研究的位置，放入自己的研究。</li></ol>
      <p>地圖的功能是讓研究者看見「目前知道什麼、如何分類、哪裡斷裂、自己的研究接在哪裡」，也是檢查文獻回顧是否只在羅列資料的工具。</p>
      <h2>如何摘要與綜合</h2>
      <p>單篇摘要要忠實交代研究問題、目的、資料來源、樣本、方法、結果及與當前研究的關係；文獻回顧正文則應跨研究比較共同主題、差異、趨勢與矛盾。好的綜合以概念組織段落，不是按照「甲作者說、乙作者說」逐篇排隊。</p>
      <h2>不同研究取向的安排原則</h2>
      <h3>質性研究</h3><p>文獻可以在導論中建立問題，也可以獨立成章提供概念背景，或在結果後與新生成的主題比較。使用多少取決於研究是否希望讓參與者觀點先出現，以及採用的質性策略。</p>
      <h3>量化研究</h3><p>文獻通常在研究前形成理論架構、變項定義、假設與測量方式；研究後再把結果與既有證據比較。回顧必須說明變項各自的研究，以及變項彼此關係的研究。</p>
      <h3>混合方法</h3><p>安排隨設計而變：先做量化時，前端文獻通常較多；先做質性時，可以延後部分文獻；並行設計要兼顧兩邊。無論順序如何，都要說明混合方法本身的理由與相關方法文獻。</p>
      <h2>名詞定義的三種層次</h2>
      <ul><li><strong>字典式定義：</strong>提供一般可理解的基本意義。</li><li><strong>文獻式定義：</strong>引用領域中已建立的專業用法。</li><li><strong>操作型定義：</strong>說明本研究如何實際測量、辨認或使用此概念。</li></ul>
      <h2>本章實作檢查表</h2>
      <ul><li>題目是否同時具備可行性與研究價值？</li><li>搜尋是否涵蓋多個資料庫、同義詞與引用追蹤？</li><li>是否留下完整書目與一致的閱讀紀錄？</li><li>正文是否以主題綜合，而非逐篇摘要？</li><li>缺口是否清楚連到本研究將增加的知識？</li></ul>`,
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
      <p>轉化理論必須影響問題形成、社群參與、研究設計、抽樣、工具、資料蒐集、分析與報告。它會檢查研究是否呈現群體內部差異、揭示權力關係、讓社群受益並促成改變。</p>
      <h2>變項關係的進一步辨認</h2>
      <p>量化理論把抽象構念轉成可觀察的變項。研究者須分清哪些變項是原因或預測因子、哪些是結果，以及是否存在介入機制或條件差異。中介回答「影響透過什麼歷程發生」，調節回答「在什麼人、條件或程度下關係會改變」。</p>
      <p>控制變項已被研究者納入測量與分析；混淆變項則可能同時影響自變項與依變項，若未處理會產生錯誤解釋。研究寫作應明確說明每個變項在模型中的角色，不能只列名稱。</p>
      <h2>理論、模型與假設</h2>
      <p>理論提供對現象的系統性解釋，模型可把理論中的關係視覺化，假設則把預期關係轉成可由資料檢驗的陳述。理論不等於文獻清單，也不只是變項圖；它必須包含為何預期這些關係存在的命題。</p>
      <ul><li><strong>方向性假設：</strong>預測關係或差異的方向。</li><li><strong>非方向性假設：</strong>只預測存在關係或差異，不指定方向。</li><li><strong>虛無假設：</strong>以不存在關係或差異作為統計檢驗起點。</li></ul>
      <h2>量化研究的演繹程序</h2>
      <ol><li>選擇能解釋研究問題的理論。</li><li>由理論推導研究問題或假設。</li><li>把構念操作化成可測量變項。</li><li>蒐集資料並檢驗預測關係。</li><li>依結果支持、反駁、限制或修正理論。</li></ol>
      <p>研究者不應因結果不顯著就宣稱理論完全無效，也不能因單一研究支持便視為證明；解釋要考慮樣本、測量、設計與適用範圍。</p>
      <h2>如何尋找合適理論</h2>
      <p>可從研究問題涉及的學科開始，搜尋變項名稱加上 theory、model 或 framework，閱讀文獻中反覆引用的來源，再追溯理論原始著作。選擇時檢查理論是否涵蓋主要變項、曾用於相近族群或場域、具有可檢驗命題，且解釋範圍與研究層次相符。</p>
      <h2>量化理論段落的完整結構</h2>
      <ol><li>指出理論名稱、提出者與來源學科。</li><li>說明理論要解決的問題及適用範圍。</li><li>界定主要構念與彼此命題。</li><li>整理過去如何應用及有哪些證據。</li><li>把理論中的構念對應到本研究變項。</li><li>以文字或圖示提出預期關係與假設。</li></ol>
      <h2>質性研究中的理論選項</h2>
      <p>理論若作為前置透鏡，會影響問題、樣本與詮釋，例如研究文化模式或權力差異；若採紮根理論，理論則是從資料比較與類別關係中形成的研究結果。現象學常以經驗本質為中心，個案研究可能形成多層次主題，敘事研究可能借用身份或生命歷程觀點。是否使用明示理論取決於研究策略與目的。</p>
      <h2>混合方法中的理論位置</h2>
      <p>混合研究可在量化部分先檢驗理論，再用質性資料解釋機制；也可先由質性資料形成概念，再於量化階段測試。若採轉化框架，理論不只是最後解釋結果，而要貫穿參與者關係、問題設定、資料類型、整合方式與行動建議。</p>
      <h2>本章實作檢查表</h2>
      <ul><li>研究中的理論是要被檢驗、用作透鏡，還是由資料生成？</li><li>每一變項的角色及變項之間的理由是否清楚？</li><li>理論的範圍、研究層次與研究對象是否相配？</li><li>理論放置位置是否符合研究取向並能引導後續設計？</li><li>若使用轉化框架，它是否真正影響整個研究流程？</li></ul>`,
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
      <p>蒐集期間還要處理場域同意、研究干擾、控制組利益、互惠、敏感揭露及網路資料。分析階段要保護匿名、約定資料保存與所有權、準確解釋。寫作階段不得捏造、隱藏或扭曲結果，須避免偏見語言、作者掛名濫用與重複發表。</p>
      <h2>把研究計畫看成一組論證</h2>
      <p>計畫書不是章節清單，而是一條可追蹤的推理鏈：存在重要問題，既有研究尚未充分處理，研究目的能回應此缺口，所選設計能產生需要的證據，分析能回答研究問題，品質與倫理措施能讓結果可信且不傷害參與者。</p>
      <p>每個章節都應服務同一核心問題。題目、問題陳述、目的、研究問題、理論、方法與預期結果若使用不同概念或對象，就表示論證鏈斷裂。</p>
      <h2>三種計畫書的細部結構</h2>
      <h3>質性計畫</h3><p>設計通常保留彈性，讓問題與程序可隨現場理解深化，但仍須預先說明研究策略、場域與參與者、研究者角色、進入場域方式、資料來源、分析步驟、可信度程序、倫理及預期呈現形式。</p>
      <h3>量化計畫</h3><p>結構較固定，需事前界定理論、假設、變項、母體、抽樣、工具、介入程序與統計分析。效度與信度、統計假設、缺失資料及可能限制也應預先處理。</p>
      <h3>混合方法計畫</h3><p>除完整交代兩套方法外，還須畫出時間順序、優先權與整合節點，說明為何單一資料不足，以及一種結果將如何建構、連接、合併或嵌入另一種資料。</p>
      <h2>從概要到完整初稿</h2>
      <ol><li>先依學校、資助機構或期刊規範建立標題層級。</li><li>用一至兩頁寫下整體論證，暫時不追求完美措辭。</li><li>把每一段的中心句列出，檢查順序是否能帶讀者前進。</li><li>補入支持證據、方法細節與必要引文。</li><li>分開進行結構修訂、段落修訂與句子校訂。</li></ol>
      <p>寫作能暴露思考空缺，因此不要等到「完全想清楚」才動筆。先生成文字，再透過移動、刪減、展開與重寫形成清楚論證。</p>
      <h2>段落與銜接的操作方法</h2>
      <p>每段以一個中心觀點為主，接著提供證據、例子或解釋，最後連回研究論點。hook-and-eye 的做法是讓前一句的重要詞或概念在下一句得到承接，同樣也讓前一段的結尾為下一段開路。</p>
      <p>標題層級應反映論點層次；平行段落使用一致語法；相同構念持續使用同一名稱。主動語態通常能清楚呈現誰做了什麼，但描述程序時可依學科慣例調整。</p>
      <h2>時態與研究者聲音</h2>
      <ul><li>已完成的前人研究通常用過去式。</li><li>理論主張與普遍成立的知識可用現在式。</li><li>研究計畫中的預定程序可用未來式，完成後則改為過去式。</li><li>第一人稱是否使用取決於研究取向與格式規範；質性研究尤其需要清楚呈現研究者位置與反思。</li></ul>
      <h2>倫理審查與知情同意</h2>
      <p>資料蒐集前應取得相關倫理審查與場域許可。知情同意需以參與者能理解的方式說明目的、程序、時間、風險、可能利益、保密方式、自願性及退出權利。未成年人、受監禁者、認知能力受限者或權力關係中的成員需要額外保障。</p>
      <h2>研究各階段的倫理風險</h2>
      <ul><li><strong>選題：</strong>避免把群體標籤化，並思考研究是否真正回應其需要。</li><li><strong>招募：</strong>避免權威壓力或不當誘因，公平選擇參與者。</li><li><strong>蒐集：</strong>降低干擾與傷害，處理敏感資訊、退出與意外揭露。</li><li><strong>分析：</strong>去識別化、妥善保存資料，不忽略反例或竄改結果。</li><li><strong>報告：</strong>誠實呈現限制，避免抄襲、重複發表、掛名不當與帶偏見的語言。</li><li><strong>研究結束：</strong>依承諾保存或銷毀資料，適當回饋參與者與社群。</li></ul>
      <h2>本章實作檢查表</h2>
      <ul><li>研究計畫的各部分是否形成同一條論證鏈？</li><li>格式是否符合預期讀者與機構規範？</li><li>段落中心、層級、銜接、語態與時態是否一致？</li><li>是否對每一研究階段提出具體倫理保護，而非只寫「遵守倫理」？</li><li>參與者能否真正理解並自由決定是否參與？</li></ul>`,
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
      <p>提出缺口後，必須繼續說明本研究如何補救。例如加入被忽略的變項、研究新的族群、改進方法，或把研究帶入新的場域。導論的論證因此形成：問題重要、前人處理過、仍有不足，而本研究能具體處理不足。</p>
      <h2>研究問題與研究問題句不同</h2>
      <p><strong>研究問題（research problem）</strong>是需要被處理的實務困難、爭議或知識不足；<strong>研究問題句（research question）</strong>則是研究將以資料回答的明確問句。導論先建立前者，後續才把目的拆成後者。</p>
      <p>一個主題只是研究範圍，例如「大學生線上學習」；只有指出其中的困難或未知，例如哪些條件造成參與落差、現有解釋為何不足，才形成研究問題。</p>
      <h2>敘事鉤子的寫法</h2>
      <p>第一句應讓廣泛讀者理解問題並願意繼續閱讀，可用值得注意的現象、矛盾、普遍困難或具有代表性的證據進場。鉤子要直接連到研究問題，不宜用字典定義開頭，也不要以過度寬泛、聳動或無法證實的主張取代論證。</p>
      <p>開場後逐步縮小焦點：先呈現廣泛問題，再界定受影響的人、場域與後果，最後指向研究所處的具體脈絡。</p>
      <h2>如何在導論中使用文獻</h2>
      <p>導論只選能證明問題存在、顯示研究群組與暴露缺口的關鍵文獻。以主題群組綜合，不逐篇詳述方法；完整的理論與研究整理留給文獻回顧章。量化導論通常較早引入大量研究與變項，質性導論可較節制，混合方法則依順序與權重調整。</p>
      <h2>六類常見文獻缺口</h2>
      <ul><li><strong>證據不足：</strong>重要現象尚缺乏系統性研究。</li><li><strong>結果矛盾：</strong>既有研究得到不一致答案，需要釐清條件。</li><li><strong>群體或場域缺漏：</strong>某些人、地區、組織或文化脈絡未被納入。</li><li><strong>聲音缺席：</strong>受影響者的經驗被外部觀點取代，特別適合質性探索。</li><li><strong>方法限制：</strong>測量、樣本、設計或資料類型不足，需要改進或混合。</li><li><strong>理論待驗證：</strong>理論尚未用於新情境，或關鍵關係仍需重複檢驗。</li></ul>
      <p>缺口必須有文獻證據，且要與研究實際能做的事相稱。不能一方面宣稱整個領域空白，另一方面只研究一個非常狹窄的樣本。</p>
      <h2>研究重要性的四類讀者</h2>
      <ul><li><strong>研究者：</strong>增加概念、理論、方法或新證據。</li><li><strong>實務工作者：</strong>改善決策、流程、介入或專業理解。</li><li><strong>政策制定者：</strong>提供制度、資源分配或規範所需依據。</li><li><strong>參與者與社群：</strong>呈現經驗、改善處境或增加發聲與行動能力。</li></ul>
      <p>不要只寫「本研究具有學術與實務價值」，而要分別指出誰能使用什麼結果、用來做什麼。</p>
      <h2>五段之間的推理關係</h2>
      <blockquote>現實或知識上有一個重要問題 → 文獻已提供部分答案 → 但仍存在具體不足 → 補足它會讓特定讀者受益 → 因此本研究將執行明確目的。</blockquote>
      <p>目的陳述必須自然出現在這條推理鏈的終點；如果更換目的而前四段仍完全成立，通常表示導論寫得過於籠統。</p>
      <h2>三種取向的導論重心</h2>
      <h3>質性</h3><p>強調現象意義尚未被理解、參與者聲音未被呈現，或現有理論不適合特定脈絡。研究問題保持開放，讓現場觀點引導理解。</p>
      <h3>量化</h3><p>強調變項關係、群體差異、因素影響或理論預測需要檢驗，並由文獻建立可測量的問題。</p>
      <h3>混合方法</h3><p>除了實質問題，也要建立方法上的不足：數值趨勢缺少經驗解釋，深入個案無法顯示普遍分布，或任何單一資料都不能完整回答問題。</p>
      <h2>本章實作檢查表</h2>
      <ul><li>開頭是否迅速指出一個真正的研究問題，而不只是主題？</li><li>文獻是否依群組呈現已知內容，並提供缺口證據？</li><li>缺口是否具體到族群、場域、變項、聲音、方法或理論？</li><li>重要性是否逐一說明對哪些讀者有何用途？</li><li>目的陳述是否直接回應前面建立的問題與缺口？</li></ul>`,
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
      <p>目的陳述中的中心現象、變項、對象與場域，必須和題目、導論、理論、文獻分類及後續研究問題使用一致名稱。若這些元素對不起來，整個研究設計就會失去連貫性。</p>
      <h2>目的陳述的基本要求</h2>
      <p>目的陳述是整篇研究最重要的單一句子之一，應以「本研究的目的為……」等清楚提示語開頭，集中說明一個主要意圖。它不等於研究問題的重要性、不列出所有程序，也不提前宣稱研究會得到何種正面結果。</p>
      <p>讀者應能從目的陳述辨認研究取向、研究焦點、參與者或資料來源、場域，以及必要的設計線索。後續研究問題、資料蒐集和分析都由此展開。</p>
      <h2>質性目的陳述的必要元素</h2>
      <ol><li>使用 purpose、intent 或 objective 等明確提示。</li><li>指出採用的質性探究策略。</li><li>使用探索、理解、描述、發現、發展意義等非方向性動詞。</li><li>聚焦單一中心現象，避免同時塞入大量變項關係。</li><li>交代研究參與者與研究場域。</li><li>為中心現象提供暫定、非僵化的工作定義。</li><li>使用中性語言，不預設研究必然成功或產生某種結果。</li></ol>
      <p>質性研究可以承認設計會隨現場發展，但「彈性」不等於目的模糊。研究者仍需清楚界定想理解的現象及初始範圍。</p>
      <h2>量化目的陳述的必要元素</h2>
      <ol><li>指出要檢驗、解釋、預測或比較的主要意圖。</li><li>必要時說明所檢驗的理論或概念模型。</li><li>依因果或分析順序列出自變項、中介或調節變項、依變項與控制變項。</li><li>說明變項之間預期的關係，或要比較的群體。</li><li>指出調查、相關或實驗等研究策略。</li><li>交代研究對象、樣本來源與場域。</li><li>簡要提供關鍵變項的一般定義或操作方向。</li></ol>
      <p>若是實驗研究，目的通常聚焦處置對結果的影響；若是調查或相關研究，則聚焦變項的關聯、預測或群體差異。動詞必須與實際設計能支持的推論一致，非實驗資料不宜輕易使用「造成」。</p>
      <h2>混合方法目的陳述的雙重任務</h2>
      <p>混合方法目的必須同時交代<strong>內容目的</strong>與<strong>混合目的</strong>。內容目的說明質性部分要探索什麼、量化部分要檢驗什麼；混合目的說明為何需要兩種資料，以及整合後將補足何種單一方法限制。</p>
      <ul><li><strong>時間：</strong>兩類資料是先後還是同時蒐集。</li><li><strong>優先權：</strong>兩部分權重相等，或其中一種為主要方法。</li><li><strong>整合點：</strong>在抽樣、工具發展、資料蒐集、分析或最終詮釋何處連接。</li><li><strong>整合功能：</strong>用來解釋、建構、比較、驗證、擴充或轉化。</li></ul>
      <h2>四種混合設計的寫作邏輯</h2>
      <h3>先質後量：探索式序列</h3><p>先以質性資料發現重要主題、語言或未知變項，再據此建構工具、分類或假設，於較大樣本檢驗。目的句要交代第二階段如何由第一階段結果發展而來。</p>
      <h3>先量後質：解釋式序列</h3><p>先找出統計趨勢、差異、關係或異常案例，再選擇參與者進行質性追問。目的句要指出質性資料要解釋哪一項量化結果。</p>
      <h3>同時並行</h3><p>在相近時間蒐集兩類資料，分別分析後比較或合併。目的句要說明兩種結果是用來相互驗證、補充不同面向，或處理彼此不一致。</p>
      <h3>轉化式設計</h3><p>由倡議、參與或社會正義框架決定研究問題、合作方式與資料整合，目的陳述還要指出研究針對的不平等及希望促成的改變。</p>
      <h2>常見錯誤</h2>
      <ul><li>把「探討」當成萬用詞，卻未說清楚要探索意義、檢驗關係或比較群體。</li><li>在質性目的中塞入自變項與依變項，使研究過早封閉。</li><li>在量化目的中遺漏變項角色、理論或研究對象。</li><li>混合方法只寫「採用質性與量化」，未交代順序、整合與必要性。</li><li>目的中的名詞與題目、研究問題或方法章不一致。</li></ul>
      <h2>從目的到後續設計</h2>
      <p>目的陳述寫好後，可逐項往下轉換：中心現象或變項成為研究問題的核心；參與者與場域決定抽樣；探究動詞決定資料類型與分析；理論和變項關係決定假設；混合理由決定整合程序。因此，目的陳述也是檢查整體研究一致性的基準。</p>
      <h2>本章實作檢查表</h2>
      <ul><li>是否以一句或短段落明確標示研究目的？</li><li>動詞是否符合質性、量化或混合方法的推論能力？</li><li>現象或變項、對象、場域與策略是否完整？</li><li>混合方法是否交代順序、權重、整合方式與混合理由？</li><li>目的中的用詞是否與題目、導論、理論和研究問題完全一致？</li></ul>`,
  },
];

const STORAGE = {
  meta: "reading-shelf:meta",
  notes: "reading-shelf:notes",
  noteTimes: "reading-shelf:note-times",
};
const CLOUD_CONFIG = window.READING_SHELF_CONFIG || {};
const cloud = window.supabase && CLOUD_CONFIG.supabaseUrl && CLOUD_CONFIG.supabaseAnonKey
  ? window.supabase.createClient(CLOUD_CONFIG.supabaseUrl, CLOUD_CONFIG.supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    })
  : null;
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const authDialog = document.querySelector("#auth-dialog");
const authForm = document.querySelector("#auth-form");
let meta = loadJSON(STORAGE.meta, DEFAULT_META);
let notes = loadJSON(STORAGE.notes, {});
let noteTimes = loadJSON(STORAGE.noteTimes, {});
let activeChapter = null;
let noteHistory = [];
let savedNote = "";
let noteSaveMessage = "";
let cloudUser = null;
let cloudSyncing = false;

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

function setCloudStatus(message, state = "") {
  const badge = document.querySelector("#sync-badge");
  setText("#sync-status", message);
  badge?.classList.toggle("is-error", state === "error");
  badge?.classList.toggle("is-syncing", state === "syncing");
}

function updateAuthUI() {
  setText("#auth-button", cloudUser ? "登出" : "登入同步");
  if (!cloud) return setCloudStatus("雲端設定無法載入", "error");
  if (cloudSyncing) return setCloudStatus("正在同步…", "syncing");
  setCloudStatus(cloudUser ? "雲端同步已開啟" : "本機模式");
}

function openAuthDialog() {
  if (!cloud) return showToast("雲端同步目前無法使用");
  setText("#auth-message", "");
  authDialog.showModal();
  document.querySelector("#auth-email").focus();
}

function closeAuthDialog() {
  authDialog.close();
}

async function submitAuth(event) {
  event.preventDefault();
  if (!cloud) return;
  const email = document.querySelector("#auth-email").value.trim();
  const button = document.querySelector("#auth-submit");
  button.disabled = true;
  setText("#auth-message", "正在寄送登入連結…");
  const redirectTo = `${location.origin}${location.pathname}`;
  const { error } = await cloud.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo },
  });
  button.disabled = false;
  if (error) {
    setText("#auth-message", `寄送失敗：${error.message}`);
    return;
  }
  setText("#auth-message", "登入連結已寄出，請到信箱開啟連結。");
}

async function handleAuthAction() {
  if (!cloudUser) return openAuthDialog();
  const { error } = await cloud.auth.signOut({ scope: "local" });
  if (error) return showToast(`登出失敗：${error.message}`);
  cloudUser = null;
  updateAuthUI();
  showToast("此裝置已登出，筆記仍保留在本機");
}

function persistNotes() {
  localStorage.setItem(STORAGE.notes, JSON.stringify(notes));
  localStorage.setItem(STORAGE.noteTimes, JSON.stringify(noteTimes));
}

function refreshNotesOnScreen() {
  const editor = document.querySelector("#note-editor");
  if (editor && activeChapter && editor.value === savedNote) {
    savedNote = notes[activeChapter.id] || "";
    editor.value = savedNote;
    noteHistory = [savedNote];
    noteSaveMessage = savedNote ? "已同步到雲端" : "尚未儲存";
    updateNoteUI();
    return;
  }
  if (location.hash === "#/home") setText("#note-count", Object.values(notes).filter((note) => note.trim()).length);
  if (location.hash === "#/book/creswell") renderBook();
}

async function upsertCloudNotes(rows) {
  if (!rows.length) return { error: null };
  return cloud.from("reading_notes").upsert(rows, {
    onConflict: "user_id,book_id,chapter_id",
  });
}

async function syncAllNotes() {
  if (!cloud || !cloudUser || cloudSyncing) return;
  cloudSyncing = true;
  updateAuthUI();
  const { data, error } = await cloud
    .from("reading_notes")
    .select("chapter_id,note,updated_at")
    .eq("book_id", "creswell");

  if (error) {
    cloudSyncing = false;
    setCloudStatus("雲端同步失敗", "error");
    return showToast(`雲端讀取失敗：${error.message}`);
  }

  const remoteByChapter = Object.fromEntries((data || []).map((row) => [String(row.chapter_id), row]));
  const uploads = [];
  chapters.forEach((chapter) => {
    const id = String(chapter.id);
    const localNote = notes[id] || "";
    const localTime = Date.parse(noteTimes[id] || "") || 0;
    const remote = remoteByChapter[id];
    const remoteTime = Date.parse(remote?.updated_at || "") || 0;

    if (remote && remoteTime >= localTime) {
      notes[id] = remote.note || "";
      noteTimes[id] = remote.updated_at;
      return;
    }

    if (localNote || localTime) {
      const updatedAt = noteTimes[id] || new Date().toISOString();
      noteTimes[id] = updatedAt;
      uploads.push({
        user_id: cloudUser.id,
        book_id: "creswell",
        chapter_id: chapter.id,
        note: localNote,
        updated_at: updatedAt,
      });
    }
  });

  const { error: uploadError } = await upsertCloudNotes(uploads);
  cloudSyncing = false;
  if (uploadError) {
    persistNotes();
    setCloudStatus("部分筆記待同步", "error");
    return showToast(`雲端寫入失敗：${uploadError.message}`);
  }

  persistNotes();
  updateAuthUI();
  refreshNotesOnScreen();
  showToast("筆記已與雲端同步");
}

async function syncNoteToCloud(chapterId, note, updatedAt) {
  if (!cloud || !cloudUser) return false;
  cloudSyncing = true;
  updateAuthUI();
  const { error } = await upsertCloudNotes([{
    user_id: cloudUser.id,
    book_id: "creswell",
    chapter_id: Number(chapterId),
    note,
    updated_at: updatedAt,
  }]);
  cloudSyncing = false;
  if (error) {
    setCloudStatus("筆記待同步", "error");
    return false;
  }
  updateAuthUI();
  return true;
}

async function initializeCloud() {
  updateAuthUI();
  if (!cloud) return;
  const { data, error } = await cloud.auth.getSession();
  if (error) setCloudStatus("登入狀態讀取失敗", "error");
  cloudUser = data?.session?.user || null;
  updateAuthUI();
  if (cloudUser) await syncAllNotes();

  cloud.auth.onAuthStateChange((event, session) => {
    cloudUser = session?.user || null;
    updateAuthUI();
    if (cloudUser && event !== "INITIAL_SESSION") setTimeout(syncAllNotes, 0);
  });
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
  noteSaveMessage = savedNote ? (cloudUser ? "已同步到雲端" : "已儲存在此瀏覽器") : "";
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
  setText("#save-status", dirty ? "有尚未儲存的修改" : noteSaveMessage || (savedNote ? "已儲存" : "尚未儲存"));
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

async function saveNote() {
  const editor = document.querySelector("#note-editor");
  if (!editor || !activeChapter) return;
  notes[activeChapter.id] = editor.value;
  const updatedAt = new Date().toISOString();
  noteTimes[activeChapter.id] = updatedAt;
  persistNotes();
  savedNote = editor.value;
  noteSaveMessage = cloudUser ? "正在同步到雲端…" : "已儲存在此瀏覽器";
  updateNoteUI();
  if (!cloudUser) return showToast("筆記已儲存在此瀏覽器");

  const synced = await syncNoteToCloud(activeChapter.id, editor.value, updatedAt);
  noteSaveMessage = synced ? "已同步到雲端" : "已存本機，雲端同步失敗";
  updateNoteUI();
  showToast(synced ? "筆記已同步到雲端" : "筆記已存本機，稍後請再試同步");
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
  if (action === "auth") handleAuthAction();
  if (action === "close-auth") closeAuthDialog();
  if (action === "reset" && confirm("要清除所有本機筆記與文獻資訊修改嗎？此動作無法復原。")) {
    localStorage.removeItem(STORAGE.meta);
    localStorage.removeItem(STORAGE.notes);
    localStorage.removeItem(STORAGE.noteTimes);
    meta = { ...DEFAULT_META };
    notes = {};
    noteTimes = {};
    showToast("本機修改已清除");
    routeView();
  }
});

authForm.addEventListener("submit", submitAuth);

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

initializeCloud();
