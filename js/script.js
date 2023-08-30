//Intialized Variables
let prevSongIndex = 0;
let songIndex = 1;
let audioElement = new Audio("./assets/audio/Cartoon - Why We Lose.mp3");
let playingGif = document.getElementById("playing-gif");
const popularArtistListCarousel = document.querySelector(
  ".popular-artists-carousel.carousel"
);

//Seeker Variables
let audioSeeker = document.getElementById("seeker");
let audioProgress = document.querySelector(".slider-progress");
let audioProgressUpdate = 0;

//Player Buttons init Variable
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextSong = document.getElementById("next-song");
const prevSong = document.getElementById("previous-song");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");

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

// Popular Album list
let popularAlbumsList = [{ albumName: "", artistName: "", coverPath: "" }];
//Popular Artist List
let popularArtistList = [
  { artistName: "Bruno Mars", imagePath: "./assets/img/artists/bruno.jpg" },
  { artistName: "Rihanna", imagePath: "./assets/img/artists/rihanna.jpg" },
  { artistName: "Lady Gaga", imagePath: "./assets/img/artists/lady-gaga.webp" },
  { artistName: "Beyonce", imagePath: "./assets/img/artists/beyonce.jpg" },
  { artistName: "Coldplay", imagePath: "./assets/img/artists/coldplay.jpg" },
  {
    artistName: "Tame Impala",
    imagePath: "./assets/img/artists/tame-impala.webp",
  },
  {
    artistName: "Olivia Rodrigo",
    imagePath: "./assets/img/artists/olivia-rodrigo.jpg",
  },
  { artistName: "Beatles", imagePath: "./assets/img/artists/beatles.jpg" },
  { artistName: "Bappi Lahiri", imagePath: "./assets/img/artists/bappi.jpg" },
  { artistName: "Bruno Mars", imagePath: "./assets/img/artists/bruno.jpg" },
  { artistName: "Rihanna", imagePath: "./assets/img/artists/rihanna.jpg" },
  { artistName: "Lady Gaga", imagePath: "./assets/img/artists/lady-gaga.webp" },
  { artistName: "Beyonce", imagePath: "./assets/img/artists/beyonce.jpg" },
];

//Populate Popular Artist
/* let artistId = 0; */

let artistCardArr = [];

for (i = 0; i < popularArtistList.length; i++) {
  let artistCard = document.createElement("div");
  artistCard.className = "artist card";
  artistCard.innerHTML = `<div class= "artist-img" id = "artist${[
    i,
  ]}"><a href="#"
 ><img
   src="${popularArtistList[i].imagePath}"
   alt="a picture of ${popularArtistList[i].artistName}"
   width="120px"
/></a></div><h4>${popularArtistList[i].artistName}</h4>`;
  artistCardArr.push(artistCard);

  popularArtistListCarousel.appendChild(artistCardArr[i]);
}

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

/**** Playing Logic *****/

function playLogic(songindex) {
  playerDetailsUpdate(songindex);
  songFile = songs[songindex].filePath;
  audioElement.src = songFile;

  if (audioElement.paused) {
    playButton.src = "./svg/pause.png";
    audioElement.play();
    playingGif.style.opacity = 1;
  } else {
    audioSeeker.value = 0;
    audioElement.pause();
    audioElement.play();
  }
}

