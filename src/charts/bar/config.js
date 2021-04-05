import palette from 'util/palette'
export default {
    name: 'Bar Chart',
    icon: 'chart-bar',
    type: 'chart:bar',
    props: [
        {
            name: 'palette',
            type: 'palette',
            defaultValue: palette
        },
        {
            name: 'isVertical',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'isStacked',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'isReversed',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'minValue',
            type: 'number',
            defaultValue: 0
        },
        {
            name: 'maxValue',
            type: 'number',
            defaultValue: 100
        }
    ]
}
