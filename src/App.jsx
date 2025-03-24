import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Blog from './pages/Blog/Blog'
import Faq from './pages/Faq/Faq'
import AgeVerification from './components/AgeVerification/AgeVerification'

function App() {
  const [isAdult, setIsAdult] = React.useState(
    localStorage.getItem('isAdult') === 'true'
  )

  const handleAgeVerification = () => {
    localStorage.setItem('isAdult', 'true')
    setIsAdult(true)
  }

  if (!isAdult) {
    return <AgeVerification onVerify={handleAgeVerification} />
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
      </Route>
    </Routes>
  )
}

export default App
