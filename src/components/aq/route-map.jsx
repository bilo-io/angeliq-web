import React from 'react'

// A drawn map for the mock screens: a few streets, the route and the pins. No map service needed.
export const RouteMap = ({ className = '', pulse = false, label }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-muted ${className}`} style={{ aspectRatio: '400 / 220' }}>
        <svg viewBox='0 0 400 220' className='h-full w-full' preserveAspectRatio='xMidYMid slice' aria-hidden>
            <g stroke='hsl(var(--background))' strokeWidth='10' fill='none' strokeLinecap='round'>
                <path d='M-10 60 H420' /><path d='M-10 150 H420' /><path d='M80 -10 V230' /><path d='M250 -10 V230' />
                <path d='M-10 210 L180 20' /><path d='M330 -10 L420 120' />
            </g>
            <path d='M60 190 C 120 160, 140 70, 250 60 S 330 50, 350 40' stroke='#ff4165' strokeWidth='5' fill='none' strokeLinecap='round' strokeDasharray='2 10' />
            <circle cx='60' cy='190' r='9' fill='#a855f7' stroke='white' strokeWidth='3' />
            {pulse ? (
                <circle cx='350' cy='40' r='9' fill='#ff4165' opacity='0.5'>
                    <animate attributeName='r' values='9;24;9' dur='1.6s' repeatCount='indefinite' />
                    <animate attributeName='opacity' values='0.5;0;0.5' dur='1.6s' repeatCount='indefinite' />
                </circle>
            ) : null}
            <circle cx='350' cy='40' r='9' fill='#ff4165' stroke='white' strokeWidth='3' />
        </svg>
        {label ? (
            <span className='absolute bottom-2 left-2 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-card-foreground shadow'>{label}</span>
        ) : null}
    </div>
)

export default RouteMap
