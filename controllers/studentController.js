let students = [
    {
        id: 1,
        name: "Budi",
        major: "Informatika"
    }
];

let nextId = 2;

function validateStudent(name, major) {
    return name && major;
}

function findStudentById(id) {
    return students.find(
        student => student.id == id
    );
}

// Menampilkan seluruh mahasiswa
exports.getAllStudents = (req, res) => {
    res.render("index", { students });
};

// Menampilkan form tambah mahasiswa
exports.showAddForm = (req, res) => {
    res.render("add");
};

// Menambahkan mahasiswa baru
exports.addStudent = (req, res) => {
    // Code Smell 1: Poor Naming
    const studentName = req.body.name;
    const studentMajor = req.body.major;

    // Code Smell 2: Duplicate Validation
    if (!validateStudent(studentName, studentMajor)) {
        return res.send("Data tidak valid");
    }

    // Code Smell 3: Long Method
    students.push({
        id: nextId++,
        name: studentName,
        major: studentMajor
    });

    res.redirect("/");
};

// Menampilkan form edit mahasiswa
exports.showEditForm = (req, res) => {

    const student = findStudentById(
        req.params.id
    );

    res.render("edit", { student });
};

// Mengubah data mahasiswa
exports.updateStudent = (req, res) => {

    const student = findStudentById(
        req.params.id
    );

    if (student) {
        student.name = req.body.name;
        student.major = req.body.major;
    }

    res.redirect("/");
};

// Menghapus mahasiswa
exports.deleteStudent = (req, res) => {
    students = students.filter(
        s => s.id != req.params.id
    );

    res.redirect("/");
};