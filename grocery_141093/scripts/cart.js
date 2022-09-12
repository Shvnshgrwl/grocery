

const data = JSON.parse(localStorage.getItem("items")) || []

let sum = 0



    
    data.map(function(elem,index){
        sum = sum + elem.price
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let name = document.createElement("h5")
        name.innerText=elem.name;

        let image = document.createElement("img")
        image.src=elem.image;

        let price = document.createElement("p")
        price.innerText=elem.price;

        let btn = document.createElement("button")
        btn.setAttribute("id","remove");
        btn.innerText = "Remove"

        btn.addEventListener("click",function(){
            data.splice(index,1)
            localStorage.setItem("items",JSON.stringify(data))
            window.location.reload()
        })

        box.append(name,image,price,btn)

        document.querySelector("#cart").append(box)

    })

document.querySelector("#cart_total").innerText = "rs" + sum
console.log(sum)