/* MOTION KIT v2 · Cazador de Webs — split-text, reveals, unveils,
   parallax, tilt 3D, contadores, marquee y barra de progreso.
   Vanilla, sin dependencias. Se activa solo al cargar la página. */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Barra de progreso de scroll (se crea sola)
  if (!reduced) {
    var bar = document.createElement("div");
    bar.className = "mk-progress";
    document.body.appendChild(bar);
    var onScroll = function () {
      var h = document.documentElement;
      var p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.transform = "scaleX(" + p + ")";
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  // Si no hay intro, los split-text no esperan al telón
  if (!document.querySelector(".mk-intro")) {
    document.documentElement.style.setProperty("--mk-split-base", "0.1s");
  }

  // Split-text: trocea .mk-split en palabras animables
  document.querySelectorAll(".mk-split").forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach(function (w, i) {
      var wrap = document.createElement("span");
      wrap.className = "mk-w";
      var inner = document.createElement("span");
      inner.textContent = w;
      inner.style.setProperty("--mk-i", i);
      wrap.appendChild(inner);
      el.appendChild(wrap);
      el.appendChild(document.createTextNode(" "));
    });
  });

  // Reveals y unveils al scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("mk-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll(".mk-reveal, .mk-unveil").forEach(function (el) { io.observe(el); });

  // Contadores: <span class="mk-counter" data-value="1973" data-suffix=""></span>
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var ioCount = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      ioCount.unobserve(e.target);
      var el = e.target;
      var target = parseFloat(el.dataset.value || "0");
      var suffix = el.dataset.suffix || "";
      var decimals = (el.dataset.value || "").includes(".") ? 1 : 0;
      var t0 = null;
      var step = function (ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1400, 1);
        el.textContent = (target * easeOut(p)).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".mk-counter").forEach(function (el) { ioCount.observe(el); });

  // Tilt 3D en cards
  if (!reduced) {
    document.querySelectorAll(".mk-card").forEach(function (card) {
      card.addEventListener("mousemove", function (ev) {
        var r = card.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width - 0.5;
        var y = (ev.clientY - r.top) / r.height - 0.5;
        card.style.transform = "translateY(-8px) rotateX(" + (-y * 7) + "deg) rotateY(" + (x * 7) + "deg)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  // Marquee: duplica el contenido para el bucle infinito
  document.querySelectorAll(".mk-marquee-track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  // Guarda de seguridad: TODOS los patrones de este kit (v3/v4/v5 con
  // position:sticky, Y TAMBIÉN v6 con animation-timeline:view()) se ven
  // afectados si html Y body tienen overflow != visible A LA VEZ:
  // rompe el sticky en v3/v4/v5 (página en blanco) y congela la
  // animación en v6 (deja de responder al scroll, aunque no se vea
  // blanco). Avisa en consola apenas se detecte.
  if (document.querySelector(".mk-pin, .mk-film, .mk-scene")) {
    var htmlOv = getComputedStyle(document.documentElement);
    var bodyOv = getComputedStyle(document.body);
    var htmlBad = htmlOv.overflowX !== "visible" || htmlOv.overflowY !== "visible";
    var bodyBad = bodyOv.overflowX !== "visible" || bodyOv.overflowY !== "visible";
    if (htmlBad && bodyBad) {
      console.warn(
        "[motion-kit] overflow distinto de 'visible' detectado en <html> Y " +
        "<body> A LA VEZ. Esto rompe position:sticky (v3/v4/v5, página en " +
        "blanco) o congela animation-timeline:view() (v6, deja de responder " +
        "al scroll). Quita el overflow de al menos uno de los dos."
      );
    }
  }

  // Motor de scrollytelling: cada [data-mk-scrolly] recibe --mk-p (progreso 0→1)
  // según su posición en el viewport. Los patrones 3D del CSS beben de esa variable.
  var scrollies = document.querySelectorAll("[data-mk-scrolly]");
  if (scrollies.length) {
    if (reduced) {
      scrollies.forEach(function (s) { s.style.setProperty("--mk-p", 1); });
    } else {
      var ticking = false;
      var updateScrollies = function () {
        ticking = false;
        scrollies.forEach(function (s) {
          var r = s.getBoundingClientRect();
          // 0 cuando la sección asoma por abajo; 1 cuando su final llega arriba.
          var total = r.height - innerHeight;
          var p = total > 0
            ? -r.top / total                             // sección alta (mk-pin/mk-film): la "película" dura todo el tramo sticky
            : (innerHeight - r.top) / (innerHeight + r.height); // sección normal: progreso al atravesar el viewport
          p = Math.max(0, Math.min(1, p));
          if (s._mkP !== p) {
            s._mkP = p;
            s.style.setProperty("--mk-p", p.toFixed(4));
            // Película: marca el shot en escena (interactividad solo del vivo)
            if (s.classList.contains("mk-film")) {
              s.querySelectorAll(".mk-shot").forEach(function (shot) {
                var inV = parseFloat(shot.style.getPropertyValue("--in")) || 0;
                var outV = parseFloat(shot.style.getPropertyValue("--out")) || 1;
                if (p >= inV && p <= outV) shot.setAttribute("data-live", "");
                else shot.removeAttribute("data-live");
              });
              // Túnel 3D: vivo cuando la cámara está cerca de su profundidad
              var n = parseFloat(s.style.getPropertyValue("--mk-nshots")) || parseFloat(s.dataset.mkShots) || 10;
              s.querySelectorAll(".mk-zshot").forEach(function (shot) {
                var zi = parseFloat(shot.style.getPropertyValue("--zi")) || 0;
                var f = p * (n - 1) - zi;
                if (f > -0.7 && f < 0.42) shot.setAttribute("data-live", "");
                else shot.removeAttribute("data-live");
              });
            }
          }
        });
      };
      // data-mk-shots="10" → --mk-shots (duración de la película)
      scrollies.forEach(function (s) {
        if (s.dataset.mkShots) s.style.setProperty("--mk-shots", s.dataset.mkShots);
      });
      // Raíl de progreso a la derecha (solo si hay película)
      var film = document.querySelector(".mk-film");
      var rail = null;
      if (film) {
        rail = document.createElement("div");
        rail.className = "mk-rail";
        rail.innerHTML = '<div class="mk-rail-thumb"></div>';
        document.body.appendChild(rail);
        var syncRail = function () { rail.style.setProperty("--mk-p", film.style.getPropertyValue("--mk-p") || 0); };
        addEventListener("scroll", function () { requestAnimationFrame(syncRail); }, { passive: true });
        syncRail();
        // Scrubber: pinchar/arrastrar en el raíl mueve la película
        var dragging = false;
        var scrub = function (clientY) {
          var rr = rail.getBoundingClientRect();
          var ratio = Math.max(0, Math.min(1, (clientY - rr.top) / rr.height));
          var total = film.offsetHeight - innerHeight;
          scrollTo(0, film.offsetTop + ratio * total);
        };
        rail.addEventListener("pointerdown", function (e) {
          dragging = true; rail.classList.add("mk-dragging");
          rail.setPointerCapture(e.pointerId); scrub(e.clientY); e.preventDefault();
        });
        rail.addEventListener("pointermove", function (e) { if (dragging) scrub(e.clientY); });
        addEventListener("pointerup", function () { dragging = false; rail.classList.remove("mk-dragging"); });
      }
      addEventListener("scroll", function () {
        if (!ticking) { ticking = true; requestAnimationFrame(updateScrollies); }
      }, { passive: true });
      addEventListener("resize", updateScrollies, { passive: true });
      addEventListener("load", updateScrollies);
      updateScrollies();
    }
  }

  // Parallax suave en secciones .mk-parallax (fallback iOS ya en CSS)
  if (!reduced) {
    var pxs = document.querySelectorAll(".mk-parallax");
    if (pxs.length) {
      var onPx = function () {
        pxs.forEach(function (s) {
          var r = s.getBoundingClientRect();
          if (r.bottom > 0 && r.top < innerHeight) {
            s.style.backgroundPosition = "center " + (r.top * -0.15) + "px";
          }
        });
      };
      addEventListener("scroll", onPx, { passive: true }); onPx();
    }
  }

  // Fondos de escena del túnel: copia la foto a --mk-zbg-src para el ambiente difuminado
  document.querySelectorAll(".mk-zbg > img").forEach(function (img) {
    img.parentElement.style.setProperty("--mk-zbg-src", 'url("' + img.currentSrc.replace(/"/g, '%22') + '")');
    if (!img.currentSrc) img.addEventListener("load", function () {
      img.parentElement.style.setProperty("--mk-zbg-src", 'url("' + img.currentSrc.replace(/"/g, '%22') + '")');
    });
  });

  // Polvo en suspensión del túnel: motas en 3D repartidas a lo largo de toda la
  // película. La cámara avanza con el scroll y las motas pasan a su lado, como en
  // un viaje de verdad. Se crea solo en cada .mk-tunnel (sin tocar el HTML).
  if (!reduced) {
    document.querySelectorAll(".mk-tunnel").forEach(function (stage) {
      var film = stage.closest(".mk-film");
      if (!film || stage.querySelector(".mk-dust")) return;
      var cv = document.createElement("canvas");
      cv.className = "mk-dust";
      cv.setAttribute("aria-hidden", "true");
      stage.insertBefore(cv, stage.firstChild);
      var ctx = cv.getContext("2d");
      var color = getComputedStyle(film).getPropertyValue("--mk-primario").trim() || "#ffffff";
      var FOCO = 1100, PASO = 760;                    // mismos valores que perspective y translateZ del CSS
      var n = parseFloat(film.style.getPropertyValue("--mk-nshots")) || parseFloat(film.dataset.mkShots) || 10;
      var largo = (n + 1) * PASO;
      var cuantas = innerWidth < 700 ? 70 : 140;
      var motas = [];
      for (var i = 0; i < cuantas; i++) {
        motas.push({ x: (Math.random() * 2 - 1) * 1.3, y: (Math.random() * 2 - 1) * 0.9,
                     z: Math.random() * largo - PASO, r: 0.6 + Math.random() * 1.8, fase: Math.random() * 6.28 });
      }
      var w = 0, h = 0, dpr = Math.min(devicePixelRatio || 1, 2);
      var medir = function () {
        w = stage.clientWidth; h = stage.clientHeight;
        cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      medir(); addEventListener("resize", medir);
      var visible = true;
      new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(film);
      var pinta = function (t) {
        requestAnimationFrame(pinta);
        if (!visible) return;
        var p = parseFloat(film.style.getPropertyValue("--mk-p")) || 0;
        var cam = p * (n - 1) * PASO;                // dónde está la cámara dentro del túnel
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = color;
        for (var i = 0; i < motas.length; i++) {
          var m = motas[i];
          var d = m.z - cam + PASO * 0.9;            // distancia de la mota por delante de la cámara
          if (d < 40 || d > PASO * 3.2) continue;
          var k = FOCO / d;
          var deriva = Math.sin(t / 2400 + m.fase) * 0.02;
          var sx = w / 2 + (m.x + deriva) * w * 0.5 * k * 0.55;
          var sy = h * 0.46 + (m.y + deriva) * h * 0.5 * k * 0.55;
          if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) continue;
          var cerca = Math.min(1, (PASO * 3.2 - d) / PASO);   // aparecen al fondo poco a poco
          var lejos = Math.min(1, d / 220);                     // y se apagan al rozar la cámara
          ctx.globalAlpha = 0.55 * cerca * lejos;
          ctx.beginPath(); ctx.arc(sx, sy, Math.min(m.r * k * 0.5, 5), 0, 6.283); ctx.fill();
        }
        ctx.globalAlpha = 1;
      };
      requestAnimationFrame(pinta);
    });
  }
})();
