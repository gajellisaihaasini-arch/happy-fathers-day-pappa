let photos = [
"images/photo1.png",
"images/photo2.png",
"images/photo3.png",
];

let current = 0;
function openLetter(){

    const circle = document.getElementById("circle");

    circle.classList.add("active");

    setTimeout(()=>{

        document.querySelector(".hero").style.display="none";

        document.getElementById("letter").style.display="flex";

        circle.classList.remove("active");

    },1000);

}

function showGallery(){

    const circle = document.getElementById("circle");

    circle.classList.add("active");

    setTimeout(()=>{

        document.getElementById("letter").style.display="none";

        document.getElementById("gallery").style.display="flex";

        circle.classList.remove("active");

    },1000);

}

function showVoice(){

    const circle = document.getElementById("circle");

    circle.classList.add("active");

    setTimeout(()=>{

        document.getElementById("gallery").style.display="none";

        document.getElementById("voice").style.display="flex";

        circle.classList.remove("active");

    },1000);

}

function showFinal(){

    const circle = document.getElementById("circle");

    circle.classList.add("active");

    setTimeout(()=>{

        document.getElementById("voice").style.display="none";

        document.getElementById("final").style.display="flex";

        circle.classList.remove("active");

        launchConfetti();

    },1000);

}






function nextPhoto(){

current++;

if(current >= photos.length){
current = 0;
}

const photo = document.getElementById('memoryPhoto');

photo.style.transform='rotateY(90deg)';

setTimeout(()=>{

photo.src = photos[current];

photo.style.transform='rotateY(0deg)';

},300);

}



function createHeart(){

    const heart =
    document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    (15+Math.random()*20)+"px";

    document.querySelector(".hearts")
    .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,700);
const message = `
ప్రియమైన నాన్నగారికి ❤️

మీ ప్రేమ,
మీ కష్టం,
మీ త్యాగం...

మా జీవితాన్ని అందంగా మార్చాయి.

హ్యాపీ ఫాదర్స్ డే నాన్నా ❤️
`;

let i=0;

function startTyping(){

    const area =
    document.getElementById("typingLetter");

    area.innerHTML="";

    const interval =
    setInterval(()=>{

        area.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){
            clearInterval(interval);
        }

    },50);
}
function launchConfetti(){

    confetti({
        particleCount:250,
        spread:180
    });

}