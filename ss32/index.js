let person = {
    name: "Gia Thieu",
    age: "19",
    school: "PTIT",
    curly: "nhu phoc",
    eat:function(){
        console.log("an nhom nhoam...");
    },
    flirt: function(){
        console.log("chao em anh dung day tu chieu..");
    },
    nhinThayHuyen: function(){
        console.log("mat sang len 0.0!!!");
    },
    address: {
        number: 20,
        street: "tran phu",
        ward: "van quan",
        district: "ha dong",
        city: "ha noi",
        zipcode: 100000,
      },
    };
    
    console.log(person.address.zipcode);
// console.log("doi tuong person", person);
// person.height = 1.93;
// person.weight = "90kg";
// console.log("doi tuong person", person);
// console.log(`xin chao ${person.name} ban co nguyeu chua`);
// let man = {
//     name: "tan vu",
//     age: "19",
//     school: "PTIT",
//     hair: "curly",
// };
// function Student(name,age,grade){
// this.name = name;
// this.age = age;
// this.grade = grade;
// this.introduce = function (){
//     console.log(`hello,myname is ${this.name}`);
// };
// };
// let Student1 = new Student("KHANH DUONG",20, "good");
// let Student2 = new Student("MANH DUONG",23,"bad");
// let Student3 = new Student("KHAC HUNG",23,"average");

// console.log("student 1",Student1);
// console.log("student 1",Student2);
// console.log("student 1",Student3);

// Student1.introduce();
// Student2.introduce();
// Student3.introduce();
// class Student {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     introduce() {
//         console.log(`hello my name is ${this.name}. i'm ${this.age} year old`);
//     }
//     }
//     let student1 = new Student("KHANH DUONG", 20);
//     let student2 = new Student("MANH DUUONHG", 18);
//     let student3 = new Student("KHAC HUNG", 19);
   
//     student1.introduce();
//     student2.introduce();
//     student3.introduce();

class Student {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
}
const students = [
    new Student(1,"khanh huyen"),
    new Student(2,"huyen trang"),
    new Student(3,"chi ngoc"),
];
console.log("danh sach sinh vien", students);
console.log("name:",students[1].name);
// console.log("id:",students[1].id );

// for(let i = 0; i< students.length;i++){
//     console.log("students tai vi tri index $(i)");
//     console.log(`id`,students[i].id);
//     console.log(`name:`, students[i].name);
// }

// let newStudents = new Student(",");

// newStudents.id = +prompt("moi ban nhap vao id cho students moi");
// newStudents.name = prompt(`moi ban nhap ten cho student moi`);
// console.log(students);

// students[0].name = "huyen khanh";


