import React from 'react'
import renderer from 'react-test-renderer'
import GuessListMain from './GuessListMain'

const mockNumberItem = (id) => {
  return { id: id, guess: id, result: [id, id] }
}

describe('The GuessListMain component', () => {
  it('renders without crashing', () => {
    const gameParam = { game: {}, guessList: [], isGameOver: jest.fn(), isWin: jest.fn() }
    const component = renderer.create(<GuessListMain gameParam={gameParam} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })

  it('renders without crashing when game win', () => {
    const guessList = [
      mockNumberItem('0'),
      mockNumberItem('1'),
    ]
    const gameParam = {
      game: { number: [1, 2, 3, 4], times: 2 },
      guessList: guessList,
      isGameOver: jest.fn(),
      isWin: jest.fn(() => true),
    }
    const component = renderer.create(<GuessListMain gameParam={gameParam} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })

  it('renders without crashing when game over', () => {
    const guessList = [
      mockNumberItem('0'),
      mockNumberItem('1'),
      mockNumberItem('2'),
      mockNumberItem('3'),
      mockNumberItem('4'),
      mockNumberItem('5'),
      mockNumberItem('6'),
      mockNumberItem('7'),
      mockNumberItem('8'),
      mockNumberItem('9'),
    ]
    const gameParam = {
      game: { number: [1, 2, 3, 4], times: 10 },
      guessList: guessList,
      isGameOver: jest.fn(() => true),
      isWin: jest.fn(),
    }
    const component = renderer.create(<GuessListMain gameParam={gameParam} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })
})
