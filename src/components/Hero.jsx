import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Selamat Datang di <span className="text-red-700">Rasa Nusantara</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-prose">
            Menyajikan kehangatan rasa Indonesia dalam setiap sajian. Kami memilih bahan terbaik dan teknik memasak autentik untuk menghadirkan pengalaman kuliner yang menggugah selera.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-5 py-3 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700">Lihat Menu</a>
            <a href="#reservation" className="px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-100">Reservasi</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
            alt="Hidangan Indonesia"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
            <p className="text-sm font-medium text-neutral-800">Cita rasa khas, sentuhan modern</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
