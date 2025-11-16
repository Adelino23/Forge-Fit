/* =========================
   PROGRAMMES D'EXERCICES
   ========================= */

const programmes = {
  fullbody: [
    { nom: "Burpees", muscle: "Full body", gif: "https://media.tenor.com/LMqN7n0ht9sAAAAC/burpees.gif" },
    { nom: "Squat", muscle: "Jambes / Fessiers", gif: "https://media.tenor.com/7pGzdh0dX8MAAAAC/squat.gif" },
    { nom: "Pompes", muscle: "Pectoraux / Triceps", gif: "https://media.tenor.com/Z1z2-LUH0QkAAAAC/pushup-training.gif" }
  ],

  pecs: [
    { nom: "Pompes", muscle: "Pectoraux", gif: "https://media.tenor.com/Z1z2-LUH0QkAAAAC/pushup-training.gif" },
    { nom: "Dips", muscle: "Pecs / Triceps", gif: "https://media.tenor.com/2U8YGtSNY5MAAAAC/dips.gif" },
    { nom: "Écartés haltères", muscle: "Pecs", gif: "https://media.tenor.com/rkx6lEYwH-sAAAAd/dumbbell-fly-chest.gif" }
  ],

  dos: [
    { nom: "Tractions", muscle: "Dos large", gif: "https://media.tenor.com/6HgdGXN53SwAAAAC/pullup.gif" },
    { nom: "Rowing haltère", muscle: "Dos épaisseur", gif: "https://media.tenor.com/YGKuXlqH3tEAAAAC/dumbbell-row.gif" },
    { nom: "Superman", muscle: "Bas du dos", gif: "https://media.tenor.com/zdxWZt87z6QAAAAC/superman-exercise.gif" }
  ],

  jambes: [
    { nom: "Squat", muscle: "Quadriceps", gif: "https://media.tenor.com/7pGzdh0dX8MAAAAC/squat.gif" },
    { nom: "Fentes", muscle: "Jambes / Fessiers", gif: "https://media.tenor.com/OQJrped1IecAAAAC/lunges.gif" },
    { nom: "Jump Squat", muscle: "Explosivité", gif: "https://media.tenor.com/9t2uQZnQEqgAAAAC/jump-squat.gif" }
  ],

  abdos: [
    { nom: "Crunch", muscle: "Abdos", gif: "https://media.tenor.com/O7n7s-lPazkAAAAC/crunches-exercise.gif" },
    { nom: "Gainage", muscle: "Core", gif: "https://media.tenor.com/9qV07uHjq3gAAAAC/plank.gif" },
    { nom: "Relevés de jambes", muscle: "Bas des abdos", gif: "https://media.tenor.com/NpBQkYlHqJ8AAAAC/leg-raises.gif" }
  ],

  epaules: [
    { nom: "Élévations latérales", muscle: "Épaules", gif: "https://media.tenor.com/Z0CNOQWcOpgAAAAd/lateral-raise.gif" },
    { nom: "Développé militaire", muscle: "Épaules", gif: "https://media.tenor.com/XW9RL3-KCt4AAAAC/shoulder-press.gif" }
  ],

  bras: [
    { nom: "Curl biceps", muscle: "Biceps", gif: "https://media.tenor.com/HTw7Tzw9u5UAAAAC/biceps-curl.gif" },
    { nom: "Extension triceps", muscle: "Triceps", gif: "https://media.tenor.com/Uh8uFqslD7UAAAAC/triceps.gif" }
  ],

  fessiers: [
    { nom: "Hip Thrust", muscle: "Fessiers", gif: "https://media.tenor.com/bkJdC7U27dAAAAAC/hip-thrust.gif" },
    { nom: "Kickback", muscle: "Fessiers", gif: "https://media.tenor.com/x1QTsfRCGDcAAAAC/kickback.gif" }
  ],

  gainage: [
    { nom: "Planche", muscle: "Abdos / Core", gif: "https://media.tenor.com/9qV07uHjq3gAAAAC/plank.gif" },
    { nom: "Side Plank", muscle: "Obliques", gif: "https://media.tenor.com/e6rCMgfHdCkAAAAC/side-plank.gif" }
  ],

  hiit: [
    { nom: "High Knees", muscle: "Cardio", gif: "https://media.tenor.com/X4sdAln_-sEAAAAd/high-knees.gif" },
    { nom: "Burpees", muscle: "Full body", gif: "https://media.tenor.com/LMqN7n0ht9sAAAAC/burpees.gif" }
  ],

  cardio: [
    { nom: "Jumping jacks", muscle: "Cardio", gif: "https://media.tenor.com/T0QJ5AZt0eIAAAAC/jumping-jacks.gif" },
    { nom: "Montées de genoux", muscle: "Cardio", gif: "https://media.tenor.com/X4sdAln_-sEAAAAd/high-knees.gif" }
  ],

  echauffement: [
    { nom: "Rotation bras", muscle: "Échauffement", gif: "https://media.tenor.com/2Oe1SWXSPdYAAAAC/warm-up.gif" },
    { nom: "Jog sur place", muscle: "Échauffement", gif: "https://media.tenor.com/u2ZXoqBYw3gAAAAC/jogging-in-place.gif" }
  ],

  stretch: [
    { nom: "Étirement ischios", muscle: "Souplesse", gif: "https://media.tenor.com/5nSIU-9a-XYAAAAC/stretch.gif" },
    { nom: "Étirement dos", muscle: "Relaxation", gif: "https://media.tenor.com/6qO9pYQP7uAAAAAC/stretch.gif" }
  ]
};

