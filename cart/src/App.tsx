import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path=":slug" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
