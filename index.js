function mycart(){
    window.location.href="cart.html"
  }
  function login(){
      window.location.href="login.html"
  }
function dealitem(){
    window.location.href="dailydeal.html"
}


var itemhead =1;
    function prevheader(){
        if(itemhead==1){
            itemhead=4;
        }else{
            itemhead--;
        }
        showItemheader()
    }
    function nextheader(){
        if(itemhead==4){
            itemhead=1;
        }else{
            itemhead++;
        }
        showItemheader()
    }
    function showItemheader(){
        var itemshead= document.querySelectorAll("#items>div");
        for(var i=0;i<itemshead.length;i++){
            if(i+1==itemhead){
                itemshead[i].style.display="block";
            }else{
                itemshead[i].style.display="none";
            }
        }
    }
    showItemheader()

var cart=JSON.parse(localStorage.getItem("cartitem"))||[];

    var bestsellerproduct=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1642405569",
        name: "boAt Airdropes 131",
        price:1299,
        stprice:"2990",
        spec1:"Lightweight for portability",
        spec2:"Uninterrupted listenning for 3 hours ",
        spec3:"Truly wireless at a truly awesome price"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "boAt Rockerrz 333",
        price:1499,
        stprice:"3990",
        spec1:"Colour variants for every style",
        spec2:"Fast Charging in just 15 minutes",
        spec3:"Ace your workouts with IPX5 rating"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
        name: "boAt Watch Mercury",
        price:2499,
        stprice:"6999",
        spec1:"154 inch display",
        spec2:"Temprature monitaing",
        spec3:"100+ cloud watch faces"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_6b720b9d-47f9-45d4-92b4-575058fb993b_300x.png?v=1626875709",
        name: "boAt Airpod 141",
        price:1399,
        stprice:"4490",
        spec1:"Color Variant for everystyle",
        spec2:"Fast Charging in just 15 minutes",
        spec3:"Ace your workouts with IPX5 rating"
    }
]


 bestsellerproduct.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
     el.qty=1;
     cart.push(el);
     localStorage.setItem("cartitem",JSON.stringify(cart));
    })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".imgbox").append(bestsellerdiv);
})


    var item =1;
    function prev(){
        var items= document.querySelectorAll(".imgbox>div");
        if(item==1){
            item=items.length;
        }else{
            item--;
        }
        showItem()
    }
    function next(){
        var items= document.querySelectorAll(".imgbox>div");
        if(item==items.length){
            item=1;
        }else{
            item++;
        }
        showItem()
    }
    function showItem(){
        var items= document.querySelectorAll(".imgbox>div");
        for(var i=0;i<items.length;i++){
            if(i+1==item){
                items[i].style.display="none";
            }else{
                items[i].style.display="block";
            }
        }
    }
    showItem();


    var boatxburn=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_7aa8c6c2-054b-42d5-a701-1e0ac33549c1_300x.png?v=1645014290",
        name: "Airdropes 441 Sunburn Edition",
        price:2999,
        stprice:"5999",
        spec1:"20 hours nonstop playback",
        spec2:"IPX7 sweat and water resistance",
        spec3:"500mAh charging case"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_477b0686-02b2-4289-9e53-d663dfb08e37_300x.png?v=1645016541",
        name: "boAt Rockerz 550 Sunburn Edition",
        price:1999,
        stprice:"4999",
        spec1:"Nonstop 20 hours playback",
        spec2:"50 mm dynamic driver",
        spec3:"500mAh battery"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_300x.png?v=1645083010",
        name: "boAt Bashheads 172 Sunburn Edition ",
        price:549,
        stprice:"1299",
        spec1:"10mm dynamic driver",
        spec2:"Baided cable",
        spec3:"integratd control"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_3359e1b6-e859-4856-a01f-94fa78a5777e_300x.png?v=1645082189",
        name: "boAt Stone 1200F Sunburb Edition",
        price:3999,
        stprice:"5999",
        spec1:"Up to 9 hour audio playback",
        spec2:"14W boAt signature sound",
        spec3:"IPX7 water resistance"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_f295a600-2857-4ff8-940c-3873fc2f1367_300x.png?v=1645015211",
        name: "boAt BassHeads 152 Sunburn Edition",
        price:549,
        stprice:"1299",
        spec1:"HD signature sound",
        spec2:"agnle jack",
        spec3:"handsfree communication"
    },{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f42fc2b0-06e8-4b30-b570-b88583c504a1_300x.png?v=1645083199",
        name: "boAt Airdropes 381 Sunburn Edition ",
        price:2499,
        stprice:"4990",
        spec1:"20 hours playbacks",
        spec2:"IPX7 water resistance",
        spec3:"500mAh long lasting battery"
    }
]

