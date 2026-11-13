import React, { useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

// react-router 6+ dropped withRouter; this gives class and function components the
// same `history`, `location` and `match.params` props they got from v5. Like v5's
// history, the object is stable and `history.location` is always the current one.
export const withRouter = (Component) => {
    const WithRouter = (props) => {
        const navigate = useNavigate()
        const location = useLocation()
        const params = useParams()
        const latest = useRef({})
        latest.current = { navigate, location }
        const history = useRef(null)
        if (!history.current) {
            history.current = {
                push: (path, state) => latest.current.navigate(path, { state }),
                replace: (path, state) => latest.current.navigate(path, { replace: true, state }),
                goBack: () => latest.current.navigate(-1),
                get location () { return latest.current.location }
            }
        }
        return <Component {...props} history={history.current} location={location} match={{ params }} />
    }
    WithRouter.displayName = `withRouter(${Component.displayName || Component.name || 'Component'})`
    return WithRouter
}

export default withRouter
