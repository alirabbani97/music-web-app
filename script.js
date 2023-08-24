console.log("Hello Listeners!");

//Intialized Variables
let songIndex = 0;
let audioElement = new Audio("./assets/audio/Cartoon - Why We Lose.mp3");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let playingGif = document.getElementById("playing-gif");
let audioSeeker = document.getElementById("seeker");
let audioProgress = document.querySelector(".slider-progress");
let audioProgressUpdate = 0;

//Populate Songs LIst
// Songs List
let songs = [
  {
    songName: "On & On",
    artistName: "Cartoon",
    filePath: "./assets/audio/Cartoon - On & On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Why We lose",
    artistName: "Cartoon",
    filePath: "./assets/audio/Cartoon - Why We Lose.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "invincible",
    artistName: "DEAFKEV",
    filePath: "./assets/audio/DEAFKEV - Invincible.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Blank",
    artistName: "Disfigure",
    filePath: "./assets/audio/Disfigure - Blank.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Sky High",
    artistName: "Elektronomia",
    filePath: "./assets/audio/Elektronomia - Sky High.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Heroes Tonight",
    artistName: "Janji",
    filePath: "./assets/audio/Janji - Heroes Tonight.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Cradles",
    artistName: "Sub Urban",
    filePath: "./assets/audio/Sub Urban - Cradles.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "Mortals",
    artistName: "Warriyo",
    filePath: "./assets/audio/Warriyo - Mortals.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
];

// Event Listeners

//Playing Controls

playButton.addEventListener("click", (e) => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    playButton.src = "./svg/pause.png";
    audioElement.play();
    playingGif.style.opacity = 1;
  } else {
    playButton.src = "./svg/play.png";
    audioElement.pause();
    playingGif.style.opacity = 0;
  }
});

// Listen to timeupdate
audioElement.addEventListener("timeupdate", (e) => {

  audioSeeker.value = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
  audioProgress.style.width = `${audioSeeker.value}%`;
  document.getElementById('current-time').innerText= parseInt(audioElement.currentTime);
  document.getElementById('duration').innerText= parseInt(audioElement.duration);
});

/* Slider Progress updater */

//Seeker Progress
audioSeeker.addEventListener("input", (e) => {
  let widthProgress = parseInt((audioSeeker.value * 100) / 100);
  audioProgress.style.width = `${widthProgress}%`;
});


