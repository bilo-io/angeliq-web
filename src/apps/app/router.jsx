// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Navigate } from 'react-router'
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
    <Routes>
        <Route index element={ <Navigate to={`${scopeRoot}/search`} replace /> } />
        <Route path='settings' element={ <Settings /> } />
        <Route path='likes' element={ <Likes /> } />
        <Route path='search' element={ <Search /> } />
        <Route path='chat' element={ <Chats /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='*' element={ null } />
    </Routes>
)

export default AppRouter
