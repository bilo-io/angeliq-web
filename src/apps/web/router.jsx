// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from 'react-router'
// #endregion

// #region Pages
import Portfolio from './portfolio'
// #endregion

export const WebRouter = () => (
    <Routes>
        <Route path='portfolio' element={ <Portfolio /> } />
        <Route path='*' element={ null } />
    </Routes>
)

export default WebRouter
