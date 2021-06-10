const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const lineThrough = "lineThrough";

let list = [];
let id = 0;

function addToDo (toDo, id, done, trash) {

    if(trash) {
        return;
    };

    const done = done ? check : uncheck;
    const line = done ? lineThrough : "";
    const text =    <li class="item">   
                        <i class="fa ${done} complete" job="complete" id="${id}"></i>
                        <p class="text ${line}">`${toDo}`</p> 
                        <i class="de fa fa-trash-o delete" job="delete" id="${id}"></i>
                    </li>;
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
};

document.addEventListener("keyup",function(event) {
    if(event.keyCode == 13) {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo, id, false, false);
            list.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
        }
        input.value = "";
    }
});

function completeToDo (element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);
    list[element.id].done = list[element.id].done ? false : true;

};

function removeToDo (element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    list[element.id].trash = true;
}