// Bank soal TWK - Bahasa Negara
// Aturan: tiap soal punya 5 opsi; SATU opsi bobot 5 (benar), empat lainnya bobot 0 (salah).
// Teks miring ditulis dengan tag <i>...</i>. Baris baru pada soal ditulis \n.
// Tambahkan soal baru dengan menyalin blok { soal: ..., opsi: [...] } lalu beri koma.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL['bahasa-negara'] = {
  indikator: "Bahasa Negara",
  soal: [
    {
      soal: "Manakah di antara kalimat berikut yang tergolong ke dalam kalimat efektif dan sesuai dengan kaidah EYD?",
      opsi: [
        { teks: "Bagi seluruh peserta ujian diharapkan hadir tepat waktu di lokasi kegiatan.", bobot: 0, pembahasan: "Penggunaan preposisi \"Bagi\" di awal kalimat menghilangkan fungsi subjek." },
        { teks: "Kepada Bapak Kepala Dinas, waktu dan tempat kami persilakan.", bobot: 0, pembahasan: "Kalimat tidak logis karena menyatakan mempersilakan \"waktu dan tempat\"." },
        { teks: "Para bapak-bapak pejabat sedang mendiskusikan rancangan peraturan daerah.", bobot: 0, pembahasan: "Bentuk pleonasme/pemborosan kata karena gabungan \"Para\" dan kata ulang \"bapak-bapak\"." },
        { teks: "Langkah-langkah tersebut adalah memahami masalah, mencari data, dan menyimpulkan hasil.", bobot: 5, pembahasan: "Kalimat ini memiliki struktur yang sejajar (keparalelan bentuk verba berawalan me-: memahami, mencari, menyimpulkan) serta hemat dan bermakna logis." },
        { teks: "Karena ia tidak diundang, maka ia tidak menghadiri acara pembukaan tersebut.", bobot: 0, pembahasan: "Penggunaan konjungsi ganda yang berlebihan (\"Karena... maka...\")." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nUpaya pelestarian ekosistem hewan bekantan di kawasan hutan Kalimantan saat ini tengah menghadapi ancaman kerentanan yang cukup serius. Faktor utama yang memicu kondisi tersebut adalah maraknya aktivitas eksploitasi sumber daya alam oleh para penambang tanpa izin resmi. Para oknum tersebut secara masif merambah kawasan hutan guna mencari cadangan emas. Tercatat ada ratusan penambang tidak sah yang beroperasi di wilayah konservasi tersebut sehingga mendisrupsi habitat asli satwa endemik.\nGagasan utama wacana tersebut adalah ....",
      opsi: [
        { teks: "Penambangan emas tanpa izin yang merambah hutan Kalimantan.", bobot: 0, pembahasan: "Penambangan ilegal adalah penyebab, bukan inti pembahasan." },
        { teks: "Ancaman serius terhadap kelestarian bekantan di hutan Kalimantan.", bobot: 5, pembahasan: "Paragraf membahas ancaman terhadap kelestarian bekantan, sedangkan penambangan ilegal adalah penyebabnya." },
        { teks: "Faktor yang menyebabkan maraknya penambangan di habitat satwa langka.", bobot: 0, pembahasan: "Faktor sosial penyebab penambangan tidak dibahas dalam teks." },
        { teks: "Cara mencegah penambangan berlebihan di kawasan konservasi.", bobot: 0, pembahasan: "Cara pencegahan tidak dibahas dalam teks." },
        { teks: "Jumlah penambang tanpa izin yang beroperasi di hutan lindung.", bobot: 0, pembahasan: "Jumlah penambang hanya rincian pendukung." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nKomoditas bahan bakar minyak terbukti memiliki spektrum pemanfaatan yang sangat luas dalam menunjang berbagai sektor operasional dan perhubungan. Alat transportasi roda dua seperti sepeda motor umumnya memerlukan bahan bakar jenis pertalite untuk mobilitas harian. Sementara itu, kendaraan berat yang menggunakan mesin diesel sangat bergantung pada pasokan bahan bakar solar. Di sektor industri kedirgantaraan, pesawat terbang mutlak memerlukan ketersediaan avtur sebagai instrumen penggerak utama. Lebih lanjut, di tingkat domestik, banyak elemen rumah tangga yang masih mendayagunakan minyak tanah sebagai sumber energi utama untuk peranti kompor konvensional.\nIde pokok paragraf deduktif tersebut adalah ....",
      opsi: [
        { teks: "Jenis kendaraan yang memerlukan bahan bakar tertentu.", bobot: 0, pembahasan: "Jenis kendaraan hanyalah contoh pendukung." },
        { teks: "Kebutuhan bahan bakar dasar untuk kegiatan rumah tangga.", bobot: 0, pembahasan: "Rumah tangga hanya salah satu contoh." },
        { teks: "Beragam kegunaan bahan bakar minyak untuk berbagai kebutuhan.", bobot: 5, pembahasan: "Kalimat pertama menyatakan bahan bakar minyak berguna luas, dan kalimat lain memberi contoh." },
        { teks: "Perbandingan efisiensi penggunaan pertalite dan minyak tanah.", bobot: 0, pembahasan: "Teks tidak membandingkan efisiensi." },
        { teks: "Pemakaian minyak tanah oleh masyarakat untuk angkutan barang.", bobot: 0, pembahasan: "Minyak tanah dipakai untuk kompor rumah tangga, bukan angkutan barang." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nPenyelenggaraan pemeliharaan sanitasi di kawasan JLC bukanlah suatu beban yang secara eksklusif dilimpahkan kepada tenaga petugas kebersihan semata. Upaya menjaga ketertiban dan kebersihan lingkungan juga menjadi bagian dari kewajiban para peserta didik. Di samping itu, jajaran tenaga pendidik turut memikul tanggung jawab proporsional untuk memastikan kondisi lingkungan JLC tetap terawat. Seluruh jajaran staf dan karyawan, tanpa pengecualian, terikat pada komitmen untuk secara tanggap menjaga kebersihan fasilitas. Oleh karena itu, seluruh komponen warga yang tergabung dalam ekosistem JLC diwajibkan untuk bersinergi menjaga kebersihan lingkungan demi mewujudkan suasana pembelajaran yang kondusif.\nGagasan utama wacana tersebut adalah ....",
      opsi: [
        { teks: "Tanggung jawab kebersihan ada pada petugas kebersihan lembaga.", bobot: 0, pembahasan: "Teks menyatakan kebersihan bukan beban petugas kebersihan saja." },
        { teks: "Perluasan tugas petugas kebersihan di luar fungsi regulernya.", bobot: 0, pembahasan: "Teks tidak membahas perluasan tugas petugas." },
        { teks: "Kewajiban siswa memelihara kebersihan lingkungan belajar.", bobot: 0, pembahasan: "Siswa hanyalah satu dari beberapa pihak yang disebut." },
        { teks: "Tanggung jawab seluruh warga lembaga untuk bersama menjaga kebersihan lingkungan.", bobot: 5, pembahasan: "Teks menegaskan siswa, pendidik, dan staf semua wajib menjaga kebersihan." },
        { teks: "Tanggung jawab kebersihan yang dibebankan khusus kepada pendidik dan staf.", bobot: 0, pembahasan: "Teks menyebut siswa juga bertanggung jawab." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\n(1) Secara biologis, struktur ketahanan fisik manusia cenderung memiliki toleransi yang lebih tinggi terhadap kondisi defisit nutrisi makanan dibandingkan dengan kondisi defisit cairan. (2) Organisme manusia tercatat masih sanggup mempertahankan kelangsungan viabilitas hidupnya kendati mengalami penyusutan drastis pada persediaan cadangan karbohidrat dan lemak. (3) Namun demikian, apabila terjadi penyusutan volume cairan tubuh pada kisaran 10% saja, kondisi tersebut sudah mampu memicu gangguan stabilitas organ secara kritis. (4) Apabila rentang defisit cairan tersebut meningkat hingga mencapai 25%, maka subjek akan langsung berhadapan dengan ancaman kegagalan fungsi organ secara fatal. (5) Oleh karena itu, dapat disimpulkan bahwa dehidrasi memiliki tingkat risiko kedaruratan yang jauh lebih eskalatif apabila disandingkan dengan kondisi kekurangan asupan kalori.\nKalimat utama paragraf campuran tersebut terletak pada ....",
      opsi: [
        { teks: "Kalimat (3).", bobot: 0, pembahasan: "Kalimat (3) adalah penjelasan." },
        { teks: "Kalimat (2) dan (3).", bobot: 0, pembahasan: "Kalimat (2) dan (3) adalah penjelasan." },
        { teks: "Kalimat (1) dan (5).", bobot: 5, pembahasan: "Paragraf campuran memuat gagasan utama di awal dan di akhir; kalimat (1) dan (5) membandingkan dehidrasi dengan kurang makan." },
        { teks: "Kalimat (4).", bobot: 0, pembahasan: "Kalimat (4) memberi data pendukung." },
        { teks: "Kalimat (1).", bobot: 0, pembahasan: "Kalimat (1) saja tidak memuat kesimpulan di kalimat (5)." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nBerdasarkan hasil tahapan pengujian praklinik maupun observasi klinik, telah terformulasikan sebuah kesimpulan bahwa tanaman pare memiliki peluang strategis untuk dikembangkan sebagai bahan baku sumber fitofarmaka antidiabetes. Kajian riset komprehensif mengenai potensi pare sebagai penawar diabetes ini diawali melalui serangkaian pembuktian empiris mengenai kemampuannya dalam menekan laju kadar glukosa darah pada spesimen hewan uji, baik pada spesimen berkondisi metabolisme normal maupun yang mengalami diabetes. Secara terperinci, laporan medis mengindikasikan bahwa penggunaan ekstrak air buah pare mampu menghadirkan efek hipoglikemik secara konsisten, baik pada subjek manusia berstatus normal maupun pada subjek penderita diabetes yang telah diinduksi melalui agen streptozotosin.\nGagasan pokok wacana ilmiah tersebut adalah ....",
      opsi: [
        { teks: "Pembuktian efek pare terhadap kadar gula darah pada hewan percobaan.", bobot: 0, pembahasan: "Uji pada hewan hanyalah bukti pendukung." },
        { teks: "Laporan medis tentang kandungan senyawa dalam ekstrak air buah pare.", bobot: 0, pembahasan: "Teks tidak membahas kandungan senyawa." },
        { teks: "Cara kerja ekstrak tumbuhan menurunkan kadar gula darah pada manusia.", bobot: 0, pembahasan: "Cara kerja ekstrak tidak dijelaskan." },
        { teks: "Potensi tanaman pare sebagai bahan baku obat herbal antidiabetes.", bobot: 5, pembahasan: "Kalimat pertama menyimpulkan pare berpotensi menjadi bahan fitofarmaka antidiabetes." },
        { teks: "Kemampuan ekstrak air buah pare melawan streptozotosin pada metabolisme normal.", bobot: 0, pembahasan: "Teks tidak menyebut ekstrak melawan streptozotosin; zat itu dipakai untuk menimbulkan diabetes." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nPeningkatan intensitas curah hujan pada periode pergantian musim mengakibatkan meluasnya genangan air di berbagai zona resapan, yang memaksa sejumlah fauna terestrial bermigrasi menuju lokasi yang memiliki elevasi lebih tinggi dan kering. Salah satu jenis satwa liar berisiko tinggi yang teridentifikasi memasuki kawasan permukiman penduduk adalah ular piton. Merespons situasi tersebut, kelompok swadaya masyarakat menyelenggarakan upaya evakuasi terhadap dua spesimen ular piton yang terpantau memasuki area residensial. Lebih lanjut, observasi lapangan menunjukkan bahwa keberadaan satwa tersebut tidak terbatas pada area tapak hunian, melainkan juga ditemukan berlindung pada tajuk pepohonan di sekitar fasilitas umum. Kehadiran spesimen satwa liar yang berpotensi memicu bahaya ini menimbulkan eskalasi keresahan pada aspek keamanan lingkungan komunal.\nIde pokok wacana tersebut adalah ....",
      opsi: [
        { teks: "Keresahan warga akibat masuknya satwa liar ke permukiman.", bobot: 0, pembahasan: "Keresahan warga adalah akibat." },
        { teks: "Evakuasi satwa berbahaya oleh kelompok masyarakat.", bobot: 0, pembahasan: "Evakuasi hanyalah tindakan pendukung." },
        { teks: "Temuan satwa liar yang berlindung di pepohonan dekat fasilitas umum.", bobot: 0, pembahasan: "Temuan di pepohonan hanya rincian." },
        { teks: "Daftar jenis satwa berisiko yang masuk permukiman, terutama ular piton.", bobot: 0, pembahasan: "Ular piton hanyalah contoh." },
        { teks: "Curah hujan tinggi yang membuat hewan darat berpindah ke permukiman.", bobot: 5, pembahasan: "Kalimat pertama menjelaskan hujan deras memaksa hewan darat pindah ke tempat lebih tinggi dan kering, termasuk permukiman." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nInsiden kegagalan struktur tanggul Huruhara di Desa Sukasaya telah memicu luapan banjir lumpur yang berdampak langsung pada eskalasi kerentanan epidemiologis di wilayah tersebut. Proyeksi mitigasi kesehatan mengidentifikasi sejumlah patogen potensial pascabencana yang meliputi diare, tifus, leptospirosis, serta demam berdarah dengue. Terhadap hal tersebut, penetapan standar penanganan medis darurat bagi para korban dan populasi terdampak di radius lokasi kedaruratan wajib segera diselenggarakan. Kemunculan berbagai indikasi patologis tersebut berkorelasi langsung dengan degradasi kualitas sanitasi lingkungan serta kontaminasi pada jaringan distribusi air baku akibat residu lumpur.\nGagasan utama wacana tersebut adalah ....",
      opsi: [
        { teks: "Jebolnya tanggul yang memicu banjir lumpur di permukiman.", bobot: 0, pembahasan: "Jebolnya tanggul adalah penyebab awal." },
        { teks: "Standar penanganan medis darurat bagi korban di lokasi bencana.", bobot: 0, pembahasan: "Penanganan medis adalah rincian penanganan." },
        { teks: "Hubungan antara memburuknya sanitasi dan penyebaran penyakit.", bobot: 0, pembahasan: "Hubungan sanitasi dan penyakit adalah penjelasan." },
        { teks: "Meningkatnya risiko penyakit di suatu kawasan akibat banjir lumpur.", bobot: 5, pembahasan: "Kalimat pertama menyatakan banjir lumpur meningkatkan kerentanan penyakit; kalimat lain menjelaskannya." },
        { teks: "Perkiraan jenis penyakit yang muncul pada masa pemulihan pascabencana.", bobot: 0, pembahasan: "Jenis penyakit adalah rincian." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nPupuk organik diklasifikasikan sebagai instrumen penyubur tanah yang bersumber dari hasil dekomposisi residu organisme biologis. Komposisi material pupuk tersebut dapat diekstraksi dari hasil pengolahan limbah kotoran hewan. Di samping itu, residu metabolisme manusia juga memiliki kelayakan teknis untuk diproses menjadi varian pupuk organik melalui sistem manajemen sanitasi terpadu. Lebih lanjut, terdapat pula kategori pupuk organik yang disintesis dari hasil pelapukan biomassa nabati, yang direpresentasikan melalui pemanfaatan sisa tanaman orok-orok.\nIde pokok wacana tersebut adalah ....",
      opsi: [
        { teks: "Pupuk organik sebagai penyubur tanah dari sisa makhluk hidup beserta jenisnya.", bobot: 5, pembahasan: "Kalimat pertama mendefinisikan pupuk organik, dan kalimat lain menyebut jenisnya." },
        { teks: "Penggunaan pupuk organik oleh petani untuk meningkatkan hasil panen.", bobot: 0, pembahasan: "Teks tidak membahas penggunaan oleh petani." },
        { teks: "Pembuatan pupuk dari limbah kotoran hewan ternak.", bobot: 0, pembahasan: "Kotoran hewan hanyalah satu jenis." },
        { teks: "Pengolahan kotoran manusia menjadi pupuk melalui sistem sanitasi terpadu.", bobot: 0, pembahasan: "Kotoran manusia hanyalah satu jenis." },
        { teks: "Pembuatan pupuk organik dari pelapukan sisa tanaman orok-orok.", bobot: 0, pembahasan: "Sisa tanaman hanyalah satu jenis." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nKebiasaan mengonsumsi asupan nutrisi dalam postur berdiri kerap mendapatkan peneguran secara kultural pada tatanan nilai masyarakat tradisional. Tinjauan observasi lebih lanjut menunjukkan bahwa di luar pertimbangan kepatutan etika, posisi berdiri saat pemenuhan asupan juga berimplikasi pada timbulnya anomali fungsional bagi stabilitas kesehatan tubuh. Terdapat persepsi komunal yang mengasumsikan bahwa makan dalam posisi berdiri memiliki efikasi dalam menunjang reduksi massa tubuh jika dibandingkan dengan posisi duduk. Namun demikian, merujuk pada literatur medis dari Healthline, fakta bahwa postur berdiri mampu membakar surplus 50 kalori per jam belum memenuhi standar pembuktian klinis yang memadai untuk memvalidasi hipotesis diet tersebut.\nGagasan pokok wacana tersebut adalah ....",
      opsi: [
        { teks: "Dampak buruk makan sambil berdiri bagi kesehatan tubuh.", bobot: 5, pembahasan: "Teks menyatakan makan sambil berdiri berdampak buruk bagi kesehatan, dan anggapan manfaatnya belum terbukti." },
        { teks: "Kutipan literatur kesehatan tentang hubungan posisi tubuh dan pembakaran kalori.", bobot: 0, pembahasan: "Literatur hanyalah sumber pendukung." },
        { teks: "Teguran masyarakat tradisional terhadap kebiasaan makan sambil berdiri.", bobot: 0, pembahasan: "Teguran budaya hanyalah pembuka." },
        { teks: "Bukti ilmiah tentang diet dengan mengubah cara makan.", bobot: 0, pembahasan: "Teks menyebut bukti belum memadai, bukan menyajikan bukti." },
        { teks: "Perbandingan etika sosial dengan dampak klinis saat makan.", bobot: 0, pembahasan: "Teks tidak membandingkan etika dengan dampak klinis." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nKawanan ikan hiu spesies blacktip (Carcharhinus limbatus) terpantau melakukan pergerakan menuju kawasan perairan dangkal di pesisir Pulau Peninsula, Nusa Dua, Bali, dalam serangkaian observasi terakhir. Dokumentasi visual mengenai dinamika pergerakan satwa tersebut telah terdistribusi luas melalui berbagai saluran informasi siber kemasyarakatan. Otoritas kelautan menegaskan bahwa fluktuasi pergerakan fauna ini merupakan mekanisme biologis alamiah yang tidak memerlukan eskalasi penetapan status kedaruratan. Tinjauan ekologis mengindikasikan bahwa pergerakan menepi tersebut berkorelasi langsung dengan siklus migrasi rantai makanan, di mana predator mengikuti populasi mangsa utamanya seperti ikan pelagis, tongkol, dan lemuru. Sinkronisasi data dengan laporan komunitas nelayan mengonfirmasi bahwa periode tersebut bertepatan dengan puncak musim populasi ikan yang menjadi basis nutrisi bagi predator kelautan.\nIde pokok wacana tersebut adalah ....",
      opsi: [
        { teks: "Penyebaran dokumentasi pergerakan hiu melalui media daring.", bobot: 0, pembahasan: "Penyebaran dokumentasi hanya pendukung." },
        { teks: "Pernyataan pihak kelautan bahwa tidak ada status darurat.", bobot: 0, pembahasan: "Pernyataan otoritas hanyalah tanggapan." },
        { teks: "Kesesuaian pengamatan ilmiah dengan laporan nelayan setempat.", bobot: 0, pembahasan: "Laporan nelayan hanya pendukung." },
        { teks: "Pergerakan hiu blacktip menuju perairan dangkal pesisir Nusa Dua.", bobot: 5, pembahasan: "Kalimat pertama melaporkan hiu blacktip mendekati pesisir; kalimat lain menjelaskan sebab dan tanggapannya." },
        { teks: "Hubungan pergerakan hiu dengan perpindahan mangsa di laut.", bobot: 0, pembahasan: "Hubungan dengan mangsa adalah penjelasan sebab." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nSimbiosis merupakan hubungan antara dua makhluk hidup yang berbeda. Simbiosis komensalisme terjadi jika satu makhluk hidup diuntungkan, yang lain tidak diuntungrugikan. Simbiosis parasitisme merupakan hubungan makhluk hidup yang satu untung dan yang lain rugi. Simbiosis mutualisme adalah hubungan dua makhluk hidup yang saling menguntungkan.\nKalimat utama wacana tersebut, yang menunjukkan struktur deduktif, terletak pada ....",
      opsi: [
        { teks: "Kalimat kedua.", bobot: 0, pembahasan: "Komensalisme hanya salah satu jenis." },
        { teks: "Kalimat pertama.", bobot: 5, pembahasan: "Pada paragraf deduktif, kalimat utama berada di awal; kalimat berikutnya menjelaskan jenis-jenisnya." },
        { teks: "Kalimat ketiga.", bobot: 0, pembahasan: "Parasitisme hanya salah satu jenis." },
        { teks: "Kalimat keempat.", bobot: 0, pembahasan: "Mutualisme hanya salah satu jenis." },
        { teks: "Kalimat kedua sampai keempat.", bobot: 0, pembahasan: "Ketiga jenis itu adalah penjelas dari kalimat pertama." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nSebanyak ratusan ruko di kawasan pabrik dan pergudangan Jalan Raya Terong, Kabupaten Sukasaya pada selasa siang mendadak roboh. Namun, sama sekali tidak ada korban jiwa maupun korban luka dalam peristiwa tersebut. Dugaan sementara, ratusan ruko itu ambruk akibat konstruksi bangunan yang sudah tidak kuat. Salah satu saksi mata kejadian saat dihubungi BeritaKota via telepon menuturkan bahwa ruko tersebut ambruk begitu saja.\nIde pokok paragraf berita tersebut adalah ....",
      opsi: [
        { teks: "Tidak adanya korban jiwa dalam robohnya bangunan di Sukasaya.", bobot: 0, pembahasan: "Ketiadaan korban adalah keterangan tambahan." },
        { teks: "Kawasan Jalan Raya Terong sebagai pusat pabrik dan pergudangan.", bobot: 0, pembahasan: "Lokasi hanya keterangan pendukung." },
        { teks: "Dugaan bahwa konstruksi bangunan sudah tidak kuat.", bobot: 0, pembahasan: "Dugaan penyebab adalah keterangan pendukung." },
        { teks: "Keterangan saksi mata tentang ambruknya ruko.", bobot: 0, pembahasan: "Keterangan saksi adalah pendukung." },
        { teks: "Robohnya ratusan ruko secara mendadak di kawasan pergudangan Sukasaya.", bobot: 5, pembahasan: "Kalimat pertama memuat peristiwa utama, yaitu ratusan ruko roboh mendadak." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nPerang gerilya ternyata memberikan dampak bagi kehidupan masyarakat. Berdasarkan penjelasan di Jurnal Penelitian Ilmu Sejarah, Sosial, dan Budaya, dampak positif perang gerilya yaitu meningkatkan kepercayaan rakyat terhadap pemerintah dan tentara. Dari segi sosial, dampak perang gerilya membuat masyarakat semakin meningkatkan kerukunan dan semangat gotong royong. Perang ini memberikan pemahaman kepada masyarakat tentang pentingnya mempertahankan kemerdekaan. Adanya perang ini juga membuat masyarakat meningkatkan kewaspadaan terhadap kemungkinan kedatangan tentara Belanda.\nGagasan utama wacana kesejarahan tersebut adalah ....",
      opsi: [
        { teks: "Kerugian dan dampak buruk akibat taktik perang gerilya.", bobot: 0, pembahasan: "Teks membahas dampak positif, bukan kerugian." },
        { teks: "Meningkatnya kepercayaan rakyat kepada pemerintah dan tentara.", bobot: 0, pembahasan: "Kepercayaan rakyat hanya salah satu dampak." },
        { teks: "Meningkatnya kewaspadaan masyarakat terhadap kedatangan tentara Belanda.", bobot: 0, pembahasan: "Kewaspadaan hanya salah satu dampak." },
        { teks: "Dampak perang gerilya terhadap kehidupan masyarakat.", bobot: 5, pembahasan: "Kalimat pertama menyatakan perang gerilya berdampak bagi masyarakat; kalimat lain memerincinya." },
        { teks: "Menguatnya kerukunan dan gotong royong warga.", bobot: 0, pembahasan: "Kerukunan hanya salah satu dampak." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nHasil review dan metaanalisis yang dilakukan secara sistematik oleh Hill dkk. (2016) menunjukkan bahwa prevalensi global penyakit ginjal kronis sebesar 13.4%. <i>Menurut data WHO, penyakit ginjal kronis telah menyebabkan 850.000 orang meninggal dunia setiap tahun.</i> Kematian tersebut menunjukkan bahwa penyakit ginjal kronis menduduki peringkat ke-12 tertinggi penyebab kematian dunia. Menurut End Stage Renal Disease Patients pada tahun 2011, prevalensi CKD dunia sebanyak 2.786.000 orang, sedangkan tahun 2012 sebanyak 3.018.000 orang dan tahun 2013 sebanyak 3.200.000 orang.\nKalimat bercetak miring pada wacana tersebut dapat diparafrasakan secara formal menjadi ....",
      opsi: [
        { teks: "WHO telah menyusun laporan tahunan yang merinci angka kematian akibat komplikasi ginjal.", bobot: 0, pembahasan: "Menambahkan laporan tahunan yang tidak ada dalam kalimat asli." },
        { teks: "Evaluasi tahunan lembaga kesehatan dunia menetapkan komplikasi ginjal sebagai penyebab kematian terbesar.", bobot: 0, pembahasan: "Menyatakan ginjal sebagai penyebab terbesar, padahal kalimat asli tidak menyebut itu." },
        { teks: "Ada 850.000 orang yang oleh WHO digolongkan sebagai penderita penyakit ginjal kronis.", bobot: 0, pembahasan: "Mengubah jumlah korban meninggal menjadi jumlah penderita." },
        { teks: "Data WHO menunjukkan bahwa penyakit ginjal kronis menyebabkan 850.000 orang meninggal dunia setiap tahun.", bobot: 5, pembahasan: "Parafrase ini mempertahankan unsur sumber (WHO), penyebab (penyakit ginjal kronis), jumlah korban, dan keterangan waktu." },
        { teks: "Penyakit ginjal kronis menempati peringkat ke-12 penyebab kematian dunia menurut data WHO.", bobot: 0, pembahasan: "Mengambil informasi dari kalimat berikutnya, bukan kalimat bercetak miring." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\n(1) Orang yang suka merokok sangat berpotensi terkena penyakit jantung dan paru-paru. (2) Dampak lain yang berhubungan dengan keturunan yakni berakibat pada kemandulan. (3) Bagi seorang ibu hamil, jika dia seorang perokok, maka ia akan mengalami gangguan pada janinnya. (4) Demikianlah bahaya dari merokok.\nKalimat utama paragraf tersebut, yang menunjukkan struktur induktif, terletak pada ....",
      opsi: [
        { teks: "Kalimat (1).", bobot: 0, pembahasan: "Kalimat (1) adalah rincian dampak." },
        { teks: "Kalimat (2).", bobot: 0, pembahasan: "Kalimat (2) adalah rincian dampak." },
        { teks: "Kalimat (3).", bobot: 0, pembahasan: "Kalimat (3) adalah rincian dampak." },
        { teks: "Kalimat (1) dan (2).", bobot: 0, pembahasan: "Kalimat (1) dan (2) adalah rincian dampak, bukan kesimpulan." },
        { teks: "Kalimat (4).", bobot: 5, pembahasan: "Pada paragraf induktif, kalimat utama berada di akhir sebagai kesimpulan dari rincian sebelumnya." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nInfrastruktur fasilitas kesehatan pada tingkatan kecamatan dan kelurahan di yurisdiksi Sukasaya teridentifikasi berada dalam kondisi depresiasi fisik yang memprihatinkan. Sebagian besar dari unit bangunan tersebut menunjukkan indikasi penurunan kelayakan struktural yang berpotensi memicu keruntuhan. Berdasarkan data pemantauan, tercatat 30 unit dari total 90 bangunan fasilitas kesehatan mengalami kerusakan yang terukur. Sejumlah infrastruktur pelayanan medis tersebut memperlihatkan keretakan struktural secara spesifik pada bagian kusen dan dinding pembatas.\nGagasan utama paragraf tersebut adalah ....",
      opsi: [
        { teks: "Kerusakan umum pada bangunan pelayanan masyarakat.", bobot: 0, pembahasan: "Teks khusus membahas fasilitas kesehatan, bukan semua layanan masyarakat." },
        { teks: "Kondisi fisik bangunan fasilitas kesehatan di Sukasaya yang memprihatinkan.", bobot: 5, pembahasan: "Kalimat pertama menyatakan kondisi bangunan fasilitas kesehatan yang memprihatinkan; kalimat lain menjelaskannya." },
        { teks: "Faktor alam sebagai penyebab kerusakan bangunan fasilitas kesehatan.", bobot: 0, pembahasan: "Faktor alam tidak dibahas." },
        { teks: "Jumlah bangunan yang mengalami penurunan kelayakan.", bobot: 0, pembahasan: "Jumlah bangunan hanya data pendukung." },
        { teks: "Keretakan pada dinding dan kusen bangunan.", bobot: 0, pembahasan: "Keretakan hanya rincian." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nSetiap entitas individu akan senantiasa menghadapi tantangan evaluatif yang berbanding lurus dengan kapasitas kepemilikannya. Pada dimensi intelektual, individu dihadapkan pada uji kelayakan mengenai sejauh mana kompetensi keilmuannya dapat dimanfaatkan secara optimal. Pada spektrum kepemilikan material, individu tersebut akan diuji melalui tingkat kesukarelaannya dalam mendistribusikan alokasi kekayaan bagi kesejahteraan pihak lain. Lebih lanjut, tatkala mengemban kedudukan struktural, individu bersangkutan akan menghadapi ujian mengenai kapasitasnya dalam mewujudkan akuntabilitas atas wewenang yang diamanatkan.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Pemenuhan kesejahteraan emosional dalam keluarga.", bobot: 0, pembahasan: "Kesejahteraan emosional tidak dibahas." },
        { teks: "Pengelolaan harta benda milik seseorang.", bobot: 0, pembahasan: "Harta hanya salah satu contoh." },
        { teks: "Ujian hidup setiap orang sebanding dengan apa yang dimilikinya.", bobot: 5, pembahasan: "Kalimat pertama menyatakan ujian setiap orang sebanding dengan apa yang dimilikinya; kalimat lain memberi contoh ilmu, harta, dan jabatan." },
        { teks: "Pertanggungjawaban pemegang jabatan atas wewenangnya.", bobot: 0, pembahasan: "Jabatan hanya salah satu contoh." },
        { teks: "Pemanfaatan kecerdasan dalam pergaulan sosial.", bobot: 0, pembahasan: "Ilmu hanya salah satu contoh." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nResidu material plastik hingga saat ini masih memicu kompleksitas persoalan ekologis yang mendesak, baik di yurisdiksi Indonesia maupun pada tatanan global. Di kawasan Nusantara, akumulasi residu plastik tidak sekadar terpusat pada area daratan, melainkan telah mengalami eskalasi persebaran hingga mencemari kawasan maritim yang mencakup dua pertiga dari total luas teritorial negara. Seluruh elemen pemangku kepentingan diinstruksikan untuk menyelenggarakan partisipasi berkelanjutan dalam prosedur penanggulangan residu plastik di kawasan perairan. Peningkatan volume residu di lautan secara langsung akan memperbesar rasio ancaman terhadap keseimbangan daya dukung ekosistem maritim.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Meningkatnya ancaman sampah terhadap ekosistem laut.", bobot: 0, pembahasan: "Ancaman pada laut hanya penjelasan." },
        { teks: "Menyebarnya sampah plastik dari daratan ke perairan.", bobot: 0, pembahasan: "Penyebaran ke perairan hanya penjelasan." },
        { teks: "Ajakan semua pihak ikut menanggulangi sampah di laut.", bobot: 0, pembahasan: "Ajakan penanggulangan hanya penjelasan." },
        { teks: "Koordinasi pihak terkait dalam pengelolaan lingkungan.", bobot: 0, pembahasan: "Koordinasi tidak dibahas sebagai gagasan utama." },
        { teks: "Persoalan lingkungan yang timbul dari menumpuknya sampah plastik.", bobot: 5, pembahasan: "Kalimat pertama menyatakan sampah plastik menimbulkan persoalan lingkungan; kalimat lain menjelaskannya." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nEskalasi transmisi pandemi COVID-19 yang bermula dari yurisdiksi Tiongkok telah menimbulkan proyeksi ancaman sistemik terhadap stabilitas berbagai sektor niaga, yang secara spesifik mencakup industri perhotelan. Kuantitas kedatangan tamu, yang bersumber dari entitas domestik maupun mancanegara, mengalami depresiasi signifikan sehingga memicu penyusutan rasio okupansi fasilitas akomodasi di pelbagai wilayah hingga menyentuh ambang batas sepuluh persen atau lebih.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Asal penyebaran awal pandemi dari Tiongkok.", bobot: 0, pembahasan: "Asal pandemi hanya keterangan." },
        { teks: "Ancaman pandemi terhadap penginapan di negara asalnya.", bobot: 0, pembahasan: "Teks tidak membatasi pada negara asal." },
        { teks: "Beban akibat penyebaran wabah bagi pelaku usaha secara umum.", bobot: 0, pembahasan: "Terlalu umum karena teks fokus pada perhotelan." },
        { teks: "Dampak penyebaran pandemi terhadap kondisi usaha perhotelan.", bobot: 5, pembahasan: "Kalimat pertama menyatakan pandemi mengancam sektor usaha, khususnya perhotelan; kalimat berikutnya menjelaskan penurunan tamu." },
        { teks: "Naik turunnya jumlah tamu hotel di berbagai daerah.", bobot: 0, pembahasan: "Penurunan tamu hanya rincian dampak." }
      ]
    },
    {
      soal: "Bacalah wacana berikut dengan saksama!\nAktivitas mengajukan pertanyaan menunjang peningkatan sensitivitas individu terhadap dinamika peristiwa yang berlangsung di lingkungan sekitarnya. Melalui implementasi kegiatan tersebut, individu memperoleh akses terhadap ragam data dan informasi yang sebelumnya berada di luar jangkauan kognitifnya. Pada setiap dimensi tatanan kehidupan, proses mengajukan pertanyaan menjadi instrumen komunikasi yang niscaya dilakukan. Di lingkungan institusi akademik, peserta didik senantiasa mengajukan pertanyaan kepada tenaga pendidik terkait substansi instruksional yang belum terpahami secara proporsional. Peserta didik menyelenggarakan proses tersebut sebagai mekanisme asimilasi materi secara komprehensif. Oleh karena itu, dapat disimpulkan bahwa pelaksanaan kegiatan bertanya mampu menghadirkan spektrum kebermanfaatan yang luas bagi individu.\nGagasan utama paragraf tersebut adalah ....",
      opsi: [
        { teks: "Meningkatnya kepekaan seseorang terhadap peristiwa di sekitarnya.", bobot: 0, pembahasan: "Kepekaan hanya salah satu manfaat." },
        { teks: "Berbagai manfaat yang diperoleh dari kegiatan bertanya.", bobot: 5, pembahasan: "Paragraf induktif menyimpulkan di akhir bahwa kegiatan bertanya bermanfaat luas bagi individu." },
        { teks: "Terbukanya akses pada informasi yang sebelumnya sulit dijangkau.", bobot: 0, pembahasan: "Akses informasi hanya salah satu manfaat." },
        { teks: "Bertanya sebagai alat komunikasi yang pasti dilakukan dalam setiap bidang kehidupan.", bobot: 0, pembahasan: "Bertanya sebagai alat komunikasi adalah rincian." },
        { teks: "Tanda keberhasilan siswa menyerap materi pelajaran di sekolah.", bobot: 0, pembahasan: "Contoh di sekolah hanya rincian." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Di samping rumput, dapat juga memberikan leguminosa, baik secara sengaja ditanam maupun legum yang tercampur pada rumput alam.\"\nPerbaikan yang paling tepat agar kalimat di atas menjadi efektif adalah ....",
      opsi: [
        { teks: "Menambahkan subjek setelah tanda koma di awal kalimat.", bobot: 5, pembahasan: "Kalimat tidak memiliki subjek karena diawali kata depan \"di samping\"; subjek perlu ditambahkan." },
        { teks: "Menghapus frasa \"di samping rumput\" di awal kalimat.", bobot: 0, pembahasan: "Menghapus frasa itu tetap tidak menghasilkan subjek." },
        { teks: "Mengganti kata \"maupun\" dengan \"ataupun\".", bobot: 0, pembahasan: "Pasangan \"baik ... maupun ...\" sudah benar." },
        { teks: "Menghapus kata \"baik\" agar kalimat lebih ringkas.", bobot: 0, pembahasan: "Kata \"baik\" adalah bagian dari pasangan \"baik ... maupun ...\"." },
        { teks: "Mengganti \"dapat juga\" dengan \"juga dapat\" agar susunan lebih lazim.", bobot: 0, pembahasan: "Perubahan urutan tidak menyelesaikan masalah subjek." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Hemoglobin yang berfungsi membawa oksigen ke seluruh tubuh.\"\nLangkah perbaikan yang paling tepat agar kalimat di atas menjadi efektif adalah ....",
      opsi: [
        { teks: "Menghapus kata \"hemoglobin\" di awal kalimat.", bobot: 0, pembahasan: "Tanpa subjek kalimat tetap tidak lengkap." },
        { teks: "Menambahkan kata \"adalah\" sebelum \"berfungsi\".", bobot: 0, pembahasan: "\"adalah berfungsi\" tidak tepat dan tidak mengatasi masalah." },
        { teks: "Menghapus kata \"yang\" agar \"berfungsi\" menjadi predikat.", bobot: 5, pembahasan: "Kata \"yang\" membuat kalimat hanya berupa anak kalimat tanpa predikat; tanpa \"yang\", \"berfungsi\" menjadi predikat." },
        { teks: "Menghapus kata \"membawa\" agar tidak boros.", bobot: 0, pembahasan: "Menghapus \"membawa\" menghilangkan inti informasi." },
        { teks: "Mengganti \"yang\" dengan \"karena\" agar ada hubungan sebab.", bobot: 0, pembahasan: "Hubungan sebab tidak dimaksudkan dalam kalimat." }
      ]
    },
    {
      soal: "Perhatikan kalimat berikut.\n\"Karena hujan deras, maka acara pelantikan pejabat ditunda.\"\nPerbaikan yang paling tepat agar kalimat di atas menjadi efektif adalah ....",
      opsi: [
        { teks: "Mengganti kata \"karena\" dengan \"agar\".", bobot: 0, pembahasan: "\"Agar\" menyatakan tujuan sehingga mengubah makna." },
        { teks: "Menambahkan kata \"sehingga\" setelah \"maka\".", bobot: 0, pembahasan: "Menambah \"sehingga\" menambah konjungsi lagi." },
        { teks: "Menghapus kata \"maka\".", bobot: 5, pembahasan: "Penggunaan konjungsi ganda \"karena ... maka\" tidak efektif; salah satunya harus dihapus." },
        { teks: "Menghapus kata \"ditunda\".", bobot: 0, pembahasan: "Menghapus \"ditunda\" menghilangkan predikat." },
        { teks: "Mengganti kata \"maka\" dengan \"tetapi\".", bobot: 0, pembahasan: "\"Tetapi\" menyatakan pertentangan, sedangkan kalimat menyatakan sebab." }
      ]
    },
    {
      soal: "Bacalah paragraf berikut dengan saksama!\n(1) Tahun ini, Susi mulai memasuki perkuliahan semester awal. (2) Susi diterima di salah satu perguruan tinggi negeri yang ada di Lampung. (3) Lampung merupakan salah satu penghasil kopi terbesar di Indonesia. (4) Susi mengambil jurusan Pendidikan Bahasa Inggris. (5) Dia masuk ke perguruan tinggi itu melalui jalur SNBP.\nKalimat yang merusak keterpaduan (menyimpang dari topik) paragraf di atas adalah ....",
      opsi: [
        { teks: "Kalimat nomor 1.", bobot: 0, pembahasan: "Kalimat ini adalah pembuka topik utama tentang Susi mulai kuliah." },
        { teks: "Kalimat nomor 2.", bobot: 0, pembahasan: "Kalimat ini menyambung topik dengan memberitahukan tempat Susi diterima kuliah." },
        { teks: "Kalimat nomor 3.", bobot: 5, pembahasan: "Sebuah paragraf yang baik hanya membahas satu topik utama. Topik utama paragraf ini adalah tentang Susi yang mulai masuk kuliah. Kalimat nomor 3 membahas hasil kopi di Lampung, yang sama sekali tidak berhubungan dengan topik kuliah Susi, sehingga merusak keterpaduan paragraf." },
        { teks: "Kalimat nomor 4.", bobot: 0, pembahasan: "Kalimat ini relevan karena menjelaskan jurusan kuliah yang diambil Susi." },
        { teks: "Kalimat nomor 5.", bobot: 0, pembahasan: "Kalimat ini masih berhubungan karena menjelaskan jalur pendaftaran kuliah Susi." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Untuk menghindari penyebaran COVID-19, petugas kesehatan melakukan penyuntikan vaksin dan menyemprotkan disinfektan terhadap kendaraan, fasilitas, dan tempat umum.\"\nPerbaikan yang paling tepat agar rincian dalam kalimat di atas menjadi sejajar (paralel) adalah ....",
      opsi: [
        { teks: "Mengubah rincian menjadi \"penyuntikan vaksin\" dan \"penyemprotan disinfektan\".", bobot: 5, pembahasan: "Rincian harus sejajar; kata kerja \"melakukan\" diikuti dua kata benda berimbuhan pe-an." },
        { teks: "Mengubah rincian menjadi \"suntik vaksin\" dan \"semprot disinfektan\".", bobot: 0, pembahasan: "Bentuk tanpa imbuhan tidak baku untuk kalimat resmi." },
        { teks: "Memindahkan subjek \"petugas kesehatan\" ke awal kalimat tanpa mengubah kata kerja.", bobot: 0, pembahasan: "Memindahkan subjek tidak mengubah ketidaksejajaran." },
        { teks: "Mengubah rincian menjadi \"suntik vaksin\" dan \"menyemprotkan disinfektan\".", bobot: 0, pembahasan: "Bentuk \"suntik\" dan \"menyemprotkan\" tetap tidak sejajar." },
        { teks: "Mengubah rincian menjadi \"disuntikkan vaksin\" dan \"menyemprotkan disinfektan\".", bobot: 0, pembahasan: "Campuran bentuk pasif dan aktif tidak sejajar." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Banyak staf-staf administrasi sedang menyusun rancangan dokumen pertanggungjawaban di ruang arsip instansi pada hari ini.\"\nPerbaikan yang paling tepat agar kalimat di atas menjadi efektif dan hemat kata adalah ....",
      opsi: [
        { teks: "Mengganti kata \"sedang\" dengan \"telah\".", bobot: 0, pembahasan: "Mengganti \"sedang\" mengubah makna waktu, bukan menghemat kata." },
        { teks: "Menghapus keterangan tempat \"di ruang arsip instansi\".", bobot: 0, pembahasan: "Keterangan tempat adalah informasi yang diperlukan." },
        { teks: "Mengubah \"staf-staf\" menjadi \"staf\".", bobot: 5, pembahasan: "Kata \"banyak\" sudah menyatakan jamak sehingga bentuk ulang \"staf-staf\" boros." },
        { teks: "Mengganti \"menyusun\" dengan kata dasar \"susun\".", bobot: 0, pembahasan: "Bentuk dasar \"susun\" tidak baku pada kalimat ini." },
        { teks: "Menambahkan kata \"para\" sebelum \"staf-staf\".", bobot: 0, pembahasan: "Menambah \"para\" justru menambah pemborosan." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Pembuangan sarana tempat sampah di kawasan pinggiran kota dilaksanakan guna memelihara standar sanitasi lingkungan.\"\nPerbaikan yang paling tepat agar arti kalimat di atas menjadi logis adalah ....",
      opsi: [
        { teks: "Mengganti kata \"memelihara\" dengan \"menghilangkan\".", bobot: 0, pembahasan: "Tujuannya menjaga sanitasi, sehingga \"memelihara\" sudah benar." },
        { teks: "Menghapus keterangan tempat \"di kawasan pinggiran kota\".", bobot: 0, pembahasan: "Keterangan tempat tidak menjadi sumber ketidaklogisan." },
        { teks: "Mengganti kata \"dilaksanakan\" dengan \"diadakan\".", bobot: 0, pembahasan: "\"Diadakan\" bersinonim dan tidak memperbaiki kelogisan." },
        { teks: "Memindahkan keterangan tujuan ke bagian awal kalimat.", bobot: 0, pembahasan: "Perpindahan keterangan tidak memperbaiki makna." },
        { teks: "Mengganti kata \"pembuangan\" dengan \"penyediaan\".", bobot: 5, pembahasan: "Tempat sampah tidak dibuang, melainkan disediakan, agar sanitasi terpelihara." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Sebuah jurnal kebijakan publik mengatakan bahwa tingkat kepatuhan regulasi di kawasan tersebut masih tergolong rendah.\"\nKesalahan pemakaian kata yang membuat makna kalimat di atas tidak logis terletak pada ....",
      opsi: [
        { teks: "Frasa \"jurnal kebijakan publik\".", bobot: 0, pembahasan: "Jurnal adalah sumber informasi yang sah." },
        { teks: "Kata hubung \"bahwa\".", bobot: 0, pembahasan: "Kata \"bahwa\" lazim dipakai setelah kata kerja pernyataan." },
        { teks: "Frasa \"tingkat kepatuhan\".", bobot: 0, pembahasan: "Tingkat kepatuhan dapat diukur." },
        { teks: "Kata kerja \"mengatakan\".", bobot: 5, pembahasan: "Yang dapat \"mengatakan\" adalah orang; untuk jurnal lebih tepat \"menyebutkan\" atau \"menyatakan\"." },
        { teks: "Keterangan \"masih tergolong rendah\".", bobot: 0, pembahasan: "Keterangan tersebut sesuai dengan kalimat." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Institusi tersebut mendelegasikan 4 orang aparatur untuk menghadiri forum konsolidasi tata ruang di tingkat regional.\"\nPerbaikan ejaan yang paling tepat sesuai aturan bahasa baku adalah ....",
      opsi: [
        { teks: "Menghapus kata depan \"di\" pada \"di tingkat regional\".", bobot: 0, pembahasan: "Kata depan \"di\" sebelum tempat atau tingkat sudah benar." },
        { teks: "Mengubah angka \"4\" menjadi kata \"empat\".", bobot: 5, pembahasan: "Bilangan satu sampai sembilan yang berdiri sendiri dalam kalimat biasanya ditulis dengan huruf." },
        { teks: "Mengganti \"mendelegasikan\" dengan bentuk dasarnya.", bobot: 0, pembahasan: "Bentuk \"mendelegasikan\" sudah baku." },
        { teks: "Menulis \"forum konsolidasi tata ruang\" dengan huruf kapital pada setiap kata.", bobot: 0, pembahasan: "Huruf kapital tidak dipakai untuk setiap kata pada nama umum." },
        { teks: "Menulis \"tata ruang\" menjadi \"tataruang\".", bobot: 0, pembahasan: "\"Tata ruang\" ditulis terpisah." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Bulatnya tekad panitia perumus dalam menjuangkan pengesahan regulasi tersebut akhirnya membuahkan stabilitas administratif yang diharapkan.\"\nKesalahan pembentukan kata yang tidak sesuai kaidah imbuhan bahasa Indonesia terdapat pada kata ....",
      opsi: [
        { teks: "\"perumus\", yang seharusnya \"pemerumus\"", bobot: 0, pembahasan: "\"Perumus\" sudah baku." },
        { teks: "\"pengesahan\", yang seharusnya \"pensahan\"", bobot: 0, pembahasan: "\"Pengesahan\" sudah baku." },
        { teks: "\"diharapkan\", yang seharusnya \"dipengharapkan\"", bobot: 0, pembahasan: "\"Diharapkan\" sudah baku." },
        { teks: "\"membuahkan\", yang seharusnya \"memperbuahkan\"", bobot: 0, pembahasan: "\"Membuahkan\" sudah baku." },
        { teks: "\"menjuangkan\", yang seharusnya \"memperjuangkan\"", bobot: 5, pembahasan: "Kata dasar \"juang\" berimbuhan me-kan tidak lazim; bentuk yang tepat adalah \"memperjuangkan\"." }
      ]
    },
    {
      soal: "Perhatikan kalimat-kalimat berikut.\n(1) Pemberian penghargaan dapat menstimulasi semangat berkarya pemuda.\n(2) Kurangnya apresiasi dapat mengakibatkan malasnya pemuda dalam berkarya.\n(3) Aris menabung untuk membeli mobil baru.\n(4) Bu Ina menyeduhkan teh hangat yang sangat manis sekali ke dalam cangkir kami.\nBerdasarkan aturan kalimat efektif, pemborosan kata terdapat pada ....",
      opsi: [
        { teks: "Kalimat (4)", bobot: 5, pembahasan: "Pada kalimat (4), \"sangat ... sekali\" bermakna sama sehingga boros." },
        { teks: "Kalimat (1)", bobot: 0, pembahasan: "Kalimat (1) hemat dan jelas." },
        { teks: "Kalimat (2)", bobot: 0, pembahasan: "Kalimat (2) hemat dan jelas." },
        { teks: "Kalimat (3)", bobot: 0, pembahasan: "Kalimat (3) hemat dan jelas." },
        { teks: "Semua kalimat sudah efektif", bobot: 0, pembahasan: "Kalimat (4) masih mengandung pemborosan kata (\"sangat ... sekali\"), sehingga tidak semua kalimat sudah efektif." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Setelah sekian lama akhirnya Anton mampu mempikat hati wanita idamannya dan minggu depan dia akan mempersunting wanita cantik itu.\"\nKata \"mempikat\" pada kalimat di atas tidak baku. Perbaikan yang tepat sesuai kaidah adalah ....",
      opsi: [
        { teks: "Meluluhkan huruf awal \"p\" sehingga menjadi \"memikat\".", bobot: 5, pembahasan: "Awalan me- bertemu huruf awal p meluluhkan p, sehingga \"pikat\" menjadi \"memikat\"." },
        { teks: "Mengubah kata dasar menjadi \"mengikat\".", bobot: 0, pembahasan: "\"Mengikat\" berarti lain." },
        { teks: "Menambahkan awalan \"per-\" sehingga menjadi \"memperikat\".", bobot: 0, pembahasan: "\"Memperikat\" bukan bentuk yang ada." },
        { teks: "Memakai kata dasar \"pikat\" tanpa imbuhan.", bobot: 0, pembahasan: "Tanpa imbuhan, kalimat tidak baku untuk bentuk kata kerja." },
        { teks: "Mengubah awalan menjadi \"meng-\" sehingga menjadi \"mengpikat\".", bobot: 0, pembahasan: "\"Mengpikat\" tidak sesuai kaidah." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Obat mujarab ini memiliki berbagai khasiat seperti melancarkan peredaran darah, ... nafsu makan, dan meningkatkan stamina pria.\"\nUntuk melengkapi bagian yang kosong agar bentuknya sejajar dengan rincian kata kerja lainnya, kata yang paling tepat adalah ....",
      opsi: [
        { teks: "ditambah", bobot: 0, pembahasan: "\"Ditambah\" berbentuk pasif." },
        { teks: "menambahi", bobot: 0, pembahasan: "\"Menambahi\" mengubah makna dan jarang dipakai dengan objek ini." },
        { teks: "penambahan", bobot: 0, pembahasan: "\"Penambahan\" berbentuk kata benda." },
        { teks: "menambah", bobot: 5, pembahasan: "Rincian lain berbentuk kata kerja aktif berawalan me-, sehingga yang sejajar adalah \"menambah\"." },
        { teks: "ditambahkan", bobot: 0, pembahasan: "\"Ditambahkan\" berbentuk pasif." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Segala sesuatu yang dilakukan dengan sangat profesional sekali akan membuahkan hasil yang begitu maksimal dan sangat bermanfaat bagi seluruh banyak manusia di sekitarnya.\"\nPerbaikan yang paling tepat untuk menjadikan kalimat tersebut efektif adalah ....",
      opsi: [
        { teks: "Menghapus kata sifat \"maksimal\" dan \"bermanfaat\".", bobot: 0, pembahasan: "Kata itu adalah inti informasi." },
        { teks: "Menghapus subjek \"segala sesuatu\".", bobot: 0, pembahasan: "Subjek tidak boleh dihilangkan." },
        { teks: "Menghapus kata \"dilakukan\".", bobot: 0, pembahasan: "\"Dilakukan\" adalah bagian anak kalimat yang diperlukan." },
        { teks: "Menghapus kata \"sekali\" dan \"seluruh\".", bobot: 5, pembahasan: "\"Sangat ... sekali\" dan \"seluruh banyak\" memiliki makna ganda sehingga salah satunya dihapus." },
        { teks: "Memisahkan \"di sekitarnya\" menjadi kalimat tersendiri.", bobot: 0, pembahasan: "Memisahkan tidak mengatasi pemborosan." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Menyikat WC tak hanya di lakukan ketika sudah kotor, tetapi juga dilakukan pada saat setelah mandi baik pagi maupun dimalam hari.\"\nKesalahan ejaan pada kalimat di atas terletak pada ....",
      opsi: [
        { teks: "kata \"menyikat\", yang seharusnya ditulis \"mensikat\"", bobot: 0, pembahasan: "\"Menyikat\" sudah benar." },
        { teks: "ungkapan \"tak hanya\", yang seharusnya \"bukan sekadar\"", bobot: 0, pembahasan: "\"Tak hanya\" bukan kesalahan ejaan." },
        { teks: "pasangan \"baik ... maupun ...\", yang seharusnya diganti tanda koma", bobot: 0, pembahasan: "Pasangan \"baik ... maupun ...\" sudah benar." },
        { teks: "kata \"setelah mandi\", yang seharusnya \"sesudah mandi\"", bobot: 0, pembahasan: "\"Setelah\" dan \"sesudah\" sama baku." },
        { teks: "\"di lakukan\", yang seharusnya \"dilakukan\", dan \"dimalam\", yang seharusnya \"di malam\"", bobot: 5, pembahasan: "Awalan di- ditulis serangkai dengan kata kerja, sedangkan kata depan \"di\" ditulis terpisah dari kata tempat atau waktu." }
      ]
    },
    {
      soal: "Bacalah kalimat kutipan langsung berikut dengan saksama!\nTerima kasih banyak telah berpartisipasi memberikan pertolongan yang luar biasa. Saya sangat merasa terbantu!\nPerbaikan tanda baca yang tepat agar kalimat kutipan langsung di atas menjadi baku adalah ....",
      opsi: [
        { teks: "Mengganti tanda seru dengan tanda tanya.", bobot: 0, pembahasan: "Tanda tanya dipakai untuk kalimat tanya." },
        { teks: "Menambahkan koma setelah \"Terima kasih banyak\".", bobot: 0, pembahasan: "Koma tidak diperlukan pada posisi itu." },
        { teks: "Memberikan tanda petik dua di awal dan akhir kutipan.", bobot: 5, pembahasan: "Kutipan langsung diapit tanda petik dua." },
        { teks: "Mengganti tanda seru dengan tanda titik.", bobot: 0, pembahasan: "Pergantian tanda seru tidak menyelesaikan masalah kutipan." },
        { teks: "Mengganti tanda seru dengan tanda titik dua.", bobot: 0, pembahasan: "Tanda titik dua tidak dipakai mengakhiri kalimat." }
      ]
    },
    {
      soal: "Di antara kalimat-kalimat berikut, manakah kalimat yang sudah efektif?",
      opsi: [
        { teks: "Aparatur sipil negara baru ataupun aparatur lama dikenakan ketentuan kedisiplinan yang sama.", bobot: 0, pembahasan: "Mengalami pemborosan kata akibat pengulangan kata \"aparatur\". Seharusnya cukup: \"Aparatur sipil negara baru maupun lama...\"." },
        { teks: "Jakarta adalah merupakan pusat perputaran ekonomi dan administrasi tertinggi di Indonesia.", bobot: 0, pembahasan: "Boros kata karena menggunakan dua kata penjelas sekaligus, yaitu \"adalah merupakan\". Cukup pakai salah satu saja." },
        { teks: "Demi untuk menjamin stabilitas keamanan, petugas melakukan patroli secara berkesinambungan.", bobot: 0, pembahasan: "Boros kata karena menggabungkan dua kata depan bersamaan, yaitu \"Demi untuk\". Seharusnya pilih salah satu: \"Demi\" atau \"Untuk\"." },
        { teks: "Terdapat banyak ragam macam-macam dokumen yang menumpuk di ruang kearsipan institusi.", bobot: 0, pembahasan: "Boros kata karena menggabungkan penanda banyak secara berlebihan, yaitu \"banyak ragam macam-macam\"." },
        { teks: "Saran evaluasi yang disampaikan oleh tim pemeriksa akan segera kami pertimbangkan.", bobot: 5, pembahasan: "Kalimat ini adalah kalimat efektif karena susunan katanya ringkas, jelas, serta tidak menggunakan kata-kata yang diulang secara berlebihan." }
      ]
    },
    {
      soal: "Kalimat yang ditulis secara efektif adalah ....",
      opsi: [
        { teks: "Pada kuartal sebelumnya banyak para tenaga honorer yang mengajukan tuntutan kesejahteraan.", bobot: 0, pembahasan: "Terjadi pemborosan kata penunjuk banyak pada frasa \"banyak para\". Cukup pakai salah satu: \"banyak tenaga honorer\" atau \"para tenaga honorer\"." },
        { teks: "Baik pihak auditor atau pihak pengelola akan dimintai keterangan terkait penyimpangan anggaran.", bobot: 0, pembahasan: "Salah menggunakan kata berpasangan. Pasangan baku untuk kata \"Baik...\" adalah \"...maupun...\", bukan \"...atau...\"." },
        { teks: "Setelah menuntaskan agenda pengawasan lapangan, seluruh staf pemeriksa segera beristirahat.", bobot: 5, pembahasan: "Kalimat ini efektif, hemat kata, logis, dan susunan kalimatnya (subjek, predikat, keterangan) sudah lengkap dan benar." },
        { teks: "Pegawai tersebut merupakan salah satu atlit yang menjuarai kompetisi olahraga kementerian.", bobot: 0, pembahasan: "Salah ejaan kata baku. Kata \"atlit\" tidak baku, penulisan yang benar menurut KBBI adalah \"atlet\"." },
        { teks: "Walaupun jadwal keberangkatan masih lama, tetapi delegasi institusi sudah bersiap di lokasi.", bobot: 0, pembahasan: "Boros kata hubung karena menggabungkan \"Walaupun... tetapi...\" sekaligus. Seharusnya pilih salah satu kata hubung saja." }
      ]
    },
    {
      soal: "Bacalah kalimat berikut dengan saksama!\n\"Insiden tersebut merepresentasikan ketidakcermatan, ketergesa-gesaan, dan tidak hati-hati aparat dalam menyusun draf regulasi publik.\"\nPerbaikan bentuk kata yang paling tepat adalah ....",
      opsi: [
        { teks: "Menghapus imbuhan ke-an dari seluruh rincian.", bobot: 0, pembahasan: "Menghapus imbuhan mengubah kelas kata dan tetap tidak sejajar." },
        { teks: "Mengganti \"tidak hati-hati\" dengan kata sifat \"ceroboh\".", bobot: 0, pembahasan: "\"Ceroboh\" berupa kata sifat dan tidak sejajar." },
        { teks: "Memecah rincian menjadi beberapa kalimat.", bobot: 0, pembahasan: "Memecah rincian tidak memperbaiki bentuk kata." },
        { teks: "Mengubah \"tidak hati-hati\" menjadi \"ketidakhati-hatian\".", bobot: 5, pembahasan: "Rincian harus sejajar; \"ketidakcermatan\" dan \"ketergesa-gesaan\" berbentuk kata benda, sehingga \"ketidakhati-hatian\" sejajar." },
        { teks: "Menghapus kata \"dan\" sebelum rincian terakhir.", bobot: 0, pembahasan: "Menghapus \"dan\" tidak memperbaiki kesejajaran." }
      ]
    },
    {
      soal: "Di antara kalimat-kalimat berikut, manakah kalimat yang efektif?",
      opsi: [
        { teks: "Semua staf-staf operasional diwajibkan menyetorkan pelaporan pertanggungjawaban pada hari ini.", bobot: 0, pembahasan: "Terjadi pemborosan kata jamak pada \"Semua staf-staf\". Kata \"Semua\" sudah berarti banyak, jadi kata \"staf\" tidak perlu diulang." },
        { teks: "Delegasi pengawas mengembalikan bingkisan tersebut akibat pertimbangan benturan kepentingan.", bobot: 5, pembahasan: "Kalimat ini adalah kalimat yang efektif karena disusun dengan hemat, jelas, dan tidak mengandung pemborosan kata sedikit pun." },
        { teks: "Banyak pegawai-pegawai baru yang sedang mengikuti orientasi kedisiplinan di ruang auditorium.", bobot: 0, pembahasan: "Terjadi pemborosan kata jamak pada \"Banyak pegawai-pegawai\". Cukup gunakan salah satu saja." },
        { teks: "Pimpinan instansi senantiasa mengenakan kemeja warna merah marun saat menghadiri agenda rapat pleno.", bobot: 0, pembahasan: "Terjadi pemborosan kata pada \"warna merah marun\". Sebutkan langsung jenis warnanya tanpa perlu menyertakan kata \"warna\"." },
        { teks: "Seluruh aparatur diminta turun ke bawah untuk meninjau langsung kelayakan infrastruktur masyarakat.", bobot: 0, pembahasan: "Terjadi pemborosan kata pada \"turun ke bawah\". Kata \"turun\" sudah pasti mengarah ke bawah, jadi tidak perlu ditambah kata \"ke bawah\"." }
      ]
    },
    {
      soal: "Pemerintah pusat menerbitkan surat edaran terkait kedisiplinan aparatur sipil negara. Sebuah instansi daerah menyalin instruksi tersebut ke dalam draf pengumuman internal dengan redaksi, \"Bagi seluruh pegawai yang belum menyerahkan laporan pertanggungjawaban diwajibkan untuk segera melengkapi dokumen tersebut pada bagian kepegawaian.\"\nPerbaikan redaksi kalimat tersebut agar memenuhi kaidah kalimat efektif dan baku adalah ....",
      opsi: [
        { teks: "Kepada seluruh pegawai yang belum menyerahkan laporan pertanggungjawaban diwajibkan untuk segera melengkapi dokumen tersebut pada bagian kepegawaian.", bobot: 0, pembahasan: "Masih diawali kata depan \"Kepada\" sehingga kalimat tetap tanpa subjek." },
        { teks: "Bagi seluruh pegawai yang belum menyerahkan laporan pertanggungjawaban wajib untuk segera melengkapi dokumen tersebut pada bagian kepegawaian.", bobot: 0, pembahasan: "Masih diawali kata depan \"Bagi\" sehingga kalimat tetap tanpa subjek." },
        { teks: "Untuk seluruh pegawai yang belum menyerahkan laporan pertanggungjawaban diwajibkan segera melengkapi dokumen tersebut kepada bagian kepegawaian.", bobot: 0, pembahasan: "Masih diawali kata depan \"Untuk\" sehingga kalimat tetap tanpa subjek." },
        { teks: "Seluruh para pegawai yang belum menyerahkan laporan pertanggungjawaban diwajibkan segera melengkapi dokumen tersebut pada bagian kepegawaian.", bobot: 0, pembahasan: "\"Seluruh para\" boros karena keduanya bermakna jamak." },
        { teks: "Seluruh pegawai yang belum menyerahkan laporan pertanggungjawaban diwajibkan untuk segera melengkapi dokumen tersebut pada bagian kepegawaian.", bobot: 5, pembahasan: "Kalimat awal kehilangan subjek karena didahului kata depan \"Bagi\"; tanpa kata depan, \"Seluruh pegawai ...\" menjadi subjek yang jelas." }
      ]
    },
    {
      soal: "Dalam penulisan naskah dinas, seorang sekretaris panitia menyusun kalimat permohonan kehadiran sebagai berikut.\n\"Oleh karena itu kami memohon kesediaan bapak Prof. Dr. h.c. Soesanto M.Si., selaku sekretaris Jenderal kementerian pendidikan, untuk meresmikan acara tersebut.\"\nPenulisan kalimat permohonan tersebut yang paling tepat sesuai dengan kaidah Ejaan yang Disempurnakan (EYD) adalah ....",
      opsi: [
        { teks: "Oleh karena itu, kami memohon kesediaan Bapak Prof. Dr. (H.C.) Soesanto M.Si. selaku Sekretaris Jenderal Kementerian Pendidikan untuk meresmikan acara tersebut.", bobot: 0, pembahasan: "Tidak ada koma antara \"Soesanto\" dan \"M.Si.\" serta koma pengapit keterangan \"selaku\"." },
        { teks: "Oleh karena itu kami memohon kesediaan Bapak Prof. Dr. h.c. Soesanto, M.Si. selaku Sekretaris Jenderal Kementerian Pendidikan, untuk meresmikan acara tersebut.", bobot: 0, pembahasan: "Tidak ada koma setelah \"Oleh karena itu\" dan penulisan gelar kehormatan tidak sesuai." },
        { teks: "Oleh karena itu, kami memohon kesediaan bapak Prof. Dr. H.C. Soesanto, M.Si., selaku Sekretaris jenderal Kementerian pendidikan, untuk meresmikan acara tersebut.", bobot: 0, pembahasan: "\"bapak\" tidak berhuruf kapital dan \"Sekretaris jenderal Kementerian pendidikan\" salah huruf kapital." },
        { teks: "Oleh karena itu, kami memohon kesediaan Bapak Prof. Dr. (H.C.) Soesanto, M.Si., selaku Sekretaris Jenderal Kementerian Pendidikan, untuk meresmikan acara tersebut.", bobot: 5, pembahasan: "Koma setelah \"Oleh karena itu\", kapital pada \"Bapak\", gelar \"Dr. (H.C.)\", koma pengapit gelar dan keterangan \"selaku\", serta kapital pada jabatan dan instansi semuanya benar." },
        { teks: "Oleh karena itu kami memohon kesediaan bapak Prof. Dr. HC Soesanto, M.Si., selaku sekretaris jenderal kementerian pendidikan untuk meresmikan acara tersebut.", bobot: 0, pembahasan: "Penulisan \"HC\" dan huruf kecil pada jabatan serta instansi tidak sesuai kaidah." }
      ]
    },
    {
      soal: "Rancangan Undang-Undang yang diinisiasi oleh legislatif harus melewati proses uji publik. Dalam suatu draf laporan panitia kerja dewan perwakilan, ditemukan kalimat:\n\"Rapat paripurna ini membahas tentang rancangan peraturan daerah di mana hal tersebut bertujuan untuk meningkatkan kesejahteraan daripada masyarakat pedesaan.\"\nPerbaikan redaksi draf laporan tersebut agar menjadi kalimat yang efektif adalah ....",
      opsi: [
        { teks: "Rapat paripurna ini membahas rancangan peraturan daerah yang bertujuan meningkatkan kesejahteraan masyarakat pedesaan.", bobot: 5, pembahasan: "Memperbaiki semua kesalahan: kata \"tentang\" setelah \"membahas\" dihapus, \"di mana hal tersebut\" diganti \"yang\", dan \"untuk\" serta \"daripada\" yang boros dihapus." },
        { teks: "Rapat paripurna ini membahas tentang rancangan peraturan daerah yang bertujuan meningkatkan kesejahteraan masyarakat pedesaan.", bobot: 0, pembahasan: "Masih memakai kata \"tentang\" setelah \"membahas\"." },
        { teks: "Rapat paripurna ini membahas rancangan peraturan daerah di mana bertujuan untuk meningkatkan kesejahteraan daripada masyarakat pedesaan.", bobot: 0, pembahasan: "Memakai \"di mana\" yang tidak baku sebagai penghubung, serta \"untuk\" dan \"daripada\" yang boros." },
        { teks: "Rapat paripurna ini membahas rancangan peraturan daerah yang mana bertujuan untuk meningkatkan kesejahteraan masyarakat pedesaan.", bobot: 0, pembahasan: "Memakai \"yang mana\" yang tidak baku serta kata \"untuk\" yang boros." },
        { teks: "Rapat paripurna ini membahas tentang rancangan peraturan daerah yang bertujuan untuk meningkatkan kesejahteraan daripada masyarakat pedesaan.", bobot: 0, pembahasan: "Masih memakai \"tentang\", \"untuk\", dan \"daripada\" yang boros." }
      ]
    },
    {
      soal: "Seorang analis hukum menyusun draf nota kesepahaman antara pemerintah daerah dan pihak swasta terkait pembangunan infrastruktur. Dalam draf tersebut tertulis:\n\"Pemerintah daerah telah mengalokasikan dana pembebasan lahan, namun pihak pengembang belum menyerahkan cetak biru pembangunan sehingga proyek tersebut terpaksa ditunda.\"\nPerbaikan penulisan ejaan dan tanda baca pada klausul nota kesepahaman tersebut adalah ....",
      opsi: [
        { teks: "Pemerintah daerah telah mengalokasikan dana pembebasan lahan, akan tetapi, pihak pengembang belum menyerahkan cetak biru pembangunan sehingga proyek tersebut terpaksa ditunda.", bobot: 0, pembahasan: "Konjungsi \"akan tetapi\" di tengah kalimat tidak perlu diikuti tanda koma lagi sesudahnya." },
        { teks: "Pemerintah daerah telah mengalokasikan dana pembebasan lahan namun, pihak pengembang belum menyerahkan cetak biru pembangunan, sehingga proyek tersebut terpaksa ditunda.", bobot: 0, pembahasan: "Salah penempatan konjungsi \"namun\" di tengah kalimat, serta salah penempatan koma sesudah konjungsi." },
        { teks: "Pemerintah daerah telah mengalokasikan dana pembebasan lahan, tetapi pihak pengembang belum menyerahkan cetak biru pembangunan sehingga proyek tersebut terpaksa ditunda.", bobot: 5, pembahasan: "Konjungsi \"namun\" adalah konjungsi antarkalimat yang digunakan di awal kalimat baru (diikuti tanda koma). Karena posisi pertentangan berada di tengah kalimat (intrakalimat), kata yang tepat digunakan adalah \"tetapi\", dan wajib didahului oleh tanda koma. Konjungsi \"sehingga\" yang menyatakan akibat tidak didahului tanda koma." },
        { teks: "Pemerintah daerah telah mengalokasikan dana pembebasan lahan. Namun pihak pengembang belum menyerahkan cetak biru pembangunan, sehingga proyek tersebut terpaksa ditunda.", bobot: 0, pembahasan: "Karena \"Namun\" dijadikan kalimat baru, wajib dibubuhkan tanda koma tepat setelahnya (\"Namun,\"). Tanda koma sebelum \"sehingga\" juga keliru." },
        { teks: "Pemerintah daerah telah mengalokasikan dana pembebasan lahan, sedangkan pihak pengembang belum menyerahkan cetak biru pembangunan, sehingga proyek tersebut terpaksa ditunda.", bobot: 0, pembahasan: "Konjungsi \"sedangkan\" digunakan untuk membandingkan dua subjek yang berbeda/berlawanan kondisinya, bukan untuk menyatakan pertentangan keadaan yang memicu akibat (sebab-akibat proyek ditunda)." }
      ]
    },
    {
      soal: "Perhatikan kalimat berikut yang tercantum dalam laporan pertanggungjawaban akhir tahun di sebuah kementerian:\n\"Kepala biro meminta agar seluruh staf segera menanda tangani surat pertanggung jawaban untuk mensukseskan program kerja yang dapat mempengaruhi serapan anggaran instansi.\"\nPerbaikan penulisan kata turunan pada kalimat tersebut agar sesuai dengan kaidah tata bahasa Indonesia yang baku adalah ....",
      opsi: [
        { teks: "Kepala biro meminta agar seluruh staf segera menandatangani surat pertanggungjawaban untuk mensukseskan program kerja yang dapat memengaruhi serapan anggaran instansi.", bobot: 0, pembahasan: "\"Mensukseskan\" keliru karena huruf awal \"s\" seharusnya luluh." },
        { teks: "Kepala biro meminta agar seluruh staf segera menandatangani surat pertanggungjawaban untuk menyukseskan program kerja yang dapat memengaruhi serapan anggaran instansi.", bobot: 5, pembahasan: "\"Menandatangani\" dan \"pertanggungjawaban\" ditulis serangkai, \"menyukseskan\" meluluhkan huruf awal \"s\", dan \"memengaruhi\" meluluhkan huruf awal \"p\"." },
        { teks: "Kepala biro meminta agar seluruh staf segera menandatangani surat pertanggung jawaban untuk mensukseskan program kerja yang dapat memengaruhi serapan anggaran instansi.", bobot: 0, pembahasan: "\"Pertanggung jawaban\" dan \"mensukseskan\" tidak baku." },
        { teks: "Kepala biro meminta agar seluruh staf segera menanda tangani surat pertanggung jawaban untuk menyukseskan program kerja yang dapat mempengaruhi serapan anggaran instansi.", bobot: 0, pembahasan: "\"Menanda tangani\", \"pertanggung jawaban\", dan \"mempengaruhi\" tidak baku." },
        { teks: "Kepala biro meminta agar seluruh staf segera menanda tangani surat pertanggungjawaban untuk menyukseskan program kerja yang dapat mempengaruhi serapan anggaran instansi.", bobot: 0, pembahasan: "\"Menanda tangani\" dan \"mempengaruhi\" tidak baku." }
      ]
    },
    {
      soal: "Pemberian vaksin atau imunisasi secara luas, diakui sebagai salah satu intervensi kesehatan yang paling berhasil dan efektif di dunia untuk mencegah kecacatan dan kematian.\nPerbaikan kesalahan ejaan dan tanda baca pada kalimat tersebut yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengubah kata \"vaksin\" menjadi \"vaksinasi\"", bobot: 0, pembahasan: "\"Vaksin\" sudah tepat untuk bahan yang disuntikkan, sedangkan \"vaksinasi\" berarti pemberiannya." },
        { teks: "Mengubah penulisan kata \"intervensi\" menjadi \"interfensi\"", bobot: 0, pembahasan: "Bentuk baku adalah \"intervensi\"." },
        { teks: "Menghilangkan tanda koma (,) setelah kata \"luas\"", bobot: 5, pembahasan: "Subjek tidak dipisahkan dari predikat dengan koma; koma setelah \"luas\" harus dihapus." },
        { teks: "Merangkai penulisan awalan \"di\" dan \"dunia\" menjadi \"didunia\"", bobot: 0, pembahasan: "\"di dunia\" ditulis terpisah karena \"di\" adalah kata depan." },
        { teks: "Membubuhkan tanda koma (,) setelah kata \"dunia\"", bobot: 0, pembahasan: "Koma setelah \"dunia\" tidak diperlukan." }
      ]
    },
    {
      soal: "Gabungan Perusahaan Karet Indonesia (Gapkindo) menyatakan bahwa sebaiknya karet tidak hanya digunakan untuk pembuatan aspal, tetapi pemerintah perlu mendorong kegunaan karet untuk kebutuhan lain, seperti pembuatan bantalan rel, konblok, atau bantalan di dermaga.\nPerbaikan kata bentukan yang salah pada kalimat laporan tersebut adalah ....",
      opsi: [
        { teks: "Mengganti kata \"kegunaan\" dengan kata \"penggunaan\"", bobot: 5, pembahasan: "\"Kegunaan\" berarti manfaat; yang dimaksud adalah tindakan memakai karet, yaitu \"penggunaan\"." },
        { teks: "Mengganti kata \"bantalan\" dengan kata \"bantal\"", bobot: 0, pembahasan: "\"Bantalan\" sudah benar untuk benda penahan." },
        { teks: "Mengganti kata \"pembuatan\" dengan kata \"membuat\"", bobot: 0, pembahasan: "\"Pembuatan\" sesuai dengan kata benda lain dalam rincian." },
        { teks: "Mengganti kata \"mendorong\" dengan kata \"didorong\"", bobot: 0, pembahasan: "\"Mendorong\" sudah benar karena pemerintah pelaku." },
        { teks: "Mengganti kata \"digunakan\" dengan kata \"berguna\"", bobot: 0, pembahasan: "\"Berguna\" mengubah makna dan struktur kalimat." }
      ]
    },
    {
      soal: "Menteri juga meminta mahasiswa melakukan pendidikan dan pengajaran bagi siswa sekolah dasar (SD) yang pada masa pandemi wabah mengalami kesulitan belajar secara daring, karena keterbatasan akses pada teknologi.\nPerbaikan ejaan dan tanda baca yang salah dalam kalimat tersebut adalah ....",
      opsi: [
        { teks: "Mengubah huruf awal \"sekolah dasar\" menjadi kapital seluruhnya (\"Sekolah Dasar\")", bobot: 0, pembahasan: "\"sekolah dasar\" tidak ditulis kapital karena bukan nama resmi." },
        { teks: "Mengubah posisi singkatan \"sekolah dasar (SD)\" menjadi \"SD (sekolah dasar)\"", bobot: 0, pembahasan: "Urutan \"sekolah dasar (SD)\" sudah benar." },
        { teks: "Mencetak miring penulisan kata \"pandemi\"", bobot: 0, pembahasan: "\"Pandemi\" bukan kata asing yang dicetak miring." },
        { teks: "Mengubah penulisan kata \"teknologi\" menjadi \"tekhnologi\"", bobot: 0, pembahasan: "Bentuk baku adalah \"teknologi\"." },
        { teks: "Menghilangkan tanda koma (,) sebelum konjungsi \"karena\"", bobot: 5, pembahasan: "Anak kalimat sebab yang berada di belakang induk kalimat tidak didahului koma, sehingga koma sebelum \"karena\" dihapus." }
      ]
    },
    {
      soal: "Ketua Komite Ekonomi dan Industri Nasional mengemukakan bahwa ikut serta badan usaha hanyalah sebatas membuat, mengelola, dan merawat sistemnya, sedangkan mekanisme kerja yang berhubungan dengan data harus dilakukan oleh pemerintah untuk mengantisipasi bocornya data tersebut.\nPerbaikan kata bentukan yang salah pada redaksi kalimat tersebut agar menjadi baku adalah ....",
      opsi: [
        { teks: "Mengubah kata \"membuat\" menjadi \"membuatkan\"", bobot: 0, pembahasan: "\"Membuat\" sudah benar karena rincian berbentuk kata kerja." },
        { teks: "Mengubah kata \"mengemukakan\" menjadi \"dikemukakan\"", bobot: 0, pembahasan: "\"Mengemukakan\" sudah benar karena kalimat aktif." },
        { teks: "Mengubah kata \"berhubungan\" menjadi \"berhubung\"", bobot: 0, pembahasan: "\"Berhubungan\" sudah benar." },
        { teks: "Mengubah frasa \"ikut serta\" menjadi \"keikutsertaan\"", bobot: 5, pembahasan: "\"Ikut serta\" menjadi subjek anak kalimat sehingga harus berbentuk kata benda, yaitu \"keikutsertaan\"." },
        { teks: "Mengubah frasa \"bocornya\" menjadi \"dibocorkannya\"", bobot: 0, pembahasan: "\"Bocornya\" sudah benar." }
      ]
    },
    {
      soal: "Terdapat beberapa permasalahan sosial yang dikhawatirkan muncul sebagai implikasi dari akselerasi perkembangan dunia digital saat ini. Salah satu permasalahan tersebut adalah degradasi rasa kedekatan hubungan antarindividu. Interaksi tatap muka secara perlahan digantikan oleh interaksi jarak jauh melalui perantara perangkat elektronik. Kondisi tersebut memicu kesenjangan komunikasi dalam institusi keluarga maupun lingkungan bermasyarakat. Fenomena ini memerlukan kewaspadaan kolektif mengingat ruang siber memiliki karakteristik yang bebas, meluas, dan nirbatas.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Kesenjangan komunikasi dalam keluarga akibat penggunaan gawai.", bobot: 0, pembahasan: "Kesenjangan komunikasi dalam keluarga hanya akibat yang dijelaskan." },
        { teks: "Ruang siber yang bebas, luas, dan tanpa batas.", bobot: 0, pembahasan: "Sifat ruang siber hanya pelengkap di kalimat akhir." },
        { teks: "Dampak perkembangan dunia digital terhadap menurunnya kedekatan hubungan antarmanusia.", bobot: 5, pembahasan: "Kalimat pertama menyatakan perkembangan dunia digital menimbulkan masalah sosial berupa menurunnya kedekatan antarmanusia; kalimat lain menjelaskannya." },
        { teks: "Tergantinya interaksi tatap muka oleh interaksi jarak jauh secara perlahan.", bobot: 0, pembahasan: "Penggantian tatap muka hanya rincian." },
        { teks: "Perlunya kewaspadaan bersama menghadapi bahaya perkembangan teknologi informasi.", bobot: 0, pembahasan: "Kewaspadaan kolektif adalah penutup, bukan inti." }
      ]
    },
    {
      soal: "Sebuah dokumen analisis ketenagakerjaan mencantumkan klausul berikut:\n\"Tenaga kerja pada sektor agrikultur memiliki karakteristik yang berbeda dengan sektor industri manufaktur, yakni keperluan akan tenaga kerja tersebut tidak kontinyu, penyerapan bersifat musiman, serta sangat sulit untuk distandardisasi.\"\nPerbaikan penulisan ejaan yang tepat pada klausul tersebut adalah ....",
      opsi: [
        { teks: "Mengganti kata \"kontinyu\" menjadi \"kontinu\"", bobot: 5, pembahasan: "Berdasarkan tata bahasa baku dan Kamus Besar Bahasa Indonesia (KBBI), penulisan kata serapan yang tepat untuk menyatakan sesuatu yang berkesinambungan atau terus-menerus adalah \"kontinu\", bukan \"kontinyu\"." },
        { teks: "Menghilangkan tanda koma (,) sebelum kata \"yakni\"", bobot: 0, pembahasan: "Tanda koma wajib digunakan sebelum kata perincian atau penjelas seperti yakni, yaitu, dan adalah." },
        { teks: "Mengubah kata \"karakteristik\" menjadi \"karateristik\"", bobot: 0, pembahasan: "Kata serapan baku dari characteristic adalah \"karakteristik\"." },
        { teks: "Mengganti kata \"distandardisasi\" menjadi \"distandarisasi\"", bobot: 0, pembahasan: "Bentuk baku dari penyerapan afiksasi standardization adalah \"standardisasi\", bukan \"standarisasi\" (huruf 'd' dipertahankan)." },
        { teks: "Membubuhkan tanda titik koma (;) setelah kata \"manufaktur\"", bobot: 0, pembahasan: "Tanda koma sudah tepat digunakan untuk memisahkan anak kalimat penjelas, tidak perlu menggunakan titik koma pada posisi tersebut." }
      ]
    },
    {
      soal: "Laporan evaluasi kementerian menyebutkan:\n\"Pemerintah pusat secara konsisten memfasilitasi pengembangan industri komponen kemaritiman. Namun, kendala utamanya adalah kuantitas produksi yang masih bergantung pada pesanan, sehingga peranan kementerian sangat vital untuk meminimalisir dampak fluktuasi rantai pasok global.\"\nPerbaikan kata bentukan yang tidak baku pada laporan evaluasi tersebut adalah ....",
      opsi: [
        { teks: "Mengganti kata \"pengembangan\" menjadi \"perkembangan\"", bobot: 0, pembahasan: "\"Pengembangan\" bermakna proses/cara mengembangkan (tindakan aktif pemerintah), sehingga konteksnya sudah tepat." },
        { teks: "Mengganti kata \"pesanan\" menjadi \"pemesanan\"", bobot: 0, pembahasan: "\"Pesanan\" bermakna barang yang dipesan (objek), sudah tepat secara konteks." },
        { teks: "Mengganti kata \"peranan\" menjadi \"peran\"", bobot: 0, pembahasan: "Kata \"peranan\" bermakna bagian yang dimainkan/tindakan yang dilakukan, merupakan bentuk baku yang diakui dan sesuai konteks." },
        { teks: "Mengganti kata \"fluktuasi\" menjadi \"fluktuatif\"", bobot: 0, pembahasan: "\"Fluktuasi\" adalah nomina (kata benda) yang menjadi pasangan tepat bagi subjek \"dampak\", sedangkan \"fluktuatif\" adalah adjektiva (kata sifat)." },
        { teks: "Mengganti kata \"meminimalisir\" menjadi \"meminimalkan\"", bobot: 5, pembahasan: "Bentuk baku menurut KBBI adalah \"meminimalkan\"; \"meminimalisir\" tidak baku." }
      ]
    },
    {
      soal: "Tradisi mobilitas penduduk secara masif menjelang hari raya keagamaan telah menjadi fenomena sosiologis yang mengakar di Indonesia. Meskipun para perantau telah lama berdomisili di luar daerah asalnya, mayoritas memandang momentum kepulangan tersebut sebagai sebuah keharusan kultural. Fenomena ini tidak hanya didorong oleh ikatan emosional dan komunal, tetapi juga memberikan stimulus yang sangat terukur terhadap perputaran roda ekonomi di daerah tujuan. Oleh karena itu, aparatur daerah kerap menjadikan momentum mobilitas tahunan ini sebagai instrumen akselerasi pemberdayaan usaha mikro lokal.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Tradisi mudik massal menjelang hari raya sebagai fenomena sosial yang mengakar di Indonesia.", bobot: 5, pembahasan: "Kalimat pertama menyatakan mobilitas penduduk menjelang hari raya sebagai fenomena sosial yang mengakar; kalimat lain menjelaskannya." },
        { teks: "Pemanfaatan arus mudik untuk memberdayakan usaha mikro setempat.", bobot: 0, pembahasan: "Pemberdayaan usaha mikro adalah kalimat penutup." },
        { teks: "Anggapan perantau bahwa pulang kampung adalah keharusan budaya.", bobot: 0, pembahasan: "Keharusan budaya adalah rincian." },
        { teks: "Perputaran ekonomi daerah yang digerakkan oleh ikatan emosional warga.", bobot: 0, pembahasan: "Perputaran ekonomi adalah rincian." },
        { teks: "Tradisi hari raya sebagai pendorong perekonomian di seluruh Nusantara.", bobot: 0, pembahasan: "Teks tidak membatasi pada perekonomian seluruh Nusantara." }
      ]
    },
    {
      soal: "Surat instruksi dari pejabat daerah memuat rumusan kebijakan sebagai berikut: \"Pemerintah daerah telah menyiapkan titik evakuasi terpadu untuk memfasilitasi kelompok rentan, seperti: ibu hamil, warga lanjut usia, penyandang disabilitas, dan pasien dengan penyakit kronis.\"\nPerbaikan penulisan ejaan dan tanda baca pada instruksi tersebut adalah ....",
      opsi: [
        { teks: "Mengubah huruf kapital pada \"Pemerintah daerah\" menjadi \"Pemerintah Daerah\"", bobot: 0, pembahasan: "\"Pemerintah daerah\" bukan nama resmi sehingga tidak berhuruf kapital." },
        { teks: "Menghilangkan tanda titik dua (:) setelah kata \"seperti\"", bobot: 5, pembahasan: "Titik dua tidak dipakai bila rincian melengkapi kalimat setelah \"seperti\"; titik dua dihapus." },
        { teks: "Menghilangkan tanda koma (,) sebelum kata \"seperti\"", bobot: 0, pembahasan: "Koma sebelum \"seperti\" untuk rincian sudah benar." },
        { teks: "Mengganti kata \"memfasilitasi\" menjadi \"memfasilitatori\"", bobot: 0, pembahasan: "\"Memfasilitatori\" bukan bentuk yang baku." },
        { teks: "Membubuhkan tanda titik koma (;) untuk memisahkan setiap rincian kelompok rentan", bobot: 0, pembahasan: "Titik koma tidak diperlukan karena rincian pendek." }
      ]
    },
    {
      soal: "Perhatikan kalimat pada dokumen profil tenaga ahli berikut: \"Selain pekerjaannya sebagai auditor madya pada instansi pengawasan keuangan, aparatur tersebut juga dikenal sebagai penulis buku pedoman tata kelola yang mengusung tema transparansi anggaran daerah.\"\nPerbaikan penggunaan bentuk kata yang paling tepat agar kalimat tersebut efektif dan sejajar adalah ....",
      opsi: [
        { teks: "Mengganti kata \"penulis\" menjadi \"menulis\"", bobot: 0, pembahasan: "Mengganti \"penulis\" menjadi \"menulis\" akan merusak struktur predikat klausa kedua (\"dikenal sebagai menulis buku\" adalah struktur yang salah)." },
        { teks: "Mengganti kata \"instansi\" menjadi \"institusi\"", bobot: 0, pembahasan: "\"Instansi\" sudah merupakan bentuk baku yang tepat untuk merujuk pada badan pemerintahan." },
        { teks: "Mengganti kata \"pekerjaannya\" menjadi \"bekerja\"", bobot: 5, pembahasan: "Kalimat tersebut memiliki masalah pada kesejajaran struktur dan logika predikatif. Frasa \"Selain pekerjaannya sebagai auditor...\" menggunakan kata benda (nomina). Agar makna klausa tersebut menjadi logis dan efektif sebagai keterangan aktivitas subjek (\"aparatur tersebut\"), bentuk kata yang tepat adalah kata kerja (verba) \"bekerja\". Struktur perbaikannya menjadi: \"Selain bekerja sebagai auditor..., aparatur tersebut juga dikenal sebagai penulis...\"." },
        { teks: "Mengganti kata \"mengusung\" menjadi \"diusung\"", bobot: 0, pembahasan: "Mengganti \"mengusung\" menjadi pasif \"diusung\" akan merusak logika kalimat karena subjek klausa perluasannya adalah \"buku pedoman\" (buku pedoman mengusung tema)." },
        { teks: "Mengganti kata \"transparansi\" menjadi \"transparan\"", bobot: 0, pembahasan: "\"Transparansi\" (kata benda) sudah tepat untuk disandingkan dengan frasa benda \"tema transparansi anggaran\", sedangkan \"transparan\" adalah kata sifat." }
      ]
    },
    {
      soal: "Cermati kutipan cerpen berikut!\n\"Aku mungkin saja akan bangun kesiangan seandainya subuh itu tidak terjadi perang di depan rumahku. Ayah menarik tubuh dari atas ranjang dan menjatuhkannya ke lantai rumah. Dalam kantuk, aku mendengar suara senjata meletus tak henti-henti. Ayah mengimpit tubuhku. Ibu melata di sampingku. Tak henti-henti suara ibu berdoa. Ayah mengucapkan sesuatu dengan amat pelan. Aku mengerti bahwa telah terjadi perang. Suara letusan senjata itu sudah tidak asing lagi bagiku. Entah sudah beberapa kali pula aku terjebak dalam suasana perang antara tentara dan pemberontak. Terakhir, di saat aku pulang sekolah, saat itu tiba-tiba saja puluhan orang berhadap-hadapan di tengah sawah dekat jalan sekolah. Aku pun begitu cepat melata seperti ular. Menundukkan kepala serendah mungkin. Itu kulakukan karena ayah selalu menyuruhku jika aku terjebak dalam perang.\"\nNilai sosial yang terkandung dalam kutipan cerpen tersebut adalah ....",
      opsi: [
        { teks: "Kewajiban setiap orang untuk tidak memihak kelompok pemberontak maupun aparat.", bobot: 0, pembahasan: "Teks tidak membahas kewajiban bersikap netral." },
        { teks: "Pentingnya prosedur penanggulangan bencana dan cara menghindar bagi warga di daerah rawan konflik.", bobot: 0, pembahasan: "Teks tidak menyusun prosedur penanggulangan bencana." },
        { teks: "Kebersamaan dan tanggung jawab keluarga untuk saling melindungi saat keadaan tidak aman.", bobot: 5, pembahasan: "Ayah dan ibu melindungi anaknya dengan tubuh mereka dan berdoa bersama, yang menunjukkan kebersamaan dan tanggung jawab keluarga." },
        { teks: "Trauma bersama akibat konflik bersenjata yang berlarut-larut di permukiman sipil.", bobot: 0, pembahasan: "Trauma tidak ditonjolkan; tokoh tampak sudah terbiasa." },
        { teks: "Kepatuhan anak pada perintah orang tua demi keselamatan di masa darurat.", bobot: 0, pembahasan: "Kepatuhan anak hanyalah salah satu detail, bukan nilai yang menonjol." }
      ]
    },
    {
      soal: "Cermati teks berikut!\nDi Hari Bumi, kita dapat melihat bagaimana planet biru berubah dalam 20 tahun terakhir. Hal itu dapat disaksikan melalui video singkat yang dibuat Badan Antariksa AS (NASA) dengan menggunakan citra satelit Sensor Tampilan Lapangan Luas (SeaWiFS). NASA meyakini bahwa perubahan lanskap bumi akan memberikan pemahaman bagi manusia bahwa planet biru yang kita tinggali ini hidup. Bumi bernapas setiap hari. Ia berubah setiap pergantian musim dan bisa menanggapi matahari, angin, arus laut, dan juga suhu. Melalui SeaWiFS, para ilmuwan tidak hanya mendapat gambaran menakjubkan tentang bumi dari luar angkasa, tetapi juga membantu memantau kesehatan tanaman, hutan, dan laut di seluruh dunia. Tidak hanya itu, studi ini juga menjawab pertanyaan penting mengenai bagaimana ekosistem merespons perubahan iklim yang diakibatkan interaksi manusia dengan daratan secara global.\nSimpulan yang mewakili keseluruhan gagasan teks tersebut adalah ....",
      opsi: [
        { teks: "Pemantauan citra satelit dipusatkan pada perbaikan kesehatan tanaman, hutan, dan laut dunia.", bobot: 0, pembahasan: "Pemantauan kesehatan tanaman hanya satu manfaat." },
        { teks: "Perubahan bentang bumi dua dekade terakhir dianalisis secara akurat lewat rekaman video badan antariksa.", bobot: 0, pembahasan: "Teks tidak menyatakan analisis akurat hanya lewat video." },
        { teks: "Teknologi visualisasi antariksa perlu dikembangkan untuk menyusun kebijakan pelestarian ekosistem dan cuaca.", bobot: 0, pembahasan: "Teks tidak membahas kebutuhan pengembangan teknologi." },
        { teks: "Pengamatan satelit menunjukkan bumi bersifat dinamis dan merespons perubahan iklim serta interaksi manusia.", bobot: 5, pembahasan: "Teks menekankan bumi \"hidup\", berubah, dan merespons iklim dan interaksi manusia, yang terlihat lewat pengamatan satelit." },
        { teks: "Peringatan Hari Bumi bertujuan mempublikasikan hasil riset tentang suhu dan arah angin.", bobot: 0, pembahasan: "Teks tidak menyebut tujuan peringatan Hari Bumi seperti itu." }
      ]
    },
    {
      soal: "Cermati paragraf berikut!\n(1) Saat ini memakai kimono bagi yang berhijab tidak lagi menjadi masalah. (2) Hal itu disebabkan sudah terdapat toko yang menyewakan kimono untuk para hijabers. (3) Seperti yang dilansir dari WorldofBuzz, Yumeyakata adalah sebuah toko penyewaan kimono yang melayani pelanggan asing. (4) Adanya toko ini telah banyak memperoleh pujian sebab memproduksi kimono dengan adanya jilbab yang diserasikan dengan pakaian kimono. (5) Toko Yumeyakata sendiri berlokasi di Shimogyoku, Manjujicho, Kyoto-shi, Kyoto, Jepang.\nGagasan pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Meningkatnya devisa negara dari penyewaan busana tradisional bagi turis asing.", bobot: 0, pembahasan: "Teks tidak membahas devisa." },
        { teks: "Strategi promosi penyewaan busana tradisional Jepang melalui media internasional.", bobot: 0, pembahasan: "Teks tidak membahas strategi promosi." },
        { teks: "Kewajiban menyesuaikan budaya lokal dengan tren mode pendatang demi pariwisata.", bobot: 0, pembahasan: "Teks tidak membahas kewajiban menyesuaikan budaya lokal." },
        { teks: "Pentingnya perpaduan budaya di industri tekstil agar diterima semua konsumen.", bobot: 0, pembahasan: "Teks tidak membahas perpaduan budaya di industri tekstil." },
        { teks: "Kemudahan wisatawan berhijab mengenakan busana tradisional asing.", bobot: 5, pembahasan: "Kalimat (1) menyatakan memakai kimono bagi yang berhijab tidak lagi menjadi masalah; kalimat lain menjelaskannya." }
      ]
    },
    {
      soal: "Cermati paragraf berikut!\n(1) Saat ini, petani terus meningkatkan diri agar budidaya kopi kian baik dan lestari. (2) Mereka berusaha sangat keras sekali mencapai budidaya seratus persen organik. (3) Mereka berfokus pada penggunaan pupuk organik dan pengendalian hama tanpa zat kimia. (4) Dinamika perubahan metode tanam ini merupakan tantangan sekaligus peluang besar. (5) Para petani tidaklah asing dengan pupuk organik karena umumnya mereka juga memelihara sapi. (6) Daripada dibuang atau ditebar di ladang, kotorannya akan difermentasi menjadi pupuk organik cair.\nKlausul yang tidak memenuhi standar kaidah kalimat efektif dalam paragraf tersebut adalah ....",
      opsi: [
        { teks: "Saat ini, petani terus meningkatkan diri agar budidaya kopi kian baik dan lestari.", bobot: 0, pembahasan: "Kalimat hemat dan jelas." },
        { teks: "Mereka berusaha sangat keras sekali mencapai budidaya seratus persen organik.", bobot: 5, pembahasan: "\"Sangat ... sekali\" bermakna sama sehingga boros." },
        { teks: "Dinamika perubahan metode tanam ini merupakan tantangan sekaligus peluang besar.", bobot: 0, pembahasan: "Kalimat hemat dan jelas." },
        { teks: "Para petani tidaklah asing dengan pupuk organik karena umumnya mereka juga memelihara sapi.", bobot: 0, pembahasan: "Kalimat hemat dan jelas." },
        { teks: "Daripada dibuang atau ditebar di ladang, kotorannya akan difermentasi menjadi pupuk organik cair.", bobot: 0, pembahasan: "Kalimat hemat dan jelas." }
      ]
    },
    {
      soal: "Cermati kutipan cerpen berikut!\n\"Sri sedang berpindah tempat mengikuti suaminya yang diplomat itu. Sri mulai mengerti kelakuan suaminya yang lekas marah, keras, lagi egois. Pertengkaran pun sering terjadi. Sri yang semula seorang wanita yang lembut dan penurut, akhirnya menjadi wanita yang keras dan pembantah. Sri dan suaminya hendak berlibur ke Prancis. Charles memutuskan bahwa mereka akan berangkat dari Jepang. Setelah sampai di Saigon, mereka berpisah. Dari sana, Charles melepas istri dan anaknya dengan sebuah kapal ke Marseille. Charles hendak singgah dulu ke India.\"\nNilai moral yang dapat dipetik dari hubungan tokoh dalam kutipan cerpen tersebut adalah ....",
      opsi: [
        { teks: "Kewajiban istri tunduk pada keputusan sepihak suami demi wibawa jabatan.", bobot: 0, pembahasan: "Teks tidak menyarankan istri tunduk pada keputusan sepihak." },
        { teks: "Perubahan watak menjadi keras akibat tidak adanya kompromi dalam hubungan keluarga.", bobot: 5, pembahasan: "Sri berubah dari lembut menjadi keras karena sikap suami yang egois dan pertengkaran tanpa kompromi." },
        { teks: "Pentingnya merencanakan rute dan perbekalan sebelum perjalanan dinas ke luar negeri.", bobot: 0, pembahasan: "Perencanaan perjalanan tidak dibahas." },
        { teks: "Dampak baik perpisahan sementara untuk mengevaluasi beban pekerjaan.", bobot: 0, pembahasan: "Perpisahan tidak digambarkan membawa dampak baik." },
        { teks: "Pemisahan urusan rumah tangga dari tanggung jawab profesional saat bertugas di luar negeri.", bobot: 0, pembahasan: "Pemisahan urusan domestik dan profesional tidak dibahas." }
      ]
    },
    {
      soal: "Cermati kutipan cerpen berikut!\nKetua Majelis Hakim mengetokkan palunya tiga kali. Persidangan dimulai.\n\"Apakah benar nama Anda Sances?\"\n\"Benar,\" jawabku.\n\"Apakah benar Anda yang menggelapkan dana perusahaan?\"\n\"Benar.\"\n\"Mengapa?\"\n\"Saya khilaf.\"\n\"Alasan klasik! Jawab sejujurnya!\"\nAku kemudian bercerita panjang lebar. Sejak latar belakang hingga proses penggelapan dana, kesalahanku kuobral habis. Tak ada yang kututupi. Mereka akhirnya tenang setelah aku mengobral kesalahanku yang jauh lebih besar, bahkan mereka bertepuk tangan ketika aku bercerita bahwa aku sebenarnya hanya wayang. Dalangnya adalah bosku. Majelis hakim dan para pengunjung pun terlihat puas. Beberapa polisi yang memandangku dengan serius tampak mengangguk-angguk.\nNilai moral yang menunjukkan kejujuran tokoh utama dalam persidangan pada kutipan tersebut adalah ....",
      opsi: [
        { teks: "Berterus terang menjelaskan perbuatannya sebagai tanggung jawab di hadapan pengadilan.", bobot: 5, pembahasan: "Tokoh utama menjawab terus terang dan menceritakan semua perbuatannya tanpa menutupi." },
        { teks: "Melimpahkan tanggung jawab pidana kepada atasan untuk meringankan hukumannya.", bobot: 0, pembahasan: "Ia mengakui perbuatannya sendiri, bukan sekadar melimpahkan kesalahan." },
        { teks: "Memakai pengakuan bersyarat untuk menyelamatkan aset perusahaan yang disita.", bobot: 0, pembahasan: "Ia tidak mengajukan pengakuan bersyarat." },
        { teks: "Memanipulasi perasaan hakim agar diberi status saksi pelaku yang bekerja sama.", bobot: 0, pembahasan: "Ia tidak memanipulasi hakim." },
        { teks: "Mengabaikan kerahasiaan lembaga demi menyelamatkan karier di masa depan.", bobot: 0, pembahasan: "Ia tidak berbicara demi karier." }
      ]
    },
    {
      soal: "Sebuah draf laporan observasi lingkungan memuat redaksi kalimat: \"Alam mempunyai ciri tersendiri untuk melawan pemburuan liar, sehingga gajah mulai beradaptasi dengan melahirkan anak-anak tanpa gading.\"\nPerbaikan redaksi kalimat tersebut agar memenuhi kaidah pembentukan kata dan tanda baca yang baku adalah ....",
      opsi: [
        { teks: "Alam mempunyai ciri tersendiri untuk melawan perburuan liar sehingga gajah mulai beradaptasi dengan melahirkan anak-anak tanpa gading.", bobot: 5, pembahasan: "Memperbaiki dua kesalahan sekaligus. Pertama, kata dasar \"buru\" dengan konfiks pe-an untuk menyatakan proses/hal berburu yang baku adalah \"perburuan\", bukan \"pemburuan\". Kedua, konjungsi \"sehingga\" merupakan konjungsi intrakalimat yang menyatakan akibat, sehingga tidak didahului oleh tanda koma." },
        { teks: "Alam mempunyai ciri tersendiri untuk melawan perburuan liar, sehingga gajah mulai beradaptasi dengan melahirkan anak-anak tanpa gading.", bobot: 0, pembahasan: "Masih menggunakan tanda koma sebelum kata \"sehingga\"." },
        { teks: "Alam memunyai ciri tersendiri untuk melawan pemburuan liar, sehingga gajah mulai beradaptasi dengan melahirkan anak anak tanpa gading.", bobot: 0, pembahasan: "Menggunakan \"pemburuan\", memakai tanda koma, dan tidak menggunakan tanda hubung pada kata ulang \"anak anak\"." },
        { teks: "Alam mempunyai ciri tersendiri untuk melawan perburuan liar sehingga gajah mulai mengadaptasi dengan melahirkan anak-anak tanpa gading.", bobot: 0, pembahasan: "Penggunaan kata \"mengadaptasi\" keliru secara makna struktural, seharusnya \"beradaptasi\" (melakukan adaptasi)." },
        { teks: "Alam mempunyai ciri tersendiri untuk melawan pemburuan liar sehingga gajah mulai beradaptasi dengan melahirkan anak-anak tanpa gading.", bobot: 0, pembahasan: "Masih menggunakan kata bentukan \"pemburuan\"." }
      ]
    },
    {
      soal: "Laporan pemugaran situs bersejarah mencantumkan kalimat:\n\"Ciri-ciri peradaban Hindu terlihat jelas dari fisik candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi dengan dinding polos tanpa relief atau hiasan ukir-ukiran yang dibangun pada masa dinasti Sanjaya.\"\nPerbaikan penulisan ejaan pada kalimat laporan tersebut yang paling tepat adalah ....",
      opsi: [
        { teks: "Ciri-ciri peradaban hindu terlihat jelas dari fisik Candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi dengan dinding polos tanpa relief atau hiasan ukir-ukiran yang dibangun pada masa Dinasti Sanjaya.", bobot: 0, pembahasan: "Kata \"hindu\" ditulis dengan huruf kecil." },
        { teks: "Ciri-ciri peradaban Hindu terlihat jelas dari fisik Candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi dengan dinding polos tanpa relief atau hiasan ukir-ukiran, yang dibangun pada masa dinasti Sanjaya.", bobot: 0, pembahasan: "Kata \"dinasti Sanjaya\" tidak ditulis kapital pada kata dinasti." },
        { teks: "Ciri-ciri peradaban hindu terlihat jelas dari fisik candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi dengan dinding polos tanpa relief atau hiasan ukir-ukiran yang dibangun pada masa dinasti Sanjaya.", bobot: 0, pembahasan: "Tiga unsur (\"hindu\", \"candi\", \"dinasti\") tidak dikapitalisasi." },
        { teks: "Ciri-ciri peradaban Hindu terlihat jelas dari fisik candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi, dengan dinding polos tanpa relief atau hiasan ukir-ukiran yang dibangun pada masa Dinasti Sanjaya.", bobot: 0, pembahasan: "Kata \"candi Gebang\" tidak dikapitalisasi pada huruf c." },
        { teks: "Ciri-ciri peradaban Hindu terlihat jelas dari fisik Candi Gebang yang cenderung tinggi, ramping, berbentuk bujur sangkar seluas 27,6 meter persegi dengan dinding polos tanpa relief atau hiasan ukir-ukiran yang dibangun pada masa Dinasti Sanjaya.", bobot: 5, pembahasan: "Penulisan nama agama wajib diawali huruf kapital (\"Hindu\"). Penulisan nama geografi/bangunan bersejarah yang diikuti nama dirinya wajib kapital (\"Candi Gebang\"). Penulisan nama kekerabatan/sejarah wangsa yang diikuti nama dirinya wajib kapital (\"Dinasti Sanjaya\")." }
      ]
    },
    {
      soal: "Dalam naskah akademik perlindungan anak, ditemukan kalimat:\n\"Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam, seperti menurunnya motivasi belajar, berkurangnya komunikasi di antara anggota keluarga, penurunan aktivitas fisik pada anak, dan masuknya informasi yang tidak layak dikonsumsi.\"\nPerbaikan redaksi naskah akademik tersebut agar memenuhi kaidah efektivitas kalimat adalah ....",
      opsi: [
        { teks: "Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam, seperti penuruan motivasi belajar, berkurangnya komunikasi di antara anggota keluarga, kurangnya aktivitas fisik pada anak, dan dimasukkannya informasi yang tidak layak dikonsumsi.", bobot: 0, pembahasan: "Bentuk tidak sejajar dan mengandung typo \"penuruan\"." },
        { teks: "Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam, seperti menurunnya motivasi belajar, berkurangnya komunikasi di antara anggota keluarga, menurunnya aktivitas fisik pada anak, dan masuknya informasi yang tidak layak dikonsumsi.", bobot: 5, pembahasan: "Asas kesejajaran (paralelisme) dalam kalimat mensyaratkan perincian menggunakan kelas kata atau imbuhan yang setara. Karena perincian pertama, kedua, dan keempat menggunakan verba berafiks -nya (\"menurunnya\", \"berkurangnya\", \"masuknya\"), maka perincian ketiga juga harus diubah dari nomina \"penurunan\" menjadi verba berafiks -nya, yaitu \"menurunnya aktivitas fisik\"." },
        { teks: "Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam; seperti menurunnya motivasi belajar, berkurangnya komunikasi di antara anggota keluarga, penurunan aktivitas fisik pada anak, dan masuknya informasi yang tidak layak dikonsumsi.", bobot: 0, pembahasan: "Penggunaan tanda titik koma (;) sebelum kata \"seperti\" keliru, dan bentuk rincian belum disejajarkan." },
        { teks: "Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam, yakni seperti menurunnya motivasi belajar, kurangnya komunikasi di antara anggota keluarga, menurunnya aktivitas fisik pada anak, dan pemasukan informasi yang tidak layak dikonsumsi.", bobot: 0, pembahasan: "Pemborosan kata \"yakni seperti\" dan bentuk rincian tidak sejajar." },
        { teks: "Dampak penggunaan gawai secara berlebihan pada anak bermacam-macam seperti menurunnya motivasi belajar, berkurangnya komunikasi di antara anggota keluarga, penurunan aktivitas fisik pada anak, dan masuknya informasi yang tidak layak dikonsumsi.", bobot: 0, pembahasan: "Tidak menggunakan tanda koma sebelum kata \"seperti\" dan rincian tidak sejajar." }
      ]
    },
    {
      soal: "Naskah pidato kementerian memuat kalimat berikut:\n\"Predikat sebagai Pulau Energi Bersih sangat mungkin terwujud bagi Pulau Bali, mengingat kondisi geografisnya yang mendukung, antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infra struktur memadai, dan sejak Februari 2016 sudah di tetapkan sebagai Pusat Keunggulan (Center of Excellence) Energi Bersih Dunia.\"\nPerbaikan ejaan secara menyeluruh pada klausul naskah pidato tersebut adalah ....",
      opsi: [
        { teks: "Predikat sebagai Pulau Energi Bersih sangat mungkin terwujud bagi Pulau Bali, mengingat kondisi geografisnya yang mendukung, antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infra struktur memadai, dan sejak Pebruari 2016 sudah ditetapkan sebagai Pusat Keunggulan (<i>Center of Excellence</i>) Energi Bersih Dunia.", bobot: 0, pembahasan: "\"infra struktur\" dipisah dan menggunakan ejaan usang \"Pebruari\" (seharusnya Februari)." },
        { teks: "Predikat sebagai pulau Energi Bersih sangat mungkin terwujud bagi Pulau Bali, mengingat kondisi geografisnya yang mendukung, antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infrastruktur memadai, dan sejak Februari 2016 sudah ditetapkan sebagai Pusat Keunggulan (Center of Excellence) Energi Bersih Dunia.", bobot: 0, pembahasan: "\"pulau Energi Bersih\" tidak dikapitalisasi dan istilah asing tidak dicetak miring." },
        { teks: "Predikat sebagai Pulau Energi Bersih sangat mungkin terwujud bagi pulau Bali, mengingat kondisi geografisnya yang mendukung, antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infrastruktur memadai, dan sejak Februari 2016 sudah ditetapkan sebagai Pusat Keunggulan (<i>Center of Excellence</i>) Energi Bersih Dunia.", bobot: 0, pembahasan: "\"pulau Bali\" ditulis dengan p kecil." },
        { teks: "Predikat sebagai Pulau Energi Bersih sangat mungkin terwujud bagi Pulau Bali, mengingat kondisi geografisnya yang mendukung, antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infrastruktur memadai, dan sejak Februari 2016 sudah ditetapkan sebagai Pusat Keunggulan (<i>Center of Excellence</i>) Energi Bersih Dunia.", bobot: 5, pembahasan: "Perbaikan mencakup: 1) Kata gabung \"infrastruktur\" ditulis serangkai (bukan dipisah). 2) Awalan di- pada kata kerja \"ditetapkan\" ditulis serangkai (bukan dipisah di tetapkan). 3) Istilah bahasa asing dalam kurung wajib dicetak miring (Center of Excellence). 4) \"Pulau Bali\" dikapitalisasi karena merujuk letak geografi beriring nama diri. 5) \"Pulau Energi Bersih\" dikapitalisasi karena merupakan nama predikat/penghargaan khusus." },
        { teks: "Predikat sebagai Pulau Energi Bersih sangat mungkin terwujud bagi Pulau Bali, mengingat kondisi geografisnya yang mendukung antara lain sudah menjadi tujuan wisatawan dunia, sudah memiliki infrastruktur memadai, dan sejak Februari 2016 sudah di tetapkan sebagai Pusat Keunggulan (Center of Excellence) Energi Bersih Dunia.", bobot: 0, pembahasan: "\"di tetapkan\" dipisah (awalan di- salah kaprah dengan preposisi di) dan istilah asing tidak dicetak miring." }
      ]
    },
    {
      soal: "Optimalisasi Sistem Pemerintahan Berbasis Elektronik (SPBE) di tingkat daerah sangat bergantung pada ketersediaan infrastruktur jaringan dan literasi digital aparatur. Banyak pemerintah daerah yang telah meluncurkan aplikasi pelayanan publik, namun gagal mencapai target pengguna aktif karena lambatnya koneksi internet di wilayah terluar. Selain itu, minimnya kecakapan teknis pegawai dalam mengoperasikan peladen (server) menyebabkan seringnya terjadi kebocoran data. Jika kendala teknis dan sumber daya manusia ini tidak segera diatasi, integrasi data nasional yang bertujuan memangkas birokrasi akan sulit terwujud.\nGagasan utama paragraf tersebut adalah ....",
      opsi: [
        { teks: "Banyaknya aplikasi pelayanan publik daerah yang gagal mencapai target pengguna.", bobot: 0, pembahasan: "Banyaknya aplikasi yang gagal hanya contoh akibat." },
        { teks: "Lambatnya koneksi internet di wilayah terluar sebagai penghambat integrasi data nasional.", bobot: 0, pembahasan: "Koneksi lambat hanya salah satu penyebab." },
        { teks: "Upaya memangkas birokrasi berbelit melalui pelaksanaan SPBE.", bobot: 0, pembahasan: "Pemangkasan birokrasi tidak dibahas sebagai gagasan utama." },
        { teks: "Ancaman kebocoran data akibat minimnya kecakapan teknis pegawai mengoperasikan peladen.", bobot: 0, pembahasan: "Kebocoran data hanya salah satu akibat." },
        { teks: "Optimalisasi SPBE bergantung pada kesiapan infrastruktur jaringan dan literasi digital aparatur daerah.", bobot: 5, pembahasan: "Kalimat awal menyatakan bahwa optimalisasi SPBE bergantung pada infrastruktur dan literasi digital; kalimat lain menjelaskannya." }
      ]
    },
    {
      soal: "Transparansi pengelolaan Anggaran Pendapatan dan Belanja Daerah (APBD) merupakan instrumen krusial dalam mewujudkan tata kelola pemerintahan yang bersih dari praktik korupsi. Melalui publikasi dokumen perencanaan dan rincian alokasi anggaran di portal resmi, masyarakat dapat secara langsung mengawasi aliran dana proyek secara akuntabel. Hal ini tidak hanya meminimalisasi celah bagi pejabat untuk melakukan penggelembungan (mark-up) dana, tetapi juga memaksa aparatur sipil negara untuk lebih bertanggung jawab dalam menyusun laporan. Pada akhirnya, tingkat kepercayaan publik terhadap integritas birokrasi akan meningkat tajam seiring dengan berkurangnya angka penyelewengan.\nIde pokok teks tersebut adalah ....",
      opsi: [
        { teks: "Meningkatnya kepercayaan publik akibat menurunnya penyelewengan anggaran.", bobot: 0, pembahasan: "Kepercayaan publik hanya dampak yang disebut kemudian." },
        { teks: "Mudahnya masyarakat mengawasi aliran dana proyek pembangunan daerah.", bobot: 0, pembahasan: "Kemudahan mengawasi hanya salah satu manfaat." },
        { teks: "Kewajiban ASN menyusun laporan keuangan yang akuntabel.", bobot: 0, pembahasan: "Kewajiban melaporkan hanya salah satu rincian." },
        { teks: "Publikasi dokumen perencanaan di portal resmi untuk mencegah penggelembungan dana.", bobot: 0, pembahasan: "Publikasi dokumen hanya cara pelaksanaan." },
        { teks: "Transparansi APBD sebagai sarana mewujudkan pemerintahan yang bersih.", bobot: 5, pembahasan: "Kalimat pertama menyatakan transparansi APBD penting untuk pemerintahan yang bersih; kalimat lain menjelaskannya." }
      ]
    },
    {
      soal: "Penerapan jam kerja fleksibel bagi aparatur sipil negara di beberapa kementerian terbukti berhasil menurunkan tingkat kemacetan di jalan protokol ibu kota secara signifikan. Meskipun demikian, evaluasi internal dari pihak inspektorat menemukan adanya penurunan kualitas koordinasi antarinstansi akibat lambatnya respons komunikasi di luar jam sibuk. Sistem pengawasan kinerja jarak jauh juga dinilai masih sangat rentan terhadap manipulasi laporan kehadiran harian pegawai. Oleh karena itu, kementerian tengah merumuskan indikator kinerja utama (IKU) digital yang terintegrasi langsung dengan sistem presensi berbasis lokasi waktu nyata (real-time).\nKesimpulan yang paling tepat dari teks tersebut adalah ....",
      opsi: [
        { teks: "Jam kerja fleksibel menyebabkan menurunnya kemacetan di jalan protokol ibu kota.", bobot: 0, pembahasan: "Ini hanya manfaat yang disebut di awal." },
        { teks: "Koordinasi antarinstansi menurun akibat komunikasi yang lambat di luar jam sibuk.", bobot: 0, pembahasan: "Ini hanya satu temuan evaluasi." },
        { teks: "Pengawasan kinerja berbasis laporan mandiri rentan terhadap manipulasi kehadiran.", bobot: 0, pembahasan: "Ini hanya satu temuan evaluasi." },
        { teks: "Indikator kinerja digital terintegrasi diperlukan untuk mengatasi kelemahan pengawasan pada jam kerja fleksibel.", bobot: 5, pembahasan: "Kesimpulan teks: kelemahan pengawasan diatasi dengan merumuskan indikator kinerja digital terintegrasi." },
        { teks: "Inspektorat menyarankan pembatalan jam kerja fleksibel karena tingginya manipulasi laporan.", bobot: 0, pembahasan: "Teks tidak menyebut pembatalan." }
      ]
    },
    {
      soal: "Perhatikan kalimat pada draf surat edaran berikut.\n\"Bagi semua para pegawai-pegawai yang belum menyerahkan kelengkapan laporan akhir tahun diharap agar segera menyerahkannya ke bagian kepegawaian.\"\nPerbaikan kalimat agar menjadi kalimat efektif sesuai kaidah tata bahasa baku adalah ....",
      opsi: [
        { teks: "Bagi semua pegawai yang belum menyerahkan kelengkapan laporan akhir tahun diharap menyerahkannya ke bagian kepegawaian.", bobot: 0, pembahasan: "Masih diawali kata depan \"Bagi\" sehingga kalimat tidak bersubjek." },
        { teks: "Semua para pegawai yang belum menyerahkan kelengkapan laporan akhir tahun diharap agar segera menyerahkannya ke bagian kepegawaian.", bobot: 0, pembahasan: "\"Semua para\" boros dan \"diharap agar\" tidak hemat." },
        { teks: "Seluruh pegawai yang belum menyerahkan kelengkapan laporan akhir tahun diharapkan segera menyerahkannya ke bagian kepegawaian.", bobot: 5, pembahasan: "Kalimat ini memiliki subjek yang jelas, tidak boros, dan memakai \"diharapkan\" yang tepat." },
        { teks: "Kepada seluruh pegawai yang belum menyerahkan kelengkapan laporan akhir tahun diharap agar segera menyerahkannya ke bagian kepegawaian.", bobot: 0, pembahasan: "Masih diawali kata depan \"Kepada\" sehingga kalimat tidak bersubjek." },
        { teks: "Para pegawai yang belum menyerahkan kelengkapan laporan akhir tahun agar segera diharapkan menyerahkannya ke bagian kepegawaian.", bobot: 0, pembahasan: "\"agar segera diharapkan\" menyalahi struktur kalimat." }
      ]
    },
    {
      soal: "Sebagai staf sekretariat, Anda mencetak surat undangan rapat koordinasi. Penulisan alamat tujuan surat dinas yang paling tepat sesuai Ejaan yang Disempurnakan (EYD) adalah ....",
      opsi: [
        { teks: "Kepada Yth. Bapak Dr. H. Sudirman, M.Si.\nKepala Dinas Kesehatan Provinsi\nJln. Merdeka No. 15\nJakarta Pusat", bobot: 0, pembahasan: "\"Kepada Yth.\" berlebihan karena \"Yth.\" sudah bermakna \"kepada yang terhormat\", dan \"Jln.\" bukan singkatan baku." },
        { teks: "Yth. Dr. H. Sudirman, M.Si.\nKepala Dinas Kesehatan Provinsi\nJalan Merdeka 15\nJakarta Pusat", bobot: 5, pembahasan: "Alamat surat dinas diawali \"Yth.\" diikuti nama dan gelar, tanpa \"Kepada\" dan tanpa tanda baca di akhir baris alamat." },
        { teks: "Kepada Yth, Dr. H. Sudirman, M.Si.\nKepala Dinas Kesehatan Provinsi\nJalan Merdeka Nomor 15\nJakarta Pusat", bobot: 0, pembahasan: "\"Yth,\" memakai tanda koma yang salah dan \"Kepada\" berlebihan." },
        { teks: "Yth: Bapak Dr. H. Sudirman, M.Si.\nKepala Dinas Kesehatan Provinsi\nJln. Merdeka 15\nJakarta Pusat.", bobot: 0, pembahasan: "\"Yth:\" memakai titik dua, \"Jln.\" bukan singkatan baku, dan alamat diakhiri titik." },
        { teks: "Yth. Dr. H. Sudirman, M.Si.\nKepala Dinas Kesehatan Provinsi\nJalan Merdeka 15,\nJakarta Pusat.", bobot: 0, pembahasan: "Baris alamat diakhiri tanda koma dan titik yang tidak diperlukan." }
      ]
    },
    {
      soal: "Perhatikan kalimat pada draf notula berikut.\nDalam draf notula rapat paripurna yang dibagikan, sekretaris daerah menggarisbawahi bahwa setiap pimpinan instansi harus segera menyerahkan dokumen pertanggung jawaban atas serapan anggaran kuartal pertama sebelum lembaga pemeriksa keuangan memulai audit lapangan.\nBerdasarkan KBBI, penulisan kata baku yang tepat untuk \"pertanggung jawaban\" pada kalimat tersebut adalah ....",
      opsi: [
        { teks: "per tanggung jawaban", bobot: 0, pembahasan: "Konfiks per-an tidak boleh dipisah dari kata dasarnya." },
        { teks: "per tanggungjawaban", bobot: 0, pembahasan: "\"Tanggungjawab\" tidak baku karena gabungan kata itu ditulis terpisah bila tanpa konfiks." },
        { teks: "pertanggung-jawaban", bobot: 0, pembahasan: "Tanda hubung tidak dipakai pada gabungan kata yang mendapat konfiks." },
        { teks: "pertanggung jawaban", bobot: 0, pembahasan: "Penulisan terpisah tidak baku untuk kata berkonfiks." },
        { teks: "pertanggungjawaban", bobot: 5, pembahasan: "Gabungan kata \"tanggung jawab\" yang mendapat konfiks per-an ditulis serangkai menjadi \"pertanggungjawaban\"." }
      ]
    },
    {
      soal: "Penerapan sistem merit dalam manajemen aparatur sipil negara merupakan langkah mutlak untuk mewujudkan reformasi birokrasi yang bersih dan berkelas dunia. Kebijakan ini memastikan bahwa rekrutmen, promosi, dan penempatan pegawai didasarkan sepenuhnya pada kualifikasi, kompetensi, serta kinerja, tanpa memandang latar belakang politik, ras, atau golongan. Pada praktiknya, implementasi sistem merit secara konsisten terbukti mampu menekan angka intervensi politik dan jual beli jabatan yang selama ini sering menjadi akar masalah tata kelola di tingkat instansi daerah. Selain itu, sistem ini memberikan jaminan objektivitas bagi para pegawai berprestasi untuk merencanakan dan mengembangkan kariernya hingga menduduki jabatan pimpinan tinggi. Oleh karena itu, pengawasan yang terintegrasi dari komisi independen sangat diperlukan agar pejabat pembina kepegawaian tidak menyalahgunakan wewenang mutlaknya menjelang masa pergantian kekuasaan daerah.\nGagasan utama paragraf tersebut adalah ....",
      opsi: [
        { teks: "Pengawasan komisi independen terhadap wewenang pejabat pembina kepegawaian daerah.", bobot: 0, pembahasan: "Pengawasan komisi hanya disebut di akhir sebagai rincian." },
        { teks: "Penempatan aparatur sipil negara berdasarkan kompetensi dan kualifikasi kinerja.", bobot: 0, pembahasan: "Penempatan berdasarkan kompetensi adalah rincian isi kebijakan." },
        { teks: "Penghapusan jual beli jabatan dan intervensi politik di instansi pemerintah daerah.", bobot: 0, pembahasan: "Penekanan intervensi politik adalah rincian dampak." },
        { teks: "Jaminan objektivitas penilaian bagi pegawai berprestasi untuk menduduki jabatan pimpinan tinggi.", bobot: 0, pembahasan: "Jaminan objektivitas adalah rincian manfaat." },
        { teks: "Penerapan sistem merit sebagai langkah mewujudkan reformasi birokrasi yang bersih.", bobot: 5, pembahasan: "Kalimat pertama memuat gagasan utama, yaitu sistem merit untuk reformasi birokrasi yang bersih; kalimat lain memerincinya." }
      ]
    },
    {
      soal: "Penerapan sistem merit dalam manajemen aparatur sipil negara merupakan langkah mutlak untuk mewujudkan reformasi birokrasi yang bersih dan berkelas dunia. Kebijakan ini memastikan bahwa rekrutmen, promosi, dan penempatan pegawai didasarkan sepenuhnya pada kualifikasi, kompetensi, serta kinerja, tanpa memandang latar belakang politik, ras, atau golongan. Pada praktiknya, implementasi sistem merit secara konsisten terbukti mampu menekan angka intervensi politik dan jual beli jabatan yang selama ini sering menjadi akar masalah tata kelola di tingkat instansi daerah. Selain itu, sistem ini memberikan jaminan objektivitas bagi para pegawai berprestasi untuk merencanakan dan mengembangkan kariernya hingga menduduki jabatan pimpinan tinggi. Oleh karena itu, pengawasan yang terintegrasi dari komisi independen sangat diperlukan agar pejabat pembina kepegawaian tidak menyalahgunakan wewenang mutlaknya menjelang masa pergantian kekuasaan daerah.\nPernyataan berikut yang berupa fakta dan paling kuat mendukung gagasan utama paragraf di atas adalah ....",
      opsi: [
        { teks: "Beberapa kementerian merencanakan revisi undang-undang kepegawaian untuk memperluas kewenangan evaluasi panitia seleksi.", bobot: 0, pembahasan: "Rencana revisi undang-undang tidak membuktikan manfaat sistem merit." },
        { teks: "Terdapat usulan agar penerapan sistem merit ditunda di daerah kepulauan yang belum memiliki infrastruktur memadai.", bobot: 0, pembahasan: "Usulan penundaan melemahkan gagasan utama." },
        { teks: "Sebagian besar aparatur sipil negara di daerah masih menganggap kedekatan politik sebagai penentu promosi.", bobot: 0, pembahasan: "Pernyataan ini menunjukkan masalah, bukan dukungan terhadap sistem merit." },
        { teks: "Laporan indeks persepsi integritas menunjukkan bahwa instansi yang menerapkan sistem merit penuh meraih predikat wilayah bebas dari korupsi (WBK).", bobot: 5, pembahasan: "Data laporan yang menunjukkan hasil nyata penerapan sistem merit mendukung gagasan utama." },
        { teks: "Komisi kepegawaian independen sering menemui hambatan teknis saat membatalkan surat keputusan mutasi pimpinan daerah.", bobot: 0, pembahasan: "Hambatan komisi tidak membuktikan manfaat sistem merit." }
      ]
    },
    {
      soal: "(1) Kualitas pelayanan pada fasilitas kesehatan tingkat pertama merupakan parameter keberhasilan program jaminan kesehatan nasional secara menyeluruh. (2) Di tengah keterbatasan rasio tenaga medis, pemerintah daerah terus diimbau untuk tidak mengesampingkan program pengadaan sarana dan prasarana medis darurat. (3) Ketersediaan obat-obatan esensial di tingkat puskesmas merupakan pondasi utama dalam menangani keluhan pasien gawat darurat dengan cepat dan tepat. (4) Selain itu, manajemen operasional harus mencakup tata kelola distribusi dan standardisasi suhu ruang penyimpanan secara ketat guna menjaga kualitas vaksin. (5) Optimalisasi sistem logistik kesehatan ini diyakini mampu menjadi instrumen strategis dalam mewujudkan ketahanan pelayanan birokrasi di sektor kesehatan masyarakat.\nKata tidak baku menurut KBBI terdapat pada kalimat bernomor ....",
      opsi: [
        { teks: "(1)", bobot: 0, pembahasan: "Kalimat (1) memuat kata baku \"parameter\"." },
        { teks: "(2)", bobot: 0, pembahasan: "Kalimat (2) tidak memuat kata tidak baku." },
        { teks: "(3)", bobot: 5, pembahasan: "Kalimat (3) memuat kata \"pondasi\" yang tidak baku; bentuk bakunya \"fondasi\"." },
        { teks: "(4)", bobot: 0, pembahasan: "Kalimat (4) memuat kata baku \"standardisasi\"." },
        { teks: "(5)", bobot: 0, pembahasan: "Kalimat (5) memuat kata baku \"optimalisasi\" dan \"instrumen\"." }
      ]
    },
    {
      soal: "(1) Kualitas pelayanan pada fasilitas kesehatan tingkat pertama merupakan parameter keberhasilan program jaminan kesehatan nasional secara menyeluruh. (2) Di tengah keterbatasan rasio tenaga medis, pemerintah daerah terus diimbau untuk tidak mengesampingkan program pengadaan sarana dan prasarana medis darurat. (3) Ketersediaan obat-obatan esensial di tingkat puskesmas merupakan pondasi utama dalam menangani keluhan pasien gawat darurat dengan cepat dan tepat. (4) Selain itu, manajemen operasional harus mencakup tata kelola distribusi dan standardisasi suhu ruang penyimpanan secara ketat guna menjaga kualitas vaksin. (5) Optimalisasi sistem logistik kesehatan ini diyakini mampu menjadi instrumen strategis dalam mewujudkan ketahanan pelayanan birokrasi di sektor kesehatan masyarakat.\nPadanan kata bahasa Indonesia yang paling tepat untuk menggantikan kata \"parameter\" pada kalimat (1) tanpa mengubah isi pernyataan adalah ....",
      opsi: [
        { teks: "titik temu", bobot: 0, pembahasan: "\"Titik temu\" bermakna kesepakatan." },
        { teks: "tolok ukur", bobot: 5, pembahasan: "Menurut KBBI, parameter bermakna ukuran atau patokan, yang sepadan dengan \"tolok ukur\"." },
        { teks: "syarat utama", bobot: 0, pembahasan: "\"Syarat utama\" bermakna hal yang wajib dipenuhi." },
        { teks: "angka capaian", bobot: 0, pembahasan: "\"Angka capaian\" hanya bermakna hasil dalam angka." },
        { teks: "batas atas", bobot: 0, pembahasan: "\"Batas atas\" bermakna nilai tertinggi." }
      ]
    },
    {
      soal: "Menjaga kesehatan fisik dan mental pegawai merupakan langkah administratif yang sangat penting untuk mendukung produktivitas pelayanan publik secara menyeluruh. Tidak hanya untuk menekan angka absensi akibat cuti sakit, tetapi juga untuk menghindari inefisiensi anggaran kesehatan yang ditanggung oleh negara. Rutinitas sederhana, seperti pelaksanaan senam pagi bersama, penyediaan ruang laktasi, dan pemeriksaan kesehatan berkala, terbukti efektif menurunkan tingkat stres beban kerja aparatur. Kebijakan ini juga berperan besar dalam mencegah kelelahan kronis (burnout) yang sering memicu kelalaian fatal dalam penyusunan dokumen hukum. Melalui pengawasan dan fasilitas kesehatan kerja yang holistik, pemerintah tidak hanya mengamankan target kinerja instansi jangka pendek, tetapi juga membangun fondasi sumber daya manusia yang tangguh untuk menghadapi dinamika birokrasi di masa depan.\nBerdasarkan paragraf, simpulan yang paling tepat tentang kebijakan kesehatan di instansi pemerintah adalah ....",
      opsi: [
        { teks: "Kesehatan pegawai difokuskan pada pencegahan kesalahan penyusunan dokumen hukum.", bobot: 0, pembahasan: "Pencegahan kesalahan dokumen hanya satu manfaat." },
        { teks: "Anggaran kesehatan instansi selalu membengkak akibat kelelahan kronis pegawai.", bobot: 0, pembahasan: "Teks tidak menyatakan anggaran selalu membengkak." },
        { teks: "Senam pagi harus diwajibkan agar instansi terhindar dari tuntutan hukum akibat kelalaian pegawai.", bobot: 0, pembahasan: "Teks tidak mewajibkan senam pagi." },
        { teks: "Ruang laktasi dan pemeriksaan kesehatan adalah syarat agar anggaran kesehatan tidak dipotong kementerian.", bobot: 0, pembahasan: "Teks tidak menyebut syarat anggaran." },
        { teks: "Menjaga kesehatan pegawai adalah investasi strategis birokrasi untuk menjamin produktivitas dan mutu pelayanan masa depan.", bobot: 5, pembahasan: "Paragraf menegaskan menjaga kesehatan pegawai mendukung produktivitas dan membangun fondasi sumber daya manusia." }
      ]
    },
    {
      soal: "Anda menyunting draf rilis pers (<i>press release</i>) instansi yang memuat kalimat berikut:\n\"Pelaksanaan pertunjukkan seni tradisional dalam rangka perayaan hari jadi kementerian dinilai telah berhasil meningkatkan partisipasi masyarakat lokal serta mempromosikan festifal kebudayaan daerah secara masif.\"\nKalimat tersebut tidak memenuhi kaidah bahasa Indonesia yang baik dan benar karena ....",
      opsi: [
        { teks: "Terjadi pemborosan kata pada subjek ganda.", bobot: 0, pembahasan: "Subjek kalimat tidak ganda." },
        { teks: "Terdapat kata dasar dan kata serapan yang tidak baku menurut KBBI.", bobot: 5, pembahasan: "Bentuk baku adalah \"pertunjukan\" dan \"festival\"; \"pertunjukkan\" dan \"festifal\" tidak baku." },
        { teks: "Kalimat tidak memiliki predikat sehingga tidak logis.", bobot: 0, pembahasan: "Kalimat memiliki predikat \"dinilai\"." },
        { teks: "Kata depan di awal kalimat merusak struktur kalimat.", bobot: 0, pembahasan: "Kalimat tidak diawali kata depan." },
        { teks: "Terdapat ketidaksejajaran bentuk kata kerja pada anak kalimat.", bobot: 0, pembahasan: "Bentuk kata kerja pada anak kalimat sudah sejajar." }
      ]
    },
    {
      soal: "Pemerintah daerah menetapkan kebijakan migrasi seluruh arsip fisik ke dalam sistem komputasi awan (<i>cloud</i>) terpusat untuk meningkatkan keamanan data kependudukan. Kebijakan digitalisasi ini diklaim mampu menghilangkan risiko kerusakan dokumen akibat bencana alam dan pencurian fisik secara absolut. Selain itu, sistem enkripsi tingkat tinggi yang diterapkan diyakini menjadikan pangkalan data masyarakat mustahil untuk diretas oleh pihak yang tidak bertanggung jawab. Oleh karena itu, kepala daerah menyatakan bahwa tingkat kepercayaan publik terhadap tata kelola arsip digital instansi saat ini telah mencapai puncaknya dan tidak perlu ada kekhawatiran terkait kebocoran informasi privasi.\nPernyataan berikut yang paling melemahkan klaim pemerintah daerah pada teks di atas adalah ....",
      opsi: [
        { teks: "Survei independen menunjukkan sebagian besar warga desa masih lebih menyukai formulir kertas karena keterbatasan akses internet.", bobot: 0, pembahasan: "Pilihan warga tidak membantah klaim keamanan." },
        { teks: "Anggaran memelihara <i>server</i> komputasi awan ternyata jauh melebihi biaya perawatan ruang arsip fisik.", bobot: 0, pembahasan: "Biaya anggaran tidak membantah klaim keamanan." },
        { teks: "Laporan Badan Siber dan Sandi Negara mencatat peretasan dan kebocoran jutaan data kependudukan dari sistem <i>cloud</i> pemerintah daerah itu pada bulan lalu.", bobot: 5, pembahasan: "Klaim pemerintah adalah data mustahil diretas; laporan peretasan nyata membantahnya secara langsung." },
        { teks: "Kebakaran hebat di kantor arsip daerah tahun lalu memusnahkan sebagian besar dokumen kependudukan sebelum sempat dipindai.", bobot: 0, pembahasan: "Kebakaran justru mendukung perlunya digitalisasi." },
        { teks: "Migrasi data arsip fisik ke sistem digital memakan waktu dua kali lebih lama dari target awal.", bobot: 0, pembahasan: "Lamanya migrasi tidak membantah klaim keamanan." }
      ]
    },
    {
      soal: "(1) Integritas dan disiplin merupakan nilai dasar yang membentuk identitas profesional seorang aparatur sipil negara dalam memberikan pelayanan publik. (2) Melalui penanaman nilai-nilai etika birokrasi ini, setiap pegawai mendapatkan landasan moral yang kuat untuk menolak segala bentuk praktik gratifikasi dan konflik kepentingan di tempat kerja. (3) Oleh karena itu, penguatan budaya antikorupsi melalui pendidikan berkelanjutan merupakan langkah esensial untuk menjaga muruah instansi dari ancaman gaya hidup hedonisme dan materialisme yang sering kali terbawa oleh arus modernisasi.\nPernyataan yang paling sesuai dengan pokok pikiran paragraf tersebut adalah ....",
      opsi: [
        { teks: "Modernisasi adalah satu-satunya penyebab hancurnya muruah instansi pelayanan publik.", bobot: 0, pembahasan: "Teks tidak menyebut modernisasi sebagai satu-satunya penyebab." },
        { teks: "Penanaman nilai etika birokrasi diperlukan untuk memberantas semua bentuk gaya hidup modern pegawai.", bobot: 0, pembahasan: "Teks tidak menyatakan memberantas semua gaya hidup modern." },
        { teks: "Praktik gratifikasi dan konflik kepentingan bermula dari minimnya sanksi bagi aparatur sipil negara.", bobot: 0, pembahasan: "Teks tidak menyebut penyebab gratifikasi adalah minimnya sanksi." },
        { teks: "Penguatan budaya antikorupsi melalui pendidikan adalah langkah penting untuk melindungi integritas pegawai dari ancaman gaya hidup materialistis.", bobot: 5, pembahasan: "Kalimat (3) menegaskan penguatan budaya antikorupsi lewat pendidikan untuk menjaga instansi dari gaya hidup hedonistik dan materialistis." },
        { teks: "Integritas aparatur sipil negara terbentuk dengan sendirinya apabila instansi memberi fasilitas yang memadai.", bobot: 0, pembahasan: "Teks tidak menyatakan integritas terbentuk dengan sendirinya." }
      ]
    },
    {
      soal: "(1) Integritas dan disiplin merupakan nilai dasar yang membentuk identitas profesional seorang aparatur sipil negara dalam memberikan pelayanan publik. (2) Melalui penanaman nilai-nilai etika birokrasi ini, setiap pegawai mendapatkan landasan moral yang kuat untuk menolak segala bentuk praktik gratifikasi dan konflik kepentingan di tempat kerja. (3) Oleh karena itu, penguatan budaya antikorupsi melalui pendidikan berkelanjutan merupakan langkah esensial untuk menjaga muruah instansi dari ancaman gaya hidup hedonisme dan materialisme yang sering kali terbawa oleh arus modernisasi.\nKonjungsi \"Oleh karena itu\" pada awal kalimat (3) berfungsi untuk ....",
      opsi: [
        { teks: "Menunjukkan perincian dari pernyataan pada kalimat (2).", bobot: 0, pembahasan: "Perincian dinyatakan dengan konjungsi seperti \"misalnya\"." },
        { teks: "Menunjukkan syarat yang harus dipenuhi agar penanaman nilai etika pada kalimat (2) terwujud.", bobot: 0, pembahasan: "Syarat dinyatakan dengan konjungsi seperti \"jika\" atau \"apabila\"." },
        { teks: "Menyatakan pertentangan terhadap landasan moral pada kalimat (1) dan (2).", bobot: 0, pembahasan: "Pertentangan dinyatakan dengan \"namun\"." },
        { teks: "Menambahkan informasi setara yang tidak berkaitan dengan kalimat sebelumnya.", bobot: 0, pembahasan: "Kalimat (3) berkaitan logis dengan kalimat sebelumnya." },
        { teks: "Menyatakan hubungan sebab-akibat sebagai simpulan dari gagasan pada kalimat sebelumnya.", bobot: 5, pembahasan: "\"Oleh karena itu\" menyatakan akibat atau simpulan dari kalimat-kalimat sebelumnya." }
      ]
    },
    {
      soal: "Kebijakan publik merupakan instrumen utama pemerintah dalam mengatasi ketidaksetaraan dan menciptakan keadilan sosial melalui serangkaian keputusan yang menyentuh berbagai sektor esensial seperti ekonomi, pendidikan, kesehatan, hingga lingkungan. Agar tujuan tersebut tercapai, setiap kebijakan yang diadobsi tidak hanya membutuhkan analisis komprehensif pada tahap perumusan, tetapi juga menuntut implementasi yang menjunjung tinggi asas transparansi demi memberikan dampak positif yang merata bagi seluruh masyarakat. ... evaluasi berkala terhadap berbagai kebijakan yang sedang berjalan sangat mutlak diperlukan guna mengukur tingkat efektivitas, menyesuaikan kelemahan operasional di lapangan, serta memastikan bahwa arah pembangunan tetap berorientasi pada kesejahteraan publik jangka panjang.\nKonjungsi antarkalimat yang paling tepat untuk mengisi bagian rumpang pada teks di atas adalah ....",
      opsi: [
        { teks: "Namun,", bobot: 0, pembahasan: "\"Namun,\" menyatakan pertentangan." },
        { teks: "Dengan demikian,", bobot: 0, pembahasan: "\"Dengan demikian,\" menyatakan simpulan." },
        { teks: "Selain itu,", bobot: 5, pembahasan: "Kalimat sesudah rumpang menambahkan hal setara tentang evaluasi, sehingga konjungsi yang tepat adalah \"Selain itu,\"." },
        { teks: "Sebaliknya,", bobot: 0, pembahasan: "\"Sebaliknya,\" menyatakan pertentangan." },
        { teks: "Oleh karena itu,", bobot: 0, pembahasan: "\"Oleh karena itu,\" menyatakan akibat." }
      ]
    },
    {
      soal: "Kebijakan publik merupakan instrumen utama pemerintah dalam mengatasi ketidaksetaraan dan menciptakan keadilan sosial melalui serangkaian keputusan yang menyentuh berbagai sektor esensial seperti ekonomi, pendidikan, kesehatan, hingga lingkungan. Agar tujuan tersebut tercapai, setiap kebijakan yang diadobsi tidak hanya membutuhkan analisis komprehensif pada tahap perumusan, tetapi juga menuntut implementasi yang menjunjung tinggi asas transparansi demi memberikan dampak positif yang merata bagi seluruh masyarakat. ... evaluasi berkala terhadap berbagai kebijakan yang sedang berjalan sangat mutlak diperlukan guna mengukur tingkat efektivitas, menyesuaikan kelemahan operasional di lapangan, serta memastikan bahwa arah pembangunan tetap berorientasi pada kesejahteraan publik jangka panjang.\nKata \"diadobsi\" pada teks di atas tidak baku. Berdasarkan KBBI, perbaikan yang tepat adalah ....",
      opsi: [
        { teks: "di adobsi", bobot: 0, pembahasan: "\"Adobsi\" salah dan awalan di- tidak dipisah." },
        { teks: "diadopsi", bobot: 5, pembahasan: "Kata dasarnya \"adopsi\" dan awalan di- ditulis serangkai dengan kata dasar." },
        { teks: "di adopsi", bobot: 0, pembahasan: "Awalan di- tidak dipisah dari kata kerja." },
        { teks: "di-adopsi", bobot: 0, pembahasan: "Tanda hubung tidak diperlukan pada penulisan ini." },
        { teks: "diadobsi (sudah benar)", bobot: 0, pembahasan: "Kata \"adobsi\" tidak terdapat dalam KBBI." }
      ]
    },
    {
      soal: "Globalisasi telah menjadi fenomena dominan di era modern yang memicu transformasi multidimensional secara beriringan dalam aspek ekonomi, politik, dan sosial budaya. Secara ekonomi, interkoneksi ini telah membuka pintu perdagangan bebas yang memudahkan perusahaan multinasional memperluas pasarnya, meskipun di sisi lain memicu ketidaksetaraan neraca perdagangan antara negara maju dan negara berkembang. Pada aspek politik, dinamika hubungan internasional menjadi jauh lebih rumit karena negara-negara kini saling bergantung dalam menangani isu keamanan global melalui organisasi seperti Perserikatan Bangsa-Bangsa (PBB). Sementara itu, dari sisi sosial budaya, pesatnya arus teknologi informasi memang memfasilitasi pertukaran ide lintas batas yang memperkaya keberagaman, namun pada saat bersamaan hal ini memunculkan tantangan baru berupa benturan identitas lokal akibat derasnya penetrasi nilai-nilai asing.\nGagasan pokok teks tersebut adalah ....",
      opsi: [
        { teks: "Dampak multidimensional globalisasi dalam berbagai aspek kehidupan manusia.", bobot: 5, pembahasan: "Teks membahas dampak globalisasi pada ekonomi, politik, dan sosial budaya." },
        { teks: "Globalisasi sebagai fenomena yang menguntungkan sektor ekonomi modern.", bobot: 0, pembahasan: "Teks tidak membatasi manfaat pada ekonomi modern." },
        { teks: "Integrasi pasar bebas yang memicu ketidaksetaraan antarnegara berkembang.", bobot: 0, pembahasan: "Ketidaksetaraan hanya satu rincian di bidang ekonomi." },
        { teks: "Peran organisasi internasional dalam meredam konflik geopolitik global.", bobot: 0, pembahasan: "Peran organisasi internasional hanya satu rincian di bidang politik." },
        { teks: "Ancaman arus informasi dan teknologi terhadap keberagaman budaya lokal.", bobot: 0, pembahasan: "Ancaman terhadap budaya lokal hanya satu rincian di bidang sosial budaya." }
      ]
    },
    {
      soal: "Globalisasi telah menjadi fenomena dominan di era modern yang memicu transformasi multidimensional secara beriringan dalam aspek ekonomi, politik, dan sosial budaya. Secara ekonomi, interkoneksi ini telah membuka pintu perdagangan bebas yang memudahkan perusahaan multinasional memperluas pasarnya, meskipun di sisi lain memicu ketidaksetaraan neraca perdagangan antara negara maju dan negara berkembang. Pada aspek politik, dinamika hubungan internasional menjadi jauh lebih rumit karena negara-negara kini saling bergantung dalam menangani isu keamanan global melalui organisasi seperti Perserikatan Bangsa-Bangsa (PBB). Sementara itu, dari sisi sosial budaya, pesatnya arus teknologi informasi memang memfasilitasi pertukaran ide lintas batas yang memperkaya keberagaman, namun pada saat bersamaan hal ini memunculkan tantangan baru berupa benturan identitas lokal akibat derasnya penetrasi nilai-nilai asing.\nPernyataan berikut yang berupa fakta dan paling memperkuat pembahasan bidang ekonomi pada teks di atas adalah ....",
      opsi: [
        { teks: "Banyak negara pelopor industri mulai menerapkan sistem ekonomi tertutup untuk melindungi produsen dalam negeri.", bobot: 0, pembahasan: "Pernyataan ini bertentangan dengan pembukaan pasar." },
        { teks: "Globalisasi menyebabkan eksploitasi sumber daya alam yang tidak terkendali demi gaya hidup negara maju.", bobot: 0, pembahasan: "Pernyataan ini berkaitan dengan lingkungan." },
        { teks: "Masyarakat adat di pedalaman mulai meninggalkan tradisi akibat derasnya penetrasi budaya populer asing melalui internet.", bobot: 0, pembahasan: "Pernyataan ini mendukung bidang sosial budaya." },
        { teks: "Perserikatan Bangsa-Bangsa sering mengalami kebuntuan dalam mengeluarkan resolusi karena hak veto negara adikuasa.", bobot: 0, pembahasan: "Pernyataan ini mendukung bidang politik." },
        { teks: "Perjanjian perdagangan bebas lintas kawasan terbukti meningkatkan volume ekspor negara berkembang dan membuka lapangan kerja baru berskala multinasional.", bobot: 5, pembahasan: "Pernyataan ini berupa data tentang perdagangan bebas yang mendukung bahasan ekonomi." }
      ]
    },
    {
      soal: "Globalisasi telah menjadi fenomena dominan di era modern yang memicu transformasi multidimensional secara beriringan dalam aspek ekonomi, politik, dan sosial budaya. Secara ekonomi, interkoneksi ini telah membuka pintu perdagangan bebas yang memudahkan perusahaan multinasional memperluas pasarnya, meskipun di sisi lain memicu ketidaksetaraan neraca perdagangan antara negara maju dan negara berkembang. Pada aspek politik, dinamika hubungan internasional menjadi jauh lebih rumit karena negara-negara kini saling bergantung dalam menangani isu keamanan global melalui organisasi seperti Perserikatan Bangsa-Bangsa (PBB). Sementara itu, dari sisi sosial budaya, pesatnya arus teknologi informasi memang memfasilitasi pertukaran ide lintas batas yang memperkaya keberagaman, namun pada saat bersamaan hal ini memunculkan tantangan baru berupa benturan identitas lokal akibat derasnya penetrasi nilai-nilai asing.\nJudul yang paling mewakili seluruh isi teks di atas adalah ....",
      opsi: [
        { teks: "Dampak Multidimensional Globalisasi pada Era Modern", bobot: 5, pembahasan: "Judul ini mencakup ekonomi, politik, dan sosial budaya." },
        { teks: "Perubahan Dinamika Sosial di Bawah Pengaruh Teknologi", bobot: 0, pembahasan: "Judul ini hanya mencakup sebagian aspek sosial." },
        { teks: "Tantangan Geopolitik dalam Hubungan Internasional", bobot: 0, pembahasan: "Judul ini hanya mencakup bidang politik." },
        { teks: "Transformasi Kebudayaan Lokal dalam Konteks Global", bobot: 0, pembahasan: "Judul ini hanya mencakup bidang budaya." },
        { teks: "Perluasan Integrasi Ekonomi Negara Berkembang", bobot: 0, pembahasan: "Judul ini hanya mencakup bidang ekonomi." }
      ]
    },
    {
      soal: "Peringatan kemerdekaan Republik Indonesia di lingkungan instansi pemerintah bukan sekadar perayaan seremonial tahunan, melainkan momentum krusial untuk menanamkan nilai-nilai persatuan dan nasionalisme ke dalam etos kerja birokrasi. Jauh sebelum proklamasi dikumandangkan pada tahun 1945, sejarah pergerakan nasional telah membuktikan bahwa dominasi ego sektoral dan perpecahan kedaerahan hanya akan memperlemah ketahanan bangsa dalam menghadapi krisis. Oleh karena itu, pada era tata kelola modern saat ini, setiap aparatur sipil negara memikul amanah historis untuk meneladani kegigihan para pendiri bangsa dengan cara menyingkirkan sekat-sekat primordial dan mengutamakan kolaborasi lintas kementerian. Lebih lanjut, perwujudan kedaulatan sejati menuntut hadirnya aparatur yang responsif, menjunjung tinggi keadilan sosial, dan bersih dari segala bentuk praktik diskriminasi pelayanan. Melalui transformasi birokrasi yang inklusif dan berintegritas inilah, pemerintah tidak hanya menghormati pengorbanan pahlawan masa lalu, tetapi juga memastikan terwujudnya negara yang benar-benar berdaulat, adil, dan makmur.\nGagasan pokok teks orasi tersebut adalah ....",
      opsi: [
        { teks: "Peringatan kemerdekaan sebagai momentum menanamkan persatuan dan nasionalisme dalam etos kerja birokrasi.", bobot: 5, pembahasan: "Kalimat pertama menyatakan bahwa peringatan kemerdekaan adalah momentum menanamkan persatuan dan nasionalisme dalam etos kerja birokrasi; kalimat lain menjelaskannya." },
        { teks: "Sejarah pergerakan nasional yang membuktikan kelemahan bangsa akibat dominasi ego sektoral dan kedaerahan.", bobot: 0, pembahasan: "Sejarah pergerakan hanya contoh pendukung." },
        { teks: "Amanah historis aparatur sipil negara untuk mengutamakan kerja sama lintas kementerian pada era modern.", bobot: 0, pembahasan: "Amanah ASN hanya salah satu rincian." },
        { teks: "Tuntutan perwujudan kedaulatan melalui pelayanan publik yang responsif dan bebas diskriminasi.", bobot: 0, pembahasan: "Tuntutan pelayanan hanya salah satu rincian." },
        { teks: "Penghormatan terhadap pahlawan masa lalu demi mewujudkan negara yang berdaulat, adil, dan makmur.", bobot: 0, pembahasan: "Penghormatan pahlawan hanya penutup." }
      ]
    },
    {
      soal: "Peringatan kemerdekaan Republik Indonesia di lingkungan instansi pemerintah bukan sekadar perayaan seremonial tahunan, melainkan momentum krusial untuk menanamkan nilai-nilai persatuan dan nasionalisme ke dalam etos kerja birokrasi. Jauh sebelum proklamasi dikumandangkan pada tahun 1945, sejarah pergerakan nasional telah membuktikan bahwa dominasi ego sektoral dan perpecahan kedaerahan hanya akan memperlemah ketahanan bangsa dalam menghadapi krisis. Oleh karena itu, pada era tata kelola modern saat ini, setiap aparatur sipil negara memikul amanah historis untuk meneladani kegigihan para pendiri bangsa dengan cara menyingkirkan sekat-sekat primordial dan mengutamakan kolaborasi lintas kementerian. Lebih lanjut, perwujudan kedaulatan sejati menuntut hadirnya aparatur yang responsif, menjunjung tinggi keadilan sosial, dan bersih dari segala bentuk praktik diskriminasi pelayanan. Melalui transformasi birokrasi yang inklusif dan berintegritas inilah, pemerintah tidak hanya menghormati pengorbanan pahlawan masa lalu, tetapi juga memastikan terwujudnya negara yang benar-benar berdaulat, adil, dan makmur.\nBerdasarkan teks, simpulan yang logis tentang makna kemerdekaan bagi aparatur birokrasi masa kini adalah ....",
      opsi: [
        { teks: "Kemerdekaan harus diperingati secara meriah setiap tahun agar masyarakat tidak melupakan sejarah penjajahan.", bobot: 0, pembahasan: "Teks menyatakan peringatan bukan sekadar perayaan seremonial." },
        { teks: "Kemerdekaan adalah pengingat untuk menolak setiap bentuk campur tangan asing dalam kebijakan publik.", bobot: 0, pembahasan: "Teks tidak membahas penolakan campur tangan asing." },
        { teks: "Kemerdekaan menuntut pemerintah memberi kompensasi kesejahteraan lebih besar kepada keturunan pahlawan.", bobot: 0, pembahasan: "Teks tidak membahas kompensasi bagi keturunan pahlawan." },
        { teks: "Kemerdekaan dimaknai sebagai kewajiban menghilangkan ego sektoral demi tata kelola pemerintahan yang berkeadilan sosial.", bobot: 5, pembahasan: "Teks menyatakan ASN harus menyingkirkan sekat dan mengutamakan kerja sama demi birokrasi yang inklusif dan adil." },
        { teks: "Kemerdekaan adalah momentum menghapus seluruh peraturan peninggalan kolonial yang masih berlaku di daerah.", bobot: 0, pembahasan: "Teks tidak membahas penghapusan peraturan kolonial." }
      ]
    },
    {
      soal: "Praktik perundungan (bullying) di lingkungan kerja instansi pemerintah merupakan ancaman serius yang dapat menghancurkan produktivitas dan mencederai asas kemanusiaan aparatur sipil negara. Perilaku agresif ini tidak hanya berwujud kekerasan fisik, tetapi lebih sering bermanifestasi dalam bentuk kekerasan verbal dan psikologis, seperti penyebaran rumor, isolasi sosial, hingga intimidasi terorganisasi melalui media komunikasi digital (cyberbullying) antardivisi. Dampak dari lingkungan kerja yang toksik ini sangat merugikan, di mana pegawai yang menjadi korban rentan mengalami krisis kepercayaan diri, depresi, hingga trauma berkepanjangan yang melumpuhkan kualitas pelayanan publik mereka. Oleh karena itu, upaya pemberantasan perundungan di birokrasi mutlak membutuhkan ketegasan pejabat pembina kepegawaian untuk menerapkan sistem pengaduan pelapor (whistleblowing) yang terjamin kerahasiaannya, serta membangun budaya kerja inklusif yang berbasis pada nilai saling menghormati martabat antarrekan sejawat.\nPesan utama yang disampaikan penulis dalam teks tersebut adalah ....",
      opsi: [
        { teks: "Perlunya sistem pengaduan yang tegas dan budaya kerja inklusif untuk memberantas perundungan di birokrasi.", bobot: 5, pembahasan: "Kalimat penutup menegaskan perlunya sistem pengaduan yang terjamin kerahasiaannya dan budaya kerja inklusif." },
        { teks: "Pentingnya menindak pelaku perundungan fisik dengan pemecatan tidak dengan hormat.", bobot: 0, pembahasan: "Pemecatan tidak disebut dalam teks." },
        { teks: "Imbauan agar korban perundungan lebih berani melawan intimidasi verbal secara mandiri.", bobot: 0, pembahasan: "Teks tidak mengimbau korban melawan sendiri." },
        { teks: "Perlunya pendampingan psikologis intensif bagi pegawai yang produktivitasnya menurun karena masalah pribadi.", bobot: 0, pembahasan: "Teks membahas perundungan, bukan masalah pribadi pegawai." },
        { teks: "Peringatan tentang bahaya media komunikasi digital yang disalahgunakan untuk menyebarkan rumor.", bobot: 0, pembahasan: "Media digital hanya salah satu bentuk perundungan." }
      ]
    },
    {
      soal: "(1) Keberhasilan program pengentasan tengkes (stunting) di daerah tertinggal sangat bergantung pada diversifikasi sumber gizi yang mudah dijangkau oleh masyarakat lokal. (2) Dalam program intervensi gizi ini, susu kambing murni cendrung lebih direkomendasikan oleh dinas kesehatan karena struktur partikel lemaknya lebih ramah bagi metabolisme anak. (3) Kandungan protein di dalam susu kambing juga dianggap oleh para pakar kesehatan adalah lebih mudah untuk diuraikan, membuatnya menjadi cocok untuk individu balita yang sulit untuk mencerna susu sapi. (4) Selain itu, komoditas peternakan ini kaya akan kalsium dan vitamin esensial yang berfungsi mempercepat perbaikan sel saraf serta pembentukan matriks tulang pada masa pertumbuhan emas. (5) Melalui sosialisasi terstruktur dan pendampingan yang berkelanjutan, pemanfaatan alternatif gizi ini diyakini mampu menjadi instrumen strategis untuk menekan prevalensi gizi buruk secara nasional.\nKata tidak baku menurut KBBI pada kalimat (2) adalah ....",
      opsi: [
        { teks: "cendrung", bobot: 5, pembahasan: "Bentuk baku menurut KBBI adalah \"cenderung\"." },
        { teks: "metabolisme", bobot: 0, pembahasan: "\"Metabolisme\" adalah bentuk baku." },
        { teks: "diurai", bobot: 0, pembahasan: "\"Diurai\" adalah bentuk baku." },
        { teks: "partikel", bobot: 0, pembahasan: "\"Partikel\" adalah bentuk baku." },
        { teks: "gizi", bobot: 0, pembahasan: "\"Gizi\" adalah bentuk baku." }
      ]
    },
    {
      soal: "(1) Keberhasilan program pengentasan tengkes (stunting) di daerah tertinggal sangat bergantung pada diversifikasi sumber gizi yang mudah dijangkau oleh masyarakat lokal. (2) Dalam program intervensi gizi ini, susu kambing murni cendrung lebih direkomendasikan oleh dinas kesehatan karena struktur partikel lemaknya lebih ramah bagi metabolisme anak. (3) Kandungan protein di dalam susu kambing juga dianggap oleh para pakar kesehatan adalah lebih mudah untuk diuraikan, membuatnya menjadi cocok untuk individu balita yang sulit untuk mencerna susu sapi. (4) Selain itu, komoditas peternakan ini kaya akan kalsium dan vitamin esensial yang berfungsi mempercepat perbaikan sel saraf serta pembentukan matriks tulang pada masa pertumbuhan emas. (5) Melalui sosialisasi terstruktur dan pendampingan yang berkelanjutan, pemanfaatan alternatif gizi ini diyakini mampu menjadi instrumen strategis untuk menekan prevalensi gizi buruk secara nasional.\nPerbaikan kalimat (3) agar efektif adalah ....",
      opsi: [
        { teks: "Kandungan protein di susu kambing dianggap ahli gizi mudah diuraikan, sehingga cocok bagi balita yang sulit mencerna susu sapi.", bobot: 0, pembahasan: "Kalimat ini masih memuat \"di susu\" dan \"dianggap ahli gizi\" yang tidak perlu." },
        { teks: "Karena kandungan protein susu kambing mudah diuraikan, membuatnya cocok bagi individu balita yang sangat sulit mencerna susu sapi.", bobot: 0, pembahasan: "Kalimat ini memakai \"karena ... membuatnya\" sehingga tidak bersubjek-predikat yang jelas." },
        { teks: "Protein di dalam susu kambing dianggap lebih mudah untuk diuraikan, membuatnya menjadi cocok untuk balita intoleran susu sapi.", bobot: 0, pembahasan: "Kalimat ini masih memuat \"di dalam\", \"untuk\", dan \"menjadi\" yang boros." },
        { teks: "Kandungan protein susu kambing adalah lebih mudah diuraikan, membuat hal itu cocok untuk individu balita yang sulit mencerna susu sapi.", bobot: 0, pembahasan: "Kalimat ini memakai \"adalah\" dan \"individu\" yang mubazir." },
        { teks: "Kandungan protein susu kambing lebih mudah diuraikan sehingga cocok bagi balita yang kesulitan mencerna susu sapi.", bobot: 5, pembahasan: "Kalimat ini hemat, bersubjek dan berpredikat jelas, serta tidak memakai kata mubazir." }
      ]
    },
    {
      soal: "(1) Tindakan pelecehan di lingkungan birokrasi merupakan pelanggaran disiplin berat yang dapat merusak integritas dan kualitas pelayanan publik. (2) Dampaknya terhadap pegawai yang menjadi korban sangat luas dan seringkali menyebabkan trauma psikologis yang berkepanjangan. (3) Dalam beberapa kasus, korban mengalami krisis kepercayaan diri yang signifikan hingga memerlukan pendampingan khusus dari biro sumber daya manusia. (4) Reaksi yang umum terjadi setelah insiden traumatis tersebut adalah munculnya post traumatic stress disorder yang mengganggu fokus penyelesaian tugas-tugas administratif. (5) Selain itu, lingkungan kerja yang tidak aman juga dapat menghambat perkembangan kompetensi dan mematikan karir aparatur sipil negara di masa depan. (6) Oleh karena itu, pimpinan instansi wajib menyediakan sistem pengaduan yang terjamin kerahasiaannya untuk melindungi para korban.\nKata tidak baku menurut KBBI pada teks tersebut terdapat pada kata ....",
      opsi: [
        { teks: "pelecehan pada kalimat (1)", bobot: 0, pembahasan: "\"Pelecehan\" adalah bentuk baku." },
        { teks: "seringkali pada kalimat (2)", bobot: 5, pembahasan: "Bentuk baku adalah \"sering kali\" yang ditulis terpisah." },
        { teks: "psikologis pada kalimat (2)", bobot: 0, pembahasan: "\"Psikologis\" adalah bentuk baku." },
        { teks: "sistem pada kalimat (6)", bobot: 0, pembahasan: "\"Sistem\" adalah bentuk baku." },
        { teks: "kerahasiaannya pada kalimat (6)", bobot: 0, pembahasan: "\"Kerahasiaannya\" adalah bentuk baku." }
      ]
    },
    {
      soal: "(1) Tindakan pelecehan di lingkungan birokrasi merupakan pelanggaran disiplin berat yang dapat merusak integritas dan kualitas pelayanan publik. (2) Dampaknya terhadap pegawai yang menjadi korban sangat luas dan seringkali menyebabkan trauma psikologis yang berkepanjangan. (3) Dalam beberapa kasus, korban mengalami krisis kepercayaan diri yang signifikan hingga memerlukan pendampingan khusus dari biro sumber daya manusia. (4) Reaksi yang umum terjadi setelah insiden traumatis tersebut adalah munculnya post traumatic stress disorder yang mengganggu fokus penyelesaian tugas-tugas administratif. (5) Selain itu, lingkungan kerja yang tidak aman juga dapat menghambat perkembangan kompetensi dan mematikan karir aparatur sipil negara di masa depan. (6) Oleh karena itu, pimpinan instansi wajib menyediakan sistem pengaduan yang terjamin kerahasiaannya untuk melindungi para korban.\nPenulisan kalimat (4) pada teks belum sesuai dengan kaidah EYD. Alasannya adalah ....",
      opsi: [
        { teks: "Istilah asing tidak ditulis dengan huruf miring.", bobot: 5, pembahasan: "Istilah asing seperti post traumatic stress disorder harus ditulis dengan huruf miring." },
        { teks: "Terdapat pemborosan kata pada subjek kalimat.", bobot: 0, pembahasan: "Subjek kalimat tidak boros." },
        { teks: "Tanda titik seharusnya diganti tanda koma.", bobot: 0, pembahasan: "Penggunaan tanda titik sudah tepat." },
        { teks: "Kalimat tidak memiliki subjek dan predikat yang jelas.", bobot: 0, pembahasan: "Kalimat memiliki subjek dan predikat jelas." },
        { teks: "Terdapat awalan yang ditulis terpisah dari kata dasarnya.", bobot: 0, pembahasan: "Tidak ada awalan yang ditulis terpisah." }
      ]
    },
    {
      soal: "(1) Tindakan pelecehan di lingkungan birokrasi merupakan pelanggaran disiplin berat yang dapat merusak integritas dan kualitas pelayanan publik. (2) Dampaknya terhadap pegawai yang menjadi korban sangat luas dan seringkali menyebabkan trauma psikologis yang berkepanjangan. (3) Dalam beberapa kasus, korban mengalami krisis kepercayaan diri yang signifikan hingga memerlukan pendampingan khusus dari biro sumber daya manusia. (4) Reaksi yang umum terjadi setelah insiden traumatis tersebut adalah munculnya post traumatic stress disorder yang mengganggu fokus penyelesaian tugas-tugas administratif. (5) Selain itu, lingkungan kerja yang tidak aman juga dapat menghambat perkembangan kompetensi dan mematikan karir aparatur sipil negara di masa depan. (6) Oleh karena itu, pimpinan instansi wajib menyediakan sistem pengaduan yang terjamin kerahasiaannya untuk melindungi para korban.\nTerdapat kata serapan yang tidak baku pada kalimat (5). Perbaikan yang tepat sesuai KBBI adalah ....",
      opsi: [
        { teks: "Kata “kompetensi” diganti menjadi “kompetisi”.", bobot: 0, pembahasan: "\"Kompetensi\" dan \"kompetisi\" berbeda makna." },
        { teks: "Kata “aparatur” diganti menjadi “aparatur-aparatur”.", bobot: 0, pembahasan: "\"Aparatur\" sudah bermakna jamak." },
        { teks: "Kata “di masa” diganti menjadi “dimasa”.", bobot: 0, pembahasan: "\"Di masa\" ditulis terpisah karena \"di\" adalah kata depan." },
        { teks: "Kata “karir” diganti menjadi “karier”.", bobot: 5, pembahasan: "Bentuk baku menurut KBBI adalah \"karier\"." },
        { teks: "Kata “menghambat” diganti menjadi “terhambat”.", bobot: 0, pembahasan: "\"Menghambat\" sudah tepat dan berbeda makna dengan \"terhambat\"." }
      ]
    },
    {
      soal: "Pembangunan Kawasan Ekonomi Khusus (KEK) di wilayah perbatasan menjadi salah satu program prioritas pemerintah dalam upaya mempercepat pemerataan ekonomi nasional. KEK ini dirancang dengan luas mencapai ratusan hektare yang mencakup integrasi antara pelabuhan internasional, sentra industri pengolahan, dan kawasan pariwisata terpadu. Meskipun menghadapi kendala infrastruktur dasar pada tahap awal, pemerintah pusat terus mengalirkan subsidi pembiayaan untuk menarik minat investor asing. Faktanya, beberapa KEK telah berhasil menyerap puluhan ribu tenaga kerja lokal dan meningkatkan nilai ekspor komoditas daerah secara drastis. Dengan adanya insentif perpajakan dan kemudahan birokrasi perizinan, KEK diharapkan mampu menjadi mesin penggerak baru bagi ketahanan ekonomi negara di tengah ketidakpastian pasar global.\nIde pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Integrasi pelabuhan internasional dan sentra industri pengolahan di KEK.", bobot: 0, pembahasan: "Integrasi pelabuhan dan industri adalah rincian." },
        { teks: "Keberhasilan KEK dalam menyerap tenaga kerja lokal dan meningkatkan nilai ekspor.", bobot: 0, pembahasan: "Penyerapan tenaga kerja adalah rincian hasil." },
        { teks: "Insentif perpajakan untuk menarik minat investor di kawasan perbatasan.", bobot: 0, pembahasan: "Insentif pajak adalah rincian." },
        { teks: "Pembangunan KEK di wilayah perbatasan sebagai program prioritas pemerataan ekonomi.", bobot: 5, pembahasan: "Kalimat pertama menyatakan pembangunan KEK di perbatasan sebagai program prioritas pemerataan ekonomi." },
        { teks: "Kendala infrastruktur dasar yang menghambat pembangunan kawasan terpadu.", bobot: 0, pembahasan: "Kendala infrastruktur adalah rincian." }
      ]
    },
    {
      soal: "Menjaga kesehatan fisik dan mental pegawai merupakan langkah administratif yang sangat penting untuk mendukung produktivitas pelayanan publik secara menyeluruh. Tidak hanya untuk menekan angka absensi akibat cuti sakit, tetapi juga untuk menghindari inefisiensi anggaran kesehatan yang ditanggung oleh negara. Rutinitas sederhana, seperti pelaksanaan senam pagi bersama, penyediaan ruang laktasi, dan pemeriksaan kesehatan berkala, terbukti efektif menurunkan tingkat stres beban kerja aparatur. Kebijakan ini juga berperan besar dalam mencegah kelelahan kronis (<i>burnout</i>) yang sering memicu kelalaian fatal dalam penyusunan dokumen hukum. Melalui pengawasan dan fasilitas kesehatan kerja yang holistik, pemerintah tidak hanya mengamankan target kinerja instansi jangka pendek, tetapi juga membangun fondasi sumber daya manusia yang tangguh untuk menghadapi dinamika birokrasi di masa depan.\nGagasan pokok paragraf tersebut adalah ....",
      opsi: [
        { teks: "Upaya menekan angka absensi pegawai melalui pemotongan cuti sakit.", bobot: 0, pembahasan: "Teks tidak membahas pemotongan cuti sakit." },
        { teks: "Pembangunan fondasi sumber daya manusia yang tangguh melalui efisiensi anggaran negara.", bobot: 0, pembahasan: "Pembangunan fondasi adalah penutup." },
        { teks: "Manfaat senam pagi bersama dalam menurunkan stres beban kerja.", bobot: 0, pembahasan: "Senam pagi adalah rincian." },
        { teks: "Pencegahan kelelahan kronis untuk mengurangi kelalaian dokumen hukum.", bobot: 0, pembahasan: "Pencegahan kelelahan kronis adalah rincian." },
        { teks: "Pentingnya menjaga kesehatan pegawai untuk mendukung produktivitas pelayanan publik.", bobot: 5, pembahasan: "Kalimat pertama menyatakan bahwa menjaga kesehatan pegawai penting untuk produktivitas pelayanan publik." }
      ]
    }
  ]
};
