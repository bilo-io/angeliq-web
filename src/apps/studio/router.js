// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
import Dashboard from './dashboard'
const Subscriptions = React.lazy(() => import(/* webpackChunkName: "studio-subscriptions" */ './subscriptions'))
const Widgets = React.lazy(() => import(/* webpackChunkName: "studio-widgets" */ './widgets'))
// const Store = React.lazy(() => import(/* webpackChunkName: "studio-store" */ './store'))
// #endregion

const scopeRoot = '/app/studio'
export const StudioRouter = () => (
    <React.Fragment>
        <Route exact path={`${scopeRoot}`}
            render={
                () => <Redirect to={`${scopeRoot}/dashboard`} />
            }
        />
        <Route exact path={`${scopeRoot}/dashboard`} render={ () => <Dashboard /> } />
        <Route exact path={`${scopeRoot}/subscriptions`} render={ () => <Subscriptions /> } />
        <Route exact path={`${scopeRoot}/widgets`} render={ () => <Widgets /> } />
        <Route exact path={`${scopeRoot}/widgets`}
            render={
                () => <Redirect to={`${scopeRoot}/widgets/store`} />
            }
        />
        {/* <Route exact path={`${scopeRoot}/widgets/store`} render={ () => <Store /> } /> */}
        <Route exact path={`${scopeRoot}/account`} render={ () => <Settings /> } />
        <Route exact path={`${scopeRoot}/account?tab=settings`} render={ () => <Settings /> } />
    </React.Fragment>
)

export const StudioNavbar = [
    { separator: true },
    {
        label: 'Dashboard',
        path: `${scopeRoot}`,
        faIcon: 'solar-panel'
    },
    { separator: true },
    {
        label: 'Workspaces',
        path: '/workspaces',
        faIcon: 'users'
    },
    { separator: true },
    {
        label: 'Slides',
        path: '/app/slides',
        faIcon: 'layer-group'
    },
    {
        label: 'Schools',
        path: '/app/schools',
        faIcon: 'university'
    },
    {
        label: 'Stops',
        path: '/app/stops',
        faIcon: 'map-pin'
    },
    {
        label: 'Stats',
        path: '/app/stats',
        faIcon: 'chart-pie'
    },
    {
        label: 'Crypton',
        path: '/app/crypton',
        faIcon: 'money-check'
    },
    { separator: true },
    {
        label: 'Widgets',
        path: `${scopeRoot}/widgets`,
        faIcon: 'cubes',
        children: [
            {
                label: 'Store',
                path: `${scopeRoot}/widgets/store`,
                faIcon: 'shopping-cart'
            }
        ]
    },
    { separator: true },
    {
        label: 'Account',
        path: '/app/studio/account',
        faIcon: 'file-signature',
        children: [
            {
                label: 'Profile',
                path: '/app/studio/account?tab=profile',
                faIcon: 'user'
            },
            {
                label: 'Subscription',
                path: '/app/studio/account?tab=subscription',
                faIcon: 'file-signature'
            },
            {
                label: 'Billing',
                path: '/app/studio/account?tab=billing',
                faIcon: 'file-signature'
            },
            {
                label: 'Settings',
                path: '/app/studio/account?tab=settings',
                faIcon: 'cog'
            }
        ]
    }
]

export default StudioRouter
