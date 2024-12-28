var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById('home_container');
var displayEmail = document.getElementById("displayEmail");
var notes = document.getElementById("notes");




function loginUser(){
    if(!userEmail.value || !userPassword.value ) return alert("please enter email or password")
    localStorage.setItem("email", userEmail.value)
 
};
function checkUserLogin(){
    var email = localStorage.getItem('email')
    if(email){
       home_container.style.display = 'block'
        login_container.style.display = 'none'
        displayEmail.innerHTML = email
    }else{
        login_container.style.display = "block"
        home_container.style.display = "none"

    }
}
checkUserLogin();

function logoutUser(){
 localStorage.removeItem("email")
 checkUserLogin()
};

function AddTodos(){
    var email = localStorage.getItem('email')
    var obj = {
        email : email,
        note : notes.value
    }
   saveTodoInlocalStorage(obj)
   notes.value = "";
}
function saveTodoInlocalStorage(obj){
    var notes = localStorage.getItem("notes")
    console.log(notes)
    
    if(notes){
        notes = JSON.parse(notes)
        notes.push(obj)
        localStorage.setItem("notes", JSON.stringify(notes))

    }else{
        notes = [obj];
        localStorage.setItem("notes", JSON.stringify(notes))
    }
    
  displayUserNotes()

}
function displayUserNotes(){
    var notes = localStorage.getItem("notes")
    var list = document.getElementById("list");
    var email = localStorage.getItem("email")
    if (notes){
       list.innerHTML = "";
        notes = JSON.parse(notes)
        notes.forEach(function(data,index){
            if(data.email === email){
                var li = `${data.email} <p>${data.note}</p> `
            list.innerHTML += li;

            }
            
        });

        }

    }
    displayUserNotes()
