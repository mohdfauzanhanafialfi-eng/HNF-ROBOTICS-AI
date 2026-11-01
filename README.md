# HNF ROBOTICS AI SOLUTIONS — project starter

## Isi
- `public/index.html`: antarmuka responsif dengan menu, katalog 6 konsep robot, galeri preview, dan AI chat.
- `server.js`: backend Express yang memanggil OpenAI Responses API.
- `.env.example`: contoh konfigurasi; jangan pernah mengunggah `.env` atau API key ke publik.
- `public/hnf-dashboard-preview.png`: gambar konsep antarmuka.

## Menjalankan di komputer
1. Pasang Node.js versi LTS.
2. Ekstrak folder proyek.
3. Jalankan `npm install`.
4. Salin `.env.example` menjadi `.env`.
5. Isi `OPENAI_API_KEY` pada `.env` di komputer/server pribadi.
6. Jalankan `npm start`.
7. Buka `http://localhost:3000`.

## Keamanan dan biaya
- API key hanya disimpan di server, bukan di HTML atau APK.
- Panggilan API dapat menimbulkan biaya sesuai penggunaan akun API.
- Tambahkan autentikasi pengguna, batas pemakaian, pemantauan biaya, HTTPS, dan kebijakan privasi sebelum dipublikasikan.
- Jangan mengirim data pribadi atau rahasia ke asisten.

## Status Android APK
Folder ini adalah starter aplikasi web + backend, belum berupa APK yang ditandatangani.
Untuk APK produksi perlu dibungkus dengan Android WebView/Capacitor, konfigurasi domain HTTPS untuk backend, ikon final HNF, lalu build dan signing Android pada lingkungan Android SDK.
Fitur kendali robot fisik tidak tersedia; kontrol apa pun pada demo harus dianggap simulasi sampai ada integrasi perangkat keras yang aman dan diuji.

## Dokumentasi API
OpenAI API overview: https://developers.openai.com/api/reference/overview
Quickstart: https://developers.openai.com/api/docs/quickstart
