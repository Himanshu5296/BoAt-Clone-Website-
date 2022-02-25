var data = JSON.parse(localStorage.getItem("productDetails"));
console.log(data);

var cartArr=JSON.parse(localStorage.getItem("cartitem"))||[];
data.map(function (elem, index, array) {
var div = document.createElement("div");

var div5 = document.createElement("div");
div.setAttribute("class","main");
var div1 = document.createElement("div");
div1.setAttribute("class","doc")


var div6 = document.createElement("div");
div6.setAttribute("class","offers");



var image = document.createElement("img");
image.setAttribute("src", elem.img);
image.setAttribute("class","image")

var div2 = document.createElement("div");
div2.setAttribute("class","product_info")

// var div8 = document.createElement("div");
// var rating = document.createElement("h5");
// rating.setAttribute("class","srate")
// rating.setAttribute = elem.stars;

var name = document.createElement("h4");
name.innerText=elem.name;

var div4 = document.createElement("div");
div4.setAttribute("class","prices")

var price_tag = document.createElement("h4");
price_tag.setAttribute("class","pTag")
price_tag.innerText = elem.price_tag;

var sprice = document.createElement("strike");
sprice.setAttribute("class", "strike")
sprice.innerText = elem.stprice;

var price = document.createElement("h4");
price.setAttribute("class", "prce");
price.innerText = elem.price;

var div3 = document.createElement("div");
var cart = document.createElement("button");
cart.setAttribute("class", "button")
cart.innerText= "Add to Cart";
cart.addEventListener("click",function(){
    elem.qty=1;
    cartArr.push(elem);
    console.log(cartArr)
    localStorage.setItem("cartitem",JSON.stringify(cartArr));
})
div3.append(cart)

// div8.append(srate);
div4.append(price_tag,price,sprice);
div2.append(name,div4,div3)
div5.append(div2)
div1.append(image,div5);

div.append(div1)
document.querySelector("#container").append(div);
});