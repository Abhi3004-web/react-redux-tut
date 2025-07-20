import { useState } from 'react'
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer'
import './App.css'

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3 }}>
        <HeaderContainer></HeaderContainer>
      </div>
      <HomeContainer></HomeContainer>
    </div>
  )
}

export default App
