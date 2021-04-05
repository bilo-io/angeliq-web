import html2pdf from 'html2pdf.js'
import { domToImage, toPng, toJpeg } from 'dom-to-image'

const pdf = ({
    containerIds = [],
    fileName
}) => {
    containerIds.forEach((containerId, i) => {
        const node = document.getElementById(containerId)
        console.log('export.toPDF', fileName, node)
        const opt = {
            margin: 1,
            filename: `${fileName}.pdf`,
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        }

        html2pdf()
            .set(opt)
            .from(node)
            .save()
    })
}

const png = ({
    containerIds = [],
    fileName
}) => {
    containerIds.forEach(containerId => {
        const node = document.getElementById(containerId)
        console.log('exportTo.png', fileName, node)

        toPng(node)
            .then((dataUrl) => {
                // var img = new Image();
                // img.src = dataUrl;
                // document.body.appendChild(img);
                var link = document.createElement('a')
                link.download = `${fileName}${containerIds.length > 0
                    ? `_${containerId}`
                    : ''}.png`
                link.href = dataUrl
                link.click()
            })
            .catch((error) => {
                console.error('oops, something went wrong!', error)
            })
    })
}

const jpg = ({
    containerIds = [],
    fileName,
    quality
}) => {
    containerIds.forEach((containerId, i) => {
        const node = document.getElementById(containerId)
        console.log('exportTo.jpg', fileName, node)

        toJpeg(node, { quality })
            .then((dataUrl) => {
                var link = document.createElement('a')
                link.download = `${fileName}${containerIds.length > 0
                    ? `_${i}`
                    : ''}.jpg`
                link.href = dataUrl
                link.click()
            })
    })
}

const clipboard = (text) => {
    const el = document.createElement('textarea')
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

const json = ({ jsonObject, fileName, toClipboard }) => {
    const jsonString = JSON.stringify(jsonObject, false, 2)
    if (toClipboard) {
        clipboard(jsonString)
    } else {
        file('json', JSON.parse(jsonString), fileName)
    }
}

const csv = ({ json, fileName, toClipboard }, columns = []) => {
    console.log('exportTo.csv', json, columns)
    const renderedColumns = columns.length > 0
        ? columns
        : Object.keys(json[0]) // TODO: error checking for empty array

    let csvString = renderedColumns.join(',') + '\n'
    json.forEach(element => {
        csvString += renderedColumns.map(key => element[key]).join(',') + '\n'
    })
    console.log(csvString)
    if (toClipboard) {
        // clipboard(text)
    } else {
        file('csv', csvString, fileName)
    }
    return csvString
}

const file = (format, data, fileName) => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([data], { type: `text/${format}` }))
    a.setAttribute('download', `${fileName}.${format}`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const formats = [
    'pdf',
    'image',
    'csv',
    'code',
    'excel',
    'powerpoint'
]

export default {
    pdf,
    png,
    jpg,
    csv,
    json,
    file,
    clipboard,
    formats
}
