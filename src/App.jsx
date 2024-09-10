import { useEffect, useState } from 'react'
import './App.css'
import Login from './component/login'
import Navigation from './component/navigation'
import Employee from './component/employeelist'
import Page from './component/page'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <section><Navigation/></section><br></br>
      {/* <section><Page/></section> */}
      <section><Login/></section>
      <section><Employee  /></section>
      
      
    </>
  )
}

export default App
