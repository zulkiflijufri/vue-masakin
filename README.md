# Masakin

## Cara pakainya gimana?
1. Clone project
```
git clone https://github.com/zulkiflijufri/vue-masakin.git
```
2. Masuk ke dalam project dan install dependencies
```
npm install
```
3. Jalankan
```
npm run serve
```

Mungkin setelah dijalankan dan membuka ``http://localhost:8080/`` akan menampilkan pesan:

> Server local off, please actived your server.

Tenang saja, itu hanya pesan biasa. Aplikasi ini menggunakan ``dummy API`` dari [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Ohiya file json project ini, dapat anda temukan didalam folder ``/backend``. Untuk menjalankan file json tersebut, alangkah baiknya untuk menginstall ``json server`` agar API kita dapat berjalan dengan lancar. Caranya cukup mudah:
1. Install json-server
```
npm install -g json-server
```
2. Masuk ke folder ``/backend`` untuk menjalankan file ``db.json``
```
json-server --watch db.json
```

Jika anda kesulitan memahami code dalam project ini, anda dapat melihat penjelasan lebih detail di [Wahidev Academy](https://www.youtube.com/watch?v=XoDGI5JaPvw&list=PLIan8aHxsPj3a7oLHb2a8pw8IHBq45WYu)

Oke Guys. Keep Learning   :rocket:
