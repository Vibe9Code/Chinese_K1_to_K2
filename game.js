const vehicles = [
  { key: "car", name: "汽車", icon: "🚗", zone: "road", zoneName: "馬路", classifier: "輛" },
  { key: "bus", name: "巴士", icon: "🚌", zone: "road", zoneName: "馬路", classifier: "輛" },
  { key: "plane", name: "飛機", icon: "✈️", zone: "sky", zoneName: "天空", classifier: "架" },
  { key: "ship", name: "輪船", icon: "🚢", zone: "sea", zoneName: "海洋", classifier: "艘" },
  { key: "mtr", name: "港鐵", icon: "🚇", zone: "rail", zoneName: "路軌", classifier: "列" }
];

const numberWords = {
  1: "一",
  2: "兩",
  3: "三",
  4: "四",
  5: "五"
};

const chineseQuestions = [
  { category: "食物", question: "哥哥最愛吃什麼？", options: ["小蟲", "馬兒", "花朵", "糖果"], answer: "糖果", sentence: "哥哥最愛吃糖果。" },
  { category: "動物", question: "小狗會怎樣叫？", options: ["喵喵", "汪汪", "咩咩", "呱呱"], answer: "汪汪", sentence: "小狗會汪汪叫。" },
  { category: "顏色", question: "天空是什麼顏色？", options: ["紅色", "藍色", "黑色", "綠色"], answer: "藍色", sentence: "天空是藍色。" },
  { category: "天氣", question: "下雨時要用什麼？", options: ["雨傘", "太陽帽", "拖鞋", "書包"], answer: "雨傘", sentence: "下雨時要用雨傘。" },
  { category: "生活", question: "早上起床後要刷什麼？", options: ["牙齒", "鞋子", "枕頭", "玩具"], answer: "牙齒", sentence: "早上起床後要刷牙齒。" },
  { category: "身體", question: "我們用什麼看東西？", options: ["耳朵", "眼睛", "鼻子", "手指"], answer: "眼睛", sentence: "我們用眼睛看東西。" },
  { category: "身體", question: "我們用什麼聽聲音？", options: ["耳朵", "嘴巴", "腳", "頭髮"], answer: "耳朵", sentence: "我們用耳朵聽聲音。" },
  { category: "交通", question: "小朋友橫過馬路要看什麼？", options: ["紅綠燈", "雪糕", "玩具", "花朵"], answer: "紅綠燈", sentence: "小朋友橫過馬路要看紅綠燈。" },
  { category: "交通", question: "巴士在哪裡行？", options: ["馬路", "天空", "海洋", "床上"], answer: "馬路", sentence: "巴士在馬路上行駛。" },
  { category: "交通", question: "飛機在哪裡飛？", options: ["天空", "廚房", "海底", "草地"], answer: "天空", sentence: "飛機在天空飛。" },
  { category: "動物", question: "魚住在哪裡？", options: ["水裏", "天空", "書包", "馬路"], answer: "水裏", sentence: "魚住在水裏。" },
  { category: "天氣", question: "太陽出來時天氣通常怎樣？", options: ["晴天", "下雪", "打雷", "黑夜"], answer: "晴天", sentence: "太陽出來時天氣通常是晴天。" },
  { category: "禮貌", question: "睡覺前會說什麼？", options: ["早晨", "晚安", "謝謝", "再見"], answer: "晚安", sentence: "睡覺前會說晚安。" },
  { category: "禮貌", question: "收到禮物要說什麼？", options: ["對不起", "謝謝", "不要", "快走"], answer: "謝謝", sentence: "收到禮物要說謝謝。" },
  { category: "禮貌", question: "做錯事要說什麼？", options: ["對不起", "好味", "早晨", "漂亮"], answer: "對不起", sentence: "做錯事要說對不起。" },
  { category: "生活", question: "洗手要用什麼？", options: ["水和梘液", "泥沙", "顏色筆", "膠紙"], answer: "水和梘液", sentence: "洗手要用水和梘液。" },
  { category: "生活", question: "口渴時可以喝什麼？", options: ["水", "石頭", "紙巾", "鞋子"], answer: "水", sentence: "口渴時可以喝水。" },
  { category: "動物", question: "小貓愛吃什麼？", options: ["魚", "樹葉", "積木", "鉛筆"], answer: "魚", sentence: "小貓愛吃魚。" },
  { category: "生活", question: "冬天很冷，要穿什麼？", options: ["外套", "泳衣", "拖鞋", "太陽眼鏡"], answer: "外套", sentence: "冬天很冷，要穿外套。" },
  { category: "生活", question: "上學要帶什麼？", options: ["書包", "枕頭", "煎鍋", "肥皂"], answer: "書包", sentence: "上學要帶書包。" },
  { category: "位置", question: "媽媽煮飯會在哪裡？", options: ["廚房", "睡房", "公園", "巴士站"], answer: "廚房", sentence: "媽媽煮飯會在廚房。" },
  { category: "位置", question: "我們睡覺會在哪裡？", options: ["床上", "馬路", "操場", "海裏"], answer: "床上", sentence: "我們睡覺會在床上。" },
  { category: "動物", question: "小鳥會在哪裡飛？", options: ["天空", "水裏", "地下", "書包裏"], answer: "天空", sentence: "小鳥會在天空飛。" },
  { category: "生活", question: "洗澡要用什麼？", options: ["水", "沙", "膠水", "鉛筆"], answer: "水", sentence: "洗澡要用水。" },
  { category: "生活", question: "畫畫要用什麼？", options: ["顏色筆", "牙刷", "碗", "襪子"], answer: "顏色筆", sentence: "畫畫要用顏色筆。" },
  { category: "生活", question: "吃飯要用什麼？", options: ["碗", "鞋", "枕頭", "雨傘"], answer: "碗", sentence: "吃飯要用碗。" },
  { category: "生活", question: "天黑了，我們要開什麼？", options: ["燈", "雪櫃", "鞋櫃", "書包"], answer: "燈", sentence: "天黑了，我們要開燈。" },
  { category: "動作", question: "手髒了要怎樣？", options: ["洗手", "睡覺", "唱歌", "跳舞"], answer: "洗手", sentence: "手髒了要洗手。" },
  { category: "動作", question: "牙齒髒了要怎樣？", options: ["刷牙", "畫畫", "跑步", "拍手"], answer: "刷牙", sentence: "牙齒髒了要刷牙。" },
  { category: "動作", question: "小朋友開心時會怎樣？", options: ["笑", "哭", "睡", "跌倒"], answer: "笑", sentence: "小朋友開心時會笑。" },
  { category: "動作", question: "小朋友傷心時可能會怎樣？", options: ["哭", "飛", "游水", "煮飯"], answer: "哭", sentence: "小朋友傷心時可能會哭。" },
  { category: "顏色", question: "蘋果是什麼顏色？", options: ["紅色", "黑色", "紫色", "灰色"], answer: "紅色", sentence: "蘋果是紅色。" },
  { category: "顏色", question: "香蕉是什麼顏色？", options: ["黃色", "藍色", "白色", "綠色"], answer: "黃色", sentence: "香蕉是黃色。" },
  { category: "顏色", question: "草地是什麼顏色？", options: ["綠色", "紅色", "黑色", "粉紅色"], answer: "綠色", sentence: "草地是綠色。" },
  { category: "顏色", question: "雪是什麼顏色？", options: ["白色", "橙色", "啡色", "紫色"], answer: "白色", sentence: "雪是白色。" },
  { category: "天氣", question: "熱的時候可以開什麼？", options: ["風扇", "暖爐", "毛衣", "手套"], answer: "風扇", sentence: "熱的時候可以開風扇。" },
  { category: "生活", question: "冷的時候可以穿什麼？", options: ["外套", "泳鏡", "短褲", "拖鞋"], answer: "外套", sentence: "冷的時候可以穿外套。" },
  { category: "生活", question: "去公園可以玩什麼？", options: ["滑梯", "牙刷", "飯碗", "枕頭"], answer: "滑梯", sentence: "去公園可以玩滑梯。" },
  { category: "人物", question: "去學校會見到誰？", options: ["老師", "醫生", "廚師", "司機"], answer: "老師", sentence: "去學校會見到老師。" },
  { category: "人物", question: "生病了要去見誰？", options: ["醫生", "老師", "司機", "畫家"], answer: "醫生", sentence: "生病了要去見醫生。" },
  { category: "人物", question: "剪頭髮要去找誰？", options: ["髮型師", "消防員", "警察", "郵差"], answer: "髮型師", sentence: "剪頭髮要去找髮型師。" },
  { category: "人物", question: "火警時可以找誰幫忙？", options: ["消防員", "歌手", "廚師", "畫家"], answer: "消防員", sentence: "火警時可以找消防員幫忙。" },
  { category: "人物", question: "有人迷路時可以找誰？", options: ["警察", "玩具熊", "雪糕", "鉛筆"], answer: "警察", sentence: "有人迷路時可以找警察。" },
  { category: "顏色", question: "牛奶通常是什麼顏色？", options: ["白色", "綠色", "黑色", "橙色"], answer: "白色", sentence: "牛奶通常是白色。" },
  { category: "食物", question: "雞蛋可以用來做什麼？", options: ["煎蛋", "洗頭", "畫牆", "穿鞋"], answer: "煎蛋", sentence: "雞蛋可以用來做煎蛋。" },
  { category: "食物", question: "生日會吃什麼？", options: ["蛋糕", "牙膏", "石頭", "雨衣"], answer: "蛋糕", sentence: "生日會吃蛋糕。" },
  { category: "禮貌", question: "看到朋友要說什麼？", options: ["你好", "晚安", "對不起", "不要"], answer: "你好", sentence: "看到朋友要說你好。" },
  { category: "禮貌", question: "離開時要說什麼？", options: ["再見", "早晨", "謝謝", "很冷"], answer: "再見", sentence: "離開時要說再見。" },
  { category: "禮貌", question: "想請人幫忙可以說什麼？", options: ["請幫忙", "快哭", "很熱", "不要睡"], answer: "請幫忙", sentence: "想請人幫忙可以說請幫忙。" },
  { category: "禮貌", question: "別人幫了你要說什麼？", options: ["謝謝", "對不起", "快走", "沒有"], answer: "謝謝", sentence: "別人幫了你要說謝謝。" },
  { category: "禮貌", question: "早上見到老師要說什麼？", options: ["早晨", "晚安", "再見", "不要"], answer: "早晨", sentence: "早上見到老師要說早晨。" },
  { category: "生活", question: "吃飯前要先做什麼？", options: ["洗手", "睡覺", "跑步", "畫畫"], answer: "洗手", sentence: "吃飯前要先洗手。" },
  { category: "情緒", question: "眼淚流出來表示可能怎樣？", options: ["傷心", "口渴", "肚餓", "很熱"], answer: "傷心", sentence: "眼淚流出來表示可能很傷心。" },
  { category: "生活", question: "肚子餓時想做什麼？", options: ["吃東西", "洗澡", "穿鞋", "刷牙"], answer: "吃東西", sentence: "肚子餓時想吃東西。" },
  { category: "生活", question: "很累時想做什麼？", options: ["休息", "跳高", "唱歌", "洗碗"], answer: "休息", sentence: "很累時想休息。" },
  { category: "身體", question: "踢足球要用什麼？", options: ["腳", "耳朵", "鼻子", "頭髮"], answer: "腳", sentence: "踢足球要用腳。" },
  { category: "身體", question: "拍手要用什麼？", options: ["手", "腳", "眼睛", "嘴巴"], answer: "手", sentence: "拍手要用手。" },
  { category: "身體", question: "聞花香要用什麼？", options: ["鼻子", "耳朵", "膝頭", "手指"], answer: "鼻子", sentence: "聞花香要用鼻子。" },
  { category: "身體", question: "說話要用什麼？", options: ["嘴巴", "眼睛", "腳趾", "頭髮"], answer: "嘴巴", sentence: "說話要用嘴巴。" },
  { category: "身體", question: "看書時要用什麼？", options: ["眼睛", "耳朵", "鞋子", "雨衣"], answer: "眼睛", sentence: "看書時要用眼睛。" },
  { category: "生活", question: "洗頭要用什麼？", options: ["洗頭水", "膠紙", "積木", "蠟筆"], answer: "洗頭水", sentence: "洗頭要用洗頭水。" },
  { category: "生活", question: "擦鼻涕要用什麼？", options: ["紙巾", "碗", "襪子", "書包"], answer: "紙巾", sentence: "擦鼻涕要用紙巾。" },
  { category: "天氣", question: "下雨後地上可能會有什麼？", options: ["水 puddle", "太陽", "雪人", "沙發"], answer: "水 puddle", sentence: "下雨後地上可能會有水 puddle。" },
  { category: "天氣", question: "出太陽時可以戴什麼？", options: ["太陽帽", "雨靴", "手套", "圍巾"], answer: "太陽帽", sentence: "出太陽時可以戴太陽帽。" },
  { category: "位置", question: "去海邊可以看到什麼？", options: ["沙灘", "雪山", "課室", "廚房"], answer: "沙灘", sentence: "去海邊可以看到沙灘。" },
  { category: "生活", question: "游泳時可以戴什麼？", options: ["泳鏡", "書包", "手套", "皮鞋"], answer: "泳鏡", sentence: "游泳時可以戴泳鏡。" },
  { category: "生活", question: "去洗手間後要做什麼？", options: ["洗手", "吃糖", "看電視", "睡覺"], answer: "洗手", sentence: "去洗手間後要洗手。" },
  { category: "生活", question: "玩完玩具要怎樣？", options: ["收拾", "亂放", "丟掉", "踩爛"], answer: "收拾", sentence: "玩完玩具要收拾。" },
  { category: "生活", question: "圖書館裏要怎樣說話？", options: ["輕聲", "尖叫", "大哭", "大叫"], answer: "輕聲", sentence: "圖書館裏要輕聲說話。" },
  { category: "交通", question: "過馬路時要拖住誰？", options: ["大人", "玩具", "枕頭", "鞋子"], answer: "大人", sentence: "過馬路時要拖住大人。" },
  { category: "交通", question: "坐車時要坐在哪裡？", options: ["座位", "車頂", "車底", "窗外"], answer: "座位", sentence: "坐車時要坐在座位。" },
  { category: "交通", question: "坐巴士時不應該怎樣？", options: ["跑來跑去", "安靜坐好", "扶穩", "排隊"], answer: "跑來跑去", sentence: "坐巴士時不應該跑來跑去。" },
  { category: "交通", question: "紅色交通燈表示什麼？", options: ["停", "行", "跳", "唱"], answer: "停", sentence: "紅色交通燈表示停。" },
  { category: "交通", question: "綠色交通燈表示什麼？", options: ["行", "睡", "哭", "洗手"], answer: "行", sentence: "綠色交通燈表示行。" },
  { category: "交通", question: "斑馬線用來做什麼？", options: ["過馬路", "煮飯", "睡覺", "畫畫"], answer: "過馬路", sentence: "斑馬線用來過馬路。" },
  { category: "交通", question: "消防車通常是什麼顏色？", options: ["紅色", "藍色", "紫色", "粉紅色"], answer: "紅色", sentence: "消防車通常是紅色。" },
  { category: "交通", question: "救護車會幫助誰？", options: ["病人", "玩具", "花朵", "書本"], answer: "病人", sentence: "救護車會幫助病人。" },
  { category: "交通", question: "警車會發出什麼聲音？", options: ["嗚嗚", "喵喵", "咩咩", "嘰嘰"], answer: "嗚嗚", sentence: "警車會發出嗚嗚聲。" },
  { category: "交通", question: "火車在哪裡行？", options: ["路軌", "天空", "沙發", "浴缸"], answer: "路軌", sentence: "火車在路軌上行。" },
  { category: "交通", question: "船在哪裡行？", options: ["水上", "天空", "床上", "櫃裏"], answer: "水上", sentence: "船在水上行。" },
  { category: "交通", question: "的士可以載我們去哪裡？", options: ["目的地", "枕頭", "飯碗", "鉛筆盒"], answer: "目的地", sentence: "的士可以載我們去目的地。" },
  { category: "交通", question: "單車有什麼？", options: ["車輪", "翅膀", "魚尾", "鼻子"], answer: "車輪", sentence: "單車有車輪。" },
  { category: "交通", question: "小朋友坐車要繫什麼？", options: ["安全帶", "圍裙", "泳帽", "手套"], answer: "安全帶", sentence: "小朋友坐車要繫安全帶。" },
  { category: "動物", question: "熊貓愛吃什麼？", options: ["竹子", "糖果", "魚", "石頭"], answer: "竹子", sentence: "熊貓愛吃竹子。" },
  { category: "動物", question: "兔子愛吃什麼？", options: ["紅蘿蔔", "雪糕", "膠水", "鞋子"], answer: "紅蘿蔔", sentence: "兔子愛吃紅蘿蔔。" },
  { category: "動物", question: "獅子是什麼動物？", options: ["野生動物", "交通工具", "食物", "衣服"], answer: "野生動物", sentence: "獅子是野生動物。" },
  { category: "動物", question: "雞會怎樣叫？", options: ["咯咯", "汪汪", "喵喵", "呱呱"], answer: "咯咯", sentence: "雞會咯咯叫。" },
  { category: "動物", question: "鴨子會在哪裡游？", options: ["水裏", "天空", "樹上", "床上"], answer: "水裏", sentence: "鴨子會在水裏游。" },
  { category: "動物", question: "蜜蜂會做什麼？", options: ["採花蜜", "刷牙", "開車", "寫字"], answer: "採花蜜", sentence: "蜜蜂會採花蜜。" },
  { category: "動物", question: "蝴蝶有什麼？", options: ["翅膀", "車輪", "書包", "湯匙"], answer: "翅膀", sentence: "蝴蝶有翅膀。" },
  { category: "自然", question: "樹上有什麼？", options: ["樹葉", "鞋子", "電視", "枕頭"], answer: "樹葉", sentence: "樹上有樹葉。" },
  { category: "自然", question: "花需要什麼才會長大？", options: ["水", "糖果", "膠水", "玩具"], answer: "水", sentence: "花需要水才會長大。" },
  { category: "天氣", question: "晚上天上會看到什麼？", options: ["月亮", "太陽帽", "巴士", "碗"], answer: "月亮", sentence: "晚上天上會看到月亮。" },
  { category: "天氣", question: "白天通常可以看到什麼？", options: ["太陽", "星星", "睡衣", "枕頭"], answer: "太陽", sentence: "白天通常可以看到太陽。" },
  { category: "食物", question: "食雪糕時感覺怎樣？", options: ["凍", "辣", "硬", "吵"], answer: "凍", sentence: "食雪糕時感覺凍。" },
  { category: "食物", question: "辣椒吃起來怎樣？", options: ["辣", "甜", "冷", "軟"], answer: "辣", sentence: "辣椒吃起來很辣。" },
  { category: "食物", question: "蜜糖吃起來怎樣？", options: ["甜", "鹹", "苦", "酸"], answer: "甜", sentence: "蜜糖吃起來很甜。" },
  { category: "食物", question: "檸檬吃起來怎樣？", options: ["酸", "甜", "熱", "吵"], answer: "酸", sentence: "檸檬吃起來很酸。" },
  { category: "食物", question: "藥有時吃起來怎樣？", options: ["苦", "香", "軟", "亮"], answer: "苦", sentence: "藥有時吃起來很苦。" },
  { category: "食物", question: "海水通常是什麼味道？", options: ["鹹", "甜", "辣", "苦"], answer: "鹹", sentence: "海水通常是鹹的。" }
];

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".game-panel");

