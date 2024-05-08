
class Media{
   static totalMediaCount = 0
    constructor (title, year, genre){
        this.title = title
        this.year = year
        this.genre = genre
        Media.totalMediaCount =+1
    }
summary(){
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
}
}
const music = new Media('Abbey Road', 1969, 'Rock')
console.log(music.summary())

module.exports = Media;

