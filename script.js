// Big Five
const btns = document.getElementsByClassName("big-five-button")
const ul = document.getElementsByClassName("big-five-list")
const lists = document.getElementsByClassName("big-five-list-item")

// Animal Spotted
const spottedUl = document.querySelector("#spotted-animals-list")
const spottedList = document.getElementsByClassName("spotted-animals-list-item")

// Removing
const removeFirst = document.getElementById("#remove-first-item-button")
const removeAllLists = document.getElementById("#remove-all-button")
console.log(btns)

// Part 1 - Adding Elements to the DOM
for (let i = 0; i <= btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
        console.log(event.target.innerText)
        //alert("check")
        spottedUl.appendChild(event.target);
    })
}

// Part 2 - Remove 1 element from the DOM
