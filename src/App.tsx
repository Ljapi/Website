import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Privacy from './pages/Privacy'
import WaterInstallation from './pages/services/WaterInstallation'
import PlasteringPainting from './pages/services/PlasteringPainting'
import HeatingTechnologies from './pages/services/HeatingTechnologies'
import ConstructionServices from './pages/services/ConstructionServices'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/water-installation" element={<WaterInstallation />} />
          <Route path="/services/plastering-painting" element={<PlasteringPainting />} />
          <Route path="/services/heating-technologies" element={<HeatingTechnologies />} />
          <Route path="/services/construction-services" element={<ConstructionServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

