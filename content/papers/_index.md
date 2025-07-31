---
title: "Research"
menu: "main"
weight: 1
---

<style>
/* ---------- Card styling ---------- */
.research-card {
  border-left: 2px solid #7f8c8d;
  background: #1e1e1e;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: background 0.3s ease;
}
.research-card:hover { background: #2a2a2a; }

/* ---------- Headings ---------- */
.research-year {
  color: #b0bec5;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  font-weight: 500;
}
.research-title {
  color: #ecf0f1;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.15rem 0;
}
.research-title:hover { color: #ffffff; }
.research-author {
  font-style: italic;
  color: #95a5a6;
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
}

/* ---------- Badges ---------- */
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

/* ---------- Typing animation ---------- */
.typing-wrapper {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.1rem;
  color: #e74c3c;   /* red text + dots */
  font-weight: 500;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;  /* let text/dots wrap together */
}

#typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: normal;     /* allow wrapping on mobile */
  word-break: break-word;
  max-width: 100%;
  animation: typing 6s steps(80, end) 1, fadeOut 1s ease 6s forwards;
}

/* animated dots */
.typing-dots {
  font-weight: bold;
  animation: dots 1s steps(3,end) infinite;
}

/* ---------- Keyframes ---------- */
@keyframes typing   { from { width: 0 } to { width: 100% } }
@keyframes fadeOut  { to   { opacity: 0 } }
@keyframes dots {
  0%   { content: ''   }
  25%  { content: '.'  }
  50%  { content: '..' }
  100% { content: '...' }
}

/* ---------- Responsive tweaks ---------- */
@media (max-width: 600px) {
  .typing-wrapper { font-size: 1rem; }
}
</style>

# Research

<div class="typing-wrapper">
  <div id="typing-text">
    Industrial Organisation, Environmental Economics, Digital Markets, Platform Competition, Online Advertising, Market Design
  </div>
  <div class="typing-dots">...</div>
</div>

<script>
/* Restart the typing + fade cycle every 8 s */
function restartTyping() {
  const txt = document.getElementById('typing-text');
  txt.style.animation = 'none';
  void txt.offsetWidth;                  // reflow to reset
  txt.style.animation =
    'typing 6s steps(80,end) 1, fadeOut 1s ease 6s forwards';
}
setInterval(restartTyping, 8000);
</script>

<!-- ---------- Research list ---------- -->
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
  <div class="research-title">
    Federal and State Management of Reservoir Recreation
    <span style="font-style:normal;font-weight:400;">(Master’s Thesis)</span>
  </div>
  <div class="research-author">Md Mahadi Hasan</div>
  <a class="badge" href="/files/thesis.pdf">PDF</a>
  <a class="badge" href="https://library.ndsu.edu/ir/items/da172bce-9782-46ba-9ad3-0dde232a9fe1/full">NDSU Web</a>
  <a class="badge" href="https://www.proquest.com/openview/824fc761c6c67044ab49d92d7dc462b6/1?pq-origsite=gscholar&cbl=18750&diss=y">ProQuest</a>
</div>
