import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { COMPANY, PROJECT_TYPES } from '../data/content'

const empty = { name: '', company: '', phone: '', email: '', projectType: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number.'
    if (!form.email.trim()) next.email = 'Please enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!form.projectType) next.projectType = 'Select a project type.'
    if (!form.message.trim()) next.message = 'Please describe the requirement.'
    return next
  }

  const submit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm(empty)
  }

  const fieldClass = (key) =>
    `mt-2 w-full border bg-white px-3 py-3 text-sm outline-none focus:border-[#b45309] ${errors[key] ? 'border-red-700' : 'border-[#d4cdc0]'}`

  return (
    <>
      <Seo
        title="Contact Us | GP Global Petro Energy"
        description="Contact GP Global Petro Energy at Rajendra Park, Haryana. Call +91 9828102506 or email vijay.kumar.jakhar.dev@gmail.com to discuss a project."
      />
      <PageHero
        kicker="Contact"
        title="Discuss a project with the people who will handle the consignment."
        lede="Call, write or send a brief. We respond to construction and materials enquiries from Rajendra Park, Haryana."
      />

      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <h2 className="font-serif text-3xl">{COMPANY.name}</h2>
          <address className="mt-4 not-italic leading-8 text-[#5f5a53]">
            {COMPANY.address}<br />
            GSTIN {COMPANY.gstin}
          </address>
          <div className="mt-8 flex flex-col gap-3">
            <a href={`tel:${COMPANY.phoneTel}`} className="inline-flex min-h-12 items-center justify-center bg-[#12151a] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f3efe6]">
              Call Us · {COMPANY.phoneDisplay}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex min-h-12 items-center justify-center border border-[#12151a] px-5 text-[12px] font-semibold uppercase tracking-[0.16em]">
              Email Us
            </a>
            <a href="/contact" className="inline-flex min-h-12 items-center justify-center border border-[#d4cdc0] px-5 text-[12px] font-semibold uppercase tracking-[0.16em]">
              Discuss a Project
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-[#128C7E] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm">
            <a className="underline underline-offset-4" href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phoneDisplay}</a>
            <br />
            <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={submit} noValidate className="border border-[#d4cdc0] bg-white/50 p-6 md:p-8">
            <h2 className="font-serif text-3xl">Project enquiry</h2>
            <p className="mt-2 text-sm text-[#5f5a53]">This form is frontend-only. Use Call or Email for a confirmed receipt.</p>

            {status === 'success' && (
              <p className="mt-4 border border-emerald-800/30 bg-emerald-50 px-3 py-3 text-sm text-emerald-900" role="status">
                Thank you. Your message is ready on this page. Please also call or email so the team receives it directly.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 border border-red-800/30 bg-red-50 px-3 py-3 text-sm text-red-900" role="alert">
                Please correct the highlighted fields.
              </p>
            )}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="block text-[12px] font-semibold uppercase tracking-[0.14em]">
                Name *
                <input className={fieldClass('name')} value={form.name} onChange={set('name')} autoComplete="name" required />
                {errors.name && <span className="mt-1 block font-normal normal-case tracking-normal text-red-800">{errors.name}</span>}
              </label>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.14em]">
                Company
                <input className={fieldClass('company')} value={form.company} onChange={set('company')} autoComplete="organization" />
              </label>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.14em]">
                Phone *
                <input className={fieldClass('phone')} value={form.phone} onChange={set('phone')} autoComplete="tel" required />
                {errors.phone && <span className="mt-1 block font-normal normal-case tracking-normal text-red-800">{errors.phone}</span>}
              </label>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.14em]">
                Email *
                <input type="email" className={fieldClass('email')} value={form.email} onChange={set('email')} autoComplete="email" required />
                {errors.email && <span className="mt-1 block font-normal normal-case tracking-normal text-red-800">{errors.email}</span>}
              </label>
            </div>
            <label className="mt-5 block text-[12px] font-semibold uppercase tracking-[0.14em]">
              Project Type *
              <select className={fieldClass('projectType')} value={form.projectType} onChange={set('projectType')} required>
                <option value="">Select</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.projectType && <span className="mt-1 block font-normal normal-case tracking-normal text-red-800">{errors.projectType}</span>}
            </label>
            <label className="mt-5 block text-[12px] font-semibold uppercase tracking-[0.14em]">
              Message *
              <textarea rows="5" className={fieldClass('message')} value={form.message} onChange={set('message')} required />
              {errors.message && <span className="mt-1 block font-normal normal-case tracking-normal text-red-800">{errors.message}</span>}
            </label>
            <button type="submit" className="mt-6 min-h-12 bg-[#12151a] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f3efe6] transition hover:bg-[#b45309]">
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
