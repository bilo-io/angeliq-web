import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Map,
    TileLayer,
    Marker,
    CircleMarker,
    Polyline,
    Popup
} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import markerBlack from '../../img/map/map-pin-black.svg'
import markerBlue from '../../img/map/map-pin-blue.svg'
import markerShadow from '../../img/map/map-pin-shadow.svg'
import markerWhite from '../../img/map/map-pin-white-blue.svg'
import L from 'leaflet'

import geoPoint from './point'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const mapSrc = '../../img/map'
const pinProps = {
    shadowUrl: `../../img/map/map-pin-shadow.svg`,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
}

const pinBlack = {
    iconUrl: `${mapSrc}/map-pin-black.svg`,
    ...pinProps
}
const pinWhite = {
    iconUrl: `${mapSrc}/map-pin-white.svg`,
    ...pinProps
}
const pinBlue = {
    iconUrl: `${mapSrc}/map-pin-blue.svg`,
    ...pinProps
}
export class VisionMap extends Component {
    constructor(props) {
        super(props)
        this.style = 'dark'
        this.token = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY2lmcDVpOW90MDFncnRlbHgwZXN1bDVsciJ9.iIMCbu4WnvsBgsGsChtY2Q'
    }
    static propTypes = {
        points: PropTypes.array,
        lines: PropTypes.array,
        pins: PropTypes.array
    }
    state = {
        lat: -33.9249,
        lng: 18.4241,
        zoom: 11,
        pointRadius: 5,
        bounds: []
        // bounds: []
    }
    onClick = (e) => {
        this.props.onClick(e.latlng.slice().reverse)
    }
    componentDidMount () {
        console.log(this.props)
        this.showPoints(this.props.points)
    }
    showPoints = (points) => {
        const { lat, lng } = this.state
        const bounds = L.latLngBounds([
            { lat, lng },
            { lat, lng }
        ])
        points.forEach((p) => bounds.extend(geoPoint.fromGeoJson(p.geometry.coordinates, 'lat', 'lng')))
        setTimeout(() => {
            this.bounds = bounds
            console.log('this.bounds', this.bounds)
        }, 100)
    }
    render() {
        const { bounds, style, theme, children, lines, points, pins } = this.props
        const center = [this.state.lat, this.state.lng]
        const { pointRadius, zoom } = this.state
        this.theme = `https://api.tiles.mapbox.com/v4/mapbox.${(theme || this.style)}/{z}/{x}/{y}.png?access_token=${this.token}`

        return  (
            <div style={{position:'relative', height: '100%', width: '100%'}}>
                <Map
                    // animate={ true }
                    // bounds={ bounds }
                    ref={ el => this.map = el}
                    className='map'
                    center={ center }
                    bounds={ this.bounds }
                    zoom={ zoom }
                    zoomControl={ false }
                    onClick={this.onClick}
                    style={ style }>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url={ this.theme }
                    />
                    {
                        (points || []).map( (point, i) => <CircleMarker
                            radius={ pointRadius }
                            key={`circle-marker_${i}_${point.label}`}
                            color={point.color || '#00adee'}
                            fillColor={point.color || '#00adee'}
                            center={point.geometry.coordinates.slice().reverse()}>
                            <Popup>
                                <span>{ point.address || point.name || point.label }</span>
                            </Popup>
                        </CircleMarker>
                        )
                    }
                                        {
                        (lines || []).map((line, i) => <Polyline key={`polyline_${i}`} color={line.color} positions={line.geometry.coordinates} />)
                    }
                    {
                        (pins || []).map((point, i) => <Marker
                            key={`marker_${i}_${point.label}`}
                            position={ point.geometry.coordinates.slice().reverse() }>
                            <Popup>
                                <span>{ point.address }</span>
                            </Popup>
                        </Marker>
                        )
                    }
                    { children }
                </Map>
            </div>
        )
    }
}

export default VisionMap