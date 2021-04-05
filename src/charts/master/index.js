import React from 'react'
import FAIcon from 'react-fontawesome'
import BarChart from '../bar'
import LineChart from '../line'
import PieChart from '../pie'
import TableChart from '../table'
import exportTo from 'util/export-to'

const allFormats = [
    'pdf',
    'image',
    'csv',
    'code',
    'excel',
    'powerpoint'
]

const supportedFormats = [
    'pdf',
    'image',
    'csv',
    'code'
]

export class MasterChart extends React.Component {
    constructor (props) {
        super(props)
        this.id = `vision-master-chart_${(new Date().toISOString())}`
    }

  static defaultProps = {
      isExportable: false,
      data: {
          items: []
      }
  }

  state = {
      isExporting: false
  }

  export = format => () => {
      const fileName = 'master-chart'
      switch (format) {
      case 'pdf':
          exportTo.pdf({ containerIds: [this.id], fileName })
          break
      case 'image':
          exportTo.jpg({ containerIds: [this.id], fileName })
          break
      case 'csv':
          exportTo.csv({
              fileName,
              json: this.props.data,
              columns: Object.keys(this.props.data[0])
          })
          break
      case 'code':
          exportTo.json({
              jsonObject: JSON.stringify(this.props.data, false, 2),
              fileName,
              toClipboard: false
          })
          break
      default:
          console.warn(`ERR: cannot export to ${format}`)
          break
      }
  }

  renderChart = () => {
      const { type, data, options } = this.props
      const props = {
          data,
          options
      }
      switch (type) {
      case 'data:chart:bar':
          return <BarChart { ...props } />
      case 'data:chart:line':
          return <LineChart { ...props } />
      case 'data:chart:pie':
          return <PieChart { ...props } />
      case 'data:chart:table':
          return <TableChart { ...props } />
      default:
          return <ChartNotSupported type={type} />
      }
  }

  render () {
      const { isExportable } = this.props
      const { isExporting } = this.state
      return ( // TODO: make id uniq
          <div>
              <div id={ this.id }>{this.renderChart()}</div>
              {isExportable && (
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      {allFormats.map((format, i) => (
                          <div
                              key={i}
                              className='export'
                              title={ format }
                              style={{
                                  padding: '0.5rem',
                                  fontSize: '1.25rem',
                                  color: supportedFormats.includes(format) ? 'white' : 'pink'
                              }}
                              onClick={ this.export(format) }>
                              <FAIcon
                                  className={ 'glow' }
                                  name={`file-${format}`}
                                  style={{ filter: 'drop-shadow(1px 1px 1px grey)' }}/>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      )
  }
}

const ChartNotSupported = ({ type }) => (
    <div className='' style={{
        padding: '0.5rem',
        paddingTop: '2.5rem',
        width: 'calc(100% - 2rem)'
    }}>
        <div style={{ color: 'orange' }}>
            <FAIcon name='exclamation-circle' />
            &nbsp;&nbsp;
            Warning
        </div>
        <div className='divider horizontal' />
        <p style={{ fontSize: '0.9rem' }}>
            Charts of type &nbsp;&nbsp;<code><strong>{type}</strong></code>&nbsp;&nbsp; are not currently supported.
        </p>
    </div>
)

MasterChart.types = [
    'chart:bar',
    'chart:pie',
    'chart:line',
    'chart:table'
]

MasterChart.options = [
    require('../bar/config'),
    require('../line/config'),
    require('../pie/config'),
    require('../table/config')
]

export default MasterChart