boatxburn.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
        el.qty=1;
        cart.push(el);
        localStorage.setItem("cartitem",JSON.stringify(cart));
       })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".burnimgbox").append(bestsellerdiv);
})
    var items1=document.querySelectorAll(".burnimgbox>div");
    for(var i=0;i<items1.length;i++){
        if(i<3){
            items1[i].style.display="block";
        }
    }

    function prev1(){
        var items1= document.querySelectorAll(".burnimgbox>div");
        for(var i=0;i<items1.length;i++){
            if(i<3){
                items1[i].style.display="block";
            }else{
                items1[i].style.display="none";
            }
        }
    }
    function next1(){
        var items1= document.querySelectorAll(".burnimgbox>div");
        for(var i=0;i<items1.length;i++){
              if(i>=3){
              items1[i].style.display="block";
              }else{
            items1[i].style.display="none";
            }
    }
    }
   

    var boatjust=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_affc1a7f-f714-4952-9c58-3de269539350_300x.png?v=1645099233",
        name: "boAt avante Bar 1750",
        price:11990,
        stprice:"15999",
        spec1:"5 hours nonstop playback",
        spec2:"Colour varint for every style",
        spec3:"Fast charging "
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_300x.png?v=1644301638",
        name: "boAt Nirvanaa 751 ANC",
        price:3999,
        stprice:"7999",
        spec1:" 150 hours standby",
        spec2:"IPX5 water resistance",
        spec3:"Fast charging"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_300x.png?v=1643619646",
        name: "boAt Bashheads 952v2 ",
        price:899,
        stprice:"1599",
        spec1:"10mm dynamic driver",
        spec2:"Baided cable",
        spec3:"integratd control"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_300x.png?v=1643632678",
        name: "boAt Immortal 400",
        price:1999,
        stprice:"2999",
        spec1:"Up to 9 hour audio playback",
        spec2:"Fast charging in just 15 min",
        spec3:"IPX5 water resistance"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_300x.png?v=1643477993",
        name: "boAt Immortal 400",
        price:2499,
        stprice:"6299",
        spec1:"Color vatient for every style",
        spec2:"Fast charging in just 15 min",
        spec3:"IPX5 water resistance"
    },{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_099e5dad-39c3-4ef5-8fc2-6d9b5ca8bb91_300x.png?v=1642569325",
        name: "boAt Watch Matrix ",
        price:3999,
        stprice:"11990",
        spec1:"16.5 inch AMOLED design",
        spec2:"Smart activity tracker",
        spec3:"build to last longer"
    }
]

boatjust.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
        el.qty=1;
        cart.push(el);
        localStorage.setItem("cartitem",JSON.stringify(cart));
       })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".justimgbox").append(bestsellerdiv);
})

