/*=========================================
DASHBOARD DISPLAY
=========================================*/


function displayPlayers(players){

const dashboard=document.getElementById("tableBody");

dashboard.innerHTML="";


updateStats(players);


let currentDate="";


players.forEach(player=>{


const date=player[9]
?new Date(player[9]).toLocaleDateString()
:"No Date";


if(currentDate!==date){

currentDate=date;


dashboard.innerHTML+=`

<h2 class="date-title">

${date}

</h2>

`;

}



dashboard.innerHTML+=createPlayerCard(player);


});


}



/*=========================================
STATISTICS
=========================================*/


function updateStats(players){


document
.getElementById("totalStudents")
.textContent=players.length;



const gyms=new Set();


let today=0;


const todayDate=new Date()
.toLocaleDateString();



players.forEach(player=>{


if(player[4]){

gyms.add(player[4]);

}



if(player[9]){


const date=new Date(player[9])
.toLocaleDateString();


if(date===todayDate){

today++;

}


}


});



document
.getElementById("totalGyms")
.textContent=gyms.size;



document
.getElementById("todayEnrollments")
.textContent=today;



const active=players.filter(player=>

player[8]=="Active"

);



document
.getElementById("activeStudents")
.textContent=active.length;


}



/*=========================================
PLAYER CARD
=========================================*/


function createPlayerCard(player){


return `

<div class="player-card">


<div class="player-header">


<h2>

${player[1]}

</h2>


<span class="player-id">

${player[0]}

</span>


</div>



<div class="player-status">


<strong>Status:</strong>


<span class="status-badge ${player[8].toLowerCase()}">

${player[8]}

</span>


</div>



<div class="player-actions">


<button

class="view-btn"

onclick="viewPlayer('${player[0]}')">

View

</button>


${getActionButtons(player)}


</div>



</div>

`;

}



/*=========================================
ACTION BUTTONS
=========================================*/


function getActionButtons(player){


const id=player[0];

const status=player[8];



if(status=="Pending"){


return `


<button

class="approve-btn"

onclick="approvePlayer('${id}')">

Approve

</button>


<button

class="deny-btn"

onclick="denyPlayer('${id}')">

Deny

</button>


`;


}



if(status=="Active"){


return `


<button

class="archive-btn"

onclick="archivePlayer('${id}')">

Archive

</button>


`;


}



return `


<button

class="restore-btn"

onclick="restorePlayer('${id}')">

Restore

</button>


`;


}