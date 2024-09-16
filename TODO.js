 
let inputs = document.getElementById("inp");
let btn = document.getElementById("btn");
let completed=document.querySelector(".completed");
let notCompleted=document.querySelector(".notCompleted");
let reg = document.getElementById("reg");

btn.addEventListener("click",()=>{
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("li");
        let check = document.createElement("button");
        let del = document.createElement("button");
        let edit = document.createElement("button");
        newEle.innerHTML=`<span>${inputs.value}</span>`;
        check.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>`;
        del.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

        notCompleted.appendChild(newEle);

        newEle.appendChild(check);
        newEle.appendChild(del);
        newEle.appendChild(edit);

        inputs.value="";
       
    del.addEventListener("click" ,()=>{
        newEle.remove();
    })
    check.addEventListener("click" ,()=>{
        completed.appendChild(newEle);
        check.style.display="none";

    })
    edit.addEventListener("click" ,()=>{
        editTask();
    })
}
})
function editTask(newEle) {
            const span = newEle.querySelector("span");
            const newText = prompt("Edit task:", span.textContent);
            if (newText !== null && newText !== "") {
                span.textContent = newText;
            }
        }
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();
const data=new Date();
function time() {
    let h=data.getHours();
    let m=data.getMinutes();
    let s=data.getSeconds();
    if(h < 10)
        h = "0" +h;
     if(m < 10)
     m = "0" + m;
    if(s < 10)
        s = "0" + s;
        document.getElementById("hour").innerHTML = h +":"+ m + ":" + s;
    setTimeout('time()', 500);
}
    