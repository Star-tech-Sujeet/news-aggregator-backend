// ============================================================
// API CONFIG
// ============================================================
const API_BASE = 'http://localhost:3001';
const API_TIMEOUT_MS = 8000;

// ============================================================
// SVG ICONS
// ============================================================
const SVG = {
  bookmark: '<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  zap: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  beaker: '<svg viewBox="0 0 24 24"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  film: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/></svg>',
  wifi_off: '<svg viewBox="0 0 24 24"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  loader: '<svg viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
};

// ============================================================
// CATEGORIES & COLORS
// ============================================================
const CATEGORIES = ['All', 'Technology', 'Sports', 'Business', 'Science', 'Health', 'Entertainment'];
const CAT_ICONS = {
  All: SVG.globe, Technology: SVG.zap, Sports: SVG.trophy,
  Business: SVG.briefcase, Science: SVG.beaker, Health: SVG.heart, Entertainment: SVG.film,
};
const CAT_COLORS = {
  Technology: '#6366f1', Sports: '#22c55e', Business: '#f59e0b',
  Science: '#06b6d4', Health: '#ef4444', Entertainment: '#ec4899',
  General: '#8b5cf6', default: '#6366f1',
};

// Map display category names to NewsAPI category slugs
const CAT_API_MAP = {
  All: null,
  Technology: 'technology',
  Sports: 'sports',
  Business: 'business',
  Science: 'science',
  Health: 'health',
  Entertainment: 'entertainment',
};

// Fallback placeholder images per category
const CAT_FALLBACK_IMAGES = {
  Technology: 'https://picsum.photos/seed/tech_fallback/600/400',
  Sports: 'https://picsum.photos/seed/sports_fallback/600/400',
  Business: 'https://picsum.photos/seed/biz_fallback/600/400',
  Science: 'https://picsum.photos/seed/sci_fallback/600/400',
  Health: 'https://picsum.photos/seed/health_fallback/600/400',
  Entertainment: 'https://picsum.photos/seed/ent_fallback/600/400',
  General: 'https://picsum.photos/seed/gen_fallback/600/400',
  default: 'https://picsum.photos/seed/news_fallback/600/400',
};

// ============================================================
// STATE
// ============================================================
let rotation = 0, velocity = 0, targetRotation = null;
let isDragging = false, lastPointer = { x: 0, y: 0, time: 0 };
let autoRotate = true, showDetail = false, detailItemId = null;
let activeCategory = 'All', searchQuery = '', searchExpanded = false;
let bookmarks = new Set(), hasInteracted = false;
let filteredNews = [], activeIndex = 0, cardElements = [];

// API state
let isLoading = false, lastFetchedCategory = null, lastFetchedQuery = null;
let autoRefreshTimer = null;
const REFRESH_INTERVAL_MS = 15 * 60 * 1000; // 15 min matches server cache TTL

const FRICTION = 0.955, WHEEL_SENS = 0.00035, DRAG_SENS = 0.003;
const AUTO_SPEED = 0.004, MIN_VEL = 0.00008, LERP = 0.08;

// ============================================================
// DOM
// ============================================================
const $ = id => document.getElementById(id);
const orbitContainer = $('orbitContainer'), cardsContainer = $('cardsContainer');
const categoriesEl = $('categories'), centerLabel = $('centerLabel');
const centerCatDot = $('centerCatDot'), centerCatLabel = $('centerCatLabel'), centerTitle = $('centerTitle');
const popupOverlay = $('popupOverlay'), popupBox = $('popupBox'), popupClose = $('popupClose');
const popupImg = $('popupImg'), popupSource = $('popupSource');
const popupCatDot = $('popupCatDot'), popupCatName = $('popupCatName'), popupCatBadge = $('popupCatBadge');
const popupTime = $('popupTime'), popupTitle = $('popupTitle'), popupDesc = $('popupDesc');
const popupContent = $('popupContent'), popupAuthor = $('popupAuthor');
const popupReadTime = $('popupReadTime'), popupSourceMeta = $('popupSourceMeta');
const popupTags = $('popupTags');
const popupImgBookmark = $('popupImgBookmark');
const popupBookmarkBtn = $('popupBookmarkBtn');
const popupReadBtn = $('popupReadBtn');
const searchToggle = $('searchToggle'), searchInput = $('searchInput'), searchIcon = $('searchIcon');
const autoBtn = $('autoBtn'), autoIcon = $('autoIcon');
const scrollHint = $('scrollHint');
const articleCount = $('articleCount'), bookmarkCount = $('bookmarkCount'), bookmarkNum = $('bookmarkNum');
const orbitRing = $('orbitRing'), orbitRingInner = $('orbitRingInner');

