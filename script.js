const freelanceData = {
    tele: [
        { name: "Zona Iklan (Real Membayar 100%)", link: "https://t.me/zonaiklanbot?start=5037415993" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" }
    ],
    apk: [
        { name: "Jawab Quizz (Reall Membayar 100%)", link: "https://www.camile.mobi/?ref=czarwyf" },
        { name: "Copot Baut (Reall Membayar 100%)", link: "https://m.luckyunscrew.com/share/index?r_id=646817&lang=id" },
        { name: "-", link: "https://daftarlinkfreelance.vercel.app/belum.html" }
    ],
    web: [
        { name: "Jawab Survery (Membayar 100%)", link: "https://primeopinion.com/register?ref=9e67064a-2be6-46ae-9c49-4c687250c643" },
        { name: "Blast WhatsApp (Reall 100%)", link: "https://setorwa1.com/signup?ref=REF-386BB2E8" },
        { name: "atm05 (Reall 100%)", link: "https://atm05.com/#/reg?i=I9JWU4LF" },
        { name: "bonty grab ( Membayar 100%)", link: "http://bountygrab.com?shareCode=uBS8Uit2" }
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

