/* eslint-disable no-undef */
import convert from './convert'

const csvData = `
name,age,email
Bilo,30,bilo@vis-ion.io
Admin,2020,admin@vis-ion.io
`
describe('csvToJson', () => {
    test('convert undefined to json', () => {
        expect(convert.csvToJson(undefined)).toMatchObject(
            {
                error: 'csvToJson(csvString, delimiter = \',\') => arg \'csvString\' is undefined or null'
            })

        expect(convert.csvToJson(csvData)).toMatchObject([{ '': 'name' }, { '': 'Bilo' }, { '': 'Admin' }, { '': '' }])
    })
})
