"use strict";

// KTU 2019-scheme templates. Course rows remain editable for electives and scheme changes.
const commonCourses = {
  1: [["Linear Algebra & Calculus", 4], ["Engineering Physics A", 4], ["Engineering Graphics", 3], ["Basics of Civil & Mechanical Engineering", 4], ["Engineering Physics Lab", 1], ["Civil & Mechanical Workshop", 1], ["Life Skills", 0]],
  2: [["Vector Calculus, Differential Equations & Transforms", 4], ["Engineering Chemistry", 4], ["Programming in C", 4], ["Basics of Electrical & Electronics Engineering", 4], ["Engineering Chemistry Lab", 1], ["Electrical & Electronics Workshop", 1], ["Professional Communication", 0]]
};

const branchCourses = {
  CSE: {
    3: [["Discrete Mathematical Structures", 4], ["Data Structures", 4], ["Logic System Design", 4], ["Object Oriented Programming Using Java", 4], ["Sustainable Engineering", 3], ["Data Structures Lab", 2], ["Object Oriented Programming Lab", 2]],
    4: [["Graph Theory", 4], ["Computer Organization & Architecture", 4], ["Database Management Systems", 4], ["Operating Systems", 4], ["Design & Engineering", 2], ["Digital Lab", 2], ["Operating Systems Lab", 2], ["Constitution of India", 0]],
    5: [["Formal Languages & Automata Theory", 4], ["Computer Networks", 4], ["System Software", 4], ["Microprocessors & Microcontrollers", 4], ["Management of Software Systems", 3], ["System Software & Microprocessor Lab", 2], ["Database Management Systems Lab", 2], ["Disaster Management", 0]],
    6: [["Compiler Design", 4], ["Computer Graphics & Image Processing", 4], ["Algorithm Analysis & Design", 4], ["Programme Elective I", 3], ["Industrial Economics & Foreign Trade", 3], ["Networking Lab", 2], ["Mini Project", 2], ["Comprehensive Course Work", 1]],
    7: [["Artificial Intelligence", 4], ["Industrial Safety Engineering", 3], ["Programme Elective II", 3], ["Open Elective", 3], ["Compiler Design Lab", 2], ["Seminar", 2], ["Project Phase I", 2]],
    8: [["Distributed Computing", 3], ["Programme Elective III", 3], ["Programme Elective IV", 3], ["Programme Elective V", 3], ["Project Phase II", 8]]
  },
  ECE: {
    3: [["Linear Algebra & Complex Analysis", 4], ["Solid State Devices", 4], ["Logic Circuit Design", 4], ["Network Theory", 4], ["Sustainable Engineering", 3], ["Electronic Devices Lab", 2], ["Logic Design Lab", 2]],
    4: [["Probability, Random Processes & Numerical Methods", 4], ["Analog Circuits", 4], ["Signals & Systems", 4], ["Computer Architecture & Microcontrollers", 4], ["Design & Engineering", 2], ["Analog Circuits Lab", 2], ["Microcontroller Lab", 2]],
    5: [["Analog & Digital Communication", 4], ["Digital Signal Processing", 4], ["Electromagnetic Theory", 4], ["Industrial & Power Electronics", 4], ["Management for Engineers", 3], ["Communication Engineering Lab", 2], ["Digital Signal Processing Lab", 2]],
    6: [["Information Theory & Coding", 4], ["VLSI Circuit Design", 4], ["Antenna & Wave Propagation", 4], ["Programme Elective I", 3], ["Industrial Economics", 3], ["VLSI Lab", 2], ["Mini Project", 2], ["Comprehensive Course Work", 1]],
    7: [["Microwave & Radar Engineering", 4], ["Industrial Safety Engineering", 3], ["Programme Elective II", 3], ["Open Elective", 3], ["Communication Systems Lab", 2], ["Seminar", 2], ["Project Phase I", 2]],
    8: [["Optical Communication", 3], ["Programme Elective III", 3], ["Programme Elective IV", 3], ["Programme Elective V", 3], ["Project Phase II", 8]]
  },
  EEE: {
    3: [["Linear Algebra & Complex Analysis", 4], ["Circuits & Networks", 4], ["Analog Electronics", 4], ["DC Machines & Transformers", 4], ["Sustainable Engineering", 3], ["Circuits Lab", 2], ["Analog Electronics Lab", 2]],
    4: [["Numerical & Statistical Methods", 4], ["Synchronous & Induction Machines", 4], ["Digital Electronics", 4], ["Signals & Systems", 4], ["Design & Engineering", 2], ["Electrical Machines Lab", 2], ["Digital Electronics Lab", 2]],
    5: [["Power Systems I", 4], ["Power Electronics", 4], ["Microprocessors & Microcontrollers", 4], ["Electromagnetic Theory", 4], ["Management for Engineers", 3], ["Power Electronics Lab", 2], ["Microcontroller Lab", 2]],
    6: [["Power Systems II", 4], ["Control Systems", 4], ["Electrical System Design", 4], ["Programme Elective I", 3], ["Industrial Economics", 3], ["Control Systems Lab", 2], ["Mini Project", 2], ["Comprehensive Course Work", 1]],
    7: [["Electrical Drives", 4], ["Industrial Safety Engineering", 3], ["Programme Elective II", 3], ["Open Elective", 3], ["Power Systems Lab", 2], ["Seminar", 2], ["Project Phase I", 2]],
    8: [["Advanced Control Systems", 3], ["Programme Elective III", 3], ["Programme Elective IV", 3], ["Programme Elective V", 3], ["Project Phase II", 8]]
  },
  ME: {
    3: [["Linear Algebra & Transform Techniques", 4], ["Mechanics of Solids", 4], ["Fluid Mechanics", 4], ["Metallurgy & Material Science", 4], ["Sustainable Engineering", 3], ["Computer Aided Machine Drawing", 2], ["Material Testing Lab", 2]],
    4: [["Partial Differential Equations & Complex Analysis", 4], ["Engineering Thermodynamics", 4], ["Manufacturing Process", 4], ["Fluid Machinery", 4], ["Design & Engineering", 2], ["Thermal Engineering Lab", 2], ["Manufacturing Technology Lab", 2]],
    5: [["Mechanics of Machinery", 4], ["Thermal Engineering", 4], ["Machine Tools & Metrology", 4], ["Industrial Engineering", 4], ["Management for Engineers", 3], ["Dynamics Lab", 2], ["Machine Tools Lab", 2]],
    6: [["Heat & Mass Transfer", 4], ["Design of Machine Elements", 4], ["Advanced Manufacturing", 4], ["Programme Elective I", 3], ["Industrial Economics", 3], ["Heat Transfer Lab", 2], ["Mini Project", 2], ["Comprehensive Course Work", 1]],
    7: [["Mechatronics", 4], ["Industrial Safety Engineering", 3], ["Programme Elective II", 3], ["Open Elective", 3], ["CAD/CAM Lab", 2], ["Seminar", 2], ["Project Phase I", 2]],
    8: [["Refrigeration & Air Conditioning", 3], ["Programme Elective III", 3], ["Programme Elective IV", 3], ["Programme Elective V", 3], ["Project Phase II", 8]]
  },
  CE: {
    3: [["Linear Algebra & Transform Techniques", 4], ["Mechanics of Solids", 4], ["Fluid Mechanics & Hydraulics", 4], ["Surveying & Geomatics", 4], ["Sustainable Engineering", 3], ["Civil Engineering Planning & Drafting Lab", 2], ["Survey Lab", 2]],
    4: [["Probability, Statistics & Numerical Methods", 4], ["Structural Analysis I", 4], ["Geotechnical Engineering I", 4], ["Transportation Engineering I", 4], ["Design & Engineering", 2], ["Material Testing Lab", 2], ["Geotechnical Engineering Lab", 2]],
    5: [["Structural Analysis II", 4], ["Design of Concrete Structures", 4], ["Geotechnical Engineering II", 4], ["Environmental Engineering I", 4], ["Management for Engineers", 3], ["Civil Engineering Software Lab", 2], ["Environmental Engineering Lab", 2]],
    6: [["Design of Hydraulic Structures", 4], ["Transportation Engineering II", 4], ["Quantity Surveying & Valuation", 4], ["Programme Elective I", 3], ["Industrial Economics", 3], ["Transportation Engineering Lab", 2], ["Mini Project", 2], ["Comprehensive Course Work", 1]],
    7: [["Environmental Engineering II", 4], ["Industrial Safety Engineering", 3], ["Programme Elective II", 3], ["Open Elective", 3], ["Design Project", 2], ["Seminar", 2], ["Project Phase I", 2]],
    8: [["Construction Management", 3], ["Programme Elective III", 3], ["Programme Elective IV", 3], ["Programme Elective V", 3], ["Project Phase II", 8]]
  }
};

