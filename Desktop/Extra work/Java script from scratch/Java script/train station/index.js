let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save")



function add(){
count+=1;
countEl.innerText= count;
}



function save(){
    let save= count +" - ";
    saveEl.textContent+= save;
    countEl.innerText= 0;
    count=0;
}
    



















