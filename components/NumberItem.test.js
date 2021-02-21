import React from 'react'
import renderer from 'react-test-renderer'
import NumberItem from './NumberItem'

const item = { id: 'testId', guess: [1, 2, 3, 4], result: [2, 2] }

describe('The NumberItem component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<NumberItem numberItem={item} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })
})
