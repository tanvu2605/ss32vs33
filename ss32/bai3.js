
    class Student {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    var numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        alert("Số lượng sinh viên không hợp lệ.");
    } else {
        var studentsArray = [];
        for (var i = 1; i <= numberOfStudents; i++) {
            var studentId = prompt("Nhập ID của sinh viên thứ " + i + ":");
            var studentName = prompt("Nhập tên của sinh viên thứ " + i + ":")
            var studentObject = new Student(studentId, studentName);
            studentsArray.push(studentObject);
        }
        console.log("Danh sách sinh viên:");
        console.log(studentsArray);
    }
