/* eslint-disable no-undef */

describe('Palette', () => {
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {})
    })
    describe('should test util/palette', () => {
        test(`: ${undefined}`, () => {
            expect(undefined).toBe(undefined)
        })
    })
})
