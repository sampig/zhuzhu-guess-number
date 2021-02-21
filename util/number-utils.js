/**
 * Generate the 4-digit number.
 * @returns {Array} - the number
 */
const generateNumber = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let number = []
  for (let i = 0; i < 4; i++) {
    let idx = Math.floor(Math.random() * arr.length)
    number.push(arr.splice(idx, 1)[0].toString())
  }
  return number
}

/**
 * Compare the two numbers.
 * @param {Array} number      - the correct number
 * @param {Array} guessNumber - the input number
 * @returns {Array}           - the result
 */
const compareNumbers = (number, guessNumber) => {
  let correctCount = 0
  let incorrectCount = 0
  if (number.length !== 4 || guessNumber.length !== 4) {
    return [0, 0]
  }
  guessNumber.forEach((digit, idx) => {
    if (number[idx] === digit) {
      correctCount++
    } else if (number.indexOf(guessNumber[idx]) < 0) {
      incorrectCount++
    }
  })
  return [correctCount, incorrectCount]
}

export {
  generateNumber,
  compareNumbers,
}
