import React from 'react'
import Cards from './components/cards'
import Header from './components/header'
import './styles/App.css'

const App = () => {
  return (
    <div className="container">
      <Header 
        title="Memory Card"
        score={5}
        bestScore={10}

        />
      <Cards />
    </div>
  )
}

export default App;