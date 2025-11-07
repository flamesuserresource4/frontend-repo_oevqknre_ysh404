import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuPreview from './components/MenuPreview'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}

export default App