// ============================================================
// DIMENSIONS
// ============================================================
function getOrbitDims() {
  const w = window.innerWidth;
  if (w < 500) return { rx: 140, ry: 90, cw: 148, ch: 108 };
  if (w < 768) return { rx: 195, ry: 110, cw: 170, ch: 122 };
  if (w < 1024) return { rx: 275, ry: 140, cw: 200, ch: 145 };
  if (w < 1400) return { rx: 355, ry: 168, cw: 225, ch: 162 };
  return { rx: 415, ry: 188, cw: 245, ch: 172 };
}
let dims = getOrbitDims();
function getCenterXY() { return { cx: window.innerWidth / 2, cy: window.innerHeight / 2 + 20 }; }

// ============================================================
// STARS
// ============================================================
function createStars() {
  const el = $('stars'); el.innerHTML = '';
  for (let i = 0; i < 55; i++) {
    const s = document.createElement('div'); s.className = 'star';
    const sz = Math.random() * 2 + 1;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;opacity:${Math.random() * .4 + .1};animation:twinkle ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 5}s infinite`;
    el.appendChild(s);
  }
}

// ============================================================
// LOADING STATE UI
// ============================================================
function showLoadingState() {
  cardsContainer.innerHTML = `
    <div class="empty-state" id="loadingState">
      <div class="loader-spinner">${SVG.loader}</div>
      <p style="font-size:16px;font-weight:600;margin-top:12px;color:#94a3b8">Fetching latest news…</p>
      <p style="font-size:12px;margin-top:6px;opacity:.5">Connecting to live feed</p>
    </div>`;
  centerLabel.style.opacity = '0';
}

function showErrorState(message, retryFn) {
  cardsContainer.innerHTML = `
    <div class="empty-state" id="errorState">
      <div style="opacity:.4;margin-bottom:12px">${SVG.wifi_off}</div>
      <p style="font-size:16px;font-weight:600;color:#f87171">${message}</p>
      <p style="font-size:12px;margin-top:6px;opacity:.5;max-width:260px;line-height:1.5">Make sure the backend server is running on port 3001</p>
      <button id="retryBtn" style="margin-top:20px;padding:10px 24px;border-radius:12px;background:rgba(99,102,241,.2);border:1px solid rgba(99,102,241,.4);color:#818cf8;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:8px">
        ${SVG.refresh} Retry
      </button>
    </div>`;
  centerLabel.style.opacity = '0';
  const retryBtn = $('retryBtn');
  if (retryBtn && retryFn) retryBtn.addEventListener('click', retryFn);
}

// ============================================================
// API LAYER
// ============================================================

/**
 * Fetch with timeout wrapper.
 */
async function fetchWithTimeout(url, ms = API_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Derive a display category name from the raw API source/category.
 * Maps to one of our known categories, or falls back to 'General'.
 */
function deriveCategory(rawCategory) {
  if (!rawCategory) return 'General';
  const slug = rawCategory.toLowerCase();
  const match = Object.entries(CAT_API_MAP).find(([, v]) => v === slug);
  return match ? match[0] : 'General';
}

/**
 * Estimate read time from description length.
 */
function estimateReadTime(description) {
  if (!description) return '2 min';
  const words = description.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
}

/**
 * Format publishedAt to a human-friendly relative time.
 */
function formatRelativeTime(iso) {
  if (!iso) return 'Recently';
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    return 'Recently';
  }
}

/**
 * Normalise a raw API article into the shape the UI expects.
 */
function normaliseArticle(raw, index, categoryHint) {
  const cat = categoryHint || deriveCategory(null);
  const fallbackImg = CAT_FALLBACK_IMAGES[cat] || CAT_FALLBACK_IMAGES.default;
  return {
    id: `${raw.source || 'src'}-${index}-${Date.now()}`,
    title: raw.title || 'Untitled',
    description: raw.description || 'No summary available.',
    content: '', // intentionally empty — users read full article at source
    url: raw.url || '#',
    source: raw.source || 'Unknown',
    category: cat,
    image: raw.urlToImage || fallbackImg,
    time: formatRelativeTime(raw.publishedAt),
    author: raw.source || 'Staff Reporter',
    readTime: estimateReadTime(raw.description),
    tags: extractTags(raw.title, raw.description),
    publishedAt: raw.publishedAt,
  };
}

/**
 * Simple keyword extraction for tags.
 */
function extractTags(title = '', description = '') {
  const stop = new Set(['the','a','an','in','on','at','to','for','of','and','or','is','was','are','were','be','been','with','by','from','that','this','have','has','had','will','would','could','should','may','might','its','it','he','she','they','we','i','but','not','as','up','if','so','do','did','does','than','then','into','more','after','new','also','about','over','most','said','out']);
  const words = (title + ' ' + description)
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 4 && !stop.has(w));
  const freq = {};
  words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([w]) => w.charAt(0).toUpperCase() + w.slice(1));
}

/**
 * Central fetch function — handles all three endpoints.
 * Returns normalised article array.
 */
async function fetchNewsFromAPI(category, query) {
  let url;
  if (query && query.trim()) {
    url = `${API_BASE}/news/search?q=${encodeURIComponent(query.trim())}&pageSize=20`;
  } else if (!category || category === 'All') {
    url = `${API_BASE}/news?pageSize=20`;
  } else {
    const apiSlug = CAT_API_MAP[category] || category.toLowerCase();
    url = `${API_BASE}/news/category/${apiSlug}?pageSize=20`;
  }

  const res = await fetchWithTimeout(url);

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Server error ${res.status}`);
  }

  const data = await res.json();

  if (!data.success) {
    throw new Error(data?.error?.message || 'API returned an error');
  }

  const catHint = query ? 'General' : (category || 'General');
  return (data.articles || []).map((raw, i) => normaliseArticle(raw, i, catHint));
}

