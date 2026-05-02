const excuses = [
  {
    category: "work",
    text: "I was not late. My calendar and my soul had a synchronization conflict."
  },
  {
    category: "work",
    text: "The meeting invite arrived safely, but my motivation was quarantined by corporate gravity."
  },
  {
    category: "work",
    text: "I tried to be productive, but my brain requested a firmware update with no progress bar."
  },
  {
    category: "school",
    text: "My homework exists in a parallel universe where I am extremely responsible."
  },
  {
    category: "school",
    text: "I studied so deeply that the facts became shy and refused to appear during the test."
  },
  {
    category: "school",
    text: "The assignment was complete, then reality rejected the upload like a tiny academic bouncer."
  },
  {
    category: "trading",
    text: "I did not chase the candle. The candle sprinted into my entry with suspicious enthusiasm."
  },
  {
    category: "trading",
    text: "My stop loss was perfectly placed until price developed a personal vendetta."
  },
  {
    category: "trading",
    text: "The setup was clean. Then liquidity arrived wearing steel boots."
  },
  {
    category: "family",
    text: "I was about to reply, but the family group chat generated seventeen side quests."
  },
  {
    category: "family",
    text: "I did not forget. I stored the memory in a drawer labeled later and the drawer escaped."
  },
  {
    category: "family",
    text: "I was on my way, but household physics discovered a new emergency."
  },
  {
    category: "all",
    text: "I’m not late. My timeline briefly merged with a slower universe."
  },
  {
    category: "all",
    text: "My focus was abducted by a very persuasive thought cloud."
  },
  {
    category: "all",
    text: "The plan was solid. Reality rejected the transaction."
  },
  {
    category: "all",
    text: "I was briefly promoted to Chief Officer of Doing Nothing."
  },
  {
    category: "all",
    text: "The task escaped containment. I am investigating."
  }
];

const excuseBox = document.querySelector("#excuse");
const statusBox = document.querySelector("#status");
const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");
const shareBtn = document.querySelector("#shareBtn");
const categoryButtons = document.querySelectorAll(".chip");

let activeCategory = "all";
let lastExcuse = "";

function setStatus(message) {
  statusBox.textContent = message;
  window.clearTimeout(setStatus.timeoutId);
  setStatus.timeoutId = window.setTimeout(() => {
    statusBox.textContent = "";
  }, 2200);
}

function getFilteredExcuses() {
  if (activeCategory === "all") return excuses;
  return excuses.filter((item) => item.category === activeCategory || item.category === "all");
}

function generateExcuse() {
  const pool = getFilteredExcuses();
  let chosen = pool[Math.floor(Math.random() * pool.length)].text;

  if (pool.length > 1) {
    while (chosen === lastExcuse) {
      chosen = pool[Math.floor(Math.random() * pool.length)].text;
    }
  }

  lastExcuse = chosen;
  excuseBox.textContent = chosen;
}

async function copyExcuse() {
  const text = excuseBox.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied. Your alibi is now portable.");
  } catch (error) {
    setStatus("Copy failed. The clipboard entered deep space.");
  }
}

async function shareExcuse() {
  const text = excuseBox.textContent.trim();

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Cosmic Excuse Generator",
        text
      });
      setStatus("Shared into the tiny internet nebula.");
    } catch (error) {
      setStatus("Share cancelled. The stars remain discreet.");
    }
  } else {
    copyExcuse();
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    generateExcuse();
  });
});

generateBtn.addEventListener("click", generateExcuse);
copyBtn.addEventListener("click", copyExcuse);
shareBtn.addEventListener("click", shareExcuse);

generateExcuse();
