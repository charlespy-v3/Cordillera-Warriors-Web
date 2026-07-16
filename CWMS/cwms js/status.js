/*=========================================
PLAYER STATUS SYSTEM
=========================================*/


async function changePlayerStatus(id,status){


let loadingText="Updating Status...";


switch(status){

case "Active":

loadingText="Approving Player...";

break;


case "Dropped":

loadingText="Dropping Player...";

break;


case "Archived":

loadingText="Archiving Player...";

break;


case "Inactive":

loadingText="Updating Player...";

break;

}



showLoading(loadingText);



/* Optimistic UI */

const player=allPlayers.find(

p=>p[0]===id

);


if(player){

player[8]=status;

displayPlayers(allPlayers);

}



await new Promise(resolve=>setTimeout(resolve,50));



try{


const success=await updatePlayerStatus(id,status);



if(!success){

throw new Error("Update failed");

}



await loadPlayers();


displayPlayers(allPlayers);


hideLoading();



let message="Player Updated";


switch(status){

case "Active":

message="✅ Player Activated";

break;


case "Dropped":

message="❌ Player Dropped";

break;


case "Archived":

message="📦 Player Archived";

break;


case "Inactive":

message="⚫ Player Inactive";

break;

}



showToast(message,"success");



}catch(error){


await loadPlayers();


displayPlayers(allPlayers);


hideLoading();


showToast("❌ "+error.message,"error");


console.error(error);


}



}



/*=========================================
BUTTON FUNCTIONS
=========================================*/


function approvePlayer(id){

changePlayerStatus(id,"Active");

}


function denyPlayer(id){

changePlayerStatus(id,"Dropped");

}


function archivePlayer(id){

changePlayerStatus(id,"Archived");

}


function restorePlayer(id){

changePlayerStatus(id,"Active");

}