const gradePoints = { "S": 10, "A+": 9, "A": 8.5, "B+": 8, "B": 7, "C": 6, "P": 5, "F": 0 };
const defaultSemesterCredits = [17, 18, 23, 24, 23, 23, 19, 20];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const storageKey = "ktuCalcHistory";
let deferredInstallPrompt = null;
let latestResult = null;

function getCourses(programme, semester) {
  return semester <= 2 ? commonCourses[semester] : branchCourses[programme][semester];
}

function gradeOptions() {
  return `<option value="">Select</option>${Object.keys(gradePoints).map(grade => `<option value="${grade}">${grade}</option>`).join("")}`;
}

function loadSubjectRows() {
  const programme = $("#programme-select").value;
  const semester = Number($("#semester-select").value);
  const rows = getCourses(programme, semester);
  $("#subject-rows").innerHTML = rows.map(([name, credits], index) => `
    <tr>
      <td><label class="sr-only" for="course-${index}">Course ${index + 1}</label><input class="course-name" id="course-${index}" value="${name}" aria-label="Course name ${index + 1}"></td>
      <td><input class="credit-input" type="number" min="0" max="10" step="0.5" value="${credits}" aria-label="Credits for ${name}"></td>
      <td><select class="grade-select" aria-label="Grade for ${name}">${gradeOptions()}</select></td>
    </tr>`).join("");
  resetResult("sgpa");
}

