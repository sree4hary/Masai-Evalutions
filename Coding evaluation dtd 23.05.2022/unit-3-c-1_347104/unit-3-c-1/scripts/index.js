//store the products array in localstorage as "products"
let x = document.querySelector("#add_product").addEventListener("click", addProduct);
// x.preventDefault();
function addProduct() {
 var type = document.getElementById("type").value;
 var desc = document.getElementById("desc").value;
 var price = document.getElementById("price").value;
 var image = document.getElementById("image").value;
var prod1 = new product(type, desc, price, image);
console.log(prod1);
}

var product = function(a, b, c, d) {
    this.desc = a;
    this.type = b;
    this.price = c;
    this.image = d;
}