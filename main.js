/* Progressive enhancement only. All content is static HTML and readable without this file. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  // nav: scrolled state + mobile menu
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var btn = document.querySelector(".menu-btn");
  var links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  // reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // cursor glow on cards
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  // hero canvas: drifting node network
  var cv = document.getElementById("net");
  if (!cv || reduce || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, pts = [], running = true, visible = true;

  function resize() {
    var r = cv.getBoundingClientRect();
    W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.max(28, Math.min(80, Math.floor(W * H / 16000)));
    pts = [];
    for (var i = 0; i < n; i++) {
      pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25 });
    }
  }

  function frame() {
    if (running && visible) {
      ctx.clearRect(0, 0, W, H);
      var D = 130;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < D) {
            ctx.strokeStyle = "rgba(124,92,255," + (0.35 * (1 - d / D)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(34,211,238,0.7)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.2832); ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", function () { running = !document.hidden; });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(cv);
  }
  frame();
})();
