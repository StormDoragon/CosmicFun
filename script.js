const excuseBox = document.getElementById("excuse");
const batchOutput = document.getElementById("batchOutput") || document.getElementById("batchList");
const favoritesList = document.getElementById("favoritesList");
const situationInput = document.getElementById("situationInput");

let currentExcuse = "";
let favorites = JSON.parse(localStorage.getItem("cosmicFavorites")) || [];

const openings = [
  "A minor timeline collision occurred.",
  "My productivity engine entered orbit.",
  "The situation briefly escaped normal physics.",
  "A calendar wormhole opened without permission.",
  "My focus went into airplane mode.",
  "A tiny administrative asteroid hit my schedule.",
  "My motivation was rerouted through deep space.",
  "Reality rejected my original plan.",
  "My attention span filed for temporary leave.",
  "The day experienced unauthorized turbulence.",
  "My schedule suffered a gravitational disagreement.",
  "A mysterious delay particle entered the system.",
  "My brain launched 47 tabs and lost the main one.",
  "The universe buffered at 99 percent.",
  "My task queue encountered cosmic traffic.",
  "The mission was active, but the captain was loading.",
  "My calendar and common sense desynchronized.",
  "A small black hole formed near my responsibilities.",
  "The plan survived. The execution did not.",
  "My ambition took a scenic route through Saturn.",
  "A pocket-sized chaos comet crossed my path.",
  "The morning update installed incorrectly.",
  "My inner project manager was unavailable.",
  "The laws of punctuality bent slightly.",
  "My timeline had a surprise software patch."
];

const situations = [
  "I was ready, but my alarm and my soul negotiated separately.",
  "I started early, then early disappeared from the premises.",
  "I remembered everything except the part where I had to act.",
  "I was on my way, but my focus got detained by unnecessary thoughts.",
  "I tried to move fast, but my body was using economy mode.",
  "I opened the task, respected it, and then emotionally backed away.",
  "I was fully prepared in a parallel universe with better management.",
  "I meant to reply, but the message sank into the notification swamp.",
  "I checked the time, then time checked me back.",
  "I was one good decision away from success and chose exploration.",
  "I sat down to work and accidentally entered philosophical weather.",
  "I planned responsibly, but reality brought extra paperwork.",
  "I had momentum until my brain discovered a side quest.",
  "I was nearly productive, then comfort launched a hostile takeover.",
  "I followed the plan until the plan started acting suspicious.",
  "I put it on my mental calendar, which is apparently decorative.",
  "I was delayed by a meeting between my intentions and my limitations.",
  "I prepared the excuse after the delay, which shows commitment.",
  "I attempted discipline, but discipline had left the building.",
  "I was focused, then a thought cloud blocked visibility.",
  "I came with energy, but the energy arrived in another shipment.",
  "I was ready to execute, but my internal server returned a soft error.",
  "I tried to be serious, but the day wore clown shoes.",
  "I was not ignoring the task. I was allowing it to develop character.",
  "I acted late because my confidence was still downloading.",
  "I had the right idea, but it took the scenic route through confusion.",
  "I was making progress until progress asked for documentation.",
  "I arrived mentally on time. My body requested an extension.",
  "I respected the deadline from a distance.",
  "I was briefly trapped inside a very persuasive pause."
];

const endings = [
  "Systems are stable now.",
  "Normal space-time has resumed.",
  "Dignity is slowly returning.",
  "I request one final orbit to recover.",
  "The mission can continue.",
  "I accept responsibility with theatrical seriousness.",
  "No further anomalies are expected.",
  "The dashboard is green again.",
  "I am now realigning with the original mission.",
  "The delay has been contained.",
  "I have restored partial human functionality.",
  "The excuse department is closed for maintenance.",
  "I am back inside the correct timeline.",
  "The universe has been warned.",
  "I will proceed with suspicious confidence.",
  "I am operational, mostly.",
  "The chaos has been archived.",
  "The system rebooted with slightly better manners.",
  "I have returned from the delay dimension.",
  "I am now moving with responsible velocity."
];

const singleExcuses = [
  "I’m not late. My timeline briefly merged with a slower universe.",
  "My alarm worked perfectly. Unfortunately, I did not.",
  "I did not procrastinate. I performed strategic delay research.",
  "I forgot because my memory was stored in a drawer labeled later.",
  "The plan was solid. Reality rejected the transaction.",
  "I was productive in spirit, which sadly has no timestamp.",
  "I was delayed by a tiny existential loading screen.",
  "My calendar and my soul had a synchronization conflict.",
  "I was briefly promoted to Chief Officer of Doing Nothing.",
  "The task escaped containment. I am investigating.",
  "My attention span got margin-called.",
  "The setup was clean. Then liquidity arrived wearing steel boots.",
  "My motivation entered maintenance mode and refused all incoming requests.",
  "I tried to start early, but early filed a complaint.",
  "My productivity left the chat and joined a wellness retreat.",
  "I was not avoiding responsibility. I was giving it time to mature.",
  "The universe gave me a pop quiz and I did not study for being alive.",
  "I showed up late because punctuality and I are in negotiations.",
  "I did not lose focus. Focus lost me in a crowded thought market.",
  "My to-do list looked at me with legal authority, so I retreated."
];

