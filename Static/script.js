// Static

class Book {
    constructor(page) {
        this.page = page;
    }
    static read() {
        return "Open the book on the page 101";
    }
}
let theBook = new Book("Robinson Crusoe");
document.getElementById("demo").innerHTML = Book.read();

// Now, let's use a variable (let) inside the static

class Show {
    constructor (exhibition) {
        this.exhibition = exhibition;
    }
    static wathc(x) {
        return "Let's go to the " + x.exhibition;
    }
}
let theShow = new Show("Wrestling");
document.getElementById("demo1").innerHTML = Show.wathc(theShow);