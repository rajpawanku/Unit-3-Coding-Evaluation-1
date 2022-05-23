function append(){
    let products =JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("all_products");
    container.innerHTML = null;

    products.forEach(function(el,index){
        let div = document.createElement("div")

        let type = document.createElement('h1')
        type.innerText = el.type;
        type.style.textAlign="center"

        let Description = document.createElement('h3')
        Description.innerText = el.desc;
        Description.style.textAlign="center"
    
        let Price = document.createElement('h5')
        Price.innerText = el.price;
        Price.style.textAlign="center"
        Price.style.fontSize="20px"

        let Image =document.createElement('img')
        Image.src= el.image;
        Image.setAttribute("id","image")

        let btn = document.createElement('button')
        btn.innerText="Remove Product"
       // btn.style.marginLeft="37%"
        btn.setAttribute("id","Remove_button")
        btn.addEventListener("click",function(){
             remove(elem,i)
        })
        div.append(Image,type,Description,Price,btn)
        container.append(div)
    })
}
append()
function remove(elem,i){
    console.log(i)
    products.splice(i,1)
    localStorage.setItem("products",JSON.stringify(products))
    // let products =JSON.parse(localStorage.getItem("products")) || [];
    // products.filter(function(el,i){
    //    // console.log(products)
    // })
   // localStorage.removeItem("products")
}