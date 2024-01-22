
var phoneBook = [
    {
        name: "Nguyen Van A",
        phoneNumber: "0123456789",
        email: "nguyenvana@example.com"
    },
    {
        name: "Tran Thi B",
        phoneNumber: "0987654321",
        email: "tranthib@example.com"
    },
];
console.log("Danh bạ điện thoại:");

for (var i = 0; i < phoneBook.length; i++) {
    var contact = phoneBook[i];
    console.log("\nLiên lạc " + (i + 1) + ":");
    console.log("Tên: " + contact.name);
    console.log("Số điện thoại: " + contact.phoneNumber);
    console.log("Email: " + contact.email);
}
