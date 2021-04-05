import React, { Component } from 'react'
import { MasterChart } from 'charts'
import RGL, { WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)

export class ChartsGrid extends Component {
  static defaultProps = {
      items: []
  }

  render () {
      const { items, data, isExportable } = this.props
      return (
          <ReactGridLayout
              cols={12}
              rowHeight={64}
              width={1200}
              verticalCompact={true}
              preventCollision={false}
              onLayoutChange={this.onLayoutChange}
          >
              {
                  items.map((tile, i) => (
                      <div className='grid-tile' key={i} data-grid={tile.layout}>
                          <MasterChart
                              isExportable={ isExportable }
                              type={tile.type}
                              data={data}
                              options={ tile.options }
                          />
                      </div>
                  ))}
          </ReactGridLayout>
      )
  }
}

export default ChartsGrid
