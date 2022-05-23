function append(){
    let products =JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("all_products");
    container.innerHTML = null;

    products.forEach(function(el,index){
        let div = document.createElement("div")

        let type = document.createElement('h1')
        type.innerText = el.type;
        type.style.textAlign="center"
        type.setAttribute("class","type1")

        let Description = document.createElement('h3')
        Description.innerText = el.desc;
        Description.style.textAlign="center"
        Description.setAttribute("class","text2")

        let Price = document.createElement('h5')
        Price.innerText = el.price;
        Price.style.textAlign="center"
        Price.setAttribute("class","text")

        let Image =document.createElement('img')
        Image.src= el.image;
        Image.setAttribute("id","image")

        let btn = document.createElement('button')
        btn.innerText="Remove Product"
       // btn.style.marginLeft="37%"
        btn.setAttribute("id","Remove_button")
        btn.addEventListener("click",function(){
             remove(index)
        })
        div.append(Image,type,Description,Price,btn)
        container.append(div)
    })
}
append()
function remove(index){
    let products =JSON.parse(localStorage.getItem("products")) || [];
    products.filter(function(el,i){
        console.log(products)
    })
}