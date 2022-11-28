console.log("hi")


const Todos = document.querySelector(".todos");
const SubmitBtn = document.querySelector(".submitBtn");
const List= document.querySelector(".listWrap");




SubmitBtn.addEventListener("click",AddTodo);
// ListWrap.addEventListener("click",TodoLists-btn);



function AddTodo(e){
    e.preventDefault();

    if(Todos.value.length!=0){

        const list = document.createElement("li");
        list.innerText = Todos.value;
        Todos.value="";
        list.classList.add("todoList");
        List.appendChild(list);

        const Complete_Btn = document.createElement("button");
        const Del_btn = document.createElement("button");

        Complete_Btn.classList.add("complete");
        Complete_Btn.innerText="Done"
        Del_btn.classList.add("delete");
        Del_btn.innerText="Delete"
        List.appendChild(Complete_Btn);
        List.appendChild(Del_btn);



    }else{
        alert("Enter your task");
    }

   
}

