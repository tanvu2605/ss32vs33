
    class Product {
        constructor(id, product_name, price) {
            this.id = id;
            this.product_name = product_name;
            this.price = price;
        }
    }
    var products = [
        new Product(1, "ProductA", 20.99),
        new Product(2, "ProductB", 15.99),
        new Product(3, "ProductC", 30.99),
    ];
    function sortByPriceAscending(products) {
        return products.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    var sortedProducts = sortByPriceAscending(products);
    console.log("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
    console.log(sortedProducts);