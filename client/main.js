const box = document.querySelector(".box");
const cards =document.querySelectorAll(".cards")


const render = (user) => {
    box.innerHTML = user.map((item) => (`<div>
    <h1>${item.id}</h1>
    <h1>${item.name}</h1>
    <h1>${item.price}</h1>
    <h1>${item.img}</h1>
    </div>`)
    )
}

const getAdd = () => {
    fetch("http://localhost:3000/Pruducts").then((res) => res.json()).then((data) => {
        render(data)
    }).join("")
}