function buildSemesterInputs() {
  $("#semester-inputs").innerHTML = defaultSemesterCredits.map((credits, index) => `
    <label class="semester-row">
      <span>S${index + 1}</span>
      <input class="sgpa-input" type="number" min="0" max="10" step="0.01" placeholder="SGPA" aria-label="Semester ${index + 1} SGPA">
      <span class="credits-field"><input class="semester-credits" type="number" min="1" max="40" value="${credits}" aria-label="Semester ${index + 1} credits"><small>cr</small></span>
    </label>`).join("");
}

function resetResult(type) {
  const content = type === "sgpa"
    ? `<div class="result-empty"><div class="empty-icon">∑</div><h3>Your result will appear here</h3><p>Select grades for your courses and calculate your semester performance.</p></div>`
    : `<div class="result-empty"><div class="empty-icon">◴</div><h3>See the full picture</h3><p>Add your completed semester SGPAs for a weighted cumulative result.</p></div>`;
  $(`#${type}-result`).innerHTML = content;
}

function performanceLevel(value) {
  if (value >= 9) return "Outstanding";
  if (value >= 8) return "Excellent";
  if (value >= 7) return "Very Good";
  if (value >= 6) return "Good";
  return "Needs Improvement";
}

function withLoading(button, callback) {
  button.classList.add("loading");
  window.setTimeout(() => {
    button.classList.remove("loading");
    callback();
  }, 420);
}

