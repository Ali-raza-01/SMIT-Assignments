var input = document.getElementById('todo_input');
var add_todo_btn = document.getElementById('add_todo_btn');
var Dell_todo_btn = document.getElementById('Dell_todo_btn');
var list = document.getElementById('list');

add_todo_btn.addEventListener('click',() =>{
    if(!input.value) return alert('bhai jo karna hai wo to dal pehle')

        var li = `<li><span>${input.value}</span>
        <button onclick="edit(this)" class="list_item">Edit</button>
         <button onclick="deleteFun(this)" class="list_item">Dell</button> 
         </li>`
        list.innerHTML += li;
        input.value = '';

});

Dell_todo_btn.addEventListener('click', ()=>{
list.innerHTML = ''

});


function edit(element){
    var pre = element.previousElementSibling.innerText
    var updated = prompt('Edit kar bhai', pre)
    element.previousElementSibling.innerText = updated;


}
function deleteFun(element){
    element.parentElement.remove()
 
}

