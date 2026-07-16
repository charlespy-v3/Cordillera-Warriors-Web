/*=========================================
CWMS DASHBOARD START
=========================================*/

const user = JSON.parse(sessionStorage.getItem("coach"));

if (!user || user.role !== "Admin") {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded",async()=>{

await loadPlayers();

displayPlayers(allPlayers);

initializeFilters();

});

    function logout() {
    sessionStorage.removeItem("coach");
    window.location.href = "login.html";
}