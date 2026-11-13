// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
const Chats = React.lazy(() => import(/* webpackChunkName: "chat" */ './chats'))
const Likes = React.lazy(() => import(/* webpackChunkName: "likes" */ './likes'))
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
        <Route exact path={`${scopeRoot}/settings`} render={ () => <Settings /> } />
        <Route exact path={`${scopeRoot}/likes`} render={ () => <Likes /> } />
        <Route exact path={`${scopeRoot}/search`} render={ () => <Search /> } />
        <Route exact path={`${scopeRoot}/chat`} render={ () => <Chats /> } />
        <Route exact path={`${scopeRoot}/profile`} render={ () => <Profile /> } />
    </>
)

export default AppRouter
