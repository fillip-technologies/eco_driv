import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import heroVideo from '../../assets/home/hero-1.mp4'

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) { videoRef.current.pause() } else { videoRef.current.play() }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden -mt-[88px] sm:-mt-[96px]">
      {/* Full-screen background video — edge to edge */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Floating video controls — bottom right */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#333] border border-black/5 shadow-sm backdrop-blur-sm flex items-center justify-center transition active:scale-95"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#333] border border-black/5 shadow-sm backdrop-blur-sm flex items-center justify-center transition active:scale-95"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </section>
  )
}
