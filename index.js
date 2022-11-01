let addTaskBtn = document.querySelector("#add-task-btn");
let modal = document.querySelector(".modal-container");

let closeBtn = document.querySelector("#close-btn");
addTaskBtn.addEventListener('click', function(){
    modal.style.display = "block";
    console.log(modal.style.display);
});

closeBtn.addEventListener('click', function(){
    modal.style.display = "none";
})
