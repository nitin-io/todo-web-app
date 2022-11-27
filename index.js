let input = document.getElementById('input');
let warning = document.getElementById('warning');
let posts = document.getElementById('posts');


document.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
})

function formValidation(){
    if(input.value === ""){
        warning.innerHTML = "Cannot Leave Box Empty!";
    }
    else{
        acceptData();
        warning.innerHTML = "";
    }
}

let data = {
    text: this.text
}

function acceptData(){
    data.text = input.value;
    createPost();
}

function createPost(){
    posts.innerHTML += `<div class="post">
    <p id="task-discription">${data.text}</p>
    <div>
        <button class="btn icon-btn" onclick="deletePost(this)"><img class="btn-icon" src="images/trash-solid.svg" alt="Delete"></button>
        <button class="btn icon-btn" onclick="editPost(this)"><img class="btn-icon" src="images/pen-to-square-solid.svg" alt="Edit"></button>
    </div>
</div>`

input.value = "";
}

function deletePost(e){
    e.parentElement.parentElement.remove();
}

function editPost(e){
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

