// functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//initializing index of slides array
var slideIndex = 1;
showSlides(slideIndex);

//functions to change slides from right to left and keep track of current slide for dot style
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function for showing and moving slides right and left
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // gets all myslides class elements and makes an array called "slides"
    var dots = document.getElementsByClassName("dot"); // gets all dot class elements and makes an array called "dots"
    if (n > slides.length) { // if array index is more than the amount of indexes, go back to 1
        slideIndex= 1
    }
    if (n < 1) { // if array index is less than 1, go to array length
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) { // loop through each item in array "slides" and makes the display "none"
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active",""); //removes activing styling for each item in array "dots"
    }
    slides[slideIndex - 1].style.display = "block"; //display the current slide
    dots[slideIndex - 1].className += " active"; //adds active styling to current dot
}

// adds an event listener to allow clicking anywher outside of the contact pop-up to close the contact form
document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm();
    }
}, false)