// ============================================================
// LOAD NEWS (main entry point for data loading)
// ============================================================
async function loadNews(cat = activeCategory, q = searchQuery) {
  if (isLoading) return;
  isLoading = true;

  showLoadingState();
  rotation = 0; velocity = 0; targetRotation = null;

  try {
    const articles = await fetchNewsFromAPI(cat, q);
    filteredNews = articles;
    lastFetchedCategory = cat;
    lastFetchedQuery = q;
    renderCards();
    updateBottomBar();
    scheduleAutoRefresh();
  } catch (err) {
    console.error('[NewsOrbit] Fetch error:', err);
    showErrorState(err.message || 'Failed to load news', () => loadNews(cat, q));
    filteredNews = [];
    updateBottomBar();
  } finally {
    isLoading = false;
  }
}

// ============================================================
// AUTO-REFRESH
// ============================================================
function scheduleAutoRefresh() {
  if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
  autoRefreshTimer = setTimeout(() => {
    if (!showDetail && !isDragging) {
      loadNews(lastFetchedCategory || activeCategory, lastFetchedQuery || searchQuery);
    } else {
      // Retry later if user is interacting
      scheduleAutoRefresh();
    }
  }, REFRESH_INTERVAL_MS);
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCategories() {
  categoriesEl.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-pill' + (activeCategory === cat ? ' active' : '');
    btn.innerHTML = `${CAT_ICONS[cat] || ''}  <span>${cat}</span>`;
    btn.addEventListener('click', () => {
      if (activeCategory === cat && !searchQuery) return;
      activeCategory = cat;
      searchQuery = ''; searchInput.value = '';
      renderCategories();
      closePopup();
      loadNews(cat, '');
    });
    categoriesEl.appendChild(btn);
  });
}

// ============================================================
// RENDER CARDS
// ============================================================
function renderCards() {
  cardsContainer.innerHTML = ''; cardElements = [];

  if (filteredNews.length === 0) {
    cardsContainer.innerHTML = `
      <div class="empty-state">
        ${SVG.search}
        <p style="font-size:18px;font-weight:600">No articles found</p>
        <p style="font-size:14px;margin-top:8px;opacity:.6">Try adjusting your search or category</p>
      </div>`;
    centerLabel.style.opacity = '0';
    return;
  }

  filteredNews.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'news-card'; card.dataset.index = i; card.dataset.id = item.id;
    const cc = CAT_COLORS[item.category] || CAT_COLORS.default;
    const ib = bookmarks.has(item.id);

    card.innerHTML = `
      <button class="bookmark-btn${ib ? ' bookmarked' : ''}" data-id="${item.id}">${SVG.bookmark}</button>
      <div class="card-img-wrap">
        <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy" draggable="false"
          onerror="this.src='${CAT_FALLBACK_IMAGES[item.category] || CAT_FALLBACK_IMAGES.default}'">
        <span class="card-source">${item.source}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <div class="card-cat">
            <div class="card-cat-dot" style="background:${cc}"></div>
            <span class="card-cat-label">${item.category}</span>
          </div>
          <span class="card-time">${item.time}</span>
        </div>
      </div>`;

    card.addEventListener('click', e => { if (e.target.closest('.bookmark-btn')) return; onCardClick(i); });
    card.querySelector('.bookmark-btn').addEventListener('click', e => { e.stopPropagation(); toggleBookmark(item.id); });
    cardsContainer.appendChild(card); cardElements.push(card);
  });
}

