
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Advertisement from './component/Advertisement'
import Login from './component/Auth/Login'
import Header from './component/header/Header'
import HomePage from './component/home'

function App() {

  return (
    <>
      <div className="wraper-header">
          <Header />
          <Login/>
      </div>
      <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}

        </Routes>
    </>
  )
}

export default App