function randomVehicle(previousKey) {
  const options = vehicles.filter((vehicle) => vehicle.key !== previousKey);
  return options[Math.floor(Math.random() * options.length)];
}

function setFeedback(element, text, isTryAgain = false) {
  element.textContent = text;
  element.classList.toggle("try-again", isTryAgain);
}

function clearButtonStates(buttons) {
  buttons.forEach((button) => {
    button.classList.remove("correct", "wrong");
    button.disabled = false;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.dataset.mode;
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === mode));
  });
});

let currentChineseQuestion = null;
const matchQuestion = document.querySelector("#match-question");
const matchFeedback = document.querySelector("#match-feedback");
const questionCategory = document.querySelector("#question-category");
const matchButtons = document.querySelectorAll("[data-choice-index]");
const nextMatchButton = document.querySelector("#next-match");

function pickChineseQuestion() {
  const previousQuestion = currentChineseQuestion?.question;
  const options = chineseQuestions.filter((question) => question.question !== previousQuestion);
  return options[Math.floor(Math.random() * options.length)];
}

function renderMatchQuestion() {
  currentChineseQuestion = pickChineseQuestion();
  questionCategory.textContent = currentChineseQuestion.category;
  matchQuestion.textContent = currentChineseQuestion.question;
  clearButtonStates(matchButtons);
  matchButtons.forEach((button) => {
    button.textContent = currentChineseQuestion.options[Number(button.dataset.choiceIndex)];
  });
  nextMatchButton.classList.remove("show");
  setFeedback(matchFeedback, "請選擇一個答案。");
}

matchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === currentChineseQuestion.answer) {
      button.classList.add("correct");
      matchButtons.forEach((item) => {
        if (item !== button) item.disabled = true;
      });
      setFeedback(matchFeedback, `好叻！${currentChineseQuestion.sentence}`);
      nextMatchButton.classList.add("show");
      return;
    }

    button.classList.add("wrong");
    setFeedback(matchFeedback, "請再試一次。", true);
  });
});

nextMatchButton.addEventListener("click", () => {
  renderMatchQuestion();
});

let currentLight = "red";
const redLamp = document.querySelector('[data-light="red"]');
const greenLamp = document.querySelector('[data-light="green"]');
const changeLightButton = document.querySelector("#change-light");
const crossButton = document.querySelector("#cross-button");
const child = document.querySelector("#child");
const crossFeedback = document.querySelector("#cross-feedback");

function updateLight() {
  redLamp.classList.toggle("on", currentLight === "red");
  greenLamp.classList.toggle("on", currentLight === "green");
}

changeLightButton.addEventListener("click", () => {
  currentLight = currentLight === "red" ? "green" : "red";
  child.classList.remove("walk");
  updateLight();
  setFeedback(crossFeedback, currentLight === "green" ? "現在是綠燈，可以準備通行。" : "現在是紅燈，請等待。");
});

