import React, { Component } from 'react'
import { MasterChart } from '..'
import RGL, { WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)

export class Grid extends Component {
  static defaultProps = {
    items: [],
    cols: 12,
    rowHeight: 64,
    width: 1200,
    verticalCompact: true,
    preventCollision: false,
    onLayoutChange: (layout) => console.log('<Grid/>: onLayoutChange', layout)
  }
  render() {
    const { items, data, isExportable, children,
      // ReactGridLayout props
      cols,
      rowHeight,
      width,
      verticalCompact,
      preventCollision
    } = this.props
    return (
      <div style={{ height: 'auto', maxHeight: '1024', overflowY: 'auto'}}>
        <ReactGridLayout
          cols={cols}
          rowHeight={rowHeight}
          width={width}
          verticalCompact={verticalCompact}
          preventCollision={preventCollision}
          onLayoutChange={this.onLayoutChange}
        >
          { children }
        </ReactGridLayout>
      </div>
    )
  }
}

export default Grid