// 1. Tangkap elemen form dari HTML
const formPemesanan = document.querySelector('#formpesan');

// 2. Pasang pendengar event saat form di-submit
formPemesanan.addEventListener('submit', function(event) {
    // Mencegah halaman web melakukan refresh otomatis
    event.preventDefault();

    // 3. Ambil nilai teks yang diketik pengguna
    const nama = document.querySelector('#nama').value;
    const alamat = document.querySelector('#alamat').value;
    const pilihan = document.querySelector('#pilihan').value;
    const catatan = document.querySelector('#note').value;

    // 4. Masukkan nomor WhatsApp Anda (Format: 628xxxxxxxxxx)
    const nomorWA = '6285624777124'; // <-- Ganti dengan nomor WhatsApp Anda!

    

    // 5. Susun draf pesan rapi
    const pesan = `Halo Admin, saya ingin memesan!%0A%0A` +
                  `Nama: ${nama}%0A` +
                  `Produk: ${pilihan}%0A` +
                  `Alamat: ${alamat}%0A` +
                  `Catatan: ${catatan}`;

    // 6. Buat URL resmi WhatsApp API
    const urlWhatsApp = `https://wa.me/${nomorWA}?text=${pesan}`;

    // 7. Buka tab baru menuju WhatsApp
    window.open(urlWhatsApp, '_blank');
});