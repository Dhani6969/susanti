# 💗 Birthday Website — Cara Pakai

## 1. Ganti isi folder `assets/`
Masukkan file kamu sendiri dengan nama persis seperti ini (atau ubah nama filenya di `script.js` bagian `birthdayConfig`):

- `foto1.jpg` s/d `foto5.jpg` — foto kenangan
- `video-ultah.mp4` — video pribadi
- `music.mp3` — lagu latar

## 2. Edit `birthdayConfig` di `script.js`
Semua yang perlu diganti ada di paling atas file `script.js`:

- `namaPacar`, `namaPengirim`
- `tanggalUlangTahun` (format `YYYY-MM-DDTHH:MM:SS`)
- `heroSubtitle`
- `foto` (path + caption tiap foto)
- `video`, `music`
- `suratUlangTahun`, `suratPenutup` (isi surat)
- `kenangan` (timeline momen)
- `randomMessages` (pesan random saat tombol "kangen" diklik)
- `surpriseCards` (isi 5 kartu kejutan)

## 3. Buka `index.html`
Tinggal double-click `index.html`, langsung jalan di browser — tidak perlu server atau instalasi apa pun.

## Catatan
- Musik tidak akan autoplay dengan suara jika browser memblokirnya — tinggal tekan tombol 🎵 di pojok kanan bawah.
- Semua foto yang belum diganti akan menampilkan ikon 📷 sebagai placeholder, jadi tidak akan error walau file belum ada.
- Website sudah responsive dan diprioritaskan untuk tampilan HP, tapi tetap bagus dibuka di laptop.
