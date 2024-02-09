// // this is the same project but working with local Storage
// import http from 'http';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.write('¡Hola Mundo!');
//   res.end();
// });

// server.listen(port, (error) => {
//   if (error) {
//     console.log('Algo salió mal:', error);
//   } else {
//     console.log('El servidor está escuchando en el puerto ' + port);
//   }
// });

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
// import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js'

// const shoppingList = []
// const inputEl = document.getElementById("input-el")
// const btnEl = document.getElementById("button-el")
// const ulEl = document.getElementById("ulEl")
// const delEl = document.getElementById("del-el")
// // let localList = JSON.parse(localStorage.getItem("list"))

// const appSettings = {
//     databseURL: "https://buying-list-529cb-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const render = (list)=>{
//     let lis = ""
//     for(let i = 0; i < shoppingList.length; i++){
//         lis += `<li> ${list[i]} </li>`
//     }
//     ulEl.innerHTML = lis
// }

// if(localList){
//     shoppingList = localList
//     render(shoppingList)
// }

// btnEl.addEventListener("click",()=>{
//     shoppingList.push(inputEl.value)
//     inputEl.value = ""
//     // localStorage.setItem("list", JSON.stringify(shoppingList))
//     render(shoppingList)
// })

// inputEl.addEventListener("keydown",function(event){
//     if(event.key === "Enter"){
//         shoppingList.push(inputEl.value)
//         inputEl.value = ""
//         // localStorage.setItem("list", JSON.stringify(shoppingList))
//         // push(shoppingListInDB, inputEl.value)
//         render(shoppingList)
//     }
// })


// delEl.addEventListener("dblclick", ()=>{
//     ulEl.innerHTML = "";
//     localStorage.clear()
// })


