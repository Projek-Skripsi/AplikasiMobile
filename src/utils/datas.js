const perusahaan = [
  {
    IdPerusahaan: 1,
    NamaPerusahaan: 'Kolam Sejahtera',
    Alamat: 'Jalan Sejahtera No. 21, Helvetia Timur, Kec. Medan Helvetia, Kota Medan, Sumatera Utara',
    Deskripsi: 'Kolam renang Sejahtera merupakan kolam ernang umum yang berdiri pada tahun 2013. Kolam ini memiliki banyak fasilitas yang dapat menjadi pilihan Anda untuk didatangin',
    JamBuka: '08:00',
    JamTutup: '18:00',
    Email: 'kolamsejatera@gmail.com',
    Instagram: 'kolamrenangsejahtera',
    NoWA: '6281396428322'
  }
]

const kolam = [
  {
    IdKolam: 1,
    Judul: 'Kolam 0.5 meter',
    IdKategori: 1,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Tersedia'
  },
  {
    IdKolam: 2,
    Judul: 'Kolam 1 meter',
    IdKategori: 1,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Tidak Tersedia'
  },
  {
    IdKolam: 3,
    Judul: 'Kolam 1.3 meter',
    IdKategori: 1,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Tersedia'
  },
  {
    IdKolam: 4,
    Judul: 'Kolam 1.3 - 2 meter',
    IdKategori: 2,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Tersedia'
  }
]

const kategoriKolam = [
  {
    IdKategori: 1,
    NamaKategori: 'Anak-anak',
    HargaNormal: 8000,
    HargaLibur: 10000
  },
  {
    IdKategori: 2,
    NamaKategori: 'Dewasa',
    HargaNormal: 12000,
    HargaLibur: 15000
  }
]

const carousel = [
  {
    IdCarousel: 1,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg'
  },
  {
    IdCarousel: 2,
    UrlGambar: 'https://semestaibu.com/wp-content/uploads/2020/10/Gambar-mewarnai-rumah-kartun-540x380.jpg'
  },
  {
    IdCarousel: 3,
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg'
  }
]

const metodePembayaran = [
  {
    IdPembayaran: 1,
    NamaPembayaran: 'Bank Mandiri',
    NoRekening: '188812349876',
    An: 'Kolam Sejahtera',
    Status: 'Aktif'
  },
  {
    IdPembayaran: 2,
    NamaPembayaran: 'Gopay',
    NoRekening: '288812349876',
    An: 'Kolam Sejahtera',
    Status: 'Aktif'
  },
  {
    IdPembayaran: 3,
    NamaPembayaran: 'DANA',
    NoRekening: '388812349876',
    An: 'Kolam Sejahtera',
    Status: 'Tidak Aktif'
  },
  {
    IdPembayaran: 4,
    NamaPembayaran: 'Bank BNI',
    NoRekening: '488812349876',
    An: 'Kolam Sejahtera',
    Status: 'Aktif'
  }
]

const pengguna = [
  {
    IdPengguna: 1,
    Email: 'azhar@gmail.com',
    Nama: 'Mhd. Azhar',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Aktif'
  },
  {
    IdPengguna: 2,
    Email: 'irvan@gmail.com',
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Status: 'Aktif'
  }
]

const rating = [
  {
    IdRating: 1,
    IdPemesanan: 4,
    Nama: 'Mhd. Azhar',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 5,
    Ulasan: 'Tempatnya nyaman, dan teduh',
    TanggalUpload: '12 Desember 2022'
  },
  {
    IdRating: 2,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 3,
    IdPemesanan: 6,
    Nama: 'Mhd. Azhar',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 1,
    Ulasan: null,
    TanggalUpload: '21 Januari 2023'
  },
  {
    IdRating: 4,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 5,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Komentar ke 5',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 6,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 7,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 8,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 9,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 10,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 11,
    IdPemesanan: 5,
    Nama: 'Irvan Moses',
    UrlGambar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik 11',
    TanggalUpload: '12 Januari 2023'
  }
]

