import React from 'react'
import { Platform } from 'react-native'
import { render } from '@testing-library/react-native'
import Home from './Home'

const navigation = { navigate: jest.fn() }
jest.mock('hooks/useNumber', () => ({
  __esModule: true,
  default: () => ({
    gameParam: {
      game: {
        number: [1, 2, 3, 4],
        times: 0,
      },
      guessList: [],
      isWin: jest.fn(),
      isGameOver: jest.fn(),
    },
    resetGame: jest.fn(),
    tryGuess: jest.fn(),
  }),
}))

describe('The Home component', () => {
  it('renders without crashing', () => {
    Platform.OS = 'ios'
    const { toJSON } = render(<Home navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders with Android platform', () => {
    Platform.OS = 'android'
    const { toJSON } = render(<Home navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
