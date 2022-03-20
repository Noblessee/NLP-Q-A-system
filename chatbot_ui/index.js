let chatRenderer = document.getElementById('render');

let chatbox = (type, message) => {
    return `<div class='card ${(type=="user"? " float-end user":"float-start bot")}-chat-card'><div class='card-body'><h5 class="card-title">${(type=="user"? "You":"ChatBot")}</h5>${message}</div></div><br><br><br><br>`
}

let sendText = (type, message) => {
    chatRenderer.innerHTML += chatbox(type, message)
}

let userField = document.getElementById("userField")

let userSumbit = () => {
    sendText("user", userField.value)
    userField.value = ""
}

// render commands here

sendText("user", "Hi")
sendText("bot", "Hello")





// preventing default form behaviour

var form = document.getElementById("userform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);