const pemesanan = [
  {
    IdPemesanan: 1,
    IdPengguna: 1,
    TangalMasuk: '20 Desember 2022',
    Total: 36000,
    IdPembayaran: 2,
    TanggalPemesanan: '11 Desember 2022',
    Status: 'Menunggu Pembayaran'
  },
  {
    IdPemesanan: 2,
    IdPengguna: 1,
    TangalMasuk: '20 Desember 2022',
    Total: 44000,
    IdPembayaran: 2,
    TanggalPemesanan: '11 Desember 2022',
    Status: 'Menunggu Konfirmasi'
  },
  {
    IdPemesanan: 3,
    IdPengguna: 1,
    TangalMasuk: '10 Desember 2022',
    Total: 36000,
    IdPembayaran: 2,
    TanggalPemesanan: '2 Desember 2022',
    Status: 'Selesai'
  },
  {
    IdPemesanan: 4,
    IdPengguna: 1,
    TangalMasuk: '8 Desember 2022',
    Total: 36000,
    IdPembayaran: 2,
    TanggalPemesanan: '1 Desember 2022',
    Status: 'Selesai'
  }
]

const detailPemesanan = [
  {
    IdPemesanan: 1,
    IdKategori: 1,
    Harga: 8000,
    Qty: 2
  },
  {
    IdPemesanan: 1,
    IdKategori: 2,
    Harga: 10000,
    Qty: 2
  },
  {
    IdPemesanan: 2,
    IdKategori: 1,
    Harga: 8000,
    Qty: 3
  },
  {
    IdPemesanan: 2,
    IdKategori: 2,
    Harga: 10000,
    Qty: 2
  },
  {
    IdPemesanan: 3,
    IdKategori: 1,
    Harga: 8000,
    Qty: 2
  },
  {
    IdPemesanan: 3,
    IdKategori: 2,
    Harga: 10000,
    Qty: 2
  }
]

const konfirmasiPembayaran = [
  {
    IdPemesanan: 2,
    UrlBuktiBayar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    TanggalUpload: '11 Desember 2022'
  },
  {
    IdPemesanan: 3,
    UrlBuktiBayar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    TanggalUpload: '11 Desember 2022'
  },
  {
    IdPemesanan: 4,
    UrlBuktiBayar: 'https://dikemas.com/uploads/2022/04/Banana-Juara_Duo-Kuning_Logoo-720x432.jpg',
    TanggalUpload: '11 Desember 2022'
  }
]

const peraturan = [
  'Tidak diperkenankan pengunjung kolam renang anak-anak memasuki kolam renang dewasa begitupun sebaliknya. Apabila ingin pindah harus beli tiket baru.',
  'Tiket yang sudah dibeli tidak bisa dikembalikan',
  'Sesuaikan ketinggian anak anda dengan kedalaman kolam renang. Anak umur 7 tahun ke bawah dilarang masuk ke kolam dengan kedalaman 1,3 meter. Untuk menghindari hal-hal yang tidak di inginkan',
  'Mohon maaf tidak diperkenankan bagi pengunjung yang sawan air untuk berenang di kolam renang Sejahtera. Untuk menghindari hal-hal yang tidak diinginkan',
  'Mohon orang tua yang membawa anak kecil untuk tetap mengawasi anak anda  dengan penuh kewaspadaan dan jangan sampai lalai. Dan diharapkan untuk tidak meninggalkan anak anda sendirian di kolam renang tanpa pengawasan.',
  'Diharapkan untuk memakai baju renang apabila sedang berenang. tidak diperbolehkan memakai bahan Jeans',
  'Tidak diperbolehkan keluar lokasi kolam renang. Apabila ingin keluar, mohon untuk melapor ke petugas kami agar diberikan kertas ijin keluar sementara',
  'Dilarang membawa minuman keras ke area kolam renang Sejahtera',
  'Kolam Renang ini diawasi CCTV, mohon untuk tidak melakukan perbuatan asusila dan tindakan pencurian dan kekerasan di area kolam renang. Segala tindakan yang melanggar hukum akan kami laporkan kepihak berwajib.'
]

export { perusahaan, kolam, kategoriKolam, carousel, metodePembayaran, pengguna, rating, pemesanan, detailPemesanan, konfirmasiPembayaran, peraturan }
