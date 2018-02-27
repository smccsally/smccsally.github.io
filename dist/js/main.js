/*eslint-env browser*/
document.addEventListener("DOMContentLoaded", function() {
    document.onreadystatechange = function() {
        var state = document.readyState;
        if (state == "interactive") {
            document.getElementById("contents").style.visibility = "hidden";
        } else if (state == "complete") {
            setTimeout(function() {
                document.getElementById("interactive");
                document.getElementById("load").style.visibility = "hidden";
                document.getElementById("contents").style.visibility = "visible";
            }, 1000);
        }
    };

    var li = document.querySelectorAll(".post-list>li");
    var backgroundColor = ["#222233", "#222233", "#222233", "#222233", "#222233", "#222233"];
    var wordColor = ["#fff"];
    var trigger = document.querySelectorAll(".trigger>.page-link");
    var length = li.length;
    for (var i = 0; i < length; i++) {
        li[i].setAttribute("id", i + 1);
        li[i].style.background = backgroundColor[i];
        li[i].style.color = wordColor[0];

        trigger[i].setAttribute("href", "#" + (i + 1));
    }
    var typedtext = document.querySelectorAll("#typedtext")[0];

    li[0].style.minHeight = "550px";
    if (window.innerHeight > 700) {
        typedtext.style.lineHeight = "45px";
        typedtext.style.height = "350px";
    }
    li[4].style.position = "relative";
    //var yScroll = li[1].offsetTop;
    // scrollTo(li[1], 0, 100);
    //window.scrollTo(0, li[1].offsetTop); 
    // var pageH = document.getElementsByClassName("page-heading")[0];

    //var scrollDown = true;
    // var yScroll = 0;
    //  var yScrollback = 0;
    var currentSlide;
    var lastSlide;
    var ticking = false;
    var last_scrollTop = 0;
    //var performance;
    // function scrollToTop(scrollDuration, scrollUp) {
    //     var cosParameter = window.scrollY / 2,
    //         scrollCount = 0,
    //         oldTimestamp = performance.now();

    //     function step(newTimestamp) {
    //         scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    //         if (scrollCount >= Math.PI) window.scrollTo(0, scrollUp);
    //         if (window.scrollY === scrollUp) return;
    //         window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    //         oldTimestamp = newTimestamp;
    //         window.requestAnimationFrame(step);
    //     }
    //     window.requestAnimationFrame(step);
    // }
    /*
     * target is the element we want to scroll to
     * duration is the scroll delay in ms
     */

    function smoothScroll(target, duration) {
        var startPosition = window.scrollY || window.pageYOffset;
        var targetPosition = target.offsetTop;
        var distance = targetPosition - startPosition;
        var timeStart = null;
        var timeElapsed, next;

        function loop(timeCurrent) {
            if (timeStart === null) timeStart = timeCurrent;
            timeElapsed = timeCurrent - timeStart;
            next = easeInOutQuad(timeElapsed, startPosition, distance, duration);

            // Vertically scroll from the current scroll position to next
            window.scrollTo(0, next);

            // Rerun the animation until the delay(duration) expires.
            if (timeElapsed < duration) window.requestAnimationFrame(loop);
        }

        // Robert Penner"s easeInOutQuad - http://robertpenner.com/easing/
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        // Start running the animation
        window.requestAnimationFrame(loop);
    }
    // document.getElementById("3").onclick = function(event) {

    //   smoothScroll(target, 1000); // scroll delay here will be 1s
    // }
    function moveNext(last_scrollTop, currentY) {

        currentSlide = Math.round(currentY / window.innerHeight) + 1;
        lastSlide = Math.round(last_scrollTop / window.innerHeight) + 1;

        //var eleup = document.getElementById(currentSlide);
        //var down = document.getElementById(lastSlide);

        //console.log(lastSlide,currentSlide);
        if (lastSlide < currentSlide && window.innerWidth > 900) {
            // smoothScroll(eleup,1000);
        }

        var header = document.querySelectorAll(".site-header")[0];
        if (currentY <= last_scrollTop && currentY > 70) {
            header.classList.add("static");
        } else {
            header.classList.remove("static");
        }
        //goingDown = (lastY < scroll_pos) ? true : false;
    }

    var currentY = 0;
    window.addEventListener("scroll", function() {
        "smooth";
        currentY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function(e) {
                moveNext(last_scrollTop, currentY);
                e.preventDefault();
                ticking = false;
                last_scrollTop = currentY;
            });

            ticking = true;
        }

    });
    window.addEventListener("touchmove", function(e) {
        "smooth";
        currentY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                moveNext(last_scrollTop, currentY);
                e.preventDefault();
                ticking = false;
                last_scrollTop = currentY;
            });

            ticking = true;
        }

    });

    


    var scrollPortfo = document.getElementsByClassName("workAction")[0];

    scrollPortfo.addEventListener("click", function() {
        smoothScroll(li[4], 1000);
    });



    


    


});
/*global $*/
$(document).ready(function () {
    var carousel = $(".carousel"),
        currdeg = 0;

    $(".next").on("click", {
        d: "n"
    }, rotate);
    $(".prev").on("click", {
        d: "p"
    }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 60;
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 60;
        }
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
    }
   
    $(".site-header .site-nav").on("touchstart", function() {
        $(".site-header .trigger").fadeToggle("300");
    });
    $(".trigger a[href^='#']").on("click", function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html, body").stop().animate({
            "scrollTop": $target.offset().top
        }, 900, "swing", function() {
            window.location.hash = target;
        });
    });
     var dragX, dragXEnd, clientX, deltaX, diffX;
    var container = document.getElementsByClassName("carousel")[0],
        sliderinStruction = document.querySelectorAll(".slider .instruction")[0];

    function start(e) {
        dragX = e.clientX;
        sliderinStruction.style.transition = "opacity 1s";
        sliderinStruction.style.opacity = 0;
    }

    function touchstart(e) {
        clientX = e.touches[0].clientX;
        sliderinStruction.style.transition = "opacity 1s";
        sliderinStruction.style.opacity = 0;
    }

    function touchend(e) {
        deltaX = e.changedTouches[0].clientX - clientX;
        var ele = (deltaX < 0) ? ".slider .next" : ".slider .prev";
        $(ele).click();
    }

    function end(e) {
        dragXEnd = e.clientX;
        diffX = dragXEnd - dragX;
        var ele = (diffX < 0) ? ".slider .next" : ".slider .prev";
        $(ele).click();
    }
    container.addEventListener("dragstart", start, false);
    container.addEventListener("dragend", end, false);
    container.addEventListener("touchstart", touchstart, false);
    container.addEventListener("touchend", touchend, false);
});