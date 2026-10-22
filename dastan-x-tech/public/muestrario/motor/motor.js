/* Motor de animaciones · Kit Estudio Web
 *
 * Sin dependencias. Se activa con atributos en el HTML:
 *
 *   data-reveal="up|fade|scale|left|right|clip"   aparece al entrar en pantalla
 *   data-stagger                                   sus hijos aparecen escalonados
 *   data-split                                     titular que entra palabra a palabra
 *   data-count="120" [data-decimals] [data-suffix] cifra que cuenta desde 0
 *   data-parallax="0.15"                           se desplaza más lento que el scroll
 *   data-progress [data-steps="4"]                 sección alta con hijo .mo-sticky:
 *                                                  escribe --p (0→1) y marca el paso activo
 *                                                  en los hijos [data-step-item]
 *   data-horizontal                                sección fija con .mo-track que avanza
 *                                                  en horizontal con el scroll vertical
 *   data-sequence                                  secuencia de .mo-frame (fotos o un vídeo)
 *                                                  controlada por el scroll, con .mo-caption
 *   data-nav                                       cabecera: añade .is-scrolled al bajar
 *
 * Reglas: el scroll es siempre el nativo (nunca se secuestra) y solo se animan
 * transform, opacity y clip-path. Con "reducir movimiento" activado, todo aparece
 * quieto y legible.
 */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  if (reduce) root.classList.add('mo-reduce');
  root.classList.add('mo-js');

  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var vh = function () { return window.innerHeight; };

  // Aviso del fallo que más rompe las escenas fijas: overflow en html y body a la vez.
  var ov = function (el) { var s = getComputedStyle(el); return s.overflowX !== 'visible' || s.overflowY !== 'visible'; };
  if (ov(document.documentElement) && ov(document.body)) {
    console.warn('[motor] overflow en html y body a la vez: las escenas fijas (sticky) no funcionarán. Usa overflow-x: clip solo en body.');
  }

  /* ---------- Titulares palabra a palabra ---------- */
  var wordIndex = 0;
  // une dos piezas sin espacio entre ellas ("<span>gratis</span>." ) para que no se separen de línea
  function glue(a, b) {
    var nw = document.createElement('span'); nw.className = 'mo-nw';
    a.parentNode.insertBefore(nw, a); nw.appendChild(a); nw.appendChild(b);
  }
  function splitNode(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (child) {
      if (child.nodeType === 3) {
        var text = child.textContent, prev = child.previousSibling, next = child.nextSibling;
        var parts = text.split(/(\s+)/), ws = [];
        var frag = document.createDocumentFragment();
        parts.forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          var w = document.createElement('span'); w.className = 'mo-w';
          var wi = document.createElement('span'); wi.className = 'mo-wi';
          wi.style.setProperty('--i', wordIndex++);
          wi.textContent = part;
          w.appendChild(wi); frag.appendChild(w); ws.push(w);
        });
        node.replaceChild(frag, child);
        if (ws.length && /^\S/.test(text) && prev && prev.nodeType === 1 && prev.tagName !== 'BR') glue(prev, ws[0]);
        if (ws.length && /\S$/.test(text) && next && next.nodeType === 1 && next.tagName !== 'BR' && !(ws.length === 1 && ws[0].parentNode.className === 'mo-nw')) glue(ws[ws.length - 1], next);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        splitNode(child);
      }
    });
  }
  $$('[data-split]').forEach(function (el) {
    wordIndex = 0;
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    splitNode(el);
  });

  /* ---------- Escalonados: cada hijo aparece al llegar ÉL a pantalla ---------- */
  // (antes aparecían todos a la vez cuando asomaba el primero, y los de abajo ya
  //  estaban quietos al llegar a ellos)
  $$('[data-stagger] > *').forEach(function (c) { c.setAttribute('data-mo-hijo', ''); });

  /* ---------- Fotos dentro de algo que aparece: cargar antes, animar cuando estén ---------- */
  // Si una foto con loading="lazy" está dentro de un elemento animado, la animación
  // empezaría antes de que llegue la foto y luego "saltaría". Se cargan ya y se espera.
  $$('[data-reveal] img, [data-stagger] img').forEach(function (img) { img.loading = 'eager'; });
  function fotosListas(el) {
    var imgs = el.tagName === 'IMG' ? [el] : $$('img', el);
    return Promise.all(imgs.map(function (i) {
      return i.complete ? Promise.resolve() : (i.decode ? i.decode().catch(function () {}) : Promise.resolve());
    }));
  }

  // Animación en los dos sentidos (opcional): <html data-mo-repetir>. Lo que sale de
  // la pantalla se esconde y vuelve a aparecer al regresar, bajando o subiendo.
  var repetir = root.hasAttribute('data-mo-repetir');

  /* ---------- Cifras ---------- */
  function runCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var fmt = function (v) { return v.toLocaleString('es-ES', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix; };
    if (reduce) { el.textContent = fmt(target); return; }
    var t0 = null, dur = 1600;
    function step(t) {
      if (!t0) t0 = t;
      var k = clamp((t - t0) / dur, 0, 1);
      el.textContent = fmt(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Apariciones ---------- */
  var watched = $$('[data-reveal],[data-mo-hijo],[data-split],[data-count]');
  function show(el, orden) {
    el.style.setProperty('--d', (orden || 0) * 90);
    fotosListas(el).then(function () {
      el.classList.add('is-in');
      if (el.hasAttribute('data-count') && !el._contado) { el._contado = true; runCount(el); }
    });
  }
  if (reduce || !('IntersectionObserver' in window)) {
    watched.forEach(function (el) { el.classList.add('is-in'); if (el.hasAttribute('data-count')) runCount(el); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      var orden = 0;   // los que entran juntos (una fila) se escalonan entre sí
      entries.forEach(function (e) {
        var alto = e.boundingClientRect.height > window.innerHeight * 3;
        if (e.isIntersecting && (e.intersectionRatio >= 0.15 || alto)) {
          if (e.target.classList.contains('is-in')) return;
          show(e.target, e.target.hasAttribute('data-mo-hijo') ? orden++ : 0);
          if (!repetir) io.unobserve(e.target);
        } else if (!e.isIntersecting && repetir && e.target.classList.contains('is-in')) {
          // solo se esconde cuando ha salido del todo (sin parpadeos en el borde)
          e.target.style.setProperty('--d', 0);
          e.target.classList.remove('is-in');
        }
      });
    }, { threshold: [0, 0.15], rootMargin: '0px 0px -8% 0px' });
    watched.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Todo lo que depende del scroll ---------- */
  var parallax = reduce ? [] : $$('[data-parallax]');
  var progress = $$('[data-progress]');
  var horizontals = $$('[data-horizontal]');
  var sequences = $$('[data-sequence]');
  var navs = $$('[data-nav]');

  // Altura de las secciones horizontales: lo que mide la pista + una pantalla.
  function sizeHorizontals() {
    horizontals.forEach(function (sec) {
      var track = sec.querySelector('.mo-track');
      if (!track) return;
      var extra = Math.max(0, track.scrollWidth - window.innerWidth);
      sec.style.height = (extra + vh()) + 'px';
      sec._extra = extra;
    });
  }
  // Altura de las secuencias: una pantalla y media por fotograma (meseta de lectura).
  sequences.forEach(function (sec) {
    var frames = $$('.mo-frame', sec);
    sec._frames = frames;
    sec._caps = $$('.mo-caption', sec);
    sec._video = sec.querySelector('video.mo-frame');
    var n = sec._video ? (parseInt(sec.getAttribute('data-sequence'), 10) || 4) : frames.length;
    sec.style.setProperty('--frames', n);
    sec._n = n;
  });

  function sectionProgress(sec) {
    var r = sec.getBoundingClientRect();
    var span = r.height - vh();
    return span > 0 ? clamp(-r.top / span, 0, 1) : (r.top < 0 ? 1 : 0);
  }

  var ticking = false;
  function update() {
    ticking = false;
    var h = vh();

    // Cabecera: .is-scrolled al bajar, y .sobre-oscuro cuando lo que pasa por debajo
    // es una sección marcada con data-tema="oscuro" (para invertir sus colores).
    navs.forEach(function (n) {
      n.classList.toggle('is-scrolled', window.scrollY > 40);
      var pila = document.elementsFromPoint(window.innerWidth / 2, n.offsetHeight + 2);
      var bajo = null;
      for (var i = 0; i < pila.length; i++) { if (!n.contains(pila[i])) { bajo = pila[i]; break; } }
      var sec = bajo && bajo.closest('[data-tema]');
      n.classList.toggle('sobre-oscuro', !!sec && sec.getAttribute('data-tema') === 'oscuro');
    });

    parallax.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > h + 200) return;
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      var off = (r.top + r.height / 2 - h / 2) * speed * -1;
      el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
    });

    progress.forEach(function (sec) {
      var p = sectionProgress(sec);
      sec.style.setProperty('--p', p.toFixed(4));
      var steps = parseInt(sec.getAttribute('data-steps') || '0', 10);
      if (steps) {
        var s = Math.min(steps - 1, Math.floor(p * steps));
        if (sec._step !== s) {
          sec._step = s;
          sec.setAttribute('data-step', s);
          $$('[data-step-item]', sec).forEach(function (it) {
            it.classList.toggle('is-active', parseInt(it.getAttribute('data-step-item'), 10) === s);
          });
        }
      }
    });

    horizontals.forEach(function (sec) {
      var track = sec.querySelector('.mo-track');
      if (!track) return;
      var p = sectionProgress(sec);
      sec.style.setProperty('--p', p.toFixed(4));
      track.style.transform = 'translate3d(' + (-p * (sec._extra || 0)).toFixed(1) + 'px,0,0)';
    });

    sequences.forEach(function (sec) {
      var p = sectionProgress(sec);
      sec.style.setProperty('--p', p.toFixed(4));
      var n = sec._n;
      if (sec._video) {
        var v = sec._video;
        if (v.duration) {
          var t = p * (v.duration - 0.05);
          if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
        }
      } else {
        var f = p * (n - 1);       // posición continua: 0 … n-1
        sec._frames.forEach(function (fr, i) {
          // Cada foto entra fundiéndose en el último 30 % de la anterior y queda quieta.
          var op = i === 0 ? 1 : clamp((f - (i - 1) - 0.7) / 0.3, 0, 1);
          fr.style.opacity = op.toFixed(3);
          if (!reduce) {
            var local = clamp(f - i + 1, 0, 2) / 2;   // 0→1 mientras la foto está en juego
            // Zoom lento y corto (1.06 → 1): más zoom estira la foto y se ve blanda.
            fr.style.transform = 'scale(' + (1.06 - 0.06 * local).toFixed(4) + ')';
          }
        });
      }
      // El rótulo cambia a mitad del fundido, igual que la foto (no antes).
      var cur = Math.min(n - 1, Math.floor(p * (n - 1) + 0.15));
      sec._caps.forEach(function (c) {
        c.classList.toggle('is-on', parseInt(c.getAttribute('data-frame'), 10) === cur);
      });
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }

  sizeHorizontals();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { sizeHorizontals(); onScroll(); });
  window.addEventListener('load', function () { sizeHorizontals(); update(); });
})();
