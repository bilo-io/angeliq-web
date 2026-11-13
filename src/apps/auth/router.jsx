// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Navigate } from 'react-router'
// #endregion

// #region Pages
const Login = React.lazy(() => import(/* webpackChunkName: "identity-login" */ './login'))
// #endregion

const scopeRoot = '/auth'

export const IdentityRouter = () => (
    <Routes>
        <Route index element={ <Navigate to={`${scopeRoot}/login`} replace /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='*' element={ null } />
    </Routes>
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