function calculateSgpa() {
  const rows = $$("#subject-rows tr");
  const graded = rows.map(row => ({
    name: $(".course-name", row).value.trim() || "Course",
    credits: Number($(".credit-input", row).value),
    grade: $(".grade-select", row).value
  })).filter(item => item.credits > 0);

  if (!graded.length || graded.some(item => !item.grade)) {
    showToast("Choose a grade for every credit-bearing course.", "error");
    return;
  }

  const totalCredits = graded.reduce((sum, item) => sum + item.credits, 0);
  const weightedPoints = graded.reduce((sum, item) => sum + item.credits * gradePoints[item.grade], 0);
  const sgpa = weightedPoints / totalCredits;
  const counts = graded.reduce((summary, item) => ({ ...summary, [item.grade]: (summary[item.grade] || 0) + 1 }), {});
  const semester = $("#semester-select").value;
  const result = { type: "SGPA", value: sgpa.toFixed(2), detail: `Semester ${semester} · ${totalCredits} credits`, date: Date.now() };
  latestResult = result;

  $("#sgpa-result").innerHTML = `
    <div class="result-content">
      <span class="result-label">Semester ${semester} SGPA</span>
      <div class="big-result">${sgpa.toFixed(2)}</div>
      <span class="performance-badge">${performanceLevel(sgpa)}</span>
      <div class="result-stats">
        <div class="result-stat"><span>Total credits</span><strong>${totalCredits}</strong></div>
        <div class="result-stat"><span>Credit points</span><strong>${weightedPoints.toFixed(1)}</strong></div>
      </div>
      <div class="grade-pills">${Object.entries(counts).map(([grade, count]) => `<span class="grade-pill">${grade}: ${count}</span>`).join("")}</div>
      ${resultActions("sgpa")}
    </div>`;
  saveHistory(result);
  showToast("SGPA calculated and saved.");
}

function calculateCgpa() {
  const entries = $$(".semester-row").map((row, index) => ({
    semester: index + 1,
    sgpa: $(".sgpa-input", row).value === "" ? null : Number($(".sgpa-input", row).value),
    credits: Number($(".semester-credits", row).value)
  })).filter(item => item.sgpa !== null);

  if (!entries.length) {
    showToast("Enter at least one completed semester SGPA.", "error");
    return;
  }
  if (entries.some(item => item.sgpa < 0 || item.sgpa > 10 || item.credits <= 0)) {
    showToast("SGPA must be between 0 and 10 with valid credits.", "error");
    return;
  }

  const totalCredits = entries.reduce((sum, item) => sum + item.credits, 0);
  const cgpa = entries.reduce((sum, item) => sum + item.sgpa * item.credits, 0) / totalCredits;
  const level = performanceLevel(cgpa);
  const result = { type: "CGPA", value: cgpa.toFixed(2), detail: `${entries.length} semesters · ${totalCredits} credits`, date: Date.now() };
  latestResult = result;

  $("#cgpa-result").innerHTML = `
    <div class="result-content">
      <span class="result-label">Cumulative performance</span>
      <div class="progress-ring" style="--progress:${cgpa * 10}"><div><strong>${cgpa.toFixed(2)}</strong><span>CGPA</span></div></div>
      <span class="performance-badge">${level}</span>
      <div class="result-stats">
        <div class="result-stat"><span>Semesters</span><strong>${entries.length}</strong></div>
        <div class="result-stat"><span>Total credits</span><strong>${totalCredits}</strong></div>
      </div>
      <p class="form-note">Academic performance indicator: <strong>${level}</strong></p>
      ${resultActions("cgpa")}
    </div>`;
  saveHistory(result);
  showToast("CGPA calculated and saved.");
}

function resultActions(source) {
  return `<div class="result-actions">
    <button type="button" data-action="copy" data-source="${source}">Copy result</button>
    <button type="button" data-action="share" data-source="${source}">Share</button>
    <button type="button" data-action="download" data-source="${source}">Download PNG</button>
  </div>`;
}

