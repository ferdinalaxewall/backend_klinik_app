# Klinik App Backend

## Keterangan Aplikasi

Klinik App Backend adalah aplikasi backend yang dibuat menggunakan NestJS dan menggunakan MySQL sebagai database. Aplikasi ini menyediakan API untuk mengelola data pegawai, pasien, poli, dan jadwal dokter di sebuah klinik.

## Kebutuhan yang Perlu di Install

Pastikan komputer Anda telah terinstall dengan:
- Node.js (versi terbaru)
- npm atau yarn
- MySQL (versi terbaru)
- Git

Anda juga perlu menginstall NestJS CLI secara global jika belum terinstall:
```bash
npm install -g @nestjs/cli
```

## Fitur-Fitur

Aplikasi ini memiliki fitur-fitur berikut:
- CRUD (Create, Read, Update, Delete) untuk entitas Poli
- CRUD untuk entitas Jadwal Dokter
- CRUD untuk entitas Pegawai
- CRUD untuk entitas Pasien

## Cara Menginstall Aplikasi

Ikuti langkah-langkah berikut untuk menginstall dan menjalankan aplikasi ini di komputer Anda:

1. Clone repository dari GitHub:
    ```bash
    git clone https://github.com/ferdinalaxewall/backend_klinik_app.git
    ```

2. Masuk ke direktori proyek:
    ```bash
    cd backend_klinik_app
    ```

3. Install dependensi menggunakan npm atau yarn:
    ```bash
    npm install
    # atau
    yarn install
    ```

4. Konfigurasi database MySQL:
    - Pastikan MySQL telah terinstall dan berjalan di komputer Anda.
    - Buat database baru untuk aplikasi ini, misalnya `klinik_db`.
    - Ubah file pada `src/app.module.ts` dan sesuaikan konfigurasi database di dalamnya:

    ```javascript
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'klinik_app',
    }),
    ```

5. Jalankan migrasi database:
    ```bash
    npm run typeorm migration:run
    # atau
    yarn typeorm migration:run
    ```

6. Jalankan aplikasi:
    ```bash
    npm run start
    # atau
    yarn start
    ```

7. Aplikasi akan berjalan di `http://localhost:3000`. Anda dapat mengakses endpoint API melalui URL tersebut.

## API Endpoints

### Poli
- GET `/poli` - Mengambil semua data poli
- GET `/poli/:id` - Mengambil data poli berdasarkan ID
- POST `/poli` - Menambahkan data poli baru
- PUT `/poli/:id` - Memperbarui data poli berdasarkan ID
- DELETE `/poli/:id` - Menghapus data poli berdasarkan ID

### Jadwal Dokter
- GET `/jadwal_dokter` - Mengambil semua data jadwal dokter
- GET `/jadwal_dokter/:id` - Mengambil data jadwal dokter berdasarkan ID
- POST `/jadwal_dokter` - Menambahkan data jadwal dokter baru
- PUT `/jadwal_dokter/:id` - Memperbarui data jadwal dokter berdasarkan ID
- DELETE `/jadwal_dokter/:id` - Menghapus data jadwal dokter berdasarkan ID

### Pegawai
- GET `/pegawai` - Mengambil semua data pegawai
- GET `/pegawai/:id` - Mengambil data pegawai berdasarkan ID
- POST `/pegawai` - Menambahkan data pegawai baru
- PUT `/pegawai/:id` - Memperbarui data pegawai berdasarkan ID
- DELETE `/pegawai/:id` - Menghapus data pegawai berdasarkan ID

### Pasien
- GET `/pasien` - Mengambil semua data pasien
- GET `/pasien/:id` - Mengambil data pasien berdasarkan ID
- POST `/pasien` - Menambahkan data pasien baru
- PUT `/pasien/:id` - Memperbarui data pasien berdasarkan ID
- DELETE `/pasien/:id` - Menghapus data pasien berdasarkan ID

---

Itulah keterangan lengkap tentang aplikasi Klinik App Backend beserta cara instalasi dan fitur-fitur yang disediakan.

Sesuaikan file ini sesuai dengan kebutuhan dan informasi spesifik dari proyek Anda.