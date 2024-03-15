let inputEl = document.getElementById("input");
let errmsg = document.getElementById("errmessage");
let errmsg2 = document.getElementById("errmessage2");
let itemsToAdd = document.getElementById("listItems");
let saveButton = document.getElementById("saveButton");
let todoList1 = []; // creating an empty array for storing the input array items and saved array items
let deleteItemid = null;
let checkedItems = [];

saveButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList1));
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
};
/* this is triggered when user clicks save button and sets items into local storage
with the key ""todoList*/

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}
/* this function is to get data from the local storage and parsifying and returning the parsed array*/

function getCheckedItemsFromLocalStorage() {
    let stringifiedCheckedItems = localStorage.getItem("checkedItems");
    //console.log(stringifiedCheckedItems);
    let parsedCheckedItems = JSON.parse(stringifiedCheckedItems);
    //console.log(parsedCheckedItems);
    if (parsedCheckedItems === null) {
        return [];
    } else {
        return parsedCheckedItems;
    }
}

function onDeleteTodo(divid) {
    let removeElement = document.getElementById(divid);
    itemsToAdd.removeChild(removeElement);
}
/* this onDeleteTodo Function is to remove the elemet when clicked  by getting the divid(container id)*/

function deleteItemsinTodoList(itemName) {
    let parsedItem = JSON.parse(itemName);
    let index = todoList1.findIndex(function(Item) { // used the findIndex and test function to find the index of deleted item  
        if (Item === parsedItem) {
            return true;
        }
    });

    todoList1.splice(index, 1); // used splice method to delete the deleted element in the todolist
}

function onItemStatus(itemid, labelid) {
    let checkboxEl = document.getElementById(itemid);
    let labelElement = document.getElementById(labelid);
    // without if else block we can use toggle attribute to add and remove
    if (checkboxEl.checked === true) {
        labelElement.classList.add("checked");
    } else {
        labelElement.classList.remove("checked");
    }
}
/* this onItemStatus function takes itemid and labelid as arguments and checks 
if the input checkbox type is checked and adds the css class checked which is a line through text decoration  */
let gotCheckedItems = getCheckedItemsFromLocalStorage();
console.log(gotCheckedItems);


function fun1() {
    if (inputEl.value === "") {
        alert("Enter a valid text");
        //errmsg.textContent = "Enter a valid item";
    } else {
        let newTodoItem = inputEl.value;
        todoList1.push(newTodoItem); // adding every item to the array;
        errmsg.textContent = "";
        let divEl = document.createElement("div");
        divEl.classList.add("divEl");
        divEl.id = inputEl.value + "1";
        let divid = divEl.id;

        let item = document.createElement("input");
        item.classList.add("mr");
        item.type = "checkbox";
        item.id = inputEl.value;
        let itemid = item.id;

        let deleteitembutton = document.createElement("button");
        deleteitembutton.textContent = "-";
        deleteitembutton.classList.add("deleteButton");

        let labelEl = document.createElement("label");
        labelEl.classList.add("mr");
        labelEl.setAttribute("for", item.id);
        labelEl.textContent = inputEl.value;
        labelEl.id = "l" + inputEl.value;
        let labelid = labelEl.id;

        divEl.appendChild(item);
        divEl.appendChild(labelEl);
        divEl.appendChild(deleteitembutton);
        itemsToAdd.appendChild(divEl);

        item.onclick = function() {
            onItemStatus(itemid, labelid);
            if (item.checked === true) {
                checkedItems.push(itemid);
                //console.log(itemid);
            } else if (item.checked === false) {
                let index = checkedItems.findIndex(function(each) {
                    if (each === item) {
                        return true;
                    } else {
                        return false;
                    }
                });
                checkedItems.splice(index, 1);
                //console.log(checkedItems);
            }
        };

        for (let each of gotCheckedItems) {
            if (each === labeltextContent) {
                //console.log(each);
                labelEl.classList.add("checked");
                item.checked = true;
            } else {
                labelEl.classList.remove("checked");
                item.checked = false;
            }
        }

        deleteitembutton.onclick = function() {
            onDeleteTodo(divid);
            deleteItemid = JSON.stringify(divid);
            let itemName = deleteItemid.replace("1", "");
            deleteItemsinTodoList(itemName);
        };
        inputEl.value = "";
    }
}
/* this fun1 function takes input elements value and checks if it is not null and creates a div Element
which have checkboxed type input and label for input and delete button for every input element value */



function fun2(Item) {
    if (Item === "") {
        //alert("Enter a valid text");
        errmsg2.textContent = "No previous data";
    } else {
        let newTodoItem = Item;
        todoList1.push(newTodoItem);

        errmsg.textContent = "";
        let divEl = document.createElement("div");
        divEl.classList.add("divEl");
        divEl.id = Item + "1";
        let divid = divEl.id;

        let item = document.createElement("input");
        item.classList.add("mr");
        item.type = "checkbox";
        item.id = Item;
        let itemid = item.id;

        let deleteitembutton = document.createElement("button");
        deleteitembutton.textContent = "-";
        deleteitembutton.classList.add("deleteButton");

        let labelEl = document.createElement("label");
        labelEl.classList.add("mr");
        labelEl.setAttribute("for", itemid);
        labelEl.textContent = Item;
        let labeltextContent = labelEl.textContent;
        labelEl.id = "l" + Item;
        let labelid = labelEl.id;

        divEl.appendChild(item);
        divEl.appendChild(labelEl);
        divEl.appendChild(deleteitembutton);
        itemsToAdd.appendChild(divEl);

        item.onclick = function() {
            onItemStatus(itemid, labelid);
            if (item.checked === true) {
                checkedItems.push(itemid);
                //console.log(itemid);
            } else if (item.checked === false) {
                let index = checkedItems.findIndex(function(each) {
                    if (each === item) {
                        return true;
                    } else {
                        return false;
                    }
                });
                checkedItems.splice(index, 1);
                //console.log(checkedItems);
            }
        };

        for (let each of gotCheckedItems) {
            if (each === labeltextContent) {
                //console.log(each);
                labelEl.classList.add("checked");
                item.checked = true;
            } else {
                labelEl.classList.remove("checked");
                item.checked = false;
            }
        }


        deleteitembutton.onclick = function() {
            onDeleteTodo(divid);
            deleteItemid = JSON.stringify(divid);
            let itemName = deleteItemid.replace("1", "");
            deleteItemsinTodoList(itemName);
        };
    }
}
/* this fun2 function takes Item as argument and and checks if it is not null and creates a div Element
which have checkboxed type input and label for input and delete button for every Item in todolist2
this fun2 function is only for the Items which are saved in local storage and saved in an array 
named todoList2 which gets the saved data from local storage*/

let todoList2 = getTodoListFromLocalStorage();
console.log(gotCheckedItems);

/* todolist2 gets data from localstorage with the key "todoList"*/

for (let Item of todoList2) { // this for loop is to create elements is the website for every array value in the todoList2
    fun2(Item);
}