function calculateGoal(event) {
  event.preventDefault();
  const current = Number($("#current-cgpa").value);
  const completed = Number($("#completed-semesters").value);
  const target = Number($("#target-cgpa").value);
  const remaining = Number($("#remaining-semesters").value);

  if ([current, completed, target, remaining].some(value => !Number.isFinite(value)) || current < 0 || current > 10 || target < 0 || target > 10 || completed < 1 || remaining < 1) {
    showToast("Enter valid values in every goal field.", "error");
    return;
  }

  // Uses semester count as the weight because exact completed and future credit totals are unknown here.
  const required = ((target * (completed + remaining)) - (current * completed)) / remaining;
  let status, statusClass, insight;
  if (required <= 0) {
    status = "Already achieved";
    statusClass = "status-success";
    insight = "Your current CGPA is already above this target. Keep building on it.";
  } else if (required <= 10) {
    status = required <= 8.5 ? "Achievable" : "Ambitious but possible";
    statusClass = required <= 8.5 ? "status-success" : "status-warning";
    insight = required <= 8.5 ? "A consistent semester plan can put this target within reach." : "You will need strong, consistent results across the remaining semesters.";
  } else {
    status = "Not achievable at present";
    statusClass = "status-danger";
    insight = `Even a 10.00 average would fall short. A realistic maximum is ${((current * completed + 10 * remaining) / (completed + remaining)).toFixed(2)} CGPA.`;
  }
  const displayRequired = Math.max(0, required);
  const result = { type: "Goal", value: required <= 10 ? displayRequired.toFixed(2) : ">10", detail: `Target ${target.toFixed(2)} CGPA`, date: Date.now() };
  latestResult = result;

  $("#goal-result").innerHTML = `
    <div class="goal-visual"><div class="target-orb"><span>Required</span><strong>${required <= 10 ? displayRequired.toFixed(2) : ">10"}</strong></div></div>
    <div><span class="section-kicker">Recommended average SGPA</span><h3 class="${statusClass}">${status}</h3><p>${insight}</p>
    <div class="insight-meter" aria-label="Required SGPA ${displayRequired.toFixed(2)} out of 10"><span style="width:${Math.min(displayRequired * 10, 100)}%"></span></div>
    <p>Target: <strong>${target.toFixed(2)}</strong> · Remaining: <strong>${remaining} semester${remaining === 1 ? "" : "s"}</strong></p></div>`;
  saveHistory(result);
  showToast("Your academic goal plan is ready.");
}

function convertPercentage() {
  const cgpa = Number($("#percentage-cgpa").value);
  $("#percentage-result").textContent = Number.isFinite(cgpa) && cgpa >= .75 && cgpa <= 10 ? `${((cgpa - .75) * 10).toFixed(2)}%` : "—";
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || []; }
  catch { return []; }
}

function saveHistory(result) {
  const history = [result, ...getHistory()].slice(0, 8);
  localStorage.setItem(storageKey, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  $("#history-list").innerHTML = history.length ? history.map(item => `
    <div class="history-item">
      <div><span>${item.type}</span><strong>${item.value}</strong></div>
      <div><span>${item.detail}</span><time datetime="${new Date(item.date).toISOString()}">${new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</time></div>
    </div>`).join("") : `<p class="empty-history">Your recent results will show up here.</p>`;
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  $(".toast-container").append(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    window.setTimeout(() => toast.remove(), 250);
  }, 2800);
}

async function handleResultAction(action) {
  if (!latestResult) return;
  const text = `My ${latestResult.type} result is ${latestResult.value} (${latestResult.detail}) — calculated with KTU Calc.`;
  if (action === "copy") {
    await navigator.clipboard.writeText(text);
    showToast("Result copied to clipboard.");
  } else if (action === "share") {
    if (navigator.share) {
      try { await navigator.share({ title: "KTU Calc Result", text, url: location.href }); }
      catch (error) { if (error.name !== "AbortError") showToast("Sharing was unavailable.", "error"); }
    } else {
      await navigator.clipboard.writeText(text);
      showToast("Sharing is unsupported here, so the result was copied.");
    }
  } else if (action === "download") {
    downloadResultImage(latestResult);
  }
}

