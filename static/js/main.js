/* Superphysics main.js */

// ── THEME ──────────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const html = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    iconSun && iconSun.classList.remove('hidden');
    iconMoon && iconMoon.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    iconSun && iconSun.classList.add('hidden');
    iconMoon && iconMoon.classList.remove('hidden');
  }
}

// Initialize icons on load
applyTheme(html.classList.contains('dark') ? 'dark' : 'light');

themeToggle?.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('sp-theme', next);
  applyTheme(next);
});

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (navbar) {
    if (current > 80) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
    // hide/show on scroll direction
    if (current > lastScroll && current > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
  }
  lastScroll = Math.max(0, current);
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeMenuIcon = document.getElementById('closeMenuIcon');

mobileMenuBtn?.addEventListener('click', () => {
  const open = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', open);
  hamburgerIcon?.classList.toggle('hidden', !open);
  closeMenuIcon?.classList.toggle('hidden', open);
});

// ── LANGUAGE DROPDOWN ────────────────────────────────────────────────────
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');

langToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!langToggle?.contains(e.target) && !langDropdown?.contains(e.target)) {
    langDropdown?.classList.add('hidden');
  }
});



// ── SEARCH ───────────────────────────────────────────────────────────────
const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

let searchIndex = null;


// ── CONTENT AREA SEARCH BUTTON ───────────────────────────────────────────
const contentSearchBtn = document.getElementById('contentSearchBtn');

if (contentSearchBtn) {
  contentSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearchModal();
  });
}



async function loadSearchIndex() {
  if (searchIndex) return;
  try {
    // Try to find the search index for current language
    const lang = document.documentElement.lang || 'en';
    let url = '/index.json';
    if (lang !== 'en') url = `/${lang}/index.json`;
    const res = await fetch(url);
    if (res.ok) {
      searchIndex = await res.json();
    } else {
      // fallback to root
      const res2 = await fetch('/index.json');
      if (res2.ok) searchIndex = await res2.json();
    }
  } catch(e) {
    console.warn('Search index not available:', e);
    searchIndex = [];
  }
}

function openSearchModal() {
  searchOverlay.classList.remove('hidden');
  searchOverlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 50);
  loadSearchIndex();
}

function closeSearchModal() {
  searchOverlay.classList.add('hidden');
  searchOverlay.classList.remove('flex');
  document.body.style.overflow = '';
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
}

openSearch?.addEventListener('click', openSearchModal);
closeSearch?.addEventListener('click', closeSearchModal);
searchOverlay?.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearchModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearchModal();
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearchModal();
  }
});

searchInput?.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query || !searchIndex) {
    searchResults.innerHTML = '';
    return;
  }

  const results = searchIndex.filter(item => {
    const title = (item.title || '').toLowerCase();
    const desc = (item.description || '').toLowerCase();
    return title.includes(query) || desc.includes(query);
  }).slice(0, 10);

  if (results.length === 0) {
    searchResults.innerHTML = `<div class="px-5 py-8 text-center text-sp-muted font-display text-sm">No results found for "<strong class="text-sp-text">${escapeHtml(query)}</strong>"</div>`;
    return;
  }

  searchResults.innerHTML = results.map(item => {
    const title = highlight(item.title || '', query);
    const desc = item.description ? highlight(item.description.substring(0, 120), query) : '';
    return `
    <a href="${item.url}" class="block px-5 py-4 hover:bg-teal-50 dark:hover:bg-teal-950/20 transition-colors group">
      <div class="flex items-start gap-3">
        <div class="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-display font-semibold text-sm text-sp-text group-hover:text-teal-600 transition-colors">${title}</p>
          ${desc ? `<p class="text-xs text-sp-muted mt-0.5 line-clamp-1">${desc}</p>` : ''}
          <p class="text-xs text-teal-500/60 mt-1">${item.section || ''}</p>
        </div>
      </div>
    </a>`;
  }).join('');
});

function highlight(text, query) {
  const safe = escapeHtml(text);
  const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return safe.replace(re, '<mark class="bg-teal-200 dark:bg-teal-800/60 text-inherit rounded px-0.5">$1</mark>');
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}



// ── SCROLL TO TOP ─────────────────────────────────────────────────────────
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 400) {
    scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    scrollTopBtn.classList.add('opacity-100');
  } else {
    scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
    scrollTopBtn.classList.remove('opacity-100');
  }
}, { passive: true });

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── CARD REVEAL (Intersection Observer) ──────────────────────────────────
const revealCards = document.querySelectorAll('.card-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// Stagger children within each grid parent
document.querySelectorAll('.grid').forEach(grid => {
  const cards = grid.querySelectorAll('.card-reveal');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
    observer.observe(card);
  });
});

// Also observe standalone card-reveals
revealCards.forEach(card => {
  if (!card.closest('.grid')) observer.observe(card);
});

// ── TOC ACTIVE LINK ───────────────────────────────────────────────────────
const tocLinks = document.querySelectorAll('#toc-nav a');
if (tocLinks.length) {
  const headings = Array.from(document.querySelectorAll('.prose-sp h2, .prose-sp h3, .prose-sp h4'));

  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`#toc-nav a[href="#${entry.target.id}"]`);
        link?.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  headings.forEach(h => headingObserver.observe(h));
}

// ── DETAILS SUMMARY ARROW ─────────────────────────────────────────────────
document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', function() {
    const arrow = this.querySelector('.details-arrow');
    if (arrow) arrow.style.transform = this.open ? 'rotate(180deg)' : '';
  });
});

