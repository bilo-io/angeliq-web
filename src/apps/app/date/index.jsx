import React from 'react'
import { Link } from 'react-router'
import { BadgeCheck, Car, Check, Clock, MapPin, Phone, Share2, ShieldAlert, Star, Video } from 'lucide-react'
import { RouteMap } from 'components/aq/route-map'
import profiles from 'data/mock/search'
import { tonight, driver, friend } from 'data/mock/date'

const HOLD_MS = 2000

const Section = ({ icon: Icon, title, children }) => (
    <section className='space-y-3 rounded-3xl border border-border bg-card p-4 text-card-foreground shadow-sm'>
        <h2 className='flex items-center gap-2 text-base font-semibold'>
            <span className='aq-gradient inline-flex h-7 w-7 items-center justify-center rounded-full text-white'><Icon className='h-4 w-4' /></span>
            {title}
        </h2>
        {children}
    </section>
)

// Tonight's date: the ride there and back, the friend who knows, and the silent SOS.
export const DateHub = () => {
    const match = profiles.find((p) => p.id === tonight.matchId) || profiles[0]
    const [shared, setShared] = React.useState(false)
    const [sos, setSos] = React.useState(false)
    const [holding, setHolding] = React.useState(false)
    const timer = React.useRef(0)

    const startHold = () => {
        setHolding(true)
        timer.current = window.setTimeout(() => { setSos(true); setShared(true); setHolding(false) }, HOLD_MS)
    }
    const endHold = () => { window.clearTimeout(timer.current); setHolding(false) }
    React.useEffect(() => () => window.clearTimeout(timer.current), [])

    return (
        <div className='page no-scrollbar'>
            <div className='mx-auto max-w-xl space-y-4 px-4 pb-24 pt-16'>
                <header className='flex items-center gap-3'>
                    <img src={match.images[0]} alt='' className='h-14 w-14 rounded-full object-cover ring-2 ring-[#ff4165]' />
                    <div>
                        <p className='text-xs uppercase tracking-wider text-muted-foreground'>Tonight</p>
                        <h1 className='flex items-center gap-1 text-xl font-semibold'>
                            {match.name}, {match.age} <BadgeCheck className='h-5 w-5 fill-sky-500 text-white' aria-label='Verified' />
                        </h1>
                        <p className='text-sm text-muted-foreground'>{tonight.venue} · {tonight.pickup}</p>
                    </div>
                    <Link to={`/app/video/${match.id}`} aria-label={`Video call ${match.name}`} className='aq-gradient ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg'>
                        <Video className='h-5 w-5' />
                    </Link>
                </header>

                <Section icon={Car} title='Your ride'>
                    <RouteMap label={`Home → ${tonight.venue}`} />
                    <div className='flex items-center gap-3'>
                        <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-semibold'>{driver.name[0]}</span>
                        <div className='min-w-0 flex-1'>
                            <p className='font-medium'>{driver.name} · <Star className='inline h-3.5 w-3.5 fill-amber-400 text-amber-400' /> {driver.rating}</p>
                            <p className='truncate text-sm text-muted-foreground'>{driver.car} · {driver.plate}</p>
                        </div>
                        <p className='text-right text-sm font-semibold text-[#ff4165]'>{driver.eta} min<br /><span className='font-normal text-muted-foreground'>away</span></p>
                    </div>
                    <div className='grid grid-cols-2 gap-2 text-sm'>
                        <p className='rounded-xl bg-accent px-3 py-2'><Clock className='mr-1 inline h-4 w-4' />Pickup {tonight.pickup}</p>
                        <p className='rounded-xl bg-accent px-3 py-2'><Clock className='mr-1 inline h-4 w-4' />Drop-off {tonight.dropoff}</p>
                    </div>
                </Section>

                <Section icon={Share2} title='A friend knows'>
                    {shared ? (
                        <div className='space-y-2'>
                            <p className='flex items-center gap-2 text-sm font-medium text-emerald-600'><Check className='h-4 w-4' />Shared with {friend.name}: {match.name}'s profile and your live location</p>
                            <RouteMap pulse label={`Last known: ${tonight.lastSeen.place}, ${tonight.lastSeen.time}`} />
                        </div>
                    ) : (
                        <>
                            <p className='text-sm text-muted-foreground'>{friend.name} gets {match.name}'s profile, your live location and your last known location and time.</p>
                            <button type='button' onClick={() => setShared(true)} className='aq-gradient aq-pill w-full'>
                                <Share2 className='h-4 w-4' /> Share my date with {friend.name}
                            </button>
                        </>
                    )}
                </Section>

                <Section icon={ShieldAlert} title='Silent SOS'>
                    {sos ? (
                        <div className='space-y-3'>
                            <p className='rounded-2xl bg-red-500/10 p-3 text-sm'>
                                <span className='font-semibold text-red-600'>Help is on the way.</span> {driver.name} has been alerted (ETA 4 min) and {friend.name} sees your location.
                            </p>
                            <p className='text-xs uppercase tracking-wider text-muted-foreground'>What {friend.name} sees</p>
                            <div className='space-y-2 rounded-2xl border border-border p-3'>
                                <a href='tel:112' className='flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg'>
                                    <Phone className='h-4 w-4' /> Call emergency services
                                </a>
                                <RouteMap pulse label={`SOS · ${tonight.lastSeen.time}`} />
                            </div>
                            <button type='button' onClick={() => setSos(false)} className='aq-pill w-full border border-border'>I'm safe, cancel the alert</button>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center gap-2 py-2'>
                            <button
                                type='button'
                                aria-label='Hold for silent SOS'
                                onPointerDown={startHold}
                                onPointerUp={endHold}
                                onPointerLeave={endHold}
                                onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!holding) startHold() } }}
                                onKeyUp={endHold}
                                className={`aq-sos ${holding ? 'is-holding' : ''}`}
                                style={{ '--hold': `${HOLD_MS}ms` }}
                            >
                                <ShieldAlert className='h-10 w-10' />
                                <span className='text-sm font-semibold'>Silent SOS</span>
                            </button>
                            <p className='text-xs text-muted-foreground'>Hold 2 seconds. No sound. Alerts {driver.name} and {friend.name}.</p>
                        </div>
                    )}
                </Section>

                <p className='flex items-center justify-center gap-1 text-xs text-muted-foreground'><MapPin className='h-3.5 w-3.5' />Location is shared only during a date you share.</p>
            </div>
        </div>
    )
}

export default DateHub
