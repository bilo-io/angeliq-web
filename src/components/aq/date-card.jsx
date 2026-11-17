import React from 'react'
import { BadgeCheck, Heart, Star, X } from 'lucide-react'

// The swipe card from the AngeliQ mockups: photo (tap to flip), name, age, tags and the three actions.
export const DateCard = ({ profile, onPass, onLike, onSuper }) => {
    const [state, setState] = React.useState({ id: profile.id, photo: 0 })
    const photo = state.id === profile.id ? state.photo % profile.images.length : 0
    const setPhoto = (next) => setState({ id: profile.id, photo: next(photo) })
    const tags = (profile.interests || '').split(',').map((t) => t.trim()).filter(Boolean)

    return (
        <article className='mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-xl'>
            <button
                type='button'
                aria-label='Next photo'
                onClick={() => setPhoto((p) => (p + 1) % profile.images.length)}
                className='aq-bare relative block w-full overflow-hidden bg-muted'
                style={{ height: 'min(58vh, 30rem)' }}
            >
                <img src={profile.images[photo]} alt={`${profile.name}, photo ${photo + 1}`} className='absolute inset-0 h-full w-full object-cover' />
                <div className='absolute inset-x-3 top-3 flex gap-1'>
                    {profile.images.map((_, i) => (
                        <span key={i} className={`h-1 flex-1 rounded-full ${i === photo ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                </div>
            </button>
            <div className='space-y-3 p-4'>
                <div className='flex items-center gap-1.5 text-xl font-semibold'>
                    {profile.name}, {profile.age}
                    <BadgeCheck className='h-5 w-5 fill-sky-500 text-white' aria-label='Verified' />
                </div>
                <p className='text-sm text-muted-foreground'>{profile.bio}</p>
                <div className='flex flex-wrap gap-1.5'>
                    {tags.map((t) => (
                        <span key={t} className='rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground'>{t}</span>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-5 pt-1'>
                    <button type='button' aria-label='Pass' onClick={onPass} className='aq-action h-14 w-14 text-muted-foreground'>
                        <X className='h-6 w-6' />
                    </button>
                    <button type='button' aria-label='Like' onClick={onLike} className='aq-action h-16 w-16 text-[#ff4165]'>
                        <Heart className='h-8 w-8 fill-current' />
                    </button>
                    <button type='button' aria-label='Super like' onClick={onSuper} className='aq-action h-14 w-14 text-violet-600'>
                        <Star className='h-6 w-6 fill-current' />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default DateCard
