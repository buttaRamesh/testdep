import { useState } from 'react'
// import './App.css'

import HelloGuest from './HelloGuest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HelloGuest/>
      </div>
    </>
  )
}

export default App
