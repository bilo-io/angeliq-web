/* eslint-disable no-undef */
import random from './random'

describe('Random', () => {
    it('should be of type string', () => {
        expect(random.alphaNumeric(6).length).toBe(6)
    })
})
