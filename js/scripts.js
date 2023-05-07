// Start off with some variables for some of the elements on the page
const navWrapper = document.querySelector(".navwrapper");
let selectBtn = navWrapper.querySelector(".select-btn");

// an array of artists collected from the navlinks
const theArtists = document.getElementsByClassName("navlink");

// Add a click-event listener to the selectBtn to toggle the active class on or off which determines whether the search/dropdown is open or closed
selectBtn.addEventListener("click", function () {
    navWrapper.classList.toggle("active");
});

// This function filters the visible items in the dropdown list based on what the user has entered into the search box 
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

// This function displays the selected artist
function showArtist(selectedArtist) {
    let selArtist = selectedArtist;
    let artists = document.getElementsByClassName("artist");

    // Hide all the artists
    for(i = 0; i < artists.length; i++) {
        artists[i].style.display = "none";
    }

    // Probably don't need these two if statements since the artist index value is only coming from the navlinks or the random index number generator which is
    // based on the number of available artists.
    // if(selArtist > artists.length) {
    //     selArtist = 0;
    // }
    // if(selArtist < 0) {
    //     selArtist = artists.length;
    // }

    // display the selected artist
    artists[selArtist].style.display = "block";

    //
    //  Cleanup
    //

    // Close the dropdown
    navWrapper.className = navWrapper.className.replace(" active", "");

    // Reset the searchbox by clearing the search string
    document.getElementById("searchbox").value = "";

    // Restore all dropdown options
    for(n = 0; n < theArtists.length; n++) {
        theArtists[n].style.display = "";
    }

    // Attempt to return the list of artists back to the top. 
    // This part does NOT work.
    let theDropDown = document.getElementById("artist-options");
    theDropDown.documentElement.scrollTop = 0;
    theDropDown.body.scrollTop = 0;
    

}

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
         
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("totopbutton").style.display = "block";
  } else {
    document.getElementById("totopbutton").style.display = "none";
  }
}

// When the user clicks on the Return To Top button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the current year for the copyright statement in the document footer
function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

// on Window Load, call the current year function and the showArtist function - select a random artist to display first
window.onload = function () {
    currentYear();
    showArtist(Math.floor(Math.random() * document.getElementsByClassName('artist').length));
}