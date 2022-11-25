console.log("hi")


const Todos = document.querySelector(".todos");
const SubmitBtn = document.querySelector(".submitBtn");
const List= document.querySelector(".listWrap");




SubmitBtn.addEventListener("click",AddTodo);
// ListWrap.addEventListener("click",TodoLists-btn);



function AddTodo(e){
    e.preventDefault();

    // const todoDiv = document.createElement("div");
    // todoDiv.classList.add("listWrap")
    const list = document.createElement("li");
    list.innerText = Todos.value;
    Todos.value="";
    list.classList.add("todoList");
    List.appendChild(list);
   
}

