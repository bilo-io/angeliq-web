import ScheduleService from '../../../apps/slides/schedules/service'
import { GETResource, POSTResource } from '../utils'
import {
    // CORE
    FETCH_COURSES
} from './reducer'

export const fetchCourses = (params = {}) => dispatch => {
    return GETResource({
        resourceName: 'schools/courses',
        actionType: FETCH_COURSES
    }, params, dispatch)
}
