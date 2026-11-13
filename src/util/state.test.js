/* eslint-disable no-undef */

describe('URL State', () => {
    beforeEach(() => {
        vi.spyOn(console, 'warn').mockImplementation(() => {})
    })
    describe('hello world', () => {
        test(`: ${undefined}`, () => {
            expect(undefined).toBe(undefined)
        })
    })
})
