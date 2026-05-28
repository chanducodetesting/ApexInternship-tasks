document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(name === "" || email === "" || message === "") {
        error.innerText = "All fields are required";
    }
    else if(!email.match(emailPattern)) {
        error.innerText = "Enter valid email";
    }
    else {
        error.style.color = "green";
        error.innerText = "Form Submitted Successfully";
    }
});
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if(taskText === "") {
        alert("Please enter task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="removeTask(this)">
            Delete
        </button>
    `;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    button.parentElement.remove();
}