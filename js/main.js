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
    '.ingredient-card',
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
  if (!document.getElementById('ingredient-map') || typeof L === 'undefined') return;

  const map = L.map('ingredient-map', {
    center: [28, -15],
    zoom: 3,
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  function markerIcon(color) {
    return L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;background:${color};border-radius:50%;border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10],
    });
  }

  const cities = {
    arabe: [
      {
        pos: [33.34, 44.40], name: 'Bagdad',
        info: 'Centro del califato abásida (siglos VIII-XIII). Hub de la red comercial de especias: azafrán, comino, canela, pimienta y arroz llegaban aquí de toda Asia.',
      },
      {
        pos: [33.51, 36.29], name: 'Damasco',
        info: 'Capital omeya y cruce de las rutas de la seda. Desde aquí viajaban almendras, pistachos y técnicas de confitería hacia el Mediterráneo occidental.',
      },
      {
        pos: [30.04, 31.24], name: 'El Cairo',
        info: 'Capital fatimí. Centro del comercio de azúcar de caña procedente de Persia y la India, antes de que los árabes lo introdujeran en la Península Ibérica.',
      },
      {
        pos: [34.03, -5.00], name: 'Fez',
        info: 'Gran ciudad magrebí y puente cultural entre Oriente y Al-Ándalus. La cocina de Fez comparte profundas raíces con la cocina andalusí medieval.',
      },
    ],
    andalus: [
      {
        pos: [37.89, -4.78], name: 'Córdoba',
        info: 'Capital del Califato Omeya (929-1031). La ciudad más grande de Europa occidental en el siglo X. Primer gran centro de difusión culinaria árabe en Iberia.',
      },
      {
        pos: [37.18, -3.60], name: 'Granada',
        info: 'Último reino nazarí de Al-Ándalus (hasta 1492). Los jardines del Generalife y el Patio de los Arrayanes estaban llenos de naranjos, limoneros y especias.',
      },
      {
        pos: [38.01, -3.37], name: 'Úbeda',
        info: 'Ciudad renacentista declarada Patrimonio de la Humanidad. Su fama olivarera es herencia directa de la agricultura árabe-andalusí y sus técnicas de irrigación.',
      },
      {
        pos: [37.39, -5.99], name: 'Sevilla',
        info: 'Puerto principal de las expediciones al Nuevo Mundo. De Sevilla partieron los cargamentos de aceite, arroz, cítricos y especias hacia las Américas.',
      },
      {
        pos: [39.86, -4.02], name: 'Toledo',
        info: 'Ciudad fronteriza y de convivencia entre culturas. Su mazapán (marçapāne) es la herencia más dulce de la confitería árabe-andalusí.',
      },
    ],
    nuevo: [
      {
        pos: [19.43, -99.13], name: 'Ciudad de México',
        info: 'El comino árabe se integró al mole, los tamales y los guisos. El arroz y la berenjena también llegaron aquí con los colonizadores andaluces.',
      },
      {
        pos: [23.13, -82.38], name: 'La Habana',
        info: 'El arroz con pollo cubano, el azúcar de caña y los cítricos son el legado más visible de la tradición árabe-española en el Caribe.',
      },
      {
        pos: [-12.05, -77.04], name: 'Lima',
        info: 'Los cítricos en el ceviche, el comino en los guisos, las almendras en los postres coloniales: huella árabe profunda en la cocina peruana.',
      },
      {
        pos: [18.47, -66.11], name: 'San Juan',
        info: 'Puerto Rico fue uno de los primeros puntos de llegada del arroz, el azúcar de caña y los cítricos traídos por los españoles desde Andalucía.',
      },
    ],
  };

  const colors = { arabe: '#C9A227', andalus: '#C4622D', nuevo: '#2D7D7D' };
  const tagLabels = { arabe: 'Mundo Árabe', andalus: 'Al-Ándalus', nuevo: 'Nuevo Mundo' };

  Object.entries(cities).forEach(([region, list]) => {
    list.forEach(city => {
      L.marker(city.pos, { icon: markerIcon(colors[region]) })
        .addTo(map)
        .bindPopup(
          `<strong>${city.name}</strong>` +
          `<span class="pop-tag ${region}">${tagLabels[region]}</span>` +
          `<span style="color:#4A3728;font-size:0.82rem">${city.info}</span>`
        );
    });
  });

  // Route 1: Arab trade network → Al-Ándalus (711)
  L.polyline([
    [21.39, 39.85],
    [33.34, 44.40],
    [30.04, 31.24],
    [34.03, -5.00],
    [35.90, -5.32],
    [37.89, -4.78],
    [37.18, -3.60],
    [38.01, -3.37],
  ], { color: colors.arabe, weight: 2.5, opacity: 0.65, dashArray: '8 5' }).addTo(map);

  // Route 2: Iberia → Americas (1492+)
  L.polyline([
    [37.39, -5.99],
    [36.52, -6.29],
    [28.10, -15.41],
    [18.47, -66.11],
    [23.13, -82.38],
    [19.43, -99.13],
    [-12.05, -77.04],
  ], { color: colors.nuevo, weight: 2.5, opacity: 0.65, dashArray: '8 5' }).addTo(map);
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
