/*Početak js za index.html stranicu */

const banner = document.getElementById('banner');
const FotografijaIkoneFilma = document.getElementById('movie-title');
const KratkiOpisFilma = document.getElementById('movie-description');
const GodinaFilma = document.getElementById('movie-year');
const DobFilma = document.getElementById('movie-age');
const TrajanjeFilma = document.getElementById('movie-duration');
const PrviZanrFilma = document.getElementById('movie-genre1');
const DrugiZanrFilma = document.getElementById('movie-genre2');
const KarticeFilmova = document.querySelectorAll('.movie-card');

const TrailerDugme = document.getElementById('trailer-btn');    

const ViseInformacijaDugme = document.getElementById('info-btn');        
const DuziOpisFilma = document.getElementById('DuziOpisFilma'); 
const ViseInformacijaOFilmu = document.getElementById('ViseInformacijaOFilmu');  
const PopupGodina = document.getElementById('PopupGodina');    
const PopupDob = document.getElementById('PopupDob');          
const PopupTrajanje = document.getElementById('PopupTrajanje');

const TrakaKretanjaFilmova = document.getElementById('slider'); 
const DugmeLijevo = document.getElementById('prev');   
const DugmeDesno = document.getElementById('next');

KarticeFilmova.forEach(kartica => {
    kartica.addEventListener('click', function() {
        
        const pozadina = this.getAttribute('data-bg');
        const ikona = this.getAttribute('data-title');
        const opisKratki = this.getAttribute('data-description');
        const godina = this.getAttribute('data-year');
        const dob = this.getAttribute('data-age');
        const trajanje = this.getAttribute('data-duration');
        const PrviZanr = this.getAttribute('data-genre1');
        const DrugiZanr = this.getAttribute('data-genre2');

        const trailerLink = this.getAttribute('data-trailer');

        const duziOpis = this.getAttribute('data-DuziOpisFilma');

        banner.style.backgroundImage = `url('${pozadina}')`;
        banner.style.backgroundSize = 'cover'; 
        banner.style.backgroundRepeat = 'no-repeat'; 
        
        FotografijaIkoneFilma.src = ikona; 
        KratkiOpisFilma.innerText = opisKratki;
        GodinaFilma.innerText = godina;
        DobFilma.innerText = dob;
        TrajanjeFilma.innerText = trajanje;
        PrviZanrFilma.innerText = PrviZanr; 
        DrugiZanrFilma.innerText = DrugiZanr; 

/*Za trailer */
        if (trailerLink) {
            TrailerDugme.href = trailerLink;
        }

/*Za pop-up */
        DuziOpisFilma.innerText = duziOpis; 
        PopupGodina.innerText = godina;           
        PopupDob.innerText = dob;                 
        PopupTrajanje.innerText = trajanje;
    });
});

ViseInformacijaDugme.addEventListener('click', function(klik) {
    ViseInformacijaOFilmu.style.display = "block";
});

window.onclick = function(klik) {
    if (klik.target == ViseInformacijaOFilmu) {
        ViseInformacijaOFilmu.style.display = "none";
    }
};

/*Za pomjeranje filmova */
DugmeDesno.addEventListener('click', () => {
    const posteriFilmova = document.querySelectorAll('.movie-card');
    TrakaKretanjaFilmova.appendChild(posteriFilmova[0]); 
});

DugmeLijevo.addEventListener('click', () => {
    const posteriFilmova = document.querySelectorAll('.movie-card');
    const zadnjiPosterFilmova = posteriFilmova[posteriFilmova.length - 1];
    TrakaKretanjaFilmova.prepend(zadnjiPosterFilmova);
});

/*Kraj js za index.html stranicu */

/*Početak js za sadrzaj.html stranicu */

/*Kraj js za sadrzaj.html stranicu */

/*Početak js za kontakt.html stranicu */

/*Kraj js za kontakt.html stranicu */