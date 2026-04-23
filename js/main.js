/* =============================================
   De Al-Ándalus al Nuevo Mundo
   Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initIngredientCards();
  initScrollReveal();
  initActiveNav();
  initMobileNav();
  initMap();
});

/* ── Navbar: add scrolled class ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}

/* ── Ingredient cards: click/keyboard to flip ── */
function initIngredientCards() {
  const cards = document.querySelectorAll('.ingredient-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
}

/* ── Scroll reveal: animate sections into view ── */
function initScrollReveal() {
  const revealTargets = [
    '.intro-card',
    '.timeline-item',
    '.map-region',
    '.map-arrow-block',
    '.ing-card',
    '.reflection-block',
    '.source-category',
    '.section-title',
    '.section-lead',
    '.reflection-quote',
    '.course-info',
  ];

  const elements = document.querySelectorAll(revealTargets.join(', '));

  elements.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger siblings in grids/lists
    const delay = getStaggerDelay(el, i);
    el.style.transitionDelay = delay + 'ms';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

function getStaggerDelay(el, globalIndex) {
  const parent = el.parentElement;
  if (!parent) return 0;
  const siblings = Array.from(parent.children).filter(c => c.classList.contains(el.classList[0]));
  const index = siblings.indexOf(el);
  if (index === -1) return 0;
  return Math.min(index * 80, 400);
}

/* ── Active nav link highlighting ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(section => observer.observe(section));
}

/* ── Leaflet interactive map ── */
function initMap() {
  const el = document.getElementById('ingredient-map');
  if (!el || typeof L === 'undefined') return;

  const map = L.map('ingredient-map', {
    center: [27, -18],
    zoom: 3,
    scrollWheelZoom: false,
    zoomControl: false,
    attributionControl: false,
  });

  // Dark tile that matches the section
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  L.control.attribution({ position: 'bottomleft', prefix: false })
    .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright" style="color:#888">OSM</a> &copy; <a href="https://carto.com/attributions" style="color:#888">CARTO</a>')
    .addTo(map);

  L.control.zoom({ position: 'topright' }).addTo(map);

  // Custom marker: colored dot with pulse ring
  function markerIcon(color, size = 13) {
    return L.divIcon({
      className: '',
      html: `
        <div class="map-pin" style="--pin-color:${color}">
          <div class="map-pin-dot"></div>
          <div class="map-pin-pulse"></div>
        </div>`,
      iconSize: [size * 2, size * 2],
      iconAnchor: [size, size],
      popupAnchor: [0, -size - 2],
    });
  }

  const colors   = { arabe: '#C9A227', andalus: '#C4622D', nuevo: '#2D7D7D' };
  const labels   = { arabe: 'Mundo Árabe', andalus: 'Al-Ándalus / Iberia', nuevo: 'Nuevo Mundo' };
  const emojis   = { arabe: '🌙', andalus: '🏰', nuevo: '☀️' };

  const cities = {
    arabe: [
      { pos: [33.34, 44.40], name: 'Bagdad',   info: 'Hub del califato abásida (s. VIII-XIII). Nodo central de la red de especias: azafrán, comino, canela, arroz y almendras llegaban aquí de toda Asia.',     ing: '🌾 🌿 🌰' },
      { pos: [33.51, 36.29], name: 'Damasco',  info: 'Capital omeya, cruce de las rutas de la seda. Desde aquí viajaban almendras, pistachos y técnicas de confitería hacia el Mediterráneo occidental.',       ing: '🌰 🍋' },
      { pos: [30.04, 31.24], name: 'El Cairo',  info: 'Capital fatimí. Centro del comercio de azúcar de caña procedente de Persia y la India, antes de que los árabes lo introdujeran en la Península Ibérica.', ing: '🎋 🍊' },
      { pos: [34.03, -5.00], name: 'Fez',       info: 'Gran ciudad magrebí y puente entre Oriente y Al-Ándalus. La cocina de Fez comparte raíces profundas con la cocina andalusí medieval.',                    ing: '🌿 🫒' },
    ],
    andalus: [
      { pos: [37.89, -4.78], name: 'Córdoba',  info: 'Capital del Califato Omeya (929-1031). La ciudad más grande de Europa occidental en el siglo X. Primer gran centro de difusión culinaria árabe en Iberia.', ing: '🫒 🌸 🍆' },
      { pos: [37.18, -3.60], name: 'Granada',  info: 'Último reino nazarí (hasta 1492). Los jardines del Generalife y el Patio de los Arrayanes estaban llenos de naranjos, limoneros y especias.',              ing: '🍊 🌸 🌿' },
      { pos: [38.01, -3.37], name: 'Úbeda',    info: 'Ciudad renacentista, Patrimonio de la Humanidad. Su olivar es herencia directa de la agricultura árabe-andalusí y sus técnicas de irrigación por acequias.', ing: '🫒 🌿' },
      { pos: [37.39, -5.99], name: 'Sevilla',  info: 'Puerto de las expediciones al Nuevo Mundo. De aquí partieron los cargamentos de aceite, arroz, cítricos y especias hacia las Américas desde 1492.',        ing: '⛵ 🫒 🍚' },
      { pos: [39.86, -4.02], name: 'Toledo',   info: 'Ciudad fronteriza y de convivencia de culturas. Su mazapán (marçapāne) es la herencia más dulce de la confitería árabe-andalusí.',                          ing: '🌰 🍬' },
    ],
    nuevo: [
      { pos: [19.43, -99.13], name: 'Ciudad de México', info: 'El comino árabe se integró al mole, los tamales y los guisos. El arroz y la berenjena llegaron aquí con los colonizadores andaluces.',         ing: '🌿 🍚 🍆' },
      { pos: [23.13, -82.38], name: 'La Habana',        info: 'El arroz con pollo cubano, el azúcar de caña y los cítricos son el legado más visible de la tradición árabe-española en el Caribe.',             ing: '🍚 🎋 🍊' },
      { pos: [-12.05, -77.04], name: 'Lima',            info: 'El limón en el ceviche, el comino en los guisos, las almendras en los postres coloniales. Huella árabe profunda en la cocina peruana.',           ing: '🍋 🌿 🌰' },
      { pos: [18.47, -66.11], name: 'San Juan',         info: 'Puerto Rico fue uno de los primeros puntos de llegada del arroz, el azúcar de caña y los cítricos traídos por los españoles desde Andalucía.',   ing: '🍚 🎋 🍊' },
    ],
  };

  const allMarkers = [];

  Object.entries(cities).forEach(([region, list]) => {
    list.forEach(city => {
      const popup = L.popup({ className: 'map-popup', maxWidth: 240, offset: [0, -4] }).setContent(`
        <div class="pop-inner">
          <div class="pop-region ${region}">${emojis[region]} ${labels[region]}</div>
          <strong class="pop-name">${city.name}</strong>
          <p class="pop-info">${city.info}</p>
          <div class="pop-ing">${city.ing}</div>
        </div>`);

      const marker = L.marker(city.pos, { icon: markerIcon(colors[region]) })
        .addTo(map)
        .bindPopup(popup);
      allMarkers.push(marker);
    });
  });

  // Route lines: glow layer + sharp layer
  function addRoute(coords, color) {
    L.polyline(coords, { color, weight: 10, opacity: 0.08, lineCap: 'round' }).addTo(map);
    L.polyline(coords, { color, weight: 2,  opacity: 0.75, dashArray: '10 6', lineCap: 'round' }).addTo(map);
  }

  // Route 1: Arab world → Al-Ándalus (711)
  addRoute([
    [24.00, 39.50],
    [33.34, 44.40],
    [30.04, 31.24],
    [34.03, -5.00],
    [35.90, -5.32],
    [37.89, -4.78],
    [37.18, -3.60],
    [38.01, -3.37],
  ], colors.arabe);

  // Route 2: Iberia → Americas (1492)
  addRoute([
    [37.39, -5.99],
    [36.52, -6.29],
    [28.10, -15.41],
    [18.47, -66.11],
    [23.13, -82.38],
    [19.43, -99.13],
    [-12.05, -77.04],
  ], colors.nuevo);

  // Reset-view button
  const ResetControl = L.Control.extend({
    options: { position: 'topright' },
    onAdd() {
      const btn = L.DomUtil.create('button', 'map-reset-btn');
      btn.innerHTML = '&#8635;';
      btn.title = 'Restablecer vista';
      L.DomEvent.on(btn, 'click', () => map.flyTo([27, -18], 3, { duration: 1.2 }));
      return btn;
    },
  });
  new ResetControl().addTo(map);
}

/* ── Mobile nav toggle ── */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}