const keywordBanks = {
  homework: {
    keywords: ["homework", "assignment", "essay", "project", "paper"],
    openings: [
      "My academic timeline suffered a small orbital fracture.",
      "The assignment entered a zone of gravitational resistance.",
      "My homework and my focus had a private disagreement.",
      "The project was alive, but its momentum required emergency care."
    ],
    situations: [
      "I opened the work with confidence, then my brain requested a firmware update.",
      "The instructions were clear, but my attention span treated them as ancient ruins.",
      "I began responsibly, then the task expanded into a suspiciously large galaxy.",
      "I had the answer forming, but it escaped into the draft dimension."
    ],
    endings: [
      "I am restoring academic dignity now.",
      "The work is returning from orbit.",
      "I request one final launch window.",
      "The mission is back under control."
    ]
  },
  meeting: {
    keywords: ["meeting", "standup", "call", "zoom", "interview", "appointment"],
    openings: [
      "My calendar developed unauthorized turbulence.",
      "The meeting invite survived, but my timeline did not.",
      "A scheduling asteroid clipped my professional orbit.",
      "My punctuality system briefly lost satellite contact."
    ],
    situations: [
      "I was mentally present, but physically trapped in a slower timeline.",
      "I saw the invite, respected it deeply, and then time performed a hostile takeover.",
      "I prepared to join, but my device and destiny started negotiating.",
      "The meeting was clear on the calendar, but hidden behind a fogbank of human failure."
    ],
    endings: [
      "I am rejoining normal professional gravity.",
      "The delay has been contained.",
      "I am available now with suspiciously renewed focus.",
      "The timeline is stable again."
    ]
  },
  traffic: {
    keywords: ["traffic", "drive", "car", "road", "uber", "bus", "train", "commute"],
    openings: [
      "The road system activated villain mode.",
      "My commute entered cinematic difficulty.",
      "Traffic formed a temporary civilization in my path.",
      "The transportation gods requested tribute."
    ],
    situations: [
      "I was moving, but every vehicle around me chose emotional stillness.",
      "The route looked normal until reality added seventeen invisible delays.",
      "I left with hope, then the road introduced a plot twist.",
      "The GPS promised progress, then began speaking in riddles."
    ],
    endings: [
      "I have escaped the asphalt dimension.",
      "I am arriving with battle-tested patience.",
      "Normal movement has resumed.",
      "The wheels are loyal again."
    ]
  },
  forgot: {
    keywords: ["forgot", "forget", "missed", "remember", "reminder"],
    openings: [
      "My memory archive suffered a filing catastrophe.",
      "A reminder fell into the notification swamp.",
      "My brain stored the task in a drawer labeled later.",
      "The memory existed, but it wore camouflage."
    ],
    situations: [
      "I did not ignore it; I misplaced it inside a very confident blank space.",
      "I remembered the concept, but not the part where action was required.",
      "The reminder appeared briefly, then vanished like a shy comet.",
      "My brain confirmed receipt and then refused delivery."
    ],
    endings: [
      "The memory has been recovered.",
      "I have reopened the correct mental folder.",
      "The archive is being repaired.",
      "I am now operating with upgraded recall."
    ]
  },
  trading: {
    keywords: ["trade", "trading", "gold", "xauusd", "entry", "setup", "chart", "market", "liquidity"],
    openings: [
      "The market opened a trapdoor under my confidence.",
      "My setup was clean until liquidity entered wearing steel boots.",
      "The chart whispered opportunity, then changed its accent.",
      "My trading plan encountered institutional weather."
    ],
    situations: [
      "I waited for confirmation, but confirmation arrived dressed as regret.",
      "The candle looked innocent until the wick started negotiating.",
      "I followed the setup, then the market performed emotional gymnastics.",
      "The entry was perfect in a parallel brokerage account."
    ],
    endings: [
      "Risk management is now back in command.",
      "I am returning to disciplined observation.",
      "The chart has been placed under supervision.",
      "I will not trust a charming candle again."
    ]
  },
  late: {
    keywords: ["late", "delay", "delayed", "behind", "missed time"],
    openings: [
      "My timeline briefly merged with a slower universe.",
      "Punctuality and I entered tense negotiations.",
      "Time moved normally. I, however, was betrayed by logistics.",
      "A tiny delay particle entered the system."
    ],
    situations: [
      "I was ready in theory, but reality demanded additional paperwork.",
      "I attempted speed, but the day was running on dial-up.",
      "I left the correct timeline and had to find my way back.",
      "The schedule looked stable until it developed theatrical complications."
    ],
    endings: [
      "I am now aligned with normal space-time.",
      "The timeline has been repaired.",
      "I have returned with useful embarrassment.",
      "Future punctuality is being aggressively negotiated."
    ]
  },
  family: {
    keywords: ["family", "mom", "dad", "brother", "sister", "home", "kid", "wife", "husband"],
    openings: [
      "Household physics discovered a new emergency.",
      "Family gravity overruled my original plan.",
      "The home dimension requested immediate administrative support.",
      "A domestic side quest appeared without warning."
    ],
    situations: [
      "I tried to continue normally, but the household plot thickened.",
      "The situation began small, then multiplied like confused laundry.",
      "I was available until family logistics activated boss-level difficulty.",
      "The house produced a request with no snooze button."
    ],
    endings: [
      "The home planet is stable again.",
      "I have returned from domestic orbit.",
      "Normal operations are resuming.",
      "The family mission is under control."
    ]
  }
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getKeywordBank(input) {
  const text = (input || "").toLowerCase().trim();
  if (!text) return null;

  for (const bank of Object.values(keywordBanks)) {
    if (bank.keywords.some((keyword) => text.includes(keyword))) {
      return bank;
    }
  }

  return null;
}

function makeExcuse() {
  const inputText = situationInput ? situationInput.value : "";
  const bank = getKeywordBank(inputText);

  if (bank) {
    return `${randomItem(bank.openings)} ${randomItem(bank.situations)} ${randomItem(bank.endings)}`;
  }

  const useSingle = Math.random() < 0.35;

  if (useSingle) {
    return randomItem(singleExcuses);
  }

  return `${randomItem(openings)} ${randomItem(situations)} ${randomItem(endings)}`;
}

function generateExcuse() {
  let nextExcuse = makeExcuse();

  let safety = 0;
  while (nextExcuse === currentExcuse && safety < 20) {
    nextExcuse = makeExcuse();
    safety++;
  }

  currentExcuse = nextExcuse;
  if (excuseBox) {
    excuseBox.textContent = currentExcuse;
  }
}

function generateBatch(count = 100) {
  if (!batchOutput) return;

  const uniqueExcuses = new Set();
  let attempts = 0;
  const maxAttempts = count * 50;

  while (uniqueExcuses.size < count && attempts < maxAttempts) {
    uniqueExcuses.add(makeExcuse());
    attempts++;
  }

  const list = Array.from(uniqueExcuses);

  if (batchOutput.tagName === "UL" || batchOutput.tagName === "OL") {
    batchOutput.innerHTML = list.map((excuse) => `<li>${excuse}</li>`).join("");
    return;
  }

  batchOutput.innerHTML = `
    <h2>BATCH OUTPUT</h2>
    <ol>
      ${list.map((excuse) => `<li>${excuse}</li>`).join("")}
    </ol>
  `;
}

function copyExcuse() {
  const textToCopy = currentExcuse || (excuseBox ? excuseBox.textContent : "");

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Copied to clipboard.");
  });
}