/* =========================
   VARIABLES GLOBAL SÉANCE
   ========================= */

let currentProgramme = [];
let indexExo = 0;

let timer = null;
let total = 30;
let restant = 30;

/* =========================
   SÉLECTION SÉANCE
   ========================= */

function chargerSeance(type) {
  if (!programmes[type]) {
    alert("Séance introuvable.");
    return;
  }

  currentProgramme = programmes[type];
  indexExo = 0;

  const preview = document.getElementById("preview");
  const title = document.getElementById("preview-title");

  if (preview && title) {
    preview.style.display = "block";
    title.textContent = "Séance : " + type.toUpperCase() + " (" + currentProgramme.length + " exercices)";
  }
}

/* =========================
   OUVERTURE SÉANCE
   ========================= */

function ouvrirSeance() {
  const preview = document.getElementById("preview");
  const seance = document.getElementById("seance");

  if (preview) preview.style.display = "none";
  if (seance) seance.style.display = "block";

  afficherExo();
}

/* =========================
   AFFICHAGE EXERCICE
   ========================= */

function afficherExo() {
  if (!currentProgramme.length) return;

  const ex = currentProgramme[indexExo];

  const nom = document.getElementById("exo-nom");
  const muscle = document.getElementById("exo-muscle");
  const gif = document.getElementById("exo-gif");

  if (nom) nom.textContent = ex.nom;
  if (muscle) muscle.textContent = ex.muscle;
  if (gif) gif.src = ex.gif;

  resetTimer();
}

/* =========================
   NAVIGATION EXOS
   ========================= */

function nextExo() {
  if (!currentProgramme.length) return;
  if (indexExo < currentProgramme.length - 1) {
    indexExo++;
    afficherExo();
  }
}

function prevExo() {
  if (!currentProgramme.length) return;
  if (indexExo > 0) {
    indexExo--;
    afficherExo();
  }
}

/* =========================
   TIMER
   ========================= */

function updateTimer() {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  const m = String(Math.floor(restant / 60)).padStart(2, "0");
  const s = String(restant % 60).padStart(2, "0");
  timerEl.textContent = `${m}:${s}`;
}

function startTimer() {
  if (timer || !currentProgramme.length) return;

  timer = setInterval(() => {
    restant--;
    if (restant <= 0) {
      restant = 0;
      clearInterval(timer);
      timer = null;
    }
    updateTimer();
  }, 1000);
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer() {
  pauseTimer();
  restant = total;
  updateTimer();
}

/* =========================
   PLAN PERSONNALISÉ
   ========================= */

function genPlan() {
  const objEl = document.getElementById("obj");
  const nivEl = document.getElementById("niv");
  const resultEl = document.getElementById("result");

  if (!objEl || !nivEl || !resultEl) return;

  const obj = objEl.value;
  const niv = nivEl.value;

  let txt = "<h3>Ton plan personnalisé :</h3><br>";

  if (obj === "Prise de masse") {
    txt += "• 4 séances / semaine (Split haut/bas)<br>• Série lourdes 6–10 reps<br>";
  } else if (obj === "Perte de gras") {
    txt += "• 3 HIIT + 2 renfo / semaine<br>• Déficit calorique léger<br>";
  } else if (obj === "Endurance") {
    txt += "• 3–4 séances cardio (30–45 min)<br>";
  } else {
    txt += "• 3 séances renfo full-body / semaine<br>";
  }

  if (niv === "Débutant") {
    txt += "• Séances de 20–30 min<br>";
  } else if (niv === "Intermédiaire") {
    txt += "• Séances de 40–50 min<br>";
  } else {
    txt += "• Séances de 60 min +<br>";
  }

  resultEl.innerHTML = txt;
}

/* =========================
   HISTORIQUE (SÉCURISÉ)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const historyEl = document.getElementById("history");
  if (historyEl) {
    const hist = localStorage.getItem("ff_history") || "Aucune séance enregistrée pour l’instant.";
    historyEl.innerHTML = hist;
  }
});
