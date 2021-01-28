function titleize(names, printCallback) {
    titleized = names.map(name => `Mx, ${name} Jingleheimer Schmidt`);
    printCallback(titleized)
}

function printCallback(arr) {
    arr.forEach( ele => {
        console.log(ele);
    });
}

titleize(["Mary", "Brian", "Leo"], printCallback)

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} goes 'phrRRRRRRRR!!!!!`)
}

Elephant.prototype.grow = function () {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}


//lets use a monkey patch to the Array class to select random elements from that array

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}
Elephant.prototype.play = function () {
    console.log(`${this.name} is ${this.tricks.sample()}`)
}

const Jona = new Elephant("Jona", 80, ["painting a picture", "rolling on a ball"])

console.log(Jona)

Jona.trumpet()

Jona.grow()

console.log(Jona)

Jona.addTrick("Stomping on human")

console.log(Jona);

Jona.play();

Jona.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by`)
};

herd.forEach( ele => {
    ele.paradeHelper(ele)
})