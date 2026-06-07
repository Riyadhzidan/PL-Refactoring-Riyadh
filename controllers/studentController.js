let students = [
    {
        id: 1,
        name: "Budi",
        major: "Informatika"
    }
];

let nextId = 2;

exports.getAllStudents = (req, res) => {
    res.render("index", { students });
};

exports.showAddForm = (req, res) => {
    res.render("add");
};

exports.addStudent = (req, res) => {
    // Code Smell 1: Poor Naming
    const studentName = req.body.name;
    const studentMajor = req.body.major;

    // Code Smell 2: Duplicate Validation
    if (studentName === "") {
        return res.send("Nama kosong");
    }

    if (studentMajor === "") {
        return res.send("Jurusan kosong");
    }

    // Code Smell 3: Long Method
    students.push({
        id: nextId++,
        name: studentName,
        major: studentMajor
    });

    res.redirect("/");
};

exports.showEditForm = (req, res) => {
    const student = students.find(
        s => s.id == req.params.id
    );

    res.render("edit", { student });
};

exports.updateStudent = (req, res) => {
    let student = students.find(
        s => s.id == req.params.id
    );

    if (student) {
        student.name = req.body.name;
        student.major = req.body.major;
    }

    res.redirect("/");
};

exports.deleteStudent = (req, res) => {
    students = students.filter(
        s => s.id != req.params.id
    );

    res.redirect("/");
};