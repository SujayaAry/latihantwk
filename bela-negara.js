// Bank soal TWK - Bela Negara
// Aturan: tiap soal punya 5 opsi; SATU opsi bobot 5 (benar), empat lainnya bobot 0 (salah).
// Teks miring ditulis dengan tag <i>...</i>. Baris baru pada soal ditulis \n.
// Tambahkan soal baru dengan menyalin blok { soal: ..., opsi: [...] } lalu beri koma.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL['bela-negara'] = {
  indikator: "Bela Negara",
  soal: [
    {
      soal: "Wabah penyakit menular baru muncul di wilayah perbatasan, dan Anda adalah ASN bidang kesehatan yang bertugas di sana. Apa wujud bela negara yang paling sesuai dengan kedudukan Anda?",
      opsi: [
        { teks: "Bergabung dengan relawan yang menggalang dana dan bantuan logistik bagi warga terdampak.", bobot: 0, pembahasan: "Menggalang dana termasuk rela berkorban, tetapi tidak memakai keahlian dan tugas jabatan sebagai tenaga kesehatan." },
        { teks: "Menangani kasus dan memberi penyuluhan kesehatan kepada warga sesuai keahlian dan tugas jabatan.", bobot: 5, pembahasan: "Bela negara nonfisik diwujudkan lewat pengabdian sesuai profesi, yaitu menjalankan keahlian di bidang kesehatan untuk mengatasi ancaman nirmiliter." },
        { teks: "Mengikuti pelatihan dasar kemiliteran agar dapat membantu pengamanan wilayah terdampak.", bobot: 0, pembahasan: "Pelatihan kemiliteran berkaitan dengan bela negara fisik untuk ancaman militer, bukan wabah penyakit." },
        { teks: "Mengajak warga berjaga bergiliran di batas wilayah agar penyebaran wabah dapat dicegah.", bobot: 0, pembahasan: "Berjaga bergiliran adalah bentuk usaha pertahanan dan keamanan (Pasal 30 ayat 1), bukan penanganan penyakit." },
        { teks: "Menyusun laporan perkembangan wabah untuk pimpinan sebagai bahan keputusan di tingkat pusat.", bobot: 0, pembahasan: "Laporan hanya tugas administratif dan belum menerapkan keahlian kesehatan di lapangan." }
      ]
    },
    {
      soal: "Paham ekstrem yang memaksakan kehendak mulai menyasar remaja di lingkungan sekolah. Upaya pencegahan ancaman nirmiliter berdimensi ideologi yang paling tepat adalah ....",
      opsi: [
        { teks: "Meningkatkan patroli keamanan oleh aparat penegak hukum di sekitar sekolah.", bobot: 0, pembahasan: "Patroli aparat menangani gangguan keamanan fisik, bukan pemikiran." },
        { teks: "Membatasi penggunaan media sosial oleh siswa selama jam sekolah.", bobot: 0, pembahasan: "Pembatasan media sosial hanya menahan penyebaran, tidak memperkuat pemahaman nilai kebangsaan." },
        { teks: "Memperketat pengawasan keuangan terhadap kelompok yang diduga menyebarkan paham tersebut.", bobot: 0, pembahasan: "Pengawasan keuangan berkaitan dengan ancaman ekonomi atau hukum, bukan pembinaan ideologi." },
        { teks: "Mengadakan pelatihan kesiapsiagaan fisik bagi siswa untuk menghadapi gangguan keamanan.", bobot: 0, pembahasan: "Pelatihan fisik berkaitan dengan ancaman militer, bukan ancaman ideologi." },
        { teks: "Memperkuat pendidikan Pancasila dan wawasan kebangsaan di sekolah melalui lembaga pendidikan terkait.", bobot: 5, pembahasan: "Ancaman ideologi dihadapi lewat pendidikan dan pembinaan oleh lembaga yang sesuai bidangnya, bukan dengan cara fisik." }
      ]
    },
    {
      soal: "Kebakaran hutan di daerah Anda menimbulkan kabut asap yang mengganggu warga. Sebagai warga sipil, wujud bela negara yang paling sesuai adalah ....",
      opsi: [
        { teks: "Menggalang dana untuk membangun pusat penanggulangan bencana di tingkat kabupaten.", bobot: 0, pembahasan: "Membangun pusat mitigasi adalah kewenangan pemerintah, bukan langkah konkret warga." },
        { teks: "Menyerahkan seluruh penanganan kepada badan penanggulangan bencana sambil menunggu arahan resmi.", bobot: 0, pembahasan: "Menunggu arahan tanpa berperan aktif tidak menunjukkan keikutsertaan warga dalam bela negara." },
        { teks: "Tidak membuka lahan dengan cara membakar dan melaporkan titik api kepada petugas yang berwenang.", bobot: 5, pembahasan: "Menjaga lingkungan hidup dan ikut melaporkan titik api adalah wujud cinta tanah air dan kewaspadaan dini oleh warga sipil." },
        { teks: "Memantau indeks kualitas udara setiap hari dan menyesuaikan kegiatan warga dengan anjuran petugas.", bobot: 0, pembahasan: "Memantau udara melindungi diri sendiri, tetapi tidak mencegah atau menangani sumber masalah." },
        { teks: "Membentuk regu patroli warga yang berwenang menjatuhkan sanksi kepada pembakar lahan.", bobot: 0, pembahasan: "Menjatuhkan sanksi adalah kewenangan aparat, bukan regu warga." }
      ]
    },
    {
      soal: "Kabar bohong bernada sentimen SARA beredar di grup pesan warga di lingkungan Anda. Langkah kewaspadaan dini yang paling tepat adalah ....",
      opsi: [
        { teks: "Membagikan kabar itu ke grup lain disertai peringatan agar warga berhati-hati.", bobot: 0, pembahasan: "Membagikan kabar bohong, meski disertai peringatan, tetap ikut menyebarkannya." },
        { teks: "Menghapus kabar tersebut dari grup dan meminta anggota tidak membahasnya lagi.", bobot: 0, pembahasan: "Menghapus tanpa memeriksa dan melapor tidak menghentikan penyebaran di tempat lain." },
        { teks: "Memeriksa kebenarannya lewat sumber resmi, lalu melaporkan kabar bohong itu kepada pihak berwenang.", bobot: 5, pembahasan: "Kewaspadaan dini terhadap hoaks dilakukan dengan memverifikasi dan melaporkan, bukan ikut menyebarkan." },
        { teks: "Mengadakan penyuluhan etika bermedia sosial pada pertemuan warga bulan depan.", bobot: 0, pembahasan: "Penyuluhan berguna, tetapi tidak menangani kabar bohong yang sedang beredar." },
        { teks: "Membalas kabar itu dengan data dan pendapat pribadi agar anggota grup tidak terpengaruh.", bobot: 0, pembahasan: "Membantah dengan pendapat pribadi tanpa sumber resmi dapat memperkeruh suasana." }
      ]
    },
    {
      soal: "Para pejuang di berbagai daerah rela kehilangan harta dan nyawa saat melawan penjajah Belanda. Unsur bela negara yang paling tepat diteladani ASN dari sikap itu adalah ....",
      opsi: [
        { teks: "Menjaga dan membanggakan budaya serta produk bangsa sendiri.", bobot: 0, pembahasan: "Menjaga budaya dan produk bangsa termasuk cinta tanah air." },
        { teks: "Menaati hukum dan membayar pajak sebagai warga negara.", bobot: 0, pembahasan: "Menaati hukum dan membayar pajak termasuk sadar berbangsa dan bernegara." },
        { teks: "Meyakini dan mengamalkan nilai Pancasila dalam kehidupan sehari-hari.", bobot: 0, pembahasan: "Mengamalkan nilai Pancasila termasuk setia pada Pancasila." },
        { teks: "Mengorbankan waktu dan tenaga tanpa pamrih untuk kepentingan bangsa.", bobot: 5, pembahasan: "Kehilangan harta dan nyawa demi bangsa menggambarkan rela berkorban, yaitu unsur bela negara dalam bentuk tindakan nyata." },
        { teks: "Menjaga kesehatan jasmani dan kecerdasan emosi sebagai bekal bela negara.", bobot: 0, pembahasan: "Kesehatan jasmani dan emosi termasuk kemampuan awal bela negara." }
      ]
    },
    {
      soal: "Warga di lingkungan Anda mulai menyebarkan ajakan untuk memisahkan diri dari NKRI. Langkah kewaspadaan dini yang paling tepat bagi warga sipil adalah ....",
      opsi: [
        { teks: "Menjauhi pertemuan kelompok tersebut agar tidak ikut terseret kegiatannya.", bobot: 0, pembahasan: "Menghindar tidak menghentikan penyebaran ajakan." },
        { teks: "Menyampaikan keberatan langsung kepada pemimpin kelompok dalam pertemuan mereka.", bobot: 0, pembahasan: "Menghadapi kelompok secara langsung berisiko dan bukan kewenangan warga." },
        { teks: "Mengikuti pertemuan kelompok secara diam-diam untuk mengumpulkan bukti kegiatannya.", bobot: 0, pembahasan: "Mengikuti secara diam-diam adalah tugas aparat intelijen." },
        { teks: "Memantau perkembangan kelompok melalui media sosial dan mencatat nama anggotanya.", bobot: 0, pembahasan: "Mencatat nama anggota tanpa melapor tidak membawa tindak lanjut resmi." },
        { teks: "Melaporkan ajakan tersebut kepada aparat berwenang dan menyerahkan penanganannya kepada mereka.", bobot: 5, pembahasan: "Separatisme adalah ancaman serius; warga sipil berperan lewat kewaspadaan dini dengan melapor kepada aparat yang berwenang." }
      ]
    },
    {
      soal: "Seorang warga berpendapat bahwa pertahanan negara adalah urusan TNI saja dan tidak ada kaitannya dengan dirinya. Pandangan itu keliru karena ....",
      opsi: [
        { teks: "keikutsertaan warga sipil bersifat sukarela dan berlaku ketika negara menghadapi ancaman militer", bobot: 0, pembahasan: "Keikutsertaan itu adalah hak dan kewajiban, bukan pilihan sukarela, dan tidak terbatas pada ancaman militer." },
        { teks: "TNI dan Polri adalah kekuatan pendukung, sedangkan rakyat adalah kekuatan utama", bobot: 0, pembahasan: "Menurut Pasal 30 ayat (2), TNI dan Polri adalah kekuatan utama, rakyat adalah kekuatan pendukung." },
        { teks: "setiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara sesuai kemampuannya", bobot: 5, pembahasan: "Pasal 30 ayat (1) UUD 1945 menyatakan setiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara." },
        { teks: "pembinaan fisik terpusat wajib diikuti seluruh warga usia produktif", bobot: 0, pembahasan: "Tidak ada kewajiban pembinaan fisik terpusat bagi seluruh warga usia produktif." },
        { teks: "warga sipil baru berperan setelah mendapat perintah dari TNI", bobot: 0, pembahasan: "Warga berperan sesuai kemampuannya dan tidak menunggu perintah TNI." }
      ]
    },
    {
      soal: "Paham radikal dari luar negeri mulai masuk ke masyarakat melalui media sosial. Langkah yang paling tepat untuk memperkuat ketahanan nasional di bidang ideologi adalah ....",
      opsi: [
        { teks: "Menambah kemampuan menggunakan senjata bagi warga sipil.", bobot: 0, pembahasan: "Persenjataan warga sipil menjawab ancaman militer, bukan ancaman pemikiran." },
        { teks: "Mengkaji berbagai paham dari luar negeri secara luas agar warga memahami perbedaannya.", bobot: 0, pembahasan: "Kajian luas tidak otomatis memperkuat kesetiaan pada Pancasila." },
        { teks: "Mengamalkan nilai-nilai Pancasila secara konsisten dalam kehidupan bermasyarakat.", bobot: 5, pembahasan: "Ancaman ideologi adalah ancaman nirmiliter yang dihadapi dengan menguatkan dan mengamalkan Pancasila." },
        { teks: "Membentuk massa tandingan untuk menghadapi kelompok penyebar paham tersebut.", bobot: 0, pembahasan: "Massa tandingan berisiko memicu benturan antarkelompok." },
        { teks: "Memperketat pengawasan aparat keamanan terhadap pertukaran pikiran warga.", bobot: 0, pembahasan: "Pendekatan keamanan tidak membangun keyakinan warga pada nilai kebangsaan." }
      ]
    },
    {
      soal: "Menjelang pemilu, warga di lingkungan Anda berbeda pilihan dan mulai saling curiga. Bentuk bela negara di bidang politik yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengajak warga yang sepaham mendukung satu calon secara terbuka di lingkungan.", bobot: 0, pembahasan: "Ajakan terbuka dapat memperkuat pengelompokan di lingkungan." },
        { teks: "Mengikuti pelatihan kesiapsiagaan fisik agar dapat menjaga tempat pemungutan suara.", bobot: 0, pembahasan: "Kesiapsiagaan fisik berkaitan dengan bela negara fisik, bukan bidang politik." },
        { teks: "Menggunakan hak pilih secara bertanggung jawab dan menerima hasil pemilu dengan damai.", bobot: 5, pembahasan: "Partisipasi politik yang bertanggung jawab dan menerima hasil secara damai menjaga stabilitas politik." },
        { teks: "Menyampaikan kritik terbuka tentang calon yang tidak disukai di media sosial.", bobot: 0, pembahasan: "Kritik terbuka di media sosial dapat memicu perpecahan." },
        { teks: "Menyatakan tidak ikut campur dalam pembicaraan tentang pemilu di lingkungan.", bobot: 0, pembahasan: "Tidak peduli sama sekali bukan bentuk keikutsertaan dalam bela negara di bidang politik." }
      ]
    },
    {
      soal: "Seorang warga selalu antre dengan tertib, membayar pajak tepat waktu, dan menaati aturan lalu lintas. Sikap itu mencerminkan unsur bela negara berupa ....",
      opsi: [
        { teks: "cinta tanah air", bobot: 0, pembahasan: "Cinta tanah air tampak pada menjaga budaya, produk dalam negeri, dan lingkungan." },
        { teks: "sadar berbangsa dan bernegara", bobot: 5, pembahasan: "Taat hukum, antre, dan membayar pajak adalah indikator sadar berbangsa dan bernegara (kesadaran hidup dalam sistem aturan)." },
        { teks: "setia pada Pancasila", bobot: 0, pembahasan: "Setia pada Pancasila tampak pada pengamalan butir-butir nilai Pancasila." },
        { teks: "rela berkorban untuk bangsa dan negara", bobot: 0, pembahasan: "Rela berkorban tampak pada pengorbanan waktu, tenaga, atau harta tanpa pamrih." },
        { teks: "kemampuan awal bela negara", bobot: 0, pembahasan: "Kemampuan awal tampak pada kesiapan jasmani dan rohani." }
      ]
    },
    {
      soal: "Pemuda di desa Anda hampir tidak mengenal tarian tradisional daerahnya. Wujud bela negara di bidang sosial budaya yang paling tepat adalah ....",
      opsi: [
        { teks: "Menyelenggarakan latihan dan pentas kesenian tradisional daerah bersama pemuda desa.", bobot: 5, pembahasan: "Melestarikan kearifan lokal lewat kesenian tradisional adalah bela negara di bidang sosial budaya." },
        { teks: "Menyampaikan pendapat tentang kebijakan desa melalui media sosial.", bobot: 0, pembahasan: "Menyampaikan pendapat tentang kebijakan berkaitan dengan bidang politik." },
        { teks: "Mengajak pemuda desa mendukung salah satu calon pada pemilihan kepala daerah.", bobot: 0, pembahasan: "Mendukung calon dalam pemilihan berkaitan dengan bidang politik." },
        { teks: "Mengikuti pelatihan dasar kemiliteran bersama pemuda desa lain.", bobot: 0, pembahasan: "Pelatihan kemiliteran berkaitan dengan bela negara fisik." },
        { teks: "Menyusun kritik tertulis tentang arah kebijakan pemerintah melalui saluran daring.", bobot: 0, pembahasan: "Kritik kebijakan berkaitan dengan bidang politik." }
      ]
    },
    {
      soal: "Sebagai guru di daerah, Anda ingin berperan dalam bela negara melalui bidang pendidikan. Tindakan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengusulkan tambahan anggaran untuk pembaruan peralatan pertahanan.", bobot: 0, pembahasan: "Anggaran alat pertahanan berkaitan dengan bela negara fisik dan kebijakan pemerintah." },
        { teks: "Mengajak siswa membersihkan lingkungan di ruang publik.", bobot: 0, pembahasan: "Menjaga kebersihan lingkungan berkaitan dengan cinta tanah air di bidang lingkungan." },
        { teks: "Mengajarkan sejarah perjuangan dan budaya daerah kepada siswa.", bobot: 5, pembahasan: "Pembelajaran sejarah dan budaya menanamkan kebangsaan kepada generasi penerus, yaitu bela negara di bidang pendidikan." },
        { teks: "Menyampaikan tuntutan perbaikan hak warga melalui media daring.", bobot: 0, pembahasan: "Tuntutan hak berkaitan dengan bidang politik." },
        { teks: "Mengikutsertakan siswa dalam latihan fisik dasar kemiliteran.", bobot: 0, pembahasan: "Latihan kemiliteran berkaitan dengan bela negara fisik." }
      ]
    },
    {
      soal: "Warga di lingkungan Anda aktif ronda malam secara bergiliran untuk menjaga keamanan kampung. Kegiatan itu merupakan pelaksanaan dari ....",
      opsi: [
        { teks: "Pasal 27 ayat (1) UUD 1945", bobot: 0, pembahasan: "Pasal 27 ayat (1) mengatur kesamaan kedudukan di dalam hukum dan pemerintahan." },
        { teks: "Pasal 27 ayat (3) UUD 1945", bobot: 0, pembahasan: "Pasal 27 ayat (3) berkaitan dengan upaya pembelaan negara secara umum, misalnya atlet yang mengharumkan nama bangsa." },
        { teks: "Pasal 28J ayat (1) UUD 1945", bobot: 0, pembahasan: "Pasal 28J ayat (1) mengatur kewajiban menghormati hak asasi orang lain." },
        { teks: "Pasal 30 ayat (1) UUD 1945", bobot: 5, pembahasan: "Pasal 30 ayat (1) mengatur hak dan kewajiban warga ikut serta dalam usaha pertahanan dan keamanan, misalnya siskamling." },
        { teks: "Pasal 29 ayat (2) UUD 1945", bobot: 0, pembahasan: "Pasal 29 ayat (2) mengatur kebebasan beragama dan beribadah." }
      ]
    },
    {
      soal: "Tenaga medis di rumah sakit tetap bertugas menangani pasien saat pandemi meski berisiko tertular. Sikap itu merupakan contoh ....",
      opsi: [
        { teks: "bela negara fisik melalui komponen cadangan", bobot: 0, pembahasan: "Komponen cadangan adalah warga sipil terlatih militer untuk ancaman militer." },
        { teks: "penguatan ekonomi nasional melalui penggunaan produk dalam negeri", bobot: 0, pembahasan: "Penggunaan produk dalam negeri adalah penguatan ekonomi, tidak terkait tugas medis." },
        { teks: "bela negara nonfisik melalui pengabdian sesuai profesi", bobot: 5, pembahasan: "Bela negara nonfisik di bidang kesehatan diwujudkan lewat pengabdian sesuai profesi tenaga medis." },
        { teks: "peningkatan kewaspadaan dini terhadap hoaks dan radikalisme", bobot: 0, pembahasan: "Kewaspadaan dini berkaitan dengan hoaks dan radikalisme." },
        { teks: "usaha pertahanan negara oleh TNI sebagai komponen utama", bobot: 0, pembahasan: "Usaha pertahanan oleh TNI berkaitan dengan ancaman militer." }
      ]
    },
    {
      soal: "Wabah penyakit mulai menyebar di lingkungan tempat tinggal Anda. Sebagai warga sipil, wujud bela negara yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengumpulkan warga dalam jumlah besar untuk membagikan bantuan makanan secara mandiri.", bobot: 0, pembahasan: "Berkumpul dalam jumlah besar melanggar protokol kesehatan." },
        { teks: "Menaati protokol kesehatan dan mengingatkan tetangga melakukan hal yang sama.", bobot: 5, pembahasan: "Kepatuhan pada protokol kesehatan dan ajakan kepada tetangga adalah peran warga sipil dalam menghadapi ancaman nirmiliter bidang kesehatan." },
        { teks: "Menyerahkan pengawasan protokol kesehatan kepada aparat penegak hukum.", bobot: 0, pembahasan: "Menyerahkan pengawasan kepada aparat tidak menunjukkan peran aktif warga." },
        { teks: "Memasang spanduk imbauan kesehatan di ruang publik tanpa meminta izin pihak terkait.", bobot: 0, pembahasan: "Memasang spanduk tanpa izin melanggar aturan ruang publik." },
        { teks: "Menutup akses jalan lingkungan secara sepihak agar warga pendatang tidak masuk.", bobot: 0, pembahasan: "Menutup akses sepihak melampaui kewenangan warga." }
      ]
    },
    {
      soal: "Seorang siswa bertanya mengapa warga sipil yang bukan tentara juga diwajibkan membela negara. Jawaban yang paling tepat adalah ....",
      opsi: [
        { teks: "Karena tugas menjaga negara dibagi sama banyak antara TNI dan warga sipil.", bobot: 0, pembahasan: "Pembagian tugas tidak sama banyak; TNI dan Polri adalah kekuatan utama, rakyat kekuatan pendukung." },
        { teks: "Karena warga sipil yang sehat secara fisik wajib menjadi Komponen Cadangan.", bobot: 0, pembahasan: "Menjadi Komponen Cadangan bersifat sukarela, bukan kewajiban setiap warga sehat." },
        { teks: "Karena bela negara adalah hak sekaligus kewajiban konstitusional setiap warga negara.", bobot: 5, pembahasan: "Pasal 27 ayat (3) UUD 1945 menyatakan setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara." },
        { teks: "Karena warga yang taat hukum otomatis sudah memenuhi kewajiban bela negara.", bobot: 0, pembahasan: "Taat hukum adalah salah satu unsur, bukan satu-satunya wujud bela negara." },
        { teks: "Karena pemerintah dapat menugaskan siapa pun saat negara berada dalam keadaan bahaya.", bobot: 0, pembahasan: "Alasan ini bukan dasar utama kewajiban bela negara setiap warga." }
      ]
    },
    {
      soal: "Anda pemilik kafe dan ingin ikut menguatkan ekonomi nasional sebagai wujud bela negara. Langkah yang paling tepat adalah ....",
      opsi: [
        { teks: "Menyediakan produk impor bermutu tinggi agar pelanggan punya pilihan lebih luas.", bobot: 0, pembahasan: "Produk impor tidak menguatkan produksi dalam negeri." },
        { teks: "Membuka pasar bagi produk asing untuk mengurangi defisit perdagangan.", bobot: 0, pembahasan: "Membuka pasar bagi produk asing bukan tindakan usaha kecil dan tidak menguatkan produk lokal." },
        { teks: "Menerapkan standar mutu usaha luar negeri pada seluruh unit usaha.", bobot: 0, pembahasan: "Standar luar negeri tidak berkaitan dengan penguatan produk dalam negeri." },
        { teks: "Menurunkan harga dengan membeli barang konsumsi impor yang lebih murah.", bobot: 0, pembahasan: "Membeli barang impor yang murah mengurangi pemakaian produk lokal." },
        { teks: "Memakai dan memasarkan produk dalam negeri, terutama hasil UMKM, di usahanya.", bobot: 5, pembahasan: "Penguatan ekonomi nasional sebagai bela negara nonfisik diwujudkan dengan memakai dan memberdayakan produk dalam negeri." }
      ]
    },
    {
      soal: "Nelayan asing berulang kali menangkap ikan di perairan Indonesia tanpa izin. Kejadian itu termasuk ....",
      opsi: [
        { teks: "ancaman militer", bobot: 0, pembahasan: "Ancaman militer menggunakan kekuatan bersenjata terorganisasi." },
        { teks: "tantangan", bobot: 0, pembahasan: "Tantangan bersifat kompetitif dan mengasah kemampuan." },
        { teks: "hambatan", bobot: 0, pembahasan: "Hambatan berasal dari dalam diri sendiri." },
        { teks: "gangguan", bobot: 5, pembahasan: "Gangguan adalah usaha dari luar yang melemahkan dan perlu ditertibkan, misalnya pelanggaran batas wilayah oleh nelayan asing." },
        { teks: "ancaman nirmiliter bidang ideologi", bobot: 0, pembahasan: "Pelanggaran penangkapan ikan tidak berkaitan dengan ideologi." }
      ]
    },
    {
      soal: "Seorang penerima beasiswa negara sedang menempuh studi magister di luar negeri. Bentuk bela negara yang paling sesuai selama ia belajar di sana adalah ....",
      opsi: [
        { teks: "Mengambil pekerjaan paruh waktu di negara tempat belajar untuk menambah pengalaman.", bobot: 0, pembahasan: "Pekerjaan paruh waktu tidak berkaitan dengan pengabdian untuk bangsa." },
        { teks: "Menguasai ilmu dengan sungguh-sungguh dan memperkenalkan budaya Indonesia kepada teman-temannya.", bobot: 5, pembahasan: "Pengabdian sesuai peran sebagai pelajar penerima beasiswa adalah menguasai ilmu untuk bangsa dan memperkenalkan budaya Indonesia." },
        { teks: "Menyumbangkan sebagian dana beasiswa untuk mendukung kegiatan akademik kampus tujuan.", bobot: 0, pembahasan: "Menyumbang kepada kampus tujuan tidak berkaitan dengan peran sebagai penerima beasiswa negara." },
        { teks: "Membagikan kegiatan kesehariannya di luar negeri melalui media sosial secara rutin.", bobot: 0, pembahasan: "Membagikan kegiatan harian tidak berkaitan dengan bela negara." },
        { teks: "Mencari peluang karier tetap di perusahaan negara tempat belajar untuk memperluas jaringan.", bobot: 0, pembahasan: "Berkarier di luar negeri tidak sejalan dengan tujuan beasiswa untuk mengabdi bagi bangsa." }
      ]
    },
    {
      soal: "Sebuah negara lain mengklaim tarian daerah Indonesia sebagai budayanya. Tindakan warga yang paling mencerminkan bela negara dalam menjaga warisan budaya itu adalah ....",
      opsi: [
        { teks: "Melestarikan tarian itu secara aktif dengan ikut dalam pertunjukan dan memakai produk kearifan lokal.", bobot: 5, pembahasan: "Pelestarian aktif oleh warga memperkuat bukti dan kebanggaan atas budaya sendiri, yaitu bela negara di bidang sosial budaya." },
        { teks: "Mendata kekayaan budaya sebagai arsip nasional sampai klaim itu diselesaikan lewat jalur diplomasi.", bobot: 0, pembahasan: "Pendataan penting, tetapi pasif dan merupakan tugas lembaga, bukan tindakan warga dalam keseharian." },
        { teks: "Menggelar unjuk rasa di kantor perwakilan negara tersebut tanpa melibatkan pihak berwenang.", bobot: 0, pembahasan: "Unjuk rasa tanpa jalur resmi dapat memperkeruh hubungan antarnegara." },
        { teks: "Menerima klaim itu demi menjaga hubungan baik antarnegara.", bobot: 0, pembahasan: "Menerima klaim berarti melepaskan warisan budaya bangsa." },
        { teks: "Memadukan tarian itu dengan seni internasional agar menjadi budaya baru yang lebih relevan.", bobot: 0, pembahasan: "Memadukan budaya menghilangkan keaslian warisan budaya." }
      ]
    },
    {
      soal: "Mahasiswa yang mengikuti pelatihan Resimen Mahasiswa dan Komponen Cadangan termasuk dalam unsur ....",
      opsi: [
        { teks: "komponen utama pertahanan negara", bobot: 0, pembahasan: "Komponen utama adalah TNI." },
        { teks: "komponen cadangan dan pendukung", bobot: 5, pembahasan: "Resimen Mahasiswa dan Komponen Cadangan adalah warga sipil terlatih militer yang termasuk komponen cadangan dan pendukung." },
        { teks: "kekuatan ketertiban dan penegakan hukum", bobot: 0, pembahasan: "Kekuatan utama ketertiban dan penegakan hukum adalah Polri." },
        { teks: "pelaku bela negara nonfisik", bobot: 0, pembahasan: "Pelatihan militer termasuk bela negara fisik." },
        { teks: "pelaksana diplomasi pertahanan", bobot: 0, pembahasan: "Diplomasi pertahanan bukan fungsi Resimen Mahasiswa atau Komponen Cadangan." }
      ]
    },
    {
      soal: "Dalam diskusi kelompok, Anda diminta menjelaskan arti bela negara secara tepat. Jawaban yang paling tepat adalah ....",
      opsi: [
        { teks: "Hak setiap warga negara untuk memobilisasi kekuatan fisik secara terorganisasi menjaga batas wilayah.", bobot: 0, pembahasan: "Bela negara tidak terbatas pada mobilisasi kekuatan fisik." },
        { teks: "Kesediaan menyerahkan harta dan tenaga pribadi untuk stabilitas ekonomi dan politik negara.", bobot: 0, pembahasan: "Bela negara tidak berarti menyerahkan harta dan tenaga untuk satu tujuan tertentu." },
        { teks: "Pemenuhan kewajiban administratif sesuai pedoman instansi agar terhindar dari sanksi.", bobot: 0, pembahasan: "Kewajiban administratif bukan makna bela negara." },
        { teks: "Penyeragaman nilai dan etika agar terbentuk masyarakat yang seragam.", bobot: 0, pembahasan: "Bela negara tidak menyeragamkan masyarakat; keberagaman tetap dihormati." },
        { teks: "Sikap dan perilaku warga negara yang dijiwai cinta tanah air untuk menjamin kelangsungan hidup bangsa dan negara.", bobot: 5, pembahasan: "Bela negara adalah sikap dan perilaku warga negara yang dijiwai kecintaan pada negara demi kelangsungan hidup bangsa dan negara." }
      ]
    },
    {
      soal: "Seorang warga mengadakan penyuluhan etika bermedia sosial agar unggahan provokatif tidak memecah persatuan warga. Tindakan itu merupakan wujud bela negara berupa ....",
      opsi: [
        { teks: "penyerahan penertiban dunia maya kepada lembaga pengawas informasi negara", bobot: 0, pembahasan: "Menyerahkan penertiban tidak menunjukkan peran aktif warga." },
        { teks: "pembentukan satuan pengamanan mandiri untuk menindak penyebar wacana provokatif", bobot: 0, pembahasan: "Menindak pelaku adalah kewenangan aparat, bukan satuan mandiri warga." },
        { teks: "penguatan ketahanan menghadapi ancaman nirmiliter dengan membangun daya tangkal sosial", bobot: 5, pembahasan: "Penyuluhan adalah bela negara nonfisik: menguatkan daya tangkal masyarakat terhadap ancaman perpecahan." },
        { teks: "penyesuaian aspirasi masyarakat dengan arah kebijakan pemerintah", bobot: 0, pembahasan: "Penyesuaian aspirasi dengan kebijakan bukan tujuan penyuluhan." },
        { teks: "pembatasan akses informasi publik agar pandangan berbeda tidak menyebar", bobot: 0, pembahasan: "Pembatasan informasi tidak membangun daya tangkal warga." }
      ]
    },
    {
      soal: "Seorang atlet berlatih keras dan meraih medali di ajang internasional demi mengharumkan nama bangsa. Perbuatan itu merupakan pelaksanaan dari ....",
      opsi: [
        { teks: "Pasal 27 ayat (1) UUD 1945", bobot: 0, pembahasan: "Pasal 27 ayat (1) mengatur kesamaan kedudukan dalam hukum dan pemerintahan." },
        { teks: "Pasal 27 ayat (3) UUD 1945", bobot: 5, pembahasan: "Pasal 27 ayat (3) menyebut upaya pembelaan negara, antara lain lewat prestasi yang mengharumkan nama bangsa." },
        { teks: "Pasal 30 ayat (1) UUD 1945", bobot: 0, pembahasan: "Pasal 30 ayat (1) mengatur usaha pertahanan dan keamanan, misalnya siskamling." },
        { teks: "Pasal 30 ayat (2) UUD 1945", bobot: 0, pembahasan: "Pasal 30 ayat (2) mengatur Sishankamrata dengan TNI dan Polri sebagai kekuatan utama." },
        { teks: "Pasal 31 ayat (1) UUD 1945", bobot: 0, pembahasan: "Pasal 31 ayat (1) mengatur hak mendapat pendidikan." }
      ]
    },
    {
      soal: "Warga di sebuah desa membantu Polri menjaga keamanan lingkungan melalui sistem ronda. Menurut Pasal 30 ayat (2) UUD 1945, kedudukan warga dalam sistem pertahanan dan keamanan adalah ....",
      opsi: [
        { teks: "kekuatan utama", bobot: 0, pembahasan: "Kekuatan utama adalah TNI dan Polri." },
        { teks: "kekuatan pendukung", bobot: 5, pembahasan: "Pasal 30 ayat (2): TNI dan Polri adalah kekuatan utama, rakyat adalah kekuatan pendukung." },
        { teks: "komponen cadangan", bobot: 0, pembahasan: "Komponen cadangan adalah warga yang dilatih secara militer." },
        { teks: "pelaksana penegakan hukum", bobot: 0, pembahasan: "Penegakan hukum adalah tugas Polri." },
        { teks: "penanggung jawab keamanan wilayah", bobot: 0, pembahasan: "Penanggung jawab keamanan wilayah adalah aparat negara, sedangkan warga mendukung." }
      ]
    },
    {
      soal: "Peristiwa berikut dapat mengancam keutuhan negara. Peristiwa yang termasuk ancaman dari dalam negeri adalah ....",
      opsi: [
        { teks: "Meningkatnya produk impor di pasar dalam negeri.", bobot: 0, pembahasan: "Impor adalah persoalan ekonomi, bukan ancaman dari dalam negeri." },
        { teks: "Perusahaan asing yang menguasai industri strategis.", bobot: 0, pembahasan: "Perusahaan asing berasal dari luar negeri." },
        { teks: "Masuknya pemikiran kebebasan individu dalam penyusunan kebijakan.", bobot: 0, pembahasan: "Pemikiran kebebasan individu adalah pengaruh dari luar." },
        { teks: "Latihan militer negara tetangga di dekat wilayah perbatasan.", bobot: 0, pembahasan: "Latihan militer negara tetangga berasal dari luar negeri." },
        { teks: "Gerakan terorganisasi yang ingin memisahkan sebagian wilayah dari NKRI.", bobot: 5, pembahasan: "Gerakan separatis adalah ancaman yang berasal dari dalam negeri." }
      ]
    },
    {
      soal: "Rendahnya mutu pendidikan dan budaya malas bekerja di suatu daerah melemahkan kemajuan daerah itu. Kondisi tersebut termasuk ....",
      opsi: [
        { teks: "ancaman", bobot: 0, pembahasan: "Ancaman bersifat destruktif dan membahayakan kedaulatan." },
        { teks: "tantangan", bobot: 0, pembahasan: "Tantangan bersifat kompetitif dan mengasah kemampuan." },
        { teks: "hambatan", bobot: 5, pembahasan: "Hambatan adalah usaha atau kondisi dari dalam diri sendiri yang melemahkan dan perlu perbaikan internal." },
        { teks: "gangguan", bobot: 0, pembahasan: "Gangguan berasal dari luar." },
        { teks: "ancaman militer", bobot: 0, pembahasan: "Ancaman militer berupa kekuatan bersenjata." }
      ]
    },
    {
      soal: "Saat masa kampanye, beredar kabar bohong yang membuat warga terbelah. Sebagai warga yang paham literasi digital, tindakan yang paling tepat adalah ....",
      opsi: [
        { teks: "Tidak meneruskan kabar itu dan meluruskannya dengan sumber resmi.", bobot: 5, pembahasan: "Memutus rantai penyebaran dan meluruskan dengan sumber resmi adalah bela negara nonfisik melalui kewaspadaan dini." },
        { teks: "Membuat kabar tandingan untuk mengalihkan perhatian warga.", bobot: 0, pembahasan: "Kabar tandingan menambah kekacauan informasi." },
        { teks: "Menghapus jejak unggahan Anda secara berkala agar tidak terlacak.", bobot: 0, pembahasan: "Menghapus jejak tidak menghentikan penyebaran kabar." },
        { teks: "Mengumumkan identitas penyebar kabar di media sosial tanpa verifikasi.", bobot: 0, pembahasan: "Mengumumkan identitas tanpa verifikasi dapat menimbulkan persekusi." },
        { teks: "Meminta kementerian mencabut izin platform komunikasi yang dipakai.", bobot: 0, pembahasan: "Pencabutan izin platform bukan langkah individu dan merugikan pengguna lain." }
      ]
    },
    {
      soal: "Harga pangan impor naik akibat krisis global dan membebani anggaran negara. Sebagai ASN perumus kebijakan pertanian, bentuk bela negara nirmiliter yang paling tepat adalah ....",
      opsi: [
        { teks: "Merevisi tarif bea masuk agar volume impor pangan meningkat.", bobot: 0, pembahasan: "Menambah impor menambah ketergantungan." },
        { teks: "Memberi dana talangan besar kepada BUMN agar harga pangan stabil.", bobot: 0, pembahasan: "Dana talangan bukan kebijakan pertanian dan membebani anggaran." },
        { teks: "Menugaskan aparat keamanan memeriksa jalur distribusi pangan.", bobot: 0, pembahasan: "Pemeriksaan aparat keamanan tidak meningkatkan ketahanan pangan." },
        { teks: "Mengajukan penundaan pembayaran utang luar negeri untuk menyelamatkan anggaran.", bobot: 0, pembahasan: "Menunda utang tidak berkaitan dengan kebijakan pertanian." },
        { teks: "Menyusun rencana peningkatan produksi dan penganekaragaman pangan berbasis sumber daya lokal.", bobot: 5, pembahasan: "Bela negara nirmiliter di bidang ekonomi diwujudkan dengan pengabdian sesuai profesi, yaitu memperkuat kemandirian pangan." }
      ]
    },
    {
      soal: "Anda mengetahui ada peredaran narkoba di lingkungan sekolah dekat rumah Anda. Wujud kewaspadaan dini yang paling tepat adalah ....",
      opsi: [
        { teks: "Menasihati langsung para pengedar agar berhenti dan menjauhi sekolah.", bobot: 0, pembahasan: "Menasihati pengedar berbahaya dan tidak efektif." },
        { teks: "Mengumpulkan bukti sendiri dengan menyamar sebagai pembeli.", bobot: 0, pembahasan: "Penyamaran adalah tugas aparat dan berisiko." },
        { teks: "Memasang spanduk peringatan bahaya narkoba di sekitar sekolah.", bobot: 0, pembahasan: "Spanduk bersifat imbauan, tidak menindak peredaran." },
        { teks: "Melaporkan informasi itu kepada aparat berwenang dan pihak sekolah.", bobot: 5, pembahasan: "Kewaspadaan dini terhadap ancaman narkoba diwujudkan dengan melapor kepada pihak yang berwenang." },
        { teks: "Meminta orang tua siswa mengawasi anaknya secara ketat tanpa melapor.", bobot: 0, pembahasan: "Pengawasan orang tua tidak menghentikan peredaran." }
      ]
    },
    {
      soal: "Anda ASN di bidang kepabeanan. Wujud bela negara nirmiliter yang paling sesuai dengan tugas Anda adalah ....",
      opsi: [
        { teks: "Menolak semua permohonan izin impor barang modal asing untuk melindungi usaha dalam negeri.", bobot: 0, pembahasan: "Menolak semua izin impor melampaui aturan dan menghambat kebutuhan industri." },
        { teks: "Memprakarsai pelatihan kemiliteran dasar bagi staf di wilayah perbatasan.", bobot: 0, pembahasan: "Pelatihan kemiliteran bukan tugas kepabeanan." },
        { teks: "Membebaskan bea masuk bahan pokok dari luar negeri agar harga murah bagi masyarakat.", bobot: 0, pembahasan: "Pembebasan bea masuk adalah kebijakan fiskal, bukan pengawasan." },
        { teks: "Menghimpun dana tanggung jawab sosial dari perusahaan importir untuk warga perbatasan.", bobot: 0, pembahasan: "Pengumpulan dana tidak termasuk tugas pokok kepabeanan." },
        { teks: "Memperketat pengawasan lalu lintas barang dan menindak penyelundupan sesuai aturan.", bobot: 5, pembahasan: "Bela negara nonfisik diwujudkan lewat pengabdian sesuai profesi, yaitu mencegah penyelundupan sebagai gangguan dari luar." }
      ]
    },
    {
      soal: "Seorang ASN membagikan artikel bernada stereotip negatif terhadap etnis tertentu di grup pesan lintas instansi. Tindakan yang paling tepat demi persatuan adalah ....",
      opsi: [
        { teks: "Mengingatkannya secara pribadi agar menghapus tautan itu dan menjelaskan dampaknya bagi persatuan.", bobot: 5, pembahasan: "Teguran pribadi yang sopan menghentikan penyebaran tanpa mempermalukan dan menjaga persatuan." },
        { teks: "Membalas di grup dengan mengutip pasal undang-undang tentang informasi dan transaksi elektronik.", bobot: 0, pembahasan: "Menggurui di grup dapat memicu perdebatan." },
        { teks: "Menghubungi atasannya agar ia mendapat teguran tertulis.", bobot: 0, pembahasan: "Langsung mengadukan ke atasan terlalu berat untuk tahap awal." },
        { teks: "Keluar dari grup agar tidak terlibat dalam percakapan itu.", bobot: 0, pembahasan: "Keluar dari grup tidak menghentikan penyebaran." },
        { teks: "Membiarkan kiriman itu tenggelam oleh percakapan lain selama tidak ada yang keberatan.", bobot: 0, pembahasan: "Membiarkan berarti tidak peduli pada ancaman persatuan." }
      ]
    },
    {
      soal: "Paham radikal dari luar negeri menyebar lewat media digital dan menyasar kelompok rentan. Langkah pencegahan yang paling tepat bagi pemerintah sebagai bela negara di bidang ideologi adalah ....",
      opsi: [
        { teks: "Menambah jam pelajaran teori ilmu politik di sekolah dasar dan menengah.", bobot: 0, pembahasan: "Teori politik yang dipelajari secara akademis belum membentuk keyakinan pada Pancasila." },
        { teks: "Memberi dana hibah besar kepada kelompok sipil untuk membuat kampanye tandingan di media sosial.", bobot: 0, pembahasan: "Menyerahkan kampanye kepada kelompok lepas berisiko memicu benturan antarwarga." },
        { teks: "Menyerahkan wewenang memblokir situs radikal kepada perangkat desa.", bobot: 0, pembahasan: "Pemblokiran situs adalah wewenang lembaga negara terkait, bukan perangkat desa." },
        { teks: "Mewujudkan nilai Pancasila dan konstitusi dalam pelayanan publik yang adil dan tidak diskriminatif.", bobot: 5, pembahasan: "Bela negara di bidang ideologi tidak selalu represif; nilai Pancasila yang dirasakan lewat pelayanan yang adil menumbuhkan daya tahan ideologis." },
        { teks: "Memperketat sensor pemberitaan media cetak tentang sejarah konflik antarideologi.", bobot: 0, pembahasan: "Sensor media bertentangan dengan kebebasan pers yang dijamin UUD 1945." }
      ]
    },
    {
      soal: "Indonesia kehilangan Pulau Sipadan dan Ligitan setelah putusan Mahkamah Internasional yang menilai penguasaan efektif oleh negara lain. Langkah pemerintah daerah yang paling tepat sebagai bela negara untuk menjaga pulau terluar adalah ....",
      opsi: [
        { teks: "Meningkatkan layanan administrasi, kesehatan, dan ekonomi bagi penduduk di pulau terluar tersebut.", bobot: 5, pembahasan: "Kedaulatan dibuktikan dengan penguasaan efektif; layanan pemerintahan dan ekonomi bagi penduduk menunjukkan negara hadir di wilayah itu." },
        { teks: "Memusatkan dana darurat daerah untuk persenjataan pos penjagaan marinir.", bobot: 0, pembahasan: "Persenjataan tidak membuktikan penguasaan efektif oleh pemerintahan sipil." },
        { teks: "Menutup akses warga sipil dan kegiatan usaha ke pulau itu agar tidak diklaim warga asing.", bobot: 0, pembahasan: "Menutup akses justru mengosongkan pulau dari kehadiran negara." },
        { teks: "Meminta satuan tugas perbatasan dari negara sahabat membantu pengamanan laut secara berkala.", bobot: 0, pembahasan: "Meminta pasukan negara lain melemahkan kedaulatan." },
        { teks: "Mengajukan gugatan ke pengadilan arbitrase regional untuk menetapkan batas sebelum terjadi sengketa.", bobot: 0, pembahasan: "Gugatan hukum tidak menggantikan kehadiran nyata negara di pulau itu." }
      ]
    },
    {
      soal: "Masuknya investasi asing besar membuka risiko penguasaan sumber daya dalam negeri oleh korporasi multinasional. Sebagai perumus kebijakan ekonomi, bentuk kewaspadaan nasional yang paling tepat adalah ....",
      opsi: [
        { teks: "Menutup kepemilikan saham asing di semua sektor industri agar devisa terjaga.", bobot: 0, pembahasan: "Menutup semua sektor menghambat kebutuhan modal dan teknologi." },
        { teks: "Menyusun aturan perlindungan industri lokal secara bertahap dan menjaga investasi bebas dari kolusi.", bobot: 5, pembahasan: "Melindungi industri lokal sambil menjaga investasi yang bersih menjaga kedaulatan ekonomi tanpa menutup diri." },
        { teks: "Menyesuaikan pengelolaan kekayaan alam dengan aturan organisasi perdagangan dunia agar tidak terkena embargo.", bobot: 0, pembahasan: "Mengikuti aturan perdagangan global secara penuh melemahkan penguasaan negara atas kekayaan alam (Pasal 33)." },
        { teks: "Menyerahkan penentuan harga komoditas ekspor kepada mekanisme pasar bebas.", bobot: 0, pembahasan: "Harga yang diserahkan pada pasar bebas bertentangan dengan Pasal 33." },
        { teks: "Mengenakan pajak ganda pada perusahaan asing yang mempekerjakan manajer asing.", bobot: 0, pembahasan: "Pajak ganda tidak adil dan tidak menjawab penguasaan sumber daya." }
      ]
    },
    {
      soal: "Perusahaan teknologi asing menguasai infrastruktur data penting sehingga kedaulatan data nasional terancam. Bentuk bela negara nirmiliter oleh aparatur pemerintah yang paling tepat adalah ....",
      opsi: [
        { teks: "Memutus semua akses penyedia layanan asing agar lalu lintas data dikuasai aparat keamanan.", bobot: 0, pembahasan: "Memutus semua akses merugikan layanan publik dan ekonomi." },
        { teks: "Menyerahkan pengelolaan keamanan siber kepada konsorsium swasta dalam negeri untuk menekan biaya.", bobot: 0, pembahasan: "Menyerahkan keamanan siber ke swasta melepaskan tanggung jawab negara." },
        { teks: "Mengembalikan pengarsipan instansi ke sistem manual agar data tidak bocor.", bobot: 0, pembahasan: "Kembali ke sistem manual tidak realistis di era digital." },
        { teks: "Menyusun aturan pelindungan data pribadi yang mewajibkan pusat data perusahaan asing berada di wilayah hukum Indonesia.", bobot: 5, pembahasan: "Regulasi yang menempatkan data di bawah hukum Indonesia melindungi kedaulatan data tanpa menutup diri dari teknologi." },
        { teks: "Mengajukan pakta pertahanan siber dengan organisasi regional untuk membatasi investasi teknologi asing.", bobot: 0, pembahasan: "Pakta regional untuk membatasi investasi tidak menyelesaikan penempatan data." }
      ]
    },
    {
      soal: "Masuknya korporasi multinasional besar berisiko menyingkirkan UMKM lokal. Langkah aparatur pemerintah yang paling tepat sebagai bela negara di bidang ekonomi adalah ....",
      opsi: [
        { teks: "Menunda semua izin penanaman modal asing sampai aturan perlindungan UMKM disahkan.", bobot: 0, pembahasan: "Menunda semua izin menghambat investasi dan pembangunan." },
        { teks: "Meminta pemerintah daerah mengambil alih kepemilikan aset UMKM agar terhindar dari persaingan.", bobot: 0, pembahasan: "Pengambilalihan aset UMKM oleh pemerintah daerah tidak memandirikan pelaku usaha." },
        { teks: "Membina UMKM lewat alih teknologi dan mewajibkan kemitraan rantai pasok dengan perusahaan asing.", bobot: 5, pembahasan: "Pembinaan dan kemitraan memperkuat UMKM sambil tetap menerima investasi." },
        { teks: "Mengenakan pajak progresif tanpa batas pada semua produk impor.", bobot: 0, pembahasan: "Pajak tanpa batas pada impor tidak proporsional." },
        { teks: "Menyerahkan daya saing UMKM kepada pasar terbuka agar usaha yang lemah tersisih.", bobot: 0, pembahasan: "Membiarkan usaha lemah tersisih tidak melindungi pelaku usaha kecil." }
      ]
    },
    {
      soal: "Arus informasi dan ekonomi global menuntut ASN mampu beradaptasi. Dalam bela negara nirmiliter, kemampuan yang paling perlu dimiliki ASN untuk menjaga kedaulatan nasional adalah ....",
      opsi: [
        { teks: "Menguasai literasi digital dan kemampuan menganalisis agar kebijakan tanggap terhadap persaingan global dan tetap berpijak pada nilai bangsa.", bobot: 5, pembahasan: "Pengabdian sesuai profesi: ASN yang cakap digital dan analitis menjaga kedaulatan sambil tetap memegang nilai bangsa." },
        { teks: "Menyelaraskan layanan publik dan peraturan dengan pedoman organisasi internasional.", bobot: 0, pembahasan: "Menyelaraskan seluruh layanan dengan pedoman internasional dapat mengurangi kedaulatan." },
        { teks: "Memusatkan pengembangan sumber daya manusia pada pertahanan siber.", bobot: 0, pembahasan: "Pertahanan siber hanya sebagian kompetensi yang dibutuhkan." },
        { teks: "Membangun persekutuan mengikat dengan birokrasi negara maju agar pasokan logistik lancar.", bobot: 0, pembahasan: "Persekutuan mengikat menciptakan ketergantungan." },
        { teks: "Menyerahkan pengelolaan kebudayaan lokal kepada LSM agar pemerintah fokus pada modernisasi.", bobot: 0, pembahasan: "Melepaskan tanggung jawab pemerintah atas kebudayaan." }
      ]
    },
    {
      soal: "Pemerintah menyeleksi investasi asing di sektor tambang mineral kritis, melarang ekspor bahan mentah, dan mewajibkan pembangunan smelter di dalam negeri. Kebijakan itu merupakan bela negara untuk mencapai ....",
      opsi: [
        { teks: "pemerataan infrastruktur antara kawasan industri di Jawa dan pulau terluar", bobot: 0, pembahasan: "Pemerataan infrastruktur bukan tujuan utama kebijakan ini." },
        { teks: "stabilnya neraca pembayaran dengan menaikkan kepemilikan saham publik pada BUMN", bobot: 0, pembahasan: "Neraca pembayaran bukan tujuan utama kebijakan ini." },
        { teks: "pelindungan masyarakat adat sekitar tambang melalui hak veto atas perpanjangan kontrak", bobot: 0, pembahasan: "Hak veto masyarakat adat bukan inti kebijakan ini." },
        { teks: "tambahan dana alat utama sistem persenjataan dari pajak perusahaan tambang", bobot: 0, pembahasan: "Pembiayaan alutsista bukan tujuan kebijakan ini." },
        { teks: "kedaulatan ekonomi dengan mencegah pengurasan sumber daya mentah ke luar negeri dan menambah nilai di dalam negeri", bobot: 5, pembahasan: "Hilirisasi menjaga kedaulatan ekonomi sesuai Pasal 33 dan menambah nilai di dalam negeri." }
      ]
    },
    {
      soal: "Organisasi internasional menekan Indonesia agar menghentikan industri ekstraktif dan pembukaan lahan atas nama pelestarian lingkungan global. Kebijakan yang paling tepat untuk melindungi kedaulatan ekonomi adalah ....",
      opsi: [
        { teks: "Menghentikan seketika semua kontrak karya agar terbukti patuh pada resolusi internasional.", bobot: 0, pembahasan: "Menghentikan semua kontrak mengorbankan ekonomi nasional." },
        { teks: "Menolak semua perjanjian internasional tentang perubahan iklim dan fokus pada pertumbuhan ekonomi.", bobot: 0, pembahasan: "Menolak semua perjanjian iklim mengabaikan tanggung jawab lingkungan." },
        { teks: "Menyerahkan pengawasan hutan lindung kepada LSM asing yang berpengalaman.", bobot: 0, pembahasan: "Menyerahkan pengawasan hutan kepada LSM asing melepaskan kedaulatan." },
        { teks: "Menyusun kebijakan hilirisasi dan transisi energi berkelanjutan yang tetap menjaga lingkungan dan kebutuhan ekonomi.", bobot: 5, pembahasan: "Kedaulatan ekonomi dijaga dengan kebijakan seimbang antara pembangunan dan kelestarian lingkungan." },
        { teks: "Meminta dana kompensasi karbon besar sebagai syarat menghentikan pemerataan infrastruktur.", bobot: 0, pembahasan: "Menjadikan dana kompensasi syarat tunggal menghambat pembangunan." }
      ]
    },
    {
      soal: "Dukungan diplomasi sejumlah negara asing terhadap gerakan separatis di Indonesia timur dibangun di atas narasi ketimpangan dan ketidakadilan. Langkah pemerintah pusat yang paling tepat untuk mencegah perpecahan adalah ....",
      opsi: [
        { teks: "Memutus hubungan diplomatik sepihak dengan negara pendukung separatis.", bobot: 0, pembahasan: "Memutus hubungan diplomatik tidak menjawab akar masalah di dalam negeri." },
        { teks: "Menawarkan hak konsesi tambang strategis kepada negara pendukung separatis agar berhenti.", bobot: 0, pembahasan: "Menyerahkan konsesi tambang melepaskan kedaulatan." },
        { teks: "Mengerahkan komponen cadangan untuk memberlakukan darurat sipil permanen di perbatasan.", bobot: 0, pembahasan: "Darurat sipil permanen berlebihan dan melanggar hak warga." },
        { teks: "Menarik kewenangan pengelolaan dana otonomi khusus ke kementerian dalam negeri.", bobot: 0, pembahasan: "Menarik kewenangan dana memperkuat rasa ketidakadilan." },
        { teks: "Mempercepat pembangunan yang inklusif, pendidikan, dan keadilan sosial bagi masyarakat setempat.", bobot: 5, pembahasan: "Akar separatisme adalah ketidakadilan, sehingga pembangunan dan keadilan sosial menghapus alasannya." }
      ]
    },
    {
      soal: "Perlawanan rakyat Surabaya pada 10 November 1945 menunjukkan keteguhan menghadapi kekuatan asing yang jauh lebih besar. Sikap pantang menyerah itu paling relevan bagi diplomat negara saat menghadapi tekanan global dengan cara ....",
      opsi: [
        { teks: "Menunda perundingan bilateral tanpa batas waktu untuk mengevaluasi kebijakan.", bobot: 0, pembahasan: "Menunda tanpa batas waktu adalah sikap menghindar." },
        { teks: "Bersikap tegas mempertahankan kedaulatan atas pengelolaan sumber daya strategis meski ada ancaman sanksi.", bobot: 5, pembahasan: "Rela berkorban dan teguh mempertahankan kedaulatan di bawah tekanan adalah wujud bela negara bagi diplomat." },
        { teks: "Menyelaraskan aturan perdagangan nasional dengan standar internasional agar neraca dagang tidak defisit.", bobot: 0, pembahasan: "Menyesuaikan aturan demi neraca dagang bukan sikap pantang menyerah." },
        { teks: "Menerima syarat delegasi asing dengan imbalan dana hibah infrastruktur.", bobot: 0, pembahasan: "Menukar syarat dengan hibah menggadaikan kedaulatan." },
        { teks: "Menyerahkan perundingan batas wilayah kepada lembaga arbitrase agar tidak ada konfrontasi.", bobot: 0, pembahasan: "Menyerahkan perundingan menghindari tanggung jawab negara." }
      ]
    },
    {
      soal: "Peretas dari luar negeri menyerang server data kependudukan nasional dan mencuri data warga. Kejadian itu termasuk ....",
      opsi: [
        { teks: "ancaman militer", bobot: 0, pembahasan: "Ancaman militer berupa serangan bersenjata terorganisasi." },
        { teks: "ancaman nirmiliter", bobot: 5, pembahasan: "Serangan siber termasuk ancaman nirmiliter yang tidak memakai kekuatan bersenjata tetapi membahayakan kedaulatan data." },
        { teks: "tantangan", bobot: 0, pembahasan: "Tantangan bersifat kompetitif dan mengasah kemampuan." },
        { teks: "hambatan", bobot: 0, pembahasan: "Hambatan berasal dari dalam diri sendiri." },
        { teks: "kerentanan", bobot: 0, pembahasan: "Kerentanan adalah kelemahan sistem, bukan jenis serangan." }
      ]
    },
    {
      soal: "Sishankamrata memerlukan peran seluruh warga. Sebelum menuntut peran itu, hal yang wajib dipenuhi lebih dulu oleh penyelenggara negara adalah ....",
      opsi: [
        { teks: "Mewajibkan latihan militer bagi penduduk usia produktif tanpa memandang pekerjaan.", bobot: 0, pembahasan: "Latihan militer wajib bagi semua tidak sesuai dengan sifat Komponen Cadangan yang sukarela." },
        { teks: "Menyerahkan penegakan ketertiban umum kepada organisasi paramiliter bentukan warga.", bobot: 0, pembahasan: "Penegakan ketertiban adalah tugas aparat negara." },
        { teks: "Mengalokasikan penerimaan pajak pusat untuk modernisasi alat utama sistem persenjataan.", bobot: 0, pembahasan: "Modernisasi alutsista tidak menjawab prasyarat hubungan negara dan warga." },
        { teks: "Menjamin perlindungan hukum, keadilan, dan rasa aman bagi setiap warga negara.", bobot: 5, pembahasan: "Warga akan rela berperan bila negara lebih dulu menjamin perlindungan, keadilan, dan rasa aman." },
        { teks: "Membuka izin kepemilikan senjata api bagi warga sipil untuk pertahanan lingkungan.", bobot: 0, pembahasan: "Izin senjata api terbuka membahayakan keamanan." }
      ]
    },
    {
      soal: "Peraturan mewajibkan pengutamaan produk dengan Tingkat Komponen Dalam Negeri (TKDN). Produk lokal di e-katalog sedikit lebih mahal dan bergaransi lebih singkat dibanding produk luar negeri. Langkah yang mencerminkan unsur dasar bela negara adalah ....",
      opsi: [
        { teks: "Membeli produk luar negeri demi efisiensi anggaran dan kelancaran operasional.", bobot: 0, pembahasan: "Efisiensi tidak boleh mengalahkan kewajiban mengutamakan produk dalam negeri." },
        { teks: "Menyusun spesifikasi teknis yang hanya dapat dipenuhi produk luar negeri.", bobot: 0, pembahasan: "Spesifikasi yang mengarah ke produk luar negeri adalah kecurangan." },
        { teks: "Tetap membeli produk lokal sebagai dukungan terhadap kemandirian industri dalam negeri.", bobot: 5, pembahasan: "Mengutamakan produk dalam negeri sesuai aturan adalah wujud cinta tanah air di bidang ekonomi." },
        { teks: "Menunda pengadaan sampai produsen lokal menurunkan harga setara produk luar negeri.", bobot: 0, pembahasan: "Menunda pengadaan menghambat pelayanan." },
        { teks: "Membeli produk lokal dalam jumlah lebih sedikit dan mengalihkan sisa anggaran ke program lain.", bobot: 0, pembahasan: "Mengurangi pembelian produk lokal melemahkan dukungan terhadap industri nasional." }
      ]
    },
    {
      soal: "Sebagai manajer BUMD pengelola kawasan wisata, Anda menerima usulan kontraktor untuk membuka hutan bakau di area konservasi demi memperluas wahana komersial. Langkah yang paling mencerminkan unsur dasar bela negara adalah ....",
      opsi: [
        { teks: "Menolak pembukaan lahan dan meminta kontraktor merancang wahana yang menyatu dengan ekosistem bakau.", bobot: 5, pembahasan: "Menjaga lingkungan hidup adalah cinta tanah air; kegiatan usaha tetap dapat berjalan dengan rancangan yang ramah lingkungan." },
        { teks: "Membentuk tim gabungan untuk menghitung perkiraan kerugian negara akibat kerusakan bakau.", bobot: 0, pembahasan: "Menghitung kerugian tidak mencegah kerusakan." },
        { teks: "Menyetujui usulan itu dengan syarat kontraktor menyisihkan keuntungan untuk beasiswa pendidikan.", bobot: 0, pembahasan: "Dana beasiswa tidak membenarkan kerusakan kawasan konservasi." },
        { teks: "Menyetujui perluasan dengan syarat kontraktor membeli seluruh bahan bangunan dari pemasok daerah.", bobot: 0, pembahasan: "Kewajiban membeli bahan dari pemasok daerah tidak menggantikan kewajiban menjaga konservasi." },
        { teks: "Menyerahkan keputusan kepada dewan direksi agar selaras dengan visi dan misi BUMD.", bobot: 0, pembahasan: "Menyerahkan keputusan melepaskan tanggung jawab Anda." }
      ]
    },
    {
      soal: "Menjelang pemilu beredar narasi di media sosial yang memanipulasi data kinerja kementerian Anda sehingga memicu ketidakpercayaan publik. Sebagai petugas hubungan masyarakat, tindakan kewaspadaan dini yang paling tepat adalah ....",
      opsi: [
        { teks: "Meminta seluruh pegawai membalas unggahan itu secara serentak.", bobot: 0, pembahasan: "Balasan serentak terlihat terorganisasi dan memperkeruh suasana." },
        { teks: "Berkoordinasi dengan aparat hukum untuk memblokir akun penyebar informasi itu.", bobot: 0, pembahasan: "Pemblokiran akun bukan wewenang kementerian dan tidak meluruskan isi." },
        { teks: "Melaporkan pembuat konten kepada kepolisian dengan tuduhan makar.", bobot: 0, pembahasan: "Tuduhan makar tidak tepat dan berlebihan." },
        { teks: "Mengabaikan narasi itu karena klarifikasi di masa tegang berisiko memperburuk keadaan.", bobot: 0, pembahasan: "Mengabaikan membiarkan hoaks meluas." },
        { teks: "Menerbitkan siaran pers resmi yang memuat data kinerja yang benar secara terbuka.", bobot: 5, pembahasan: "Meluruskan hoaks dengan data resmi yang terbuka adalah kewaspadaan dini yang proporsional." }
      ]
    },
    {
      soal: "Anda tenaga penyuluh kesehatan di daerah terpencil yang belum memiliki fasilitas medis memadai dan sulit dijangkau. Wujud nyata bela negara nonfisik dalam kondisi itu adalah ....",
      opsi: [
        { teks: "Mengajukan permohonan mutasi ke instansi provinsi dengan alasan kondisi lapangan tidak mendukung.", bobot: 0, pembahasan: "Mengajukan mutasi meninggalkan tugas di daerah yang membutuhkan." },
        { teks: "Melaksanakan tugas sesuai prosedur standar sambil menunggu pembangunan fasilitas dari pusat.", bobot: 0, pembahasan: "Menunggu pusat berarti pasif." },
        { teks: "Mengembangkan penyuluhan kesehatan dengan memanfaatkan kader desa dan bahan alam setempat.", bobot: 5, pembahasan: "Pengabdian sesuai profesi dengan kreativitas memanfaatkan sumber daya setempat adalah bela negara nonfisik." },
        { teks: "Menggalang dana lewat media sosial pribadi untuk membeli peralatan medis mutakhir.", bobot: 0, pembahasan: "Penggalangan dana bukan tugas pokok penyuluh." },
        { teks: "Memberitakan keterbatasan fasilitas daerah itu di media massa agar segera dibantu.", bobot: 0, pembahasan: "Pemberitaan tidak menyelesaikan kebutuhan penyuluhan." }
      ]
    },
    {
      soal: "Draf perjanjian pembiayaan proyek strategis dari lembaga donor asing memuat klausul bahwa seluruh posisi pimpinan proyek diisi warga negaranya. Sebagai negosiator, langkah yang harus Anda ambil adalah ....",
      opsi: [
        { teks: "Merundingkan ulang untuk menghapus klausul itu demi menjaga kedaulatan tata kelola nasional.", bobot: 5, pembahasan: "Kedaulatan dijaga dengan merundingkan syarat yang melemahkan peran aparatur nasional tanpa memutus kerja sama." },
        { teks: "Membatalkan kerja sama dan melaporkan lembaga donor kepada penegak hukum atas dugaan spionase.", bobot: 0, pembahasan: "Menuduh spionase tidak berdasar dan berlebihan." },
        { teks: "Menerima syarat itu agar dana hibah tidak terhambat.", bobot: 0, pembahasan: "Menerima syarat mengorbankan kedaulatan tata kelola." },
        { teks: "Menyetujui klausul itu dengan syarat penempatan pimpinan asing bersifat sementara.", bobot: 0, pembahasan: "Menerima klausul sementara tetap mengurangi peran aparatur nasional." },
        { teks: "Mengalihkan proyek kepada swasta lokal meskipun biaya membengkak.", bobot: 0, pembahasan: "Mengalihkan proyek dengan biaya membengkak tidak efisien." }
      ]
    },
    {
      soal: "Warga melaporkan sekelompok pendatang yang menyebarkan materi diskusi yang terang-terangan merendahkan Pancasila. Tindakan Anda sebagai aparatur desa yang paling mencerminkan kewaspadaan dini adalah ....",
      opsi: [
        { teks: "Mengerahkan massa untuk membubarkan perkumpulan itu secara paksa.", bobot: 0, pembahasan: "Pembubaran paksa melanggar hukum." },
        { teks: "Melaporkan indikasi kegiatan itu secara berjenjang kepada pihak keamanan yang berwenang.", bobot: 5, pembahasan: "Kewaspadaan dini ditunjukkan dengan melapor kepada aparat yang berwenang." },
        { teks: "Mengabaikan kegiatan itu karena penyampaian gagasan dilindungi undang-undang.", bobot: 0, pembahasan: "Mengabaikan membiarkan ancaman ideologi berkembang." },
        { teks: "Menyusup ke perkumpulan itu untuk memastikan rencana mereka.", bobot: 0, pembahasan: "Menyusup adalah tugas aparat intelijen." },
        { teks: "Mengadakan penyuluhan tandingan wajib bagi seluruh warga pada jam yang sama.", bobot: 0, pembahasan: "Penyuluhan wajib pada jam yang sama bersifat memaksa dan mengganggu." }
      ]
    },
    {
      soal: "Wabah menular muncul di kawasan industri, dan pemilik pabrik menolak karantina wilayah karena takut rugi. Sebagai petugas dinas kesehatan, tindakan yang mencerminkan bela negara nonfisik adalah ....",
      opsi: [
        { teks: "Menegakkan protokol karantina dengan tegas sambil memberi edukasi demi keselamatan masyarakat.", bobot: 5, pembahasan: "Pengabdian sesuai profesi: keselamatan masyarakat didahulukan di atas kepentingan usaha." },
        { teks: "Memberi pelonggaran karantina bagi pabrik yang bersedia membiayai pengobatan pekerjanya.", bobot: 0, pembahasan: "Pelonggaran bersyarat membahayakan masyarakat luas." },
        { teks: "Menyerahkan keputusan karantina kepada kepolisian karena menyangkut ketertiban umum.", bobot: 0, pembahasan: "Karantina kesehatan adalah wewenang otoritas kesehatan." },
        { teks: "Mengizinkan pabrik beroperasi dengan syarat pekerja menandatangani surat pelepasan tuntutan hukum.", bobot: 0, pembahasan: "Surat pelepasan tuntutan melanggar hak pekerja." },
        { teks: "Menunda karantina sampai pusat menerbitkan kompensasi bagi pelaku industri.", bobot: 0, pembahasan: "Menunda karantina membiarkan wabah menyebar." }
      ]
    },
    {
      soal: "Saat banjir bandang, rumah Anda, komandan regu SAR, ikut terendam, sementara Anda diperintahkan memimpin evakuasi ratusan warga di fasilitas umum. Sikap yang mencerminkan patriotisme adalah ....",
      opsi: [
        { teks: "Membagi waktu penanganan agar keluarga dan warga di fasilitas umum sama-sama tertangani.", bobot: 0, pembahasan: "Membagi waktu tidak memenuhi kebutuhan evakuasi massal." },
        { teks: "Mendahulukan evakuasi ratusan warga karena menyangkut keselamatan jiwa dalam jumlah besar.", bobot: 5, pembahasan: "Patriotisme berarti rela berkorban kepentingan pribadi demi keselamatan orang banyak." },
        { teks: "Menyerahkan evakuasi kepada relawan sipil agar Anda dapat mengamankan keluarga dan aset.", bobot: 0, pembahasan: "Menyerahkan tugas kepada relawan menghindari tanggung jawab komandan." },
        { teks: "Meminta izin atasan untuk mendahulukan evakuasi keluarga sesuai asas kemanusiaan.", bobot: 0, pembahasan: "Mendahulukan keluarga mengutamakan kepentingan pribadi." },
        { teks: "Meminta warga mengevakuasi diri dengan panduan komunikasi jarak jauh.", bobot: 0, pembahasan: "Evakuasi mandiri membahayakan warga." }
      ]
    },
    {
      soal: "Hoaks yang menuduh instansi Anda mendiskriminasi kelompok minoritas beredar luas di aplikasi pesan dan memicu ketegangan. Sebagai petugas hubungan masyarakat, tindakan kewaspadaan dini yang tepat adalah ....",
      opsi: [
        { teks: "Menyusun klarifikasi resmi berbasis fakta dan menyebarkannya lewat saluran komunikasi resmi instansi.", bobot: 5, pembahasan: "Klarifikasi resmi berbasis fakta meluruskan hoaks tanpa menimbulkan persoalan baru." },
        { teks: "Meminta seluruh rekan memblokir nomor penyebar pertama hoaks.", bobot: 0, pembahasan: "Memblokir satu nomor tidak menghentikan penyebaran." },
        { teks: "Melaporkan semua warga yang membagikan pesan itu kepada kepolisian.", bobot: 0, pembahasan: "Melaporkan semua pembagi pesan berlebihan." },
        { teks: "Menutup kolom komentar akun media sosial instansi untuk sementara.", bobot: 0, pembahasan: "Menutup komentar tidak meluruskan hoaks." },
        { teks: "Mengabaikan isu itu karena masyarakat akan menyadari kebenarannya.", bobot: 0, pembahasan: "Mengabaikan membiarkan hoaks meluas." }
      ]
    },
    {
      soal: "Tanah longsor memutus jalan utama sebuah desa, dan jalur alternatif hanya dapat dilalui dengan berjalan kaki menembus hutan terjal dalam cuaca ekstrem. Sebagai staf logistik BPBD, tindakan yang paling mencerminkan unsur rela berkorban adalah ....",
      opsi: [
        { teks: "Berkoordinasi dengan swasta untuk menyewa helikopter demi bantuan yang aman.", bobot: 0, pembahasan: "Menyewa helikopter adalah cara aman, bukan bentuk pengorbanan pribadi." },
        { teks: "Mengajukan diri memanggul pasokan logistik menembus jalur darurat agar kebutuhan dasar warga segera terpenuhi.", bobot: 5, pembahasan: "Rela berkorban berarti mengorbankan tenaga dan menghadapi risiko demi menolong warga." },
        { teks: "Menyusun laporan kedaruratan agar kementerian pusat mengirim tim SAR gabungan.", bobot: 0, pembahasan: "Laporan tidak langsung memenuhi kebutuhan warga." },
        { teks: "Meminta aparat desa memobilisasi warga yang sehat mengambil jatah logistik di pos.", bobot: 0, pembahasan: "Menyuruh warga mengambil sendiri mengalihkan risiko kepada warga." },
        { teks: "Membagikan logistik kepada pengungsi yang lebih dahulu tiba di posko aman.", bobot: 0, pembahasan: "Membagikan di posko tidak menjangkau warga terjebak." }
      ]
    },
    {
      soal: "Kapal sipil asing tak berizin menangkap ikan di zona ekonomi eksklusif dengan pengawalan kapal penjaga pantai bersenjata asing. Menurut Sishankamrata, langkah penanganan yang paling prosedural adalah ....",
      opsi: [
        { teks: "Menugaskan TNI dan instansi keamanan laut sebagai kekuatan utama untuk melakukan intersepsi dan penindakan.", bobot: 5, pembahasan: "Dalam Sishankamrata, TNI dan Polri adalah kekuatan utama, sedangkan rakyat adalah kekuatan pendukung." },
        { teks: "Mengirim nota protes diplomatik dan membiarkan kapal asing beroperasi sementara.", bobot: 0, pembahasan: "Membiarkan kapal asing beroperasi merugikan kedaulatan." },
        { teks: "Memobilisasi nelayan lokal memblokade laut secara massal.", bobot: 0, pembahasan: "Nelayan hanya kekuatan pendukung dan tidak dipersenjatai." },
        { teks: "Memberi wewenang kepada pemerintah daerah perbatasan untuk mengusir armada asing dengan kapal patroli.", bobot: 0, pembahasan: "Pemerintah daerah tidak memiliki wewenang penindakan." },
        { teks: "Menenggelamkan kapal asing seketika tanpa proses peradilan.", bobot: 0, pembahasan: "Penindakan tanpa proses hukum melanggar aturan hukum laut." }
      ]
    },
    {
      soal: "Sebagai manajer proyek jalan tol lintas provinsi, Anda mendapati rute rencana melewati hutan lindung yang menjadi daerah resapan air kota. Langkah yang mencerminkan unsur cinta tanah air adalah ....",
      opsi: [
        { teks: "Memaksakan rute sesuai rencana awal karena proyek strategis nasional.", bobot: 0, pembahasan: "Memaksakan rute merusak lingkungan." },
        { teks: "Mengusulkan revisi desain dengan jembatan layang di atas kawasan hutan agar ekosistem tetap terjaga.", bobot: 5, pembahasan: "Pembangunan tetap berjalan sambil menjaga lingkungan hidup sebagai wujud cinta tanah air." },
        { teks: "Menawarkan dana kompensasi pelestarian yang lebih besar kepada pemerintah daerah.", bobot: 0, pembahasan: "Kompensasi uang tidak memulihkan kerusakan ekosistem." },
        { teks: "Menghentikan seluruh proyek karena berpotensi melanggar hak asasi masyarakat.", bobot: 0, pembahasan: "Menghentikan seluruh proyek berlebihan." },
        { teks: "Meminta persetujuan warga melalui musyawarah agar pembukaan hutan lindung sah secara sosial.", bobot: 0, pembahasan: "Persetujuan warga tidak membenarkan perusakan hutan lindung." }
      ]
    },
    {
      soal: "Digitalisasi layanan publik di daerah 3T terbengkalai karena rendahnya literasi teknologi warga, dan warga kembali memakai pendaftaran manual. Sebagai tim pelaksana, tindakan yang mencerminkan bela negara nonfisik adalah ....",
      opsi: [
        { teks: "Melaporkan kendala dan mengusulkan pembatalan program di daerah pelosok.", bobot: 0, pembahasan: "Mengusulkan pembatalan menghindari masalah." },
        { teks: "Mewajibkan aparatur desa mengambil alih pendampingan digitalisasi layanan.", bobot: 0, pembahasan: "Membebani aparatur desa tanpa bekal." },
        { teks: "Mengembalikan pelayanan di pelosok ke metode manual secara tetap.", bobot: 0, pembahasan: "Kembali ke manual menghambat kemajuan layanan." },
        { teks: "Mengabdi di daerah itu dengan melatih pemuda desa menjadi fasilitator layanan digital bagi warga.", bobot: 5, pembahasan: "Pengabdian sesuai profesi: membina warga dan pemuda agar layanan digital dapat dimanfaatkan." },
        { teks: "Mempublikasikan rendahnya literasi warga desa di media sosial instansi.", bobot: 0, pembahasan: "Mempublikasikan kelemahan warga mempermalukan." }
      ]
    },
    {
      soal: "Produk tekstil impor murah membanjiri pasar dan banyak pabrik konveksi lokal tutup sehingga terjadi PHK massal. Sebagai pembuat kebijakan di kementerian perindustrian, langkah bela negara dari sisi kewaspadaan dini ekonomi adalah ....",
      opsi: [
        { teks: "Menutup impor pakaian jadi secara sepihak dan permanen.", bobot: 0, pembahasan: "Menutup impor permanen sepihak melanggar kerja sama dagang dan merugikan konsumen." },
        { teks: "Membiarkan pabrik yang tidak efisien tersisih oleh persaingan pasar.", bobot: 0, pembahasan: "Membiarkan pabrik tersisih tidak melindungi ekonomi nasional." },
        { teks: "Mengalihkan pekerja yang terkena PHK ke program ketahanan pangan.", bobot: 0, pembahasan: "Mengalihkan pekerja tidak menyelamatkan industri." },
        { teks: "Menerapkan pembatasan kuota impor secara terukur dan memberi kemudahan peremajaan mesin bagi pabrik lokal.", bobot: 5, pembahasan: "Pembatasan terukur dan dukungan modernisasi melindungi industri lokal tanpa menutup diri." },
        { teks: "Mewajibkan ASN membeli pakaian sisa stok pabrik lokal.", bobot: 0, pembahasan: "Kewajiban membeli bukan solusi berkelanjutan." }
      ]
    },
    {
      soal: "Negara tetangga menawarkan hibah besar untuk memperbaiki sekolah Anda di wilayah perbatasan, dengan syarat sekolah memakai kurikulum sejarah dan kewarganegaraan negara itu. Langkah bela negara nonfisik yang tepat adalah ....",
      opsi: [
        { teks: "Menyetujui tawaran itu dan meminta guru menambahkan materi nasional secara terpisah.", bobot: 0, pembahasan: "Menyetujui syarat mengorbankan kedaulatan kurikulum." },
        { teks: "Menerima dana lalu merevisi perjanjian secara sepihak setelah dana ditransfer.", bobot: 0, pembahasan: "Mengubah perjanjian sepihak tidak jujur." },
        { teks: "Menolak syarat kurikulum itu dan mengajukan proposal pendanaan alternatif kepada kementerian atau pemerintah daerah.", bobot: 5, pembahasan: "Kedaulatan pendidikan dijaga dengan menolak syarat kurikulum asing dan mencari pendanaan dari negara sendiri." },
        { teks: "Menghentikan kegiatan sekolah sementara sebagai protes kepada pemerintah pusat.", bobot: 0, pembahasan: "Menghentikan sekolah merugikan siswa." },
        { teks: "Melaporkan perwakilan negara pemberi dana kepada lembaga kepolisian internasional.", bobot: 0, pembahasan: "Melaporkan ke kepolisian internasional berlebihan." }
      ]
    },
    {
      soal: "Krisis ekonomi saat pandemi membuat banyak UMKM di wilayah kerja Anda terancam tutup, sedangkan anggaran bantuan sosial instansi telah dialihkan ke alat kesehatan. Wujud nyata unsur rela berkorban yang dapat Anda mulai sebagai pimpinan adalah ....",
      opsi: [
        { teks: "Mengajukan pinjaman ke bank daerah atas nama instansi untuk modal darurat UMKM.", bobot: 0, pembahasan: "Meminjam atas nama instansi menyalahi aturan keuangan." },
        { teks: "Menyusun laporan kerugian UMKM dan menunda tindakan sampai pusat menerbitkan pedoman.", bobot: 0, pembahasan: "Menunda tindakan tidak menolong UMKM." },
        { teks: "Melonggarkan pembatasan kesehatan secara sepihak khusus kawasan pasar.", bobot: 0, pembahasan: "Melonggarkan pembatasan sepihak membahayakan kesehatan." },
        { teks: "Menggalang dana sukarela dari gaji pegawai untuk memborong produk UMKM.", bobot: 5, pembahasan: "Rela berkorban: memakai sebagian penghasilan sendiri secara sukarela untuk membantu rakyat." },
        { teks: "Menerbitkan imbauan agar pelaku UMKM beralih menjadi relawan kesehatan.", bobot: 0, pembahasan: "Mengharuskan UMKM beralih profesi tidak menyelesaikan masalah." }
      ]
    },
    {
      soal: "Server pusat data kementerian lumpuh akibat ransomware kelompok peretas lintas negara yang menyandera data kependudukan dan meminta tebusan. Berdasarkan konsep kewaspadaan dini, kejadian itu digolongkan sebagai ....",
      opsi: [
        { teks: "tantangan nirmiliter", bobot: 0, pembahasan: "Tantangan bersifat kompetitif dan mengasah kemampuan." },
        { teks: "ancaman nirmiliter", bobot: 5, pembahasan: "Serangan siber terorganisasi termasuk ancaman nirmiliter karena merusak tanpa senjata fisik." },
        { teks: "hambatan internal", bobot: 0, pembahasan: "Hambatan berasal dari dalam diri sendiri." },
        { teks: "gangguan eksternal", bobot: 0, pembahasan: "Gangguan berupa usikan dari luar yang tidak sampai membahayakan kedaulatan." },
        { teks: "ancaman militer", bobot: 0, pembahasan: "Ancaman militer berupa kekuatan bersenjata." }
      ]
    },
    {
      soal: "Menjelang musim tanam, hama baru menyerang wilayah binaan Anda sebagai penyuluh pertanian, dan petani terancam gagal panen dalam hitungan hari karena belum ada penangkal bersubsidi. Sikap yang mencerminkan unsur rela berkorban adalah ....",
      opsi: [
        { teks: "Menyusun usulan anggaran darurat kepada dinas provinsi dan menunda penanganan sampai dana cair.", bobot: 0, pembahasan: "Menunggu dana cair membuat petani terancam gagal panen." },
        { teks: "Meminta kepala desa mengalihkan dana desa secara sepihak untuk membeli pestisida.", bobot: 0, pembahasan: "Mengalihkan dana desa sepihak menyalahi aturan." },
        { teks: "Menyisihkan sebagian penghasilan pribadi untuk bahan pestisida alternatif dan memimpin penyemprotan bersama petani.", bobot: 5, pembahasan: "Rela berkorban: memakai sebagian penghasilan sendiri dan turun langsung membantu petani." },
        { teks: "Menyerahkan penanganan hama kepada balai karantina pusat karena di luar kewenangan.", bobot: 0, pembahasan: "Menyerahkan penanganan menghindari tanggung jawab." },
        { teks: "Mengadakan diskusi dengan kelompok tani untuk mencari kesalahan penanaman.", bobot: 0, pembahasan: "Mencari kesalahan penanaman tidak menyelamatkan tanaman." }
      ]
    },
    {
      soal: "Sebagai analis di pos lintas batas, Anda mendeteksi warga sipil asing yang membawa materi provokatif untuk menghasut warga lokal bergabung dengan gerakan separatis bersenjata. Langkah kewaspadaan dini yang paling prosedural adalah ....",
      opsi: [
        { teks: "Mempersenjatai warga lokal agar dapat melawan kelompok separatis.", bobot: 0, pembahasan: "Mempersenjatai warga berbahaya dan bukan wewenang warga." },
        { teks: "Menangkap penyusup itu langsung dan menginterogasi paksa di pos.", bobot: 0, pembahasan: "Penangkapan dan interogasi paksa bukan wewenang analis." },
        { teks: "Mengabaikan materi itu karena penindakan separatis adalah wewenang TNI.", bobot: 0, pembahasan: "Mengabaikan membiarkan ancaman berkembang." },
        { teks: "Mengamankan barang bukti provokasi dan segera melaporkan temuan kepada TNI dan instansi keamanan terkait.", bobot: 5, pembahasan: "Warga sipil dan aparatur tidak bertindak sendiri; temuan dilaporkan kepada aparat yang berwenang." },
        { teks: "Mengadakan penyuluhan tandingan di perbatasan agar warga tidak terpengaruh.", bobot: 0, pembahasan: "Penyuluhan tandingan tidak menggantikan pelaporan temuan." }
      ]
    },
    {
      soal: "Sebagai auditor pajak, Anda menemukan celah regulasi yang tidak secara tegas dilarang undang-undang, tetapi jika terus dimanfaatkan merugikan penerimaan negara miliaran rupiah. Sikap bela negara melalui pengabdian profesi adalah ....",
      opsi: [
        { teks: "Membiarkan perusahaan memanfaatkan celah itu karena tidak melanggar hukum.", bobot: 0, pembahasan: "Membiarkan merugikan penerimaan negara." },
        { teks: "Menawarkan konsultasi tertutup kepada perusahaan untuk mengoptimalkan celah itu dengan imbalan.", bobot: 0, pembahasan: "Konsultasi berimbalan adalah penyalahgunaan jabatan." },
        { teks: "Menyusun kajian risiko dan mengusulkannya kepada kementerian agar celah regulasi ditutup.", bobot: 5, pembahasan: "Pengabdian profesi: menggunakan keahlian untuk mengusulkan perbaikan peraturan lewat jalur resmi." },
        { teks: "Membocorkan celah itu kepada media agar publik menekan pemerintah.", bobot: 0, pembahasan: "Membocorkan ke media melanggar kerahasiaan dinas." },
        { teks: "Menghentikan audit sepihak dan memblokir rekening perusahaan.", bobot: 0, pembahasan: "Memblokir rekening sepihak melampaui kewenangan." }
      ]
    },
    {
      soal: "Anda ASN tenaga kesehatan lulusan spesialis luar negeri dengan beasiswa negara. Sebuah rumah sakit swasta internasional menawari posisi direktur medis dengan gaji besar, sementara kementerian telah menugaskan Anda ke rumah sakit daerah terpencil sesuai ikatan dinas. Keputusan yang mencerminkan unsur dasar bela negara adalah ....",
      opsi: [
        { teks: "Menerima tawaran swasta dengan syarat mereka membayar denda pelanggaran ikatan dinas.", bobot: 0, pembahasan: "Membayar denda tidak menghapus tanggung jawab kepada negara." },
        { teks: "Meminta penempatan di rumah sakit provinsi yang fasilitasnya lengkap.", bobot: 0, pembahasan: "Menawar penempatan menghindari daerah yang membutuhkan." },
        { teks: "Menerima penempatan secara administratif tetapi membuka praktik paruh waktu di kota.", bobot: 0, pembahasan: "Menerima penugasan hanya secara formal tidak menjalankan pengabdian." },
        { teks: "Menolak penempatan karena keahlian spesialis tidak akan berfungsi di fasilitas terbatas.", bobot: 0, pembahasan: "Menolak dengan alasan fasilitas menghindari tugas." },
        { teks: "Mematuhi ikatan dinas dan berangkat ke daerah terpencil sebagai pengabdian profesi dan kerelaan berkorban.", bobot: 5, pembahasan: "Pengabdian sesuai profesi dan kerelaan berkorban ditunjukkan dengan mematuhi penugasan ke daerah yang membutuhkan." }
      ]
    },
    {
      soal: "Sebagai pejabat daerah di wilayah kepulauan terluar, Anda mendapat laporan kapal penjaga pantai asing membangun instalasi semipermanen di karang yang masuk ZEE Indonesia. Langkah awal kewaspadaan dini yang wajib Anda lakukan adalah ....",
      opsi: [
        { teks: "Melaporkan perkembangan itu secara berjenjang kepada pemerintah pusat dan TNI.", bobot: 5, pembahasan: "Pelaporan berjenjang kepada pusat dan TNI sesuai pembagian kewenangan sistem pertahanan." },
        { teks: "Mempersenjatai nelayan lokal untuk mengusir instalasi asing.", bobot: 0, pembahasan: "Mempersenjatai nelayan melampaui kewenangan." },
        { teks: "Mengirim nota protes langsung kepada kedutaan besar negara itu.", bobot: 0, pembahasan: "Nota protes adalah wewenang kementerian luar negeri." },
        { teks: "Mengerahkan kepolisian daerah untuk menangkap personel militer asing.", bobot: 0, pembahasan: "Kepolisian daerah tidak berwenang menghadapi militer asing." },
        { teks: "Mengabaikan aktivitas itu karena karang ZEE tidak dihuni penduduk.", bobot: 0, pembahasan: "Mengabaikan membiarkan pelanggaran kedaulatan." }
      ]
    },
    {
      soal: "Sebagai tenaga ahli TI kementerian, Anda ditugaskan memulihkan pangkalan data nasional yang diretas dan harus bekerja akhir pekan tanpa lembur, padahal Anda mendapat tawaran proyek lepas swasta berbayaran tinggi. Pengabdian profesi yang paling tepat adalah ....",
      opsi: [
        { teks: "Menerima proyek lepas dengan syarat dikerjakan setelah jam kerja.", bobot: 0, pembahasan: "Mengambil proyek lain mengurangi fokus pada tugas darurat." },
        { teks: "Mengajukan cuti darurat agar dapat menerima proyek swasta.", bobot: 0, pembahasan: "Cuti demi proyek swasta meninggalkan tugas mendesak." },
        { teks: "Menyerahkan pemulihan data kepada staf magang agar dapat mengerjakan keduanya.", bobot: 0, pembahasan: "Mendelegasikan kepada staf magang berisiko membahayakan data nasional." },
        { teks: "Meminta libur pengganti sebagai syarat sebelum memulihkan data.", bobot: 0, pembahasan: "Mensyaratkan kompensasi menunda pemulihan." },
        { teks: "Menolak tawaran swasta dan memusatkan kemampuan untuk memulihkan sistem kementerian.", bobot: 5, pembahasan: "Mendahulukan tugas negara yang mendesak adalah wujud pengabdian profesi dan rela berkorban." }
      ]
    },
    {
      soal: "Sekelompok siswa di sekolah menengah negeri menolak menghormat bendera dan terbuka mengagungkan ideologi ekstremisme. Wujud bela negara nonfisik yang paling strategis bagi Anda sebagai guru adalah ....",
      opsi: [
        { teks: "Memberhentikan siswa itu secara tidak hormat dari sekolah.", bobot: 0, pembahasan: "Memberhentikan menutup kesempatan pembinaan." },
        { teks: "Membiarkan sikap itu karena kebebasan berekspresi dilindungi konstitusi.", bobot: 0, pembahasan: "Membiarkan mengabaikan kewajiban pendidik." },
        { teks: "Melakukan pendekatan persuasif dan menyisipkan modul pendidikan kebangsaan dalam kegiatan belajar.", bobot: 5, pembahasan: "Bela negara nonfisik di bidang pendidikan: membina siswa melalui pendekatan edukatif." },
        { teks: "Melaporkan siswa itu ke aparat hukum agar diproses pidana makar.", bobot: 0, pembahasan: "Pidana makar berlebihan untuk siswa." },
        { teks: "Mengurangi nilai mata pelajaran kewarganegaraan mereka sebagai sanksi.", bobot: 0, pembahasan: "Mengurangi nilai tidak membina dan tidak adil." }
      ]
    },
    {
      soal: "Saat mengurus perpanjangan izin operasional instansi yang antreannya panjang, seorang calo yang mantan bawahan Anda menawarkan jalan pintas tanpa antre. Tindakan yang mencerminkan unsur sadar berbangsa dan bernegara adalah ....",
      opsi: [
        { teks: "Menerima tawaran itu demi efisiensi waktu karena Anda sedang bertugas resmi.", bobot: 0, pembahasan: "Menyalip antrean melanggar prosedur." },
        { teks: "Menolak tawaran itu dan tetap mengikuti antrean resmi karena sadar akan ketaatan pada hukum dan sistem pelayanan publik.", bobot: 5, pembahasan: "Sadar berbangsa dan bernegara tampak pada ketaatan hukum dan menghormati sistem pelayanan." },
        { teks: "Membayar jasa calo dengan uang pribadi agar tidak membebani anggaran instansi.", bobot: 0, pembahasan: "Menggunakan calo tetap melanggar aturan." },
        { teks: "Menyetujui tawaran itu dengan syarat tidak merugikan pemohon lain secara terang-terangan.", bobot: 0, pembahasan: "Persetujuan bersyarat tetap merugikan pemohon lain." },
        { teks: "Mendahului antrean pertama dengan menunjukkan surat tugas dari instansi.", bobot: 0, pembahasan: "Surat tugas tidak membenarkan menyalip antrean." }
      ]
    },
    {
      soal: "Sistem jaringan internal kementerian Anda lumpuh akibat serangan siber transnasional yang berupaya mencuri data kependudukan. Sebagai kepala pusat data, langkah operasional yang wajib Anda ambil menghadapi ancaman nirmiliter itu adalah ....",
      opsi: [
        { teks: "Menghubungi peretas secara rahasia untuk bernegosiasi agar data tidak bocor.", bobot: 0, pembahasan: "Bernegosiasi dengan peretas membahayakan data dan tidak sah." },
        { teks: "Memutus koneksi jaringan secara fisik dan mengaktifkan protokol pencadangan data darurat sesuai standar keamanan.", bobot: 5, pembahasan: "Penanganan teknis sesuai standar keamanan melindungi data dan membatasi kerusakan." },
        { teks: "Menyerahkan penanganan kepada kepolisian dan meliburkan staf pusat data.", bobot: 0, pembahasan: "Menyerahkan seluruh penanganan melepaskan tanggung jawab teknis." },
        { teks: "Mempublikasikan kelemahan server kepada media agar mendapat bantuan anggaran.", bobot: 0, pembahasan: "Membuka kelemahan sistem kepada publik membahayakan keamanan." },
        { teks: "Meminta staf TI meretas balik server pelaku.", bobot: 0, pembahasan: "Meretas balik melanggar hukum." }
      ]
    },
    {
      soal: "Sebagai ketua tim perumus kebijakan daerah, Anda menemukan rancangan peraturan daerah usulan legislatif yang memuat klausul diskriminatif terhadap penganut agama minoritas dengan dalih kearifan lokal. Tindakan yang mencerminkan unsur setia pada Pancasila adalah ....",
      opsi: [
        { teks: "Menyetujui pengesahan rancangan itu untuk menghindari konflik eksekutif dan legislatif.", bobot: 0, pembahasan: "Menyetujui demi menghindari konflik mengorbankan prinsip." },
        { teks: "Menyerahkan draf kepada pemerintah pusat agar dibatalkan tanpa pembahasan daerah.", bobot: 0, pembahasan: "Menyerahkan kepada pusat menghindari tanggung jawab perumus." },
        { teks: "Mengesahkan rancangan itu dengan syarat berlaku terbatas di pedesaan.", bobot: 0, pembahasan: "Pemberlakuan terbatas tetap diskriminatif." },
        { teks: "Mengembalikan draf untuk direvisi karena bertentangan dengan Bhinneka Tunggal Ika dan Pancasila.", bobot: 5, pembahasan: "Setia pada Pancasila berarti menolak peraturan yang diskriminatif dan memperbaikinya." },
        { teks: "Menyarankan kelompok minoritas mematuhi aturan itu sementara waktu demi stabilitas.", bobot: 0, pembahasan: "Meminta minoritas mematuhi membiarkan ketidakadilan." }
      ]
    },
    {
      soal: "Sebagai guru ASN di daerah yang sedang mengalami eskalasi konflik bersenjata, Anda menerima instruksi pusat agar aparatur tetap menyelenggarakan layanan publik dasar bagi warga. Langkah yang paling mencerminkan pengabdian profesi dalam bela negara adalah ....",
      opsi: [
        { teks: "Meminta cuti panjang sampai aparat keamanan menumpas kelompok bersenjata.", bobot: 0, pembahasan: "Cuti panjang meninggalkan tugas." },
        { teks: "Menyarankan orang tua mengajar anak di rumah agar guru tidak berisiko.", bobot: 0, pembahasan: "Menyerahkan pendidikan kepada orang tua melepaskan tanggung jawab guru." },
        { teks: "Menghentikan kegiatan belajar dan bergabung dengan aparat keamanan untuk melawan kelompok bersenjata.", bobot: 0, pembahasan: "Bergabung dengan aparat keamanan bukan tugas guru dan meninggalkan profesi." },
        { teks: "Memindahkan operasional sekolah secara sepihak ke provinsi tetangga.", bobot: 0, pembahasan: "Memindahkan sekolah sepihak melanggar aturan." },
        { teks: "Tetap mengajar dengan menyusun protokol evakuasi dan keselamatan bagi siswa.", bobot: 5, pembahasan: "Pengabdian profesi: tetap menjalankan tugas dengan memperhitungkan keselamatan siswa." }
      ]
    },
    {
      soal: "Saat radar navigasi lalu lintas udara nasional rusak dan berisiko memicu kecelakaan besar, Anda, teknisi utama, mendapat kabar rumah Anda mengalami kebakaran ringan. Tindakan yang mencerminkan unsur rela berkorban adalah ....",
      opsi: [
        { teks: "Menyerahkan perbaikan kepada teknisi magang agar dapat segera pulang.", bobot: 0, pembahasan: "Menyerahkan kepada teknisi magang membahayakan keselamatan penerbangan." },
        { teks: "Meminta otoritas bandara menunda semua jadwal pendaratan sampai urusan keluarga selesai.", bobot: 0, pembahasan: "Menunda pendaratan mengorbankan banyak orang demi kepentingan pribadi." },
        { teks: "Menghubungi pemadam kebakaran dan tetangga untuk menangani rumah, sambil menuntaskan perbaikan radar.", bobot: 5, pembahasan: "Rela berkorban: kepentingan umum didahulukan dan keluarga ditangani lewat bantuan pihak lain." },
        { teks: "Meminta staf mematikan radar agar tidak terjadi kesalahan pemanduan, lalu bergegas pulang.", bobot: 0, pembahasan: "Mematikan radar membahayakan penerbangan." },
        { teks: "Mengajukan izin darurat menunda perbaikan sampai keluarga dipastikan aman.", bobot: 0, pembahasan: "Menunda perbaikan membahayakan keselamatan penerbangan." }
      ]
    },
    {
      soal: "Radar pertahanan mendeteksi konvoi pesawat tempur asing berulang kali menerobos wilayah udara nasional tanpa izin dan berpotensi memicu agresi fisik. Menurut Sishankamrata, langkah respons yang tepat adalah ....",
      opsi: [
        { teks: "Menugaskan kementerian luar negeri menembak jatuh pesawat asing itu.", bobot: 0, pembahasan: "Kementerian luar negeri bertugas di bidang diplomasi." },
        { teks: "Mengerahkan kekuatan utama TNI untuk melakukan intersepsi udara dan memberi peringatan sesuai aturan.", bobot: 5, pembahasan: "TNI adalah kekuatan utama pertahanan terhadap ancaman militer dan bertindak sesuai aturan." },
        { teks: "Memerintahkan warga sipil di perbatasan mengangkat senjata dan membentuk barikade.", bobot: 0, pembahasan: "Warga sipil tidak diminta mengangkat senjata." },
        { teks: "Membiarkan manuver itu selama pesawat asing tidak menjatuhkan bom atau merusak fasilitas.", bobot: 0, pembahasan: "Membiarkan pelanggaran melemahkan kedaulatan." },
        { teks: "Meminta kepolisian daerah menindak pelanggaran wilayah udara secara represif.", bobot: 0, pembahasan: "Kepolisian tidak berwenang menangani pelanggaran wilayah udara oleh militer asing." }
      ]
    },
    {
      soal: "Sebagai ketua OSIS, Anda mendapati sebuah komunitas ekstrakurikuler secara tertutup menyebarkan doktrin intoleran dan anti-Pancasila kepada siswa baru. Langkah kewaspadaan dini yang paling mencerminkan bela negara di sekolah adalah ....",
      opsi: [
        { teks: "Membubarkan kegiatan itu secara paksa dengan mengerahkan massa siswa dari organisasi lain.", bobot: 0, pembahasan: "Pembubaran paksa melanggar aturan dan berpotensi memicu benturan." },
        { teks: "Melaporkan temuan itu secara berjenjang kepada kepala sekolah dan guru pembimbing untuk ditindaklanjuti.", bobot: 5, pembahasan: "Pelaporan kepada pihak berwenang di sekolah adalah bentuk kewaspadaan dini yang tepat." },
        { teks: "Membiarkan kegiatan itu karena setiap siswa berhak berserikat dan berkumpul.", bobot: 0, pembahasan: "Kebebasan berserikat tidak termasuk menyebarkan doktrin yang bertentangan dengan Pancasila." },
        { teks: "Menyusup ke dalam kajian itu untuk merekam video dan menyebarkannya ke media sosial.", bobot: 0, pembahasan: "Menyusup dan menyebarkan video melanggar privasi." },
        { teks: "Mengundang penceramah luar sekolah untuk kajian tandingan pada waktu yang sama.", bobot: 0, pembahasan: "Kajian tandingan pada waktu yang sama memicu benturan." }
      ]
    },
    {
      soal: "Anda cedera ringan saat akan mengikuti diklat prajabatan yang mewajibkan tes kesamaptaan, namun tetap dituntut lulus untuk penetapan status kepegawaian. Tindakan yang mencerminkan unsur kemampuan awal bela negara adalah ....",
      opsi: [
        { teks: "Melaporkan kondisi medis kepada panitia dan mengikuti tes fisik yang disesuaikan porsinya demi menjaga kesehatan.", bobot: 5, pembahasan: "Kemampuan awal bela negara berarti menjaga kesehatan jasmani dan rohani dengan jujur dan tertib." },
        { teks: "Memaksakan diri mengikuti semua tes fisik dengan intensitas maksimal untuk membuktikan semangat.", bobot: 0, pembahasan: "Memaksakan diri membahayakan kesehatan." },
        { teks: "Meminta surat sehat palsu agar diluluskan dari tes fisik.", bobot: 0, pembahasan: "Surat sehat palsu adalah pemalsuan." },
        { teks: "Mengundurkan diri dari diklat tahun ini dan meminta diikutkan pada gelombang berikutnya.", bobot: 0, pembahasan: "Mengundurkan diri menunda kewajiban." },
        { teks: "Membayar oknum instruktur agar nilai kesamaptaan dimanipulasi.", bobot: 0, pembahasan: "Menyuap instruktur adalah korupsi." }
      ]
    },
    {
      soal: "Instansi Anda membentuk tim perintis pos pelayanan terpadu di pulau terluar yang belum berlistrik 24 jam, tetapi tidak ada staf mendaftar karena tunjangannya sama dengan di pusat. Wujud bela negara nonfisik yang harus Anda ambil adalah ....",
      opsi: [
        { teks: "Mengajukan diri bertugas di pos perintis sebagai pengabdian profesi dan kerelaan berkorban demi negara.", bobot: 5, pembahasan: "Pengabdian profesi dan rela berkorban ditunjukkan dengan bersedia bertugas di daerah yang paling membutuhkan." },
        { teks: "Mengusulkan memakai tenaga harian lepas dari masyarakat setempat.", bobot: 0, pembahasan: "Menyerahkan tugas kepada tenaga lepas tidak menunjukkan pengorbanan sendiri." },
        { teks: "Mendukung program itu dengan membagikan brosur pendaftaran ke semua divisi.", bobot: 0, pembahasan: "Membagikan brosur belum menunjukkan pengorbanan." },
        { teks: "Bersedia mendaftar asalkan pimpinan menjamin tertulis promosi jabatan setelahnya.", bobot: 0, pembahasan: "Mensyaratkan imbalan menghilangkan sifat rela berkorban." },
        { teks: "Menggalang dana pegawai pusat untuk membangun akses listrik di pulau itu.", bobot: 0, pembahasan: "Menggalang dana tidak mengisi kebutuhan petugas." }
      ]
    },
    {
      soal: "Sebagai analis konten di kementerian komunikasi, Anda menemukan permainan gawai luar negeri populer di kalangan anak yang memuat misi tersembunyi melecehkan simbol negara dan mengajarkan separatisme. Langkah kewaspadaan dini yang prosedural adalah ....",
      opsi: [
        { teks: "Meminta semua ASN menghapus aplikasi itu dari gawai anak mereka.", bobot: 0, pembahasan: "Imbauan terbatas pada ASN tidak menyelesaikan penyebaran aplikasi." },
        { teks: "Meretas server pengembang permainan agar layanannya lumpuh.", bobot: 0, pembahasan: "Meretas server melanggar hukum." },
        { teks: "Mengabaikan konten itu karena dianggap fiksi hiburan.", bobot: 0, pembahasan: "Mengabaikan membiarkan ancaman berkembang." },
        { teks: "Melakukan kajian forensik digital dan merekomendasikan pemblokiran aplikasi secara resmi kepada kementerian berwenang.", bobot: 5, pembahasan: "Kajian yang objektif dan rekomendasi resmi adalah langkah prosedural yang sesuai kewenangan." },
        { teks: "Menyebarkan peringatan secara masif lewat akun media sosial pribadi.", bobot: 0, pembahasan: "Peringatan lewat akun pribadi tidak resmi dan memicu kepanikan." }
      ]
    },
    {
      soal: "Dalam evaluasi kinerja daerah, produktivitas aparatur menurun karena budaya menunda pekerjaan dan rendahnya motivasi kerja. Berdasarkan konsep ancaman, tantangan, hambatan, dan gangguan (ATHG), kemunduran kedisiplinan ini digolongkan sebagai ....",
      opsi: [
        { teks: "ancaman", bobot: 0, pembahasan: "Ancaman bersifat destruktif dan mengancam kedaulatan." },
        { teks: "tantangan", bobot: 0, pembahasan: "Tantangan berasal dari persaingan dan mengasah kemampuan." },
        { teks: "hambatan", bobot: 5, pembahasan: "Hambatan berasal dari kelemahan internal yang melemahkan sistem dari dalam." },
        { teks: "gangguan", bobot: 0, pembahasan: "Gangguan berasal dari luar." },
        { teks: "ancaman nirmiliter", bobot: 0, pembahasan: "Ancaman nirmiliter berasal dari bidang nonmiliter yang membahayakan kedaulatan." }
      ]
    }
  ]
};
