// Bank soal TWK - Nasionalisme
// Aturan: tiap soal punya 5 opsi; SATU opsi bobot 5 (benar), empat lainnya bobot 0 (salah).
// Teks miring ditulis dengan tag <i>...</i>. Baris baru pada soal ditulis \n.
// Tambahkan soal baru dengan menyalin blok { soal: ..., opsi: [...] } lalu beri koma.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL['nasionalisme'] = {
  indikator: "Nasionalisme",
  soal: [
    {
      soal: "Tren budaya populer asing di media sosial membuat sebagian generasi muda kurang bangga pada budaya sendiri. Sikap nasionalisme apa yang paling tepat bagi seorang ASN?",
      opsi: [
        { teks: "Membatasi peredaran produk budaya asing di seluruh wilayah agar identitas bangsa terlindungi.", bobot: 0, pembahasan: "Menutup diri secara total tidak sesuai dengan pergaulan global dan kebutuhan akan kemajuan." },
        { teks: "Memperluas penggunaan gaya hidup global dalam kegiatan masyarakat agar generasi muda merasa sejalan dengan dunia.", bobot: 0, pembahasan: "Menerima semua gaya hidup global tanpa penilaian dapat melunturkan jati diri bangsa." },
        { teks: "Mengusulkan pembatasan akses internet bagi generasi muda agar tidak terpapar tren asing.", bobot: 0, pembahasan: "Membatasi akses internet tidak menumbuhkan kebanggaan dan membatasi keterbukaan informasi." },
        { teks: "Menyerahkan urusan budaya kepada lembaga kebudayaan dan memusatkan diri pada tugas jabatan.", bobot: 0, pembahasan: "Menyerahkan urusan budaya kepada lembaga lain melepaskan peran ASN dalam menjaga kebanggaan pada budaya bangsa." },
        { teks: "Menerima unsur budaya global yang sesuai dengan nilai Pancasila sambil tetap memperkenalkan dan merawat budaya daerah.", bobot: 5, pembahasan: "Nasionalisme masa kini menerima hal baru yang sejalan dengan Pancasila, menolak yang bertentangan, dan tetap membanggakan budaya sendiri." }
      ]
    },
    {
      soal: "Di kantor Anda mulai muncul anggapan bahwa budaya daerah tertentu lebih baik daripada budaya daerah lain. Sikap nasionalisme yang paling tepat untuk menyikapinya adalah ....",
      opsi: [
        { teks: "Menyusun kelompok kerja berdasarkan kesamaan daerah asal agar komunikasi pegawai lebih lancar.", bobot: 0, pembahasan: "Pengelompokan menurut daerah asal memperkuat sekat kedaerahan." },
        { teks: "Menyamakan tata cara kerja dengan satu adat daerah agar tidak ada lagi perbedaan di kantor.", bobot: 0, pembahasan: "Menjadikan satu adat sebagai acuan justru memperkuat anggapan bahwa budaya itu paling unggul." },
        { teks: "Mengutamakan pelestarian adat daerah asal masing-masing pegawai di unit kerjanya.", bobot: 0, pembahasan: "Melestarikan adat sendiri baik, tetapi tidak menjawab anggapan antarbudaya yang tengah muncul." },
        { teks: "Mengajak pegawai dari berbagai daerah saling mengenal dan menghargai adat satu sama lain lewat kegiatan bersama.", bobot: 5, pembahasan: "Anggapan satu budaya paling unggul adalah etnosentrisme; nasionalisme Indonesia menjawabnya dengan saling mengenal dan menghormati budaya lain." },
        { teks: "Memperbanyak pelatihan kinerja agar perhatian pegawai beralih dari soal daerah asal.", bobot: 0, pembahasan: "Pelatihan kinerja tidak menyentuh pokok masalah sikap antarbudaya." }
      ]
    },
    {
      soal: "Instansi Anda mewajibkan pakaian dinas berbahan produk lokal pada hari tertentu. Sikap yang paling mencerminkan nasionalisme dalam menjalankan aturan tersebut adalah ....",
      opsi: [
        { teks: "Memakainya sesuai jadwal dan melaporkan rekan yang belum mematuhi kepada bagian kepegawaian.", bobot: 0, pembahasan: "Menaati jadwal dan melapor adalah wujud disiplin, bukan kebanggaan terhadap produk bangsa." },
        { teks: "Memakainya dengan bangga dan memperkenalkan produk lokal tersebut kepada rekan dan masyarakat.", bobot: 5, pembahasan: "Nasionalisme tampak pada kebanggaan dan upaya mengenalkan produk dalam negeri." },
        { teks: "Memakainya sambil mengusulkan agar seluruh pembelian barang impor di instansi dihentikan.", bobot: 0, pembahasan: "Menghentikan seluruh barang impor adalah penutupan diri yang tidak sesuai kebutuhan kemajuan." },
        { teks: "Memakainya pada hari yang ditentukan dan memakai pakaian biasa pada hari lainnya.", bobot: 0, pembahasan: "Hanya menaati aturan pada hari yang ditentukan belum menunjukkan kebanggaan terhadap produk bangsa." },
        { teks: "Memakainya sambil mengusulkan model pakaian dinas yang mengikuti mode internasional.", bobot: 0, pembahasan: "Mengikuti mode internasional tidak menunjukkan kebanggaan pada produk dan identitas bangsa sendiri." }
      ]
    },
    {
      soal: "Salah satu ikrar Sumpah Pemuda 1928 adalah menjunjung bahasa persatuan. Sikap ASN yang paling sejalan dengan ikrar itu dalam tugas sehari-hari adalah ....",
      opsi: [
        { teks: "Melayani seluruh warga tanpa membedakan daerah karena Nusantara adalah satu tanah air.", bobot: 0, pembahasan: "Ini berkaitan dengan ikrar satu tanah air." },
        { teks: "Mengutamakan kepentingan bangsa di atas perbedaan suku dalam memilih rekan kerja sama.", bobot: 0, pembahasan: "Ini berkaitan dengan ikrar satu bangsa." },
        { teks: "Mempelajari bahasa daerah rekan dari berbagai wilayah agar tugas berjalan lancar.", bobot: 0, pembahasan: "Bahasa daerah bermanfaat, tetapi bukan bahasa persatuan yang diikrarkan." },
        { teks: "Memakai bahasa Indonesia baku dalam surat dinas dan forum resmi.", bobot: 5, pembahasan: "Ikrar ketiga Sumpah Pemuda adalah menjunjung bahasa persatuan, yaitu bahasa Indonesia; ASN mewujudkannya lewat penggunaan bahasa Indonesia baku." },
        { teks: "Menguasai bahasa asing agar dapat mewakili instansi dalam pertemuan internasional.", bobot: 0, pembahasan: "Bahasa asing berguna untuk pergaulan dunia, tetapi bukan yang diikrarkan sebagai bahasa persatuan." }
      ]
    },
    {
      soal: "Seorang kepala bagian hanya menunjuk pegawai sedaerah untuk proyek penting karena yakin adat daerahnya paling baik dalam bekerja. Sikap tersebut paling tepat disebut ....",
      opsi: [
        { teks: "Chauvinisme", bobot: 0, pembahasan: "Chauvinisme adalah cinta tanah air berlebihan yang merendahkan bangsa lain." },
        { teks: "Etnosentrisme", bobot: 5, pembahasan: "Etnosentrisme adalah menilai kelompok atau budaya sendiri paling unggul dan menilai budaya lain dari standar sendiri, dalam lingkup antarsuku di dalam negeri." },
        { teks: "Patriotisme", bobot: 0, pembahasan: "Patriotisme adalah kerelaan berkorban demi tanah air." },
        { teks: "Radikalisme", bobot: 0, pembahasan: "Radikalisme adalah memaksakan perubahan dengan kekerasan." },
        { teks: "Individualisme", bobot: 0, pembahasan: "Individualisme mengutamakan kepentingan pribadi, bukan kelompok daerah." }
      ]
    },
    {
      soal: "Pemerintah daerah ingin menyatukan warga berbagai suku di kawasan transmigrasi dengan menonjolkan tujuan kemakmuran dan keadilan bersama. Faktor pembentuk bangsa yang paling mendasari pendekatan itu adalah ....",
      opsi: [
        { teks: "Cita-cita bersama untuk mencapai kemakmuran dan keadilan", bobot: 5, pembahasan: "Cita-cita bersama (faktor visi) berisi tujuan luhur seperti kemakmuran dan keadilan yang kelak dituangkan dalam Pembukaan UUD 1945." },
        { teks: "Keinginan bersama untuk merdeka", bobot: 0, pembahasan: "Keinginan merdeka berkaitan dengan tekad melepaskan diri dari penjajahan." },
        { teks: "Kesatuan tempat tinggal di wilayah Nusantara", bobot: 0, pembahasan: "Kesatuan tempat tinggal berkaitan dengan wilayah yang sama, yaitu Nusantara." },
        { teks: "Persamaan nasib akibat penjajahan yang panjang", bobot: 0, pembahasan: "Persamaan nasib berkaitan dengan penderitaan di bawah penjajahan." },
        { teks: "Kesamaan suku, ras, dan agama seluruh warga", bobot: 0, pembahasan: "Bangsa Indonesia tidak dibentuk atas kesamaan suku, ras, atau agama." }
      ]
    },
    {
      soal: "Seorang atlet tetap bertanding hingga akhir pada kejuaraan internasional meski cedera, demi meraih medali bagi Indonesia. Sikap tersebut paling tepat disebut ....",
      opsi: [
        { teks: "Nasionalisme", bobot: 0, pembahasan: "Nasionalisme berfokus pada sikap batin, kesetiaan pada identitas, dan persatuan." },
        { teks: "Chauvinisme", bobot: 0, pembahasan: "Chauvinisme adalah cinta tanah air berlebihan yang merendahkan bangsa lain." },
        { teks: "Etnosentrisme", bobot: 0, pembahasan: "Etnosentrisme adalah menilai budaya sendiri paling unggul." },
        { teks: "Patriotisme", bobot: 5, pembahasan: "Patriotisme berfokus pada tindakan rela berkorban dan mengambil risiko demi negara, melebihi tugas biasa." },
        { teks: "Radikalisme", bobot: 0, pembahasan: "Radikalisme adalah memaksakan perubahan dengan kekerasan." }
      ]
    },
    {
      soal: "Anda ingin ikut memperkuat kemandirian ekonomi nasional dari desa tempat tinggal Anda. Tindakan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengajukan bantuan sosial bagi warga prasejahtera kepada pemerintah daerah.", bobot: 0, pembahasan: "Bantuan sosial menolong warga, tetapi tidak membangun kemandirian usaha." },
        { teks: "Mengikuti pelatihan keterampilan kerja agar dapat bekerja di perusahaan asing di kota besar.", bobot: 0, pembahasan: "Bekerja di perusahaan asing tidak memperkuat usaha dalam negeri." },
        { teks: "Membantu pemerintah desa mengurus dokumen kependudukan warga.", bobot: 0, pembahasan: "Mengurus dokumen adalah layanan administrasi, bukan penguatan ekonomi." },
        { teks: "Mengembangkan usaha kecil berbahan hasil desa dan memasarkannya di dalam negeri.", bobot: 5, pembahasan: "Penguatan ekonomi nasional diwujudkan lewat usaha dalam negeri seperti UMKM dan penggunaan produk lokal." },
        { teks: "Mengusulkan agar pasar desa tidak lagi menjual barang impor.", bobot: 0, pembahasan: "Melarang barang impor tidak membangun usaha dan membatasi pilihan warga." }
      ]
    },
    {
      soal: "Warga sebuah kota besar mulai jarang bergotong royong dan lebih bangga pada budaya pop asing daripada budaya daerahnya. Dampak globalisasi tersebut paling tepat disebut ....",
      opsi: [
        { teks: "Perang informasi dan penyebaran hoaks", bobot: 0, pembahasan: "Perang informasi berkaitan dengan hoaks yang memecah persatuan." },
        { teks: "Kapitalisme dan konsumerisme", bobot: 0, pembahasan: "Kapitalisme dan konsumerisme berkaitan dengan sistem ekonomi yang berorientasi keuntungan pribadi dan bertentangan dengan Pasal 33." },
        { teks: "Disorientasi nilai", bobot: 5, pembahasan: "Disorientasi nilai adalah lunturnya budaya lokal dan nilai gotong royong karena nilai individualisme dan budaya asing." },
        { teks: "Gangguan terhadap batas wilayah negara", bobot: 0, pembahasan: "Gangguan batas wilayah bukan dampak globalisasi budaya." },
        { teks: "Ketergantungan pada barang impor", bobot: 0, pembahasan: "Ketergantungan impor berkaitan dengan ekonomi, bukan nilai sosial." }
      ]
    },
    {
      soal: "Anda ingin mengajak pemuda berbagai suku dan agama memperkuat persatuan melalui kegiatan di bidang kebudayaan. Kegiatan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengadakan diskusi akademis tentang kebijakan pembangunan di daerah tertinggal.", bobot: 0, pembahasan: "Diskusi kebijakan berada di bidang politik dan pembangunan." },
        { teks: "Mengadakan pelatihan literasi digital tentang cara menyampaikan aspirasi.", bobot: 0, pembahasan: "Literasi digital berkaitan dengan kewaspadaan terhadap informasi, bukan kebudayaan." },
        { teks: "Menyelenggarakan penanaman mangrove untuk memulihkan lahan pesisir.", bobot: 0, pembahasan: "Pemulihan lahan pesisir berkaitan dengan lingkungan hidup." },
        { teks: "Mengoordinasikan bantuan logistik bagi wilayah yang terkena bencana alam.", bobot: 0, pembahasan: "Bantuan bencana berkaitan dengan kegiatan kemanusiaan." },
        { teks: "Ikut serta dalam pementasan seni yang menampilkan keberagaman budaya Nusantara.", bobot: 5, pembahasan: "Persatuan di bidang sosial budaya diperkuat lewat kegiatan seni yang menghargai ragam budaya." }
      ]
    },
    {
      soal: "Para pendiri bangsa menyetujui penghapusan tujuh kata pada sila pertama Piagam Jakarta setelah ada keberatan dari wilayah Indonesia timur. Sikap itu paling menunjukkan ....",
      opsi: [
        { teks: "ketaatan pada jadwal sidang agar UUD 1945 selesai tepat waktu", bobot: 0, pembahasan: "Kesepakatan itu tidak didasarkan pada soal jadwal." },
        { teks: "tanggung jawab menyelesaikan rumusan dasar negara sebelum pasukan Sekutu tiba", bobot: 0, pembahasan: "Alasan utamanya bukan tenggat kedatangan Sekutu, melainkan persatuan." },
        { teks: "sikap mengutamakan persatuan seluruh wilayah di atas kepentingan golongan", bobot: 5, pembahasan: "Penghapusan tujuh kata adalah kompromi demi persatuan bangsa, mencerminkan nasionalisme yang mendahulukan kepentingan bersama." },
        { teks: "konsistensi mempertahankan rumusan awal hasil kesepakatan Panitia Sembilan", bobot: 0, pembahasan: "Rumusan awal justru diubah, bukan dipertahankan." },
        { teks: "keberanian menolak arahan pihak Jepang dalam penyusunan konstitusi", bobot: 0, pembahasan: "Penghapusan itu berasal dari aspirasi wilayah Indonesia timur, bukan penolakan terhadap Jepang." }
      ]
    },
    {
      soal: "Kementerian Kebudayaan ingin mengurangi prasangka antarsuku di berbagai provinsi melalui kegiatan seni. Program yang paling tepat adalah ....",
      opsi: [
        { teks: "Menyelenggarakan festival seni yang mensyaratkan kolaborasi karya antara seniman dari berbagai daerah.", bobot: 5, pembahasan: "Kolaborasi lintas daerah mempertemukan warga, mencari persamaan, dan mengurangi prasangka antarsuku." },
        { teks: "Memberi dana bantuan kepada sanggar seni lokal agar seniman tradisional tetap berkarya.", bobot: 0, pembahasan: "Bantuan dana menjaga kelestarian seni, tetapi tidak mengurangi prasangka." },
        { teks: "Menggelar pekan kesenian dengan penampilan terpisah dari tiap daerah agar semua mendapat kesempatan tampil.", bobot: 0, pembahasan: "Penampilan terpisah tidak mempertemukan warga antardaerah." },
        { teks: "Menerbitkan buku yang menguraikan keunggulan budaya tiap suku bangsa di setiap pulau besar.", bobot: 0, pembahasan: "Buku keunggulan tiap suku mudah memicu perbandingan antarsuku." },
        { teks: "Menetapkan jam tayang khusus kesenian daerah pada stasiun televisi nasional.", bobot: 0, pembahasan: "Jam tayang khusus menampilkan seni daerah, tetapi tidak mempertemukan warga antarsuku." }
      ]
    },
    {
      soal: "Seorang mahasiswa ingin menumbuhkan rasa kebangsaan di kalangan teman-temannya melalui media sosial. Kegiatan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengunggah konten yang khusus menampilkan budaya daerah asalnya agar dikenal luas.", bobot: 0, pembahasan: "Konten budaya daerah asal saja belum menumbuhkan rasa kebangsaan yang menyeluruh." },
        { teks: "Mengadakan upacara adat daerah asal sebagai cara utama menjaga warisan leluhur.", bobot: 0, pembahasan: "Upacara adat daerah menjaga budaya daerah, tetapi tidak menjangkau teman-teman melalui media sosial." },
        { teks: "Membagikan dokumentasi kegiatan sehari-hari warga di lingkungan tempat tinggalnya.", bobot: 0, pembahasan: "Dokumentasi kegiatan harian tidak terkait langsung dengan penumbuhan rasa kebangsaan." },
        { teks: "Membuat kampanye daring yang mengenalkan ragam budaya Nusantara kepada para pengikutnya.", bobot: 5, pembahasan: "Nasionalisme generasi muda di era digital diwujudkan dengan memanfaatkan platform digital untuk mengenalkan keberagaman budaya bangsa." },
        { teks: "Menghadiri seluruh upacara kenegaraan sebagai bentuk ketaatan pada kewajiban warga negara.", bobot: 0, pembahasan: "Menghadiri upacara adalah kegiatan penting, tetapi tidak memanfaatkan media sosial yang menjadi sasaran." }
      ]
    },
    {
      soal: "Anda ditugaskan menyiapkan perlengkapan delegasi Indonesia untuk pertemuan internasional di luar negeri. Pilihan yang paling mencerminkan nasionalisme sebagai identitas bangsa adalah ....",
      opsi: [
        { teks: "Memilih perlengkapan berstandar internasional dari produsen luar negeri agar delegasi tampil profesional.", bobot: 0, pembahasan: "Memilih produk luar negeri tidak menonjolkan identitas bangsa." },
        { teks: "Memilih produk dan karya industri dalam negeri sebagai perlengkapan dan cendera mata delegasi.", bobot: 5, pembahasan: "Memakai dan memperkenalkan produk dalam negeri di forum internasional menunjukkan kebanggaan pada identitas bangsa." },
        { teks: "Memakai bahasa Indonesia dan bahasa asing secara bergantian pada setiap dokumen delegasi.", bobot: 0, pembahasan: "Pergantian bahasa tidak secara khusus menunjukkan identitas bangsa dan tidak terkait dengan perlengkapan." },
        { teks: "Menekan biaya perlengkapan serendah mungkin agar anggaran negara dapat dihemat.", bobot: 0, pembahasan: "Penghematan anggaran berkaitan dengan tata kelola keuangan, bukan identitas bangsa." },
        { teks: "Menyerahkan pemilihan perlengkapan kepada penyelenggara agar sesuai dengan negara tuan rumah.", bobot: 0, pembahasan: "Menyerahkan pilihan kepada tuan rumah melepaskan kesempatan menampilkan identitas bangsa." }
      ]
    },
    {
      soal: "Banyak warga merasa iri setelah membandingkan hidupnya dengan unggahan orang lain di media sosial, sehingga hubungan antarwarga memburuk. Tindakan yang paling tepat untuk mencegah konflik dari sisi teknologi informasi adalah ....",
      opsi: [
        { teks: "Mengatur waktu dan jenis tontonan di media sosial agar tidak terpengaruh unggahan pamer.", bobot: 5, pembahasan: "Dari sisi teknologi informasi, pencegahannya adalah mengendalikan penggunaan dan paparan media sosial secara bijak." },
        { teks: "Memfokuskan pengembangan diri pada keunggulan pribadi tanpa memperhatikan lingkungan.", bobot: 0, pembahasan: "Mengabaikan lingkungan tidak menyelesaikan renggangnya hubungan antarwarga." },
        { teks: "Menghentikan kebiasaan membandingkan penghasilan dengan tetangga di lingkungan sekitar.", bobot: 0, pembahasan: "Langkah ini berkaitan dengan perbandingan langsung, bukan penggunaan teknologi informasi." },
        { teks: "Menghindari seluruh informasi di internet yang dapat memicu perasaan negatif.", bobot: 0, pembahasan: "Menghindari semua informasi tidak realistis dan menutup manfaat internet." },
        { teks: "Mengadakan pertemuan warga untuk membahas penyebab rasa iri secara bersama.", bobot: 0, pembahasan: "Pertemuan warga adalah pendekatan sosial, bukan pendekatan teknologi informasi." }
      ]
    },
    {
      soal: "Beberapa remaja di lingkungan Anda mulai bersikap tertutup dan memusuhi pemeluk agama lain. Langkah sosial yang paling tepat untuk mencegah radikalisme adalah ....",
      opsi: [
        { teks: "Mengajak remaja ikut kerja bakti dan bakti sosial bersama pemuda dari berbagai agama.", bobot: 5, pembahasan: "Interaksi langsung dalam kegiatan bersama lintas agama menumbuhkan saling percaya dan toleransi." },
        { teks: "Memberi pelatihan usaha agar remaja memiliki penghasilan sendiri.", bobot: 0, pembahasan: "Pelatihan usaha berkaitan dengan ekonomi, bukan sikap tertutup." },
        { teks: "Mengadakan pelatihan kewaspadaan terpusat bagi remaja di daerah rawan konflik.", bobot: 0, pembahasan: "Pelatihan kewaspadaan terpusat tidak membangun hubungan antaragama." },
        { teks: "Membagikan poster tentang pentingnya hidup rukun kepada remaja.", bobot: 0, pembahasan: "Poster hanya memberi tahu, tidak mempertemukan remaja dengan kelompok lain." },
        { teks: "Bekerja sama dengan aparat keamanan untuk memantau kegiatan remaja tersebut.", bobot: 0, pembahasan: "Pemantauan aparat tidak menumbuhkan toleransi." }
      ]
    },
    {
      soal: "Warga berbagai suku dan agama di kompleks Anda bergotong royong memperbaiki saluran air. Manfaat utama kegiatan itu bagi kehidupan berbangsa adalah ....",
      opsi: [
        { teks: "Menjaga batas wilayah negara dari pelanggaran.", bobot: 0, pembahasan: "Menjaga batas wilayah berkaitan dengan pertahanan dan keamanan." },
        { teks: "Meningkatkan pendapatan nasional melalui penyatuan produksi masyarakat.", bobot: 0, pembahasan: "Kegiatan perbaikan saluran air tidak ditujukan untuk menambah pendapatan nasional." },
        { teks: "Memperkuat kebersamaan warga yang berbeda latar belakang.", bobot: 5, pembahasan: "Gotong royong memperkuat persatuan dan kebersamaan di tengah keberagaman." },
        { teks: "Menjaga pemerintahan dari pengaruh kebijakan asing.", bobot: 0, pembahasan: "Pengaruh kebijakan asing tidak berkaitan dengan kegiatan warga ini." },
        { teks: "Memperbaiki aturan hukum di bidang pelayanan publik.", bobot: 0, pembahasan: "Perbaikan aturan hukum bukan hasil kegiatan warga ini." }
      ]
    },
    {
      soal: "Panitia organisasi mahasiswa di kampus Anda hendak menetapkan syarat bahwa ketua harus berasal dari suku mayoritas di daerah itu. Sikap yang paling sesuai dengan nasionalisme Indonesia adalah ....",
      opsi: [
        { teks: "Menyetujui syarat itu karena sudah menjadi kebiasaan setempat selama bertahun-tahun.", bobot: 0, pembahasan: "Kebiasaan yang membedakan suku tidak dapat dijadikan alasan." },
        { teks: "Mengusulkan agar jabatan ketua dibagi bergiliran antarsuku untuk menjaga keseimbangan.", bobot: 0, pembahasan: "Pergiliran antarsuku tetap memakai asal suku sebagai ukuran." },
        { teks: "Mengusulkan syarat berdasarkan kemampuan dan komitmen calon, apa pun asal sukunya.", bobot: 5, pembahasan: "Nasionalisme Indonesia menolak diskriminasi dan etnosentrisme; kriteria yang adil adalah kemampuan dan komitmen." },
        { teks: "Menyarankan syarat itu ditinjau setelah masa kepengurusan ini selesai.", bobot: 0, pembahasan: "Menunda perubahan membiarkan syarat yang membeda-bedakan tetap berlaku." },
        { teks: "Menyerahkan penentuan syarat kepada pembina organisasi.", bobot: 0, pembahasan: "Menyerahkan keputusan tidak menyelesaikan persoalan prinsip." }
      ]
    },
    {
      soal: "Pada 1998 terjadi gelombang tuntutan perubahan yang mengakhiri masa Orde Baru. Faktor yang paling mendasari tuntutan itu adalah ....",
      opsi: [
        { teks: "krisis ekonomi, politik, dan hukum yang menurunkan kepercayaan rakyat", bobot: 5, pembahasan: "Krisis di berbagai bidang menurunkan kepercayaan rakyat dan memicu Reformasi." },
        { teks: "keinginan mengganti Presiden dengan tokoh dari golongan sipil", bobot: 0, pembahasan: "Pergantian sosok pemimpin adalah hasil, bukan sebab mendasar." },
        { teks: "kebutuhan merumuskan ideologi baru yang menjamin kebebasan sipil", bobot: 0, pembahasan: "Pancasila tetap menjadi dasar negara pada masa Reformasi." },
        { teks: "kebutuhan memusatkan kewenangan agar pembangunan nasional tetap cepat", bobot: 0, pembahasan: "Reformasi justru menuntut pembagian kewenangan lewat otonomi daerah." },
        { teks: "tuntutan menyusun ulang kabinet karena wakil golongan dinilai tidak seimbang", bobot: 0, pembahasan: "Susunan kabinet bukan faktor mendasar tuntutan perubahan." }
      ]
    },
    {
      soal: "Pemerintah daerah ingin mengurangi sikap etnosentrisme di kalangan siswa. Langkah yang paling tepat adalah ....",
      opsi: [
        { teks: "Menetapkan satu kebudayaan daerah sebagai muatan lokal wajib di sekolah.", bobot: 0, pembahasan: "Menetapkan satu budaya daerah memperkuat anggapan budaya itu lebih penting." },
        { teks: "Menyediakan sarana pengembangan tradisi daerah sebagai pusat pergaulan siswa.", bobot: 0, pembahasan: "Fokus pada tradisi daerah sendiri memperkuat pergaulan sesama daerah." },
        { teks: "Mengadakan pertemuan antara kelompok siswa yang berseberangan pendapat.", bobot: 0, pembahasan: "Pertemuan kelompok berseberangan tidak berkaitan langsung dengan etnosentrisme." },
        { teks: "Melibatkan siswa dalam kepanitiaan peringatan hari besar nasional.", bobot: 0, pembahasan: "Kepanitiaan hari besar bersifat seremonial dan tidak mengenalkan budaya antardaerah." },
        { teks: "Mengadakan pertukaran pelajar antardaerah agar siswa mengenal budaya lain secara langsung.", bobot: 5, pembahasan: "Etnosentrisme dikurangi dengan mengenal dan menghargai budaya lain melalui pengalaman langsung." }
      ]
    },
    {
      soal: "Di sebuah kota, warga dari berbagai daerah sering mengikuti perayaan budaya satu sama lain. Dampak yang paling mungkin bagi nasionalisme adalah ....",
      opsi: [
        { teks: "Nilai kearifan lokal disatukan menjadi satu bentuk.", bobot: 0, pembahasan: "Menyatukan kearifan lokal menjadi satu bentuk meniadakan keberagaman." },
        { teks: "Saling pengertian antarbudaya meningkat sehingga kebersamaan warga menguat.", bobot: 5, pembahasan: "Interaksi antarbudaya meningkatkan pemahaman dan memperkuat persatuan." },
        { teks: "Pengawasan perayaan tradisi diperketat untuk mencegah gesekan.", bobot: 0, pembahasan: "Pengawasan ketat tidak menumbuhkan kebersamaan." },
        { teks: "Pengembangan budaya dipusatkan pada satu identitas yang dominan.", bobot: 0, pembahasan: "Memusatkan pada satu identitas mengabaikan budaya lain." },
        { teks: "Fungsi penjagaan batas wilayah dialihkan kepada lembaga adat.", bobot: 0, pembahasan: "Menjaga batas wilayah tidak berkaitan dengan perayaan budaya." }
      ]
    },
    {
      soal: "Sarekat Dagang Islam dibentuk pada awal abad ke-20 oleh para pedagang pribumi. Tujuan utama organisasi itu adalah ....",
      opsi: [
        { teks: "Meningkatkan mutu pendidikan masyarakat di daerah pedesaan.", bobot: 0, pembahasan: "Pendidikan adalah sasaran utama Budi Utomo." },
        { teks: "Mengirim wakil kaum intelektual untuk berunding dengan pemerintah kolonial tentang kemerdekaan.", bobot: 0, pembahasan: "Perundingan oleh kaum intelektual bukan tujuan SDI." },
        { teks: "Menyediakan persediaan senjata bagi kelompok perlawanan di daerah.", bobot: 0, pembahasan: "SDI bukan organisasi perlawanan bersenjata." },
        { teks: "Memperjuangkan kesamaan kedudukan hukum antara penguasa dan rakyat.", bobot: 0, pembahasan: "Kesamaan kedudukan hukum bukan tujuan utama SDI." },
        { teks: "Menghimpun pedagang pribumi untuk memperkuat usaha dan melawan monopoli perdagangan.", bobot: 5, pembahasan: "Sarekat Dagang Islam memperjuangkan kekuatan ekonomi pribumi menghadapi monopoli pedagang asing." }
      ]
    },
    {
      soal: "Budi Utomo didirikan pada 1908 oleh para pelajar STOVIA. Sasaran utama perjuangan organisasi itu adalah ....",
      opsi: [
        { teks: "Menggalang perlawanan fisik di tingkat daerah untuk mendesak penyerahan kekuasaan.", bobot: 0, pembahasan: "Perjuangan fisik daerah adalah pola sebelum 1908." },
        { teks: "Menyeragamkan budaya daerah ke dalam satu sistem pemerintahan terpusat.", bobot: 0, pembahasan: "Budi Utomo tidak menyeragamkan budaya." },
        { teks: "Membentuk persekutuan pekerja untuk menentang sistem ekonomi kolonial.", bobot: 0, pembahasan: "Persekutuan pekerja bukan sasaran Budi Utomo." },
        { teks: "Mengalihkan pengelolaan anggaran dari pemerintah asing kepada dewan perwakilan.", bobot: 0, pembahasan: "Pengelolaan anggaran bukan sasaran Budi Utomo." },
        { teks: "Meningkatkan pendidikan dan kesadaran intelektual sebagai dasar kemajuan bangsa.", bobot: 5, pembahasan: "Budi Utomo mengubah perjuangan dari fisik menjadi perjuangan intelektual dan diplomasi yang terorganisasi, dimulai dari pendidikan." }
      ]
    },
    {
      soal: "Dalam sidang BPUPKI dan PPKI, perbedaan pandangan antara golongan Islam dan golongan nasionalis diselesaikan melalui perundingan hingga tercapai kesepakatan. Pelajaran dari proses itu adalah ....",
      opsi: [
        { teks: "Dasar negara harus mengistimewakan golongan yang paling berperan dalam perjuangan.", bobot: 0, pembahasan: "Dasar negara tidak mengistimewakan satu golongan." },
        { teks: "Dasar negara disepakati melalui musyawarah yang menampung keberagaman pandangan.", bobot: 5, pembahasan: "Pancasila dan UUD 1945 disepakati lewat musyawarah dan kompromi, termasuk penghapusan tujuh kata demi persatuan." },
        { teks: "Perbedaan pandangan perlu disederhanakan agar kesepakatan tercapai lebih cepat.", bobot: 0, pembahasan: "Perbedaan pandangan dibahas, bukan disederhanakan." },
        { teks: "Arah negara ditentukan melalui pemungutan suara agar ideologinya seragam.", bobot: 0, pembahasan: "Dasar negara disepakati lewat musyawarah, bukan pemungutan suara." },
        { teks: "Penyusunan tata negara berisiko memecah bangsa jika tidak dibatasi pemerintah militer.", bobot: 0, pembahasan: "Pemerintah militer tidak menjadi syarat kesepakatan." }
      ]
    },
    {
      soal: "Perjuangan rakyat mempertahankan kemerdekaan setelah Proklamasi 1945 memberi pelajaran bagi pembangunan nasional masa kini. Pelajaran yang paling tepat adalah ....",
      opsi: [
        { teks: "Pembiayaan negara perlu dipusatkan pada sektor pertahanan agar aparatur berkualitas.", bobot: 0, pembahasan: "Pemusatan pembiayaan pada pertahanan bukan pelajaran utama." },
        { teks: "Ketahanan sosial masyarakat bergantung pada kestabilan investasi.", bobot: 0, pembahasan: "Ketahanan sosial tidak bergantung pada investasi." },
        { teks: "Percepatan pembangunan fisik lebih mudah bila tidak ada aturan yang menghambat.", bobot: 0, pembahasan: "Pembangunan tetap memerlukan aturan." },
        { teks: "Kesadaran dan kebersamaan seluruh rakyat menjadi kekuatan pemersatu dalam menggerakkan pembangunan.", bobot: 5, pembahasan: "Perjuangan mempertahankan kemerdekaan menunjukkan kekuatan kebersamaan rakyat yang juga diperlukan dalam pembangunan." },
        { teks: "Sengketa dengan negara lain sebaiknya diselesaikan lewat perundingan, bukan perlawanan.", bobot: 0, pembahasan: "Perjuangan 1945 menggabungkan perlawanan dan perundingan; ini bukan pelajaran untuk pembangunan." }
      ]
    },
    {
      soal: "Pada saat Proklamasi 17 Agustus 1945, Indonesia sudah memiliki wilayah dan rakyat. Syarat berdirinya negara yang disempurnakan melalui sidang PPKI 18 Agustus 1945 adalah ....",
      opsi: [
        { teks: "pengakuan dari negara-negara tetangga", bobot: 0, pembahasan: "Pengakuan negara lain adalah unsur pengakuan, bukan hasil sidang PPKI." },
        { teks: "perjanjian damai dengan Belanda", bobot: 0, pembahasan: "Perjanjian dengan Belanda bukan syarat berdirinya negara." },
        { teks: "pembentukan angkatan bersenjata nasional", bobot: 0, pembahasan: "Pembentukan angkatan bersenjata bukan hasil utama sidang itu." },
        { teks: "penetapan lagu kebangsaan dan bendera negara", bobot: 0, pembahasan: "Bendera dan lagu kebangsaan sudah ada sebelumnya." },
        { teks: "pengesahan UUD 1945 serta pemilihan Presiden dan Wakil Presiden", bobot: 5, pembahasan: "Sidang PPKI melengkapi unsur pemerintahan dengan mengesahkan UUD 1945 dan memilih Presiden dan Wakil Presiden." }
      ]
    },
    {
      soal: "Ciri budaya bangsa Indonesia yang paling berfungsi mengikat warga yang beragam adalah ....",
      opsi: [
        { teks: "penyelesaian perkara oleh peradilan adat di tiap daerah", bobot: 0, pembahasan: "Peradilan adat khas daerah, bukan pengikat seluruh bangsa." },
        { teks: "kepatuhan warga pada aturan yang ditetapkan aparat", bobot: 0, pembahasan: "Kepatuhan pada aturan bukan ciri budaya yang mengikat." },
        { teks: "pengaturan hubungan sosial berdasarkan perbedaan hak tiap kelompok", bobot: 0, pembahasan: "Perbedaan hak tiap kelompok bertentangan dengan persatuan." },
        { teks: "kerja sama sukarela warga menyelesaikan kepentingan bersama (gotong royong)", bobot: 5, pembahasan: "Gotong royong adalah nilai budaya yang menyatukan warga lintas suku dan agama." },
        { teks: "pengamanan wilayah secara mandiri oleh forum musyawarah warga", bobot: 0, pembahasan: "Pengamanan wilayah adalah tugas aparat negara." }
      ]
    },
    {
      soal: "Sekolah mengajarkan tarian, lagu daerah, dan sejarah lokal kepada siswa sejak sekolah dasar. Langkah itu pada hakikatnya merupakan bentuk ....",
      opsi: [
        { teks: "diplomasi budaya dalam hubungan internasional", bobot: 0, pembahasan: "Diplomasi budaya ditujukan ke luar negeri." },
        { teks: "penyesuaian pembangunan dengan kemajuan teknologi", bobot: 0, pembahasan: "Teknologi bukan fokus kegiatan ini." },
        { teks: "pembiasaan tata krama sosial di sekolah dasar", bobot: 0, pembahasan: "Tata krama berbeda dengan pelestarian budaya." },
        { teks: "penguatan ikatan emosional dalam keluarga besar", bobot: 0, pembahasan: "Ikatan keluarga bukan sasaran kegiatan ini." },
        { teks: "pelestarian warisan budaya bangsa", bobot: 5, pembahasan: "Mengenalkan budaya sejak dini adalah pelestarian warisan agar identitas bangsa berlanjut." }
      ]
    },
    {
      soal: "Seorang siswa menyebut Budi Utomo (1908) dan Sumpah Pemuda (1928) sebagai tahap berurutan perjuangan bangsa. Pernyataan yang paling tepat tentang keduanya adalah ....",
      opsi: [
        { teks: "Budi Utomo menyadarkan perlunya gerakan terorganisasi, sedangkan Sumpah Pemuda menyatukan ikrar satu nusa, bangsa, dan bahasa.", bobot: 5, pembahasan: "Budi Utomo adalah awal kebangkitan nasional, dan Sumpah Pemuda mengikrarkan satu nusa, satu bangsa, satu bahasa." },
        { teks: "Budi Utomo mengucapkan ikrar satu bangsa, sedangkan Sumpah Pemuda mendirikan organisasi modern pertama.", bobot: 0, pembahasan: "Urutan peran tertukar." },
        { teks: "Budi Utomo menyatukan perlawanan fisik daerah, sedangkan Sumpah Pemuda mengakhiri penjajahan.", bobot: 0, pembahasan: "Budi Utomo bukan perlawanan fisik, dan penjajahan belum berakhir pada 1928." },
        { teks: "Budi Utomo menetapkan dasar negara, sedangkan Sumpah Pemuda menetapkan bentuk negara.", bobot: 0, pembahasan: "Dasar negara ditetapkan 18 Agustus 1945." },
        { teks: "Keduanya sama-sama memproklamasikan kemerdekaan kepada dunia internasional.", bobot: 0, pembahasan: "Proklamasi dilakukan pada 17 Agustus 1945." }
      ]
    },
    {
      soal: "Pemuda dari berbagai organisasi daerah menyatakan mengakui Indonesia sebagai satu tanah air dengan Nusantara sebagai tempat tinggal bersama. Ikrar itu adalah ....",
      opsi: [
        { teks: "Satu Bangsa", bobot: 0, pembahasan: "Satu Bangsa berkaitan dengan persamaan nasib dan identitas." },
        { teks: "Satu Bahasa", bobot: 0, pembahasan: "Satu Bahasa berkaitan dengan bahasa Indonesia sebagai bahasa persatuan." },
        { teks: "Satu Nusa", bobot: 5, pembahasan: "Mengakui wilayah Nusantara sebagai satu tempat tinggal adalah ikrar Satu Nusa." },
        { teks: "Satu Negara", bobot: 0, pembahasan: "Satu Negara bukan bunyi ikrar Sumpah Pemuda." },
        { teks: "Satu Pemerintahan", bobot: 0, pembahasan: "Satu Pemerintahan bukan bunyi ikrar Sumpah Pemuda." }
      ]
    },
    {
      soal: "Jika semangat Sumpah Pemuda mulai dilupakan dalam kehidupan masyarakat, dampak yang paling mungkin bagi ketahanan negara adalah ....",
      opsi: [
        { teks: "Kebersamaan warga melemah sehingga persatuan masyarakat mudah retak.", bobot: 5, pembahasan: "Sumpah Pemuda adalah pengikat persatuan; bila dilupakan, kebersamaan melemah." },
        { teks: "Penyerapan teknologi informasi menjadi lambat.", bobot: 0, pembahasan: "Penyerapan teknologi tidak terkait langsung." },
        { teks: "Kepatuhan warga membayar pajak menurun.", bobot: 0, pembahasan: "Kepatuhan pajak tidak terkait langsung." },
        { teks: "Investor asing menarik modalnya.", bobot: 0, pembahasan: "Penarikan modal bukan dampak langsung." },
        { teks: "Penolakan publik terhadap undang-undang agraria meningkat.", bobot: 0, pembahasan: "Penolakan undang-undang agraria bukan dampak langsung." }
      ]
    },
    {
      soal: "Warga berbagai suku di sebuah desa ingin menerapkan semangat Sumpah Pemuda dalam kehidupan sehari-hari. Kegiatan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengikuti pelatihan keterampilan kerja secara individu di balai latihan.", bobot: 0, pembahasan: "Pelatihan individu tidak mempersatukan warga." },
        { teks: "Membentuk kelompok kerja bersama lintas warga untuk memperbaiki fasilitas desa.", bobot: 5, pembahasan: "Kerja sama lintas warga mewujudkan persatuan dan gotong royong sesuai semangat Sumpah Pemuda." },
        { teks: "Membagi tugas menjaga ketertiban di lingkungan keluarga masing-masing.", bobot: 0, pembahasan: "Pembagian tugas dalam keluarga tidak menyatukan warga antarsuku." },
        { teks: "Menegakkan kehadiran tepat waktu pada acara seremonial sekolah dasar.", bobot: 0, pembahasan: "Kehadiran tepat waktu berkaitan dengan disiplin." },
        { teks: "Menyusun laporan hasil kerja bagian operasional kantor desa secara tertib.", bobot: 0, pembahasan: "Laporan kerja berkaitan dengan tertib administrasi." }
      ]
    },
    {
      soal: "Dalam sebuah diskusi, peserta bertanya peristiwa sejarah apa yang menjadi fondasi sosiologis terbentuknya Negara Kesatuan Republik Indonesia. Jawaban yang paling tepat adalah ....",
      opsi: [
        { teks: "Budi Utomo 1908", bobot: 0, pembahasan: "Budi Utomo adalah awal kebangkitan nasional." },
        { teks: "Sumpah Pemuda 1928", bobot: 5, pembahasan: "Ikrar Sumpah Pemuda menjadi dasar sosiologis kesatuan bangsa dan negara." },
        { teks: "Proklamasi Kemerdekaan 1945", bobot: 0, pembahasan: "Proklamasi adalah fondasi hukum dan politis." },
        { teks: "Sidang PPKI 18 Agustus 1945", bobot: 0, pembahasan: "Sidang PPKI mengesahkan UUD dan pemerintahan." },
        { teks: "Konferensi Meja Bundar 1949", bobot: 0, pembahasan: "KMB berkaitan dengan pengakuan kedaulatan." }
      ]
    },
    {
      soal: "Perlawanan bangsa Indonesia berubah dari perlawanan lokal yang sporadis menjadi pergerakan nasional yang terorganisasi. Pelajaran penting dari perubahan itu adalah ....",
      opsi: [
        { teks: "Kemerdekaan dicapai jika waktu perundingan disesuaikan secara fleksibel.", bobot: 0, pembahasan: "Fleksibilitas waktu perundingan bukan pelajaran utama." },
        { teks: "Perubahan susunan perlawanan bergantung pada kecerdasan pimpinan daerah.", bobot: 0, pembahasan: "Keberhasilan tidak bergantung pada satu pimpinan daerah." },
        { teks: "Perubahan strategi pertahanan langsung mengurangi kekuatan pasukan penjajah.", bobot: 0, pembahasan: "Perubahan strategi tidak langsung melemahkan penjajah." },
        { teks: "Persatuan berbagai kelompok menjadi kekuatan utama membangun ketahanan bangsa.", bobot: 5, pembahasan: "Perjuangan menjadi kuat saat berbagai kelompok bersatu dalam gerakan terorganisasi." },
        { teks: "Kesamaan visi kelompok adalah faktor kecil dalam pembangunan infrastruktur.", bobot: 0, pembahasan: "Kesamaan visi bukan faktor kecil." }
      ]
    },
    {
      soal: "Nilai Sumpah Pemuda yang paling relevan diteladani generasi muda saat ini adalah ....",
      opsi: [
        { teks: "komitmen bersama menyatukan keberagaman dalam satu identitas kebangsaan", bobot: 5, pembahasan: "Sumpah Pemuda mengajarkan persatuan dalam keberagaman sebagai satu bangsa." },
        { teks: "pemeliharaan budaya daerah secara tertutup untuk menjaga warisan leluhur", bobot: 0, pembahasan: "Budaya yang tertutup tidak sejalan dengan persatuan." },
        { teks: "percepatan pembangunan daerah masing-masing berdasarkan keunggulan penduduknya", bobot: 0, pembahasan: "Pembangunan daerah masing-masing tidak menyatukan bangsa." },
        { teks: "penolakan terhadap pengaruh ekonomi dan budaya dari luar negeri", bobot: 0, pembahasan: "Menolak seluruh pengaruh luar bukan pesan Sumpah Pemuda." },
        { teks: "peningkatan kemakmuran melalui perbaikan sistem jaminan sosial", bobot: 0, pembahasan: "Jaminan sosial bukan pesan Sumpah Pemuda." }
      ]
    },
    {
      soal: "Rasa persatuan Indonesia sudah tumbuh sebelum kemerdekaan. Peristiwa yang paling menunjukkan hal itu adalah ....",
      opsi: [
        { teks: "Perlawanan bersenjata yang dipimpin satu pusat komando di setiap daerah.", bobot: 0, pembahasan: "Perlawanan sebelum 1908 bersifat kedaerahan dan tidak bersatu." },
        { teks: "Bersatunya pergerakan pemuda dari berbagai daerah sehingga sekat kedaerahan hilang.", bobot: 5, pembahasan: "Persatuan pemuda lintas daerah menunjukkan kesadaran sebagai satu bangsa sebelum merdeka, misalnya dalam Sumpah Pemuda." },
        { teks: "Kerja sama kaum cendekiawan dengan pemilik modal di kota-kota besar.", bobot: 0, pembahasan: "Kerja sama dengan pemilik modal bukan tanda persatuan bangsa." },
        { teks: "Penyatuan hukum adat seluruh Nusantara menjadi satu konstitusi sebelum merdeka.", bobot: 0, pembahasan: "Hukum adat tidak disatukan dalam satu konstitusi sebelum merdeka." },
        { teks: "Pengerahan pasukan daerah yang dikendalikan satu panglima.", bobot: 0, pembahasan: "Pasukan daerah tidak berada di bawah satu panglima." }
      ]
    },
    {
      soal: "Kongres Pemuda II 1928 menyepakati satu tanah air, satu bangsa, dan satu bahasa. Tindakan yang paling sejalan dengan hasil kongres itu adalah ....",
      opsi: [
        { teks: "Membentuk koalisi politik berdasarkan kesamaan daerah asal agar aspirasi daerah lebih kuat.", bobot: 0, pembahasan: "Koalisi berdasarkan daerah asal menghidupkan kembali sekat kedaerahan." },
        { teks: "Menetapkan kuota jabatan berdasarkan jumlah penduduk tiap suku.", bobot: 0, pembahasan: "Kuota menurut suku membedakan warga menurut asal." },
        { teks: "Mengembangkan identitas daerah masing-masing sebagai dasar penyatuan bangsa.", bobot: 0, pembahasan: "Identitas daerah tidak menjadi dasar penyatuan bangsa." },
        { teks: "Mengutamakan kepentingan bangsa di atas kepentingan daerah saat menyusun kebijakan lintas wilayah.", bobot: 5, pembahasan: "Sumpah Pemuda menempatkan persatuan bangsa di atas kepentingan kedaerahan." },
        { teks: "Memusatkan seluruh kegiatan kebudayaan di ibu kota negara.", bobot: 0, pembahasan: "Pemusatan di ibu kota mengabaikan budaya daerah." }
      ]
    },
    {
      soal: "Di kawasan industri baru, pendatang membentuk permukiman yang dihuni satu etnis sehingga hubungan dengan warga lokal merenggang. Langkah yang paling tepat dari sudut pandang nasionalisme adalah ....",
      opsi: [
        { teks: "Mewajibkan keseragaman desain bangunan di seluruh permukiman.", bobot: 0, pembahasan: "Keseragaman desain tidak memperbaiki hubungan antarwarga." },
        { teks: "Menertibkan administrasi kependudukan pendatang yang belum terdaftar.", bobot: 0, pembahasan: "Penertiban administrasi tidak menyentuh renggangnya hubungan." },
        { teks: "Mengadakan pertemuan rutin antarkomunitas untuk menyusun aturan bergaul bersama.", bobot: 5, pembahasan: "Pertemuan antarkomunitas menumbuhkan saling kenal dan kesepakatan bersama, yaitu pendekatan sosial yang memperkuat persatuan." },
        { teks: "Membentuk satuan pengaman gabungan untuk mencegah bentrokan antarwarga.", bobot: 0, pembahasan: "Pengamanan menangani gejala, bukan penyebab renggangnya hubungan." },
        { teks: "Menghentikan sementara penerimaan pekerja dari luar daerah.", bobot: 0, pembahasan: "Menghentikan penerimaan pekerja memperkuat sekat antara pendatang dan warga lokal." }
      ]
    },
    {
      soal: "Anda membeli suvenir untuk tamu pertemuan nasional. Produk impor lebih murah dan rapi, sedangkan produk perajin lokal memenuhi standar tetapi sedikit lebih mahal. Keputusan yang paling mencerminkan nasionalisme adalah ....",
      opsi: [
        { teks: "Membeli produk impor agar anggaran negara hemat.", bobot: 0, pembahasan: "Penghematan tidak boleh mengalahkan dukungan terhadap produk dalam negeri." },
        { teks: "Membeli kedua jenis produk agar panitia memiliki banyak pilihan.", bobot: 0, pembahasan: "Membeli keduanya tidak menunjukkan keberpihakan pada produk lokal." },
        { teks: "Menyerahkan pilihan kepada pimpinan agar tidak menanggung risiko keputusan.", bobot: 0, pembahasan: "Menyerahkan keputusan menghindari tanggung jawab." },
        { teks: "Memilih produk lokal jika perajin bersedia menurunkan harga setara produk impor.", bobot: 0, pembahasan: "Mensyaratkan harga setara menempatkan produk lokal pada posisi yang kurang adil." },
        { teks: "Memilih produk perajin lokal sebagai dukungan bagi kemandirian ekonomi bangsa.", bobot: 5, pembahasan: "Nasionalisme di bidang ekonomi tampak pada dukungan terhadap produk dalam negeri yang telah memenuhi standar." }
      ]
    },
    {
      soal: "Saat Agresi Militer Belanda II, Presiden Soekarno memilih tetap berada di Yogyakarta dan ditawan, tidak ikut bergerilya bersama Jenderal Soedirman. Keputusan itu diambil terutama untuk ....",
      opsi: [
        { teks: "mencegah korban jiwa di kalangan pengawal presiden dan menjaga keselamatan keluarga", bobot: 0, pembahasan: "Alasan keselamatan pribadi bukan pertimbangan utama." },
        { teks: "meringankan beban logistik pasukan gerilya yang kekurangan persediaan", bobot: 0, pembahasan: "Beban logistik gerilya bukan pertimbangan utama." },
        { teks: "menyerahkan kekuasaan pemerintahan kepada komando militer", bobot: 0, pembahasan: "Kekuasaan sipil tidak diserahkan kepada militer." },
        { teks: "menunjukkan kepada dunia bahwa pemerintahan sipil Republik Indonesia tetap ada dan berdaulat", bobot: 5, pembahasan: "Keberadaan pemimpin sipil menunjukkan kepada dunia bahwa Republik Indonesia masih ada." },
        { teks: "menjaga keraton sebagai cagar budaya agar tidak menjadi sasaran serangan", bobot: 0, pembahasan: "Pelestarian keraton bukan pertimbangan utama." }
      ]
    },
    {
      soal: "Mohammad Yamin mengusulkan bahasa Melayu sebagai dasar bahasa persatuan, padahal bahasa Jawa dipakai lebih banyak penduduk. Sikap itu menunjukkan integritas dalam bentuk ....",
      opsi: [
        { teks: "menyesuaikan rumusan kongres dengan kebijakan pendidikan modern organisasi pemuda", bobot: 0, pembahasan: "Pilihan itu tidak berkaitan dengan kebijakan pendidikan." },
        { teks: "menjaga keseimbangan wakil pemuda dari berbagai wilayah dalam kepanitiaan", bobot: 0, pembahasan: "Pilihan bahasa bukan soal keseimbangan wakil." },
        { teks: "mempercepat penyusunan dasar hukum organisasi agar terhindar dari pengawasan pemerintah", bobot: 0, pembahasan: "Pilihan bahasa bukan soal pengawasan pemerintah." },
        { teks: "mengakui bahasa Melayu sebagai bahasa perdagangan maritim untuk menjaga stabilitas ekonomi", bobot: 0, pembahasan: "Alasan ekonomi bukan inti sikap itu." },
        { teks: "mengutamakan tujuan persatuan bangsa di atas pertimbangan jumlah pemakai suatu bahasa", bobot: 5, pembahasan: "Memilih bahasa yang tidak dikuasai mayoritas demi menghindari dominasi satu suku menunjukkan komitmen pada persatuan." }
      ]
    },
    {
      soal: "Penyusunan UUD 1945 dalam sidang BPUPKI dan PPKI diwarnai benturan pemikiran dan kepentingan daerah, tetapi selalu disahkan melalui mufakat tanpa memecah bangsa. Hal itu menunjukkan bahwa para pendiri bangsa ....",
      opsi: [
        { teks: "mengutamakan sistem desentralisasi agar tiap daerah punya kepastian wewenang", bobot: 0, pembahasan: "Desentralisasi bukan inti kesepakatan para pendiri bangsa." },
        { teks: "menunda pembahasan hukum agama untuk mempercepat pengakuan negara", bobot: 0, pembahasan: "Pembahasan tidak ditunda; penyelesaian dilakukan melalui mufakat." },
        { teks: "mengadopsi tata negara Hindia Belanda sementara untuk mencegah kekosongan hukum", bobot: 0, pembahasan: "Mereka merumuskan konstitusi sendiri." },
        { teks: "mengutamakan sikap kenegarawanan dengan melepaskan kepentingan golongan demi persatuan", bobot: 5, pembahasan: "Kemampuan melepaskan kepentingan golongan demi persatuan adalah sikap kenegarawanan." },
        { teks: "membentuk majelis majemuk yang memberi hak veto kepada wakil golongan", bobot: 0, pembahasan: "Tidak ada majelis dengan hak veto golongan." }
      ]
    },
    {
      soal: "Instansi Anda diwajibkan mengutamakan produk dalam negeri pada pengadaan barang dan jasa. Kebijakan itu menunjukkan nasionalisme di bidang ekonomi karena langsung berdampak pada ....",
      opsi: [
        { teks: "bertambahnya penerimaan bea cukai dari volume perdagangan lintas batas", bobot: 0, pembahasan: "Produk dalam negeri tidak berkaitan dengan bea cukai lintas batas." },
        { teks: "menguatnya ekonomi nasional lewat tumbuhnya produksi dan lapangan kerja dalam negeri", bobot: 5, pembahasan: "Belanja negara untuk produk lokal menggerakkan produksi dan membuka lapangan kerja dalam negeri." },
        { teks: "keseragaman spesifikasi barang agar audit BPK lebih mudah", bobot: 0, pembahasan: "Penyeragaman spesifikasi bukan tujuan kebijakan ini." },
        { teks: "terbatasnya akses investor asing ke pasar dalam negeri", bobot: 0, pembahasan: "Kebijakan ini tidak membatasi investor asing." },
        { teks: "beralihnya distribusi barang strategis kepada koperasi pegawai negeri", bobot: 0, pembahasan: "Pengadaan produk lokal tidak mengalihkan distribusi ke koperasi pegawai." }
      ]
    },
    {
      soal: "Sayuti Melik mengubah frasa \"wakil-wakil bangsa Indonesia\" menjadi \"atas nama bangsa Indonesia\" pada naskah proklamasi. Perubahan itu menunjukkan nasionalisme karena ....",
      opsi: [
        { teks: "menyediakan dokumen resmi yang membuktikan kesiapan pemuda mengambil alih pemerintahan", bobot: 0, pembahasan: "Perubahan frasa tidak berkaitan dengan kesiapan administrasi pemuda." },
        { teks: "memenuhi standar konstitusi kemerdekaan yang disepakati PBB agar cepat diakui", bobot: 0, pembahasan: "PBB belum ada pada saat proklamasi." },
        { teks: "menyesuaikan ejaan naskah dengan tata bahasa modern agar diakui dunia", bobot: 0, pembahasan: "Perubahan itu bukan soal ejaan." },
        { teks: "mencegah campur tangan perwira tinggi Jepang yang hendak merumuskan ulang isi kemerdekaan", bobot: 0, pembahasan: "Tidak ada upaya Jepang merumuskan ulang isi proklamasi pada perubahan itu." },
        { teks: "menegaskan bahwa kemerdekaan dinyatakan atas kehendak seluruh rakyat, bukan segelintir tokoh", bobot: 5, pembahasan: "Frasa \"atas nama bangsa Indonesia\" menegaskan kemerdekaan sebagai kehendak seluruh rakyat." }
      ]
    },
    {
      soal: "Masyarakat memilih membeli kendaraan listrik rakitan dalam negeri meski stasiun pengisian dayanya belum merata. Sikap itu menunjukkan nasionalisme di bidang ekonomi karena langsung berdampak pada ....",
      opsi: [
        { teks: "berkurangnya defisit perdagangan karena kuota impor kendaraan dibatasi bertahap", bobot: 0, pembahasan: "Pembatasan kuota impor adalah kebijakan pemerintah, bukan dampak pilihan masyarakat." },
        { teks: "menguatnya industri dalam negeri dan kemandirian teknologi sehingga ketergantungan pada produk asing berkurang", bobot: 5, pembahasan: "Memilih produk rakitan dalam negeri memperkuat industri dan kemandirian teknologi bangsa." },
        { teks: "terpenuhinya komitmen negara pada perjanjian internasional tentang pengurangan emisi", bobot: 0, pembahasan: "Komitmen emisi adalah kewajiban negara dan bukan inti nasionalisme ekonomi." },
        { teks: "cepatnya penyerapan anggaran subsidi daerah untuk transportasi hijau", bobot: 0, pembahasan: "Penyerapan anggaran subsidi bukan dampak langsung pilihan warga." },
        { teks: "beralihnya pengelolaan stasiun pengisian daya publik kepada BUMN energi", bobot: 0, pembahasan: "Pengelolaan stasiun bukan dampak pilihan warga." }
      ]
    },
    {
      soal: "Panitia lomba di kantor Anda ingin memakai bendera Merah Putih sebagai spanduk dan hiasan panggung. Tindakan yang paling tepat sesuai penghormatan terhadap lambang negara adalah ....",
      opsi: [
        { teks: "Memakai hiasan berwarna merah putih lain dan mengibarkan bendera negara pada tiang sesuai aturan.", bobot: 5, pembahasan: "UU 24/2009 melarang bendera dipakai sebagai spanduk, alas, atau hiasan; bendera dikibarkan pada tiang." },
        { teks: "Memakai bendera itu dengan tambahan tulisan nama kegiatan agar tampak resmi.", bobot: 0, pembahasan: "Menambahkan tulisan pada bendera dilarang." },
        { teks: "Memasang bendera di panggung asalkan bagian merah berada di atas.", bobot: 0, pembahasan: "Posisi bendera tidak membenarkan pemakaian sebagai hiasan." },
        { teks: "Memasang bendera di belakang panggung agar tidak terinjak.", bobot: 0, pembahasan: "Bendera tidak dijadikan hiasan panggung." },
        { teks: "Memakai bendera berukuran kecil sebagai hiasan meja.", bobot: 0, pembahasan: "Bendera tidak dijadikan hiasan meja." }
      ]
    },
    {
      soal: "Industri hiburan asing membawa nilai budaya populer yang dapat mengikis karakter generasi muda. Langkah aparatur daerah yang paling sesuai dengan Pancasila dan tetap terbuka pada pergaulan dunia adalah ....",
      opsi: [
        { teks: "Memusatkan kegiatan seni asing di kawasan wisata terpadu.", bobot: 0, pembahasan: "Pemusatan kesenian asing tidak menumbuhkan kebanggaan pada budaya sendiri." },
        { teks: "Mewajibkan perpaduan kesenian lokal dengan hiburan asing pada setiap acara besar.", bobot: 0, pembahasan: "Kewajiban perpaduan dengan hiburan asing tidak menjaga keaslian budaya." },
        { teks: "Menolak izin semua promotor internasional yang tidak berafiliasi dengan lembaga kebudayaan negara.", bobot: 0, pembahasan: "Menolak izin semua promotor menutup diri dari pergaulan global." },
        { teks: "Memadukan kearifan lokal dengan ekonomi kreatif agar memiliki daya saing komersial dan budaya.", bobot: 5, pembahasan: "Budaya lokal yang dikembangkan kreatif dapat bersaing dan tetap menjaga jati diri tanpa menutup diri." },
        { teks: "Menyeragamkan silabus kesenian SD yang berfokus pada hafalan sejarah tradisi.", bobot: 0, pembahasan: "Hafalan sejarah tradisi tidak menarik minat generasi muda." }
      ]
    },
    {
      soal: "Di kawasan wisata internasional, pelaku usaha mulai meninggalkan kuliner dan kesenian lokal demi selera wisatawan asing. Langkah pemerintah daerah yang paling tepat adalah ....",
      opsi: [
        { teks: "Membatasi kunjungan wisatawan asing lewat kuota imigrasi.", bobot: 0, pembahasan: "Membatasi wisatawan merugikan sektor pariwisata." },
        { teks: "Menyeragamkan kesenian lokal ke satu gaya modern agar mudah dipasarkan.", bobot: 0, pembahasan: "Penyeragaman meniadakan kekhasan budaya daerah." },
        { teks: "Menyerahkan penataan kawasan wisata kepada komunitas seniman.", bobot: 0, pembahasan: "Menyerahkan penataan kawasan kepada satu kelompok melepaskan tanggung jawab pemerintah." },
        { teks: "Memasukkan kesenian dan kuliner daerah ke dalam paket pariwisata sebagai daya tarik utama.", bobot: 5, pembahasan: "Budaya lokal dijaga dengan menjadikannya daya tarik yang bernilai ekonomi tanpa menutup diri." },
        { teks: "Menolak izin festival budaya kontemporer dari luar negeri.", bobot: 0, pembahasan: "Menolak festival luar negeri menutup diri dari pergaulan global." }
      ]
    },
    {
      soal: "Warga kelas menengah dan ASN banyak berwisata ke luar negeri sehingga devisa sektor pariwisata berkurang. Kebijakan pemerintah pusat yang paling tepat untuk menumbuhkan kecintaan pada produk dalam negeri adalah ....",
      opsi: [
        { teks: "Melarang penerbitan paspor bagi warga tanpa perjalanan dinas atau keperluan medis.", bobot: 0, pembahasan: "Melarang paspor membatasi hak warga bepergian." },
        { teks: "Mengenakan pajak progresif bagi wisata ke luar kawasan ASEAN.", bobot: 0, pembahasan: "Pajak progresif membebani warga tanpa membangun daya saing wisata lokal." },
        { teks: "Memutus rute penerbangan maskapai internasional agar warga memakai transportasi dalam negeri.", bobot: 0, pembahasan: "Memutus rute penerbangan merugikan masyarakat." },
        { teks: "Mewajibkan ASN menyumbangkan sebagian gaji pokok untuk kas pariwisata daerah.", bobot: 0, pembahasan: "Pemotongan gaji ASN tidak adil dan melanggar aturan." },
        { teks: "Membangun infrastruktur dan mempromosikan wisata dalam negeri agar kualitas layanannya bersaing.", bobot: 5, pembahasan: "Kecintaan pada produk dalam negeri tumbuh bila kualitasnya mampu bersaing." }
      ]
    },
    {
      soal: "Pergantian dari Orde Lama ke Orde Baru dibangun di atas komitmen politik untuk ....",
      opsi: [
        { teks: "menggelar pemilu secepatnya untuk mengganti pimpinan lembaga legislatif", bobot: 0, pembahasan: "Pemilu tidak dilakukan secepatnya." },
        { teks: "membentuk majelis konstituante sementara untuk merumuskan ulang ideologi negara", bobot: 0, pembahasan: "Ideologi negara tidak dirumuskan ulang." },
        { teks: "menyerahkan pembentukan peraturan strategis kepada komando militer", bobot: 0, pembahasan: "Pembentukan peraturan tidak diserahkan kepada komando militer." },
        { teks: "membekukan lembaga peradilan buatan era sebelumnya", bobot: 0, pembahasan: "Lembaga peradilan tidak dibekukan." },
        { teks: "melaksanakan Pancasila dan UUD 1945 secara murni dan konsekuen", bobot: 5, pembahasan: "Orde Baru menyatakan tekad melaksanakan Pancasila dan UUD 1945 secara murni dan konsekuen." }
      ]
    },
    {
      soal: "Anda menyusun program penguatan kesadaran sejarah bangsa bagi pegawai muda tanpa mengganggu jam pelayanan publik. Langkah yang paling mencerminkan nasionalisme adalah ....",
      opsi: [
        { teks: "Memasukkan keteladanan pahlawan nasional sebagai studi kasus dalam modul pelatihan jabatan.", bobot: 5, pembahasan: "Nasionalisme ditanamkan secara bermakna ketika nilai pahlawan masuk ke pekerjaan sehari-hari tanpa mengganggu pelayanan." },
        { teks: "Mewajibkan apel pagi dengan pembacaan teks sejarah kemerdekaan secara bergilir.", bobot: 0, pembahasan: "Apel harian mengurangi waktu kerja dan bersifat simbolis." },
        { teks: "Membangun monumen kecil di lobi kantor sebagai pengingat visual.", bobot: 0, pembahasan: "Monumen hanya pengingat visual yang tidak mengubah cara pandang pegawai." },
        { teks: "Menyelenggarakan kunjungan bulanan ke museum sejarah pada jam kerja secara bergiliran.", bobot: 0, pembahasan: "Kunjungan pada jam kerja mengurangi waktu pelayanan." },
        { teks: "Menerbitkan surat edaran seragam bertema perjuangan pada hari kerja tertentu.", bobot: 0, pembahasan: "Seragam bertema bersifat simbolis dan tidak menanamkan nilai." }
      ]
    },
    {
      soal: "Instansi Anda menerima hibah sistem pelayanan dari negara donor, tetapi pedoman operasionalnya berbenturan dengan hierarki birokrasi nasional. Sebagai penanggung jawab proyek, langkah Anda adalah ....",
      opsi: [
        { teks: "Menerapkan sistem itu apa adanya demi percepatan modernisasi pelayanan.", bobot: 0, pembahasan: "Menerapkan apa adanya mengabaikan peraturan nasional." },
        { teks: "Menolak hibah itu secara resmi demi menjaga identitas tata kelola pemerintahan nasional.", bobot: 0, pembahasan: "Menolak hibah menutup manfaat kemajuan teknologi." },
        { teks: "Memakai sistem itu pada satu divisi internal agar tidak memengaruhi pelayanan langsung.", bobot: 0, pembahasan: "Pemakaian terbatas tidak menyelesaikan benturan dengan peraturan." },
        { teks: "Mengembalikan sistem kepada negara donor agar diprogram ulang sesuai pemerintahan nasional.", bobot: 0, pembahasan: "Mengembalikan sistem tidak memanfaatkan hibah dan memberatkan pihak donor." },
        { teks: "Menerima sistem itu dan menyesuaikan prosedur operasionalnya dengan peraturan nasional.", bobot: 5, pembahasan: "Teknologi asing diterima, sedangkan penerapannya disesuaikan dengan peraturan nasional sehingga kedaulatan tata kelola terjaga." }
      ]
    },
    {
      soal: "Dalam forum internasional, sejumlah delegasi menyatakan bahwa kebijakan hilirisasi industri negara Anda menghambat rantai pasok global. Tanggapan yang paling mencerminkan nasionalisme adalah ....",
      opsi: [
        { teks: "Mengalihkan pembicaraan ke isu lingkungan global agar suasana forum tetap tenang.", bobot: 0, pembahasan: "Mengalihkan pembicaraan menghindari tanggung jawab menjelaskan kebijakan." },
        { teks: "Mencatat pandangan itu untuk dilaporkan kepada pimpinan delegasi tanpa menanggapi.", bobot: 0, pembahasan: "Diam tidak mewakili kepentingan nasional dalam forum." },
        { teks: "Membalas dengan mengkritik tata niaga negara-negara itu yang dianggap mengeksploitasi sumber daya alam.", bobot: 0, pembahasan: "Membalas dengan kritik memicu ketegangan dan tidak menjelaskan kebijakan." },
        { teks: "Membenarkan pandangan itu sebagai bentuk keterbukaan terhadap kritik.", bobot: 0, pembahasan: "Membenarkan pandangan itu melemahkan posisi bangsa." },
        { teks: "Menyampaikan data dampak positif hilirisasi bagi kemandirian ekonomi nasional secara profesional.", bobot: 5, pembahasan: "Membela kebijakan nasional dengan data dan sikap profesional menunjukkan kebanggaan dan tanggung jawab sebagai wakil bangsa." }
      ]
    },
    {
      soal: "Dalam pameran inovasi pelayanan publik internasional, sistem yang Anda bawa tampak kurang mutakhir dibanding peserta dari negara maju. Langkah yang paling mencerminkan keteladanan identitas nasional adalah ....",
      opsi: [
        { teks: "Menarik diri dari pameran untuk memperbarui teknologi lebih dulu.", bobot: 0, pembahasan: "Menarik diri berarti kehilangan kesempatan memperkenalkan karya bangsa." },
        { teks: "Meminta panitia mengubah kriteria penilaian agar menekankan aspek yang menguntungkan peserta.", bobot: 0, pembahasan: "Meminta perubahan kriteria tidak jujur dan tidak adil." },
        { teks: "Meniru rancangan tata kelola teknologi peserta lain untuk diterapkan di instansi sendiri.", bobot: 0, pembahasan: "Meniru rancangan peserta lain tidak menampilkan identitas sendiri." },
        { teks: "Meminta tambahan anggaran darurat untuk menyewa perangkat asing agar stan tampak mutakhir.", bobot: 0, pembahasan: "Menyewa perangkat asing menampilkan citra yang tidak sesuai kenyataan." },
        { teks: "Tetap mempresentasikan inovasi instansi dengan percaya diri sambil menonjolkan kekhasan kearifan lokalnya.", bobot: 5, pembahasan: "Bangga dan percaya diri membawa karya bangsa serta menonjolkan keunikan lokal mencerminkan identitas nasional." }
      ]
    },
    {
      soal: "Forum orang tua mendesak sekolah negeri menghapus ekstrakurikuler kesenian daerah dan menggantinya dengan pelatihan pemrograman demi tuntutan karier global. Keputusan yang paling mencerminkan nasionalisme masa kini adalah ....",
      opsi: [
        { teks: "Menyetujui desakan itu karena sekolah harus menyesuaikan diri dengan kebutuhan pasar kerja.", bobot: 0, pembahasan: "Menghapus kesenian daerah mengikis budaya bangsa." },
        { teks: "Menolak desakan itu agar kesenian daerah tetap menjadi satu-satunya identitas sekolah.", bobot: 0, pembahasan: "Menolak keterampilan global menutup kesempatan siswa." },
        { teks: "Mengadakan pemungutan suara terbuka antara siswa dan komite sekolah.", bobot: 0, pembahasan: "Pemungutan suara tidak menyelesaikan substansi." },
        { teks: "Memadukan kedua program lewat tugas membuat aplikasi digital yang memperkenalkan kesenian daerah.", bobot: 5, pembahasan: "Memadukan teknologi global dengan pelestarian budaya menunjukkan nasionalisme yang terbuka tetapi berakar pada jati diri bangsa." },
        { teks: "Menunda keputusan sampai kementerian menerbitkan pedoman resmi.", bobot: 0, pembahasan: "Menunda keputusan menghindari tanggung jawab." }
      ]
    },
    {
      soal: "Terjadi lonjakan kasus wabah menular di wilayah pelosok dan dibutuhkan relawan medis. Mendaftar berarti Anda menunda cuti tahunan dan menghadapi risiko paparan tinggi. Keputusan yang paling mencerminkan patriotisme adalah ....",
      opsi: [
        { teks: "Mengajukan pemindahan tugas sementara ke bagian administrasi untuk mengelola data wabah.", bobot: 0, pembahasan: "Pindah ke administrasi menghindari risiko lapangan." },
        { teks: "Tetap bekerja di rumah sakit dengan prosedur ketat agar tidak tertular.", bobot: 0, pembahasan: "Tetap bekerja aman tidak menunjukkan pengorbanan tambahan." },
        { teks: "Menyarankan manajemen merekrut tenaga medis kontrak.", bobot: 0, pembahasan: "Menyarankan rekrutmen tidak melibatkan pengorbanan pribadi." },
        { teks: "Mendaftar sebagai relawan medis walau harus menunda cuti dan menanggung risiko kesehatan.", bobot: 5, pembahasan: "Patriotisme adalah kerelaan berkorban dan menghadapi risiko demi masyarakat dan bangsa." },
        { teks: "Menggalang dana rekan sejawat untuk membeli perlengkapan bagi tim relawan.", bobot: 0, pembahasan: "Menggalang dana belum menunjukkan pengorbanan langsung." }
      ]
    },
    {
      soal: "Pemerintah daerah berencana mengubah bangunan peninggalan era pergerakan nasional menjadi kawasan komersial. Sebagai pejabat dinas kebudayaan yang dimintai rekomendasi, sikap Anda adalah ....",
      opsi: [
        { teks: "Mendukung rencana itu karena peningkatan pendapatan daerah penting bagi kesejahteraan.", bobot: 0, pembahasan: "Mendukung penuh mengabaikan pelestarian nilai sejarah." },
        { teks: "Menolak seluruh rencana komersialisasi dan menutup bangunan untuk umum demi menjaga keasliannya.", bobot: 0, pembahasan: "Menutup bangunan menghilangkan manfaatnya bagi masyarakat." },
        { teks: "Mengusulkan agar bangunan dibongkar dan diganti monumen baru berdesain futuristik.", bobot: 0, pembahasan: "Membongkar menghilangkan peninggalan sejarah." },
        { teks: "Merekomendasikan revitalisasi yang mengakomodasi fungsi komersial tanpa mengubah struktur asli dan nilai sejarahnya.", bobot: 5, pembahasan: "Nasionalisme melestarikan nilai sejarah sekaligus memberi manfaat bagi masyarakat." },
        { teks: "Menyerahkan keputusan tata ruang kepada investor asalkan menandatangani pakta integritas.", bobot: 0, pembahasan: "Menyerahkan keputusan kepada investor melepaskan tanggung jawab pelestarian." }
      ]
    },
    {
      soal: "Para pegawai di unit kerja Anda terbiasa memakai dialek daerah yang tidak dipahami pegawai mutasi dari luar pulau sehingga terjadi salah paham. Mengacu pada sejarah persatuan bangsa, kebijakan yang tepat adalah ....",
      opsi: [
        { teks: "Melarang penggunaan bahasa daerah di seluruh area kantor.", bobot: 0, pembahasan: "Melarang bahasa daerah melanggar upaya pelestarian budaya." },
        { teks: "Mewajibkan bahasa Indonesia baku sebagai bahasa komunikasi di area pelayanan dan rapat resmi.", bobot: 5, pembahasan: "Sumpah Pemuda menetapkan bahasa Indonesia sebagai bahasa persatuan, sehingga komunikasi resmi memakai bahasa Indonesia baku." },
        { teks: "Memisahkan meja kerja pegawai menurut daerah asal.", bobot: 0, pembahasan: "Memisahkan meja memperkuat sekat daerah." },
        { teks: "Membiarkan kebiasaan itu sebagai apresiasi terhadap kebebasan berekspresi.", bobot: 0, pembahasan: "Pembiaran tidak menyelesaikan salah paham." },
        { teks: "Menyusun daftar kosakata bahasa daerah untuk pegawai mutasi.", bobot: 0, pembahasan: "Daftar kosakata membebani pegawai mutasi dan tidak menyatukan komunikasi." }
      ]
    },
    {
      soal: "Panitia peringatan hari besar nasional Anda dipimpin untuk menyewa penyelenggara acara yang mengusulkan konsep bergaya modern dengan dominasi budaya populer asing agar menarik bagi pegawai muda. Keputusan yang sejalan dengan nasionalisme adalah ....",
      opsi: [
        { teks: "Menyetujui konsep itu karena partisipasi pegawai muda lebih penting daripada formalitas.", bobot: 0, pembahasan: "Dominasi budaya asing menggeser makna peringatan." },
        { teks: "Membatalkan kerja sama dan menyelenggarakan acara secara mandiri oleh pegawai internal.", bobot: 0, pembahasan: "Membatalkan kerja sama berlebihan." },
        { teks: "Meminta penyelenggara memodifikasi konsep dengan tetap menjadikan identitas dan simbol sejarah bangsa sebagai tema utama.", bobot: 5, pembahasan: "Gaya modern boleh dipakai, tetapi identitas bangsa tetap menjadi isi utama peringatan." },
        { teks: "Membiarkan konsep itu berjalan dengan tambahan sesi lagu kebangsaan di awal acara.", bobot: 0, pembahasan: "Sesi lagu kebangsaan hanya tempelan." },
        { teks: "Melaporkan usulan itu kepada dewan etik instansi.", bobot: 0, pembahasan: "Melaporkan usulan ke dewan etik berlebihan." }
      ]
    },
    {
      soal: "Anda memimpin tim percepatan pembangunan fasilitas air bersih di daerah terpelosok. Karena medan berat dan anggaran dipotong, sebagian anggota mengeluh dan ingin mundur. Sikap yang paling mencerminkan semangat juang pahlawan adalah ....",
      opsi: [
        { teks: "Memotivasi tim agar pantang menyerah dan memanfaatkan material alam setempat secara swadaya untuk menutup kekurangan anggaran.", bobot: 5, pembahasan: "Semangat juang pahlawan adalah pantang menyerah dan kreatif menghadapi keterbatasan." },
        { teks: "Menyetujui pengunduran diri dan mengusulkan proyek diserahkan kepada swasta.", bobot: 0, pembahasan: "Menyerah menunjukkan sikap berlawanan dengan semangat juang." },
        { teks: "Menghentikan proyek sementara sampai pusat mencairkan dana tambahan.", bobot: 0, pembahasan: "Menghentikan proyek menunda pelayanan." },
        { teks: "Mendirikan monumen pahlawan lokal di desa agar tim lebih termotivasi.", bobot: 0, pembahasan: "Monumen bersifat simbolis dan tidak menyelesaikan kendala." },
        { teks: "Menjanjikan insentif dari gaji pribadi agar anggota bertahan.", bobot: 0, pembahasan: "Insentif pribadi tidak menumbuhkan semangat." }
      ]
    },
    {
      soal: "Anggota satuan tugas nasional dari berbagai kementerian dan daerah membentuk kelompok eksklusif menurut instansi asal dan mengutamakan ego sektoral sehingga kemajuan lambat. Bercermin pada sejarah pergerakan yang menyatukan pemuda berbagai latar belakang, langkah Anda adalah ....",
      opsi: [
        { teks: "Membentuk subkelompok kerja harian yang berisi anggota lintas kementerian dan daerah agar sekat instansi melebur.", bobot: 5, pembahasan: "Persatuan dibangun lewat kerja bersama lintas latar belakang, seperti pergerakan pemuda yang menyatukan berbagai daerah." },
        { teks: "Mengusulkan pemotongan tunjangan kinerja bagi anggota yang mengutamakan ego sektoral.", bobot: 0, pembahasan: "Hukuman tidak menumbuhkan kebersamaan." },
        { teks: "Meminta pimpinan pusat memilih anggota dari satu rumpun kementerian saja.", bobot: 0, pembahasan: "Memilih satu rumpun menghilangkan keberagaman." },
        { teks: "Membiarkan pengelompokan berlanjut selama target minimal tercapai.", bobot: 0, pembahasan: "Membiarkan sekat menghambat tujuan." },
        { teks: "Memusatkan perhatian pada tugas pokok sendiri tanpa mencampuri hubungan antaranggota.", bobot: 0, pembahasan: "Mengabaikan dinamika tim melepaskan tanggung jawab." }
      ]
    }
  ]
};
