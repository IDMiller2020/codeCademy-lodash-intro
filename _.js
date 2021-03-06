function test (value) {
  return (value < 5000) 
}
function predicate(elem, ind, arr) {
  return (!(elem === ind))
}
const _ = {
  // Implement .clamp() method:
  // .clamp() method called using _.clamp()
  // node test/clamp.js passed
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  // ***********************************************************
  // Ideate .inRange() method [my solution]:
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
  // node test/in-range.js passed
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
  },
  // ***********************************************************
  // Ideate .words() [my solution]:
  wordsIdea (inputString) {
    return inputString.split(' ')
  },
  // Implement .words() [CodeCademy solution]:
  // node test/words.js passed
  words (string) {
    const words = string.split(' ')
    return words
  },
  // ***********************************************************
  // Ideate .pad() [my solution]:
  padIdea (inputString, length) {
    const frontPad = inputString.length + Math.floor((length - inputString.length) / 2)
    let paddedString = inputString
    paddedString = paddedString.padStart(frontPad).padEnd(length)
    return paddedString
  },
  // Implement .pad() [CodeCademy solution]:
  // node test/pad.js passed
  pad (string, length) {
    if (length <= string.length) {
      return string
    }
    const startPaddingLength = Math.floor((length - string.length) / 2)
    const endPaddingLength = length - string.length - startPaddingLength
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString
  },
  // ***********************************************************
  // Ideate .has() [my solution]:
  hasIdea (object, key) {
    return (object[key] !== undefined)
  },
  // Implement .has() [CodeCademy solution]:
  // node test/has.js passed
  has (object, key) {
    const hasValue = (object[key] !== undefined)
    return hasValue
  },
  // ***********************************************************
  // Ideate .invert() [my solution]:
  invertIdea (object) {
    for (const i in object) {
      const key = i
      const value = object[i]
      object[value] = key
      delete object[i]
    }
    return object
  },
  // Implement .invert() [CodeCademy solution]:
  // node test/invert.js passed
  invert (object) {
    let invertedObject = {}
    for (const i in object) {
      const originalValue = object[i]
      invertedObject[originalValue] = i
    }
    return invertedObject
  },
  // ***********************************************************
  // Ideate .findKey() [my solution]:
  // testFunction added outside of _ object (above)
  findKeyIdea (object, testFunction) {
    let returnValue = ''
    for (const key in object) {
      if (testFunction(object[key])) {
        returnValue = key
      } else {
        returnValue = undefined
      }
    }
    return returnValue
  },
  // Implement .findKey() [CodeCademy solution]:
  // node test/find-Key.js passed
  findKey (object, predicate) {
    for(const key in object) {
      const value = object[key]
      const predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      }
    }
    return undefined
  },
  // ***********************************************************
  // Ideate .drop() [my solution]:
  dropIdea (arr, num = 1) {
    for (let i = 0; i < num; i++) {
      arr.shift()
    }
    return arr
  },
  // Implement .drop() [CodeCademy solution]:
  // node test/drop.js passed
  drop (array, n) {
    if (!n) {
      n = 1
    }
    let droppedArray = array.slice(n)
    return droppedArray
  },
  // ***********************************************************
  // Ideate .dropWhile() [my solution]:
  dropWhileIdea (arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
      if (!(predicate(arr[i], i, arr))) {
        const droppedArr = arr.slice(i + 1)
        return droppedArr
      }
    }
    return arr
  },
  // Implement .dropWhile() [CodeCademy solution]:
  // node test/dropWhile.js Passed
  dropWhile (array, predicate) {
    const callBack = (element, index) => {
      return !predicate(element, index, array)
    }
    const dropNumber = array.findIndex(callBack)
    const droppedArray = this.drop(array, dropNumber)
    return droppedArray
  },
  // ***********************************************************
  // Ideate .dropWhile() [my solution]:
  chunkIdea (array, size = 1) {
    let chunkArray = []
    for (let i = 0; i < array.length; i += size) {
      let end = i + size
      let chunk = array.slice(i, end)
      chunkArray.push(chunk)
    }
    return chunkArray
  },
  // Implement .chunk() [CodeCademy solution]:
  // node test/chunk.js Passed
  chunk (array, size) {
    if (size === undefined) {
      size = 1
    }
    let arrayChunks = []
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks
  }
}

// ***********************************************************
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

// ***********************************************************
// console.log tests for .inRange() Ideate:
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

// ***********************************************************
// console.log tests for .wordsIdea() Ideate:
console.log("Input string 'The quick brown fox jumps over the lazy dog', should return array of words:")
console.log(_.wordsIdea('The quick brown fox jumps over the lazy dog'))

// ***********************************************************
// console.log tests for .padIdea Ideate:
console.log("_.padIdea('scott', 10), should return '  scott   '")
console.log(`test${_.padIdea('scott', 10)}test`)

// ***********************************************************
// console.log tests for _.hasIdea() Ideate:
console.log("_hasIdea({name: 'scott'}, 'name'), should return true.")
console.log(_.hasIdea({name: 'scott'}, 'name'))
console.log("_hasIdea({name: 'scott'}, 'age'), should return false.")
console.log(_.hasIdea({name: 'scott'}, 'age'))

// ***********************************************************
// tests for _.invertIdea() Ideate:
console.log("Input object: {scott: 'name', grey: 'hair', hazel: 'eyes'}")
console.log("keys and values should be swapped.")
let testObject = {scott: 'name', grey: 'hair', hazel: 'eyes'}
let invertedTestObject = _.invertIdea(testObject)
console.log(`name: ${invertedTestObject.name}`)
console.log(`hair: ${invertedTestObject.hair}`)
console.log(`eyes: ${invertedTestObject.eyes}`)
console.log('And, original properties should be deleted (undefined):')
console.log(`scott: ${invertedTestObject.scott}`)
console.log(`grey: ${invertedTestObject.grey}`)
console.log(`hazel: ${invertedTestObject.hazel}`)

// ***********************************************************
// tests for _.findKeyIdea() Ideate:
console.log('This call to _.findKeyIdea should return the key num4:')
console.log(_.findKeyIdea({num1: 5000, num2: 6000, num3: 10000, num4: 4999}, test))
console.log('This call to _.findKeyIdea should return undefined:')
console.log(_.findKeyIdea({num1: 5005, num2: 10000}, test))

// ***********************************************************
// tests for _.dropIdea() Ideate:
console.log('This call to _.dropIdea should return [3, 4, 5]')
console.log(_.dropIdea([1, 2, 3, 4, 5], 2))
console.log('This call to _.dropIdea should return [2, 3, 4, 5]')
console.log(_.dropIdea([1, 2, 3, 4, 5]))
console.log('This call to _.dropIdea should return []')
console.log(_.dropIdea([1, 2, 3, 4, 5], 5))

// ***********************************************************
// tests for _.dropIdea() Ideate:
console.log('This call to _.dropWhileIdea should return [3, 4, 100]')
console.log(_.dropWhileIdea([1, 2, 2, 3, 4, 100], predicate))

// ***********************************************************
// tests for _.chunkIdea() Ideate:
console.log('_.chunkIdea was called with array = [0,1,2,3,4,5,6,7,8,9] and size = 2:')
console.log(_.chunkIdea([0,1,2,3,4,5,6,7,8,9], 2))
console.log('_.chunkIdea was called with array = [0,1,2,3,4,5,6,7,8,9] and size = 3:')
console.log(_.chunkIdea([0,1,2,3,4,5,6,7,8,9], 3))

// Do not write or modify code below this line.
module.exports = _;