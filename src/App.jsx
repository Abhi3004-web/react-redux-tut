import { useState } from 'react'
import UserData from './UserData';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HeaderContainer></HeaderContainer>
      <HomeContainer></HomeContainer>
    </div>
  )
}

export default App
