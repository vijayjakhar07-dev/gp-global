import { Link } from 'react-router-dom'

export default function CtaBand({ title = 'Have an Infrastructure Project in Mind?', button = 'Discuss Your Project' }) {
  return (
    <section className="bg-[#12151a] text-[#f3efe6]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
        <h2 className="max-w-xl font-serif text-3xl md:text-5xl">{title}</h2>
        <Link to="/contact" className="inline-flex border border-[#f3efe6] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition hover:bg-[#f3efe6] hover:text-[#12151a]">
          {button}
        </Link>
      </div>
    </section>
  )
}
