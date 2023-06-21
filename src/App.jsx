import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { UserView } from './features/users/UserView'
import { IcecreamView } from './features/ice-cream/IcecreamView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </>
  )
}

export default App
