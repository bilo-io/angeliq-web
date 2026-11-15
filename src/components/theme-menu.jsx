import React from 'react'
import { ThemeToggle } from '../vendor/midnite-ui/components/theme-toggle'

// Light / dark / system / time menu, pinned to the corner of every page.
export const ThemeMenu = () => (
    <div
        className='rounded-md border border-border bg-card text-card-foreground shadow-md'
        style={{ position: 'fixed', right: '1rem', bottom: '1rem', zIndex: 1000, width: '9rem' }}
    >
        <ThemeToggle expanded />
    </div>
)

export default ThemeMenu
