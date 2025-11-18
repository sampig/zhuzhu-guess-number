import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import i18n from 'util/i18n-utils'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingRight: 6,
  },
  textInput: {
    flex: 1,
    minWidth: 0,
    borderWidth: 2,
    fontSize: 20,
    margin: 6,
    borderRadius: 5,
    padding: 6,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    minWidth: 0,
  },
})

/**
 * Component to display a form of input a guess.
 * @param {object} gameParam  - the gameParam object including game, guessList and functions
 * @param {function} tryGuess - a function to guess
 * @returns {node}            - React node
 * @constructor
 */
function InputNumberForm ({ gameParam, tryGuess }) {
  const [guessValues, setGuessValues] = useState([undefined, undefined, undefined, undefined])
  const inputRef0 = useRef()
  const inputRef1 = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
  const inputRefs = useMemo(() => [inputRef0, inputRef1, inputRef2, inputRef3], [])

  const submitGuess = useCallback(() => {
    inputRefs.forEach(ref => ref.current?.blur())
    tryGuess(guessValues.map(v => v !== undefined ? String(v) : ''))
    setGuessValues([undefined, undefined, undefined, undefined])
    inputRefs[0].current?.focus()
  }, [inputRefs, tryGuess, guessValues])

  /**
   * Check if the game is playing.
   * @returns {boolean} - true if it is started
   */
  const isGameStarted = () => {
    return !(!gameParam?.game?.number || gameParam?.isWin() || gameParam?.isGameOver())
  }

  /**
   * Check if 4 digits are input
   * @returns {boolean} - true if 4 digits are input
   */
  const isInputValid = () => {
    return guessValues.every(v => v !== undefined && !isNaN(Number(v)) && Number(v) >= 0 && Number(v) <= 9)
  }

  /**
   * Handle text change for a specific input index
   * @param {string} text - the input text
   * @param {number} index - the index of the input (0-3)
   */
  const handleTextChange = (text, index) => {
    // Only allow single digit (0-9)
    const digit = text.replace(/[^0-9]/g, '').slice(-1)
    
    if (digit === '') {
      // Clear this input
      const newValues = [...guessValues]
      newValues[index] = undefined
      setGuessValues(newValues)
    } else {
      // Set the digit
      const newValues = [...guessValues]
      newValues[index] = Number(digit)
      setGuessValues(newValues)
      
      // Auto-focus next input if available
      if (index < 3 && digit) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            testID={`input-number-${index}`}
            ref={inputRefs[index]}
            style={styles.textInput}
            value={guessValues[index] !== undefined ? String(guessValues[index]) : ''}
            onChangeText={text => handleTextChange(text, index)}
            autoCapitalize='none'
            editable={isGameStarted()}
            placeholder=''
            keyboardType='numeric'
            maxLength={1}
          />
        ))}
      </View>
      <Button
        title={i18n.t('guess')}
        disabled={!isGameStarted() || !isInputValid()}
        onPress={submitGuess}
      />
    </View>
  )
}

export default InputNumberForm
