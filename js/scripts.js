const navWrapper = document.querySelector(".navwrapper");
let selectBtn = navWrapper.querySelector(".select-btn");
const theArtists = document.getElementsByClassName("navlink");

// let theOptions = document.getElementsByClassName("navlink");
// console.log(theOptions);

selectBtn.addEventListener("click", function () {
    navWrapper.classList.toggle("active");
});

function filterList() {
    let strSearch = document.getElementById("searchbox");
    strSearch = strSearch.value.toUpperCase();

    for(i = 0; i < theArtists.length; i++) {
        txtValue = theArtists[i].textContent;
        if(txtValue.toUpperCase().indexOf(strSearch) > -1) {
            theArtists[i].style.display = "";
        }
        else {
            theArtists[i].style.display = "none";
        }
    }
}

function showArtist(selectedArtist) {
    let selArtist = selectedArtist;
    let artists = document.getElementsByClassName("artist");

    for(i = 0; i < artists.length; i++) {
        artists[i].style.display = "none";
    }
    if(selArtist > artists.length) {
        selArtist = 0;
    }
    if(selArtist < 0) {
        selArtist = artists.length;
    }
    artists[selArtist].style.display = "block";
    navWrapper.className = navWrapper.className.replace(" active", "");
    document.getElementById("searchbox").value = "";
    for(n = 0; n < theArtists.length; n++) {
        theArtists[n].style.display = "";
    }
    

}

function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

window.onload = function () {
    currentYear();
    showArtist(Math.floor(Math.random() * document.getElementsByClassName('artist').length));
}