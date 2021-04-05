import axios from 'axios'

// TODO: delete, recreate and move to safe place, e.g. Environment Variables on
// Gitlab
const clientId = 'f9493480-c4b2-4635-bbb3-7c118b6524bd'
const clientSecret = 'zuqdG+dEWuhZCoIhtIdHyM1Q0hLLVoU4WfkoQpDu5Z4='
const identityStsUrl = 'https://identity.whereismytransport.com/connect/token'
const wimtApiUrl = 'https://platform.whereismytransport.com/api'

// TODO: consider this: https://www.npmjs.com/package/geojson

export class WimtApi {
    constructor () {
        this.fetchToken()
    }

    fetchToken () {
        console.log('fetching WIMT token')
        const data = new FormData()
        data.set('client_id', clientId)
        data.set('client_secret', clientSecret)
        data.set('grant_type', 'client_credentials')
        data.set('scope', 'transportapi:all')

        axios({
            method: 'POST',
            url: identityStsUrl,
            data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            // TODO: better storage options... localStorage or redux
            this.token = response.data.access_token
            localStorage.setItem('wimt-api-token', this.token)
        }).catch(error => {
            console.warn('ERROR: ', error)
            this.error = error
        })
    }

    fetchAgencies ({ params }) {
        return axios({
            method: 'GET',
            headers: this.authHeaders(),
            url: `${wimtApiUrl}/agencies`
        })
    }

    fetchStops ({ params }) {
        return axios({
            method: 'GET',
            headers: this.authHeaders(),
            url: `${wimtApiUrl}/stops?offset=0&limit=5`
        })
    }

    fetchLines ({ params }) {
        return axios({
            method: 'GET',
            headers: this.authHeaders(),
            url: `${wimtApiUrl}/lines?offset=0&limit=5`
        })
    }

    fetchJourneys ({ params }) {
        // todo: specify from UI
        const data = {
            geometry: {
                type: 'MultiPoint',
                coordinates: [
                    [
                        18.37755,
                        -33.94393
                    ],
                    [
                        18.41489,
                        -33.91252
                    ]
                ]
            },
            maxItineraries: 5
        }
        return axios({
            method: 'POST',
            headers: this.authHeaders(),
            url: `${wimtApiUrl}/journeys`,
            data
        })
    }

    authHeaders () {
        const token = this.token || localStorage.getItem('wimt-api-token')

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
        console.log(headers)
        return headers
    }
}

