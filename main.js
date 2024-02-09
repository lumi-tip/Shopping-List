import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js'

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("button-el")
const ulEl = document.getElementById("ulEl")
const delEl = document.getElementById("del-el")
const appSettings = {
    databaseURL: "https://buying-list-529cb-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const render = (item)=>{
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    newEl.textContent = itemValue   
    ulEl.append(newEl)

    newEl.addEventListener("click", ()=>{
        let removeExact = ref(database, `shoppingList/${itemID}`) 
        remove(removeExact)
    })
}

onValue(shoppingListInDB, function(snapshot){
    if(snapshot.exists()){
        let listInDB = Object.entries(snapshot.val())
        clearShoppingList()
        for(let i = 0; i < listInDB.length; i++){
            let currentItem = listInDB[i]
            let currentItemID = currentItem[0]
            let currentValue = currentItem[1]
            render(currentItem)
        }
    }else ulEl.innerHTML = "no items here... yet"
})

function clearShoppingList(){
    ulEl.innerHTML = ""
}

btnEl.addEventListener("click",()=>{
    push(shoppingListInDB,inputEl.value)
    inputEl.value = ""
})

inputEl.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        push(shoppingListInDB, inputEl.value)
        inputEl.value = ""
    }
})

