// for (let i = 0; i < 10; i++) {
//     console.log("The greatest of ease")
// }

function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }

  // function mysteryScoping3() {
  //   const x = 'out of block';
  //   if (true) {
  //     var x = 'in block';  
  //     console.log(x);
  //   }
  //   console.log(x);
  // }

  function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }

  // function mysteryScoping5() {
  //   let x = 'out of block';
  //   if (true) {
  //     let x = 'in block';  
  //     console.log(x);
  //   }
  //   let x = 'out of block again';
  //   console.log(x);
  // }

console.log(mysteryScoping1())
console.log(mysteryScoping2())
// console.log(mysteryScoping3())
console.log(mysteryScoping4())
// console.log(mysteryScoping5())

function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`)
}

function isSubstring(sen, sub) {
  var words = sen.split(" ");
  for(var i = 0; i < words.length; i++) {
    if (words[i] === sub) {
      return true
    }
  }
  return false
}

function fizzBuzz(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if ((num % 3 || num % 5) && !(num % 3 && num % 5)) {
      arr.push(num)
    }
  }
  return arr
}

function isPrime(num) {
  if (num < 2 || num % 1 != 0 || (num % 2 === 0 && num != 2)) {
    return false
  }
  for (var i = 3; i <= Math.floor(Math.sqrt(num)); i+=2) {
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

function nextPrime(num) {
  let i = num + 1;
  while (true) {
    if (isPrime(i)) {
      return i;
    }
    i++;
  }
}
function firstNPrimes(n){
  var arr = [2];
  var count = 1;
  while (count < n){
    arr.push(nextPrime(arr[arr.length - 1]))
    count++;
  }
  return arr
}

function sumOfNPrimes(n) {
  let arr = firstNPrimes(n);
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// madLib('make', 'best', 'guac')

// console.log(isSubstring("time to program", "time"))

// console.log(isSubstring("Jump for joy", "joys"))

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// console.log(isPrime(1))

console.log(sumOfNPrimes(4))