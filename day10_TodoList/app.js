var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let val = input.value.trim();
    if (val) {
        addTodoElement({
            text: val,
        })
        saveTotoList();

    }
    input.value = ''
})

function addTodoElement(todo) {
    // {
    // text:
    // status: 
    // }

    // <li>
    //     <span>TEST</span>
    //     <i class="fa-solid fa-trash-can"></i>
    // </li>

    var li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash-can"></i>
    `

    if (todo.status === 'complete') {
        li.setAttribute('class', 'complete')
        saveTotoList();
    }

    // ấn click sẽ làm mờ
    li.addEventListener('click', function() {
        this.classList.toggle('complete');
    })

    // function xóa
    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTotoList();
    })

    todos.appendChild(li)
}

function saveTotoList() {
    let todoList = document.querySelectorAll('li');
    let todoStores = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');
        console.log(status);
        todoStores.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStores));
    // 
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item) {
        addTodoElement(item);
    })
}

init();