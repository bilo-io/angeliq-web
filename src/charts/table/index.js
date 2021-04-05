import React, { Component } from 'react'
import { Table as TableComponent } from 'components'
import options from './config'

export const TableChart = ({ data, options }) => {
    console.log('vision.TableChart', data, options)
    return <div className='vision.TableChart'>
        <TableComponent
            headers={ data.dimensions.keys }
            data={ data.items }
        />
    </div>
}

TableChart.otions = options

export default TableChart
