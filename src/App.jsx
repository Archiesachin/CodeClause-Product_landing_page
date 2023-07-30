
import './App.css'
import Navbar from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/rout'
import Footer from './footer'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Rout />
    <Footer />
    </BrowserRouter>
  )
}

export default App
