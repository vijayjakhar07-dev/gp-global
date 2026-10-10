export default function PageHero({ kicker, title, lede }) {
  return (
    <section className="border-b border-[#d4cdc0] bg-[#ece6da]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        {kicker && <p className="reveal text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b45309]">{kicker}</p>}
        <h1 className="reveal reveal-d1 mt-3 max-w-4xl font-serif text-4xl leading-[1.1] text-[#12151a] md:text-6xl">{title}</h1>
        {lede && <p className="reveal reveal-d2 mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5a53]">{lede}</p>}
      </div>
    </section>
  )
}
