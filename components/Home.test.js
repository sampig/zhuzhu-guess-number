import React from 'react'
import renderer from 'react-test-renderer'
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
    const component = renderer.create(<Home navigation={navigation} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })
})
