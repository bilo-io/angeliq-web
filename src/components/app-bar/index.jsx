import React from 'react'
import FAIcon from 'react-fontawesome'
import { ThemeToggle } from '../../vendor/midnite-ui/components/theme-toggle'

// The Midnite app bar: a blurred card strip with the menu, the wordmark, the theme toggle and help.
export const AppBar = ({ toggleAppMenu }) => (
    <header className="app-bar-midnite absolute inset-x-0 top-0 z-[11] flex h-12 items-center justify-between border-b border-border/80 bg-card/90 px-2 text-foreground backdrop-blur-md">
        <button
            type="button"
            aria-label="Open the menu"
            onClick={toggleAppMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
            <FAIcon name='bars' />
        </button>
        <div className="aq-wordmark select-none text-xl leading-none">AngeliQ</div>
        <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
                type="button"
                aria-label="Help"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
                <FAIcon name='question-circle' />
            </button>
        </div>
    </header>
)

export default AppBar
