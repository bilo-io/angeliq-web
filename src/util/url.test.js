/* eslint-disable no-undef */
describe('URL Tests', () => {
    beforeEach(() => {
        vi.spyOn(console, 'warn').mockImplementation(() => {})
    })
    describe('hello world', () => {
        test(`: ${undefined}`, () => {
            expect(undefined).toBe(undefined)
        })
    })
})
