/*Početak js za index.html stranicu */

const banner = document.getElementById('banner');
 
if (banner) { /*Ovaj if(banner){} elemenat mi je dodao Claude AI, jer nisam mogla shvatiti zašto ne funkcioniše dio js koda za sadrzaj.html. 
    Objasnio mi je da kada dođemo na sadrzaj.html js ne može aktivirati dio js koda za sadrzaj.html, 
    zato što pročita prvo dio js koda od index.html, a taj dio ne postoji na sadrzaj.html.
    Zbog toga sam onda stavljala ovaj uslov i za sve ostalo, da ne bih imala opet ovakav problem. */ 

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

if (ViseInformacijaDugme && ViseInformacijaOFilmu) {
ViseInformacijaDugme.addEventListener('click', function(klik) {
    ViseInformacijaOFilmu.style.display = "block";
});
}

window.addEventListener('click', function(klik) {
    if (klik.target === ViseInformacijaOFilmu) {
        ViseInformacijaOFilmu.style.display = 'none';
    }
});

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
}

/*Kraj js za index.html stranicu */

/*Početak js za sadrzaj.html stranicu */

const pozadinaVanPopupa = document.querySelector('.pozadina-preko-ekrana-popup');
const sveKarticeFilmova = document.querySelectorAll('.film-card');
const pravokutnik = document.getElementById('popup-sadrzajweb-pravokutnik');

if (sveKarticeFilmova.length > 0 && pozadinaVanPopupa && pravokutnik) {
 
    sveKarticeFilmova.forEach(karticaFilma => {
        karticaFilma.addEventListener('click', function (e) {
 
            const stvarnaKartica = e.target.closest('.film-card');
            if (!stvarnaKartica) return;
 
            const naslov = stvarnaKartica.querySelector('h3').innerText;
            const zanr = stvarnaKartica.querySelector('.film-card-genre').innerText;
            const metaPodaci = stvarnaKartica.querySelector('.film-card-meta').innerHTML;
            const duziOpis = stvarnaKartica.getAttribute('data-sinopsis');
 
            pravokutnik.querySelector('h3').innerText = naslov;
            pravokutnik.querySelector('.film-card-genre').innerText = zanr;
            pravokutnik.querySelector('.film-card-meta').innerHTML = metaPodaci;
            pravokutnik.querySelector('[data-sinopsis]').innerText = duziOpis;
 
            pozadinaVanPopupa.classList.add('aktivno');
        });
    });

    pozadinaVanPopupa.addEventListener('click', function (klik) {
        if (klik.target === pozadinaVanPopupa) {
            pozadinaVanPopupa.classList.remove('aktivno'); 
        }
    });
 
}

const filterDugmica = document.querySelectorAll('.filter-btn');

if (filterDugmica.length > 0) {

    filterDugmica.forEach(dugme => {
        dugme.addEventListener('click', function() {

            filterDugmica.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            const odabraniFilter = this.getAttribute('data-filter');

            sveKarticeFilmova.forEach(kartica => {
                if (odabraniFilter === 'all') {
                    kartica.style.display = 'block';
                } else if (kartica.getAttribute('data-category') === odabraniFilter) {
                    kartica.style.display = 'block';
                } else {
                    kartica.style.display = 'none';
                }
            });
        });
    });

}

/*Ovo neće raditi za različite veličine monitora, ili na mobilnim uređajima. Makar ne trenutno. */

const kinoModal = document.getElementById('kinoModal');

if (kinoModal) {

    const kinoModalTitle = document.getElementById('kinoModalTitle');
    const kinoModalDesc = document.getElementById('kinoModalDesc');
    const kinoModalUrl = document.getElementById('kinoModalUrl');
    const kinoCloseBtn = document.getElementById('kinoCloseBtn');
    const kinoGoBtn = document.getElementById('kinoGoBtn');

    const kinoInfo = {
        popcorn: {
            title: 'Kokice',
            desc: 'Kokice su nezaobilazan dio kino iskustva',
            url: 'https://www.popcorn.org/'
        },
        cola: {
            title: 'Cola',
            desc: 'Osvježavajući napitak uz omiljeni film',
            url: 'https://www.coca-cola.com/ba/bs/brands/coca-cola'
        },
        karte: {
            title: 'Ulaznice',
            desc: 'Bez ulaznice nema filma',
            url: 'https://cinestarcinemas.ba/tuzla-bingo-city-center'
        }
    };

    document.querySelectorAll('area[data-type]').forEach(area => {
        area.addEventListener('click', function(e) {
            e.preventDefault(); 

            const tip = this.getAttribute('data-type');
            const podaci = kinoInfo[tip];

            kinoModalTitle.innerText = podaci.title;
            kinoModalDesc.innerText = podaci.desc;
            kinoModalUrl.href = podaci.url;
            kinoModalUrl.innerText = podaci.url;

            kinoModal.style.display = 'flex';
        });
    });

    kinoCloseBtn.addEventListener('click', function() {
        kinoModal.style.display = 'none';
    });

    kinoGoBtn.addEventListener('click', function() {
        window.open(kinoModalUrl.href, '_blank');
        kinoModal.style.display = 'none';
    });

    kinoModal.addEventListener('click', function(e) {
        if (e.target === kinoModal) {
            kinoModal.style.display = 'none';
        }
    });

}
const galerija = document.querySelector('.gallery-grid');

