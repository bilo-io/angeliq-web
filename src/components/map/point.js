const toGeoJson = (latitude, longitude) => {
    // console.log('toGeoJson: ', coordinates)
    return {
        type: 'Point',
        coordinates: [
            longitude,
            latitude
        ]
    }
}

const fromGeoJson = (coordinates, latitudeKey, longitudeKey) => {
    // console.log('fromGeoJson: ', coordinates)
    return {
        [latitudeKey]: coordinates[1],
        [longitudeKey]: coordinates[0]
    }
}

export default {
    fromGeoJson,
    toGeoJson
}