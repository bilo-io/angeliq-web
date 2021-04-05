import palette from 'util/palette'
export default {
    name: 'Pie Chart',
    icon: 'chart-pie',
    type: 'chart:pie',
    props: [
        {
            name: 'palette',
            type: 'palette',
            defaultValue: palette
        },
        {
            name: 'sortByValue',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'isReversed',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'innerRadius',
            type: 'number',
            defaultValue: 90
        },
        {
            name: 'outerRadius',
            type: 'number',
            defaultValue: 120
        }
    ]
}