if (galerija) {

    const pozadinaOdSlike = document.createElement('div');
    pozadinaOdSlike.id = 'galerija-pozadina';
    document.body.appendChild(pozadinaOdSlike);

    const velikaSlika = document.createElement('img');
    pozadinaOdSlike.appendChild(velikaSlika);

    galerija.querySelectorAll('img').forEach(slika => {
        slika.addEventListener('click', function() {
            velikaSlika.src = this.src;
            pozadinaOdSlike.classList.add('aktivno');
        });
    });

    pozadinaOdSlike.addEventListener('click', function() {
        pozadinaOdSlike.classList.remove('aktivno');
    });

}

/*Ovaj dio sam iskopirala sa prezentacije 7, slide 16 desni dio. */

const dugme = document.getElementById('menuToggle');
const meni = document.getElementById('sideMenu');

if (dugme && meni) {
    dugme.addEventListener('click', () => {
        meni.classList.toggle('otvoren');
        dugme.textContent = meni.classList.contains('otvoren') ? '✕' : '☰';
    });
    meni.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            meni.classList.remove('otvoren');
            dugme.textContent = '☰';
        });
    });
}

/*Kraj js za sadrzaj.html stranicu */

/*Početak js za kontakt.html stranicu */

/* Ovaj dio js koda za validaciju korisnikovog unosa prije slanja podataka sam iskopirala sa prezentacije broj 9,
slide broj 25. Izmjenila sam nazive, s obzirom da u html-u nisu korišteni isti nazivi kao na prezentaciji, 
ali sam i dodala dodatne linije koda po uzoru na prezentaciju, za ona polja koja ne postoje na prezentaciji.
Također, dodano je da za tekst koji govori korisniku što mora unijeti ili promjeniti da
se pojavi tek onda kada korisnik klikne na dugme "Pošalji poruku" u slučaju da nije ukucao ispravne podatke.
Također, dodan je ovaj if kao i u drugim dijelovima koda, jer radimo sa jednom js datotekom, a više html datoteka.
I da se izbriše sve što je korisnik pisao kada pošalje poruku uspješno.*/

const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

if (document.querySelector('form[action="#"]')) {
  document.querySelector('form[action="#"]').addEventListener('submit', (e) => {
    e.preventDefault();

    let validan = true;

    const svaPolja = [
      { id: 'ime', errId: 'imeErr', poruka: 'Ime je obavezno!' },
      { id: 'prezime', errId: 'prezimeErr', poruka: 'Prezime je obavezno!' },
      { id: 'email', errId: 'emailErr', poruka: 'Neispravan email!', regex: emailRegex },
      { id: 'poruka', errId: 'porukaErr', poruka: 'Poruka mora imati najmanje 10 karaktera!', regex: /^.{10,}$/ },
    ];

    svaPolja.forEach(({ id, errId, poruka, regex }) => {
      const polje  = document.getElementById(id);
      const greska = document.getElementById(errId);

      if (!polje.value.trim() || (regex && !regex.test(polje.value.trim()))) {
        greska.textContent = poruka;
        greska.style.display = 'block';
        polje.classList.add('polje-greska');
        validan = false;
      } 
      else {
        greska.textContent = '';
        greska.style.display = 'none';
        polje.classList.remove('polje-greska');
      }
    });

    const polje = document.getElementById('telefon');
    const greska = document.getElementById('phoneErr');
    const vrijednostBrojeva = /^\+?[\d]{9,15}$/; 
    const samoSlova = /[^\d\+]/; 

    if (!polje.value.trim()) {
      greska.textContent = 'Telefon je obavezan';
      greska.style.display = 'block';
      polje.classList.add('polje-greska');
      validan = false;
    } 
    else if (samoSlova.test(polje.value.trim())) {
      greska.textContent = 'Mogu se unositi samo brojevi';
      greska.style.display = 'block';
      polje.classList.add('polje-greska');
      validan = false;
    } 
    else if (!vrijednostBrojeva.test(polje.value.trim())) {
      greska.textContent = 'Broj telefona mora imati najmanje 9 cifri';
      greska.style.display = 'block';
      polje.classList.add('polje-greska');
      validan = false;
    } 
    else {
      greska.textContent = '';
      greska.style.display = 'none';
      polje.classList.remove('polje-greska');
    }

    const tema = document.getElementById('tema');
    const temaGreska = document.getElementById('temaErr');

    if (!tema.value) {
      temaGreska.textContent = 'Molimo odaberite temu upita.';
      temaGreska.style.display = 'block';

      validan = false;

    } 
    else {
      temaGreska.textContent = '';
      temaGreska.style.display = 'none';
    }

    if (validan) {

      const ime = document.getElementById('ime').value.trim();

      document.getElementById('successMsg').textContent = `Hvala, ${ime}! Poruka je poslana.`;
      document.querySelector('form[action="#"]').reset();
    }
  });
}
/*Kraj js za kontakt.html stranicu */