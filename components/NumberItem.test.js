import React from 'react'
import { render } from '@testing-library/react-native'
import NumberItem from './NumberItem'

const item = { id: 'testId', guess: [1, 2, 3, 4], result: [2, 2] }

describe('The NumberItem component', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<NumberItem numberItem={item} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
