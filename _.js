const _ = {
  // Implement .clamp() method:
  // .clamp() method called using _.clamp()
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  }
}

// Ideate .clamp():
function clamp(num) {
  let clamped
  // To clamp number by lower bound, say 1 for examle:
  clamped = Math.max(1, num)
  // To clamp number by upper bound, say 100 for example:
  clamped = Math.min(100, clamped)
  return clamped
}
console.log('Numbers clamped between 1 and 100.')
console.log('Test numbers: -10, 25, 500')
console.log(clamp(-10))
console.log(clamp(25))
console.log(clamp(500))

console.log("Numbers clamped between 1 and 100 using _.clamp method.")
console.log("Test numbers: -10, 25, 500")
console.log(_.clamp(-10, 1, 100))
console.log(_.clamp(25, 1, 100))
console.log(_.clamp(500, 1, 100))


// Do not write or modify code below this line.
module.exports = _;