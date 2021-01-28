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

function sayHelloNTimes(name, n) {

    //greet is a closure. it captures variables for us (like name).
    function greet() {
        console.log( `Hi, ${name}!`)
    }

    for (let i = 0; i < n; i++) {
        greet()
    }
}

sayHelloNTimes("Bob", 3);
sayHelloNTimes("Sally", 6)

//free variables can be modified by closures. Consider the following
function sum(nums) {
    //count is a free variable in this example that function addNum closed around
    let count = 0;

    function addNum(num) {
        count += num;
    }

    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i]);
    }

    return count;
}

console.log(sum([1,3,5]));

//we can use closures to pass down arguments to helper functions without explicitly listing them as arguments:

function isPalindrome(string) {

    function reverse() {
        return string.split('').reverse().join('')
    }

    return string === reverse();
}

//Another major use of closures is to create private states:

function createCounter() {
    let count = 0;
    // here ++count means increment the value of the count variable by 1 and then the count variable is evaluated in the statement.
    // count++ means the count variable is evaluated in the statement and then the value is incremented by 1. If we used count++ our counter would be off by 1.
    return () => ++count;
}

function Counter () {
    this._count = 0;
}
  
Counter.prototype.fire = function () {
    this._count += 1;
    return this._count;
}
  
let counter = new Counter();
console.log(counter.fire()); // 1
counter.fire(); // 2
console.log(counter._count) // 2
counter._count = 0 // 0 (this works);

console.log(counter._count)


//this is a constructor function, need to initialize capitalized camelcased
function Kitten(name, age) {
    this.name = name;
    this.age = age;

    //we can eliminate this redundancy by using the constructor's prototype
    // this.meow = function () {
    //     console.log(this.name + ' says "MEOW!"');
    // };
}

//constructor's prototype:
Kitten.prototype.meow = function () {
    console.log(this.name + ' says "meow!"');
};

let kitten = new Kitten("Earl", 2);

k1 = new Kitten("Earl", 2);
k2 = new Kitten("Houdini", 1);

console.log(kitten)

console.log(k1)
console.log(k2)

console.log(Object.getPrototypeOf(k1));
console.log(Object.getPrototypeOf(k2));

Kitten.caboodle = [k1, k2, new Kitten('Flying Merkel', 3)];

Kitten.parade = function() {
  Kitten.caboodle.forEach( kitten => {
    kitten.meow();
  });
};

Kitten.parade();