const container = document.querySelector(".container")
const image = document.querySelector("#music-image")
const title = document.querySelector("#music-details .title")
const singer = document.querySelector("#music-details .singer")
const prev = document.querySelector("#controls #prev")
const play = document.querySelector("#controls #play")
const next = document.querySelector("#controls #next")
const audio = document.querySelector("#audio")

const player = new MusicPlayer(musicList);


// let music = player.getMusic()
// console.log(music.getName())
// player.next() 

// music = player.getMusic()
// console.log(music.getName())
// player.next()

// music = player.getMusic()
// console.log(music.getName())
// player.next()

// music = player.getMusic()
// console.log(music.getName())
// player.next()

// music = player.getMusic()
// console.log(music.getName())
// player.next()

// music = player.getMusic()
// console.log(music.getName())
// player.next()

window.addEventListener("load", () =>{
    let music = player.getMusic();
    disPlayMusic(music)
})

function disPlayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file
}
play.addEventListener("click", () => {
    let playPause = container.classList.contains("playing")
    playPause ? pauseMusic() : playMusic() 
})
next.addEventListener("click", () => {
    nextMusicShow()
})   

prev.addEventListener("click", () => {
    prevMusicShow()
}) 

function prevMusicShow(){
    player.prev();
    let music = player.getMusic()
    disPlayMusic(music)
    pauseMusic()
}

function nextMusicShow(){
    player.next();
    let music = player.getMusic()
    disPlayMusic(music)
    pauseMusic()
}
function playMusic(){
    container.classList.add("playing")
    play.classList = "fa-solid fa-pause"
    audio.play()
}

function pauseMusic() {
    container.classList.remove("playing")
    play.classList = "fa-solid fa-play"
    audio.pause()
}
// const musicPlayer = new MusicPlayer(musicList)
// console.log(musicPlayer.getMusicName())







