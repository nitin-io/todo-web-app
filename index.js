

function gettingText() {
    let todoText = document.querySelector("#todo-text").value;
    document.querySelector("#todo-text").value = "";
    creatNode(todoText)
}

// function formValidation(){
//     if(todoText === ""){
//         alert("Can't Add Empty Entry");
//     }
// }

function creatNode(text) {
    document.querySelector(".posts").innerHTML += `<div class="post"><p class="todo">${text}</p>
    <button id="delete-btn" class="btn" onclick="deletePost()">Delete</button></div>`
}

function deletePost() {
    document.querySelector("#delete-btn").parentNode.remove();
}