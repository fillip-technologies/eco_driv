import madeInIndiaImg from '../../assets/home/made-in-india.png'

export default function MadeInIndiaSection() {
  return (
    <section id="made-in-india" className="w-full bg-white select-none overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto">
        <img
          src={madeInIndiaImg}
          alt="Made in India"
          className="w-full h-auto object-cover block"
          loading="lazy"
        />
      </div>
    </section>
  )
}