function shareExcuse() {
  const textToShare = currentExcuse || (excuseBox ? excuseBox.textContent : "");

  if (navigator.share) {
    navigator.share({
      title: "Cosmic Excuse Generator",
      text: textToShare
    });
  } else {
    navigator.clipboard.writeText(textToShare);
    alert("Sharing is not supported here, so the excuse was copied instead.");
  }
}

function saveFavorite() {
  const text = currentExcuse || (excuseBox ? excuseBox.textContent : "");

  if (!text || text.includes("Click")) return;

  if (!favorites.includes(text)) {
    favorites.unshift(text);
    favorites = favorites.slice(0, 100);
    localStorage.setItem("cosmicFavorites", JSON.stringify(favorites));
    renderFavorites();
  }
}

function renderFavorites() {
  if (!favoritesList) return;

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<li>No favorites yet. Save one to build your emergency excuse vault.</li>";
    return;
  }

  favoritesList.innerHTML = favorites.map((favorite) => `<li>${favorite}</li>`).join("");
}

const generateBtn = document.getElementById("generateBtn");
const generateThreeBtn = document.getElementById("generateThreeBtn");
const saveBtn = document.getElementById("saveBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

if (generateBtn) generateBtn.addEventListener("click", generateExcuse);
if (generateThreeBtn) generateThreeBtn.addEventListener("click", () => generateBatch(100));
if (saveBtn) saveBtn.addEventListener("click", saveFavorite);
if (copyBtn) copyBtn.addEventListener("click", copyExcuse);
if (shareBtn) shareBtn.addEventListener("click", shareExcuse);

generateExcuse();
generateBatch(100);
renderFavorites();
