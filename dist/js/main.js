 var submitted = !1;
 var proof = document.getElementById('proof');
 proof.style.display = "none";

 function checkform() {
  if (proof.innerHTML == "") {
   return submitted = !0;
  }
 }
 document.addEventListener("DOMContentLoaded", function() {
  for (var e = document.querySelectorAll(".post-list>li"), t = ["#222233", "#222233", "#222233", "#222233", "#222233", "#222233"], n = ["#fff"], o = document.querySelectorAll(".trigger>.page-link"), i = e.length, s = 0; s < i; s++) e[s].setAttribute("id", s + 1), e[s].style.background = t[s], e[s].style.color = n[0], o[s].setAttribute("href", "#" + (s + 1));
  var a, r = document.querySelectorAll("#typedtext")[0];
  e[0].style.minHeight = "550px", window.innerHeight > 700 && (r.style.lineHeight = "45px", r.style.height = "350px"), e[4].style.position = "relative";
  var l = !1,
   c = 0;

  function d(e, t) {
   var n, o, i = window.scrollY || window.pageYOffset,
    s = e.offsetTop - i,
    a = null;
   window.requestAnimationFrame(function e(r) {
    var l, c, d;
    null === a && (a = r), l = n = r - a, c = i, d = s, o = (l /= t / 2) < 1 ? d / 2 * l * l + c : -d / 2 * (--l * (l - 2) - 1) + c, window.scrollTo(0, o), n < t && window.requestAnimationFrame(e)
   })
  }
  var u = document.getElementsByClassName("backToTop")[0],
   f = 0;
  window.addEventListener("scroll", function(e) {
   f = window.scrollY, l || (window.requestAnimationFrame(function() {
    ! function(e, t) {
     a = Math.round(t / window.innerHeight) + 1, Math.round(e / window.innerHeight), a >= 2 ? u.classList.add("show") : u.classList.remove("show");
     var n = document.querySelectorAll(".site-header")[0];
     t <= e && t > 70 ? n.classList.add("static") : n.classList.remove("static")
    }(c, f), e.preventDefault(), l = !1, c = f
   }), l = !0)
  }), document.getElementsByClassName("workAction")[0].addEventListener("click", function() { d(e[4], 1e3) });
  var m = document.getElementsByClassName("site-header")[0];
  u.addEventListener("click", function() { d(m, 1e3) })
 }), $(window).bind("load", function() { $("#outline").css("stroke-dasharray", $("#outline")[0].getTotalLength()), $("#outline").css("stroke-dashoffset", $("#outline")[0].getTotalLength()), $("#outline").animate({ strokeDashoffset: 0 }, 2900), setTimeout(function() { $("#outline").css({ fill: "#000", transition: "2s fill" }) }, 2900), $("#face").css("stroke-dasharray", $("#face")[0].getTotalLength()), $("#face").css("stroke-dashoffset", $("#face")[0].getTotalLength()), $("#face").animate({ strokeDashoffset: 0 }, 2500), setTimeout(function() { $("#face").css({ fill: "#000", transition: "2s fill" }) }, 2900) }), window.onload = function() { $("#thank-you-message").hide(), "#thank-you" == window.location.hash && $("#thank-you-message").show() }, $(document).ready(function() {
  var e, t, n, o, i = $(".carousel"),
   s = 0;

  function a(e) { "n" == e.data.d && (s -= 60), "p" == e.data.d && (s += 60), i.css({ "-webkit-transform": "rotateY(" + s + "deg)", "-moz-transform": "rotateY(" + s + "deg)", "-o-transform": "rotateY(" + s + "deg)", transform: "rotateY(" + s + "deg)" }) }

  function r() { d.style.opacity = 0 }
  var l = document.getElementsByClassName("prev")[0],
   c = document.getElementsByClassName("next")[0],
   d = document.getElementsByClassName("instruction")[0];
  c.addEventListener("click", r), l.addEventListener("click", r), $(".next").on("click", { d: "n" }, a), $(".prev").on("click", { d: "p" }, a), $(".site-header .site-nav").on("touchstart", function() { $(".site-header .trigger").fadeToggle("300") }), $(".trigger>a[href^='#']").on("click", function(e) {
   e.preventDefault();
   var t = this.hash,
    n = $(t);
   $("html, body").stop().animate({ scrollTop: n.offset().top }, 900, "swing", function() { window.location.hash = t })
  });
  var u = document.querySelectorAll(".slider>.container>.carousel")[0],
   f = document.querySelectorAll(".slider .instruction")[0];
  u.addEventListener("dragstart", function(t) { e = t.clientX, f.style.transition = "opacity 1s", f.style.opacity = 0 }, !1), u.addEventListener("dragend", function(n) { t = n.clientX, $(t - e < 0 ? ".slider .next" : ".slider .prev").click() }, !1), u.addEventListener("touchstart", function(e) { n = e.touches[0].clientX, f.style.transition = "opacity 1s", f.style.opacity = 0 }, !1), u.addEventListener("touchend", function(e) { o = e.changedTouches[0].clientX - n, $(o < 0 ? ".slider .next" : ".slider .prev").click() }, !1)
 });
 