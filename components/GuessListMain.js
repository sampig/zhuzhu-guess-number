import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import i18n from 'util/i18n-utils'
import NumberItem from './NumberItem'

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    minHeight: 0,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 15,
  },
  containerList: {
    flex: 1,
    display: 'flex',
    minHeight: 0,
  },
})

/**
 * Component of guess result list.
 * @param {object} gameParam - the gameParam object including game, guessList and functions
 * @returns {node}           - React node
 * @constructor
 */
function GuessListMain ({ gameParam }) {

  /**
   * Return a node of the number item.
   * @param {object} item - a guess number object.
   * @returns {node}      - React node
   */
  const renderItem = ({ item }) => (
    <NumberItem numberItem={item} />
  )

  return (
    <View style={styles.listView}>
      <Text style={styles.title}>{i18n.t('yourGuess')}</Text>
      <FlatList
        style={styles.containerList}
        data={gameParam?.guessList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {gameParam?.isGameOver() ? (
        <Text>{i18n.t('gameLostMsg', { number: gameParam?.game.number.join('') })}</Text>) : null}
      {gameParam?.isWin() ? (<Text>{i18n.t('gameWinMsg')}</Text>) : null}
    </View>
  )
}

export default GuessListMain
