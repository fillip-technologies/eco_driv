import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import aboutHeroVideo from '../../assets/about-hero.mp4'

export default function AboutHeroSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[52vh] min-h-[340px] sm:min-h-[420px] max-h-[560px] overflow-hidden -mt-[88px] sm:-mt-[96px] bg-black select-none">
      {/* Half-screen edge-to-edge video */}
      <video
        ref={videoRef}
        src={aboutHeroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Floating video controls — bottom right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#333] border border-black/5 shadow-sm backdrop-blur-sm flex items-center justify-center transition active:scale-95 cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#333] border border-black/5 shadow-sm backdrop-blur-sm flex items-center justify-center transition active:scale-95 cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </section>
  )
}
