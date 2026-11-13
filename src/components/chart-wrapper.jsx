import React, { Component } from 'react'
import PropTypes from 'prop-types'

window.addTooltip = function (node, text) {
    node.onclick = function () {
        console.log(text)
    }
}

window.modalFns = {
    addPathsModalToNode: (title, node, pagesIds) => {
        const handler = () => {
            console.log('addPathsModalToNode mock', title, pagesIds)
        }
        if (node.forEach) {
            node.forEach(element => { element.onclick = handler })
        } else {
            node.onclick = handler
        }
    }
}

export class ChartWrapper extends Component {
    static propTypes = {
        slideFunction: PropTypes.string,
        data: PropTypes.any,
        children: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        options: PropTypes.object,
        callbacks: PropTypes.object,
        exportVersion: PropTypes.bool
    }

    static defaultProps = {
        data: {},
        options: {},
        style: {
            width: '100%',
            overflowX: 'auto'
        },
        callbacks: {
            updateState: console.log
        },
    }

    state = {
        error: null
    }

    containerId = 'chart_id_' + Math.random().toString().split('.')[1] //uniqueId('chart_')

    componentDidMount () {
        const result = this.renderChart()
        this.onResize = (result && result.resizeCallback) || this.renderChart
        window.addEventListener('resize', this.onResize, false)

        if (result) {
            this.updateCallback = result.updateCallback
        }
    }

    componentWillUnmount () {
        if (this.onResize) {
            window.removeEventListener('resize', this.onResize)
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.data !== this.props.data) {
            this.renderChart()
        }
    }

    clearChart = () => {
        const div = document.getElementById(this.id)
        if (div) {
            div.innerHTML = ''
        }
    }

    renderChart = () => {
        const {
            data,
            options,
            children,
        } = this.props

        const container = document.querySelector(`#${this.containerId}`)

        if (this.chart && this.chart.updateCallback) {
            this.chart.updateCallback(data, options)
        } else if (this.props.children) {
            container.innerHTML = ''
            if(children) {
                children({
                    data,
                    containerId: this.containerId,
                    container: this.containerRef
                })
            }
        }
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }

    render () {
        const { style, className } = this.props

        return <div
            id={ this.containerId }
            ref={ this.getContainerRef }
            style={ style }
            className={ className }
        />
    }
}
