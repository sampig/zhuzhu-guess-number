import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Application from 'expo-application'
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
  version: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  description: {
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
      <Text style={styles.version}>{i18n.t('appVersion')} {Application.nativeApplicationVersion || 'Unknown'}</Text>
      <Text style={styles.version}>{i18n.t('buildVersion')} {Application.nativeBuildVersion || 'Unknown'}</Text>
      <Text style={styles.description}>{i18n.t('gameDescription')}</Text>
    </View>
  )
}

export default HelpPage
