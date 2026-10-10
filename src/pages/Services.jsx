import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import CoverImage from '../components/CoverImage'
import { IMAGES, SERVICES } from '../data/content'

const visuals = [IMAGES.road, IMAGES.hero, IMAGES.bitumen, IMAGES.about, IMAGES.plant, IMAGES.night]

export default function Services() {
  return (
    <>
      <Seo
        title="Services | GP Global Petro Energy"
        description="Road construction support, highway materials, bituminous road works, civil construction supply, road maintenance and infrastructure development."
      />
      <PageHero
        kicker="Services"
        title="Capabilities organised around the construction programme."
        lede="Each service is a way of working with project teams — materials, movement and documentation — not a generic trade listing."
      />

      <div>
        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} className={`border-b border-[#d4cdc0] ${i % 2 ? 'bg-[#ece6da]' : 'bg-[#f3efe6]'}`}>
            <div className={`mx-auto grid max-w-[1280px] md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="img-zoom cover-frame min-h-[280px] md:min-h-[420px]">
                <CoverImage src={visuals[i]} alt={`${s.title}, representative industry photograph`} className="object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center px-5 py-14 md:px-14">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">0{i + 1}</p>
                <h2 className="mt-2 font-serif text-4xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-[#5f5a53]">{s.body}</p>
                <p className="mt-4 text-sm text-[#5f5a53]">{s.summary}</p>
                <Link to="/contact" className="mt-8 inline-flex w-fit text-[12px] font-semibold uppercase tracking-[0.16em] underline decoration-[#b45309] underline-offset-4">
                  Discuss this requirement
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  )
}
