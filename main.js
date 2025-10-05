groceryList = ["oranges", "potatoes", "carrots", "onions"];

let list1 = document.querySelector("#groceryList");

const displayItems = () => {
  groceryList.forEach(function (item) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list1.appendChild(listItem);
  });
};

function setDefaultChecked() {
  let listItems = document.querySelectorAll("ul > li");

  if (listItems.length >= 2) {
    listItems[0].style.backgroundColor = `green`;
    listItems[1].style.backgroundColor = `green`;
  }
}
displayItems();
setDefaultChecked();
console.log("Hello, World!");