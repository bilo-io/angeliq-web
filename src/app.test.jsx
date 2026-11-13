import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './app'
import store from './store'

describe('App', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {})
        // jsdom has no visualViewport; the search page sizes its cards from it
        vi.stubGlobal('visualViewport', { width: 1280, height: 800 })
    })

    it('redirects / to the search page after the splash loader', async () => {
        vi.useFakeTimers()
        render(<Provider store={store}><App /></Provider>)
        await act(async () => { vi.advanceTimersByTime(2000) })
        vi.useRealTimers()
        expect(await screen.findByText(/Angelique/, {}, { timeout: 5000 })).toBeInTheDocument()
        expect(window.location.pathname).toBe('/app/search')
    }, 10000)
})
