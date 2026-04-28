---
title: "Asian Philosopher & Guru Timeline"
date: 2026-03-13
image: /photos/people/yogananda.jpg
c: darkslategray
description: "Lifetimes of modern Asian spiritual teachers."
writer:
  name: Juan
  url: https://www.linkedin.com/in/jundalisay/
icon: "Juan"
---




<style>
.tl-row { display: flex; align-items: center; gap: 12px; padding: 5px 8px; border-radius: 8px; }
.tl-row:hover { background: var(--color-background-secondary); }
.tl-name { width: 112px; font-size: 11px; color: var(--color-text-secondary); flex-shrink: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tl-track { flex: 1; height: 24px; background: var(--color-background-secondary); border-radius: 20px; position: relative; overflow: hidden; }
.tl-bar { position: absolute; height: 100%; border-radius: 20px; display: flex; align-items: center; justify-content: center; }
.tl-bar span { font-size: 9px; font-weight: 500; white-space: nowrap; padding: 0 5px; color: #fff; }
.axis-row { display: flex; gap: 12px; margin-bottom: 4px; }
.axis-spacer { width: 112px; flex-shrink: 0; }
.axis-labels { flex: 1; display: flex; justify-content: space-between; }
.axis-labels span { font-size: 10px; color: var(--color-text-tertiary); font-family: var(--font-mono); }
.legend { font-size: 11px; color: var(--color-text-tertiary); margin-top: 10px; padding-top: 10px; border-top: 0.5px solid var(--color-border-tertiary); display: flex; justify-content: space-between; }
.section-label { font-size: 10px; color: var(--color-text-tertiary); padding: 8px 8px 2px 120px; letter-spacing: 0.05em; text-transform: uppercase; }
</style>

<h2 class="sr-only">Timeline of modern spiritual lineage and thinkers from 1800 to 2025</h2>

<div style="padding: 1rem 0;">
  <p style="font-size: 11px; color: var(--color-text-tertiary); margin: 0 0 10px 0;">
    Modern spiritual lineage &amp; thinkers · 1800–2025
  </p>

  <div class="axis-row">
    <div class="axis-spacer"></div>
    <div class="axis-labels">
      <span>1800</span><span>1830</span><span>1860</span><span>1890</span><span>1920</span><span>1950</span><span>1980</span><span>2010</span><span>2025</span>
    </div>
  </div>

  <div id="rows"></div>

  <div class="legend">
    <span>Bar length represents lifespan · sorted by birth year</span>
    <span>* = living</span>
  </div>
</div>

<script>
const START = 1800, END = 2025, SPAN = END - START;

function left(birth) { return ((birth - START) / SPAN * 100).toFixed(3) + '%'; }
function width(birth, death) { return ((death - birth) / SPAN * 100).toFixed(3) + '%'; }

const gurus = [
  { name: 'Ramakrishna',        birth: 1836, death: 1886, color: '#BA7517' },
  { name: 'Shirdi Sai Baba',    birth: 1838, death: 1918, color: '#854F0B' },
  { name: 'Rabindranath Tagore',birth: 1861, death: 1941, color: '#3B6D11' },
  { name: 'Swami Vivekananda',  birth: 1863, death: 1902, color: '#D85A30' },
  { name: 'Sri Aurobindo',      birth: 1872, death: 1950, color: '#7F77DD' },
  { name: 'Swami Shivananda',   birth: 1887, death: 1963, color: '#185FA5' },
  { name: 'Yogananda',          birth: 1893, death: 1952, color: '#EF9F27' },
  { name: 'Anandamayi Ma',      birth: 1896, death: 1982, color: '#C2628C' },
  { name: 'P.R. Sarkar',        birth: 1921, death: 1990, color: '#1D9E75' },
  { name: 'Mahesh Yogi',        birth: 1918, death: 2008, color: '#533AB7' },
  { name: 'Daisaku Ikeda',      birth: 1928, death: 2023, color: '#0F6E56' },
  { name: 'Osho',               birth: 1931, death: 1990, color: '#993556' },
  { name: 'B.K.S. Iyengar',     birth: 1918, death: 2014, color: '#993C1D' },
  { name: 'K. Pattabhi Jois',   birth: 1915, death: 2009, color: '#63550A' },
  { name: 'Thich Nhat Hanh',    birth: 1926, death: 2022, color: '#3B6D11' },
  { name: 'Swami Prabhupada',   birth: 1896, death: 1977, color: '#E87815' },
  { name: 'Amma',               birth: 1953, death: 2025, color: '#D4537E' },
  { name: 'Sadhguru',           birth: 1957, death: 2025, color: '#378ADD' },
  { name: 'Ravi Shankar',       birth: 1956, death: 2025, color: '#639922' },
].sort((a, b) => a.birth - b.birth);

const container = document.getElementById('rows');
gurus.forEach(g => {
  const isLiving = g.death === 2025;
  const label = isLiving ? `${g.birth}–present *` : `${g.birth}–${g.death}`;
  container.innerHTML += `
    <div class="tl-row">
      <div class="tl-name" title="${g.name}">${g.name}</div>
      <div class="tl-track">
        <div class="tl-bar" style="left:${left(g.birth)};width:${width(g.birth, g.death)};background:${g.color};">
          <span>${label}</span>
        </div>
      </div>
    </div>`;
});
</script>
