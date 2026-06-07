# PL-Refactoring-Riyadh

## Deskripsi

Aplikasi CRUD Mahasiswa menggunakan Node.js, Express, dan EJS.

---

## Fitur

- Tambah Mahasiswa
- Edit Mahasiswa
- Hapus Mahasiswa
- Lihat Daftar Mahasiswa

---

## Coding Standards

- camelCase
- const untuk data yang tidak berubah
- Indentasi konsisten
- Meaningful Variable Names

---

## Code Smells yang Ditemukan

### 1. Poor Naming

Sebelum:

```javascript
let n = req.body.name;
let m = req.body.major;
```

Sesudah:

```javascript
const studentName = req.body.name;
const studentMajor = req.body.major;
```

### 2. Long Method

Refactoring menggunakan Extract Method:

```javascript
function validateStudent(name, major) {
    return name && major;
}
```

### 3. Duplicate Code

Refactoring menggunakan helper:

```javascript
function findStudentById(id) {
    return students.find(
        student => student.id == id
    );
}
```

---

## Refactoring yang Dilakukan

1. Rename Variable
2. Extract Method
3. Remove Duplicate Code
4. Improve Readability

---

## Menjalankan Program

Install dependency:

```bash
npm install
```

Jalankan:

```bash
npm start
```

Buka browser:

```text
http://localhost:3000
```