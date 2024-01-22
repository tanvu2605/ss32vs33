class Information {
    constructor(id, name, phone, address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}


var id = prompt("Nhập ID:");
var name = prompt("Nhập tên:");
var phone = prompt("Nhập số điện thoại:");
var address = prompt("Nhập địa chỉ:");


var infoObject = new Information(id, name, phone, address);


console.log("Thông tin cá nhân:\nID: " + infoObject.id + "\nTên: " + infoObject.name + "\nSố điện thoại: " + infoObject.phone + "\nĐịa chỉ: " + infoObject.address);