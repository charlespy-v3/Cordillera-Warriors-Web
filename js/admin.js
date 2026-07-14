const WEBAPP=
"https://script.google.com/macros/s/AKfycbwLOhhczBMUdrCMPbtGxcQSXXG33pmAV2SU1TMI0PGmeidFkwOc8xDnavVuBhWjo9LSFg/exec";

async function loadEnrollees(){

const response=await fetch(WEBAPP);

const data=await response.json();

const table=document.getElementById("tableBody");

table.innerHTML="";

let currentDate="";

data.forEach(row=>{

const date=new Date(row[7]);

const formatted=date.toLocaleDateString("en-US",{
year:"numeric",
month:"long",
day:"numeric"
});

if(formatted!==currentDate){

currentDate=formatted;

table.innerHTML+=`
<tr class="dateRow">
<td colspan="8"><strong>${formatted}</strong></td>
</tr>
`;

}

table.innerHTML+=`

<tr>
<td>${row[0]}</td>
<td>${row[1]}</td>
<td>${row[2]}</td>
<td>${row[3]}</td>
<td>${row[4]}</td>
<td>${row[5]}</td>
<td>${row[6]}</td>

<td>${date.toLocaleTimeString("en-US",{
hour:"numeric",
minute:"2-digit"
})}</td>

</tr>

`;

});

}

loadEnrollees();