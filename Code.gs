// Google Apps Script - penerima data Latihan TWK ke Google Sheets
// Urutan kolom (baris 1 = judul):
// A device_id | B nama | C no_peserta | D percobaan_ke | E durasi_waktu | F sisa_waktu | G total_skor | H waktu_selesai

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // antre bila banyak peserta selesai bersamaan
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Tanda petik di depan menjaga nilai tetap teks
    // (supaya "01:05:09" tidak diubah jadi jam, dan "001" tidak kehilangan nol)
    sh.appendRow([
      d.device_id,
      d.nama,
      "'" + d.no_peserta,
      d.percobaan_ke,
      "'" + d.durasi_waktu,
      "'" + d.sisa_waktu,
      d.total_skor,
      Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss")
    ]);
    return ContentService.createTextOutput("OK");
  } finally {
    lock.releaseLock();
  }
}