function downloadResultImage(result) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, "#07101f");
  gradient.addColorStop(1, "#1a1240");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 1200, 630);
  context.fillStyle = "rgba(76,141,255,.16)";
  context.beginPath(); context.arc(1050, 70, 280, 0, Math.PI * 2); context.fill();
  context.fillStyle = "#69a5ff"; context.font = "700 30px Arial"; context.fillText("KTU CALC", 80, 90);
  context.fillStyle = "#99a5be"; context.font = "28px Arial"; context.fillText(`${result.type} RESULT`, 80, 195);
  context.fillStyle = "#f4f7ff"; context.font = "700 150px Arial"; context.fillText(result.value, 75, 375);
  context.fillStyle = "#99a5be"; context.font = "30px Arial"; context.fillText(result.detail, 82, 445);
  context.fillStyle = "#38d996"; context.font = "700 25px Arial"; context.fillText("Calculated privately on your device", 82, 535);
  const link = document.createElement("a");
  link.download = `ktu-${result.type.toLowerCase()}-${result.value}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Result image downloaded.");
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("ktuCalcTheme", theme);
  $(".theme-toggle").setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

function setupParticles() {
  const container = $(".particles");
  for (let i = 0; i < 24; i += 1) {
    const particle = document.createElement("span");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `${Math.random() * 35}%`;
    particle.style.animationDelay = `${Math.random() * -12}s`;
    particle.style.animationDuration = `${9 + Math.random() * 9}s`;
    container.append(particle);
  }
}

function setupObservers() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: .12 });
  $$(".reveal").forEach(element => revealObserver.observe(element));

  const sections = $$("main section[id]");
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$(".nav-links a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -60%", threshold: 0 });
  sections.forEach(section => navObserver.observe(section));
}

function registerPwa() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
  }
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $$(".install-button").forEach(button => { button.hidden = false; });
  });
  $$(".install-button").forEach(button => button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return showToast("Use your browser menu to install this app.");
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $$(".install-button").forEach(item => { item.hidden = true; });
  }));
}

function initialize() {
  loadSubjectRows();
  buildSemesterInputs();
  renderHistory();
  setupParticles();
  setupObservers();
  registerPwa();
  $("#current-year").textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("ktuCalcTheme");
  const preferredTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  setTheme(savedTheme || preferredTheme);

  $("#programme-select").addEventListener("change", loadSubjectRows);
  $("#semester-select").addEventListener("change", loadSubjectRows);
  $("#calculate-sgpa").addEventListener("click", event => withLoading(event.currentTarget, calculateSgpa));
  $("#reset-sgpa").addEventListener("click", () => { loadSubjectRows(); showToast("SGPA form reset."); });
  $("#calculate-cgpa").addEventListener("click", event => withLoading(event.currentTarget, calculateCgpa));
  $("#reset-cgpa").addEventListener("click", () => { buildSemesterInputs(); resetResult("cgpa"); showToast("CGPA form reset."); });
  $("#goal-form").addEventListener("submit", calculateGoal);
  $("#percentage-cgpa").addEventListener("input", convertPercentage);
  $("#clear-history").addEventListener("click", () => { localStorage.removeItem(storageKey); renderHistory(); showToast("Calculation history cleared."); });
  $(".theme-toggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $(".menu-toggle").addEventListener("click", event => {
    const open = $("#nav-links").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-links a").forEach(link => link.addEventListener("click", () => {
    $("#nav-links").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("click", event => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) handleResultAction(actionButton.dataset.action);
  });
  window.addEventListener("scroll", () => $(".site-header").classList.toggle("scrolled", scrollY > 20), { passive: true });
}

document.addEventListener("DOMContentLoaded", initialize);
