import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import IntroCard from './components/IntroCard'
import SkillsAndLinks from './components/SkillsAndLinks'

function App() {

  return (
    <div className="portfolio-main">
      <Header />
      <IntroCard />
      <SkillsAndLinks />

    </div>
  )
}

export default App
