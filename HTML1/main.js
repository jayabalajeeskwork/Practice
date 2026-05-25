let todos = [];

function addTodo()
{
  const input = document.getElementById("todoInput");

  if(input.value == "")
  {
    alert("Enter Todo");
    return;
  }

  todos.push(input.value);

  input.value = "";

  showTodos();
}

function showTodos()
{
  const list = document.getElementById("todoList");

  list.innerHTML = "";

  for(let i = 0; i < todos.length; i++)
  {
    list.innerHTML += `

      <li>

        ${todos[i]}

        
        <button onclick="editTodo(${i})">
          Edit
        </button>

        <button onclick="deleteTodo(${i})">
          Delete
        </button>

      </li>

    `;
  }
}

function deleteTodo(index)
{
  todos.splice(index, 1);

  showTodos();
}

function editTodo(index)
{
  const newTodo = prompt("Edit Todo", todos[index]);

  todos[index] = newTodo;

  showTodos();
}