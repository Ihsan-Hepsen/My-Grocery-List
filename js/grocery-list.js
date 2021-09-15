import { List } from "./cart.js";

const itemToBeAdded = document.getElementById('item_field')
const groceryList = document.getElementById('grocery_list')
const addButton = document.getElementById('add_button')
const myList = new List()

function addToList(event) {
    event.preventDefault()
    if (itemToBeAdded.value !== '') {
        myList.addToCart(itemToBeAdded.value)
        itemToBeAdded.value = ''
        displayList()
    }
}

function removeFromList(event) {
    console.log(event);
    // console.log(event.target.parentNode.childNodes[0].innerText);
    console.log(myList);
    myList.removeFromList(event.target.parentNode.childNodes[0].innerText)
    displayList()
}

function displayList() {
    groceryList.innerText = ''
    myList.getList().forEach(i => {
        let listItem = document.createElement('div')
        listItem.innerHTML = `<p>${i}</p><button class="delete-button">X</button>`
        listItem.className = 'list-item'
        listItem.addEventListener('click', removeFromList)
        // let deleteButtons = document.querySelectorAll('.delete-button')
        // deleteButtons.forEach(btn => {
        //     btn.addEventListener('click', removeFromList)
        // })
        groceryList.append(listItem)
    })
}

addButton.addEventListener('click', addToList)
