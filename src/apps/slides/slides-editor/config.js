import palette from 'util/palette'
export default {
    name: 'Slides',
    icon: 'layer-group',
    props: [
        { name: 'pages', type: 'number', defaultValue: 1 },
        { name: 'width', type: 'number', defaultValue: 100 },
        { name: 'cols', type: 'number', defaultValue: 12 },
        { name: 'rowHeight', type: 'number', defaultValue: 32 },
        { name: 'maxRows', type: 'number', defaultValue: 32 },
        { name: 'autoSize', type: 'boolean', defaultValue: true },
        { name: 'verticalCompact', type: 'boolean', defaultValue: true },
        { name: 'isDraggable', type: 'boolean', defaultValue: true },
        { name: 'isResizable', type: 'boolean', defaultValue: true },
        { name: 'preventCollision', type: 'boolean', defaultValue: true }
    ]
}
