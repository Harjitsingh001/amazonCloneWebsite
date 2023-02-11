
import React from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path='/checkout' element={<><Header /><Checkout/> </>} />
          <Route path='/' element={<><Header /> <Home /></>} />
        </Routes>

      </div>
    </Router >
  )
}

export default App