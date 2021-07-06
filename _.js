const _ = {
  // Implement .clamp() method:
  // .clamp() method called using _.clamp()
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  // Ideate .inRange() method:
  inRangeIdea (num, start, end) {
    let startRange
    let endRange
    if (!end) {
      startRange = 0
      endRange = start
    } else if (start > end) {
      startRange = end
      endRange = start
    } else {
      startRange = start
      endRange = end
    }
    return this.checkRangeIdea(num, startRange, endRange)
  },
  checkRangeIdea (num, start, end) {
    if (num >= start && num <= end){
      return true
    } else {
      return false
    }
  },
  // Implement .inRange() method [CodeCademy solution]:
  inRange (number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    }
    if (start > end) {
      let temp = end
      end = start
      start = temp
    }
    let isInRange = (number >= start && number < end)
    return isInRange
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

// console.log tests for inRange Ideate:
console.log("_.inRangeIdea(5, 10) should return true:")
console.log(_.inRangeIdea(5,10))
console.log("_.inRangeIdea(10, 5) should return false:")
console.log(_.inRangeIdea(10,5))
console.log("_.inRangeIdea(10, 5, 20) should return true:")
console.log(_.inRangeIdea(10,5,20))
console.log("_.inRangeIdea(30, 5, 20) should return false:")
console.log(_.inRangeIdea(30,5,20))
console.log("_.inRangeIdea(1, 5, 20) should return false:")
console.log(_.inRangeIdea(1,5,20))


// Do not write or modify code below this line.
module.exports = _;