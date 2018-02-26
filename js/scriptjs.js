  
  /*global $*/
  /* intro */
  $("#outline").css("stroke-dasharray", $("#outline")[0].getTotalLength());
  $("#outline").css("stroke-dashoffset", $("#outline")[0].getTotalLength());
  $("#outline").animate({
    strokeDashoffset: 0
  }, 2900);
  setTimeout(function(){
    $("#outline").css({"fill": "#000",'transition': '2s fill'});
  }, 2900);
  $("#face").css("stroke-dasharray", $("#face")[0].getTotalLength());
  $("#face").css("stroke-dashoffset", $("#face")[0].getTotalLength());
  $("#face").animate({
    strokeDashoffset: 0
  }, 2500);
  setTimeout(function(){
    $("#face").css({"fill": "#000",'transition': '2s fill'});
  }, 2900);
// set up text to print, each item in array is new line
var firstR = document.getElementById("typedtext");

var aText = new Array(
"<span style='font-size:2em;color:#A8C5FF'>Hi,I am Sali.</span>",
"a passionate front-end developer,",
"a detail-oriented aesthete,",
"a creative and self-driven techie",
"and many more ..."
);
var iSpeed = 70; // time delay of print out
var iIndex = 1; // start printing array at this posision
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 if(aText[iIndex]){
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) ;
 
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 120);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
 }
}


typewriter();




function moveArrow(){
   var container = document.getElementsByClassName('container')[0];
  var position = container.getBoundingClientRect();
  var x1 = position.width * 1.7;
  var x2 = position.width /1.2; 
  var y1 = position.height /2;
  
  var next = document.getElementsByClassName('next')[0];
  var prev = document.getElementsByClassName('prev')[0];
   next.style.top =  y1 + 'px';
   next.style.left = x1  + 'px';
   prev.style.top =  y1 + 'px';
   prev.style.left = -x2 + 'px';
  }
  window.addEventListener("resize", moveArrow());
  




 var len;
   $(document).ready(function() {
   	  len = document.querySelectorAll('.browser-mockup').length;
   	var bgcolor = ['#0365aa','#038baa','#0393aa','#03aaaa'];
   	var wordcolor = [ '#decdb2','#a2d4d2','#a2d4bb','#a2cad4'];
   	  
   	for(var i=1;i<=len;i++){
   	  var sliderid = '#' + i + i;
   	  $('#5 #' + i).css({'background':bgcolor[i-1]});
   	  $(sliderid).css({'opacity':'0','height':'0px'});
$(sliderid + ' .comparison-slider-wrapper .comparison-slider > img').css({'display':'none'});
   	// If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
   	if ($(sliderid + " .comparison-slider")[0]) {
   		let compSlider = $(sliderid + " .comparison-slider");
   		//let's loop through the sliders and initialise each of them
   		compSlider.each(function() {
   			let compSliderWidth = $(this).width() + "px";
   			$(this).find(".resize img").css({ width: compSliderWidth });
   			
   			drags($(this).find(".divider"), $(this).find(".resize"), $(this));
   		});
   
   		//if the user resizes the windows lets update our variables and resize our images
   		$(window).on("resize", function() {
   			let compSliderWidth = compSlider.width() + "px";
   			compSlider.find(".resize img").css({ width: compSliderWidth });
   		});
   	}
   	}
   });
   
   // This is where all the magic happens
   // This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
   function drags(dragElement, resizeElement, container) {
   	
   	// This creates a variable that detects if the user is using touch input insted of the mouse.
   	let touched = false;
   	window.addEventListener('touchstart', function() {
   		touched = true;
   	});
   	window.addEventListener('touchend', function() {
   		touched = false;
   	});
   	
   	// clicp the image and move the slider on interaction with the mouse or the touch input
   	dragElement.on("mousedown touchstart", function(e) {
   		    $('.caption .instruction').css({'transition':'opacity 1s','opacity':0});
   		    
   			//add classes to the emelents - good for css animations if you need it to
   			dragElement.addClass("draggable");
   			resizeElement.addClass("resizable");
   			
   			//create vars
   			let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
   			let dragWidth = dragElement.outerWidth();
   			let posX = dragElement.offset().left + dragWidth - startX;
   			let containerOffset = container.offset().left;
   			let containerWidth = container.outerWidth();
   			let minLeft = containerOffset + 10;
   			let maxLeft = containerOffset + containerWidth - dragWidth - 10;
   			
   			//add event listner on the divider emelent
   			dragElement.parents().on("mousemove touchmove", function(e) {
   				// if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
   				if ( touched === false ) {
   					e.preventDefault();
   				}
   				
   				let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
   				let leftValue = moveX + posX - dragWidth;
   
   				// stop the divider from going over the limits of the container
   				if (leftValue < minLeft) {
   					leftValue = minLeft;
   				} else if (leftValue > maxLeft) {
   					leftValue = maxLeft;
   				}
   
   				let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
   
   				$(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function() {
   					$(this).removeClass("draggable");
   					resizeElement.removeClass("resizable");
   				});
   				
   				$(".resizable").css("width", widthValue);
   				
   			}).on("mouseup touchend touchcancel", function() {
   				dragElement.removeClass("draggable");
   				resizeElement.removeClass("resizable");
   				
   			});
   		
   		}).on("mouseup touchend touchcancel", function(e) {
   			// stop clicping the image and move the slider
   			dragElement.removeClass("draggable");
   			resizeElement.removeClass("resizable");
   		
   		});
   	
   }
    len = document.querySelectorAll('.browser-mockup').length;
   
//      var sliderid = '#' + i + i;
//      var id = '#' + i;
   
   
  $('.compare').on('click',function(){
     //$(sliderid).css({'opacity':'0','height':'0px'});
 // $(sliderid + ' .comparison-slider-wrapper .comparison-slider > img').css({'display':'none'});
     var num = $(this).closest('.browser-mockup').attr('id');
     var sliderid = '#' + num + num;
          $(sliderid + ' .comparison-slider-wrapper .comparison-slider > img').css({'display':'block'});
      var height = $(sliderid + ' .comparison-slider-wrapper')[0].getBoundingClientRect().height ;
        $(sliderid).css({'opacity':'1','z-index':'100','height':'100%'});
  })
  var top =[];
  for(var i=1;i<5;i++){
      top[i] = ($('#' + i)[0].getBoundingClientRect().top - 50) +'px';
      $('#' + i + i).css({'top':top[i]});
  }
  $('.close').on('click',function(){
      var num = $(this).closest('.overlayTop').attr('id');
     var sliderid = '#' + num + num;
      $('.overlayTop').css({'opacity':'0','height':'0px'});
  $('.overlayTop .comparison-slider-wrapper .comparison-slider > img').css({'display':'none'});
       
  })
  
  /*see more*/
  function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}