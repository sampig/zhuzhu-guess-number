import React from 'react'
import renderer from 'react-test-renderer'
import InputNumberForm from './InputNumberForm'

describe('The InputNumberForm component', () => {
  it('renders without crashing', () => {
    const render = renderer.create(<InputNumberForm tryGuess={jest.fn()} />).toJSON()
    expect(render).toMatchSnapshot()
  })
})
