var iRow, len, aText = new Array("<span style='font-size:2em;color:#A8C5FF'>Hi,I am Sali.</span>", "I design and develop user interfaces,", "provide seamless customer experience", "and help your business grow faster."),
 iSpeed = 70,
 iIndex = 1,
 iArrLength = aText[1].length,
 iScrollAt = 20,
 iTextPos = 0,
 sContents = "";

function typewriter() {
 sContents = " ", iRow = Math.max(0, iIndex - iScrollAt);
 for (var e = document.getElementById("typedtext"); iRow < iIndex;) sContents += aText[iRow++] + "<br />";
 aText[iIndex] && (e.innerHTML = sContents + aText[iIndex].substring(0, iTextPos), iTextPos++ == iArrLength ? (iTextPos = 0, ++iIndex != aText.length && (iArrLength = aText[iIndex].length, setTimeout("typewriter()", 120))) : setTimeout("typewriter()", iSpeed))
}

function moveArrow() {
 var e = document.getElementsByClassName("container")[0].getBoundingClientRect(),
  t = 1.7 * e.width,
  s = e.width / 1.2,
  n = e.height / 2,
  i = document.getElementsByClassName("next")[0],
  o = document.getElementsByClassName("prev")[0];
 i.style.top = n + "px", i.style.left = t + "px", o.style.top = n + "px", o.style.left = -s + "px"
}

function drags(e, t, s) {
 var n = !1;
 window.addEventListener("touchstart", function() { n = !0 }), window.addEventListener("touchend", function() { n = !1 }), e.on("mousedown touchstart", function(i) {
  $(".caption .instruction").css({ transition: "opacity 1s", opacity: 0 }), e.addClass("draggable"), t.addClass("resizable");
  var o = i.pageX ? i.pageX : i.originalEvent.touches[0].pageX,
   a = e.outerWidth(),
   r = e.offset().left + a - o,
   l = s.offset().left,
   d = s.outerWidth(),
   c = l + 10,
   p = l + d - a - 10;
  e.parents().on("mousemove touchmove", function(e) {
   !1 === n && e.preventDefault();
   var s = (e.pageX ? e.pageX : e.originalEvent.touches[0].pageX) + r - a;
   s < c ? s = c : s > p && (s = p);
   var i = 100 * (s + a / 2 - l) / d + "%";
   $(".draggable").css("left", i).on("mouseup touchend touchcancel", function() { $(this).removeClass("draggable"), t.removeClass("resizable") }), $(".resizable").css("width", i)
  }).on("mouseup touchend touchcancel", function() { e.removeClass("draggable"), t.removeClass("resizable") })
 }).on("mouseup touchend touchcancel", function(s) { e.removeClass("draggable"), t.removeClass("resizable") })
}

function openModal() { document.getElementById("myModal").style.display = "block" }

function closeModal() { document.getElementById("myModal").style.display = "none" } typewriter(), window.addEventListener("resize", moveArrow()), $(document).ready(function() {
 len = document.querySelectorAll(".browser-mockup").length;
 for (var e = ["#0365aa", "#038baa", "#0393aa", "#03aaaa"], t = 0; t <= len - 1; t++) {
  var s = "#" + t + t;
  if ($("#5 #" + t).css({ background: e[t - 1] }), $(s).css({ opacity: "0", height: "0px" }), $(s + " .comparison-slider-wrapper .comparison-slider > img").css({ display: "none" }), $(s + " .comparison-slider")[0]) {
   var n = $(s + " .comparison-slider");
   n.each(function() {
    var e = $(this).width() + "px";
    $(this).find(".resize img").css({ width: e }), drags($(this).find(".divider"), $(this).find(".resize"), $(this))
   }), $(window).on("resize", function() {
    var e = n.width() + "px";
    n.find(".resize img").css({ width: e })
   })
  }
 }
}), len = document.querySelectorAll(".browser-mockup").length, $(".compare").on("click", function() {
 var e = $(this).closest(".browser-mockup").attr("id"),
  t = "#" + e + e;
 if (e == 3)
  return;
 $(t + " .comparison-slider-wrapper .comparison-slider > img").css({ display: "block" });
 $(t + " .comparison-slider-wrapper")[0].getBoundingClientRect().height;
 $(t).css({ opacity: "1", "z-index": "100", height: "100%" })
}), $(".overlayTop .close").on("click", function() {
 $(this).closest(".overlayTop").attr("id");
 $(".overlayTop").css({ opacity: "0", height: "0px", "z-index": "-100" }), $(".overlayTop .comparison-slider-wrapper .comparison-slider > img").css({ display: "none" })
});
var slideIndex = 1;

function plusSlides(e) { showSlides(slideIndex += e) }

function currentSlide(e) { showSlides(slideIndex = e) }

function showSlides(e) {
 var t, s = document.getElementsByClassName("mySlides"),
  n = document.getElementsByClassName("demo"),
  i = document.getElementById("caption");
 for (e > s.length && (slideIndex = 1), e < 1 && (slideIndex = s.length), t = 0; t < s.length; t++) s[t].style.display = "none";
 for (t = 0; t < n.length; t++) n[t].className = n[t].className.replace(" active", "");
 s[slideIndex - 1].style.display = "block", n[slideIndex - 1].className += " active", i.innerHTML = n[slideIndex - 1].alt
}
showSlides(slideIndex);

function checkform() {
 if (proof.value == null) {
  return submitted = !0;
 }
}
