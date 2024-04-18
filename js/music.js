class Music{
    constructor(title, singer, img,  file){
        this.title = title,
        this.img = img,
        this.singer = singer,
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer
    }
}

const musicList = [
    new Music("Benimle Kayboldun", "Kaan Boşnak", "1.jpeg", "1.mp3"),
    new Music("Bu da Geçermi Sevgilim", "Yalın", "2.jpeg", "2.mp3"),
    new Music("Aramızda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3")
]
