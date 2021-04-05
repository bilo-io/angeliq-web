/* eslint-disable no-undef */
import languages from './languages'

describe('Languages', () => {
    it('should be at least 5', () => {
        expect(languages.length).toBe(5)
    })
})
