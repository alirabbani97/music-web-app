console.log("Hello Listeners!");

//Intialized Variables
let songIndex = 0;
let audioElement = new Audio("./assets/audio/Cartoon-On&On.mp3");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let playingGif = document.getElementById("playing-gif");
let audioSeeker = document.getElementById("seeker");

// Songs List
let songs = [
  {
    songName: "Cartoon-On&On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "WhyWelose",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "invincible",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "On$On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "On$On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "On$On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "On$On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
  },
  {
    songName: "On$On",
    filePath: "./assets/audio/Cartoon-On&On.mp3",
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
audioSeeker.addEventListener("timeupdate", (e) => {
  console.log("timeupdate");
});
