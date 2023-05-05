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
}

function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

window.onload = function () {
    currentYear();
    showArtist(Math.floor(Math.random() * document.getElementsByClassName('artist').length));
}