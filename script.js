/* =========================
   LISTE DES EXERCICES COMPLETS
   ========================= */

const programmes = {

  fullbody: [
    { nom: "Burpees", muscle: "Full body", gif: "https://media.tenor.com/LMqN7n0ht9sAAAAC/burpees.gif" },
    { nom: "Squat", muscle: "Jambes / Fessiers", gif: "https://media.tenor.com/7pGzdh0dX8MAAAAC/squat.gif" },
    { nom: "Pompes", muscle: "Pectoraux / Bras", gif: "https://media.tenor.com/Z1z2-LUH0QkAAAAC/pushup-training.gif" }
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
    { nom: "Jump light", muscle: "Échauffement", gif: "https://media.tenor.com/u2ZXoqBYw3gAAAAC/jogging-in-place.gif" }
  ],

  stretch: [
    { nom: "Étirement ischios", muscle: "Souplesse", gif: "https://media.tenor.com/5nSIU-9a-XYAAAAC/stretch.gif" },
    { nom: "Étirement dos", muscle: "Relaxation", gif: "https://media.tenor.com/6qO9pYQP7uAAAAAC/stretch.gif" }
  ]

};

/* =========================
   VARIABLES
   ========================= */

let currentProgramme = [];
let indexExo = 0;

let timer = null;
let total = 30;
let restant = 30;

/* =========================
   CHARGER UNE SÉANCE
   ========================= */

function chargerSeance(type) {
  currentProgramme = programmes[type];
  indexExo = 0;

  document.getElementById("preview").style.display = "block";
  document.getElementById("preview-title").textContent =
    "Séance : " + type.toUpperCase() + " (" + currentProgramme.length + " exercices)";
}

/* =========================
   OUVRIR LA SÉANCE
   ========================= */

function ouvrirSeance() {
  document.getElementById("preview").style.display = "none";
  document.getElementById("seance").style.display = "block";
  afficherExo();
}

/* =========================
   AFFICHER EXERCICE
   ========================= */

function afficherExo() {
  const ex = currentProgramme[indexExo];

  document.getElementById("exo-nom").textContent = ex.nom;
  document.getElementById("exo-muscle").textContent = ex.muscle;
  document.getElementById("exo-gif").src = ex.gif;

  resetTimer();
}

/* =========================
   NAVIGATION ENTRE EXOS
   ========================= */

function nextExo() {
  if (indexExo < currentProgramme.length - 1) {
    indexExo++;
    afficherExo();
  }
}

function prevExo() {
  if (indexExo > 0) {
    indexExo--;
    afficherExo();
  }
}

/* =========================
   TIMER
   ========================= */

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    restant--;
    if (restant <= 0) {
      clearInterval(timer);
      timer = null;
    }
    updateTimer();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  restant = total;
  updateTimer();
}

function updateTimer() {
  let m = String(Math.floor(restant / 60)).padStart(2, "0");
  let s = String(restant % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${m}:${s}`;
}

/* =========================
   PLAN PERSONNALISÉ
   ========================= */

function genPlan() {
  const obj = document.getElementById("obj").value;
  const niv = document.getElementById("niv").value;

  let txt = "<h3>Ton plan personnalisé :</h3><br>";

  if (obj === "Prise de masse") {
    txt += "• 4 séances par semaine<br>• Split haut/bas recommandé<br>";
  } else if (obj === "Perte de gras") {
    txt += "• 3 HIIT + 2 renfo/semaine<br>• Déficit léger<br>";
  }

  if (niv === "Débutant") {
    txt += "• Séances de 25 minutes<br>";
  } else if (niv === "Intermédiaire") {
    txt += "• Séances de 40 minutes<br>";
  } else {
    txt += "• Séances de 1 heure<br>";
  }

  document.getElementById("result").innerHTML = txt;
}

/* =========================
   HISTORIQUE (simple)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  let hist = localStorage.getItem("ff_history") || "";
  document.getElementById("history").innerHTML = hist;
});
