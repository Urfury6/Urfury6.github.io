/*==================================================
        MUHAMMAD FURQAN PORTFOLIO JS
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{



/*==================================================
            SMOOTH TYPING EFFECT
==================================================*/

const typing = document.getElementById("typing-text");


if(typing){


const texts = [

    "Computer Systems Engineer",

    "Embedded Systems Developer",

    "Web Developer",

    "C++ Programmer",

    "Cybersecurity Learner"

];


let textIndex = 0;

let charIndex = 0;

let deleting = false;



function typingEffect(){


    const current = texts[textIndex];



    if(!deleting){


        typing.textContent =
        current.substring(0,charIndex);


        charIndex++;


        if(charIndex > current.length){


            deleting = true;


            setTimeout(
                typingEffect,
                1200
            );


            return;


        }


    }


    else{


        typing.textContent =
        current.substring(0,charIndex);


        charIndex--;



        if(charIndex < 0){


            deleting = false;


            charIndex = 0;


            textIndex++;



            if(textIndex >= texts.length){

                textIndex = 0;

            }


        }


    }



    setTimeout(

        typingEffect,

        deleting ? 50 : 100

    );


}



typingEffect();


}




/*==================================================
            SMOOTH SCROLL
==================================================*/


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
e=>{


let target =
document.querySelector(
link.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});





/*==================================================
            ACTIVE NAV LINK
==================================================*/


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".nav-links a");



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


let top =
section.offsetTop-180;


if(scrollY>=top){

current =
section.id;

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href")
==
"#"+current
){

link.classList.add("active");

}


});


});






/*==================================================
            NAVBAR EFFECT
==================================================*/


const header =
document.querySelector("header");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>50){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}


});







/*==================================================
            SCROLL REVEAL
==================================================*/


const revealItems =
document.querySelectorAll(
".section-card,\
.project-card,\
.skill,\
.certificate-card,\
.timeline-item,\
.stat-card"
);



const revealObserver =
new IntersectionObserver(
entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:.15

});



revealItems.forEach(item=>{


item.classList.add("hidden");


revealObserver.observe(item);


});







/*==================================================
            PROJECT IMAGE CLICK ZOOM
==================================================*/


document.querySelectorAll(
".project-image"
)
.forEach(image=>{


image.addEventListener(
"click",
()=>{


window.open(
image.src,
"_blank"
);


});


});







/*==================================================
            CERTIFICATE BUTTON EFFECT
==================================================*/


document.querySelectorAll(
".certificate-btn"
)
.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


btn.style.transform=
"scale(.95)";


setTimeout(()=>{


btn.style.transform=
"";


},200);


});


});







/*==================================================
            STAT COUNTER
==================================================*/


const stats =
document.querySelectorAll(
".stat-card h2"
);


let counted=false;


function counterStart(){


if(counted)
return;


counted=true;



stats.forEach(stat=>{


let value =
stat.innerText;


let number =
parseFloat(value);



let suffix =
value.replace(
number,
""
);



let count=0;


let speed =
number/60;



let timer =
setInterval(()=>{


count+=speed;


if(count>=number){


stat.innerText =
number+suffix;


clearInterval(timer);


}

else{


stat.innerText =
count.toFixed(
number%1!==0 ? 2 : 0
)+suffix;


}


},25);



});


}




const statSection =
document.querySelector(".hero-stats");


if(statSection){


window.addEventListener(
"scroll",
()=>{


let position =
statSection.getBoundingClientRect()
.top;


if(position<
window.innerHeight){

counterStart();

}


});


}






/*==================================================
            FOOTER YEAR
==================================================*/


const footer =
document.querySelector("footer p");


if(footer){


footer.innerHTML =
footer.innerHTML.replace(
"2026",
new Date().getFullYear()
);


}


});

/*==================================================
            LIGHT / DARK MODE
==================================================*/

const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

}else{

    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        localStorage.setItem("theme","light");

    }else{

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        localStorage.setItem("theme","dark");

    }

});