import * as d3 from 'd3'
import React, { Component } from 'react'
import { ChartWrapper } from '../wrapper'
import palette from 'util/palette'
import options from './config'

export class BarChart extends Component {
    static options = options
    static defaultProps = {
        data: {
            items: [],
            dimensions: {
                keys: []
            }
        }
    }

    state = {
        options: {
            barSize: 20,
            height: 200,
            width: 600,
            isVertical: true,
            isReversed: false,
            isStacked: false,
            hasXAxis: true,
            hasYAxis: false,
            getValue: d => d.value,
            indexKeys: ['id'],
            valueKeys: ['value'],
            padding: 10,
            range: [
                0, 100
            ],
            opacity: 0.7,
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
        const { data } = this.props
        const { options } = this.state
        console.log('vision.BarChart', { data, options })
        const {
            isVertical,
            isReversed,
            isStacked,
            hasXAxis,
            hasYAxis,
            getValue,
            indexKeys,
            valueKeys,
            width,
            range,
            height,
            barSize,
            padding,
            palette,
            opacity
        } = options

        console.log(getValue)
        return <div className='vision.BarChart vision-bar-chart-container'>
            <ChartWrapper>
                {({ container, containerId }) => {
                    const svg = d3
                        .select(container)
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height)

                    console.log(getValue)
                    if (isStacked) {
                        console.log('here', svg)
                        const dataset = d3.stack().keys(data.dimensions.keys)(data.items)
                        // .map(key => {
                        //         return data.items.map((d, i) => ({
                        //                 x: i, //parse(d.year),
                        //                 y: + d[key]
                        //             }))
                        //         })
                        //     )

                        console.log(dataset)
                        // Set x, y and colors
                        var x = d3
                            .scaleOrdinal()
                            .domain(dataset[0].map(function (d) {
                                return d.x
                            }))
                            .range([
                                10, width - 10
                            ], 0.02)

                        var y = d3
                            .scaleLinear()
                            .domain([
                                0,
                                d3.max(dataset, function (d) {
                                    return d3.max(d, function (d) {
                                        return d.y0 + d.y
                                    })
                                })
                            ])
                            .range([height, 0])

                        var colors = ['b33040', '#d25c4d', '#f2b447', '#d9d574']

                        // // Define and draw axes
                        // var yAxis = d3
                        //     .svg
                        //     .axis()
                        //     .scale(y)
                        //     .orient('left')
                        //     .ticks(5)
                        //     .tickSize(-width, 0, 0)
                        //     .tickFormat(function (d) {
                        //         return d
                        //     });

                        // var xAxis = d3
                        //     .svg
                        //     .axis()
                        //     .scale(x)
                        //     .orient('bottom')
                        //     .tickFormat(d3.time.format('%Y'));

                        // svg
                        //     .append('g')
                        //     .attr('class', 'y axis')
                        //     .call(yAxis);

                        // svg
                        //     .append('g')
                        //     .attr('class', 'x axis')
                        //     .attr('transform', 'translate(0,' + height + ')')
                        //     .call(xAxis);

                        // Create groups for each series, rects for each segment
                        var groups = svg
                            .selectAll('g.cost')
                            .data(dataset)
                            .enter()
                            .append('g')
                            .attr('class', 'cost')
                            .style('fill', function (d, i) {
                                return colors[i]
                            })

                        var rect = groups
                            .selectAll('rect')
                            .data(function (d) {
                                return d
                            })
                            .enter()
                            .append('rect')
                            .attr('x', function (d) {
                                return x(d.x)
                            })
                            .attr('y', function (d) {
                                return y(d.y0 + d.y)
                            })
                            .attr('height', function (d) {
                                return y(d.y0) - y(d.y0 + d.y)
                            })
                            .attr('width', x.range())
                            .on('mouseover', function () {
                                tooltip.style('display', null)
                            })
                            .on('mouseout', function () {
                                tooltip.style('display', 'none')
                            })
                            .on('mousemove', function (d) {
                                var xPosition = d3.mouse(this)[0] - 15
                                var yPosition = d3.mouse(this)[1] - 25
                                tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')')
                                tooltip
                                    .select('text')
                                    .text(d.y)
                            })
                    } else {
                        data
                            .items
                            .forEach((item, i) => {
                                const scaledMax = isVertical
                                    ? height
                                    : width
                                const scaledValue = (getValue(item) / range[1]) * (scaledMax)

                                const x = isReversed
                                    ? (scaledMax - scaledValue)
                                    : i * (barSize + padding)
                                const y = isReversed
                                    ? 0
                                    : (scaledMax - scaledValue)

                                const barWidth = barSize
                                const barHeight = scaledValue

                                svg
                                    .append('rect')
                                    .attr('x', isVertical
                                        ? x
                                        : y)
                                    .attr('y', isVertical
                                        ? y
                                        : x)
                                    .attr('width', isVertical
                                        ? barWidth
                                        : barHeight)
                                    .attr('height', isVertical
                                        ? barHeight
                                        : barWidth)
                                    .attr('fill', palette[i % palette.length])
                                    .attr('fill-opacity', opacity)
                            })

                        const margin = 16
                        const x = d3
                            .scaleTime()
                            .range([0, width])
                        const y = d3
                            .scaleLinear()
                            .range([0, 100])
                    }
                    if (hasXAxis && false) {
                        const xAxis = svg
                            .append('g')
                            .attr('transform', 'translate(0,' + height + ')')
                            .call(d3.axisBottom(x))

                        // svg.append('g')     .attr('transform', 'translate(' + margin + ',' +
                        // (height+margin) + ')')     .attr('class','axis')     .call(xAxis)
                    }
                    if (hasYAxis && false) {
                        const yAxis = svg
                            .append('g')
                            .attr('transform', 'translate(0, 0)')
                            .call(d3.axisLeft(y))

                        // svg.append('g')     .attr('transform', 'translate(' + margin + ',' + margin +
                        // ')')     .attr('class','axis')     .call(yAxis)
                    }
                }}
            </ChartWrapper>
        </div>
    }
}

BarChart.options = options

export default BarChart
