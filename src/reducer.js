import { combineReducers } from 'redux'

import session from 'data/redux/session/reducer'
import slides from 'data/redux/slides/reducer'
import schools from 'data/redux/schools/reducer'
import stats from 'data/redux/stats/reducer'
import stops from 'data/redux/stops/reducer'
import crypton from 'data/redux/crypton/reducer'

const rootReducer = combineReducers({
    session,
    schools,
    slides,
    stats,
    stops,
    crypton
})

export default rootReducer
