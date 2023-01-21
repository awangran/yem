
function dark() {
    var  deff= document.querySelector(':root');
    deff.style.setProperty('--color-default', '#F3E9D2');

    var highlight = document.querySelector(':root');
    highlight.style.setProperty('--color-highlight', '#272520');

    var lightIcon = document.getElementById("lightmode");
    var darkIcon = document.getElementById("darkmode");

   lightIcon.style.setProperty('visibility', 'visible');
    darkIcon.style.setProperty('visibility', 'hidden');
};

function light() {
    var  deff= document.querySelector(':root');
    deff.style.setProperty('--color-default', '#114B5F');

    var highlight = document.querySelector(':root');
    highlight.style.setProperty('--color-highlight', '#F3E9D2');

    var lightIcon = document.getElementById("lightmode");
    var darkIcon = document.getElementById("darkmode");


    lightIcon.style.setProperty('visibility', 'hidden')
    darkIcon.style.setProperty('visibility', 'visible')
};

function toggleMenu(){
    var menu = document.getElementById("navMenu");

    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

};