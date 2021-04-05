import * as d3 from 'd3'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ChartWrapper } from '../wrapper'
import palette from 'util/palette'
import options from './config'

export class PieChart extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }))
    }

    static defaultProps = {
        data: {
            dimensions: [],
            items: []
        },
        options: {
            height: 200,
            width: 200,
            padding: 10,
            range: [0, 100],
            innerRadius: 70,
            outerRadius: 100,
            opacity: 0.8,
            palette
        }
    }

    state = {
        options: {
            height: 200,
            width: 200,
            padding: 10,
            range: [0, 100],
            innerRadius: 70,
            outerRadius: 100,
            opacity: 0.8,
            palette
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            options: {
                ...nextProps.options
            }
        })
    }

    render () {
    // const { options } = this.state
        const { data } = this.props
        const options = this.state.options || this.props.options

        return <div className='vision-pie-chart-container'>
            <ChartWrapper
                data={ data }
                options={ options }
            >
                {function ({ container, containerId }) {
                    console.log({ innerRadius, outerRadius })
                    const {
                        width,
                        height,
                        range,
                        innerRadius,
                        outerRadius,
                        padding,
                        opacity,
                        palette
                    } = options
                    console.log({ innerRadius, outerRadius })
                    const svg = d3.select(container).append('svg')
                        .attr('width', width)
                        .attr('height', height)
                        .append('g')
                        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

                    const color = d3.scaleOrdinal()
                        .domain(data.items)
                        .range(palette)

                    // Compute the position of each group on the pie:
                    const pie = d3.pie()
                        .value(d => d.value)

                    const pieData = pie(data.items)

                    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                    svg.selectAll('whatever')
                        .data(pieData)
                        .enter()
                        .append('path')
                        .attr('d', d3.arc()
                            .innerRadius(innerRadius) // This is the size of the donut hole
                            .outerRadius(outerRadius)
                        )
                        .attr('fill', (d) => color(d.data.key))
                    // .attr('stroke', 'black')
                    // .style('stroke-width', '2px')
                        .style('opacity', opacity)
                }}
            </ChartWrapper>
        </div>
    }
}

PieChart.options = options

export default PieChart
