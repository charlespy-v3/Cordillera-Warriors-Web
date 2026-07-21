console.log("script.js started");
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
console.log("Slider loaded");




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
console.log("Swipe loaded");



// ================= NEWS =================


const news = {


'2ndcw':{
image:"Main/image/2ndcw.jpg",
title:"2nd Cordillera Warriors Taekwondo Championship",
description:`
<p><strong>Description:</strong><br>
Gear up for one of the most anticipated martial arts events in Northern Luzon! The 2nd Cordillera Warriors Taekwondo Championship gathers athletes from across the region to showcase their skills, discipline, and competitive spirit. Whether you are competing or cheering from the stands, experience top-tier athletic excellence across three main categories: Poomsae (Forms), Sparring (Kyorugi), and Freestyle.</p>

<p><strong>📅 Date:</strong> November 28, 2026</p>
<p><strong>📍 Location:</strong> Baguio City</p>
<p><strong>🥋 Categories:</strong> Poomsae | Sparring | Freestyle</p>

<p><strong>🏆 Motto:</strong><br>
"One Spirit. One Warrior. One Cordillera. Rise. Compete. Inspire."</p>

<p><strong>📞 Contact:</strong> 09930243424</p>
<p><strong>📧 Email:</strong> aarndia@gmail.com</p>
`
},

miguel:{
image:"Main/image/5thsanmiguel.jpg",
title:"5th San Miguel Taekwondo Championship",
description:`
<p><strong>Description:</strong><br>
The annual battle for glory returns! San Miguel Taekwondo Training Center proudly presents the 5th San Miguel Taekwondo Championship. Athletes will test their speed, strategy, and sportsmanship for a chance to win cash prizes and overall championship trophies. Step onto the mat and demonstrate discipline, respect, courtesy, and integrity!</p>

<p><strong>📅 Date:</strong> September 19, 2026</p>
<p><strong>📍 Venue:</strong> New San Miguel Gymnasium</p>

<p><strong>💰 Overall Cash Prizes:</strong></p>
<ul>
<li>🥇 Champion — ₱10,000</li>
<li>🥈 1st Runner-Up — ₱5,000</li>
<li>🥉 2nd Place — ₱3,000</li>
<li>🏅 3rd Place — ₱2,000</li>
</ul>

<p><strong>⭐ Core Values:</strong></p>
<ul>
<li>Discipline</li>
<li>Respect</li>
<li>Courtesy</li>
<li>Integrity</li>
</ul>
`
},

promo:{
image:"Main/image/cwpromo.jpg",
title:"Cordillera Warriors Taekwondo Promotion Examination",
description:`
<p><strong>Description:</strong><br>
Take the next major step in your martial arts journey! The Cordillera Warriors Taekwondo Promotion Examination is open to all active members across all rank levels looking to test their progress, refine their forms, and advance to their next belt rank under official Kukkiwon-aligned standards.</p>

<p><strong>📅 Date & Time:</strong> Sunday, August 30, 2026 | 8:00 AM</p>
<p><strong>📍 Venue:</strong> Cordillera Warriors Training Center</p>
<p><strong>👥 Who Can Join:</strong> All Cordillera Warriors Taekwondo members (All ranks welcome)</p>

<p><strong>✅ Requirements:</strong></p>
<ul>
<li>🥋 Full Training Uniform (Dobok)</li>
<li>🎗 Current Belt</li>
<li>💪 Good Attitude & Determination</li>
</ul>

<p><strong>📞 Contact:</strong> 0906 123 4567</p>
<p><strong>📘 Facebook:</strong> Cordillera Warriors Taekwondo</p>
`
},

interchapter:{
image:"Main/image/interchapter.jpg",
title:"Cordillera Warriors Interchapter Taekwondo Championship",
description:`
<p><strong>Description:</strong><br>
Unite, compete, and represent your chapter! The Cordillera Warriors Interchapter Taekwondo Championship is open to all affiliated chapters and invited teams. Bring your best team spirit to compete for medals, certificates, and overall recognition in both Sparring and Poomsae.</p>

<p><strong>📅 Date:</strong> Sunday, September 27, 2026</p>
<p><strong>📍 Venue:</strong> To Be Announced</p>

<p><strong>🏅 Competition Highlights:</strong></p>
<ul>
<li>🥇 Medals & Certificates for winners</li>
<li>🤝 Focus on sportsmanship, fair play, and discipline</li>
<li>👥 Open to all chapters and guest teams</li>
</ul>

<p><strong>📞 Inquiries:</strong> 09930243424</p>
<p><strong>📘 Facebook:</strong> Cordillera Warriors Taekwondo</p>
`
},

poomsea:{
image:"Main/image/poomseaseminar.jpg",
title:"WTMA Philippines Poomsae Seminar",
description:`
<p><strong>Description:</strong><br>
Elevate your technical mastery, precision, and form under world-class guidance! Organized by the World Taekwondo Masters Association Philippines (WTMAP) in partnership with Kukkiwon, this intensive seminar is designed for practitioners, coaches, and athletes aiming to perfect their standard Poomsae techniques.</p>

<p><strong>📅 Date:</strong> Saturday, August 8, 2026</p>
<p><strong>📍 Location:</strong> San Miguel, Bulacan</p>

<p><strong>📚 Seminar Highlights:</strong></p>
<ul>
<li>🥋 Poomsae Fundamentals and Advanced Techniques</li>
<li>📖 Official Kukkiwon Standard Poomsae Training</li>
<li>⚡ Focus on precision, balance, timing, and power execution</li>
<li>🏅 Certificate of Participation awarded to all attendees</li>
</ul>

<p><strong>📞 Registration:</strong> 0917 123 4567</p>
<p><strong>📘 Facebook:</strong> WTMA Philippines Official</p>
`
},

royal:{
image:"Main/image/royal.jpg",
title:"14th Royal Princess Cup Taekwondo Championship",
description:`
<p><strong>Description:</strong><br>
Representing a bridge of cultural exchange, friendship, and athletic excellence, the 14th Royal Princess Cup Taekwondo Championship brings together elite competitors across Asia. Experience a prestigious international competition celebrating K-Culture, world-class Taekwondo, and regional unity.</p>

<p><strong>📅 Date:</strong> Saturday, October 24, 2026</p>
<p><strong>📍 Venue:</strong> Mahidol University (Gymnasium), Thailand</p>

<p><strong>🌏 Theme:</strong><br>
K-Culture • Taekwondo • Peace & Friendship — Uniting Asia, Inspiring the Future!</p>

<p><strong>🏢 Organizer:</strong> Royal Princess Cup Organizing Committee</p>
`
}

};



function openNewsCard(button){

    let card = button.closest(".news-card");
    let newsID = card.dataset.news;
    let newsInfo = news[newsID];

    if(!newsInfo){
        alert("News not found.")
        return;
    }

    document.getElementById("popupImage").src = newsInfo.image;
    document.getElementById("popupTitle").textContent = newsInfo.title;
    document.getElementById("popupText").innerHTML = newsInfo.description;

    document.getElementById("newsPopup").style.display = "block";
}
function closeNews(){

    document.getElementById("newsPopup").style.display="none";

}

console.log("News loaded");  



// ================= SCHEDULE =================



const scheduleData={


Smith:"Main/image/smithsched.jpg",
'Doña Aurora':"Main/image/aurorasched.jpg",
Poliwes:"Main/image/poliwessched.jpg",
Idogan:"Main/image/idogansched.jpg",
Tadiangan:"Main/image/tadiangansched.jpg",
Bakakeng:"Main/image/bakakengsched.jpg",
Victoria:"Main/image/victoriasched.jpg"

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

console.log("Schedule loaded");