import { useState } from 'react'

function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2 })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'guests' ? Number(value) : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Reservasi Meja</h2>
        {submitted ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
            Terima kasih, {form.name}! Reservasi Anda untuk {form.guests} orang pada {form.date} pukul {form.time} telah kami terima. Kami akan menghubungi Anda di {form.phone} untuk konfirmasi.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 bg-neutral-50 p-6 rounded-2xl border">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Nama</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Telepon</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-500" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Tanggal</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Waktu</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Jumlah Tamu</label>
                <input type="number" min="1" name="guests" value={form.guests} onChange={handleChange} required className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-500" />
              </div>
            </div>
            <button type="submit" className="mt-2 inline-flex justify-center rounded-full bg-red-600 px-5 py-3 text-white font-medium hover:bg-red-700">Kirim Reservasi</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Reservation
