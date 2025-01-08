const button = document.getElementById("send");
const btn = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")


btn.addEventListener("click", () => {
    if(document.body.classList.toggle("dark-mode")){
        btn.textContent = '☀️';
    }else{
        btn.textContent = '🌙';
    }
});


