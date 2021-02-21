import { useState } from 'react'
import { compareNumbers, generateNumber } from 'util/number-utils'

/**
 * Hook for game functionality.
 * @returns {object} - Object with a list of objects and related functions
 */
const useNumber = () => {
  const [game, setGame] = useState({
    number: undefined,
    times: 0,
  })

  const [guessList, setGuessList] = useState([])

  /**
   * Reset game.
   */
  const resetGame = () => {
    setGame({
      number: generateNumber(),
      times: 0,
    })
    setGuessList([])
  }

  /**
   * Give a try to guess the number.
   * @param {array} number - the guess number
   * @return {boolean}     - this result
   */
  const tryGuess = (number) => {
    const result = compareNumbers(game.number, number)
    setGame({
      number: game.number,
      times: game.times + 1,
    })
    setGuessList([...guessList, { id: (guessList.length + 1).toString(), guess: number, result: result }])
    return result[0] === 4
  }

  /**
   * Check if win the game.
   * @returns {boolean} - true if win
   */
  const isWin = () => {
    if (guessList.length > 0 && guessList.length <= 10) {
      return guessList[guessList.length - 1].result[0] === 4
    }
    return false
  }

  /**
   * Check if the game is over.
   * @returns {boolean} - is game over
   */
  const isGameOver = () => {
    return !isWin() && guessList.length >= 10
  }

  return {
    gameParam: { game, guessList, isWin, isGameOver },
    resetGame,
    tryGuess,
  }
}

export default useNumber
