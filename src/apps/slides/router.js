// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'
// #endregion

// #region Pages
const Dashboard = React.lazy(() => import(/* webpackChunkName: "slides-dashboard" */ './dashboard'))
// const Settings = React.lazy(() => import(/* webpackChunkName: "settings" */ './settings'))
// const Store = React.lazy(() => import(/* webpackChunkName: "store" */ './store'))
// const Subscriptions = React.lazy(() => import(/* webpackChunkName: "slides-subscriptions" */ './subscriptions'))
// const Widgets = React.lazy(() => import(/* webpackChunkName: "slides-widgets" */ './widgets'))
const Screens = React.lazy(() => import(/* webpackChunkName: "slides-screens" */ './screens'))
const Schedules = React.lazy(() => import(/* webpackChunkName: "slides-schedules" */ './schedules'))
const Slideshows = React.lazy(() => import(/* webpackChunkName: "slides-slideshows" */ './slideshows'))
const SlidesEditor = React.lazy(() => import(/* webpackChunkName: "slides-editor" */ './slides-editor'))
// const Sources = React.lazy(() => import(/* webpackChunkName: "sources" */ './sources'))
// const Store = React.lazy(() => import(/* webpackChunkName: "store" */ './store'))
// const Subscriptions = React.lazy(() => import(/* webpackChunkName: "subscriptions" */ './subscriptions'))
// const Widgets = React.lazy(() => import(/* webpackChunkName: "widgets" */ './widgets'))
// #endregion

const scopeRoot = '/app/slides'
export const SlidesRouter = () => (
    <React.Fragment>
        <Route exact path={`${scopeRoot}`}
            render={
                () => <Redirect to={`${scopeRoot}/dashboard`} />
            }
        />
        <Route exact path={`${scopeRoot}/dashboard`} render={ () => <Dashboard /> } />
        <Route exact path={`${scopeRoot}/screens`} render={ () => <Screens /> } />
        <Route exact path={`${scopeRoot}/schedules`} render={ () => <Schedules /> } />
        <Route exact path={`${scopeRoot}/slideshows`} render={ () => <Slideshows /> } />
        <Route exact path={`${scopeRoot}/slideshows/edit/:id`} render={ () => <SlidesEditor /> } />
        <Route exact path={`${scopeRoot}/create`} render={ () => <SlidesEditor /> } />
        {/* <Route exact path={`${scopeRoot}/sources`} render={ () => <Sources /> } /> */}
        {/* <Route exact path={`${scopeRoot}/subscriptions`} render={ () => <Subscriptions /> } />
        <Route exact path={`${scopeRoot}/widgets`} render={ () => <Widgets /> } />
        <Route exact path={`${scopeRoot}/widgets`}
            render={
                () => <Redirect to={`${scopeRoot}/widgets/store`} />
            }
        />
        <Route exact path={`${scopeRoot}/widgets/store`} render={ () => <Store /> } />
        <Route exact path={`${scopeRoot}/settings`} render={ () => <Settings /> } /> */}
    </React.Fragment>
)

export const SlidesNavbar = [
    { separator: true },
    {
        label: 'Dashboard',
        path: `${scopeRoot}`,
        faIcon: 'solar-panel'
    },
    { separator: true },
    {
        label: 'Slideshows',
        path: `${scopeRoot}/slideshows`,
        faIcon: 'layer-group',
        children: [
            {
                label: 'Add Slideshow',
                path: `${scopeRoot}/slideshows/edit/new`,
                faIcon: 'plus'
            },
            {
                label: 'Projects',
                path: `${scopeRoot}/slideshows`,
                faIcon: 'folder'
            }
        ]
    },
    {
        label: 'Screens',
        path: `${scopeRoot}/screens`,
        faIcon: 'desktop',
        children: [
            {
                label: 'Add Screen',
                path: `${scopeRoot}/screens/add`,
                faIcon: 'plus'
            },
            {
                label: 'Projects',
                path: `${scopeRoot}/screens`,
                faIcon: 'folder'
            }
        ]
    },
    {
        label: 'Schedules',
        path: `${scopeRoot}/schedules`,
        faIcon: 'calendar',
        children: [
            {
                label: 'Add Schedule',
                path: `${scopeRoot}/schedules/add`,
                faIcon: 'plus'
            },
            {
                label: 'Projects',
                path: `${scopeRoot}/schedules`,
                faIcon: 'folder'
            }
        ]
    },
    { separator: true },
    {
        label: 'Sources',
        path: `${scopeRoot}/sources`,
        faIcon: 'server',
        children: [
            {
                label: 'Add Files',
                path: `${scopeRoot}/sources/add`,
                faIcon: 'plus'
            },
            {
                label: 'All Files',
                path: `${scopeRoot}/sources`,
                faIcon: 'ellipsis-h'
            },
            {
                label: 'Images',
                path: `${scopeRoot}/sources?type=images`,
                faIcon: 'images'
            },
            {
                label: 'Audio',
                path: `${scopeRoot}/sources?type=audio`,
                faIcon: 'music'
            },
            {
                label: 'Video',
                path: `${scopeRoot}/sources?type=video`,
                faIcon: 'film'
            },
            {
                label: 'Documents',
                path: `${scopeRoot}/sources?type=documents`,
                faIcon: 'file-alt'
            }
        ]
    }
    // {
    //     label: 'Widgets',
    //     path: `${scopeRoot}/widgets`,
    //     faIcon: 'cubes',
    //     children: [
    //         {
    //             label: 'Store',
    //             path: `${scopeRoot}/widgets/store`,
    //             faIcon: 'shopping-cart'
    //         }
    //     ]
    // }
]

export default SlidesRouter
