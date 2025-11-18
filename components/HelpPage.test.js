import React from 'react'
import { render, screen } from '@testing-library/react-native'
import HelpPage from './HelpPage'

jest.mock('expo-localization', () => ({
  __esModule: true,
  default: {
    locale: 'en',
  },
  locale: 'en',
}))

const mockApplicationValues = {
  nativeApplicationVersion: '1.0.0',
  nativeBuildVersion: '1',
}

jest.mock('expo-application', () => ({
  get nativeApplicationVersion() {
    return mockApplicationValues.nativeApplicationVersion
  },
  get nativeBuildVersion() {
    return mockApplicationValues.nativeBuildVersion
  },
}))

describe('The HelpPage component', () => {
  beforeEach(() => {
    // Reset to default values before each test
    mockApplicationValues.nativeApplicationVersion = '1.0.0'
    mockApplicationValues.nativeBuildVersion = '1'
  })

  it('renders without crashing', () => {
    const { toJSON } = render(<HelpPage />)
    expect(screen.getByText('zhuzhu Guess Number')).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders without version', () => {
    mockApplicationValues.nativeApplicationVersion = undefined
    mockApplicationValues.nativeBuildVersion = undefined
    render(<HelpPage />)
    // The text "Unknown" appears in the version text nodes
    expect(screen.getByText(/App Version:.*Unknown/i)).toBeTruthy()
    expect(screen.getByText(/Build:.*Unknown/i)).toBeTruthy()
  })
})
