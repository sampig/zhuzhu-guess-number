import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import i18n from 'util/i18n-utils'
import useNumber from 'hooks/useNumber'
import GuessListMain from './GuessListMain'
import InputNumberForm from './InputNumberForm'

const styles = StyleSheet.create({
  containerButtons: {
    marginTop: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 25,
    marginRight: 25,
    flex: 1,
  },
  containerList: {
    flex: 1,
    display: 'flex',
  },
})

/**
 * Component of Home page.
 * @param {object} navigation - the navigation object in route.
 * @returns {node}            - React node
 * @constructor
 */
function Home ({ navigation }) {
  const { gameParam, resetGame, tryGuess } = useNumber()

  /**
   * A function to open a to-do.
   */
  const openDetailPage = () => {
    navigation.navigate('Help')
  }

  /**
   * Restart game.
   */
  const restartGame = () => {
    if (!gameParam?.game?.number) {
      resetGame()
    } else {
      Alert.alert(
        i18n.t('restartGameTitle'),
        i18n.t('restartGameText'),
        [
          {
            text: i18n.t('cancelButton'),
            style: 'cancel',
          },
          {
            text: i18n.t('startButton'),
            onPress: () => {
              resetGame()
            },
          },
        ],
        {
          cancelable: true,
        },
      )
    }
  }

  /**
   * Buttons at the bottom of the page.
   * @returns {node} - React node of buttons
   */
  const buttonsNav = () => {
    return (
      <View style={styles.containerButtons}>
        <View style={styles.button}>
          <Button
            title={i18n.t('help')}
            onPress={openDetailPage}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={i18n.t('newGame')}
            onPress={restartGame}
          />
        </View>
      </View>
    )
  }

  /**
   * Get game status.
   * @returns {string} - game status
   */
  const gameStatus = () => {
    if (!gameParam?.game?.number) {
      return i18n.t('gameStatusNotStart')
    } else if (gameParam.isWin() || gameParam.isGameOver()) {
      return i18n.t('gameStatusOver')
    }
    return i18n.t('gameStatusRunning', { times: 10 - gameParam.guessList.length })
  }

  return (
    <>
      {buttonsNav()}
      <Text>{i18n.t('gameStatus') + ' ' + gameStatus()}</Text>
      <GuessListMain gameParam={gameParam} />
      <InputNumberForm gameParam={gameParam} tryGuess={tryGuess} />
    </>
  )
}

export default Home
