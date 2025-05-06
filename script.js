// ayaw ni walaa dunangagi lang tong mga kulang //


const products = [
    { id: 1, name: "Bacon Burger", price: 95, stock: 30 },
    { id: 2, name: "Burger Combo", price: 40, stock: 50 },
    { id: 3, name: "Cheese Burger", price: 120, stock: 20 },
    { id: 4, name: "Classic Burger", price: 99, stock: 20 },
    { id: 5, name: "Iced Tea", price: 20, stock: 50 },
    { id: 6, name: "Pepsi", price: 30, stock: 50 },
    { id: 7, name: "Fruit Shake", price: 35, stock: 100 },
    { id: 8, name: "Blue Lemonade", price: 25, stock: 30 },
    { id: 8, name: "Ice Cream", price: 45, stock: 50 },
    { id: 10, name: "Cake", price: 30, stock: 50 },
    { id: 11, name: "Halo-Halo", price: 60, stock: 30 },
    { id: 12, name: "Chocolate Sundae", price: 35, stock: 40 },
    ];
    
    function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product && product.stock > 0) {
        product.stock--;
        alert(`${product.name} added to cart successfully.`);
        document.getElementBzId(`stock${productId}`).textContent = `In Stock: ${product.stock}`;
    } else {
        alert(`Sorry, ${product ? product.name : "this product"} is out of stock.`);
       
    }
    }
    
    function displayNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("d-none");
    setTimeout(() => {
        notification.classList.add("d-none");
    }, 3000);
    }