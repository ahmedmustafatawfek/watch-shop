let username = document.querySelector("#username");
let password = document.querySelector("#password");

let loginBtn= document.querySelector("#sign_in");

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")


loginBtn.addEventListener("click" , login);


function login(e){
    e.preventDefault();
    if( email.value ===""|| password.value === "" ){ alert("Please Fill The Data ...")}
    else{ 
    if( 
        ( getEmail && getEmail.trim() === email.value.trim()) 
         &&  
        (getPassword && getPassword === password.value.trim() )
        ){

         setTimeout(() => {window.location = "index.html";} , 1500); 

        }
        else{
            alert("user name or password is wrong");
        }
    }
}