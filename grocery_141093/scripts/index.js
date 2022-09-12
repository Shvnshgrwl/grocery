// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items
const url = "https://grocery-mock-api.herokuapp.com/items"

fetch (url).then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res.data)
    display(res.data)


})
.catch(function(err){
    console.log(err)
})

const items = JSON.parse(localStorage.getItem("items")) || []




function display(data){
    
    data.map(function(elem){
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let name = document.createElement("h5")
        name.innerText=elem.name;

        let image = document.createElement("img")
        image.src=elem.image;

        let price = document.createElement("p")
        price.innerText=elem.price;

        let btn = document.createElement("button")
        btn.setAttribute("id","add_to_cart");
        btn.innerText = "Add to cart"

        btn.addEventListener("click",function(){
            items.push(elem)
            localStorage.setItem("items",JSON.stringify(items))
            document.querySelector("#item_count").innerText = items.length
        })

        box.append(name,image,price,btn)

        document.querySelector("#items").append(box)

    })

document.querySelector("item_count").innerText = items.length
}