// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
import Portfolio from './portfolio'
// #endregion

const scopeRoot = '/web'

export const WebRouter = () => (
    <>
        <Route exact
            path={`${scopeRoot}`}
            render={
                () => <Redirect to={`${scopeRoot}`} />
            }
        />
        <Route exact path={`${scopeRoot}/portfolio`} component={ Portfolio } />
    </>
)

export default WebRouter
