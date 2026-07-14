console.log("enroll.js loaded");
const form=document.getElementById("enrollmentForm");

form.addEventListener("submit",async function(e){

e.preventDefault();

const submitBtn=document.getElementById("submitBtn");
submitBtn.disabled=true;
submitBtn.textContent="Submitting...";
submitBtn.classList.add("loading");

const name=document.getElementById("name").value.trim();
const age=parseInt(document.getElementById("age").value);
const gender=document.getElementById("gender").value;
const gym=document.getElementById("gym").value;
const belt=document.getElementById("belt").value;
const facebook=document.getElementById("facebook").value.trim();
const medical=document.getElementById("medical").value.trim();

if(!/^[a-zA-Z\s]+$/.test(name)){

showPopup(
"Invalid Name",
"Only letters and spaces are allowed."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

if(age<4||age>80){

showPopup(
"Invalid Age",
"Age must be between 4 and 80."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

if(gender===""){

showPopup(
"Gender Required",
"Please select your gender."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

if(gym===""){

showPopup(
"Gym Required",
"Please choose your preferred training gym."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

if(belt===""){

showPopup(
"No Belt Selected",
"Please choose your current belt level."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

if(facebook.length<3){

showPopup(
"Facebook Required",
"Please enter your Facebook name or profile link."
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");
return;

}

const data={

name:document.getElementById("name").value,
age:document.getElementById("age").value,
gender:document.getElementById("gender").value,
gym:document.getElementById("gym").value,
belt:document.getElementById("belt").value,
facebook:document.getElementById("facebook").value,
medical:document.getElementById("medical").value

};

try{

const formData = new FormData();

formData.append("name", data.name);
formData.append("age", data.age);
formData.append("gender", data.gender);
formData.append("gym", data.gym);
formData.append("belt", data.belt);
formData.append("facebook", data.facebook);
formData.append("medical", data.medical);

const response = await fetch(
"https://script.google.com/macros/s/AKfycbwLOhhczBMUdrCMPbtGxcQSXXG33pmAV2SU1TMI0PGmeidFkwOc8xDnavVuBhWjo9LSFg/exec",
{
method:"POST",
body:formData
});

if(response.ok){

showPopup(
"Enrollment Submitted",
"Thank you for enrolling!\n\nPlease wait while the coach reviews your application."
);

form.reset();
submitBtn.disabled=false;

submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");

}else{

showPopup(
"Submission Failed",
"Please try again."
);

submitBtn.disabled=false;

submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");

}

}catch(error){

console.error(error);

showPopup(
"Connection Error",
error.message
);

submitBtn.disabled=false;
submitBtn.textContent="Submit Enrollment";
submitBtn.classList.remove("loading");

}

});

function showPopup(title,message){

document.getElementById("popupTitle").textContent=title;

document.getElementById("popupMessage").textContent=message;

document.getElementById("popup").classList.add("show");

}

function closePopup(){

document.getElementById("popup").classList.remove("show");

}