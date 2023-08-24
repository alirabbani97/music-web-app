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
    songId: "01",
  },
  {
    songName: "Why We lose",
    artistName: "Cartoon",
    filePath: "./assets/audio/Cartoon - Why We Lose.mp3",
    coverPath: "./assets/covers/whywelose.jpg",
    songId: "02",
  },
  {
    songName: "invincible",
    artistName: "DEAFKEV",
    filePath: "./assets/audio/DEAFKEV - Invincible.mp3",
    coverPath: "./assets/covers/deafkev-invincible.jpg",
    songId: "03",
  },
  {
    songName: "Blank",
    artistName: "Disfigure",
    filePath: "./assets/audio/Disfigure - Blank.mp3",
    coverPath: "./assets/covers/Blank-alt.webp",
    songId: "04",
  },
  {
    songName: "Sky High",
    artistName: "Elektronomia",
    filePath: "./assets/audio/Elektronomia - Sky High.mp3",
    coverPath: "./assets/covers/skyhigh.jpg",
    songId: "05",
  },
  {
    songName: "Heroes Tonight",
    artistName: "Janji",
    filePath: "./assets/audio/Janji - Heroes Tonight.mp3",
    coverPath: "./assets/covers/hereostonight.jpg",
    songId: "06",
  },
  {
    songName: "Cradles",
    artistName: "Sub Urban",
    filePath: "./assets/audio/Sub Urban - Cradles.mp3",
    coverPath: "./assets/covers/cradles.jpg",
    songId: "07",
  },
  {
    songName: "Mortals",
    artistName: "Warriyo",
    filePath: "./assets/audio/Warriyo - Mortals.mp3",
    coverPath: "./assets/covers/mortals.jpg",
    songId: "08",
  },
];

//Playlist Populator and Play from Playlist
playlist = Array.from(document.getElementsByClassName("song-card"));
playlist.forEach((element, i) => {
  element.querySelector("#coverImage").src = songs[i].coverPath;
  element.querySelector(".song-number").innerText = songs[i].songId;
  element.querySelector(".song-name").innerText = songs[i].songName;
  element.querySelector(".artist-name").innerText = songs[i].artistName;

  // Songs play from playlist
  playlist[i].addEventListener("click", (e) => {
    if (audioElement.paused) {
      document.querySelector('.song-name.player').innerText = songs[i].songName;
      
      playlist[i].classList.add = " .active";
      playButton.src = "./svg/pause.png";
      audioElement.src = songs[i].filePath;
      audioElement.play();
      playingGif.style.opacity = 1;
      anotherPlaying = true;
    } else {
      audioElement.pause();
      audioElement.src = songs[i].filePath;
      audioElement.play();
    }
  });
});

//Playing Controls

playButton.addEventListener("click", (e) => {
  if (audioElement.paused) {
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
audioElement.addEventListener("timeupdate", () => {
  if (audioElement.currentTime == audioElement.duration) {
    playButton.src = "./svg/play.png";
    audioElement.pause();
    playingGif.style.opacity = 0;
    audioSeeker.value = 0;
  }
  // Progress bar Updater
  audioSeeker.value = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  audioProgress.style.width = `${audioSeeker.value}%`;

  // Music elapsed Time

  document.getElementById("current-time").innerText = parseInt(
    audioElement.currentTime
  );

  // Music Duration Time

  document.getElementById("duration").innerText = parseInt(
    audioElement.duration
  );
});

/* Slider Progress updater */

//Seeker Progress
audioSeeker.addEventListener("input", (e) => {
  let widthProgress = parseInt((audioSeeker.value * 100) / 100);
  audioProgress.style.width = `${widthProgress}%`;
});

// Slider/seeker click Change music time influence
audioSeeker.addEventListener("change", (e) => {
  audioElement.currentTime = parseInt(
    (audioSeeker.value * audioElement.duration) / 100
  );
});
