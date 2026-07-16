let allPlayers=[];


/*=========================================
LOAD PLAYERS FROM GOOGLE SHEETS
=========================================*/

async function loadPlayers(){

try{

const response=await fetch(WEBAPP);

allPlayers=await response.json();

return allPlayers;

}catch(error){

console.error("Failed loading players:",error);

showToast("❌ Failed loading players","error");

return [];

}

}


/*=========================================
SAVE PLAYER EDITS
=========================================*/

async function savePlayerData(playerData){

const formData=new FormData();

formData.append("action","update");

formData.append("id",playerData.id);

formData.append("name",playerData.name);

formData.append("gender",playerData.gender);

formData.append("age",playerData.age);

formData.append("gym",playerData.gym);

formData.append("belt",playerData.belt);

formData.append("facebook",playerData.facebook);

formData.append("medical",playerData.medical);

formData.append("status",playerData.status);


const response=await fetch(WEBAPP,{

method:"POST",

body:formData

});


return response.ok;

}


/*=========================================
UPDATE PLAYER STATUS
=========================================*/

async function updatePlayerStatus(id,status){

const formData=new FormData();

formData.append("action","status");

formData.append("id",id);

formData.append("status",status);


const response=await fetch(WEBAPP,{

method:"POST",

body:formData

});


return response.ok;

}   