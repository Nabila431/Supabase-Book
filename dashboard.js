function navigate(page) {
  const main = document.getElementById('main-content');
  if (page === 'feed') {
    main.innerHTML = "<h2>Timeline</h2><p>Menampilkan postingan dari semua user...</p>";
  } else if (page === 'profile') {
    main.innerHTML = "<h2>Profil Saya</h2><p>Edit profil & lihat posting saya...</p>";
  } else if (page === 'messages') {
    main.innerHTML = "<h2>Pesan</h2><p>Obrolan pribadi dengan user lain...</p>";
  } else if (page === 'groups') {
    main.innerHTML = "<h2>Grup Chat</h2><p>Diskusi publik dan komunitas...</p>";
  } else if (page === 'shop') {
    main.innerHTML = "<h2>Item Shop</h2><p>Item digital yang tersedia...</p>";
  } else if (page === 'billing') {
    main.innerHTML = "<h2>Billing</h2><p>Histori & tagihan pembayaran...</p>";
  } else {
    main.innerHTML = "<h2>404</h2><p>Halaman tidak ditemukan.</p>";
  }
}