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

const chineseQuestions = window.CHINESE_QUESTIONS || [];

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
let matchQuestionQueue = [];
const matchQuestion = document.querySelector("#match-question");
const matchFeedback = document.querySelector("#match-feedback");
const questionCategory = document.querySelector("#question-category");
const questionSpeaker = document.querySelector("#question-speaker");
const matchButtons = document.querySelectorAll("[data-choice-index]");
const nextMatchButton = document.querySelector("#next-match");
let activeAudio = null;

function playAudio(path) {
  if (!path) return Promise.resolve(false);

  return new Promise((resolve) => {
    try {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }

      const audio = new Audio(path);
      activeAudio = audio;
      let settled = false;
      const finish = (played) => {
        if (settled) return;
        settled = true;
        if (activeAudio === audio) activeAudio = null;
        resolve(played);
      };

      audio.addEventListener("ended", () => finish(true), { once: true });
      audio.addEventListener("error", () => finish(false), { once: true });

      const started = audio.play();
      if (started && typeof started.catch === "function") {
        started.catch(() => finish(false));
      }
    } catch (error) {
      resolve(false);
    }
  });
}

function shuffleQuestions(questions) {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function pickChineseQuestion() {
  if (!matchQuestionQueue.length) {
    matchQuestionQueue = shuffleQuestions(chineseQuestions);

    if (
      matchQuestionQueue.length > 1 &&
      matchQuestionQueue[0].id === currentChineseQuestion?.id
    ) {
      [matchQuestionQueue[0], matchQuestionQueue[1]] = [matchQuestionQueue[1], matchQuestionQueue[0]];
    }
  }

  return matchQuestionQueue.shift();
}

function getCorrectDisplay(question) {
  let sentence = question.questionDisplay.replace(/[？?]$/, "");
  sentence = sentence
    .replace("什麼顏色", question.answer)
    .replace("什麼味道", `${question.answer}味`)
    .replace("什麼動物", question.answer)
    .replace("什麼", question.answer)
    .replace("哪裡", question.answer)
    .replace("誰", question.answer)
    .replace("怎樣", question.answer)
    .replace("多少", question.answer);

  return `好叻！${sentence}。`;
}

function renderMatchQuestion() {
  currentChineseQuestion = pickChineseQuestion();
  if (!currentChineseQuestion) return;

  questionCategory.textContent = currentChineseQuestion.category;
  matchQuestion.textContent = currentChineseQuestion.questionDisplay;
  clearButtonStates(matchButtons);
  matchButtons.forEach((button) => {
    button.textContent = currentChineseQuestion.options[Number(button.dataset.choiceIndex)];
  });
  nextMatchButton.classList.remove("show");
  setFeedback(matchFeedback, "請選擇一個答案。");
  playAudio(currentChineseQuestion.audio?.question);
}

matchButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const choiceIndex = Number(button.dataset.choiceIndex);
    await playAudio(currentChineseQuestion.audio?.options?.[choiceIndex]);

    if (button.textContent === currentChineseQuestion.answer) {
      button.classList.add("correct");
      matchButtons.forEach((item) => {
        if (item !== button) item.disabled = true;
      });
      setFeedback(matchFeedback, getCorrectDisplay(currentChineseQuestion));
      nextMatchButton.classList.add("show");
      await playAudio(currentChineseQuestion.audio?.correct);
      return;
    }

    button.classList.add("wrong");
    setFeedback(matchFeedback, "請再試一次。", true);
    await playAudio(currentChineseQuestion.audio?.wrong);
  });
});

nextMatchButton.addEventListener("click", () => {
  renderMatchQuestion();
});

questionSpeaker.addEventListener("click", () => {
  playAudio(currentChineseQuestion?.audio?.question);
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
