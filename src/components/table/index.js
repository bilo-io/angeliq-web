import React, { Component } from 'react'

export const Table = ({ headers, data }) => {
    return <div className='vision-viz Table'>
        <table>
            <thead>
                {
                    headers && <tr>
                        {
                            headers.map((header, headerIndex) => <th key={ headerIndex }>{ header }</th>)
                        }
                    </tr>
                }
            </thead>
            <tbody>
                {
                    data && Array.isArray(data) && data.map((item, rowIndex) => <tr key={ rowIndex }>
                        {
                            headers && headers.map((key, keyIndex) => {
                                const entry = item[key]
                                const { significances } = item
                                return <td key={ keyIndex } className={ significances && significances.value > 0
                                    ? 'sig-greater'
                                    : significances?.value < 0
                                        ? 'sig-less'
                                        : '' }>
                                    { entry }
                                </td>
                            })
                        }
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Table