// ============================================================
// POSITIONING
// ============================================================
function getCardPos(index, total, rot) {
  const angle = (index / total) * Math.PI * 2 + rot;
  const x = Math.sin(angle) * dims.rx, y = -Math.cos(angle) * dims.ry;
  const depth = -Math.cos(angle), nd = (depth + 1) / 2;
  return { x, y, scale: .45 + nd * .65, opacity: .15 + nd * .85, zIndex: Math.round(nd * 100), blur: Math.max(0, (1 - nd) * 3), depth, angle };
}

function getActiveIdx(rot, total) {
  if (!total) return -1;
  let best = 0, bestD = Infinity;
  for (let i = 0; i < total; i++) {
    const a = (i / total) * Math.PI * 2 + rot;
    const n = ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const d = Math.min(Math.abs(n - Math.PI), Math.PI * 2 - Math.abs(n - Math.PI));
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}

function getTargetRot(idx, total, cur) {
  const base = Math.PI - (idx / total) * Math.PI * 2;
  const diff = base - cur;
  const nd = ((diff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return cur + nd;
}

// ============================================================
// UPDATE LOOP
// ============================================================
function updatePositions() {
  const { cx, cy } = getCenterXY(); const total = filteredNews.length;
  if (!total) return;
  activeIndex = getActiveIdx(rotation, total);
  cardElements.forEach((card, i) => {
    const p = getCardPos(i, total, rotation);
    const tx = p.x + cx - dims.cw / 2, ty = p.y + cy - dims.ch / 2;
    card.style.transform = `translate(${tx}px,${ty}px) scale(${p.scale})`;
    card.style.opacity = p.opacity; card.style.zIndex = p.zIndex;
    card.style.filter = p.blur > .5 ? `blur(${p.blur}px)` : 'none';
    card.style.width = dims.cw + 'px'; card.style.height = dims.ch + 'px';
    i === activeIndex ? card.classList.add('active-card') : card.classList.remove('active-card');
  });

  orbitRing.style.cssText = `width:${dims.rx * 2}px;height:${dims.ry * 2}px;left:${cx - dims.rx}px;top:${cy - dims.ry}px`;
  orbitRingInner.style.cssText = `width:${dims.rx * 2 - 60}px;height:${dims.ry * 2 - 30}px;left:${cx - dims.rx + 30}px;top:${cy - dims.ry + 15}px`;

  if (!showDetail && filteredNews[activeIndex]) {
    const item = filteredNews[activeIndex];
    const cc = CAT_COLORS[item.category] || CAT_COLORS.default;
    centerCatDot.style.background = cc; centerCatDot.style.boxShadow = `0 0 10px ${cc}`;
    centerCatLabel.style.color = cc; centerCatLabel.textContent = item.category;
    centerTitle.textContent = item.title; centerLabel.style.opacity = '1';
  } else { centerLabel.style.opacity = '0'; }
}

let lastTime = performance.now();
function tick(now) {
  const dt = Math.min((now - lastTime) / 16.667, 3); lastTime = now;
  if (targetRotation !== null) {
    const diff = targetRotation - rotation;
    if (Math.abs(diff) < .005) { rotation = targetRotation; targetRotation = null; velocity = 0; }
    else { rotation += diff * LERP * dt; velocity = 0; }
  } else {
    if (autoRotate && !isDragging && !showDetail && !isLoading) {
      velocity += AUTO_SPEED * .02 * dt; if (velocity > AUTO_SPEED) velocity = AUTO_SPEED;
    }
    velocity *= Math.pow(FRICTION, dt);
    if (Math.abs(velocity) < MIN_VEL) velocity = 0;
    rotation += velocity * dt;
  }
  updatePositions();
  requestAnimationFrame(tick);
}

// ============================================================
// CARD CLICK → POPUP
// ============================================================
function onCardClick(idx) {
  if (!filteredNews.length) return;
  const clickedCard = cardElements[idx];

  cardElements.forEach((card, i) => {
    if (i !== idx) card.classList.add('fade-out');
  });
  clickedCard.classList.add('expanding');

  const { cx, cy } = getCenterXY();
  clickedCard.style.transform = `translate(${cx - dims.cw / 2}px, ${cy - dims.ch / 2}px) scale(1.8)`;

  setTimeout(() => {
    const item = filteredNews[idx];
    detailItemId = item.id;
    openPopup(item);
    cardElements.forEach(card => { card.classList.remove('fade-out', 'expanding'); });
  }, 400);
}

// ============================================================
// POPUP
// ============================================================
function openPopup(item) {
  showDetail = true;
  const cc = CAT_COLORS[item.category] || CAT_COLORS.default;
  const fallbackImg = CAT_FALLBACK_IMAGES[item.category] || CAT_FALLBACK_IMAGES.default;

  popupImg.src = item.image || fallbackImg;
  popupImg.alt = item.title;
  popupImg.onerror = function() { this.src = fallbackImg; };
  popupSource.textContent = item.source;
  popupCatDot.style.background = cc;
  popupCatBadge.style.background = `${cc}15`;
  popupCatBadge.style.border = `1px solid ${cc}30`;
  popupCatName.style.color = cc;
  popupCatName.textContent = item.category;
  popupTime.textContent = item.time;
  popupTitle.textContent = item.title;
  popupDesc.textContent = item.description;

  // Show description as content (no raw content from API — user redirects to source)
  popupContent.textContent = item.description
    ? `${item.description} Read the full story at ${item.source} for complete coverage and analysis.`
    : `Visit ${item.source} to read the complete article.`;

  popupAuthor.textContent = item.author || item.source;
  popupReadTime.textContent = item.readTime;
  popupSourceMeta.textContent = item.source;

  // Wire Read Full Article button to actual URL
  popupReadBtn.onclick = () => {
    if (item.url && item.url !== '#') window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  // Tags
  popupTags.innerHTML = '';
  (item.tags || []).forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'popup-tag'; tag.textContent = '#' + t;
    popupTags.appendChild(tag);
  });

  updatePopupBookmarks();
  popupOverlay.classList.add('visible');

  const body = popupBox.querySelector('.popup-body');
  if (body) body.scrollTop = 0;

  popupImg.style.transform = 'scale(1)';
  requestAnimationFrame(() => { popupImg.style.transform = 'scale(1.05)'; });
}

function closePopup() {
  showDetail = false;
  popupOverlay.classList.remove('visible');
  detailItemId = null;
}

function updatePopupBookmarks() {
  const ib = detailItemId && bookmarks.has(detailItemId);
  [popupImgBookmark, popupBookmarkBtn].forEach(btn => {
    ib ? btn.classList.add('bookmarked') : btn.classList.remove('bookmarked');
  });
}

popupClose.addEventListener('click', e => { e.stopPropagation(); closePopup(); });
popupOverlay.addEventListener('click', e => { if (e.target === popupOverlay) closePopup(); });
popupImgBookmark.addEventListener('click', e => {
  e.stopPropagation();
  if (detailItemId) { toggleBookmark(detailItemId); updatePopupBookmarks(); }
});
popupBookmarkBtn.addEventListener('click', e => {
  e.stopPropagation();
  if (detailItemId) { toggleBookmark(detailItemId); updatePopupBookmarks(); }
});
popupBox.addEventListener('pointerdown', e => e.stopPropagation());
popupBox.addEventListener('wheel', e => e.stopPropagation(), { passive: false });

// ============================================================
// BOOKMARKS
// ============================================================
function toggleBookmark(id) {
  bookmarks.has(id) ? bookmarks.delete(id) : bookmarks.add(id);
  updateBookmarkUI(id); updateBottomBar();
}
function updateBookmarkUI(id) {
  const btn = cardsContainer.querySelector(`.bookmark-btn[data-id="${id}"]`);
  if (btn) { bookmarks.has(id) ? btn.classList.add('bookmarked') : btn.classList.remove('bookmarked'); }
}
function updateBottomBar() {
  articleCount.textContent = `${filteredNews.length} article${filteredNews.length !== 1 ? 's' : ''}`;
  if (bookmarks.size > 0) { bookmarkCount.style.display = 'flex'; bookmarkNum.textContent = bookmarks.size; }
  else { bookmarkCount.style.display = 'none'; }
}

// ============================================================
// SEARCH — debounced
// ============================================================
let searchDebounceTimer = null;
function debounce(fn, delay) {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(fn, delay);
}

searchToggle.addEventListener('click', () => {
  searchExpanded = !searchExpanded;
  if (searchExpanded) {
    searchInput.classList.add('expanded');
    searchIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
    setTimeout(() => searchInput.focus(), 150);
  } else {
    searchInput.classList.remove('expanded');
    searchIcon.innerHTML = '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>';
    if (searchQuery) {
      searchQuery = ''; searchInput.value = '';
      closePopup();
      loadNews(activeCategory, '');
    }
  }
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  closePopup();
  debounce(() => {
    loadNews(activeCategory, searchQuery);
  }, 500); // 500ms debounce to avoid hammering the API
});
searchInput.addEventListener('pointerdown', e => e.stopPropagation());

// ============================================================
// AUTO-ROTATE TOGGLE
// ============================================================
autoBtn.addEventListener('click', () => {
  autoRotate = !autoRotate;
  if (autoRotate) {
    autoBtn.classList.add('active');
    autoIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    autoBtn.querySelector('.auto-label').textContent = 'Pause';
  } else {
    autoBtn.classList.remove('active');
    autoIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    autoBtn.querySelector('.auto-label').textContent = 'Auto';
  }
});

// ============================================================
// ORBIT EVENTS
// ============================================================
orbitContainer.addEventListener('wheel', e => {
  e.preventDefault();
  hasInteracted = true; scrollHint.style.display = 'none';
  targetRotation = null;
  if (showDetail) closePopup();
  velocity += e.deltaY * WHEEL_SENS;
}, { passive: false });

orbitContainer.addEventListener('pointerdown', e => {
  if (e.target.closest('.bookmark-btn') || e.target.closest('.popup-overlay')) return;
  isDragging = true; hasInteracted = true; scrollHint.style.display = 'none';
  targetRotation = null; velocity = 0;
  lastPointer = { x: e.clientX, y: e.clientY, time: performance.now() };
  orbitContainer.classList.add('dragging');
  orbitContainer.setPointerCapture(e.pointerId);
});

orbitContainer.addEventListener('pointermove', e => {
  if (!isDragging) return;
  const dx = e.clientX - lastPointer.x;
  const now = performance.now();
  const dt = Math.max(now - lastPointer.time, 1);
  rotation += dx * DRAG_SENS * .15;
  velocity = (dx * DRAG_SENS * .15) / (dt / 16.667);
  lastPointer = { x: e.clientX, y: e.clientY, time: now };
});

function onPointerUp() { isDragging = false; orbitContainer.classList.remove('dragging'); }
orbitContainer.addEventListener('pointerup', onPointerUp);
orbitContainer.addEventListener('pointercancel', onPointerUp);

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (showDetail) closePopup();
    if (searchExpanded) {
      searchExpanded = false; searchInput.classList.remove('expanded');
      searchIcon.innerHTML = '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>';
      if (searchQuery) { searchQuery = ''; searchInput.value = ''; loadNews(activeCategory, ''); }
    }
  }
  if (document.activeElement === searchInput) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    hasInteracted = true; scrollHint.style.display = 'none';
    targetRotation = null; closePopup(); velocity += .02;
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    hasInteracted = true; scrollHint.style.display = 'none';
    targetRotation = null; closePopup(); velocity -= .02;
  }
  if (e.key === 'f' && filteredNews.length > 0 && !showDetail) onCardClick(activeIndex);
  if (e.key === 'r' && !showDetail) loadNews(activeCategory, searchQuery); // manual refresh
});

// ============================================================
// RESIZE
// ============================================================
window.addEventListener('resize', () => { dims = getOrbitDims(); updatePositions(); });

// ============================================================
// INJECT LOADING SPINNER STYLES (not in original CSS)
// ============================================================
(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .loader-spinner svg {
      width: 48px; height: 48px;
      stroke: #6366f1; fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
      animation: spin 1s linear infinite;
      opacity: 0.7;
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .empty-state { display: flex; flex-direction: column; align-items: center; }
    .empty-state svg { width: 48px; height: 48px; stroke: currentColor; fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; margin-bottom: 16px; opacity: .3; }
    #retryBtn svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    #retryBtn:hover { background: rgba(99,102,241,.35) !important; }
  `;
  document.head.appendChild(style);
})();

// ============================================================
// INIT
// ============================================================
createStars();
renderCategories();
updateBottomBar();
requestAnimationFrame(tick);

// Kick off initial data load
loadNews('All', '');
