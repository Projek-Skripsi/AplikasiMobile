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

const CONFIQ = {
  authUser: 'AUTH_USER'
}

export { CONFIQ, metodePembayaran, pengguna, pemesanan, detailPemesanan, konfirmasiPembayaran, peraturan }
