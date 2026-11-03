(function () {
  document.documentElement.classList.add('js');

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Animación de entrada
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Contadores
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = null, dur = 1100;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  // Gráfico de velocidad por nivel
  var chart = document.getElementById('speedChart');
  if (chart) {
    var start = parseFloat(chart.getAttribute('data-start'));
    var pct = parseFloat(chart.getAttribute('data-pct'));
    var max = parseFloat(chart.getAttribute('data-max'));
    var level = 0, v = start, bars = [];
    while (level < 14) {
      v = Math.min(max, start * Math.pow(1 + pct / 100, level));
      var b = document.createElement('div');
      b.className = 'bar';
      b.dataset.h = Math.round((v / max) * 100);
      b.innerHTML = '<span>' + v.toFixed(1) + '</span><small>N' + (level + 1) + '</small>';
      chart.appendChild(b); bars.push(b);
      if (v >= max) break;
      level++;
    }
    function grow() { bars.forEach(function (b, i) { setTimeout(function () { b.style.height = b.dataset.h + '%'; }, i * 70); }); }
    if ('IntersectionObserver' in window) {
      var bo = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { grow(); bo.disconnect(); } });
      }, { threshold: 0.4 });
      bo.observe(chart);
    } else { grow(); }
  }

  // Enlace activo según la sección visible
  var links = document.querySelectorAll('.menu a[href^="#"]');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove('active'); });
          map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }
})();
