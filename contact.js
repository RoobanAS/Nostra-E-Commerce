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