let userName =document.querySelector('#user');
let logoutBtn =document.querySelector('#logout');

let usernam = localStorage.getItem('username');
userName.innerHTML = usernam;


logoutBtn.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout(() =>{
        window.location = "login.html";
    } , 1500); 
})