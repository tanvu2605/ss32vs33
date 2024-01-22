
    class Product {
        constructor(id, name, price, quantity) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
        displayInfo() {
            console.log("ID: " + this.id);
            console.log("Tên: " + this.name);
            console.log("Giá: " + this.price);
            console.log("Số lượng: " + this.quantity);
        }
    }
    var productObject = new Product("P001", "Sản phẩm 1", 50.99, 100);
    productObject.displayInfo();