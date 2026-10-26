// Bank soal TWK - Integritas
// Aturan: tiap soal punya 5 opsi; SATU opsi bobot 5 (benar), empat lainnya bobot 0 (salah).
// Teks miring ditulis dengan tag <i>...</i>. Baris baru pada soal ditulis \n.
// Tambahkan soal baru dengan menyalin blok { soal: ..., opsi: [...] } lalu beri koma.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL['integritas'] = {
  indikator: "Integritas",
  soal: [
    {
      soal: "Rekan kerja meminta Anda meloloskan berkas lelang vendor miliknya yang belum memenuhi syarat karena ia butuh biaya pengobatan keluarga. Sebagai ASN pengadaan, apa tindakan yang berintegritas?",
      opsi: [
        { teks: "Menilai berkas sesuai syarat lelang yang berlaku, lalu membantu biaya pengobatan rekan dengan dana pribadi.", bobot: 5, pembahasan: "Integritas menggabungkan jujur dan peduli: aturan tetap ditegakkan, bantuan diberikan dari kemampuan pribadi." },
        { teks: "Meneruskan permintaan rekan kepada atasan agar atasan yang menentukan nasib berkas tersebut.", bobot: 0, pembahasan: "Melempar keputusan kepada atasan menghindari tanggung jawab yang melekat pada tugas Anda." },
        { teks: "Meloloskan berkas dengan catatan bahwa kekurangan dokumen akan dilengkapi setelah pengumuman.", bobot: 0, pembahasan: "Meloloskan berkas yang belum lengkap melanggar prinsip jujur dan adil dalam lelang." },
        { teks: "Menyarankan rekan agar vendornya mengajukan penyesuaian syarat kepada panitia setelah evaluasi selesai.", bobot: 0, pembahasan: "Mengubah syarat setelah evaluasi memberi keuntungan khusus bagi satu vendor dan tidak adil bagi peserta lain." },
        { teks: "Menilai berkas secara normal, lalu mengusulkan sebagian anggaran panitia dipakai untuk membantu rekan.", bobot: 0, pembahasan: "Memakai anggaran panitia untuk keperluan pribadi rekan adalah penyalahgunaan keuangan negara." }
      ]
    },
    {
      soal: "Seorang petugas lalu lintas tetap menilang kakaknya yang melanggar rambu, sama seperti pengendara lain. Nilai integritas yang paling menonjol dari tindakan itu adalah ....",
      opsi: [
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Berani", bobot: 0, pembahasan: "Berani berkaitan dengan menolak perintah yang menyimpang dan melapor." },
        { teks: "Adil", bobot: 5, pembahasan: "Adil berarti objektif dan tidak membeda-bedakan perlakuan karena kedekatan." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati dan kepekaan terhadap lingkungan." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan membedakan kebutuhan dan keinginan." }
      ]
    },
    {
      soal: "Siti selalu membuang limbah sesuai tata tertib sekolah, bahkan ketika tidak ada guru yang mengawasi. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Berani", bobot: 0, pembahasan: "Berani berkaitan dengan menolak penyimpangan atau melapor." },
        { teks: "Disiplin", bobot: 5, pembahasan: "Disiplin berarti taat aturan dan prosedur, termasuk saat tidak diawasi." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati dan kepekaan pada orang lain." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan membedakan kebutuhan dan keinginan." }
      ]
    },
    {
      soal: "Budi tidak mengeluh meski harus menambah jam kerja agar target pekerjaannya tercapai. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketepatan waktu dan ketaatan pada prosedur." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan percaya diri tanpa bantuan orang lain." },
        { teks: "Kerja keras", bobot: 5, pembahasan: "Kerja keras berarti sungguh-sungguh, pantang mengeluh, dan fokus mencapai target." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati terhadap orang lain." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan tidak berlebihan dalam gaya hidup." }
      ]
    },
    {
      soal: "Menjelang cuti, Rina menyusun catatan serah terima dan membimbing rekan pengganti agar pekerjaan proyek tetap berjalan. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketepatan waktu dan ketaatan pada prosedur." },
        { teks: "Tanggung jawab", bobot: 5, pembahasan: "Tanggung jawab berarti amanah menuntaskan tugas dan memastikan pekerjaan tidak terbengkalai." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan yang proporsional dan tidak diskriminatif." },
        { teks: "Berani", bobot: 0, pembahasan: "Berani berkaitan dengan menolak penyimpangan dan melapor." }
      ]
    },
    {
      soal: "Ki Hajar Dewantara tetap mendirikan Taman Siswa bagi kaum pribumi meski dibayangi tekanan dan ancaman pemerintah kolonial Belanda. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati, sedangkan yang ditekankan pada kasus ini adalah keberanian menghadapi ancaman." },
        { teks: "Kerja keras", bobot: 0, pembahasan: "Kerja keras berkaitan dengan kesungguhan tanpa mengeluh, bukan keberanian menghadapi ancaman." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Tanggung jawab", bobot: 0, pembahasan: "Tanggung jawab berkaitan dengan menuntaskan tugas dan menanggung risiko hasil pekerjaan." },
        { teks: "Berani", bobot: 5, pembahasan: "Berani berarti mantap menghadapi kesulitan dan berisiko demi memperjuangkan hak orang lain." }
      ]
    },
    {
      soal: "Petugas layanan kependudukan Pak Anies tetap melayani pemohon sesuai urutan antrean, termasuk kerabat pejabat daerah yang meminta didahulukan. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Jujur", bobot: 0, pembahasan: "Jujur berkaitan dengan kebenaran data dan tidak memalsukan." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketepatan waktu dan prosedur, sedangkan inti kasus ini adalah perlakuan tanpa pilih kasih." },
        { teks: "Adil", bobot: 5, pembahasan: "Adil berarti objektif dan memperlakukan semua pemohon sesuai hak dan porsinya tanpa memandang kedekatan." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati dan membantu orang lain." }
      ]
    },
    {
      soal: "Pada 17 Agustus 1945, Ir. Soekarno tetap membacakan teks proklamasi di tengah pengawasan dan ancaman tentara Jepang. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Berani", bobot: 5, pembahasan: "Berani berarti mantap menghadapi kesulitan dan menanggung risiko demi tujuan besar." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan membedakan kebutuhan dan keinginan." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketepatan waktu dan ketaatan pada prosedur." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan yang proporsional dan tidak diskriminatif." }
      ]
    },
    {
      soal: "Seorang pejabat instansi mitra mengisi penuh bahan bakar kendaraan dinas Anda tanpa diminta. Tindakan yang paling tepat adalah ....",
      opsi: [
        { teks: "Mengembalikan nilai bahan bakar tersebut dan melaporkan kejadian itu kepada unit pengendali gratifikasi.", bobot: 5, pembahasan: "Pemberian yang berkaitan dengan jabatan adalah gratifikasi; penerima wajib menolak atau mengembalikan dan melaporkannya." },
        { teks: "Menerimanya karena bahan bakar dipakai untuk kendaraan dinas, bukan untuk keperluan pribadi.", bobot: 0, pembahasan: "Pemberian yang berkaitan dengan jabatan tetap gratifikasi walau dipakai untuk kegiatan dinas." },
        { teks: "Memakainya untuk kegiatan dinas hari itu dan mencatat pemakaiannya dalam laporan bulanan.", bobot: 0, pembahasan: "Mencatat pemakaian tidak menghapus statusnya sebagai pemberian yang wajib dilaporkan." },
        { teks: "Meminta pejabat tersebut mencatat pemberian itu sebagai dukungan operasional resmi instansinya.", bobot: 0, pembahasan: "Mencatat sebagai dukungan resmi mengubah status pemberian tanpa dasar aturan." },
        { teks: "Berterima kasih dan meminta atasan memberi tahu pejabat tersebut agar tidak mengulanginya.", bobot: 0, pembahasan: "Menegur tanpa mengembalikan dan melapor tidak memenuhi kewajiban pelaporan gratifikasi." }
      ]
    },
    {
      soal: "Seorang kepala cabang yang tidak puas dengan penilaian kinerjanya mengancam akan membuka data strategis instansi kepada publik. Tindakan itu melanggar kewajiban ASN dalam hal ....",
      opsi: [
        { teks: "melayani masyarakat dengan sikap hormat dan sopan", bobot: 0, pembahasan: "Ini berkaitan dengan klaster pelayanan, bukan penggunaan data instansi." },
        { teks: "menjaga kerahasiaan kebijakan dan informasi negara", bobot: 5, pembahasan: "ASN wajib menjaga kerahasiaan kebijakan negara dan dilarang menyalahgunakan informasi untuk kepentingan pribadi." },
        { teks: "menghindari konflik kepentingan dalam bertugas", bobot: 0, pembahasan: "Ini berkaitan dengan kepentingan pribadi yang bertentangan dengan tugas." },
        { teks: "menggunakan barang milik negara secara efektif dan efisien", bobot: 0, pembahasan: "Ini berkaitan dengan pemakaian aset negara." },
        { teks: "bersikap netral dan tidak terlibat politik praktis", bobot: 0, pembahasan: "Ini berkaitan dengan netralitas dalam politik, bukan pembukaan data instansi." }
      ]
    },
    {
      soal: "Seorang pegawai pengadaan ditekan beberapa pihak agar meloloskan vendor tertentu dengan imbalan uang. Tindakan berintegritas yang paling tepat adalah ....",
      opsi: [
        { teks: "Meminta waktu tambahan untuk menimbang keputusan sambil menghindari pertemuan dengan pihak penekan.", bobot: 0, pembahasan: "Menghindar tidak menghentikan upaya penyuapan dan tidak melaporkannya." },
        { teks: "Menolak imbalan tersebut dan melaporkan upaya penyuapan kepada unit pengawasan internal.", bobot: 5, pembahasan: "Menolak suap dan melaporkannya adalah wujud jujur dan berani sesuai nilai integritas." },
        { teks: "Menerima imbalan tersebut lalu menyumbangkannya untuk pembangunan fasilitas umum.", bobot: 0, pembahasan: "Menerima suap tetap pelanggaran meski hasilnya disumbangkan." },
        { teks: "Menilai tender secara netral tanpa mengembalikan imbalan yang telanjur diterima.", bobot: 0, pembahasan: "Imbalan yang telanjur diterima tetap harus dikembalikan dan dilaporkan." },
        { teks: "Menyerahkan keputusan pengadaan kepada atasan agar risiko tidak ditanggung sendiri.", bobot: 0, pembahasan: "Melempar keputusan menghindari tanggung jawab dan tidak melaporkan penyuapan." }
      ]
    },
    {
      soal: "Pemerintah baru ingin memulihkan kepercayaan masyarakat setelah banyak kasus penyalahgunaan wewenang di masa lalu. Langkah yang paling mencerminkan integritas penyelenggara negara adalah ....",
      opsi: [
        { teks: "Membuka informasi anggaran dan hasil kebijakan kepada publik serta mempertanggungjawabkannya.", bobot: 5, pembahasan: "Keterbukaan dan pertanggungjawaban memperbaiki sistem dan menutup celah penyalahgunaan wewenang sehingga kepercayaan publik pulih." },
        { teks: "Memperketat pengamanan aset negara agar pembiayaan sektor usaha lebih tepat sasaran.", bobot: 0, pembahasan: "Pengamanan aset tidak menjawab masalah keterbukaan penyelenggaraan negara." },
        { teks: "Memprioritaskan program pertumbuhan ekonomi dan bantuan sosial agar manfaatnya cepat dirasakan rakyat.", bobot: 0, pembahasan: "Program ekonomi dan sosial bermanfaat, tetapi tidak menjawab masalah penyalahgunaan wewenang." },
        { teks: "Menyerahkan seluruh penindakan hukum kepada komisi independen di luar pemerintah.", bobot: 0, pembahasan: "Menyerahkan seluruh penindakan menghindari tanggung jawab pemerintah sendiri membenahi sistem." },
        { teks: "Memperbaiki hubungan luar negeri agar citra negara baik di mata dunia.", bobot: 0, pembahasan: "Citra luar negeri tidak memulihkan kepercayaan masyarakat di dalam negeri." }
      ]
    },
    {
      soal: "Seorang mahasiswa memalsukan nama pada tugas milik temannya dan mengakuinya sebagai hasil kerjanya agar memenuhi syarat kelulusan. Nilai integritas yang paling jelas dilanggar adalah ....",
      opsi: [
        { teks: "Jujur", bobot: 5, pembahasan: "Jujur berarti tidak curang dan tidak memalsukan, sedangkan tindakan ini memalsukan karya orang lain." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketaatan waktu dan prosedur." },
        { teks: "Kerja keras", bobot: 0, pembahasan: "Kerja keras berkaitan dengan kesungguhan mencapai target secara sah." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati terhadap orang lain." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan gaya hidup tidak berlebihan." }
      ]
    },
    {
      soal: "Seorang pejabat yang dikenal berjasa terbukti menyalahgunakan dana program kesejahteraan rakyat. Sikap masyarakat yang paling sesuai dengan nilai integritas adalah ....",
      opsi: [
        { teks: "Mempertimbangkan jasa-jasanya di masa lalu untuk meringankan hukumannya.", bobot: 0, pembahasan: "Jasa masa lalu tidak boleh meringankan hukuman karena itu membedakan perlakuan." },
        { teks: "Mendorong agar proses hukum berjalan terbuka sesuai aturan tanpa memandang jasa pelaku.", bobot: 5, pembahasan: "Adil berarti objektif; hukum ditegakkan secara terbuka dan setara tanpa memandang jasa atau kedudukan pelaku." },
        { teks: "Mengupayakan penyelesaian secara tertutup agar kepercayaan publik pada lembaga tetap terjaga.", bobot: 0, pembahasan: "Penyelesaian tertutup menutupi pelanggaran dan mengurangi akuntabilitas." },
        { teks: "Menunda sanksi sampai pelanggaran pejabat lain terkumpul sebagai pembanding.", bobot: 0, pembahasan: "Menunda sanksi menunda keadilan tanpa dasar hukum." },
        { teks: "Menilai tindakannya dari manfaat dana yang telah tersalurkan kepada sebagian warga.", bobot: 0, pembahasan: "Manfaat bagi sebagian warga tidak membenarkan penyalahgunaan dana." }
      ]
    },
    {
      soal: "Anda auditor baru dan menemukan bukti kuat penyalahgunaan anggaran yang melibatkan pejabat tinggi di instansi Anda. Tindakan berintegritas yang paling tepat adalah ....",
      opsi: [
        { teks: "Menunda tindakan sampai bukti benar-benar lengkap sebelum melapor.", bobot: 0, pembahasan: "Bukti sudah kuat sehingga penundaan hanya memberi peluang menghilangkan bukti." },
        { teks: "Membahasnya dahulu dengan sesama auditor untuk menilai risiko.", bobot: 0, pembahasan: "Membahas secara tertutup tidak menghasilkan tindak lanjut resmi." },
        { teks: "Mengajukan pindah tugas agar terhindar dari konflik kepentingan.", bobot: 0, pembahasan: "Pindah tugas menghindari persoalan, bukan menyelesaikannya." },
        { teks: "Melaporkan temuan kepada unit pengawasan internal atau aparat penegak hukum.", bobot: 5, pembahasan: "Keberanian melapor (whistleblowing) kepada pihak yang berwenang adalah wujud integritas, terlepas dari risiko pribadi." },
        { teks: "Menyampaikan temuan kepada atasan langsung dan mengikuti arahannya.", bobot: 0, pembahasan: "Pelaporan kepada atasan langsung berisiko karena pejabat tinggi di instansi terlibat." }
      ]
    },
    {
      soal: "Seorang ASN membiasakan diri membedakan kebutuhan dan keinginan dalam mengatur gaya hidupnya. Dampak yang paling terkait dengan pencegahan korupsi adalah ....",
      opsi: [
        { teks: "Kebutuhan hidup terjaga sesuai penghasilan sehingga dorongan menyimpang berkurang.", bobot: 5, pembahasan: "Hidup sederhana mencegah tuntutan hidup melebihi gaji, yang menjadi pintu gerbang korupsi." },
        { teks: "Biaya pendidikan anak terjamin dalam jangka panjang.", bobot: 0, pembahasan: "Ini manfaat bagi keluarga, bukan pencegahan korupsi." },
        { teks: "Rencana liburan keluarga menjadi lebih teratur tanpa utang.", bobot: 0, pembahasan: "Ini manfaat keuangan keluarga, bukan pencegahan korupsi." },
        { teks: "Rumah tangga menjadi contoh ketertiban dalam pengeluaran sehari-hari.", bobot: 0, pembahasan: "Ini manfaat keteladanan, bukan pencegahan dorongan korupsi." },
        { teks: "Tabungan cadangan terkumpul untuk mengembangkan kemampuan kerja di masa depan.", bobot: 0, pembahasan: "Ini manfaat pengembangan diri, bukan pencegahan korupsi." }
      ]
    },
    {
      soal: "Atasan seorang ASN bertugas keluar kota selama seminggu. Tindakan yang paling mencerminkan nilai disiplin dari ASN tersebut adalah ....",
      opsi: [
        { teks: "Berinisiatif menyelesaikan seluruh pekerjaan atasan agar tidak menumpuk.", bobot: 0, pembahasan: "Inisiatif mengerjakan tugas atasan berkaitan dengan nilai mandiri." },
        { teks: "Menyelesaikan tugas sesuai prosedur dan tenggat seperti biasa.", bobot: 5, pembahasan: "Disiplin berarti taat prosedur dan tepat waktu, termasuk saat atasan tidak mengawasi." },
        { teks: "Menolak menandatangani dokumen rekan sampai atasan memeriksanya.", bobot: 0, pembahasan: "Penolakan menandatangani berkaitan dengan nilai berani atau tanggung jawab." },
        { teks: "Menambah jam kerja setiap hari agar target tercapai lebih awal.", bobot: 0, pembahasan: "Menambah jam kerja berkaitan dengan nilai kerja keras." },
        { teks: "Membantu rekan yang bebannya berat setelah pekerjaannya selesai.", bobot: 0, pembahasan: "Membantu rekan berkaitan dengan nilai peduli." }
      ]
    },
    {
      soal: "Target laporan tahunan unit Anda belum tercapai menjelang batas akhir karena kekurangan tenaga. Tindakan yang paling mencerminkan kerja keras adalah ....",
      opsi: [
        { teks: "Mengajukan perpanjangan tenggat kepada pimpinan dengan alasan kekurangan tenaga.", bobot: 0, pembahasan: "Meminta perpanjangan belum menunjukkan upaya sungguh-sungguh mencapai target." },
        { teks: "Meminta rekan unit lain mengerjakan sebagian laporan agar cepat selesai.", bobot: 0, pembahasan: "Mengandalkan unit lain menurunkan inisiatif sendiri." },
        { teks: "Menyelesaikan laporan dengan menambah jam kerja dan tetap berusaha mencapai target.", bobot: 5, pembahasan: "Kerja keras berarti sungguh-sungguh, tidak mengeluh, dan fokus mencapai target." },
        { teks: "Membagi tugas sesuai jabatan setiap pegawai dan memantau kemajuannya.", bobot: 0, pembahasan: "Pembagian tugas adalah pengelolaan kerja, bukan kesungguhan pribadi." },
        { teks: "Mencatat kendala tenaga dalam laporan sebagai bahan evaluasi tahun berikutnya.", bobot: 0, pembahasan: "Mencatat kendala berguna untuk evaluasi, tetapi tidak mengejar target saat ini." }
      ]
    },
    {
      soal: "Sebuah komunitas warga ingin ikut mencegah korupsi lewat kegiatan di lingkungannya. Kegiatan yang termasuk sula pendidikan dalam strategi pemberantasan korupsi adalah ....",
      opsi: [
        { teks: "Melaporkan dugaan korupsi dana desa kepada aparat penegak hukum.", bobot: 0, pembahasan: "Pelaporan dugaan korupsi termasuk sula penindakan." },
        { teks: "Mendorong pemerintah desa memakai aplikasi daring untuk keterbukaan penggunaan anggaran.", bobot: 0, pembahasan: "Aplikasi daring termasuk sula pencegahan karena memperbaiki sistem." },
        { teks: "Membuka kantin kejujuran dan kampanye antikorupsi bagi anak-anak di lingkungan.", bobot: 5, pembahasan: "Sula pendidikan menyasar pola pikir agar orang tidak mau korupsi, misalnya lewat kampanye dan kantin kejujuran." },
        { teks: "Menyusun usulan perbaikan prosedur layanan publik agar tidak bertatap muka.", bobot: 0, pembahasan: "Perbaikan prosedur layanan termasuk sula pencegahan." },
        { teks: "Meminta pejabat desa melaporkan harta kekayaan secara berkala.", bobot: 0, pembahasan: "Pelaporan harta kekayaan termasuk sula pencegahan." }
      ]
    },
    {
      soal: "Seorang ASN meyakini bahwa menerima hadiah dari pemohon layanan itu salah, tetapi tetap menerimanya karena sungkan menolak. Ketidakselarasan itu terjadi antara ....",
      opsi: [
        { teks: "pola pikir dan perilaku", bobot: 5, pembahasan: "Ia berpikir menerima hadiah itu salah, tetapi tindakannya berlawanan, sehingga pola pikir dan perilaku tidak selaras." },
        { teks: "ucapan dan perilaku", bobot: 0, pembahasan: "Pada kasus ini tidak ada ucapan yang berbeda dari perilaku." },
        { teks: "perasaan dan ucapan", bobot: 0, pembahasan: "Pada kasus ini tidak ada ucapan yang berkaitan dengan perasaan." },
        { teks: "pola pikir dan ucapan", bobot: 0, pembahasan: "Pada kasus ini tidak ada ucapan yang berbeda dari keyakinannya." },
        { teks: "perasaan dan pola pikir", bobot: 0, pembahasan: "Keyakinan dan perasaan tidak digambarkan bertentangan." }
      ]
    },
    {
      soal: "Seorang siswa menemukan dompet berisi uang di kantin sekolah, lalu menyerahkannya kepada guru piket tanpa mengambil isinya. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Jujur", bobot: 5, pembahasan: "Jujur berarti lurus hati, tidak mengambil yang bukan haknya, dan apa adanya." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketaatan pada waktu dan prosedur." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Berani", bobot: 0, pembahasan: "Berani berkaitan dengan menolak penyimpangan dan melapor." },
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan yang setara dan proporsional." }
      ]
    },
    {
      soal: "Ketua RT meminta warga menjaga kebersihan saluran air, tetapi ia sendiri kedapatan membuang sampah rumah tangga ke saluran itu. Menurut konsep integritas, tindakannya paling tepat disebut ....",
      opsi: [
        { teks: "tidak selaras antara ucapan dan perbuatan", bobot: 5, pembahasan: "Integritas adalah keselarasan ucapan dan perbuatan; menyuruh orang lain tetapi melanggar sendiri adalah ketidakselarasan." },
        { teks: "kurang peduli terhadap kebutuhan warga", bobot: 0, pembahasan: "Kepedulian berkaitan dengan empati, bukan keselarasan kata dan perbuatan." },
        { teks: "kurang sederhana dalam kebiasaan hidup", bobot: 0, pembahasan: "Kesederhanaan berkaitan dengan gaya hidup, bukan keselarasan kata dan perbuatan." },
        { teks: "kurang berani menegur warga yang melanggar", bobot: 0, pembahasan: "Keberanian menegur tidak menjadi persoalan pada kasus ini." },
        { teks: "kurang mandiri dalam menjaga kebersihan rumah", bobot: 0, pembahasan: "Kemandirian berkaitan dengan inisiatif, bukan keselarasan kata dan perbuatan." }
      ]
    },
    {
      soal: "Seorang tokoh pergerakan yang menjadi pejabat tetap memakai perabot lama dan menekan pengeluaran gaya hidupnya. Sikap itu mencerminkan nilai integritas ....",
      opsi: [
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketepatan waktu dan prosedur." },
        { teks: "Sederhana", bobot: 5, pembahasan: "Sederhana adalah membedakan kebutuhan dan keinginan serta menghindari gaya hidup berlebihan." },
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan yang proporsional." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati terhadap orang lain." }
      ]
    },
    {
      soal: "Jenderal Sudirman tetap memimpin perang gerilya meski dalam kondisi sakit parah. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan tanpa diskriminasi." },
        { teks: "Kerja keras", bobot: 5, pembahasan: "Kerja keras berarti pantang menyerah dan terus berjuang mencapai tujuan." },
        { teks: "Sederhana", bobot: 0, pembahasan: "Sederhana berkaitan dengan gaya hidup." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati." },
        { teks: "Jujur", bobot: 0, pembahasan: "Jujur berkaitan dengan kebenaran dan tidak memalsukan." }
      ]
    },
    {
      soal: "Menjelang pilkada, atasan Anda menyuruh seluruh staf memilih salah satu calon. Tindakan yang paling tepat sebagai ASN adalah ....",
      opsi: [
        { teks: "Mengajukan pindah ke unit kerja lain agar terlepas dari perintah atasan.", bobot: 0, pembahasan: "Pindah tugas menghindari persoalan dan tidak melaporkan pelanggaran." },
        { teks: "Melaporkan perintah itu kepada lembaga pengawas pemilu.", bobot: 5, pembahasan: "ASN wajib netral; perintah yang melanggar aturan ditolak, dan pelanggarannya dilaporkan kepada pengawas pemilu." },
        { teks: "Meneruskan perintah itu kepada staf dengan memberi kebebasan memilih saat pemungutan suara.", bobot: 0, pembahasan: "Meneruskan perintah berarti ikut menjalankan pelanggaran netralitas." },
        { teks: "Menolak perintah itu secara terbuka dalam rapat koordinasi.", bobot: 0, pembahasan: "Penolakan terbuka tanpa pelaporan tidak menindaklanjuti pelanggaran." },
        { teks: "Mengusulkan penghentian sementara layanan agar semua staf fokus pada pemilihan.", bobot: 0, pembahasan: "Menghentikan layanan merugikan masyarakat." }
      ]
    },
    {
      soal: "Bantuan sosial di desa dibagikan merata ke semua keluarga, termasuk keluarga Anda yang tergolong mampu. Tindakan yang paling berintegritas adalah ....",
      opsi: [
        { teks: "Menerima bantuan itu demi menghormati keputusan pembagian aparat desa.", bobot: 0, pembahasan: "Menerima padahal tidak berhak mengabaikan kejujuran." },
        { teks: "Memberikan bantuan itu langsung kepada tetangga yang membutuhkan tanpa pencatatan desa.", bobot: 0, pembahasan: "Menyalurkan tanpa pencatatan menyalahi prosedur dan tidak akuntabel." },
        { teks: "Mendokumentasikan kekeliruan pembagian untuk disebarkan kepada warga sebagai bahan evaluasi.", bobot: 0, pembahasan: "Menyebarkan kekeliruan kepada warga dapat memicu keributan." },
        { teks: "Mengembalikan bantuan kepada pihak desa dan meminta data penerima diperbarui.", bobot: 5, pembahasan: "Jujur dan bertanggung jawab: bantuan dikembalikan dan data diperbaiki lewat prosedur resmi." },
        { teks: "Menolak bantuan dengan keras saat penyerahan di hadapan warga.", bobot: 0, pembahasan: "Menolak dengan keras tidak menyelesaikan masalah data." }
      ]
    },
    {
      soal: "Seorang auditor menemukan ketidaksesuaian spesifikasi pada dokumen pengadaan yang ditandatangani PPK, yaitu mantan atasannya yang pernah merekomendasikan kenaikan pangkatnya. Tindakan yang paling berintegritas adalah ....",
      opsi: [
        { teks: "Menyusun laporan audit secara objektif dengan menyertakan seluruh bukti temuan.", bobot: 5, pembahasan: "Jujur dan adil: balas budi tidak boleh memengaruhi hasil audit; temuan dilaporkan apa adanya." },
        { teks: "Menyampaikan temuan awal secara lisan kepada PPK agar ia dapat memperbaikinya sebelum laporan.", bobot: 0, pembahasan: "Memberi tahu lebih dulu membuka peluang mengubah bukti dan melanggar prosedur." },
        { teks: "Mengajukan pemindahan dari tim pemeriksa agar terhindar dari konflik kepentingan.", bobot: 0, pembahasan: "Pindah tugas menghindar dan tidak menjalankan tanggung jawab." },
        { teks: "Membatasi pemeriksaan pada tahun anggaran berjalan agar masalah berkurang.", bobot: 0, pembahasan: "Membatasi pemeriksaan menyembunyikan temuan." },
        { teks: "Menyerahkan kertas kerja langsung kepada aparat penegak hukum tanpa melalui pimpinan.", bobot: 0, pembahasan: "Melompati pimpinan melanggar prosedur pelaporan." }
      ]
    },
    {
      soal: "Seorang warga yang puas dengan layanan perizinan yang Anda berikan memaksa memberi bingkisan makanan setelah dokumennya selesai. Sikap yang paling tepat sesuai integritas ASN adalah ....",
      opsi: [
        { teks: "Menolak secara halus dan menjelaskan bahwa pelayanan adalah tugas yang tidak memerlukan imbalan.", bobot: 5, pembahasan: "Pemberian kepada ASN berkaitan dengan jabatan adalah gratifikasi; menolak dengan sopan menjaga integritas dan etika sosial." },
        { teks: "Menerima karena diberikan setelah layanan selesai sehingga tidak memengaruhi keputusan.", bobot: 0, pembahasan: "Pemberian sesudah layanan tetap gratifikasi." },
        { teks: "Menerima bingkisan itu lalu membagikannya kepada rekan kerja.", bobot: 0, pembahasan: "Menerima dan membagikan tetap menerima gratifikasi." },
        { teks: "Meminta warga menyumbangkan bingkisan itu ke panti asuhan.", bobot: 0, pembahasan: "Meminta menyumbangkan tetap terlibat dalam pemberian yang tidak semestinya." },
        { teks: "Melaporkan warga ke pihak berwajib atas dugaan percobaan penyuapan.", bobot: 0, pembahasan: "Melaporkan warga atas niat baik berlebihan dan tidak proporsional." }
      ]
    },
    {
      soal: "Ir. Soekarno menolak tawaran jabatan dari pemerintah kolonial dan memilih menjalani pengasingan bertahun-tahun demi cita-cita merdeka. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "berani menanggung risiko tanpa mempertimbangkan keselamatan keluarga", bobot: 0, pembahasan: "Keberanian tanpa pertimbangan bukan inti peristiwa." },
        { teks: "kemampuan memobilisasi perlawanan bersenjata dari tempat pengasingan", bobot: 0, pembahasan: "Beliau tidak memobilisasi perlawanan bersenjata." },
        { teks: "kesediaan menerima risiko politik asalkan ada jaminan keamanan dari penguasa", bobot: 0, pembahasan: "Beliau menolak jaminan dari penguasa kolonial." },
        { teks: "kecerdasan menyusun strategi konfrontasi fisik yang terpusat", bobot: 0, pembahasan: "Strategi fisik bukan inti peristiwa." },
        { teks: "keselarasan antara cita-cita yang diucapkan dan tindakan yang dijalani meskipun penuh risiko", bobot: 5, pembahasan: "Integritas adalah keselarasan pikiran, ucapan, dan tindakan; beliau konsisten pada cita-citanya." }
      ]
    },
    {
      soal: "Dr. Tjipto Mangoenkoesoemo mengembalikan bintang kehormatan Belanda setelah terbit aturan yang diskriminatif terhadap pribumi. Sikap itu menunjukkan integritas yang dilandasi ....",
      opsi: [
        { teks: "keteguhan prinsip untuk tidak menukar idealisme dan martabat dengan penghargaan dari penguasa", bobot: 5, pembahasan: "Mengembalikan penghargaan menunjukkan keteguhan memegang prinsip dan martabat meski ada kehormatan dari penguasa." },
        { teks: "keinginan mendirikan partai politik yang bebas dari bantuan dana pemerintah", bobot: 0, pembahasan: "Pendirian partai tidak menjadi alasan pengembalian bintang." },
        { teks: "penolakan terhadap seluruh sistem kesehatan modern buatan pemerintah kolonial", bobot: 0, pembahasan: "Beliau seorang dokter dan tidak menolak ilmu kedokteran." },
        { teks: "kekecewaan atas kecilnya imbalan materi yang menyertai penghargaan", bobot: 0, pembahasan: "Alasannya adalah prinsip, bukan imbalan." },
        { teks: "keinginan memboikot kebijakan kesehatan yang tidak melibatkan wakil dokter pribumi", bobot: 0, pembahasan: "Pemboikotan kebijakan bukan alasan pengembalian bintang." }
      ]
    },
    {
      soal: "Seorang guru muatan lokal bahasa daerah tetap menerapkan standar kelulusan yang sama, tetapi menyusun modul belajar tambahan di luar jam kerja bagi siswa pendatang yang kesulitan. Tindakan itu memadukan integritas dan Bhinneka Tunggal Ika karena ....",
      opsi: [
        { teks: "guru menjaga standar secara adil sambil membantu siswa pendatang", bobot: 5, pembahasan: "Standar dijaga (jujur, adil), dan bantuan diberikan kepada siswa berbeda latar belakang (peduli dan menghargai keberagaman)." },
        { teks: "guru mewajibkan siswa pendatang belajar di luar sekolah agar standar tidak turun", bobot: 0, pembahasan: "Mewajibkan belajar di luar sekolah memberatkan siswa dan bukan bantuan." },
        { teks: "keberagaman etnis menuntut pendidik menghapus sistem nilai berbasis standar", bobot: 0, pembahasan: "Menghapus sistem nilai berarti melepaskan standar." },
        { teks: "guru bersedia mengorbankan waktu istirahat karena tunduk pada tekanan sekolah", bobot: 0, pembahasan: "Tindakan guru dilakukan secara sukarela, bukan karena tekanan." },
        { teks: "sekolah memberi guru wewenang mengubah aturan penilaian nasional", bobot: 0, pembahasan: "Guru tidak berwenang mengubah aturan penilaian nasional." }
      ]
    },
    {
      soal: "Anda pejabat pengadaan. Vendor dengan harga terendah dan spesifikasi memenuhi syarat menjanjikan pengembalian dana 5 persen dari nilai proyek ke rekening pribadi Anda sebagai uang lelah. Tindakan yang paling berintegritas adalah ....",
      opsi: [
        { teks: "Meminta vendor mengubah pengembalian dana itu menjadi pengurangan harga kontrak resmi.", bobot: 5, pembahasan: "Imbalan pribadi adalah gratifikasi; potongan harga harus menjadi hak instansi lewat kontrak resmi." },
        { teks: "Memasukkan dana itu ke kas panitia yang tidak tercatat resmi.", bobot: 0, pembahasan: "Kas tidak tercatat melanggar akuntabilitas keuangan." },
        { teks: "Menerima tawaran itu dengan syarat dana dipakai membiayai kegiatan orientasi instansi.", bobot: 0, pembahasan: "Menerima dana untuk kegiatan instansi tetap penerimaan pribadi di luar prosedur." },
        { teks: "Menolak vendor itu dan mencari vendor lain meski harganya lebih mahal.", bobot: 0, pembahasan: "Vendor memenuhi syarat dan harga terendah, sehingga menolaknya merugikan instansi." },
        { teks: "Menyetujui kerja sama dan melaporkan penerimaan dana kepada atasan setelah dana masuk.", bobot: 0, pembahasan: "Melapor setelah menerima tidak membatalkan penerimaan gratifikasi." }
      ]
    },
    {
      soal: "Otto Iskandar Dinata tetap membela kaum tani yang tertindas meski diancam pengasingan ke Boven Digoel. Contoh sikap ASN masa kini yang paling sejalan dengan keteladanan itu adalah ....",
      opsi: [
        { teks: "Menerima semua arahan pimpinan agar karier terjaga.", bobot: 0, pembahasan: "Menerima semua arahan tanpa menilai bertentangan dengan keberanian menolak penyimpangan." },
        { teks: "Mengalah pada kebijakan keliru sementara demi menjaga posisi tawar kelak.", bobot: 0, pembahasan: "Mengalah pada kebijakan keliru menunjukkan sikap menghindari risiko." },
        { teks: "Mencari celah aturan agar kebijakan yang merugikan tidak berlaku di unitnya.", bobot: 0, pembahasan: "Mencari celah aturan bukan cara terbuka dan jujur." },
        { teks: "Menggalang kelompok tertutup untuk menentang kebijakan pimpinan.", bobot: 0, pembahasan: "Kelompok tertutup tidak menempuh jalur resmi." },
        { teks: "Melaporkan penyimpangan anggaran di instansi meski berisiko dikucilkan rekan.", bobot: 5, pembahasan: "Berani menanggung risiko demi membela kebenaran dan keadilan adalah wujud integritas." }
      ]
    },
    {
      soal: "Kepala daerah terpilih ditekan koalisi partai pendukungnya agar menerbitkan aturan yang mengistimewakan perizinan investasi perusahaan afiliasi partai. Sikap yang paling sesuai dengan integritas dan sumpah jabatan adalah ....",
      opsi: [
        { teks: "Mengakomodasi usulan partai secara bertahap lewat celah aturan otonomi daerah.", bobot: 0, pembahasan: "Mengakomodasi lewat celah aturan tetap melanggar keadilan." },
        { teks: "Menerbitkan izin bersyarat bagi perusahaan afiliasi dengan syarat merekrut warga lokal.", bobot: 0, pembahasan: "Izin bersyarat tetap mengistimewakan perusahaan afiliasi." },
        { teks: "Menarik berkas perizinan dan menyerahkannya kepada kementerian.", bobot: 0, pembahasan: "Menyerahkan berkas ke kementerian menghindari tanggung jawab." },
        { teks: "Melimpahkan penandatanganan izin kepada wakil kepala daerah agar terhindar dari tekanan.", bobot: 0, pembahasan: "Melimpahkan tugas menghindari tanggung jawab." },
        { teks: "Menolak tekanan itu dan memastikan perizinan diproses sama untuk semua pemohon.", bobot: 5, pembahasan: "Integritas menuntut sikap tegas menolak intervensi dan memperlakukan semua pemohon secara adil." }
      ]
    },
    {
      soal: "Anda mengetahui rekan senior rutin membuat SPPD fiktif dengan alasan hal itu lazim untuk menutup kurangnya tunjangan. Tindakan yang paling berintegritas adalah ....",
      opsi: [
        { teks: "Menegur rekan itu secara pribadi dan tidak melanjutkan jika ia berjanji berhenti.", bobot: 0, pembahasan: "Menegur tanpa laporan tidak menghentikan pelanggaran hukum." },
        { teks: "Menolak ikut serta dan menolak bagian dari kelebihan dana tanpa melaporkan.", bobot: 0, pembahasan: "Menolak ikut serta baik, tetapi pelanggaran tetap berlanjut tanpa pelaporan." },
        { teks: "Membiarkan sementara sambil mengamati apakah rekan lain melakukan hal serupa.", bobot: 0, pembahasan: "Pembiaran sementara memberi peluang pelanggaran berlanjut." },
        { teks: "Mengumpulkan bukti dan melaporkannya melalui sistem pengaduan atau atasan yang berwenang.", bobot: 5, pembahasan: "Integritas menuntut kejujuran dan keberanian melapor melalui jalur resmi." },
        { teks: "Mengusulkan kenaikan tunjangan perjalanan dinas agar praktik itu tidak perlu lagi.", bobot: 0, pembahasan: "Usul tunjangan tidak membenarkan pemalsuan dokumen." }
      ]
    },
    {
      soal: "Ki Hajar Dewantara, yang bergelar bangsawan dan pernah menjadi menteri, tetap hidup bersahaja, antara lain membeli perabot bekas. Keteladanan integritas yang dapat dipetik pejabat masa kini adalah ....",
      opsi: [
        { teks: "Pejabat tidak boleh memiliki barang bernilai tinggi.", bobot: 0, pembahasan: "Tidak ada larangan memiliki barang bernilai tinggi, yang penting tidak berlebihan." },
        { teks: "Jabatan dan status sosial tidak semestinya memicu gaya hidup berlebihan atau pamer.", bobot: 5, pembahasan: "Nilai sederhana: tidak bergaya hidup berlebihan atau pamer meski memiliki kedudukan tinggi." },
        { teks: "Memakai barang bekas adalah prosedur wajib untuk menekan pengeluaran negara.", bobot: 0, pembahasan: "Memakai barang bekas bukan prosedur wajib." },
        { teks: "Pembatasan barang mewah perlu dilakukan agar rakyat tidak merasa iri.", bobot: 0, pembahasan: "Pertimbangan rasa iri bukan alasan utama kesederhanaan." },
        { teks: "Gaya hidup sederhana dipakai sebagai strategi untuk memperoleh simpati massa.", bobot: 0, pembahasan: "Kesederhanaan adalah sikap tulus, bukan strategi mencari simpati." }
      ]
    },
    {
      soal: "Sri Sultan Hamengku Buwono IX meminta petugas tetap menilangnya karena melanggar rambu, padahal petugas hendak membebaskannya karena mengenali beliau. Sikap itu menunjukkan bahwa ....",
      opsi: [
        { teks: "pelanggaran oleh penyelenggara negara diselesaikan melalui sidang kode etik", bobot: 0, pembahasan: "Sidang kode etik tidak berkaitan dengan peristiwa ini." },
        { teks: "pimpinan daerah wajib memberi sumbangan tambahan kepada kas negara", bobot: 0, pembahasan: "Tidak ada kewajiban sumbangan tambahan." },
        { teks: "asas kesetaraan di hadapan hukum harus ditegakkan tanpa pengecualian bagi siapa pun", bobot: 5, pembahasan: "Adil dan jujur: hukum berlaku sama bagi semua orang, tanpa keistimewaan karena jabatan." },
        { teks: "pemulihan nama baik dilakukan melalui pengadilan perdata", bobot: 0, pembahasan: "Pengadilan perdata tidak berkaitan dengan peristiwa ini." },
        { teks: "penegakan disiplin di ruang publik memerlukan campur tangan langsung pimpinan", bobot: 0, pembahasan: "Campur tangan pimpinan justru bertentangan dengan kesetaraan." }
      ]
    },
    {
      soal: "Seorang guru ASN memberi bimbingan belajar tambahan tanpa memungut biaya. Menjelang kenaikan kelas, beberapa wali murid memberinya bingkisan mahal sebagai tanda terima kasih. Tindakan yang paling berintegritas adalah ....",
      opsi: [
        { teks: "Menerima bingkisan karena diberikan dengan ikhlas setelah penilaian selesai.", bobot: 0, pembahasan: "Pemberian setelah penilaian tetap berkaitan dengan jabatan." },
        { teks: "Menerima bingkisan lalu membagikannya kepada siswa kurang mampu.", bobot: 0, pembahasan: "Membagikannya tidak menghapus penerimaan gratifikasi." },
        { teks: "Menyarankan wali murid memberikannya kepada komite sekolah.", bobot: 0, pembahasan: "Mengalihkan kepada komite menunjukkan pemberian tetap diterima." },
        { teks: "Menerima bingkisan dan mencatatnya dalam laporan tahunan sekolah.", bobot: 0, pembahasan: "Mencatat dalam laporan sekolah tidak sama dengan melapor kepada unit gratifikasi." },
        { teks: "Menolak bingkisan dengan sopan, atau melaporkannya kepada unit gratifikasi jika sulit ditolak.", bobot: 5, pembahasan: "Bingkisan mahal dari pihak yang berkaitan dengan layanan adalah gratifikasi; wajib ditolak atau dilaporkan." }
      ]
    },
    {
      soal: "ASN pejabat struktural wajib mengucapkan sumpah jabatan menurut agamanya dan melaporkan harta kekayaannya (LHKPN) pada awal dan akhir jabatan. Kedua kewajiban itu mewujudkan tata kelola yang berlandaskan ....",
      opsi: [
        { teks: "akuntabilitas kinerja dan kepastian hukum pembagian wewenang antarinstansi", bobot: 0, pembahasan: "Dua kewajiban itu tidak mengatur pembagian wewenang." },
        { teks: "keadilan pembagian dan profesionalisme dalam merumuskan kebijakan daerah", bobot: 0, pembahasan: "Dua kewajiban itu tidak berkaitan dengan pembagian kebijakan daerah." },
        { teks: "efisiensi anggaran dan netralitas politik ASN", bobot: 0, pembahasan: "Dua kewajiban itu tidak berkaitan dengan anggaran dan netralitas." },
        { teks: "keimanan pejabat dan keterbukaan dalam mengelola amanat publik", bobot: 5, pembahasan: "Sumpah menurut agama menunjukkan tanggung jawab moral, dan LHKPN menunjukkan keterbukaan." },
        { teks: "persatuan bangsa dan tertib administrasi dalam sistem merit", bobot: 0, pembahasan: "Dua kewajiban itu tidak berkaitan dengan persatuan dan sistem merit." }
      ]
    },
    {
      soal: "R.A. Kartini tetap menulis surat kepada tokoh-tokoh di Eropa untuk memikirkan pendidikan perempuan pribumi, meskipun gerak fisiknya dibatasi masa pingitan. Keteladanan integritasnya adalah ....",
      opsi: [
        { teks: "kemampuan memanfaatkan diplomasi internasional untuk mendapat dana sekolah", bobot: 0, pembahasan: "Tujuan beliau bukan mendapat dana sekolah." },
        { teks: "keteguhan memperjuangkan pendidikan dan emansipasi meskipun berada dalam keterbatasan", bobot: 5, pembahasan: "Konsisten memperjuangkan cita-cita meski dibatasi menunjukkan keteguhan dan kerja keras." },
        { teks: "kepatuhan pada adat setempat sambil mencari dukungan dari luar", bobot: 0, pembahasan: "Beliau justru menentang pembatasan adat bagi perempuan." },
        { teks: "kepiawaian menulis karya modern untuk mengubah kebijakan pemerintah kolonial", bobot: 0, pembahasan: "Tujuan beliau bukan mengubah kebijakan pemerintah." },
        { teks: "pengorbanan hak pribadi demi menjaga kedudukan keluarga dalam birokrasi", bobot: 0, pembahasan: "Beliau tidak berkorban demi kedudukan keluarga." }
      ]
    },
    {
      soal: "Jenderal Hoegeng, mantan Kapolri, dikenal menolak pemberian dari pihak yang berkepentingan dalam tugasnya. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Jujur", bobot: 5, pembahasan: "Jujur berarti tidak curang dan tidak mengambil yang bukan haknya, termasuk menolak gratifikasi." },
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketaatan waktu dan prosedur." },
        { teks: "Mandiri", bobot: 0, pembahasan: "Mandiri berkaitan dengan inisiatif dan tidak bergantung pada orang lain." },
        { teks: "Peduli", bobot: 0, pembahasan: "Peduli berkaitan dengan empati terhadap orang lain." },
        { teks: "Kerja keras", bobot: 0, pembahasan: "Kerja keras berkaitan dengan kesungguhan mencapai target." }
      ]
    },
    {
      soal: "Laporan akhir tahun harus diserahkan ke pusat besok pagi, tetapi listrik kantor padam dan masih banyak data belum direkap. Sikap yang mencerminkan nilai kerja keras adalah ....",
      opsi: [
        { teks: "Memindahkan pengerjaan ke lokasi yang memiliki listrik dan jaringan internet agar laporan selesai tepat waktu.", bobot: 5, pembahasan: "Kerja keras berarti mencari jalan agar target tetap tercapai meski ada kendala." },
        { teks: "Mengajukan surat permohonan penundaan tenggat dengan melampirkan bukti gangguan listrik.", bobot: 0, pembahasan: "Permohonan penundaan belum menunjukkan upaya mencapai target." },
        { teks: "Menghubungi penyedia listrik agar kantor diprioritaskan menyala.", bobot: 0, pembahasan: "Menunggu pihak lain tidak menyelesaikan laporan." },
        { teks: "Menyampaikan laporan sementara dari data yang sudah terkumpul dan melengkapinya kemudian.", bobot: 0, pembahasan: "Laporan sementara menurunkan mutu laporan." },
        { teks: "Menunggu listrik normal kembali lalu mengerjakan laporan bersama tim secara lembur.", bobot: 0, pembahasan: "Menunggu listrik menyia-nyiakan waktu yang tersisa." }
      ]
    },
    {
      soal: "Atasan menyuruh Anda meloloskan dokumen pencairan dana hibah sebuah yayasan yang belum memenuhi syarat administratif karena yayasan itu dikelola kerabatnya. Tindakan Anda adalah ....",
      opsi: [
        { teks: "Meloloskan dokumen sebagai bentuk loyalitas dengan syarat atasan membuat pernyataan tertulis.", bobot: 0, pembahasan: "Pernyataan tertulis atasan tidak membenarkan pelanggaran." },
        { teks: "Mengajukan cuti untuk menghindari tekanan atasan.", bobot: 0, pembahasan: "Cuti menghindari tanggung jawab." },
        { teks: "Menolak perintah itu secara lisan lalu mengumumkannya kepada media massa lokal.", bobot: 0, pembahasan: "Mengumumkan ke media melanggar prosedur dan kerahasiaan dinas." },
        { teks: "Melengkapi sendiri kekurangan dokumen agar memenuhi syarat.", bobot: 0, pembahasan: "Melengkapi dokumen sendiri sama dengan memalsukan." },
        { teks: "Mengembalikan dokumen kepada pemohon dengan nota dinas yang menjelaskan syarat yang belum terpenuhi.", bobot: 5, pembahasan: "Verifikasi dilakukan sesuai aturan dan penolakan dilakukan secara tertulis lewat jalur resmi." }
      ]
    },
    {
      soal: "Sebuah perusahaan yang kalah tender mengirim parsel mewah ke rumah Anda, ketua panitia pengadaan, dengan alasan perayaan hari besar keagamaan dan lelang telah ditutup. Langkah yang harus Anda ambil adalah ....",
      opsi: [
        { teks: "Menerima parsel itu untuk menjaga hubungan baik karena seleksi telah selesai.", bobot: 0, pembahasan: "Selesainya seleksi tidak menghapus status gratifikasi." },
        { teks: "Mengembalikan parsel dengan sopan dan melaporkan penerimaannya kepada unit pengendali gratifikasi.", bobot: 5, pembahasan: "Pemberian terkait jabatan adalah gratifikasi; wajib ditolak atau dilaporkan kepada unit pengendali." },
        { teks: "Menyumbangkan isi parsel ke panti asuhan tanpa melapor.", bobot: 0, pembahasan: "Menyumbangkan tanpa melapor tetap menerima gratifikasi." },
        { teks: "Membagikan parsel kepada anggota panitia agar tidak dinikmati sendiri.", bobot: 0, pembahasan: "Membagikan kepada panitia menyebarkan gratifikasi." },
        { teks: "Menerima parsel dan memasukkan perusahaan itu ke daftar hitam.", bobot: 0, pembahasan: "Menerima lalu menghukum perusahaan tidak sesuai prosedur." }
      ]
    },
    {
      soal: "Anda menemukan pimpinan divisi memanipulasi laporan keuangan untuk menutupi kebocoran anggaran dan menjanjikan promosi jika Anda diam. Langkah yang paling mencerminkan nilai keberanian adalah ....",
      opsi: [
        { teks: "Menolak promosi itu secara diam-diam dan meminta mutasi ke divisi lain.", bobot: 0, pembahasan: "Menolak diam-diam dan pindah tidak menindaklanjuti pelanggaran." },
        { teks: "Menerima tawaran promosi karena tanggung jawab audit ada pada pimpinan.", bobot: 0, pembahasan: "Menerima tawaran berarti ikut menutupi pelanggaran." },
        { teks: "Menyalin bukti manipulasi sebagai alat pertahanan diri bila ada pemeriksaan.", bobot: 0, pembahasan: "Menyimpan bukti tanpa melapor tidak menghentikan pelanggaran." },
        { teks: "Menolak perintah pimpinan dengan tegas dan melaporkan temuan melalui sistem pengaduan resmi.", bobot: 5, pembahasan: "Berani menolak penyimpangan dan melapor lewat jalur resmi adalah wujud integritas." },
        { teks: "Menegur pimpinan di forum rapat terbuka agar jera.", bobot: 0, pembahasan: "Menegur di rapat terbuka melanggar prosedur dan tidak profesional." }
      ]
    },
    {
      soal: "Kepala desa menyadari ada kesalahan pemasukan data penerima bantuan sosial yang sudah diumumkan sehingga beberapa keluarga miskin tidak terdaftar. Langkah yang paling mencerminkan kejujuran dan tanggung jawab adalah ....",
      opsi: [
        { teks: "Membiarkan data itu untuk pencairan tahap ini dan menjanjikan perbaikan nanti.", bobot: 0, pembahasan: "Membiarkan kesalahan merugikan keluarga miskin." },
        { teks: "Mengalihkan dana operasional desa secara sepihak untuk menutupi bantuan yang kurang.", bobot: 0, pembahasan: "Mengalihkan dana sepihak menyalahi aturan keuangan." },
        { teks: "Menghentikan seluruh pencairan bantuan sampai kementerian turun tangan.", bobot: 0, pembahasan: "Menghentikan seluruh pencairan merugikan penerima yang sah." },
        { teks: "Meminta staf merevisi data dan menanggung pemotongan gaji sebagai penebusan.", bobot: 0, pembahasan: "Menyalahkan staf tidak sesuai prosedur dan mengalihkan tanggung jawab." },
        { teks: "Melaporkan kesalahan administrasi kepada pihak berwenang dan menyampaikan perbaikan datanya kepada warga.", bobot: 5, pembahasan: "Mengakui kesalahan dan memperbaikinya lewat jalur resmi adalah wujud kejujuran dan tanggung jawab." }
      ]
    },
    {
      soal: "Kelalaian Anda dalam memeriksa satu dokumen hampir membuat instansi menerbitkan izin yang menyalahi prosedur, meski izin belum ditandatangani pimpinan. Sikap yang mencerminkan nilai tanggung jawab adalah ....",
      opsi: [
        { teks: "Memperbaiki draf di arsip secara diam-diam agar sesuai aturan.", bobot: 0, pembahasan: "Memperbaiki diam-diam menutupi kesalahan." },
        { teks: "Membuat nota pembelaan yang menekankan tingginya beban kerja.", bobot: 0, pembahasan: "Pembelaan dengan beban kerja menghindari tanggung jawab." },
        { teks: "Menghubungi pemohon di luar jam kerja untuk melengkapi dokumen.", bobot: 0, pembahasan: "Menghubungi pemohon di luar jam kerja menyalahi prosedur." },
        { teks: "Mengundurkan diri dari tim verifikator sebagai hukuman bagi diri sendiri.", bobot: 0, pembahasan: "Mengundurkan diri menghindari kewajiban memperbaiki." },
        { teks: "Melaporkan kelalaian itu kepada pimpinan, menerima teguran, dan segera memperbaiki dokumen.", bobot: 5, pembahasan: "Tanggung jawab berarti mengakui kesalahan, menerima konsekuensi, dan memperbaikinya." }
      ]
    },
    {
      soal: "Anda ketua tim pembagi insentif kinerja tahunan. Ada anggota yang selalu melampaui target dan ada yang sering terlambat dan bekerja di bawah standar. Keputusan yang paling mencerminkan nilai adil adalah ....",
      opsi: [
        { teks: "Membagi insentif sama rata agar tidak terjadi kecemburuan.", bobot: 0, pembahasan: "Sama rata mengabaikan perbedaan kinerja." },
        { teks: "Menyerahkan pembagian kepada pimpinan tertinggi agar Anda terhindar dari sentimen.", bobot: 0, pembahasan: "Menyerahkan kepada pimpinan menghindari tanggung jawab." },
        { teks: "Menahan insentif anggota yang kinerjanya rendah dan mengalihkannya untuk kegiatan tim.", bobot: 0, pembahasan: "Mengalihkan insentif sepihak tidak sesuai aturan." },
        { teks: "Memberi porsi lebih besar kepada anggota rajin secara rahasia.", bobot: 0, pembahasan: "Pembagian rahasia tidak terbuka." },
        { teks: "Menyusun skema insentif proporsional dan terbuka berdasarkan capaian kinerja setiap anggota.", bobot: 5, pembahasan: "Adil berarti proporsional dan terbuka sesuai kontribusi." }
      ]
    },
    {
      soal: "Saat makan malam bersama keluarga di restoran umum, Anda bertemu direktur kontraktor yang proyeknya sedang Anda audit, dan ia memaksa membayar tagihan Anda. Sikap Anda sebagai auditor adalah ....",
      opsi: [
        { teks: "Menerima tawaran itu dan memastikan audit esok hari tetap berjalan objektif.", bobot: 0, pembahasan: "Menerima traktiran menimbulkan konflik kepentingan walau audit objektif." },
        { teks: "Mempersilakan direktur membayar sebagian tagihan sebagai jalan tengah.", bobot: 0, pembahasan: "Menerima sebagian tetap gratifikasi." },
        { teks: "Menolak dengan suara lantang dan mengancam memberi opini audit buruk.", bobot: 0, pembahasan: "Mengancam bersikap kasar dan tidak profesional." },
        { teks: "Menyapa dengan sopan, menolak tawaran itu dengan tegas, dan membayar tagihan sendiri.", bobot: 5, pembahasan: "Menolak secara tegas dan sopan serta membayar sendiri menjaga independensi auditor." },
        { teks: "Meninggalkan restoran tanpa menyapa agar terhindar dari pertemuan itu.", bobot: 0, pembahasan: "Pergi tanpa menyapa tidak sopan, sedangkan penolakan dapat dilakukan dengan baik." }
      ]
    },
    {
      soal: "Rekan Anda yang anaknya harus dirawat di rumah sakit meminjam sebagian dana kas kecil kantor yang Anda pegang selama beberapa hari. Langkah Anda adalah ....",
      opsi: [
        { teks: "Meminjamkan dana itu dengan syarat ia membuat surat pengembalian sebelum audit.", bobot: 0, pembahasan: "Meminjamkan dana kantor melanggar aturan walau ada surat." },
        { teks: "Menolak tegas dan melaporkannya kepada atasan atas dugaan penyalahgunaan.", bobot: 0, pembahasan: "Melaporkan tanpa kepedulian terlalu keras pada kasus ini." },
        { teks: "Melaporkan kondisi rekan itu kepada bagian kepegawaian untuk pembinaan.", bobot: 0, pembahasan: "Melaporkan kondisi rekan ke kepegawaian tidak membantunya." },
        { teks: "Meminjamkan dana dengan meminta kuitansi kosong sebagai jaminan.", bobot: 0, pembahasan: "Kuitansi kosong adalah pemalsuan dokumen." },
        { teks: "Menolak meminjamkan dana kantor sesuai aturan, tetapi menawarkan bantuan dari uang pribadi.", bobot: 5, pembahasan: "Aturan keuangan ditegakkan dan kepedulian ditunjukkan lewat bantuan pribadi." }
      ]
    },
    {
      soal: "Istri Anda yang bukan ASN sering mengunggah gaya hidup mewah di media sosial, padahal Anda terikat etika dan larangan hidup bermewah-mewahan bagi abdi negara. Langkah yang mencerminkan nilai integritas adalah ....",
      opsi: [
        { teks: "Meminta istri mengunci akun agar unggahan tidak memicu kecemburuan.", bobot: 0, pembahasan: "Mengunci akun menyembunyikan, bukan mengubah perilaku." },
        { teks: "Memberi komentar positif dengan akun anonim agar opini publik seimbang.", bobot: 0, pembahasan: "Akun anonim adalah manipulasi opini." },
        { teks: "Melaporkan aktivitas media sosial istri kepada atasan sebagai bentuk keterbukaan.", bobot: 0, pembahasan: "Melaporkan istri kepada atasan berlebihan." },
        { teks: "Membiarkan karena aturan etik hanya mengikat Anda dalam kedinasan.", bobot: 0, pembahasan: "Membiarkan mengabaikan dampak gaya hidup keluarga terhadap nama baik ASN." },
        { teks: "Mengingatkan istri dengan baik agar menyesuaikan gaya hidup dan bijak bermedia sosial demi menjaga nama baik instansi.", bobot: 5, pembahasan: "Integritas termasuk menjaga keselarasan gaya hidup keluarga dengan etika abdi negara secara persuasif." }
      ]
    },
    {
      soal: "Sebagai kepala divisi Anda baru mengesahkan aturan pemotongan tunjangan bagi pegawai yang terlambat. Suatu pagi Anda terlambat karena mengantar anggota keluarga ke unit gawat darurat. Langkah yang paling mencerminkan nilai integritas adalah ....",
      opsi: [
        { teks: "Meminta staf absensi memaklumi keterlambatan karena alasan medis darurat.", bobot: 0, pembahasan: "Meminta pemakluman memberi keistimewaan bagi diri sendiri." },
        { teks: "Mencatat keterlambatan secara resmi di sistem absensi dan siap menerima pemotongan tunjangan sesuai aturan.", bobot: 5, pembahasan: "Pembuat aturan harus tunduk pada aturan yang sama; ini wujud jujur, disiplin, dan adil." },
        { teks: "Mengganti keterlambatan dengan lembur sore hari.", bobot: 0, pembahasan: "Lembur tidak menghapus aturan keterlambatan." },
        { teks: "Membatalkan aturan pemotongan tunjangan agar semua pegawai diperlakukan sama.", bobot: 0, pembahasan: "Membatalkan aturan menghindari konsekuensi." },
        { teks: "Meminta staf mencatat kehadiran tepat waktu karena Anda sudah memantau pekerjaan dari luar kantor.", bobot: 0, pembahasan: "Mencatat kehadiran palsu adalah pemalsuan data." }
      ]
    },
    {
      soal: "Vendor langganan pemenang tender alat tulis rutin mengirim voucer belanja kepada panitia setiap akhir tahun sebagai apresiasi mitra kerja. Langkah berintegritas yang wajib Anda lakukan adalah ....",
      opsi: [
        { teks: "Menolak voucer dengan sopan dan melaporkan penerimaannya kepada unit pengendali gratifikasi.", bobot: 5, pembahasan: "Pemberian dari rekanan adalah gratifikasi yang wajib ditolak atau dilaporkan." },
        { teks: "Membagikan voucer kepada tenaga honorer yang lebih membutuhkan.", bobot: 0, pembahasan: "Membagikan kembali tidak menghilangkan penerimaan gratifikasi." },
        { teks: "Menerima voucer itu karena tidak memengaruhi keputusan tender yang telah berjalan.", bobot: 0, pembahasan: "Pemberian tetap gratifikasi walau keputusan tender tidak terpengaruh." },
        { teks: "Menerima voucer tanpa memakainya sampai kontrak dengan vendor berakhir.", bobot: 0, pembahasan: "Menyimpan sampai kontrak berakhir tetap menerima gratifikasi." },
        { teks: "Mengembalikan voucer secara diam-diam lewat kurir agar vendor tidak tersinggung.", bobot: 0, pembahasan: "Mengembalikan tanpa melapor tidak memenuhi kewajiban pelaporan." }
      ]
    },
    {
      soal: "Saat uji kompetensi promosi jabatan, seorang pejabat menawarkan bocoran draf soal wawancara agar kursi pimpinan terisi pegawai internal. Respons Anda adalah ....",
      opsi: [
        { teks: "Menerima draf itu demi mengamankan posisi strategis instansi.", bobot: 0, pembahasan: "Menerima bocoran melanggar kejujuran." },
        { teks: "Menolak karena merasa belum siap secara kemampuan manajerial.", bobot: 0, pembahasan: "Alasan menolak bukan karena prinsip." },
        { teks: "Menerima materi itu hanya sebagai bahan belajar tanpa menyalinnya.", bobot: 0, pembahasan: "Menerima materi bocoran tetap pelanggaran." },
        { teks: "Menolak dengan tegas karena tindakan itu mencederai objektivitas kompetisi dan sistem merit.", bobot: 5, pembahasan: "Menolak tegas karena kejujuran dan keadilan dalam sistem merit harus dijaga." },
        { teks: "Mengiyakan secara lisan untuk menjaga perasaan tetapi tidak memakai bocoran itu.", bobot: 0, pembahasan: "Mengiyakan menunjukkan ketidakjujuran." }
      ]
    },
    {
      soal: "Sesaat sebelum rapat pleno, Anda menemukan kesalahan hitung akibat kelalaian tim Anda yang membuat capaian instansi tampak lebih tinggi dari aslinya. Langkah yang paling mencerminkan kejujuran adalah ....",
      opsi: [
        { teks: "Menyampaikan laporan sesuai draf awal demi menjaga semangat tim, lalu merevisinya diam-diam setelah rapat.", bobot: 0, pembahasan: "Menyampaikan data keliru lalu merevisi diam-diam adalah ketidakjujuran." },
        { teks: "Menyampaikan kesalahan itu secara terbuka kepada pimpinan rapat dan meminta waktu untuk menyajikan data yang benar.", bobot: 5, pembahasan: "Jujur berarti mengungkap kesalahan sebelum keputusan diambil dan memperbaikinya secara terbuka." },
        { teks: "Meminta anggota yang melakukan kesalahan mengambil alih presentasi agar ia menanggung teguran.", bobot: 0, pembahasan: "Melimpahkan tanggung jawab kepada anggota tim menghindari tanggung jawab ketua." },
        { teks: "Membatalkan presentasi mendadak dengan alasan kendala teknis agar tim dapat memperbaiki data.", bobot: 0, pembahasan: "Alasan kendala teknis adalah kebohongan." },
        { teks: "Mengubah tampilan grafik agar kesalahan hitung tidak terlalu mencolok.", bobot: 0, pembahasan: "Mengubah tampilan grafik menutupi kesalahan." }
      ]
    },
    {
      soal: "Karena beban kerja tinggi, Anda tanpa sengaja menyetujui draf perizinan yang belum melampirkan dokumen analisis dampak lingkungan, dan warga memprotes. Sikap yang mencerminkan nilai tanggung jawab adalah ....",
      opsi: [
        { teks: "Menyusun pembelaan bahwa ketiadaan dokumen adalah kelalaian pemohon.", bobot: 0, pembahasan: "Menyalahkan pemohon menghindari tanggung jawab." },
        { teks: "Menemui perwakilan warga dan memberi dana kompensasi agar protes dicabut.", bobot: 0, pembahasan: "Kompensasi pribadi untuk mencabut laporan adalah penyuapan." },
        { teks: "Mengakui kelalaian kepada pimpinan, menerima sanksi, dan memproses pembatalan izin untuk diperbaiki sesuai prosedur.", bobot: 5, pembahasan: "Tanggung jawab berarti mengakui kesalahan, menerima konsekuensi, dan memperbaikinya sesuai prosedur." },
        { teks: "Meminta staf memalsukan kelengkapan dokumen agar berkas tampak sah.", bobot: 0, pembahasan: "Memalsukan dokumen adalah pelanggaran berat." },
        { teks: "Mengajukan cuti sakit untuk menghindari tekanan pimpinan dan media.", bobot: 0, pembahasan: "Cuti sakit tanpa alasan sah menghindari tanggung jawab." }
      ]
    },
    {
      soal: "Seorang vendor langganan secara tertutup menawarkan posisi konsultan paruh waktu berhonor tinggi kepada Anda, pejabat pembuat komitmen, asalkan spesifikasi lelang tahun ini disesuaikan dengan produk unggulannya. Respons yang mencerminkan keteguhan integritas adalah ....",
      opsi: [
        { teks: "Menolak tawaran itu dengan tegas dan menyusun spesifikasi sesuai kebutuhan instansi dan peraturan.", bobot: 5, pembahasan: "Menolak konflik kepentingan dan penyuapan serta menjaga spesifikasi tetap objektif adalah wujud integritas." },
        { teks: "Menerima tawaran itu dengan syarat penyesuaian spesifikasi disetujui tertulis oleh atasan.", bobot: 0, pembahasan: "Persetujuan atasan tidak menghapus pelanggaran." },
        { teks: "Menyarankan vendor mendaftarkan kerabat Anda sebagai konsultan agar tidak terlacak.", bobot: 0, pembahasan: "Menunjuk kerabat adalah cara menyamarkan konflik kepentingan." },
        { teks: "Meminta waktu menimbang tawaran itu sampai tahap tender selesai.", bobot: 0, pembahasan: "Menunda jawaban membuka peluang kesepakatan tidak sah." },
        { teks: "Melaporkan tawaran kepada atasan tetapi meminta kebijakan agar perusahaan itu diutamakan.", bobot: 0, pembahasan: "Meminta perusahaan diutamakan tetap memihak." }
      ]
    },
    {
      soal: "Sesuai plafon anggaran, instansi menanggung penginapan setara hotel bintang empat, tetapi Anda menginap di wisma diklat yang jauh lebih murah. Tindakan pelaporan yang mencerminkan nilai kejujuran adalah ....",
      opsi: [
        { teks: "Meminta pengelola wisma menerbitkan kuitansi kosong agar nominalnya dapat disesuaikan dengan plafon.", bobot: 0, pembahasan: "Kuitansi kosong adalah pemalsuan." },
        { teks: "Melaporkan sisa dana kepada pimpinan untuk dibagikan sebagai uang lelah tim.", bobot: 0, pembahasan: "Membagi sisa dana adalah penyalahgunaan anggaran." },
        { teks: "Menulis nama hotel bintang empat pada laporan agar sesuai standar instansi.", bobot: 0, pembahasan: "Menulis nama hotel yang tidak benar adalah manipulasi laporan." },
        { teks: "Memakai sisa dana untuk jamuan makan malam bersama pejabat setempat.", bobot: 0, pembahasan: "Memakai sisa dana untuk jamuan tidak sesuai peruntukan." },
        { teks: "Melaporkan bukti tagihan wisma apa adanya dan mengembalikan sisa dana perjalanan dinas ke kas negara.", bobot: 5, pembahasan: "Laporan apa adanya dan pengembalian sisa dana menunjukkan kejujuran dalam pengelolaan uang negara." }
      ]
    },
    {
      soal: "Kasus korupsi layanan publik sering terjadi karena celah sistem yang memberi peluang atau memaksa pegawai menyimpang. Berdasarkan strategi Trisula pemberantasan korupsi, langkah yang paling tepat untuk menutup celah itu adalah ....",
      opsi: [
        { teks: "Menerapkan layanan administrasi digital agar interaksi langsung pegawai dan pemohon berkurang.", bobot: 5, pembahasan: "Memperbaiki sistem dan mengurangi tatap muka adalah sula pencegahan yang menutup celah korupsi." },
        { teks: "Menjatuhkan pemecatan tidak hormat dan pemiskinan bagi pegawai yang terbukti menerima suap.", bobot: 0, pembahasan: "Pemecatan dan pemiskinan termasuk sula penindakan." },
        { teks: "Menayangkan iklan layanan masyarakat tentang bahaya korupsi di semua platform instansi.", bobot: 0, pembahasan: "Kampanye termasuk sula pendidikan." },
        { teks: "Mengadakan siraman rohani dan pembinaan pakta integritas setiap bulan.", bobot: 0, pembahasan: "Pembinaan nilai termasuk sula pendidikan." },
        { teks: "Membentuk satuan tugas internal yang menyamar sebagai pemohon layanan.", bobot: 0, pembahasan: "Penyamaran adalah operasi penindakan." }
      ]
    },
    {
      soal: "Sebagai ketua tim pemeriksa pengadaan, Anda menemukan spesifikasi barang yang dikirim vendor tidak sesuai kontrak, tetapi atasan Anda mendesak agar barang tetap diterima demi mengejar serapan anggaran. Sikap Anda adalah ....",
      opsi: [
        { teks: "Mencatat ketidaksesuaian itu dalam berita acara dan menolak menandatangani serah terima barang.", bobot: 5, pembahasan: "Berani dan jujur: temuan dicatat secara resmi dan tanda tangan tidak diberikan pada dokumen yang tidak sesuai." },
        { teks: "Menyetujui penerimaan dengan catatan vendor mengganti barang pada tahun anggaran berikutnya.", bobot: 0, pembahasan: "Menerima dengan janji mengganti tetap menyalahi kontrak." },
        { teks: "Menerima barang itu sebagai bentuk kepatuhan kepada atasan.", bobot: 0, pembahasan: "Kepatuhan pada perintah yang melanggar aturan bukan integritas." },
        { teks: "Mengambil cuti tahunan agar tidak perlu menandatangani serah terima.", bobot: 0, pembahasan: "Cuti menghindari tanggung jawab." },
        { teks: "Menandatangani dokumen itu sambil melaporkan diam-diam tindakan atasan kepada inspektorat.", bobot: 0, pembahasan: "Menandatangani dokumen yang tidak sesuai berarti ikut menyetujui pelanggaran." }
      ]
    },
    {
      soal: "Seorang guru berprestasi nasional sering terlambat dan meninggalkan jam pelajaran tanpa keterangan sah dengan alasan menyiapkan kompetisi internasional. Sebagai kepala sekolah, tindakan penegakan integritas yang tepat adalah ....",
      opsi: [
        { teks: "Memberi toleransi keterlambatan sebagai apresiasi atas prestasinya.", bobot: 0, pembahasan: "Toleransi karena prestasi membedakan perlakuan." },
        { teks: "Memindahkan jadwal mengajar guru itu ke siang hari.", bobot: 0, pembahasan: "Memindahkan jadwal memberi keistimewaan." },
        { teks: "Memberi teguran tertulis dan sanksi disiplin sesuai aturan kehadiran tanpa membedakan status prestasinya.", bobot: 5, pembahasan: "Adil dan disiplin: aturan berlaku sama bagi semua pegawai, berprestasi atau tidak." },
        { teks: "Meminta guru lain menggantikan tugas mengajarnya secara sukarela.", bobot: 0, pembahasan: "Meminta guru lain menggantikan membebani pihak lain." },
        { teks: "Mengurangi beban jam wajib guru itu agar lebih fokus pada kompetisi.", bobot: 0, pembahasan: "Mengurangi beban wajib tidak sesuai aturan." }
      ]
    },
    {
      soal: "Anda baru dipromosikan menjadi kepala cabang. Fasilitas ruang kerja masih layak, tetapi masih ada anggaran akhir tahun yang dapat dipakai untuk peremajaan furnitur ruang pimpinan. Langkah yang mencerminkan nilai sederhana dan jujur adalah ....",
      opsi: [
        { teks: "Memakai seluruh sisa anggaran untuk menata ulang ruang kerja agar lebih representatif.", bobot: 0, pembahasan: "Menghabiskan anggaran untuk fasilitas pribadi bertentangan dengan kesederhanaan." },
        { teks: "Memakai sebagian kecil anggaran untuk dekorasi dan mengembalikan sisanya ke kas daerah.", bobot: 0, pembahasan: "Sebagian anggaran tetap dipakai untuk kebutuhan yang tidak mendesak." },
        { teks: "Meminta staf merenovasi ruangan secara swadaya agar anggaran disimpan sebagai cadangan operasional.", bobot: 0, pembahasan: "Memakai tenaga staf secara swadaya membebani pegawai." },
        { teks: "Menghabiskan anggaran di akhir tahun agar persentase serapan keuangan tampak baik.", bobot: 0, pembahasan: "Menghabiskan anggaran demi serapan adalah pemborosan." },
        { teks: "Mengajukan revisi rencana anggaran agar dana dialihkan ke peningkatan kapasitas pelayanan.", bobot: 5, pembahasan: "Anggaran dipakai untuk kebutuhan yang bermanfaat bagi pelayanan, bukan kenyamanan pribadi." }
      ]
    },
    {
      soal: "Anda mengetahui atasan Anda rutin memakai kendaraan dinas untuk liburan keluarga, padahal ia sering menekankan pentingnya menjaga aset negara. Tindakan yang mencerminkan keberanian dan integritas adalah ....",
      opsi: [
        { teks: "Mendokumentasikan dan menyebarkannya ke forum pegawai sebagai sanksi sosial.", bobot: 0, pembahasan: "Menyebarkan di forum pegawai bukan jalur resmi dan mempermalukan." },
        { teks: "Memakai kendaraan dinas untuk keperluan darurat keluarga Anda dengan dalih atasan juga melakukannya.", bobot: 0, pembahasan: "Ikut menyalahgunakan aset negara adalah pelanggaran." },
        { teks: "Mengabaikan pelanggaran itu karena penggunaan di luar jam kerja adalah kewenangan atasan.", bobot: 0, pembahasan: "Kendaraan dinas bukan untuk keperluan pribadi." },
        { teks: "Menyindir atasan secara terbuka di rapat koordinasi.", bobot: 0, pembahasan: "Menyindir terbuka tidak profesional." },
        { teks: "Mengingatkan atasan dengan sopan dan melaporkannya ke sistem pengaduan internal bila tidak berubah.", bobot: 5, pembahasan: "Berani mengingatkan dan melapor lewat jalur resmi adalah wujud integritas." }
      ]
    },
    {
      soal: "Sebagai staf pimpinan, Anda memegang dokumen rancangan kebijakan berlabel sangat rahasia. Seorang anggota dewan datang mendadak meminta salinannya dengan alasan fungsi pengawasan, sementara pimpinan sedang dinas luar. Sikap Anda adalah ....",
      opsi: [
        { teks: "Menolak dengan tegas sambil menjelaskan prosedur kerahasiaan dan meminta yang bersangkutan menghubungi pimpinan.", bobot: 5, pembahasan: "Menjaga kerahasiaan dokumen sesuai prosedur dan mengarahkan permintaan kepada pimpinan." },
        { teks: "Memperbolehkan anggota dewan membaca dokumen di ruang kerja Anda tanpa menyalinnya.", bobot: 0, pembahasan: "Memperbolehkan membaca tetap membuka kerahasiaan." },
        { teks: "Menyerahkan salinan karena anggota dewan memiliki fungsi pengawasan terhadap pemerintahan.", bobot: 0, pembahasan: "Fungsi pengawasan dilakukan lewat prosedur resmi, bukan permintaan mendadak kepada staf." },
        { teks: "Meminta izin lisan kepada pimpinan yang sedang dinas luar untuk menyalin dokumen.", bobot: 0, pembahasan: "Izin lisan tidak memenuhi prosedur dokumen sangat rahasia." },
        { teks: "Menyimpan dokumen di laci dan mengatakan drafnya belum selesai.", bobot: 0, pembahasan: "Menyatakan draf belum selesai adalah kebohongan." }
      ]
    },
    {
      soal: "Anda ketua panitia seleksi tenaga kontrak, dan keponakan Anda melamar dengan kompetensi yang sangat baik. Prosedur instansi melarang konflik kepentingan dalam rekrutmen. Sikap berintegritas yang harus Anda tunjukkan adalah ....",
      opsi: [
        { teks: "Mengundurkan diri dari kepanitiaan seleksi pada periode itu agar proses tetap objektif.", bobot: 5, pembahasan: "Pihak yang memiliki konflik kepentingan harus menarik diri dari proses seleksi." },
        { teks: "Tetap memimpin seleksi dan menilai secara objektif tanpa membedakan kekerabatan.", bobot: 0, pembahasan: "Tetap memimpin meski ada konflik kepentingan melanggar prosedur." },
        { teks: "Meloloskan keponakan pada tahap administrasi lalu menyerahkan penilaian tahap berikutnya kepada anggota.", bobot: 0, pembahasan: "Meloloskan pada tahap awal sudah memihak." },
        { teks: "Meminta keponakan melamar lewat jalur rekomendasi pimpinan.", bobot: 0, pembahasan: "Jalur rekomendasi pimpinan adalah jalur istimewa." },
        { teks: "Menolak berkas lamaran keponakan sejak awal.", bobot: 0, pembahasan: "Menolak berkas karena kekerabatan tidak adil bagi pelamar." }
      ]
    },
    {
      soal: "Dalam diklat kepemimpinan, rekan menawarkan salinan laporan proyek perubahan tahun lalu untuk Anda modifikasi agar cepat selesai dan bernilai sempurna. Keputusan yang mencerminkan nilai integritas adalah ....",
      opsi: [
        { teks: "Menerima salinan itu sebagai kerangka tata naskah lalu meminta rekan memandu penulisan.", bobot: 0, pembahasan: "Memakai laporan orang lain sebagai dasar tetap menjiplak." },
        { teks: "Menggabungkan gagasan rekan dengan narasi instansi Anda agar laporan lebih lengkap.", bobot: 0, pembahasan: "Menggabungkan gagasan tanpa pengakuan adalah plagiarisme." },
        { teks: "Melaporkan rekan itu kepada panitia diklat atas tuduhan plagiarisme.", bobot: 0, pembahasan: "Melaporkan rekan yang baru menawarkan berlebihan." },
        { teks: "Menerima tawaran itu karena modifikasi laporan lumrah dalam penyusunan kebijakan.", bobot: 0, pembahasan: "Memodifikasi karya orang lain tanpa pengakuan adalah plagiarisme." },
        { teks: "Menolak tawaran itu dan menyusun laporan berdasarkan gagasan sendiri meski harus mengorbankan waktu istirahat.", bobot: 5, pembahasan: "Menolak plagiarisme dan bekerja sendiri adalah wujud jujur dan mandiri." }
      ]
    },
    {
      soal: "Seorang pengembang menyelipkan amplop berisi uang dalam map dokumen perizinan yang diserahkan kepada Anda sebagai \"dana operasional lapangan\". Sikap Anda yang paling mencerminkan integritas adalah ....",
      opsi: [
        { teks: "Mengembalikan amplop dengan sopan dan menghentikan seluruh pemeriksaan milik pengembang itu.", bobot: 0, pembahasan: "Menghentikan seluruh pemeriksaan adalah tindakan sepihak dan merugikan pemohon." },
        { teks: "Menerima amplop lalu menyetorkannya ke kas negara sebagai penerimaan negara bukan pajak.", bobot: 0, pembahasan: "Menerima uang lalu menyetor tidak sesuai prosedur gratifikasi." },
        { teks: "Membiarkan amplop di dalam map dan mengembalikannya ke kantor pengembang lewat kurir.", bobot: 0, pembahasan: "Mengembalikan lewat kurir tanpa melapor tidak memenuhi kewajiban pelaporan." },
        { teks: "Menolak amplop dengan tegas, melanjutkan pemeriksaan secara profesional, dan melaporkan kejadian itu ke unit pengendali gratifikasi.", bobot: 5, pembahasan: "Gratifikasi ditolak, pemeriksaan tetap objektif, dan kejadian dilaporkan kepada unit berwenang." },
        { teks: "Mengambil sebagian isi amplop untuk mengganti biaya transportasi dan mengembalikan sisanya.", bobot: 0, pembahasan: "Mengambil sebagian isi amplop adalah penerimaan gratifikasi." }
      ]
    },
    {
      soal: "Seorang lansia dari pelosok menangis karena berkas persyaratannya kurang satu lembar fotokopi, padahal sesuai prosedur berkas yang kurang tidak dapat didaftarkan. Tindakan yang memadukan nilai peduli dan disiplin adalah ....",
      opsi: [
        { teks: "Memasukkan data lansia itu dengan nomor dokumen warga lain sebagai syarat sementara.", bobot: 0, pembahasan: "Memakai nomor dokumen orang lain adalah pemalsuan." },
        { teks: "Menolak memproses berkas dan meminta lansia kembali esok hari dengan persyaratan lengkap.", bobot: 0, pembahasan: "Menolak tanpa membantu kurang peduli." },
        { teks: "Membantu menggandakan dokumen dengan mesin kantor agar persyaratan lengkap dan dapat diproses sesuai prosedur.", bobot: 5, pembahasan: "Peduli ditunjukkan dengan membantu, dan disiplin ditunjukkan dengan tetap memenuhi syarat sesuai prosedur." },
        { teks: "Menerima berkas manual dan menjanjikan proses setelah lansia mengirim kekurangannya.", bobot: 0, pembahasan: "Menerima berkas kurang melanggar prosedur." },
        { teks: "Meminta petugas kebersihan mengantar lansia ke tempat fotokopi dengan kendaraan dinas.", bobot: 0, pembahasan: "Memakai kendaraan dinas untuk keperluan itu menyalahi aturan." }
      ]
    },
    {
      soal: "Pimpinan sudah menandatangani SK pencairan dana bantuan sosial, lalu Anda sadar ada salah ketik pada dasar hukum yang tidak mengubah makna tetapi menyalahi format tata naskah dinas. Langkah Anda adalah ....",
      opsi: [
        { teks: "Mendistribusikan SK itu karena kesalahan ketik tidak memengaruhi pencairan.", bobot: 0, pembahasan: "Mendistribusikan dokumen yang salah mengabaikan tata naskah dinas." },
        { teks: "Memperbaiki dan mencetak ulang SK lalu memalsukan tanda tangan pimpinan.", bobot: 0, pembahasan: "Memalsukan tanda tangan adalah tindak pidana." },
        { teks: "Mengubah salinan digital agar tampak benar di arsip pusat, tetapi membiarkan salinan cetak.", bobot: 0, pembahasan: "Mengubah salinan digital saja menimbulkan data ganda yang tidak sama." },
        { teks: "Melaporkan kesalahan itu kepada pimpinan, menerima teguran, dan meminta tanda tangan ulang pada SK yang benar.", bobot: 5, pembahasan: "Jujur dan bertanggung jawab: kesalahan dilaporkan dan diperbaiki sesuai prosedur." },
        { teks: "Menyalahkan perangkat lunak yang mengubah format secara otomatis.", bobot: 0, pembahasan: "Menyalahkan perangkat lunak menghindari tanggung jawab." }
      ]
    },
    {
      soal: "Anda pimpinan instansi yang mendapat anggaran kendaraan dinas mewah, tetapi mengembalikan sebagian besar ke kas negara dan memakai kendaraan standar yang fungsional, meneladani Bung Hatta. Nilai integritas yang paling menonjol adalah ....",
      opsi: [
        { teks: "Disiplin", bobot: 0, pembahasan: "Disiplin berkaitan dengan ketaatan pada aturan dan waktu." },
        { teks: "Adil", bobot: 0, pembahasan: "Adil berkaitan dengan perlakuan setara." },
        { teks: "Sederhana", bobot: 5, pembahasan: "Sederhana berarti mengutamakan fungsi kebutuhan dan menghindari gaya hidup berlebihan." },
        { teks: "Berani", bobot: 0, pembahasan: "Berani berkaitan dengan menolak penyimpangan." },
        { teks: "Jujur", bobot: 0, pembahasan: "Jujur berkaitan dengan tidak memanipulasi data atau harga." }
      ]
    },
    {
      soal: "Rekan satu ruangan Anda sering salah administratif karena sedang menghadapi musibah keluarga, sehingga laporan tim terhambat. Langkah yang mencerminkan nilai peduli tanpa melanggar aturan adalah ....",
      opsi: [
        { teks: "Mengambil alih seluruh tugasnya diam-diam agar ia tidak ditegur.", bobot: 0, pembahasan: "Mengambil alih diam-diam menyembunyikan masalah dari pimpinan." },
        { teks: "Melaporkan kinerjanya kepada atasan agar ia diberi cuti.", bobot: 0, pembahasan: "Melaporkan tanpa membantu kurang peduli." },
        { teks: "Membantu mengoreksi tugasnya setelah pekerjaan Anda selesai dan memberi dukungan moril secara pribadi.", bobot: 5, pembahasan: "Peduli ditunjukkan dengan membantu di luar kewajiban sendiri tanpa melanggar aturan kerja." },
        { teks: "Menegurnya tegas di ruang rapat agar memisahkan urusan pribadi dari pekerjaan.", bobot: 0, pembahasan: "Menegur di depan umum mempermalukan." },
        { teks: "Membiarkannya menyelesaikan tugas sendiri agar belajar bertanggung jawab.", bobot: 0, pembahasan: "Membiarkan tidak menunjukkan kepedulian." }
      ]
    },
    {
      soal: "Instansi Anda merancang strategi antikorupsi jangka panjang yang berfokus pada perubahan pola pikir pegawai agar menolak gratifikasi atas dasar kesadaran nurani, bukan takut sanksi. Kebijakan yang selaras dengan sula pendidikan dalam strategi pemberantasan korupsi adalah ....",
      opsi: [
        { teks: "Memasang kamera pengawas di semua ruang pelayanan publik.", bobot: 0, pembahasan: "Kamera pengawas termasuk sula pencegahan." },
        { teks: "Mewajibkan pelaporan harta kekayaan secara berkala bagi seluruh jabatan.", bobot: 0, pembahasan: "Pelaporan harta kekayaan termasuk sula pencegahan." },
        { teks: "Membentuk satuan tugas internal untuk operasi tangkap tangan berkala.", bobot: 0, pembahasan: "Operasi tangkap tangan termasuk sula penindakan." },
        { teks: "Menyelenggarakan kampanye kejujuran dan latihan menghadapi dilema etis pada setiap diklat pegawai.", bobot: 5, pembahasan: "Sula pendidikan menanamkan nilai antikorupsi melalui kampanye dan pembelajaran." },
        { teks: "Mengalihkan seluruh pelayanan tatap muka ke aplikasi daring.", bobot: 0, pembahasan: "Layanan daring termasuk sula pencegahan." }
      ]
    },
    {
      soal: "Seorang senior menyarankan Anda menyalin utuh SOP dari instansi daerah lain agar cepat disetujui. Anda menolak dan menyusun SOP sendiri sesuai karakter instansi. Keputusan itu mencerminkan nilai integritas ....",
      opsi: [
        { teks: "tanggung jawab", bobot: 0, pembahasan: "Tanggung jawab berkaitan dengan menanggung akibat dan menuntaskan tugas." },
        { teks: "kerja keras", bobot: 0, pembahasan: "Kerja keras berkaitan dengan kesungguhan mencapai target." },
        { teks: "mandiri", bobot: 5, pembahasan: "Mandiri berarti berinisiatif, percaya diri, dan menjaga orisinalitas gagasan." },
        { teks: "berani", bobot: 0, pembahasan: "Berani berkaitan dengan menentang penyimpangan." },
        { teks: "jujur", bobot: 0, pembahasan: "Jujur berkaitan dengan tidak memalsukan atau menyembunyikan fakta." }
      ]
    },
    {
      soal: "Banyak rekan sejawat di divisi perizinan memamerkan barang bermerek dan kendaraan impor di media sosial. Alasan yang paling mendasar mengapa hidup sederhana termasuk nilai integritas adalah ....",
      opsi: [
        { teks: "Menjaga citra positif ASN di mata masyarakat yang ekonominya menengah ke bawah.", bobot: 0, pembahasan: "Citra positif adalah dampak, bukan alasan mendasar." },
        { teks: "Tuntutan gaya hidup mewah di atas pendapatan resmi menjadi pemicu utama penyalahgunaan wewenang dan korupsi.", bobot: 5, pembahasan: "Kesederhanaan mencegah kebutuhan hidup melampaui penghasilan yang menjadi pintu masuk korupsi." },
        { teks: "Memamerkan barang impor bertentangan dengan kebijakan penggunaan produk dalam negeri.", bobot: 0, pembahasan: "Kebijakan produk dalam negeri bukan dasar nilai sederhana." },
        { teks: "Gaya hidup mewah memicu kecemburuan sosial antarpegawai sehingga menghambat rotasi jabatan.", bobot: 0, pembahasan: "Kecemburuan sosial bukan alasan mendasar nilai sederhana." },
        { teks: "Menghindari pemantauan otoritas pemeriksa terhadap rekening pribadi pegawai.", bobot: 0, pembahasan: "Menghindari pemantauan bukan tujuan hidup sederhana." }
      ]
    },
    {
      soal: "Menjelang pilkada serentak, pimpinan instansi Anda memobilisasi ASN untuk memilih salah satu pasangan calon dengan iming-iming promosi jabatan. Keputusan berintegritas yang wajib Anda ambil adalah ....",
      opsi: [
        { teks: "Mengikuti instruksi pimpinan sebagai loyalitas asalkan janji promosi ditepati.", bobot: 0, pembahasan: "Mengikuti instruksi melanggar netralitas ASN." },
        { teks: "Mengabaikan instruksi secara diam-diam dan memilih sesuai hati nurani tanpa melapor.", bobot: 0, pembahasan: "Diam tanpa melapor tidak menindaklanjuti pelanggaran." },
        { teks: "Mendeklarasikan dukungan kepada kandidat lawan di media sosial sebagai perlawanan.", bobot: 0, pembahasan: "ASN dilarang menyatakan dukungan politik." },
        { teks: "Menolak tekanan itu dengan tegas dan melaporkan pelanggaran netralitas ASN kepada lembaga pengawas pemilu.", bobot: 5, pembahasan: "Integritas menuntut kejujuran dan keberanian menolak serta melaporkan pelanggaran netralitas ASN." },
        { teks: "Mengajak rekan melakukan aksi mogok kerja sampai instruksi dicabut.", bobot: 0, pembahasan: "Mogok kerja mengganggu pelayanan publik." }
      ]
    }
  ]
};
