let currentIndex = 0;
const images = [
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg",
    "image-5.jpg",
    "image-6.jpg",
    "image-7.jpg",
    "image-8.jpg",
    "image-9.jpg",
    "image-10.jpg",
    "image-11.jpg",
    "image (2).jpg",
    "image (3).jpg",
    "image (4).jpg",
    "image (5).jpg",
    "image (6).jpg",
    "image (7).jpg",
    "image (8).jpg",
    "image (9).jpg"
];
const messages = [
    "You + Me = Forever Love ❤️", 
    "You're my favorite reason to smile 😊💖", 
    "Every moment with you is magical ✨❤️", 
    "You’re the melody to my heart’s song 🎶💘", 
    "Loving you is my favorite adventure 🌍💑",
    "You make my world brighter every day ☀️💖", 
    "With you, every day feels like Valentine’s Day 💝", 
    "You’re my happy place, my forever home 🏡💕", 
    "You are the sweetest part of my life 🍫💞", 
    "My heart belongs to you, today and always 💓",
    "Holding your hand feels like holding the world 🌎❤️",
    "You are the love story I always dreamed of 📖💖",  
    "You're my forever and always, no matter what 💍💗", 
    "Falling for you was the best decision of my life 💕", 
    "You complete my heart in every way ❤️🧩",
    "You're not just my love, you're my everything 💖✨", 
    "Your love is my greatest treasure 💎💘", 
    "With you, love is effortless and beautiful 💕", 
    "I loved you yesterday, I love you today, and I'll love you forever 💖💍"
];

function updateCard(direction) {
    const card = document.getElementById("card");
    card.classList.remove("fade-in");
    card.classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("cardImage").src = images[currentIndex];
        document.getElementById("cardMessage").innerText = messages[currentIndex];
        card.classList.remove("fade-out");
        card.classList.add("fade-in");
    }, 500);
}
function nextCard() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCard();
}
function prevCard() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCard();
}
function openGift() {
    document.getElementById("messagePopup").style.display = "block";
    document.getElementById("balloons").style.display = "block";
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        balloon.style.animationDelay = Math.random() * 2 + "s";
        document.getElementById("balloons").appendChild(balloon);
    }
    setTimeout(() => {
        document.getElementById("messagePopup").style.display = "none";
        document.getElementById("balloons").innerHTML = "";
        document.getElementById("balloons").style.display = "none";
    }, 5000);
}

function yes() {
    const sections = document.getElementsByClassName("section");
    const yesno = document.getElementsByClassName("yes-no");
    const audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
    // Loop through the "yes-no" elements and hide them
    for (let i = 0; i < yesno.length; i++) {
        yesno[i].style.display = "none";
    }
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";  // Show all sections
        // Show all sections
        
    }
}

function no() {
    const audio = document.getElementById("audioPlayer");
    document.getElementById("please").style.display = "block";  // Corrected
    audio.src = "ninja.mp3";
    audio.play();
}

updateCard();
