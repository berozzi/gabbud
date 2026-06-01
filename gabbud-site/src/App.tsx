import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import Carpentry from './pages/Carpentry'
import Roofing from './pages/Roofing'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ciesielstwo" element={<Carpentry />} />
            <Route path="/dekarstwo" element={<Roofing />} />
            <Route path="/realizacje" element={<Projects />} />
            <Route path="/kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