//Playlist Populator
playlist.forEach((element, i) => {
  element.querySelector("#coverImage").src = songs[i].coverPath;
  element.querySelector(".song-number").innerText =
    parseInt(songs[i].songId) + 1;
  element.querySelector(".song-name").innerText = songs[i].songName;
  element.querySelector(".artist-name").innerText = songs[i].artistName;

  // Songs play from playlist
  playlist[i].addEventListener("click", () => {
    songIndex = parseInt(songs[i].songId);
    playLogic(songIndex);
    playlistSelectActiveMaker(playlist);
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
function playlistSelectActiveMaker(arrayElement) {
  for (var i = 0; i < arrayElement.length; i++) {
    arrayElement[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      console.log(this.className);

      current[0].className = current[0].className.replace(" active", "");
      console.log(this.className);

      this.className += " active";
      console.log(this.className);
    });
  }
}

//Make Playlist song card active
function currentSongActiveMaker() {
  playlist[prevSongIndex].className = playlist[prevSongIndex].className.replace(
    " active",
    ""
  );
  playlist[songIndex].className += " active";
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

//Shuffle Function
let isShuffled = false;

shuffleBtn.addEventListener("click", () => {
  if (!isShuffled) {
    shuffleBtn.src = "./svg/arrows-cross.png";
    isShuffled = !isShuffled;
  } else {
    shuffleBtn.src = "./svg/shuffle-off.png";
    isShuffled = !isShuffled;
  }
});
console.log(`Shuffle: ${isShuffled}`);

// Repeat all or one Function
let isRepeatAll = true;

repeatBtn.addEventListener("click", () => {
  if (isRepeatAll) {
    repeatBtn.src = "./svg/repeat-one.png";
    isRepeatAll = !isRepeatAll;
    console.log(`repeat ${isRepeatAll}`);
  } else {
    repeatBtn.src = "./svg/arrows-repeat.png";
    isRepeatAll = !isRepeatAll;
    console.log(`repeat ${isRepeatAll}`);
  }
});
console.log(`Repeat All: ${isRepeatAll}`);

//Next Song button
nextSong.addEventListener("click", () => {
  if (isShuffled) {
    let songShuffled;
    songShuffled = Math.floor(Math.random() * songs.length);
    songIndex = songShuffled;
  }
  prevSongIndex = songIndex;
  songIndex++;
  songIndexReset();
  currentSongActiveMaker();
  playLogic(songIndex);
});

//Previous Song button
prevSong.addEventListener("click", () => {
  if (isShuffled) {
    let songShuffled;
    songShuffled = Math.floor(Math.random() * songs.length);
    songIndex = songShuffled;
  }
  prevSongIndex = songIndex;
  songIndex--;
  songIndexReset();
  currentSongActiveMaker();
  playLogic(songIndex);
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

audioElement.volume = 0.3;
volumeSlider.value = 30;
let volumeSelected;
let isMuted = false;

volumeSlider.addEventListener("change", () => {
  audioElement.volume = volumeSlider.value / 100;
  volumeSelected = volumeSlider.value;
  if (audioElement.volume == 0) {
    volumeIcon.src = "./svg/volume-mute.png";
    volumeSelected = 30;
    isMuted = true;
  } else {
    volumeIcon.src = "./svg/volume-full.png";
    isMuted = false;
  }
});

// Volume Icon mute
volumeIcon.addEventListener("click", () => {
  if (!isMuted) {
    audioElement.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.src = "./svg/volume-mute.png";
    isMuted = !isMuted;
  } else {
    audioElement.volume = volumeSelected / 100;
    volumeSlider.value = volumeSelected;
    volumeIcon.src = "./svg/volume-full.png";
    isMuted = !isMuted;
  }
});

// Listen to timeupdate
audioElement.addEventListener("timeupdate", () => {
  if (
    audioElement.currentTime == audioElement.duration &&
    isRepeatAll == true &&
    isShuffled == false
  ) {
    prevSongIndex = songIndex;
    songIndex++;
    songIndexReset();
    currentSongActiveMaker();
    playLogic(songIndex);
  } else if (
    audioElement.currentTime == audioElement.duration &&
    isRepeatAll == true &&
    isShuffled == true
  ) {
    prevSongIndex = songIndex;
    let songShuffled;
    songShuffled = Math.floor(Math.random() * songs.length);
    songIndex = songShuffled;
    currentSongActiveMaker();
    playLogic(songIndex);
  } else if (audioElement.currentTime == audioElement.duration) {
    playLogic(songIndex);
  }

  // Progress bar Updater
  audioSeeker.value = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  audioProgress.style.width = `${audioSeeker.value}%`;
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
