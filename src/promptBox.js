export default function closePromptBox(){
    let promptBox = document.getElementById("promptBox");
    let promptClose = document.getElementById("promptClose");
    promptBox.style.visibility = "hidden";
    promptClose.style.visibility = "hidden";
}
let prompt = window.prompt = function(msg){
    let id = "promptBox", promptBox, closeId = "promptClose", promptClose;
    promptBox = document.createElement("div");
    document.body.appendChild(promptBox);
    promptBox.id = id;
    promptBox.innerHTML = msg;
    promptClose = document.createElement("div");
    promptClose.id = closeId;
    promptClose.innerHTML = "x";
    promptBox.appendChild(promptClose);
    promptBox.style.visibility = "visible";
    promptClose.style.visibility = "visible";
    promptClose.onclick = closePromptBox;
};
module.exports = prompt
