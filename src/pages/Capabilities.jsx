import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import CoverImage from '../components/CoverImage'
import { EQUIPMENT, IMAGES } from '../data/content'

export default function Capabilities() {
  return (
    <>
      <Seo
        title="Capabilities & Equipment | GP Global Petro Energy"
        description="Technical capabilities of GP Global Petro Energy: bulk bitumen movement, yard dispatch coordination and site receipt support."
      />
      <PageHero
        kicker="Capabilities"
        title="Industrial supply organised as an operation."
        lede="We publish only what we can stand behind. Equipment lists and plant specifications will be expanded when verified photographs and data are available."
      />

      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        <div className="img-zoom cover-frame aspect-[4/3] w-full">
          <CoverImage src={IMAGES.plant} alt="Open civil works site with construction crew, representative industry photograph" className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-4xl">What we can speak to today</h2>
          <p className="mt-4 leading-relaxed text-[#5f5a53]">
            Bulk VG-30 bitumen, documented interstate movement, and coordination with the receiving contractor. Vehicle numbers, transporters and quantities are confirmed on the documents that travel with each consignment.
          </p>
        </div>
      </section>

      <section className="border-t border-[#d4cdc0] bg-[#ece6da]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
          <h2 className="font-serif text-4xl">Equipment &amp; operations</h2>
          <div className="mt-10 divide-y divide-[#d4cdc0] border-y border-[#d4cdc0]">
            {EQUIPMENT.map((item) => (
              <article key={item.name} className="grid gap-4 py-8 md:grid-cols-12">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b45309] md:col-span-3">{item.type}</p>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <p className="mt-2 text-[#5f5a53]">{item.purpose}</p>
                  <p className="mt-3 text-sm text-[#7a746b]">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
