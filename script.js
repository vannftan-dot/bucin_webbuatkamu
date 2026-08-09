// 1. Sistem Musik Lanjut (Anti Putus saat pindah halaman)
let music = document.getElementById('bgMusic');
let isPlaying = localStorage.getItem('musicPlaying') === 'true';
let currentTime = parseFloat(localStorage.getItem('musicTime')) || 0;

// Set waktu musik ke posisi terakhir kali di putar
if (!isNaN(currentTime)) {
    music.currentTime = currentTime;
}

// Fungsi untuk langsung play saat halaman baru load
window.addEventListener('DOMContentLoaded', () => {
    if (isPlaying) {
        music.play().catch(e => {
            // Kalau browser nge-blok, user harus klik tombol musik 1 kali
            console.log("Menunggu 1 kali klik biar musik nyala");
        });
    }
});

// Simpan detik lagu setiap 0.5 detik biar presisi
setInterval(() => {
    if(!music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 500);

// Fungsi tombol play/pause
function toggleMusic() {
    if (music.paused) {
        music.play();
        localStorage.setItem('musicPlaying', 'true');
    } else {
        music.pause();
        localStorage.setItem('musicPlaying', 'false');
    }
}

// 2. Efek Partikel Jatuh
function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.innerText = Math.random() > 0.5 ? '❤️' : '✨';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (Math.random() * 15 + 10) + 'px';
    p.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
setInterval(createParticle, 300);