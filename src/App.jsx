import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import ArticleGrid from './components/ArticleGrid'
import Manifesto from './components/Manifesto'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-paper-white">
        <Navbar />
        <main>
          <Hero />
          <IntroSection />
          <ArticleGrid />
          {/* <Manifesto /> */}
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
