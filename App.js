import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import i18n from 'util/i18n-utils'
import Home from 'components/Home'
import HelpPage from 'components/HelpPage'

const { Navigator, Screen } = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' options={{ title: i18n.t('guessNumberHome') }} component={Home} />
        <Screen name='Help' options={{ title: i18n.t('helpPageTitle') }} component={HelpPage} />
      </Navigator>
    </NavigationContainer>
  )
}
