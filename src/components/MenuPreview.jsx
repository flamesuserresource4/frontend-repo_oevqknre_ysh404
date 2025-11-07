import { useMemo } from 'react'
import { motion } from 'framer-motion'

const sampleMenu = [
  { id: 1, name: 'Nasi Goreng Spesial', price: 45000, img: 'https://images.unsplash.com/photo-1604908812834-1e4f9d8c9b0a?q=80&w=1200&auto=format&fit=crop', desc: 'Nasi goreng dengan udang, ayam, dan telur, disajikan dengan acar dan kerupuk.', category: 'Main Course' },
  { id: 2, name: 'Sate Ayam Madura', price: 38000, img: 'https://images.unsplash.com/photo-1617195737492-7b536c2fd658?q=80&w=1200&auto=format&fit=crop', desc: 'Sate ayam empuk dengan bumbu kacang legit dan lontong.', category: 'Main Course' },
  { id: 3, name: 'Es Cendol', price: 22000, img: 'https://images.unsplash.com/photo-1542444459-db62f1f4d730?q=80&w=1200&auto=format&fit=crop', desc: 'Minuman tradisional dengan gula aren, santan, dan cendol kenyal.', category: 'Drinks' },
]

function MenuPreview() {
  const items = useMemo(() => sampleMenu, [])

  return (
    <section id="menu" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Menu Unggulan</h2>
            <p className="text-neutral-600 mt-1">Cicipi rekomendasi favorit pelanggan kami</p>
          </div>
          <a href="#reservation" className="hidden md:inline-flex px-4 py-2 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700">Reservasi</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                  <span className="text-red-700 font-semibold">Rp{item.price.toLocaleString('id-ID')}</span>
                </div>
                <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#reservation" className="px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-100">Pesan Meja</a>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
