import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 4,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSection: {
    marginLeft: 8,
    marginRight: 8,
    padding: 4,
    flex: 1,
    flexDirection: 'row',
  },
  idView: {
    flex: 1,
  },
  idText: {
    fontSize: 20,
  },
  guessView: {
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
  },
  guessText: {
    fontSize: 20,
  },
  resultView: {
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    flex: 1,
  },
  correctCount: {
    paddingRight: 8,
    fontSize: 20,
    color: 'green',
  },
  incorrectCount: {
    fontSize: 20,
    color: 'red',
  },
})

/**
 * Component to display one guess result.
 * @param {object} numberItem - a guess object.
 * @returns {node}            - React node
 * @constructor
 */
function NumberItem ({ numberItem }) {

  /**
   * Title section.
   * @returns {node} - React node of title
   */
  const titleSection = () => {
    return (
      <View style={styles.itemSection}>
        <View style={styles.idView}>
          <Text style={styles.idText}>{numberItem.id}</Text>
        </View>
        <View style={styles.guessView}>
          <Text style={styles.guessText}>{numberItem.guess}</Text>
        </View>
        <View style={styles.resultView}>
          <Text style={styles.correctCount}>{numberItem.result[0] + '✓'}</Text>
          <Text style={styles.incorrectCount}>{numberItem.result[1] + 'X'}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {titleSection()}
    </View>
  )
}

export default NumberItem
