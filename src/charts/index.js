// https://observablehq.com/@d3/gallery
export * from './bar'
export * from './line'
export * from './pie'
export * from './master'
export * from './table'
export * from './wrapper'

export const chartProps = {
    depth: 2,
    item: {
        label: 'string',
        key: 'string',
        value: 'number',
        // optional
        color: 'hex',
        tooltip: 'string'
    },
    props: [
        'isGrouped',
        'isStacked'
    ]
}
