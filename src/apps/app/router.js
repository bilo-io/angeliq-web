// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
const Chat = React.lazy(() => import(/* webpackChunkName: "chat" */ './chat'))
const Matches = React.lazy(() => import(/* webpackChunkName: "matches" */ './matches'))
const Profile = React.lazy(() => import(/* webpackChunkName: "profile" */ './profile'))
const Settings = React.lazy(() => import(/* webpackChunkName: "settings" */ './settings'))
const Search = React.lazy(() => import(/* webpackChunkName: "search" */ './search'))

// #endregion

const scopeRoot = '/app'
export const AppRouter = () => (
    <>
        <Route exact path={`${scopeRoot}`}
            render={
                () => <Redirect to={`${scopeRoot}/search`} />
            }
        />
        <Route exact path={`${scopeRoot}/search`} render={ () => <Search /> } />
        <Route exact path={`${scopeRoot}/matches`} render={ () => <Matches /> } />
        <Route exact path={`${scopeRoot}/chat`} render={ () => <Chat /> } />
        <Route exact path={`${scopeRoot}/profile`} render={ () => <Profile /> } />
        <Route exact path={`${scopeRoot}/settings`} render={ () => <Settings /> } />
    </>
)

export default AppRouter
