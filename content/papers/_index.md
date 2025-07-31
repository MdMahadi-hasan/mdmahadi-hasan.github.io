---
title: "Research"
menu: "main"
weight: 1
---

<style>
/* Card container */
.research-card {
  border-left: 2px solid #7f8c8d;
  background: #1e1e1e;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
}
.research-card:hover {
  background: #2a2a2a;
}

/* Year headings */
.research-year {
  color: #b0bec5;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

/* Paper title */
.research-title {
  color: #ecf0f1;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: none;
  margin: 0.15rem 0;
}
.research-title:hover {
  color: #ffffff;
}

/* Author line */
.research-author {
  font-style: italic;
  color: #95a5a6;
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
}

/* Badges */
.badge {
  display: inline-block;
  padding: 0.2em 0.5em;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  border-radius: 0.25rem;
  text-decoration: none;
  margin-right: 0.3rem;
  background: #2e3b4e;
  color: #ecf0f1;
  transition: background 0.2s ease;
}
.badge:hover {
  background: #3f4e63;
}

/* Intro section */
.typing-intro {
  font-size: 1.1rem;
  color: #e74c3c; /* Red */
  margin-bottom: 1.5rem;
  font-weight: 500;
  height: 1.5rem;
  position: relative;
}
#typing-text::after {
  content: '...';
  animation: dots 1s steps(3, end) infinite;
  margin-left: 4px;
  font-weight: bold;
  color: #e74c3c;
}
@keyframes dots {
  0%   { content: ''; }
  33%  { content: '.'; }
  66%  { content: '..'; }
  100% { content: '...'; }
}
</style>

# Research

<div class="typing-intro">
  <span id="typing-text"></span>
</div>

<script>
const texts = [
  "Industrial Organisation",
  "Environmental Economics",
  "Digital Markets",
  "Platform Competition",
  "Online Advertising",
  "Market Design"
];

let current = 0;
const textEl = document.getElementById("typing-text");

function cycleText() {
  textEl.textContent = texts[current];
  current = (current + 1) % texts.length;
}
cycleText(); // initial
setInterval(cycleText, 2500); // every 2.5 seconds
</script>

<div class="research-year">2025</div>

<div class="research-card">
  <div class="research-title">AI Agents and the Attention Lemons Problem in Two-Sided Ad Markets</div>
  <div class="research-author">Md Mahadi Hasan</div>
  <a class="badge" href="https://arxiv.org/abs/2507.22435">arXiv</a>
</div>

<div class="research-card">
  <div class="research-title">A Model of Ride Dispatch in Informal Market under Rival Entry</div>
  <div class="research-author">Md Mahadi Hasan</div>
  <a class="badge" href="https://arxiv.org/abs/2505.20554">arXiv</a>
  <a class="badge" href="https://github.com/your-repo">GitHub</a>
</div>

<div class="research-year">2024</div>

<div class="research-card">
  <div class="research-title">Federal and State Management of Reservoir Recreation <span style="font-style:normal;font-weight:400;">(Master’s Thesis)</span></div>
  <div class="research-author">Md Mahadi Hasan</div>
  <a class="badge" href="/files/thesis.pdf">PDF</a>
  <a class="badge" href="https://library.ndsu.edu/ir/items/da172bce-9782-46ba-9ad3-0dde232a9fe1/full">NDSU Web</a>
  <a class="badge" href="https://www.proquest.com/openview/824fc761c6c67044ab49d92d7dc462b6/1?pq-origsite=gscholar&cbl=18750&diss=y">ProQuest</a>
</div>
