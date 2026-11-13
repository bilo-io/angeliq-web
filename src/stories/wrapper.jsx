import React from 'react'
import { ErrorBoundary } from '../components'

export const StoryWrapper = ({ children }) => <ErrorBoundary>
    { children }
</ErrorBoundary>