var items2=document.querySelectorAll(".justimgbox>div");
    for(var i=0;i<items2.length;i++){
        if(i<3){
            items2[i].style.display="block";
        }
    }

    function prev2(){
        var items2= document.querySelectorAll(".justimgbox>div");
        for(var i=0;i<items2.length;i++){
            if(i<3){
                items2[i].style.display="block";
            }else{
                items2[i].style.display="none";
            }
        }
    }
    function next2(){
        var items2= document.querySelectorAll(".justimgbox>div");
        for(var i=0;i<items2.length;i++){
              if(i>=3){
              items2[i].style.display="block";
              }else{
            items2[i].style.display="none";
            }
    }
    }


    var boatwatch=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
        name: "boAt Watch Mercury",
        price:2499,
        stprice:"5999",
        spec1:"154 inch display",
        spec2:"Temperature monitoring",
        spec3:"100+ cloud watch faces"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_300x.png?v=1645164257",
        name: "boAt Watch Xtend",
        price:2999,
        stprice:"4999",
        spec1:"Color varient for every style",
        spec2:"IPX5 water resistance",
        spec3:"Fast charging"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_300x.png?v=1625045106",
        name: "boAt Storm ",
        price:2899,
        stprice:"4599",
        spec1:"Track and tranform your health",
        spec2:"Full touch display",
        spec3:"Track your spO2 level"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_295a504a-2ae2-4719-9400-263f453efddd_300x.png?v=1635140773",
        name: "boAt Watch Vertex",
        price:2999,
        stprice:"6999",
        spec1:"Color varient for every style",
        spec2:"Fast charging in just 15 min",
        spec3:"IPX5 water resistance"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Black_2_300x.png?v=1639486284",
        name: "boAt Watch  Mystiq",
        price:3499,
        stprice:"6299",
        spec1:"Color vatient for every style",
        spec2:"Multisport medium",
        spec3:"IPX7 water resistance"
    },{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_300x.png?v=1625045743",
        name: "boAt Watch Flash ",
        price:2999,
        stprice:"11990",
        spec1:"16.5 inch AMOLED design",
        spec2:"Smart activity tracker",
        spec3:"Track and tranform your health"
    }
]
boatwatch.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
        el.qty=1;
        cart.push(el);
        localStorage.setItem("cartitem",JSON.stringify(cart));
       })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".watchimgbox").append(bestsellerdiv);
})

var items3=document.querySelectorAll(".watchimgbox>div");
    for(var i=0;i<items3.length;i++){
        if(i<3){
            items3[i].style.display="block";
        }
    }

    function prev3(){
        var items3= document.querySelectorAll(".watchimgbox>div");
        for(var i=0;i<items3.length;i++){
            if(i<3){
                items3[i].style.display="block";
            }else{
                items3[i].style.display="none";
            }
        }
    }
    function next3(){
        var items3= document.querySelectorAll(".watchimgbox>div");
        for(var i=0;i<items3.length;i++){
              if(i>=3){
              items3[i].style.display="block";
              }else{
            items3[i].style.display="none";
            }
    }
    }


    var boatwireless=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_300x.png?v=1625552657",
        name: "boAt rockerz 255 Pro+",
        price:1499,
        stprice:"3999",
        spec1:"40H non stop playback",
        spec2:"Sweat and Water resistance",
        spec3:"CVC noise cancellation"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_300x.png?v=1625045744",
        name: "boAt rockerz 450",
        price:1499,
        stprice:"2999",
        spec1:"Color varient for every style",
        spec2:"IPX5 water resistance",
        spec3:"Fast charging"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_300x.png?v=1625046105",
        name: "boAt rockerz 235 v2",
        price:1199,
        stprice:"4599",
        spec1:"8 hr non stop music",
        spec2:"Sweat and Water resistance",
        spec3:"Fast charging"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_300x.png?v=1627276362",
        name: "boAt rockerz 245 v2",
        price:999,
        stprice:"2999",
        spec1:"Color varient for every style",
        spec2:"Fast charging in just 15 min",
        spec3:"IPX5 water resistance"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_300x.png?v=1625046144",
        name: "boAt rockerz 550",
        price:1999,
        stprice:"4299",
        spec1:"Play back 20 Hr",
        spec2:"Design for Music lover",
        spec3:"IPX7 water resistance"
    },{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688",
        name: "boAt rockerz 330",
        price:1499,
        stprice:"3990",
        spec1:"Color varient for every style",
        spec2:"Fast charging",
        spec3:"IPX5 water resistance"
    }
]
boatwireless.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
        el.qty=1;
        cart.push(el);
        localStorage.setItem("cartitem",JSON.stringify(cart));
       })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".lessimgbox").append(bestsellerdiv);
})

