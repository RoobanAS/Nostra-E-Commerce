//Offer Section
var Offer = document.getElementById("Offer")
var OfferClose = document.getElementById("OfferClose")

OfferClose.addEventListener("click", function () {
    Offer.style.display = "none"
})

//Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () 
{
    sidenav.style.left=0
});

closenav.addEventListener("click", function () 
{
    sidenav.style.left="-50%"
});

//Sale Image Section
let sliderList = document.querySelector('.slider-list')
let sliderItems = document.querySelectorAll('.slider-img')
let leftArrow = document.getElementById("leftArrow")
let rightArrow = document.getElementById("rightArrow")

let activeIndex = 0

rightArrow.addEventListener("click", function () {
    activeIndex = (activeIndex + 1) % sliderItems.length 
    updateSliderPosition()
})

leftArrow.addEventListener("click", function () {
    activeIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length 
    updateSliderPosition()
})

function updateSliderPosition() {
    const offset = -activeIndex * sliderItems[0].clientWidth 
    sliderList.style.transform = `translateX(${offset}px)`
}
