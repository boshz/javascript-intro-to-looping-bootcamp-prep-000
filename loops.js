function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1){ 
  array.push("I am 1 strange loop.")}
  else array.push(`I am ${i} strange loops.`)
}
return array
}


function whileLoop(number) {
  let number = 50
  while (number > 12) {
    console.log(--number);
    return "done"
  }
}