import * as d3 from 'd3'
import React, { Component } from 'react'
import { ChartWrapper } from '../chart-wrapper'

export class SvgElement extends Component {
    static defaultProps = {
    }

    render () {
        const {
            type,
            text,
            width,
            height,
            attribs,
            ...rest
        } = this.props

        return <ChartWrapper>
            {({ container }) => {
                const svg = d3.select(container).append('svg')
                    .attr('width', width || attribs.width)
                    .attr('height', height || attribs.height)

                const element = svg.append(type)
                    .attr('width', attribs.width)
                    .attr('height', attribs.height)
                const attrKeys = Object.keys(attribs)

                attrKeys.forEach(key => element.attr(key, attribs[key]))

                if (type === 'text' && text) {
                    element.text(text)
                }
            }}
        </ChartWrapper>
    }
}
