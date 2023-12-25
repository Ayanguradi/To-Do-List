const inputbox = document.getElementById("input-box");
const lc = document.getElementById("list-container");

function add() {
    if (inputbox.value == '') {
        alert("you shoud enter task")
    }
    else {
        li = document.createElement("li");
        li.innerHTML = inputbox.value;
        lc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // button=document.createElement("button");
        // button.textContent="delete";
        // li.appendChild(button);
    }
    save();
    inputbox.value = "";
    hide();
}

lc.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        save();
        
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
        hide();
    }
});

function save() {
    localStorage.setItem("data", lc.innerHTML);
}

clr = document.getElementById("clr");
        clr.addEventListener('click', function () {
            localStorage.clear();
            clr.style.display="none";
            show();           
        })
    

function show() {
    lc.innerHTML = localStorage.getItem("data",lc.innerHTML);
}
show();

function hide(){
    if (localStorage.getItem("data",lc.innerHTML).length==0){
        clr.style.display="none";
    }
    else{
        clr.style.display="block";
    }
}
hide();