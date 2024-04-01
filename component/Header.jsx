"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu.jsx';
import Menu2 from './Header2.jsx';
import styles from './../styles/Header.module.css'; // Import CSS module for styling

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header}>
      <Image
      src="/images/logob.png"
      width={70}
      height={70}
      alt="Picture of the author"
    />
      <Menu />
    </header>
  );
}

export default Header;


{/* <div class="navigation">
        <div class="navigation-items">
          <Link href="/">Home</Link>
          <Link href="/propos">A PROPOS</Link>
          <Link href="/">PRODUITS</Link>
          <Link href="/">ASSISTANCE TECHNIQUE</Link>
          <Link href="/">PARTENAIRES</Link>
          <Link href="/service">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div> */}