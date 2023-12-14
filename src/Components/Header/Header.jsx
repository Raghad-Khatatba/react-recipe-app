import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <header className='header'>
  <div class="overlay">
  <div class="header-content">
            <h1>Welcome to Foodies<span style={{color: 'rgb(245, 117, 43)'}}>Hup</span></h1>
            <p>Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans.</p>
            <button>Find a recipe Now!</button>
    </div>
  </div>
    </header>
  )
}
