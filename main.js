const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#items")
    createItem(item)
})

function displayItems(){
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){
        
    }
}

function createItem(item){
    itemsArray.push(item.value  )
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] +" " + date[3]
}

window.onload = function(){
    displayDate()
}