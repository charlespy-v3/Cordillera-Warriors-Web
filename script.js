// ================= SLIDER =================

function setupSlider(trackClass){

    const track=document.querySelector(trackClass);

    if(!track) return;

    const cards=[...track.children];

    cards.forEach(card=>{
        track.appendChild(card.cloneNode(true));
    });

}


setupSlider(".card-track");
setupSlider(".event-track");



let positions={
    gym:0,
    event:0
};


const width=305;



function moveSlider(type,direction){

    let track;


    if(type==="gym")
        track=document.querySelector(".card-track");

    else
        track=document.querySelector(".event-track");


    if(!track) return;


    positions[type]+=direction;


    track.style.transition=".5s ease";


    track.style.transform=
    `translateX(${-positions[type]*width}px)`;


    setTimeout(()=>{


        let total=track.children.length/2;


        if(positions[type]>=total){

            track.style.transition="none";

            positions[type]=0;

            track.style.transform="translateX(0)";

        }



        if(positions[type]<0){

            track.style.transition="none";

            positions[type]=total-1;

            track.style.transform=
            `translateX(${-positions[type]*width}px)`;

        }


    },500);


}



// AUTO MOVE

setInterval(()=>{

    moveSlider("gym",1);

},3000);



setInterval(()=>{

    moveSlider("event",1);

},3000);





// ================= MOBILE SWIPE =================


let startX=0;


document.querySelectorAll(".slider-window").forEach(slider=>{


    slider.addEventListener("touchstart",e=>{

        startX=e.touches[0].clientX;

    });



    slider.addEventListener("touchend",e=>{


        let endX=e.changedTouches[0].clientX;



        if(startX-endX>50){


            if(slider.parentElement.parentElement.id==="news")

                moveSlider("event",1);

            else

                moveSlider("gym",1);


        }



        if(endX-startX>50){


            if(slider.parentElement.parentElement.id==="news")

                moveSlider("event",-1);

            else

                moveSlider("gym",-1);


        }


    });


});




// ================= NEWS =================


const newsData={


yuri:{

image:"image/yuri.jpg",

title:"Big Boy or Baby Boy",

text:"A boy with Big dreams and financial obstacle to 1500 can you ease your life"

},


carlo:{

image:"image/carlo.jpg",

title:"The New Daniel Padilla Appears on Cordillera Warriors!!",

text:"A student who says he is the new up and coming Daniel Padilla showing it through facial rizz"

},


ji:{

image:"image/ji1.jpg",

title:"Paldo and Paldog",

text:"Nag inuman para sa celebration akala papaldo pumaldog pala sa EA na may pang tira"

},


silos:{

image:"image/silos.jpg",

title:"Selos or Jalosy?",

text:"After community service lumabas ang matinding nararamdaman"

},


tulog:{

image:"image/tulog.jpg",

title:"Tulog tulogan para ma pwetan?",

text:"After a fun moment of celebration this man decided to take the opportunity."

}


};




function openNewsCard(button){


    let card=button.closest(".news-card");
    let newsID=card.dataset.news;
    let news=newsData[newsID];

    if(!news){
    alert("News not found.");
    return;
    }

    document.getElementById("popupImage").src=news.image;
    document.getElementById("popupTitle").textContent=news.title;
    document.getElementById("popupText").textContent=news.text;
    document.getElementById("newsPopup").style.display="flex";

}

function closeNews(){

    document.getElementById("newsPopup").style.display="none";

}





// ================= SCHEDULE =================



const scheduleData={


Smith:"image/smithsched.jpg",

Poliwes:"image/poliwessched.jpg",

Tadiangan:"image/tadiangan-schedule.jpg",

"San Carlos":"image/sancarlos-schedule.jpg",

Bakakeng:"image/bakakengsched.jpg",

Victoria :"image/victoriasched.jpg"


};





function showSchedule(place){

    let image=scheduleData[place];

    if(!image){
        alert("Schedule image not found.");
        return;
    }

    document.getElementById("scheduleImage").src=image;

    document.getElementById("schedulePopup").style.display="flex";

}




function closeSchedule(){


    document.getElementById("schedulePopup").style.display="none";


}

