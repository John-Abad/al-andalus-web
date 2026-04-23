/* =============================================
   Ingredient detail page renderer.
   Reads ?id= from URL, pulls from INGREDIENTES,
   populates template + builds custom Leaflet map.
   ============================================= */

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id || !window.INGREDIENTES || !INGREDIENTES[id]) {
    renderNotFound();
    return;
  }

  const data = INGREDIENTES[id];

  renderHero(data);
  renderHistory(data);
  renderEtymology(data);
  renderDatos(data);
  renderRecipes(data);
  renderSources(data);
  initMap(data);
  initNavbar();
  initMobileNav();

  /* ─ Renderers ─ */

  function renderHero(d) {
    document.getElementById('page-title').textContent = `${d.nombre} | De Al-Ándalus al Nuevo Mundo`;
    document.getElementById('ing-emoji').textContent = d.emoji;
    document.getElementById('ing-arabic').textContent = d.arabe;
    document.getElementById('ing-name').textContent = d.nombre;
    document.getElementById('ing-translit').textContent = d.translit;
    document.getElementById('ing-subtitle').textContent = d.subtitle;

    const hero = document.getElementById('ing-hero');
    hero.style.setProperty('--ing-color', d.color);
  }

  function renderHistory(d) {
    const container = document.getElementById('ing-history-content');
    container.innerHTML = '';

    Object.entries(d.historia).forEach(([heading, body], i) => {
      const block = document.createElement('div');
      block.className = 'ing-history-block';
      block.innerHTML = `
        <div class="ing-history-num">0${i + 1}</div>
        <div class="ing-history-text">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>`;
      container.appendChild(block);
    });
  }

  function renderEtymology(d) {
    document.getElementById('ing-etim-text').textContent = d.etimologia;
  }

  function renderDatos(d) {
    const ul = document.getElementById('ing-datos-list');
    ul.innerHTML = '';
    d.datos.forEach(dato => {
      const li = document.createElement('li');
      li.textContent = dato;
      ul.appendChild(li);
    });
  }

  function renderRecipes(d) {
    const grid = document.getElementById('ing-recipes-grid');
    grid.innerHTML = '';

    const regionClass = {
      'Al-Ándalus': 'andalus',
      'Perú':       'nuevo',
      'México':     'nuevo',
      'Cuba':       'nuevo',
      'Argentina':  'nuevo',
      'Venezuela':  'nuevo',
      'Puerto Rico':'nuevo',
    };

    d.recetas.forEach(r => {
      const cls = regionClass[r.lugar] || 'nuevo';
      const card = document.createElement('div');
      card.className = 'ing-recipe-card';
      card.innerHTML = `
        <span class="ing-recipe-tag ${cls}">${r.lugar}</span>
        <h3>${r.nombre}</h3>
        <p>${r.desc}</p>`;
      grid.appendChild(card);
    });
  }

  function renderSources(d) {
    const ul = document.getElementById('ing-sources-list');
    ul.innerHTML = '';
    d.fuentes.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      ul.appendChild(li);
    });
  }

  function renderNotFound() {
    document.querySelector('main, body').innerHTML = `
      <div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#FAF3E0;background:#1A0F08;padding:4rem 2rem;text-align:center">
        <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;color:#C9A227;margin-bottom:1rem">Ingrediente no encontrado</h1>
        <p style="margin-bottom:2rem;opacity:0.7">Vuelve a la galería para explorar los ingredientes disponibles.</p>
        <a href="index.html#galeria" style="color:#C9A227;border:1px solid #C9A227;padding:0.75rem 2rem;text-decoration:none;letter-spacing:0.1em;text-transform:uppercase">← Volver a la galería</a>
      </div>`;
  }

  /* ─ Map ─ */

  function initMap(d) {
    const el = document.getElementById('ing-map');
    if (!el || typeof L === 'undefined') return;

    const map = L.map('ing-map', {
      center: d.mapCenter || [28, -10],
      zoom: d.mapZoom || 3,
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    L.control.attribution({ position: 'bottomleft', prefix: false })
      .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright" style="color:#888">OSM</a> &copy; <a href="https://carto.com/attributions" style="color:#888">CARTO</a>')
      .addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    const colors = { origen: '#C9A227', andalus: '#C4622D', americas: '#2D7D7D' };
    const regionClassByKey = { origen: 'arabe', andalus: 'andalus', americas: 'nuevo' };
    const labels = { origen: 'Origen / Mundo Árabe', andalus: 'Al-Ándalus / Iberia', americas: 'Nuevo Mundo' };
    const emojis = { origen: '🌙', andalus: '🏰', americas: '☀️' };

    function markerIcon(color) {
      return L.divIcon({
        className: '',
        html: `
          <div class="map-pin" style="--pin-color:${color}">
            <div class="map-pin-dot"></div>
            <div class="map-pin-pulse"></div>
          </div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -15],
      });
    }

    Object.entries(d.regiones).forEach(([key, list]) => {
      const cssKey = regionClassByKey[key];
      list.forEach(city => {
        const popup = L.popup({ className: 'map-popup', maxWidth: 260, offset: [0, -4] }).setContent(`
          <div class="pop-inner">
            <div class="pop-region ${cssKey}">${emojis[key]} ${labels[key]}</div>
            <strong class="pop-name">${city.name}</strong>
            <p class="pop-info">${city.info}</p>
          </div>`);
        L.marker(city.pos, { icon: markerIcon(colors[key]) })
          .addTo(map)
          .bindPopup(popup);
      });
    });

    const routeColors = { arabe: colors.origen, nuevo: colors.americas };

    (d.rutas || []).forEach(ruta => {
      const color = routeColors[ruta.color] || colors.origen;
      L.polyline(ruta.coords, { color, weight: 10, opacity: 0.08, lineCap: 'round' }).addTo(map);
      L.polyline(ruta.coords, { color, weight: 2.2, opacity: 0.8, dashArray: '10 6', lineCap: 'round' }).addTo(map);
    });

    const ResetControl = L.Control.extend({
      options: { position: 'topright' },
      onAdd() {
        const btn = L.DomUtil.create('button', 'map-reset-btn');
        btn.innerHTML = '&#8635;';
        btn.title = 'Restablecer vista';
        L.DomEvent.on(btn, 'click', () => map.flyTo(d.mapCenter || [28, -10], d.mapZoom || 3, { duration: 1.2 }));
        return btn;
      },
    });
    new ResetControl().addTo(map);
  }

  /* ─ Reused nav behavior ─ */

  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

})();
