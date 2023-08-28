const carousel = document.querySelector(".carousel");
const playlist = document.querySelector(".song-cards")

let isDragging = false;

const dragStart = () =>{
    isDragging = true;

}

const dragStop = () =>{
    isDragging = false;

}
const draggingHorizontal = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX * - 1;
} 

const draggingVertical = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
} 

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", draggingHorizontal);
carousel.addEventListener('mouseup', dragStop)

/* 
playlist.addEventListener("mousedown", dragStart);
playlist.addEventListener("mousemove", draggingVertical); */