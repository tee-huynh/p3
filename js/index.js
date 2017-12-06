
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
  var dots = document.getElementsByClassName("dot");
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

}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none"; 
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block"; 
  dots2[slideIndex2-1].className += " active";

}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1} 
  if (n < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none"; 
  }
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block"; 
  dots3[slideIndex3-1].className += " active";

}


var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1} 
  if (n < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none"; 
  }
  for (i4 = 0; i4 < dots4.length; i4++) {
      dots4[i4].className = dots4[i4].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block"; 
  dots4[slideIndex4-1].className += " active";

}


var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i5;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n > slides5.length) {slideIndex5 = 1} 
  if (n < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
      slides5[i5].style.display = "none"; 
  }
    for (i5 = 0; i5 < dots5.length; i5++) {
      dots5[i5].className = dots5[i5].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block"; 
  dots5[slideIndex5-1].className += " active";

}


var slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  var i7;
  var slides7 = document.getElementsByClassName("mySlides7");
  var dots7 = document.getElementsByClassName("dot7");
  if (n > slides7.length) {slideIndex7 = 1} 
  if (n < 1) {slideIndex7 = slides7.length}
  for (i7 = 0; i7 < slides7.length; i7++) {
      slides7[i7].style.display = "none"; 
  }
    for (i7 = 0; i7 < dots7.length; i7++) {
      dots7[i7].className = dots7[i7].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block"; 
  dots7[slideIndex7-1].className += " active";

}