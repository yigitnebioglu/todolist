let inputText = document.getElementById('inputText');
let addToDoButton = document.getElementById('addToDo');
let clearToDoButton = document.getElementById('clearToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('text-capitalize', 'fs-3', 'fw-bold', 'text-dark', 'bg-warning', 'text-wrap', 'p-2', 'mb-1', 'rounded')
    paragraph.innerHTML = inputText.value;
    toDoContainer.appendChild(paragraph);
    inputText.value = '';

    //To-Do Click --> Line-Through
    paragraph.addEventListener('click', function () {
        paragraph.classList.add('text-decoration-line-through');
    });

    //To-Do Double Click --> Delete
    paragraph.addEventListener('dblclick', function () {
        paragraph.remove();
    });

    //Clear Button --> Clears the To-Do List
    clearToDoButton.addEventListener('click', function () {
        paragraph.remove();
    })
})

