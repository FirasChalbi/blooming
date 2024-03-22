import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
      <a href="#" class="brand">BLOOMING</a>

      <div class="menu-btn"></div>
      <div class="navigation">
        <div class="navigation-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Explore</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header