---
title: "Research"
menu: "main"
weight: 1
---

<style>
:root {
  --accent: #e74c3c; /* red */
}

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
.research-card:hover { background: #2a2a2a; }

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
.research-title:hover { color: #ffffff; }

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
.badge:hover { background: #3f4e63; }

/* Typing sentence (responsive) */
.typing-container {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  color: var(--accent);
  font-weight: 500;
  /* Responsive font size: small screens -> smaller, large screens -> larger */
  font-size: clamp(1rem, 1.2vw + 0.7rem, 1.25rem);
  line-height: 1.4;
  max-width: 100%;
  /* Allow wrapping on mobile so full sentence is readable */
  white-space: normal;
  word-wrap: break-word;
}

/* The text that fills up as we type (via JS) */
#typing-text {
  display: inline;
}

/* Three-dot animation using width over "..." for broad support */
.typing-dots {
  display: inline-block;
  overflow: hidden;
  width: 3ch; /* shows up to '...' */
}
.typing-dots::after {
  content: "...";
  font-weight: 700;
}
@keyframes dots-reveal {
  from { width: 0ch; }
  to   { width: 3ch; }
}
.typing-dots {
  animation: dots-reveal 1s steps(3, end) infinite;
}

/* Fade out the entire sentence (text + dots) before restarting */
@keyframes fadeOut {
  to { opacity: 0; }
}
.fade-out {
  animation: fadeOut 0.8s ease forwards;
}

/* Respect users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .typing-dots { animation: none; }
  .fade-out { animation: none; }
}
</style>

# Research

<!-- Typing line -->
<div class="typing-container" id="typing-container">
  <span id="typing-text" aria-live="polite"></span>
  <span class="typing-dots" aria-hidden="true"></span>
</div>

<script>
(function () {
  // Edit your keywords here:
  const keywords = [
    "Industrial Organisation",
    "Environmental Economics",
    "Digital Markets",
    "Platform Competition",
    "Online Advertising",
    "Market Design"
  ];

  const sentence = keywords.join(", ");
  const textEl = document.getElementById("typing-text");
  const container = document.getElementById("typing-container");

  // Speeds & timings (tweak as you like)
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TYPE_SPEED = prefersReduced ? 0 : 26;  // ms per character
  const HOLD_AFTER_TYPE_MS = prefersReduced ? 800 : 1200;
  const FADE_DURATION_MS = prefersReduced ? 0 : 800;

  let i = 0;

  function typeNextChar() {
    if (i <= sentence.length) {
      textEl.textContent = sentence.slice(0, i++);
      if (TYPE_SPEED === 0) {
        // No typing animation, show full text at once
        i = sentence.length + 1;
        textEl.textContent = sentence;
        setTimeout(startFade, HOLD_AFTER_TYPE_MS);
      } else {
        setTimeout(typeNextChar, TYPE_SPEED);
      }
    } else {
      setTimeout(startFade, HOLD_AFTER_TYPE_MS);
    }
  }

  function startFade() {
    if (FADE_DURATION_MS === 0) {
      resetAndRestart();
    } else {
      container.classList.add("fade-out");
      setTimeout(resetAndRestart, FADE_DURATION_MS + 50);
    }
  }

  function resetAndRestart() {
    container.classList.remove("fade-out");
    textEl.textContent = "";
    i = 0;
    // Small delay to avoid layout thrash before retyping
    setTimeout(typeNextChar, 200);
  }

  document.addEventListener("DOMContentLoaded", typeNextChar);
})();
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
