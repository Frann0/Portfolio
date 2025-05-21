import './App.scss'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Endorsment from './components/endorsments/Endorsments'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <video
        className="Blackhole"
        src="videos/blackhole.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <Navbar />
      <div className="App">
        <Hero />
        <Endorsment />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
