function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i==1) {
      return "I am 1 strange loop."
    }else{
      array.push "I am ${} strange loops."
    }
  }
}

function whileLoop(n) {
  let countdown = 100;

  while (countdown > 0) {
    console.log(--countdown);
  }
}

function doWhileLoop(num) {

}
