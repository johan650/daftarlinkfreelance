const freelanceData = {
    tele: [
        { name: "Zona Iklan (Real Membayar 100%)", link: "https://t.me/zonaiklanbot?start=5037415993" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" }
    ],
    apk: [
        { name: "Jawab Quizz (Reall Membayar 100%)", link: "https://www.camile.mobi/?ref=czarwyf" },
        { name: "Poker (100% Reall) ref (9lz5g) bonus 500 ", link: "https://d1ak9ytuf35b5f.cloudfront.net/invite.id.html?code=9lz5g" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" }
    ],
    web: [
        { name: "Blast WhatsApp (Reall 100%)", link: "https://setorwa1.com/signup?ref=REF-386BB2E8" },
        { name: "atm05 (Reall 100%)", link: "https://atm05.com/#/reg?i=I9JWU4LF" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" }
    ]
};

function showContent(category) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const freelanceList = document.getElementById('freelance-list');

    // Kosongkan daftar sebelumnya
    freelanceList.innerHTML = '';

    // Isi judul dan daftar sesuai kategori
    if (category === 'tele') {
        popupTitle.textContent = 'Daftar Freelance Telegram';
    } else if (category === 'apk') {
        popupTitle.textContent = 'Daftar Freelance Aplikasi';
    } else if (category === 'web') {
        popupTitle.textContent = 'Daftar Freelance Website';
    }

    freelanceData[category].forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <a href="${item.link}" target="_blank">Kunjungi &rarr;</a>
        `;
        freelanceList.appendChild(li);
    });

    popupOverlay.classList.add('show');
}

function hideContent() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.classList.remove('show');
}

