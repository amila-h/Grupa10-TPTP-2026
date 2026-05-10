const banner = document.getElementById('banner');
const FotografijaIkoneFilma = document.getElementById('movie-title');
const OpisFilma = document.getElementById('movie-description');
const GodinaFilma = document.getElementById('movie-year');
const DobFilma = document.getElementById('movie-age');
const TrajanjeFilma = document.getElementById('movie-duration');
const PrviZanrFilma = document.getElementById('movie-genre1');
const DrugiZanrFilma = document.getElementById('movie-genre2');
const KarticeFilmova = document.querySelectorAll('.movie-card');

KarticeFilmova.forEach(kartica => {
    kartica.addEventListener('click', function() {
        
        const pozadina = this.getAttribute('data-bg');
        const ikona = this.getAttribute('data-title');
        const opis = this.getAttribute('data-description');
        const godina = this.getAttribute('data-year');
        const dob = this.getAttribute('data-age');
        const trajanje = this.getAttribute('data-duration');
        const PrviZanr = this.getAttribute('data-genre1');
        const DrugiZanr = this.getAttribute('data-genre2');

        banner.style.backgroundImage = `url('${pozadina}')`;
        banner.style.backgroundSize = 'cover'; 
        banner.style.backgroundRepeat = 'no-repeat'; 
        
        FotografijaIkoneFilma.src = ikona; 
        OpisFilma.innerText = opis;
        GodinaFilma.innerText = godina;
        DobFilma.innerText = dob;
        TrajanjeFilma.innerText = trajanje;
        PrviZanrFilma.innerText = PrviZanr; 
        DrugiZanrFilma.innerText = DrugiZanr; 

    });
});