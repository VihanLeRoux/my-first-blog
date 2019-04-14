var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
	var slide_center = document.getElementsByClassName("slide-center");
	var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
		slide_center[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-dot", "");
    }
	slides[slideIndex-1].style.opacity = "1";
	slide_center[slideIndex-1].style.opacity = "1";
	dots[slideIndex-1].className += " active-dot";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slide");
	var slide_center = document.getElementsByClassName("slide-center");
	var dots = document.getElementsByClassName("dot");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.opacity = "0";
		slide_center[i].style.opacity = "0";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-dot", "");
	}
	x[slideIndex-1].style.opacity = "1";
	slide_center[slideIndex-1].style.opacity = "1";
	dots[slideIndex-1].className += " active-dot";
}

window.onscroll = function() {scrollFunc()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
function scrollFunc() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		document.getElementById("top-scroll").style.display = "block";
	} else {
		header.classList.remove("sticky");
		document.getElementById("top-scroll").style.display = "none";
	}
	if (window.pageYOffset > 830) {
		document.getElementsByClassName("skill-one")[0].style.width = "90%";
		document.getElementsByClassName("skill-two")[0].style.width = "80%";
		document.getElementsByClassName("skill-three")[0].style.width = "65%";
		document.getElementsByClassName("skill-four")[0].style.width = "60%";
		document.getElementsByClassName("skill")[0].style.opacity = "1";
		document.getElementsByClassName("skill")[1].style.opacity = "1";
		document.getElementsByClassName("skill")[2].style.opacity = "1";
		document.getElementsByClassName("skill")[3].style.opacity = "1";
	}
	if (window.pageYOffset > 260) {
		document.getElementsByClassName("about-photo")[0].style.opacity = "1";
	}
	if (window.pageYOffset == 0) {
		document.getElementsByClassName("about-photo")[0].style.opacity = "0";
		document.getElementsByClassName("skill-one")[0].style.width = "0%";
		document.getElementsByClassName("skill-two")[0].style.width = "0%";
		document.getElementsByClassName("skill-three")[0].style.width = "0%";
		document.getElementsByClassName("skill-four")[0].style.width = "0%";
		document.getElementsByClassName("skill")[0].style.opacity = "0";
		document.getElementsByClassName("skill")[1].style.opacity = "0";
		document.getElementsByClassName("skill")[2].style.opacity = "0";
		document.getElementsByClassName("skill")[3].style.opacity = "0";
	}
}

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var image3 = document.querySelector(".img3");
function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
window.addEventListener("DOMContentLoaded", scrollLoop, false);
var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;
	setTranslate(0, yScrollPosition / +3, image1);
	setTranslate(0, yScrollPosition / +3, image2);
	setTranslate(0, yScrollPosition / +3, image3);
	requestAnimationFrame(scrollLoop);
}

$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
	
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(window).scroll(startCounter);
function startCounter() {
	if ($(window).scrollTop() > 1150 && $(window).scrollTop() < 1160) {
		$(window).off("scroll", startCounter);
		$('.amount').each(function () {
			var $this = $(this);
			jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data") }, {
				duration: 1000,
				easing: 'swing',
				step: function () {
					$this.text(Math.ceil(this.Counter));
				}
			});
		});
	}
}