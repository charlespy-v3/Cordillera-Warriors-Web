/*=========================================
LOADING + TOAST SYSTEM
=========================================*/


function showLoading(text="Processing..."){

const overlay=document.getElementById("loadingOverlay");

const loadingText=document.getElementById("loadingText");


if(loadingText){

loadingText.textContent=text;

}


if(overlay){

overlay.style.display="flex";

}

}



function hideLoading(){

const overlay=document.getElementById("loadingOverlay");


if(overlay){

overlay.style.display="none";

}

}



/*=========================================
TOAST MESSAGE
=========================================*/


function showToast(message,type="success"){


const toast=document.getElementById("toast");


if(!toast)return;


toast.textContent=message;


toast.className=type;


toast.style.display="block";



setTimeout(()=>{

toast.style.display="none";

},2500);



}