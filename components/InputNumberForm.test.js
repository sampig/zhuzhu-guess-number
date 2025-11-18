import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import InputNumberForm from './InputNumberForm'

const mockGuess = jest.fn()

describe('The InputNumberForm component', () => {
  beforeEach(() => {
    mockGuess.mockClear()
  })

  it('renders without crashing', () => {
    const { toJSON } = render(<InputNumberForm tryGuess={mockGuess} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('test input number and guess', () => {
    const gameParam = {
      game: {
        number: [1, 2, 3, 4],
      },
      isWin: jest.fn(() => false),
      isGameOver: jest.fn(() => false),
    }
    render(<InputNumberForm tryGuess={mockGuess} gameParam={gameParam} />)
    fireEvent.changeText(screen.getByTestId('input-number-0'), '1')
    fireEvent.changeText(screen.getByTestId('input-number-1'), '2')
    fireEvent.changeText(screen.getByTestId('input-number-2'), '3')
    fireEvent.changeText(screen.getByTestId('input-number-3'), '4')
    fireEvent.press(screen.getByText('Guess'))
    expect(mockGuess).toHaveBeenCalledWith(['1', '2', '3', '4'])
  })
})
