let cat = {
    purr: function() {
        console.log("meow")
    },
    purrMore: function() {
        for (let i = 0; i < 10; i++) {
            this.purr();
        }
    }
}

cat.purr();
cat.purrMore();

var purLots = cat.purrMore;

// purLots();

function times(num, fun) {
    for (let i = 0; i < num; i++) {
        fun();
    }
}

const cat1 = {
    age: 5,

    ageOneYear: function() {
        this.age += 1;
    }
};


console.log(times(10, cat1.ageOneYear));
console.log(cat1.ageOneYear());

times(10, function() {
    console.log(cat1.ageOneYear());
});

//works the same as the closure on line 37
console.log(times(10, cat1.ageOneYear.bind(cat1)));

function SumCalculator() {
    // scope 0
    this.sum = 0;
}


//this does not get captured in a closure, it gets reset every time a function is called
SumCalculator.prototype.addNumbers = function (numbers) {
    // scope 1
    // conventionally sumCalculator is called either that or self
    const sumCalculator = this; //we want to grab 'this' from scope 1 to be used in scope 2 since this is in scope 2 is different
    numbers.forEach(function(number) {
        // scope 2
        this.sumCalculator += number; //nooooooo!!
    });

    return this.sum;
};

function Cat(name) {
    this.name = name;
    this.toys = ['string', 'ball', 'balloon'];
};

// Cat.prototype.play = function meow() {
//     this.toys.forEach(function (toy){
//         console.log(`${this.name} plays with ${toy}`);
//     })
// };

Cat.prototype.play = function meow() {
    this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};

const garfield = new Cat('garfield');
garfield.play();

const halfMyAge = myAge => myAge / 2;

console.log(halfMyAge(30) === 15);