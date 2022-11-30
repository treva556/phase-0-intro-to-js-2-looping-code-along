// Code your solutions in this file
function writeCards(name, event) {
    let nameToGreet = [];
    for (let i = 0; i < name.length; i++) {
      nameToGreet.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return nameToGreet;
  }
  
  function countDown(num) {
    //   let number = num;
    while (0 <= num) {
      console.log(num--);
    }
  }
  countDown(10);