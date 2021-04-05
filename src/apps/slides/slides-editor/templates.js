export default [
    {
        name: 'Empty',
        tiles: [
            { layout: { x: 0, y: 0, w: 8, h: 8 } }
        ]
    },
    {
        name: 'Header/Content',
        tiles: [
            { layout: { x: 0, y: 0, w: 8, h: 8 } },
            { layout: { x: 8, y: 0, w: 40, h: 8 } },
            { layout: { x: 0, y: 8, w: 48, h: 28 } }
        ]
    },
    {
        name: 'Header/Content/Footer',
        tiles: [
            { layout: { x: 0, y: 0, w: 48, h: 8 } },
            { layout: { x: 0, y: 8, w: 32, h: 20 } },
            { layout: { x: 32, y: 8, w: 16, h: 20 } },
            { layout: { x: 0, y: 28, w: 48, h: 8 } }
        ]
    },
    {
        name: 'Left/Right-Children',
        tiles: [
            { layout: { x: 0, y: 0, w: 20, h: 36 } },
            { layout: { x: 20, y: 0, w: 28, h: 18 } },
            { layout: { x: 20, y: 18, w: 28, h: 18 } }
        ]
    },
    {
        name: 'Quad',
        tiles: [
            { layout: { x: 0, y: 0, w: 24, h: 12 } },
            { layout: { x: 24, y: 0, w: 24, h: 12 } },
            { layout: { x: 0, y: 12, w: 12, h: 12 } },
            { layout: { x: 12, y: 12, w: 24, h: 12 } },
            { layout: { x: 36, y: 12, w: 12, h: 12 } },
            { layout: { x: 0, y: 24, w: 24, h: 12 } },
            { layout: { x: 24, y: 24, w: 24, h: 12 } }
        ]
    }
]
