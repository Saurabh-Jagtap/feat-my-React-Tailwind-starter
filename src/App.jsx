import { useState } from 'react'
import './App.css'
import Layout from './layouts/layout'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Home/>
      </Layout>
    </>
  )
}

export default App
