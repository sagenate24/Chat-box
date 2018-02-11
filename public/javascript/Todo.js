document.querySelector("#addListItemButton").addEventListener("click", myTodoFunction);


function myTodoFunction() {
    var isCompleted = true;
    var listItems = [];
    //Creates a div element and asingns that div to a variable 
    var divAndFuckBoys = document.createElement('div');
    var renderStuff = document.querySelector('#bodyContainer');
    var listItemsValue = document.querySelector('#userInputText').value;

    if (listItemsValue.length > 0) {
    //pushs the value of the listItems array
    listItems.push(listItemsValue);

    //creates a span, a new list item, and a button into the the created div
    divAndFuckBoys.innerHTML =
    `
    <span class="addACheck">✅</span> ${listItems} <p class="delete">Delete</p>
    `;
    renderStuff.appendChild(divAndFuckBoys)
    document.querySelector('#userInputText').value = "";

    document.querySelector('#userInputText').placeholder='';
} else {};
    divAndFuckBoys.addEventListener("click", function () {
        //reverses the value of the variable to be true first then keeps reversing as the function runs
        isCompleted = !isCompleted;

        //removes the line through the new list item when first rendered to the created div
        if (isCompleted === true) {
            divAndFuckBoys.classList.remove("todoCompleted");
        }
        //adds a css class element to put a line through the list item when checkButton is clicked
        else {
            divAndFuckBoys.classList.add("todoCompleted");
        };
    });
    //removes the element in the row when the deleteButton is clicked
    divAndFuckBoys.querySelector(".delete").addEventListener("click", function () {
        renderStuff.removeChild(divAndFuckBoys);
    });


};

