const WEBAPP="https://script.google.com/macros/s/AKfycbwcZTuUtB_xY0BEWeELlmHYCsXVUkcXdOXipVsLcJjs-WI6aCcXjvIY_kMoEbXBsxTnoQ/exec";
async function loadEnrollees(){

const response=await fetch(WEBAPP);

const data=await response.json();

const table=document.getElementById("tableBody");

table.innerHTML="";

data.forEach(row=>{

table.innerHTML+=`

<tr>

<td>${row[0]}</td>

<td>${row[1]}</td>

<td>${row[2]}</td>

<td>${row[3]}</td>

<td>${row[4]}</td>

<td>${row[5]}</td>

<td>${row[6]}</td>

</tr>

`;

});

}

loadEnrollees();