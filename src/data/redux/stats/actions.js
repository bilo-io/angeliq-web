import ScheduleService from '../../../apps/slides/schedules/service'
import { GETResource, POSTResource } from '../utils'
import {
    // CORE
    FETCH_PROJECTS
} from './reducer'

export const fetchProjects = (params = {}) => dispatch => {
    return GETResource({
        resourceName: 'stats/projects',
        actionType: FETCH_PROJECTS
    }, params, dispatch)
}
