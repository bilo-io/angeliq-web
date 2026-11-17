import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { BadgeCheck, Camera, CameraOff, Mic, MicOff, PhoneOff } from 'lucide-react'
import profiles from 'data/mock/search'

// A video date before the real one. Their side is mocked with a profile photo; your camera is optional.
export const VideoCall = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const match = profiles.find((p) => String(p.id) === id) || profiles[0]
    const [muted, setMuted] = React.useState(false)
    const [camera, setCamera] = React.useState(false)
    const [stream, setStream] = React.useState(null)
    const self = React.useRef(null)

    React.useEffect(() => {
        if (!camera) return undefined
        if (!navigator.mediaDevices?.getUserMedia) { setCamera(false); return undefined }
        let live
        let cancelled = false
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((s) => {
                if (cancelled) { s.getTracks().forEach((t) => t.stop()); return }
                live = s
                setStream(s)
            })
            .catch(() => { if (!cancelled) setCamera(false) })
        return () => { cancelled = true; live?.getTracks().forEach((t) => t.stop()); setStream(null) }
    }, [camera])
    React.useEffect(() => { if (self.current) self.current.srcObject = stream }, [stream])

    return (
        <div className='fixed inset-0 z-[20] bg-black text-white'>
            <img src={match.images[match.images.length > 1 ? 1 : 0]} alt={`${match.name} on video`} className='h-full w-full object-cover opacity-95' />
            <div className='absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4 pt-6 text-center'>
                <p className='text-lg font-semibold'>{match.name}, {match.age}</p>
                <p className='mt-1 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur'>
                    <BadgeCheck className='h-4 w-4 fill-sky-500 text-white' /> Verified: matches profile photos
                </p>
            </div>
            <div className='absolute bottom-36 right-4 h-40 w-28 overflow-hidden rounded-2xl border-2 border-white/70 bg-neutral-800 shadow-xl'>
                {stream ? (
                    <video ref={self} autoPlay muted playsInline className='h-full w-full -scale-x-100 object-cover' />
                ) : (
                    <div className='flex h-full w-full flex-col items-center justify-center gap-1 text-xs text-white/70'>
                        <CameraOff className='h-6 w-6' /> Camera off
                    </div>
                )}
            </div>
            <div className='absolute inset-x-0 bottom-0 flex items-center justify-center gap-5 bg-gradient-to-t from-black/70 to-transparent pb-10 pt-16'>
                <button type='button' aria-label={muted ? 'Unmute' : 'Mute'} onClick={() => setMuted((m) => !m)} className='aq-call-btn'>
                    {muted ? <MicOff className='h-6 w-6' /> : <Mic className='h-6 w-6' />}
                </button>
                <button type='button' aria-label='End call' onClick={() => navigate(-1)} className='aq-call-btn aq-gradient h-16 w-16'>
                    <PhoneOff className='h-7 w-7' />
                </button>
                <button type='button' aria-label={camera ? 'Turn camera off' : 'Turn camera on'} onClick={() => setCamera((c) => !c)} className='aq-call-btn'>
                    {camera ? <Camera className='h-6 w-6' /> : <CameraOff className='h-6 w-6' />}
                </button>
            </div>
            <p className='absolute inset-x-0 bottom-3 text-center text-xs text-white/70'>Camera optional · No catfish, just real people</p>
        </div>
    )
}

export default VideoCall
