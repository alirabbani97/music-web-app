console.log("Hello");

//Intialized Variables
let songIndex = 0;
let audioElement = new Audio("./assets/audio/Cartoon - Why We Lose.mp3");
let playingGif = document.getElementById("playing-gif");

//Seeker Variables
let audioSeeker = document.getElementById("seeker");
let audioProgress = document.querySelector(".slider-progress");
let audioProgressUpdate = 0;

//Player Buttons init Variable
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextSong = document.getElementById("next-song");
const prevSong = document.getElementById("previous-song");

//Volume slider Variables
const volumeSlider = document.getElementById("volume-slider");
const volumeIcon = document.getElementById("volume-icon");

// Songs List
let songs = [
  {
    songName: "On & On",
    artistName: "Cartoon",
    filePath: "./assets/audio/Cartoon - On & On.mp3",
    coverPath: "./assets/covers/cartoon-on&on.jpg",
    songId: "0",
  },
  {
    songName: "Why We Lose",
    artistName: "Cartoon",
    filePath: "./assets/audio/Cartoon - Why We Lose.mp3",
    coverPath: "./assets/covers/whywelose.jpg",
    songId: "1",
  },
  {
    songName: "invincible",
    artistName: "DEAFKEV",
    filePath: "./assets/audio/DEAFKEV - Invincible.mp3",
    coverPath: "./assets/covers/deafkev-invincible.jpg",
    songId: "2",
  },
  {
    songName: "Blank",
    artistName: "Disfigure",
    filePath: "./assets/audio/Disfigure - Blank.mp3",
    coverPath: "./assets/covers/Blank-alt.webp",
    songId: "3",
  },
  {
    songName: "Sky High",
    artistName: "Elektronomia",
    filePath: "./assets/audio/Elektronomia - Sky High.mp3",
    coverPath: "./assets/covers/skyhigh.jpg",
    songId: "4",
  },
  {
    songName: "Heroes Tonight",
    artistName: "Janji",
    filePath: "./assets/audio/Janji - Heroes Tonight.mp3",
    coverPath: "./assets/covers/hereostonight.jpg",
    songId: "5",
  },
  {
    songName: "Cradles",
    artistName: "Sub Urban",
    filePath: "./assets/audio/Sub Urban - Cradles.mp3",
    coverPath: "./assets/covers/cradles.jpg",
    songId: "6",
  },
  {
    songName: "Mortals",
    artistName: "Warriyo",
    filePath: "./assets/audio/Warriyo - Mortals.mp3",
    coverPath: "./assets/covers/mortals.jpg",
    songId: "7",
  },
];

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

  document.getElementById("current-time").innerText = new Date(
    audioElement.currentTime * 1000
  )
    .toISOString()
    .substring(14, 19);
  // Music Duration Time

  document.getElementById("duration").innerText = new Date(
    audioElement.duration * 1000
  )
    .toISOString()
    .substring(14, 19);
});

//Song index Resetter
function songIndexReset() {
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  } else if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
}

//Playlist initialize variable
let playlist = Array.from(document.getElementsByClassName("song-card"));

// Playing Logic
function playLogic(playlistArr, songindex) {
  playerDetailsUpdate(songindex);
  activeMaker(playlistArr);
  if (audioElement.paused) {
    playButton.src = "./svg/pause.png";
    audioElement.src = songs[songindex].filePath;
    audioElement.play();
    playingGif.style.opacity = 1;
  } else {
    audioSeeker.value = 0;
    audioElement.pause();
    audioElement.src = songs[songindex].filePath;
    audioElement.play();
  }
}

//Playlist Populator
playlist.forEach((element, i) => {
  element.querySelector("#coverImage").src = songs[i].coverPath;
  element.querySelector(".song-number").innerText = songs[i].songId;
  element.querySelector(".song-name").innerText = songs[i].songName;
  element.querySelector(".artist-name").innerText = songs[i].artistName;

  // Songs play from playlist
  playlist[i].addEventListener("click", () => {
    songIndex = parseInt(songs[i].songId);
    playLogic(playlist, songIndex);
  });
});

//player bar details updater
function playerDetailsUpdate(index) {
  document.querySelector(".song-name.player").innerText = songs[index].songName;
  document.querySelector(".artist-name.player").innerText =
    songs[index].artistName;
  document.querySelector("#coverImagePlayer").src = songs[index].coverPath;
}

//Make Playlist song card active
function activeMaker(arrayElement) {
  for (var i = 0; i < arrayElement.length; i++) {
    arrayElement[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
/*************** Playing Controls *****************/

// Play/Pause Controls
playButton.addEventListener("click", () => {
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

//Next Song button
nextSong.addEventListener("click", () => {
  songIndex++;
  songIndexReset();
  console.log(songIndex);
  playLogic(playlist, songIndex);
});

//Previous Song button
prevSong.addEventListener("click", () => {
  songIndex--;
  songIndexReset();
  console.log(songIndex);
  playLogic(playlist, songIndex);
});

/*********  Slider Progress updater ************/

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

/*********  Volume Slider Functionality ************/

audioElement.volume = 1;
let volumeSelected;

volumeSlider.addEventListener("change", () => {
  audioElement.volume = volumeSlider.value / 100;
  volumeSelected = volumeSlider.value;
  if (audioElement.volume == 0) {
    volumeIcon.src = "./svg/volume-mute.png";
    isMuted = true;
  } else {
    volumeIcon.src = "./svg/volume-full.png";
    isMuted = false;
  }
});

// Volume Icon mute

let isMuted = false;

volumeIcon.addEventListener("click", () => {
  if (!isMuted) {
    audioElement.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.src = "./svg/volume-mute.png";
    isMuted = !isMuted
  }else{
    audioElement.volume = 1;
    volumeSlider.value = volumeSelected;
    volumeIcon.src = "./svg/volume-full.png";
    isMuted = !isMuted
  }
});
