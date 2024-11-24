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

//Offer Section
var Offer = document.getElementById("Offer")
var OfferClose = document.getElementById("OfferClose")

OfferClose.addEventListener("click", function () {
    Offer.style.display = "none"
})


var collectionContainer = document.getElementById("collectionContainer");
var search = document.getElementById("search");
var collectionlist = collectionContainer.querySelectorAll("div");
var checkContainer = document.getElementById("checkContainer");
var checkboxes = checkContainer.querySelectorAll("input[type='checkbox']");

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()
    for (count = 0; count < collectionlist.length; count++) {
        var collectionName = collectionlist[count].querySelector("h1").textContent
        if (collectionName.toUpperCase().indexOf(enteredValue) < 0) {
            collectionlist[count].style.display = "none"
        }
        else {
            collectionlist[count].style.display = "block"
        }
    }
})


checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        filterCollections();
    });
});

function filterCollections() {
    var selectedTags = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value.toUpperCase());

    collectionlist.forEach(function (collection) {
        var collectionTags = collection.dataset.tags
            ? collection.dataset.tags.toUpperCase()
            : "";

        if (selectedTags.length === 0 || selectedTags.some((tag) => collectionTags.includes(tag))) {
            collection.style.display = "block"; 
        } 
        else {
            collection.style.display = "none";
        }
    });
}

