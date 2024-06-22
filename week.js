let obj=[];

function newtask(){
    let task1=document.querySelector('#input1');
    let task2=task1.value;
    obj.push(task2);
    console.log(obj);
    task1.value='';
    retask();
    return task2;
}

function retask(){
    let newht='';
    for(let i=0;i<obj.length;i++){
        let task3=obj[i];
        let ht=`<p class="notcon3 roboto-light3">${task3}</p><button class="btm8 roboto-light4" 
        onclick="obj.splice(${i},1);
        retask();">Delete</button>`;
        newht+=ht;
        console.log(newht);
    }
    document.querySelector('#p1').innerHTML=newht;
}
/*
function objarray(num){
    const listnum=num.textContent;
    let newarray={
        listnum:newtask();
    };
}

const lists1=document.querySelectorAll('.dt1');
for(const it1 of lists1){
    it1.addEventListener("click",function(){
        objarray(this);
    })
}
*/
function changeColor(listItem) {
    const listall = document.querySelectorAll('.dt1');
    for (const item of listall) {
      item.style.background = "#F77600";
    }
    listItem.style.background = "#5ED3EC";
}
  
const listall = document.querySelectorAll('.dt1'); 
for (const item of listall) {
    item.addEventListener("click", function() {
    changeColor(this); 
    });
}

function getDate(dates){
    const dt3=dates.textContent;
    let ht=`<h1 class="roboto-light dk">${dt3}</h1>`
    document.querySelector('.maindate').innerHTML=ht;
}

const lists=document.querySelectorAll('.dt');

for(const items of lists){
    items.addEventListener("click",function(){
        getDate(this);
    })
}
