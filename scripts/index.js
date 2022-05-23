//store the products array in localstorage as "products"
function Puma(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;

}
function storedata(e){
event.preventDefault()

let form = document.getElementById("products");

let type = form.type.value;
let desc = form.desc.value;
let price = form.price.value;
let image = form.image.value;

let pawan = new Puma(type,desc,price,image)
let products =JSON.parse(localStorage.getItem("products")) || [];
products.push(pawan)

localStorage.setItem("products",JSON.stringify(products))
console.log(pawan)
}