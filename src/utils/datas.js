const perusahaan = [
  {
    IdPerusahaan: 1,
    NamaPerusahaan: 'Kolam Sejahtera',
    Alamat: 'Jalan Sejatera No. 21, Helvetia Timur, Kec. Medan Helvetia, Kota Medan, Sumatera Utara',
    Deskripsi: 'Kolam renang Sejahtera berdiri pada tahun 2013. Kolam ini memiliki banyak fasilitas yang dapat menjadi pilihan Anda untuk didatangin',
    JamBuka: '08:00',
    JamTutup: '18:00',
    Email: 'kolamsejatera@gmail.com',
    Instagram: 'kolam_sejatera',
    NoWA: '085212341234'
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
    IdPengguna: 1,
    Bintang: 5,
    Ulasan: 'Tempatnya nyaman, dan teduh',
    TanggalUpload: '12 Desember 2022'
  },
  {
    IdRating: 2,
    IdPemesanan: 5,
    IdPengguna: 2,
    Bintang: 2,
    Ulasan: 'Terlalu rame dan suara karoke sangat berisik',
    TanggalUpload: '12 Januari 2023'
  },
  {
    IdRating: 3,
    IdPemesanan: 6,
    IdPengguna: 1,
    Bintang: 1,
    Ulasan: null,
    TanggalUpload: '21 Januari 2023'
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

export { perusahaan, kolam, kategoriKolam, carousel, metodePembayaran, pengguna, rating, pemesanan, detailPemesanan, konfirmasiPembayaran }
