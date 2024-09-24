import { Outlet } from 'react-router-dom'

import Header from 'widgets/header'

import './App.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <div className="viewer-wrapper">
        <Outlet />
      </div>
      
    </div>
  )
}

export default App
