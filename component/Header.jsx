import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <header>
      {/* <a href="#" class="brand">BLOOMING</a> */}
      <Image
      src="/images/logo.png"
      width={70}
      height={70}
      alt="Picture of the author"
    />

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