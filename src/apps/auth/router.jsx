// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
const Login = React.lazy(() => import(/* webpackChunkName: "identity-login" */ './login'))
// #endregion

const scopeRoot = '/auth'

export const IdentityRouter = () => (
    <>
        <Route exact
            path={`${scopeRoot}`}
            render={
                () => <Redirect to={`${scopeRoot}/login`} />
            }
        />
        <Route exact path={`${scopeRoot}/login`} render={ () => <Login /> } />>
    </>
)

export const IdentityNavBar = [
    { separator: true },
    {
        label: 'Profile',
        path: `${scopeRoot}/profile`,
        faIcon: 'user'
    },
    {
        label: 'Subscriptions',
        path: `${scopeRoot}/subscriptions`,
        faIcon: 'file-invoice-dollar'
    }
]

export default IdentityRouter
