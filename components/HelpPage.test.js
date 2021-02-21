import React from 'react'
import renderer from 'react-test-renderer'
import HelpPage from './HelpPage'


describe('The HelpPage component', () => {
  it('renders without crashing', () => {
    const render = renderer.create(<HelpPage />).toJSON()
    expect(render).toMatchSnapshot()
  })
})
