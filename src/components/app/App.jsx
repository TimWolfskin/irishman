import React from 'react'
import AppRoutes from '../routes/Routes'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Sidebar/>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App