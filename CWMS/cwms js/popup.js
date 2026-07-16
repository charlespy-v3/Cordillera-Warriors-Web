/*=========================================
PLAYER POPUP SYSTEM
=========================================*/


let selectedPlayerID=null;


/*=========================================
OPEN PLAYER POPUP
=========================================*/


function viewPlayer(playerID){


const player=allPlayers.find(

p=>p[0]===playerID

);


if(!player){

console.error("Player not found:",playerID);

return;

}



selectedPlayerID=playerID;



document.getElementById("editID").value=player[0];

document.getElementById("editName").value=player[1];

document.getElementById("editGender").value=player[2];

document.getElementById("editAge").value=player[3];

document.getElementById("editGym").value=player[4];

document.getElementById("editBelt").value=player[5];

document.getElementById("editFacebook").value=player[6];

document.getElementById("editMedical").value=player[7];

document.getElementById("editStatus").value=player[8];



document
.getElementById("playerModal")
.style.display="flex";


}



/*=========================================
SAVE PLAYER CHANGES
=========================================*/


async function savePlayer(){


showLoading("Saving Changes...");


try{


const playerData={


id:selectedPlayerID,

name:document.getElementById("editName").value,

gender:document.getElementById("editGender").value,

age:document.getElementById("editAge").value,

gym:document.getElementById("editGym").value,

belt:document.getElementById("editBelt").value,

facebook:document.getElementById("editFacebook").value,

medical:document.getElementById("editMedical").value,

status:document.getElementById("editStatus").value


};



const success=await savePlayerData(playerData);



if(!success){

throw new Error("Failed saving changes");

}



await loadPlayers();


displayPlayers(allPlayers);


hideLoading();


showToast("💾 Changes Saved","success");


closePlayer();



}catch(error){


hideLoading();


showToast(error.message,"error");


console.error(error);


}



}



/*=========================================
CLOSE POPUP
=========================================*/


function closePlayer(){


document
.getElementById("playerModal")
.style.display="none";


selectedPlayerID=null;


}



/*=========================================
SAVE BUTTON CONNECTION
=========================================*/


document
.getElementById("savePlayer")
.addEventListener("click",savePlayer);