
import { data } from 'autoprefixer'
import './App.css'
import './components/Button'
import Button from './components/Button'
import landingPageData from './constant/langinpag'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testinomials'
import Footer from './components/Footer'


function App() {
  const { header, hero, features, testimonials, callToAction } = landingPageData
  return (
    <div>
      <Header header={header} />

      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer landingPageData={landingPageData} header={header }/>
      

    </div>
  )
}

export default App