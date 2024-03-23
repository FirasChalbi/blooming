import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


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
          <Link href="/">Home</Link>
          <Link href="/propos">A PROPOS</Link>
          <Link href="/">PRODUITS</Link>
          <Link href="/">ASSISTANCE TECHNIQUE</Link>
          <Link href="/">PARTENAIRES</Link>
          <Link href="/service">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </header>
  )
}

export default Header