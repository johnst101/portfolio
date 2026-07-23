// =========================================================
// CAREER "ASSEMBLY LINE" DATA
// Edit this array to update stations — everything renders from here.
// =========================================================
const stations = [
  {
    id: "optum",
    year: "2019",
    code: "01",
    title: "Ops / PM Intern",
    org: "Optum (UHG)",
    summary: "First real exposure to how large organizations run projects — and how much money gets saved by simply removing friction.",
    bullets: [
      "Supported project management work tied to an estimated $20M in client savings.",
    ],
  },
  {
    id: "supplychain",
    year: "2020–2022",
    code: "02",
    title: "Supply Chain & Category Mgmt",
    org: "Medtronic",
    summary: "Interned, then joined full-time. Built early Power BI dashboards, then took a stretch assignment negotiating supplier contracts — the closest thing to 'sourcing physical components' in this line.",
    bullets: [
      "Built and managed 10+ Power BI dashboards and multiple Power Apps tools.",
      "Negotiated contracts for a ~$17M component portfolio as Category Manager.",
      "Kept supply continuity through COVID-19 and material shortages.",
    ],
  },
  {
    id: "developer",
    year: "2022–2023",
    code: "03",
    title: "Analytics Developer",
    org: "Medtronic — Advanced Analytics",
    summary: "A reorg landed me on a centralized analytics team, and this is where I found the technical side I actually wanted to chase.",
    bullets: [
      "Shipped Supply Planning, GSM, and Direct Spend & Inflation analytics.",
      "Refactored 5+ legacy reports and rebuilt category/material data structures.",
    ],
  },
  {
    id: "senior",
    year: "2023–2025",
    code: "04",
    title: "Senior Analyst → Product Owner",
    org: "Medtronic — Advanced Analytics",
    summary: "Kept building while learning to lead — balancing hands-on development with the product-owner skillset of prioritization and stakeholder alignment.",
    bullets: [
      "Led the Open PO Pipeline analytic, contributing to $400M in inventory cost avoidance.",
      "Launched products drawing ~17K views in 30 days across major releases.",
      "Introduced Git-based version control for analytics via Azure DevOps.",
    ],
  },
  {
    id: "principal",
    year: "2025–Present",
    code: "05",
    title: "Principal Product Owner",
    org: "Medtronic — Advanced Analytics",
    summary: "Now leading squad-level technical strategy while going back to school to sharpen the engineering side.",
    bullets: [
      "Co-led the Strategic PAR Dashboard, tied to $12M+ ROI over two fiscal years.",
      "Sponsors AI-readiness and technical-debt work across the analytics ecosystem.",
      "Serves as an AI adoption champion (GitHub Copilot, Cursor) for the org.",
    ],
  },
  {
    id: "gradschool",
    year: "2025–2027",
    code: "06",
    title: "M.C.S., Big Data Systems",
    org: "Arizona State University",
    summary: "Graduate coursework aimed squarely at the systems side: distributed data, ML, and the engineering underneath analytics.",
    bullets: [
      "Coursework spanning statistical ML, knowledge representation, and mobile computing.",
      "Building this site and three side projects in parallel as applied practice.",
    ],
  },
];

// =========================================================
// RENDER
// =========================================================
const lineEl = document.getElementById("assemblyLine");
const detailEl = document.getElementById("assemblyDetail");

function renderStations() {
  lineEl.innerHTML = stations
    .map(
      (s, i) => `
      <button class="station" data-id="${s.id}" role="listitem" aria-expanded="false">
        <span class="station-node" aria-hidden="true">${s.code}</span>
        <span class="station-year">${s.year}</span>
        <span class="station-title">${s.title}</span>
        <span class="station-org">${s.org}</span>
      </button>`
    )
    .join("");
}

function renderDetail(station) {
  detailEl.innerHTML = `
    <div class="assembly-detail-head">
      <h3>${station.title}</h3>
      <span class="station-year">${station.org} · ${station.year}</span>
    </div>
    <p>${station.summary}</p>
    <ul>
      ${station.bullets.map((b) => `<li>${b}</li>`).join("")}
    </ul>
  `;
}

function activateStation(id) {
  const station = stations.find((s) => s.id === id);
  if (!station) return;

  document.querySelectorAll(".station").forEach((btn) => {
    const active = btn.dataset.id === id;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-expanded", String(active));
  });

  renderDetail(station);
}

renderStations();

lineEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".station");
  if (!btn) return;
  activateStation(btn.dataset.id);
});

// Default: open the most recent station so the detail panel isn't empty on load
activateStation(stations[stations.length - 1].id);
