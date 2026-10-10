import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import CoverImage from '../components/CoverImage'
import { IMAGES, VALUES } from '../data/content'

export default function About() {
  return (
    <>
      <Seo
        title="About Us | GP Global Petro Energy"
        description="Company overview, approach and values of GP Global Petro Energy, an industrial bitumen and infrastructure materials business based in Rajendra Park, Haryana."
      />
      <PageHero
        kicker="About"
        title="A materials company built around construction programmes."
        lede="GP Global Petro Energy supplies industrial bitumen and supports road and infrastructure teams with documented, dependable movement of material."
      />

      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <h2 className="font-serif text-4xl">Company overview</h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-5 text-[#5f5a53] leading-relaxed">
          <p>
            We are a Haryana-based business focused on industrial bitumen supply for road, highway and civil construction. Our registered presence is at Rajendra Park, Haryana – 122001. GSTIN 06EVZPS4105J2ZR.
          </p>
          <p>
            Construction buyers need more than a price. They need the right grade, a clear tax trail and a consignment that arrives when the paving window is open. That is the work we organise.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d4cdc0]">
        <div className="mx-auto grid max-w-[1280px] md:grid-cols-2">
          <div className="img-zoom cover-frame min-h-[360px]">
            <CoverImage src={IMAGES.about} alt="Civil construction deck with rebar works, representative industry photograph" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12">
            <h2 className="font-serif text-4xl">Company story</h2>
            <p className="mt-4 leading-relaxed text-[#5f5a53]">
              The business is built around bulk VG-30 bitumen and the logistics that sit behind it. We do not publish founding years, headcount or turnover here. Those figures will appear only when they are verified for public use.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <article>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">Vision</p>
          <h2 className="mt-2 font-serif text-3xl">To be a trusted materials partner on infrastructure programmes.</h2>
          <p className="mt-4 text-[#5f5a53] leading-relaxed">We want project teams to treat supply as a settled part of the programme — predictable, documented and technically sound.</p>
        </article>
        <article>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">Mission</p>
          <h2 className="mt-2 font-serif text-3xl">Deliver the right bitumen, with the right papers, at the right time.</h2>
          <p className="mt-4 text-[#5f5a53] leading-relaxed">Every consignment should be easy for the site to receive and easy for the accounts team to close.</p>
        </article>
      </section>

      <section className="bg-[#ece6da]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
          <h2 className="font-serif text-4xl">Core values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <article key={v.title} className="border-t border-[#d4cdc0] pt-5">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f5a53]">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
        <h2 className="font-serif text-4xl">Our approach</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ['Understand the programme', 'Grade, quantity, delivery window and receiving point are confirmed before movement is planned.'],
            ['Document the consignment', 'Tax, e-way and logistics references travel with the material so the site and the books stay aligned.'],
            ['Support receipt', 'We remain available through dispatch and arrival so queries do not stall paving or accounts.'],
          ].map(([t, b], i) => (
            <li key={t}>
              <p className="font-serif text-3xl text-[#b45309]">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-[#5f5a53] leading-relaxed">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  )
}
