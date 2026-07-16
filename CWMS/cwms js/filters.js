/*=========================================
FILTER SYSTEM
=========================================*/


let filteredPlayers=[];



function initializeFilters(){


const search=document.getElementById("searchBox");

const gym=document.getElementById("gymFilter");

const belt=document.getElementById("beltFilter");

const status=document.getElementById("statusFilter");

const clear=document.getElementById("clearFilters");



search.addEventListener("input",applyFilters);

gym.addEventListener("change",applyFilters);

belt.addEventListener("change",applyFilters);

status.addEventListener("change",applyFilters);



clear.addEventListener("click",()=>{


search.value="";

gym.value="";

belt.value="";

status.value="";


applyFilters();


});


populateFilters();


}



/*=========================================
CREATE FILTER OPTIONS
=========================================*/


function populateFilters(){


const gyms=new Set();

const belts=new Set();

const statuses=new Set();



allPlayers.forEach(player=>{


if(player[4]){

gyms.add(player[4]);

}


if(player[5]){

belts.add(player[5]);

}


if(player[8]){

statuses.add(player[8]);

}


});



fillOptions("gymFilter",gyms);

fillOptions("beltFilter",belts);

fillOptions("statusFilter",statuses);


}



/*=========================================
ADD OPTIONS
=========================================*/


function fillOptions(id,data){


const select=document.getElementById(id);


const first=select.options[0].text;


select.innerHTML="";


select.innerHTML+=`

<option value="">

${first}

</option>

`;



data.forEach(value=>{


select.innerHTML+=`

<option value="${value}">

${value}

</option>

`;


});


}



/*=========================================
FILTER LOGIC
=========================================*/


function applyFilters(){


const keyword=document
.getElementById("searchBox")
.value
.toLowerCase();



const gym=document
.getElementById("gymFilter")
.value;



const belt=document
.getElementById("beltFilter")
.value;



const status=document
.getElementById("statusFilter")
.value;




filteredPlayers=allPlayers.filter(player=>{


const matchesSearch=player.some(value=>

String(value)
.toLowerCase()
.includes(keyword)

);



const matchesGym=!gym || player[4]===gym;


const matchesBelt=!belt || player[5]===belt;


const matchesStatus=!status || player[8]===status;



return matchesSearch &&
matchesGym &&
matchesBelt &&
matchesStatus;


});



displayPlayers(filteredPlayers);


}