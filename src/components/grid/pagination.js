import React, { Component } from 'react'
import { MasterGrid } from './'

export class GridPagination extends Component {
    static defaultProps = {
        data: {
            items: []
        }
    }

    addPage = () => {
        this.setState({
            pages: [
                ...this.state.pages,
                {
                    items: [ { x: 0, y: 0, w: 12, h:12 } ]
                }
            ]
        })
    }
    render () {
        const { data } = this.props
        const { pages } = this.state
        return <div>
            {
                data.items.map((page, pageIndex) => <MasterGrid key={ pageIndex }
                    data={ page.items }
                />)
            }
        </div>
    }
}