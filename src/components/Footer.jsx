import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-neutral-900">Rasa Nusantara</h3>
          <p className="text-neutral-600 mt-2">Masakan Indonesia autentik dengan sentuhan modern. Buka setiap hari 10.00 - 22.00.</p>
        </div>
        <div>
          <h4 className="font-medium text-neutral-900">Kontak</h4>
          <ul className="mt-2 space-y-2 text-neutral-700">
            <li className="flex items-center gap-2"><Phone size={16} /> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> halo@rasanusantara.id</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-neutral-900">Ikuti Kami</h4>
          <div className="mt-2 flex items-center gap-3 text-neutral-600">
            <a href="#" className="hover:text-neutral-900"><Instagram /></a>
            <a href="#" className="hover:text-neutral-900"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-neutral-500 py-4 border-t">© {new Date().getFullYear()} Rasa Nusantara. All rights reserved.</div>
    </footer>
  )
}

export default Footer
