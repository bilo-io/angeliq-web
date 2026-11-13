import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

// react-router 6+ dropped withRouter; this gives class and function components the
// same `history`, `location` and `match.params` props they got from v5.
export const withRouter = (Component) => {
    const WithRouter = (props) => {
        const navigate = useNavigate()
        const location = useLocation()
        const params = useParams()
        const history = {
            push: (path, state) => navigate(path, { state }),
            replace: (path, state) => navigate(path, { replace: true, state }),
            goBack: () => navigate(-1),
            location
        }
        return <Component {...props} history={history} location={location} match={{ params }} />
    }
    WithRouter.displayName = `withRouter(${Component.displayName || Component.name || 'Component'})`
    return WithRouter
}

export default withRouter
