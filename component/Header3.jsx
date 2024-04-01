"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import styles from './../styles/Header.module.css';
import Link from 'next/link';

  function Header2() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(null); // State to track active dropdown
    const [deepdropdownActive, setDeepDropdownActive] = useState(null); // State to track active deep dropdown
    

    const toggleMobileNavbar = () => {
      setIsMobileNavbarOpen(!isMobileNavbarOpen);
    };

    const toggleDropdown = (dropdown) => {
      setDropdownActive(dropdownActive === dropdown ? null : dropdown); // Toggle dropdown active state
    };

    const toggleDeepDropdown = (deepdropdown) => {
      setDeepDropdownActive(deepdropdownActive === deepdropdown ? null : deepdropdown); // Toggle deep dropdown active state
    };

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

    const scrollToCenter = (id, e) => {
      e.preventDefault(); // Prevent default link behavior
      const element = document.getElementById(id);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2); // Adjusting to scroll to center
  
        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
      }
    };

    return (
        <header className={`${scrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header} bg-[#00000000]`}>
        <div className="container-fluid">
          <div className="row11 justify-center items-center">
            <div className="col-xl-11 flex items-center w-max">
              <Link href="/" passHref className='space'><Image
                src="/images/logob.png"
                width={70}
                height={70}
                alt="Picture of the author"
                
              /></Link>

              <nav id="navbar" className={`navbar ${isMobileNavbarOpen ? 'navbar-mobile' : ''} ${scrolled ? 'black' : ''}`}>
                <ul className={`${scrolled ? 'black' : ''}`}>
                  <li><Link className="nav-link scrollto active" href="/">Home</Link></li>
                  <li><Link className="nav-link scrollto" href="/propos">A PROPOS</Link></li>
                  {/* <li><Link className="nav-link scrollto" href="/produits">PRODUITS</Link></li> */}
                  <li className="dropdown">
                    <a href="#" onClick={() => toggleDropdown('dropdown1')}>
                      <span className=' pr-2'>PRODUITS</span> <FaChevronDown />
                    </a>
                    <ul className={dropdownActive === 'dropdown1' ? 'dropdown-active' : ''}>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown">
                        <a href="#" onClick={() => toggleDeepDropdown('deepDropdown')}>
                          <span>Deep Drop Down</span> <FaChevronDown />
                        </a>
                        <ul className={deepdropdownActive === 'deepDropdown' ? 'dropdown-active' : ''}>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#assistance" onClick={(e) => scrollToCenter('assistance', e)}>ASSISTANCE TECHNIQUE</a></li>

                  <li><Link className="nav-link scrollto" href="/#partenaires" onClick={(e) => scrollToCenter('partenaires', e)}>PARTENAIRES</Link></li>
                  <li><Link className="nav-link  " href="/service">SERVICES</Link></li>
                  <li><Link className="nav-link  " href="/service">SERVICES</Link></li>
                  
                  <li><a className="nav-link scrollto" href="/contact">CONTACT</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div
          className={`logo1 bi mobile-nav-toggle ${isMobileNavbarOpen ? 'bi-x' : 'bi-list'} ${scrolled ? 'menub' : ''} ${scrolled && isMobileNavbarOpen ? 'menux bi-x' : ''}`}
          onClick={toggleMobileNavbar}
          style={{
            zIndex: '999'
          }}
        />
      </header>
    );
  }

  export default Header2;