var items4=document.querySelectorAll(".lessimgbox>div");
    for(var i=0;i<items4.length;i++){
        if(i<3){
            items4[i].style.display="block";
        }
    }

    function prev4(){
        var items4= document.querySelectorAll(".lessimgbox>div");
        for(var i=0;i<items4.length;i++){
            if(i<3){
                items4[i].style.display="block";
            }else{
                items4[i].style.display="none";
            }
        }
    }
    function next4(){
        var items4= document.querySelectorAll(".lessimgbox>div");
        for(var i=0;i<items4.length;i++){
              if(i>=3){
              items4[i].style.display="block";
              }else{
            items4[i].style.display="none";
            }
    }
    }


    var boatwired=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1625046259",
        name: "boAt BassHeads 100",
        price:399,
        stprice:"999",
        spec1:"With Diffent colors",
        spec2:"Sweat and Water resistance",
        spec3:"CVC noise cancellation"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_300x.png?v=1574927262",
        name: "boAt BassHeads 103",
        price:379,
        stprice:"999",
        spec1:"Color varient for every style",
        spec2:"IPX5 water resistance",
        spec3:"Taagle free"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8ec58553-3255-48ec-929e-4838215b640c_300x.png?v=1625046271",
        name: "boAt BassHeads 900",
        price:799,
        stprice:"1599",
        spec1:"Dynanic sound",
        spec2:"Extra bass",
        spec3:"Compact and foldable"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_300x.png?v=1625046386",
        name: "boAt BassHeads 242",
        price:599,
        stprice:"999",
        spec1:"Color varient for every style",
        spec2:"Besr=t in earbuds",
        spec3:"long lasting cable"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main15_300x.png?v=1623832759",
        name: "boAt BassHeads 105",
        price:399,
        stprice:"1299",
        spec1:"Immpressive audio",
        spec2:"Design for Music lover",
        spec3:"Tangle free"
    },{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_300x.png?v=1645083010",
        name: "boAt BassHeads 576",
        price:499,
        stprice:"990",
        spec1:"Color varient for every style",
        spec2:"Smart looking",
        spec3:"IPX5 water resistance"
    }
]
    
boatwired.map(function(el,index,array){
    var bestsellerdiv= document.createElement("div");
    var bimg=document.createElement("img");
    bimg.setAttribute("src",el.img);
    var bname=document.createElement("h3");
    bname.innerText= el.name;
    var pricebox=document.createElement("div");
    var bprice=document.createElement("p");
    bprice.innerText= "Rs."+ el.price;
    var bstprice=document.createElement("p");
    bstprice.style.textDecoration="line-through"
    pricebox.append(bprice,bstprice);
    bstprice.innerText= "Rs."+el.stprice;
    var ulist= document.createElement("ul");
    var bspec1 =document.createElement("li");
    bspec1.innerText= el.spec1;
    var bspec2 =document.createElement("li");
    bspec2.innerText= el.spec2;
    var bspec3 =document.createElement("li");
    bspec3.innerText= el.spec3;
    ulist.append(bspec1,bspec2,bspec3);
    var btn= document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
        el.qty=1;
        cart.push(el);
        localStorage.setItem("cartitem",JSON.stringify(cart));
       })
    bestsellerdiv.append(bimg,bname,pricebox,ulist,btn);
    document.querySelector(".wireimgbox").append(bestsellerdiv);
})


var items5=document.querySelectorAll(".wireimgbox>div");
    for(var i=0;i<items5.length;i++){
        if(i<3){
            items5[i].style.display="block";
        }
    }

    function prev5(){
        var items5= document.querySelectorAll(".wireimgbox>div");
        for(var i=0;i<items5.length;i++){
            if(i<3){
                items5[i].style.display="block";
            }else{
                items5[i].style.display="none";
            }
        }
    }
    function next5(){
        var items5= document.querySelectorAll(".wireimgbox>div");
        for(var i=0;i<items5.length;i++){
              if(i>=3){
              items5[i].style.display="block";
              }else{
            items5[i].style.display="none";
            }
    }
    }