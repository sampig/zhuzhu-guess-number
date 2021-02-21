import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import i18n from 'util/i18n-utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    marginTop: 25,
    marginBottom: 25,
  },
  createTime: {
    fontSize: 18,
  },
})

/**
 * Component to a to-do detail page.
 * @returns {node} - React node
 * @constructor
 */
function HelpPage () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('gameName')}</Text>
      <Text style={styles.createTime}>{i18n.t('gameDescription')}</Text>
    </View>
  )
}

export default HelpPage