export const WimtMock = {
    agencies: [
        {
            id: '_UxoeIJ20UqKSKfLAP-bXw',
            href: 'https://platform.whereismytransport.com/api/agencies/_UxoeIJ20UqKSKfLAP-bXw',
            name: 'Algoa Bus Company',
            culture: 'en'
        }, {
            id: 'jLjibFoim0iwWau4AWoEdQ',
            href: 'https://platform.whereismytransport.com/api/agencies/jLjibFoim0iwWau4AWoEdQ',
            name: 'Ferrocarriles Suburbanos',
            culture: 'es'
        }, {
            id: 'edObkk6o-0WN3tNZBLqKPg',
            href: 'https://platform.whereismytransport.com/api/agencies/edObkk6o-0WN3tNZBLqKPg',
            name: 'Gautrain',
            culture: 'en'
        }, {
            id: 'JfA8Bw8Zp024Kqu4AXiSpQ',
            href: 'https://platform.whereismytransport.com/api/agencies/JfA8Bw8Zp024Kqu4AXiSpQ',
            name: 'Metrobús',
            culture: 'es'
        }, {
            id: 'HE59N3RXM0q5vKu4AXlQZg',
            href: 'https://platform.whereismytransport.com/api/agencies/HE59N3RXM0q5vKu4AXlQZg',
            name: 'Mexibús',
            culture: 'es'
        }, {
            id: 'MgUq5b9mOEunx6u4AXt_BA',
            href: 'https://platform.whereismytransport.com/api/agencies/MgUq5b9mOEunx6u4AXt_BA',
            name: 'Mexicable',
            culture: 'es'
        }, {
            id: 'FGQd6jM16UaxDKu4AXufuQ',
            href: 'https://platform.whereismytransport.com/api/agencies/FGQd6jM16UaxDKu4AXufuQ',
            name: 'PumaBus',
            culture: 'es'
        }, {
            id: 'GtvOEQAFZ0GtU6u4AXwvPg',
            href: 'https://platform.whereismytransport.com/api/agencies/GtvOEQAFZ0GtU6u4AXwvPg',
            name: 'Red de Transporte de Pasajeros',
            culture: 'es'
        }, {
            id: 'D2QBjVkZ702906u4AX1C9Q',
            href: 'https://platform.whereismytransport.com/api/agencies/D2QBjVkZ702906u4AX1C9Q',
            name: 'SVBus',
            culture: 'es'
        }, {
            id: 'GewRJAw5tUmC4Ku4AX1-SQ',
            href: 'https://platform.whereismytransport.com/api/agencies/GewRJAw5tUmC4Ku4AX1-SQ',
            name: 'Sendero Segura',
            culture: 'es'
        }, {
            id: 'CXll_ai68E2u46u4AXzuLA',
            href: 'https://platform.whereismytransport.com/api/agencies/CXll_ai68E2u46u4AXzuLA',
            name: 'Servicio de Transportes Eléctricos',
            culture: 'es'
        }, {
            id: 'JUR9bFXmVkWDHqu4AXaY0g',
            href: 'https://platform.whereismytransport.com/api/agencies/JUR9bFXmVkWDHqu4AXaY0g',
            name: 'Sistema de Transporte Colectivo Metro',
            culture: 'es'
        }, {
            id: 'IFCZKKX7-k6Z96u1AIhqQg',
            href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
            name: 'Sistema de Transporte Público Concesionado',
            culture: 'es'
        }
    ],
    stops: [
        {
            id: 'cXgInIEqfkGeo6tyAWIvlg',
            href: 'https://platform.whereismytransport.com/api/stops/cXgInIEqfkGeo6tyAWIvlg',
            agency: {
                id: '_UxoeIJ20UqKSKfLAP-bXw',
                href: 'https://platform.whereismytransport.com/api/agencies/_UxoeIJ20UqKSKfLAP-bXw',
                name: 'Algoa Bus Company',
                culture: 'en'
            },
            name: '1 Cape Rd E',
            geometry: {
                type: 'Point',
                coordinates: [25.60895, -33.9619]
            },
            modes: ['Bus']
        }, {
            id: 'wlaGyfIGFkWGzqtyAWIvrA',
            href: 'https://platform.whereismytransport.com/api/stops/wlaGyfIGFkWGzqtyAWIvrA',
            agency: {
                id: '_UxoeIJ20UqKSKfLAP-bXw',
                href: 'https://platform.whereismytransport.com/api/agencies/_UxoeIJ20UqKSKfLAP-bXw',
                name: 'Algoa Bus Company',
                culture: 'en'
            },
            name: '1 Cape Rd W',
            geometry: {
                type: 'Point',
                coordinates: [25.60895, -33.9619]
            },
            modes: ['Bus']
        }, {
            id: 'j5CnCK_hmk2uXKuvALw-aA',
            href: 'https://platform.whereismytransport.com/api/stops/j5CnCK_hmk2uXKuvALw-aA',
            agency: {
                id: 'edObkk6o-0WN3tNZBLqKPg',
                href: 'https://platform.whereismytransport.com/api/agencies/edObkk6o-0WN3tNZBLqKPg',
                name: 'Gautrain',
                culture: 'en'
            },
            name: '1 Eglin Rd',
            geometry: {
                type: 'Point',
                coordinates: [28.06695, -26.03285]
            },
            modes: ['Bus']
        }, {
            id: '_2cgSPiI3EOF1au1AIkyNg',
            href: 'https://platform.whereismytransport.com/api/stops/_2cgSPiI3EOF1au1AIkyNg',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '1 de Enero',
            geometry: {
                type: 'Point',
                coordinates: [-99.24023, 19.58194]
            },
            modes: ['ShareTaxi']
        }, {
            id: 'gLxWL1El00CJJKu1AIkyTA',
            href: 'https://platform.whereismytransport.com/api/stops/gLxWL1El00CJJKu1AIkyTA',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '1 de Febrero',
            geometry: {
                type: 'Point',
                coordinates: [-99.22846, 19.47256]
            },
            modes: ['ShareTaxi']
        }
    ],
    lines: [
        {
            id: '0n9pQVWMLESAP6u1AIhqvQ',
            href: 'https://platform.whereismytransport.com/api/lines/0n9pQVWMLESAP6u1AIhqvQ',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '18 de Marzo - Av. de Los Fresnos',
            description: '88',
            mode: 'ShareTaxi',
            colour: '#ffe4007c',
            textColour: '#ffffffff'
        }, {
            id: '2-6cl7XMCUOLp6u1AIhq3Q',
            href: 'https://platform.whereismytransport.com/api/lines/2-6cl7XMCUOLp6u1AIhq3Q',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '18 de Marzo - Izcalli Piramide',
            description: '88',
            mode: 'ShareTaxi',
            colour: '#ffe4007c',
            textColour: '#ffffffff'
        }, {
            id: 'zHV-jVWCp0a3Dau1AIhq4g',
            href: 'https://platform.whereismytransport.com/api/lines/zHV-jVWCp0a3Dau1AIhq4g',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '18 de Marzo - Lázaro Cardenas 2a',
            description: '18',
            mode: 'ShareTaxi',
            colour: '#ffe4007c',
            textColour: '#ffffffff'
        }, {
            id: 't0-qcuHek0KYNKu1AIhq9Q',
            href: 'https://platform.whereismytransport.com/api/lines/t0-qcuHek0KYNKu1AIhq9Q',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '18 de Marzo - Unidad Tenayo',
            description: '88',
            mode: 'ShareTaxi',
            colour: '#ffe4007c',
            textColour: '#ffffffff'
        }, {
            id: 'd1UAkG21j0-Iu6u1AIhq_A',
            href: 'https://platform.whereismytransport.com/api/lines/d1UAkG21j0-Iu6u1AIhq_A',
            agency: {
                id: 'IFCZKKX7-k6Z96u1AIhqQg',
                href: 'https://platform.whereismytransport.com/api/agencies/IFCZKKX7-k6Z96u1AIhqQg',
                name: 'Sistema de Transporte Público Concesionado',
                culture: 'es'
            },
            name: '1ro de Septiembre - Tlalnepantla',
            mode: 'ShareTaxi',
            colour: '#ffe4007c',
            textColour: '#ffffffff'
        }
    ]
}

export default WimtApi
