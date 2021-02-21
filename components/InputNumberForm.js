import React, { useCallback, useRef, useState } from 'react'
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
    borderWidth: 2,
    fontSize: 20,
    margin: 6,
    borderRadius: 5,
    padding: 6,
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
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const submitGuess = useCallback(() => {
    inputRef?.current.blur()
    tryGuess(value.split(''))
    setValue('')
  }, [inputRef, tryGuess, value, setValue])

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
    if (!value || value.split('').length !== 4) {
      return false
    } else {
      return value.split('').findIndex(n => n === '' || isNaN(Number(n)) || Number(n) < 0 || Number(n) > 9) < 0
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={value}
        onChangeText={text => setValue(text)}
        autoCapitalize='none'
        editable={isGameStarted()}
        placeholder={i18n.t('enterNumber')}
      />
      <Button
        title={i18n.t('guess')}
        disabled={!isGameStarted() || !isInputValid()}
        onPress={submitGuess}
      />
    </View>
  )
}

export default InputNumberForm
