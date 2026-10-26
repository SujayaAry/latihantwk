// Mengimpor fungsi Firebase langsung melalui CDN
// PENTING: ketiga import harus memakai versi SDK yang SAMA (jangan dicampur).
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// =====================================================================
// 1. KONFIGURASI FIREBASE
// =====================================================================
const firebaseConfig = {
  apiKey: "ISI_DARI_FIREBASE_CONSOLE",
  authDomain: "ISI_DARI_FIREBASE_CONSOLE",
  projectId: "ISI_DARI_FIREBASE_CONSOLE",
  storageBucket: "ISI_DARI_FIREBASE_CONSOLE",
  messagingSenderId: "ISI_DARI_FIREBASE_CONSOLE",
  appId: "ISI_DARI_FIREBASE_CONSOLE",
  measurementId: "ISI_DARI_FIREBASE_CONSOLE" // boleh dihapus jika Analytics tidak diaktifkan
};

// Koleksi khusus Latihan TWK
const NAMA_KOLEKSI = "hasil_latihan_twk";

// Opsional: isi dengan URL Web App Google Apps Script untuk pengiriman ganda ke Google Sheets.
// Kosongkan ("") jika tidak dipakai.
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwXjwMqWZvsFYAg0hNiLL8d3kkDl3nwpza5Op5h5hTd4TwZ-SJHoC1uwWjIt2RWyLw8/exec"; // isi dengan URL Web App Apps Script yang BARU (berakhiran /exec)

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) { /* Analytics tidak wajib */ }
const db = getFirestore(app);

// =====================================================================
// 2. DEVICE ID & HITUNGAN PERCOBAAN (disimpan di perangkat peserta)
// =====================================================================
function getDeviceID() {
  let did = localStorage.getItem("jlc_device_id");
  if (!did) {
    did = "JLC-DEV-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString(36).toUpperCase();
    localStorage.setItem("jlc_device_id", did);
  }
  return did;
}

// Percobaan ke-berapa untuk perangkat ini. Dihitung lokal supaya aturan Firestore
// cukup mengizinkan "create" saja (tanpa membuka akses baca data peserta lain).
function ambilPercobaanKe() {
  const kunci = "jlc_twk_percobaan";
  let n = parseInt(localStorage.getItem(kunci), 10);
  n = (isNaN(n) || n < 0 ? 0 : n) + 1;
  localStorage.setItem(kunci, String(n));
  return n;
}

// =====================================================================
// 3. PENGIRIMAN DATA HASIL LATIHAN
//    hasil = { nama, no_peserta, durasi_waktu, sisa_waktu, total_skor }
// =====================================================================
window.simpanKeDatabaseBackground = async function (hasil) {
  try {
    const data = {
      device_id: getDeviceID(),
      nama: String(hasil.nama || ""),
      no_peserta: String(hasil.no_peserta || ""),
      percobaan_ke: ambilPercobaanKe(),
      durasi_waktu: String(hasil.durasi_waktu || ""),
      sisa_waktu: String(hasil.sisa_waktu || ""),
      total_skor: Number(hasil.total_skor) || 0
    };

    // TAHAP A: Google Sheets (dikirim lebih dulu dan berdiri sendiri,
    // jadi tetap masuk walau Firebase gagal)
    if (GOOGLE_SHEETS_URL) {
      try {
        fetch(GOOGLE_SHEETS_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(data) })
          .then(() => console.log("Sinyal pengiriman ke Google Sheets telah diluncurkan."))
          .catch(err => console.error("Gagal mengirim ke Sheets:", err));
      } catch (err) { console.error("Gagal mengirim ke Sheets:", err); }
    }

    // TAHAP B: Firebase
    try {
      await addDoc(collection(db, NAMA_KOLEKSI), { ...data, waktu_selesai: serverTimestamp() });
      console.log("Data berhasil masuk Firebase! Percobaan ke-" + data.percobaan_ke);
    } catch (err) {
      console.error("Gagal menyimpan ke Firebase (cek Firestore Rules):", err);
    }
  } catch (e) {
    console.error("Gagal menyimpan data: ", e);
  }
};
