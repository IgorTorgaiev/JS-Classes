// Class Usage

class Sports {
    constructor(sports, computer, preferred) {
        this.sports = sports;
        this.computer = computer;
        this.preferred = preferred;
    }
}
theSports = new Sports("Football", "Soccer", "Checkers");
document.getElementById("theGame").innerHTML = 'Though I like playing ' + theSports.sports + ', I would rather prefer ' + theSports.preferred + '. And, sometimes I like playing ' + theSports.computer + ' just for fun.';