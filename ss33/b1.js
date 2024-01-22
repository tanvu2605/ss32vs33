
var person = {
    name: "tanvu",
    age: 30,
    address: "123 tran phu"
};
console.log("Thông tin ban đầu:");
console.log(person);
person.birthdate = "1990-01-01";
console.log("\nSau khi thêm thuộc tính ngày sinh:");
console.log(person);
delete person.age;
console.log("\nSau khi xóa thuộc tính tuổi:");
console.log(person);