crossButton.addEventListener("click", () => {
  if (currentLight === "green") {
    child.classList.add("walk");
    setFeedback(crossFeedback, "⭐ 綠燈可以通行");
    return;
  }

  child.classList.remove("walk");
  setFeedback(crossFeedback, "紅燈請停止", true);
});

let measureQuestion = null;
let selectedNumber = null;
const measureStep = document.querySelector("#measure-step");
const iconCount = document.querySelector("#icon-count");
const measurePrompt = document.querySelector("#measure-question");
const numberStep = document.querySelector("#number-step");
const classifierStep = document.querySelector("#classifier-step");
const measureSuccess = document.querySelector("#measure-success");
const measureFeedback = document.querySelector("#measure-feedback");
const numberButtons = document.querySelectorAll("[data-number]");
const classifierButtons = document.querySelectorAll("[data-classifier]");
const nextMeasureButton = document.querySelector("#next-measure");

function renderMeasureQuestion() {
  const vehicle = randomVehicle(measureQuestion?.vehicle.key);
  const count = Math.floor(Math.random() * 5) + 1;
  measureQuestion = { vehicle, count };
  selectedNumber = null;

  iconCount.textContent = Array.from({ length: count }, () => vehicle.icon).join(" ");
  measurePrompt.textContent = "有多少？";
  measureStep.textContent = "第 1 步：數一數";
  numberStep.classList.add("active");
  classifierStep.classList.remove("active");
  measureSuccess.classList.remove("show");
  measureSuccess.textContent = "";
  nextMeasureButton.classList.remove("show");
  clearButtonStates(numberButtons);
  clearButtonStates(classifierButtons);
  setFeedback(measureFeedback, "請先選擇數字。");
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = Number(button.dataset.number);

    if (answer !== measureQuestion.count) {
      button.classList.add("wrong");
      setFeedback(measureFeedback, "請再數一次圖畫。", true);
      return;
    }

    selectedNumber = answer;
    button.classList.add("correct");
    numberButtons.forEach((item) => {
      if (item !== button) item.disabled = true;
    });
    measureStep.textContent = "第 2 步：選擇量詞";
    measurePrompt.textContent = `${numberWords[selectedNumber]}__${measureQuestion.vehicle.name}`;
    numberStep.classList.remove("active");
    classifierStep.classList.add("active");
    setFeedback(measureFeedback, "很好！現在請選擇量詞。");
  });
});

classifierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.dataset.classifier;

    if (answer !== measureQuestion.vehicle.classifier) {
      button.classList.add("wrong");
      setFeedback(measureFeedback, "這個量詞不正確，請再試一次。", true);
      return;
    }

    button.classList.add("correct");
    classifierButtons.forEach((item) => {
      if (item !== button) item.disabled = true;
    });

    const phrase = `${numberWords[measureQuestion.count]}${answer}${measureQuestion.vehicle.name}`;
    measureStep.textContent = "第 3 步：完成";
    measurePrompt.textContent = phrase;
    classifierStep.classList.remove("active");
    measureSuccess.textContent = `答對了！${phrase}`;
    measureSuccess.classList.add("show");
    setFeedback(measureFeedback, "⭐ 全部答對！");
    nextMeasureButton.classList.add("show");
  });
});

nextMeasureButton.addEventListener("click", renderMeasureQuestion);

renderMatchQuestion();
updateLight();
renderMeasureQuestion();
