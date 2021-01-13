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

madLib('make', 'best', 'guac')

console.log(isSubstring("time to program", "time"))

console.log(isSubstring("Jump for joy", "joys"))