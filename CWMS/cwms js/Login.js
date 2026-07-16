const scriptURL="https://script.google.com/macros/s/AKfycbwLOhhczBMUdrCMPbtGxcQSXXG33pmAV2SU1TMI0PGmeidFkwOc8xDnavVuBhWjo9LSFg/exec";

function showLoading(){
    document.getElementById("loading").style.display="flex";
}

function hideLoading(){
    document.getElementById("loading").style.display="none";
}

function login(){

const btn=document.getElementById("loginBtn");

const username=document.getElementById("username").value.trim();
const password=document.getElementById("password").value.trim();

document.getElementById("message").textContent="";

if(username==="" || password===""){
    document.getElementById("message").textContent="Please enter your username and password.";
    return;
}

btn.disabled=true;
showLoading();

fetch(scriptURL,{
method:"POST",
body:JSON.stringify({
action:"login",
username:username,
password:password
})
})
.then(res=>res.json())
.then(data=>{

if(data.success){

sessionStorage.setItem("coach",JSON.stringify(data.user));

window.location.href="admin.html";

}else{

hideLoading();
btn.disabled=false;
document.getElementById("message").textContent="Incorrect username or password.";

}

})
.catch(error=>{

hideLoading();
btn.disabled=false;

document.getElementById("message").textContent="Unable to connect to the server.";

console.error(error);

});

}
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        login();
    }
});