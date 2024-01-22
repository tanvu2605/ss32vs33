
var phoneBook = [
    {
        name: "Nguyen Van A",
        phoneNumber: "0123456789",
        email: "nguyenvana@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
    {
        name: "Tran Thi B",
        phoneNumber: "0987654321",
        email: "tranthib@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
    
];


console.log("Danh bạ điện thoại - Đầy đủ thông tin:");

for (var i = 0; i < phoneBook.length; i++) {
    var contact = phoneBook[i];
    console.log("\nLiên lạc " + (i + 1) + ":");
    contact.displayFullInfo();
}
