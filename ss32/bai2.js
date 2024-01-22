class Information {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
    displayInfo() {
        console.log("Thông tin cá nhân:\nID: " + this.id + "\nTên: " + this.name + "\nSố điện thoại: " + this.phone);
    }
}
var id = prompt("Nhập ID:");
var name = prompt("Nhập tên:");
var phone = prompt("Nhập số điện thoại:");

var infoObject = new Information(id, name, phone);
infoObject.email = prompt("Nhập email:");
infoObject.displayInfo();
console.log("Email: " + infoObject.email);