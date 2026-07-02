console.log("enroll.js loaded");
const form=document.getElementById("enrollmentForm");

form.addEventListener("submit",async function(e){

e.preventDefault();

const data={

name:document.getElementById("name").value,
age:document.getElementById("age").value,
belt:document.getElementById("belt").value,
facebook:document.getElementById("facebook").value,
address:document.getElementById("address").value,
medical:document.getElementById("medical").value

};

try{

const response=await fetch("https://script.google.com/macros/s/AKfycbwcZTuUtB_xY0BEWeELlmHYCsXVUkcXdOXipVsLcJjs-WI6aCcXjvIY_kMoEbXBsxTnoQ/exec",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

if(response.ok){

alert("Enrollment submitted successfully! Pls Wait For Our Response");

form.reset();

}else{

alert("Submission failed.");

}

}catch(error){

console.error(error);

alert(error.message);

}

});