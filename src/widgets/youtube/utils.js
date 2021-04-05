import { fromUrlParams } from 'util/url'

export default (url) => {
    const params = fromUrlParams(url.split('?').pop())
    return params.v
}
