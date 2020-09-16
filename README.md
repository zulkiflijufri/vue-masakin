# Masakin

## Cara pakainya gimana?
1. Clone project
```
git clone https://github.com/zulkiflijufri/vue-kuliner.git
```
2. Masuk ke dalam project dan install dependencies
```
npm install
```
3. Jalankan
```
npm run serve
```

Mungkin setelah dijalankan dan membuka ``http://localhost:8080/`` akan menampilkan pesan, ya ``Server local off, please actived your server.`` Tenang saja, itu hanya pesan biasa. Aplikasi ini menggunakan ``dummy API`` dari [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Oleh karena itu alangkah baiknya untuk menginstall ``json server`` agar API kita dapat dijalankan di localhost. Caranya sangat mudah, cukup jalankan perintah:
```
npm install -g json-server
```
Jalankan ``json-server``
```
json-server --watch db.json
```

Ohiya, perintah diatas akan mengeksekusi file ``db.json``, anda dapat melihat didalam folder ``/backend``, anda juga dapat memodifikasi sesuai dengan kebutuhan anda. Mengenai ``dummy API``, dapat anda kunjungi [JSON Server](https://github.com/typicode/json-server).

Jika anda kesulitan memahami code dalam project ini, anda dapat melihat penjelasan lebih detail di [Wahidev Academy](https://www.youtube.com/watch?v=XoDGI5JaPvw&list=PLIan8aHxsPj3a7oLHb2a8pw8IHBq45WYu)

Oke Guys. Keep Learning   :rocket:
