/* eslint-disable no-undef */

describe('URL State', () => {
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {})
    })
    describe('hello world', () => {
        test(`: ${undefined}`, () => {
            expect(undefined).toBe(undefined)
        })
    })
})
