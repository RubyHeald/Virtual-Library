// import the Media class:
const Media = require('./Media');

// create your Music class:
class Music{
    constructor(artist){
        super(title, year)
        this.artist = artist
        this.length = 180
    }
    static shortestAlbum(music) {
        if (music.length === 0) {
            return null;
    }
       
    let shortestAlbum = music[0]; 
    for (let i = 1; i < music.length; i++) {
        if (music[i].length > this.shortestAlbum.length) {
        shortestAlbum = music[i];
      }
    }
    return shortestAlbum;
        }
}
summary(){
    return `Title:${this.title},Artist:${this.artist},Year:${this.year},Genre:${this.year},Length:${this.lenght}`

}

// don't change below
module.exports = Music;
