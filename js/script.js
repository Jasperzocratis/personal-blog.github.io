'use srtict';


// Add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// Mobile Navbar Toggler


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);




// Header Animation
// Scrolled down to 100px header will be active

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// Slider


const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue
("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].
  offsetLeft}px)`;
}

// Next Slide

const slideNext = function () {
  const slideEnd = currentSlidePos > totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else{
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

// Previous Slide

const slidePrev = function () {
  if (currentSlidePos < 0) {
    currentSlidePos = totalSlidableItems;
  } else{
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

// Responsive

window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
})




// Get references to the form elements
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email_address"]');
const subscribeBtn = document.getElementById('subscribeBtn');

// Add a click event listener to the subscribe button
subscribeBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the input fields
    const name = nameInput.value;
    const email = emailInput.value;

    // You can perform further validation here if needed

    // Display a message to the user
    alert(`Thank you for subscribing, ${name}! We will send updates to ${email}.`);
    
    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';
});