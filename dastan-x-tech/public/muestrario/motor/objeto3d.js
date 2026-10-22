/* Objeto 3D que acompaña toda la página · Kit Estudio Web (estilo 08)
 *
 * Necesita three.min.js (motor/vendor/, sin CDN) cargado antes. La página solo dibuja
 * SU objeto; este archivo pone la escena, la cámara, las luces, el recorrido con el
 * scroll y todas las protecciones que salieron de las revisiones:
 *   - el objeto nunca pasa por detrás de la cabecera: se desvanece antes de tocarla
 *   - al final puede ir ANCLADO a un texto (se mueve con él, no se queda "flotando")
 *   - "reducir movimiento": salta a cada estado sin animar
 *   - sin WebGL: la página añade la clase .sin-3d al fondo y enseña su foto de respaldo
 *
 * HTML:
 *   <div class="fondo3d" id="fondo3d" aria-hidden="true">
 *     <div class="respaldo"><img src="assets/logo.svg" alt=""></div><canvas id="lienzo"></canvas>
 *   </div>
 *   …y en cada sección, marcas de estado (cómo está el objeto cuando la marca llega
 *   arriba de la pantalla; entre dos marcas se interpola con suavidad):
 *   <span data-3d='{"x":2.6,"y":0,"s":1,"ry":-0.5}' data-3d-movil='{"x":0,"y":2.2,"s":0.75}'></span>
 *   Marca anclada (la "y" sale de dónde está ese elemento en pantalla):
 *   <span data-3d='{"x":-3,"ancla":".final .txt","s":0.7}'
 *         data-3d-movil='{"x":0,"ancla":".final .txt","borde":"arriba","apx":110,"s":0.55}'></span>
 *   Claves comunes: x, y (unidades 3D), s (tamaño), rx, ry (giro en radianes).
 *   Cualquier otra clave numérica (sep, k, luz…) llega tal cual a la función de la página.
 *
 * JS de la página:
 *   Objeto3D.iniciar({
 *     claves: ['sep'],                       // claves propias que también se interpolan
 *     crear: function (THREE, escena) {      // construye el objeto y lo añade a la escena
 *       var grupo = new THREE.Group(); … escena.add(grupo);
 *       return { grupo: grupo, alto: 3.4,    // alto aproximado del objeto a tamaño 1
 *                cada: function (estado, t) { … } };   // opcional: se llama en cada fotograma
 *     }
 *   });
 */
(function () {
  'use strict';
  function iniciar(op) {
    var fondo = document.getElementById(op.fondo || 'fondo3d'), canvas = document.getElementById(op.lienzo || 'lienzo');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); } catch (e) {}
    if (!renderer || !renderer.getContext()) { fondo.classList.add('sin-3d'); return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    var escena = new THREE.Scene(), camara = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    if (op.luces !== false) {
      escena.add(new THREE.AmbientLight(0xffffff, 0.25));
      var l1 = new THREE.DirectionalLight(0xffffff, 1.3); l1.position.set(3, 4, 6); escena.add(l1);
    }
    var obj = op.crear(THREE, escena, camara);
    var grupo = obj.grupo, alto = obj.alto || 3.4;
    var CL = ['x', 'y', 's', 'rx', 'ry'].concat(op.claves || []);
    var nav = document.querySelector(op.cabecera || '[data-nav], header');
    var marcas = [];

    function leer() {
      var movil = innerWidth < 820;
      marcas = Array.prototype.map.call(document.querySelectorAll('[data-3d]'), function (el) {
        var e = JSON.parse((movil && el.getAttribute('data-3d-movil')) || el.getAttribute('data-3d'));
        CL.forEach(function (k) { if (typeof e[k] !== 'number' && k !== 'y') e[k] = (k === 's') ? 1 : 0; });
        e.top = el.getBoundingClientRect().top + scrollY; return e;
      }).sort(function (a, b) { return a.top - b.top; });
    }
    var suave = function (t) { return t * t * (3 - 2 * t); };
    function upp() { return 2 * camara.position.z * Math.tan(camara.fov * Math.PI / 360) / innerHeight; }
    function res(m) {
      if (!m.ancla) { if (typeof m.y !== 'number') m.y = 0; return m; }
      var el = document.querySelector(m.ancla); if (!el) return Object.assign({}, m, { y: 0 });
      var r = el.getBoundingClientRect(), cy = m.borde === 'arriba' ? r.top : (r.top + r.bottom) / 2;
      return Object.assign({}, m, { y: (innerHeight / 2 - cy + (m.apx || 0)) * upp(), anclado: true });
    }
    function estado() {
      var y = scrollY;
      if (y <= marcas[0].top) return res(marcas[0]);
      for (var i = 0; i < marcas.length - 1; i++) {
        var a = res(marcas[i]), b = res(marcas[i + 1]);
        if (y < b.top) {
          var t = suave((y - a.top) / (b.top - a.top)), o = { anclado: b.anclado && t > 0 };
          CL.forEach(function (k) { o[k] = a[k] + (b[k] - a[k]) * t; }); return o;
        }
      }
      return res(marcas[marcas.length - 1]);
    }
    function resize() {
      renderer.setSize(innerWidth, innerHeight, false);
      camara.aspect = innerWidth / innerHeight; camara.position.z = innerWidth < 820 ? 15 : 11;
      camara.updateProjectionMatrix(); leer();
    }
    resize(); addEventListener('resize', resize); addEventListener('load', leer);
    if (!marcas.length) { console.warn('[objeto3d] no hay marcas data-3d en la página'); return; }

    var act = null, t0 = performance.now(), mx = 0, my = 0;
    addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
    function frame(now) {
      requestAnimationFrame(frame);
      var e = estado(); if (!act) act = Object.assign({}, e);
      CL.forEach(function (k) { act[k] += (e[k] - act[k]) * (reduce ? 1 : (k === 'y' && e.anclado ? 0.22 : 0.055)); });
      var t = reduce ? 0 : (now - t0) / 1000, flota = Math.sin(t * 0.8) * 0.12;
      grupo.position.set(act.x, act.y + flota, 0);
      grupo.scale.setScalar(act.s);
      grupo.rotation.set(act.rx + my * 0.25, act.ry + mx * 0.35 + Math.sin(t * 0.4) * 0.08, 0);
      if (obj.cada) obj.cada(act, t);
      // nunca por detrás de la cabecera: si el borde de arriba del objeto se acerca, se desvanece
      var u = upp(), arriba = innerHeight / 2 - (act.y + 0.12) / u - (alto / 2) * act.s / u;
      var navB = nav ? nav.getBoundingClientRect().bottom : 0;
      canvas.style.opacity = Math.min(1, Math.max(0, (arriba - navB + 30) / 60)).toFixed(3);
      renderer.render(escena, camara);
    }
    requestAnimationFrame(frame);
  }
  window.Objeto3D = { iniciar: iniciar };
})();
