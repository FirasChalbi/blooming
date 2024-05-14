"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import styles from './../styles/Header.module.css';
import Link from 'next/link';

  function Header2() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(null); // State to track active dropdown
    const [deepDropdownActive1, setDeepDropdownActive1] = useState(null); // State for first deep dropdown
    const [deepDropdownActive2, setDeepDropdownActive2] = useState(null); // State for second deep dropdown
    const [deepDropdownActive3, setDeepDropdownActive3] = useState(null); // State for second deep dropdown
    const [deepDropdownActive4, setDeepDropdownActive4] = useState(null); // State for second deep dropdown
    // Add more state variables for additional deep dropdowns if needed
  
    const toggleMobileNavbar = () => {
      setIsMobileNavbarOpen(!isMobileNavbarOpen);
    };
  
    const toggleDropdown = (dropdown) => {
      setDropdownActive(dropdownActive === dropdown ? null : dropdown); // Toggle dropdown active state
    };
  
    const toggleDeepDropdown1 = () => {
      setDeepDropdownActive1(!deepDropdownActive1);
      // Close other deep dropdowns
      setDeepDropdownActive2(false);
      setDeepDropdownActive3(false);
      setDeepDropdownActive4(false);
    };
    
    const toggleDeepDropdown2 = () => {
      setDeepDropdownActive2(!deepDropdownActive2);
      // Close other deep dropdowns
      setDeepDropdownActive1(false);
      setDeepDropdownActive3(false);
      setDeepDropdownActive4(false);
    };
    
    const toggleDeepDropdown3 = () => {
      setDeepDropdownActive3(!deepDropdownActive3);
      // Close other deep dropdowns
      setDeepDropdownActive1(false);
      setDeepDropdownActive2(false);
      setDeepDropdownActive4(false);
    };
    
    const toggleDeepDropdown4 = () => {
      setDeepDropdownActive4(!deepDropdownActive4);
      // Close other deep dropdowns
      setDeepDropdownActive1(false);
      setDeepDropdownActive2(false);
      setDeepDropdownActive3(false);
    };
    
  
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 140) {
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
                  <li><Link className="nav-link scrollto active" href="/">ACCUEIL</Link></li>
                  <li><Link className="nav-link scrollto" href="/propos">A PROPOS</Link></li>
                  {/* <li><Link className="nav-link scrollto" href="/produits">PRODUITS</Link></li> */}
                  <li className="dropdown">
                    <a href="#" onClick={() => toggleDropdown('dropdown1')}>
                      <span className=' pr-2'>PRODUITS</span> <FaChevronDown />
                    </a>
                    <ul className={dropdownActive === 'dropdown1' ? 'dropdown-active' : ''}>
                      <li className="dropdown">
                        <a href="/product" onClick={toggleDeepDropdown1}>
                          <span>Matériels agricoles</span> 
                          {/* <FaChevronDown /> */}
                        </a>
                        {/* <ul className={deepDropdownActive1 ? 'dropdown-active' : ''}>
                          <li><a href="#">Atomiseurs</a></li>
                          <li><a href="#">Broyeurs</a></li>
                          <li><a href="#">Epandeur De Fumier</a></li>
                          <li><a href="#">Matériels de récolte des olives</a></li>
                          <li><a href="#">Pulvérisateurs</a></li>
                          <li><a href="#">Travail du sol</a></li>
                        </ul> */}
                      </li>
                      <li><a href="/product">Fertigation automatique</a></li>
                      <li className="dropdown">
                        <a href="/product" onClick={toggleDeepDropdown2}>
                          <span>Equipements hydrauliques et d'irrigation</span> 
                          {/* <FaChevronDown /> */}
                        </a>
                        {/* <ul className={deepDropdownActive2 ? 'dropdown-active' : ''}>
                          <li><a href="#">Accessoires</a></li>
                          <li><a href="#">Compteurs d'eau</a></li>
                          <li><a href="#">Gaine goutte-à-goutte légère à labyrinthe continu Power Tape</a></li>
                          <li><a href="#">Lignes de goutteurs autorégulant</a></li>
                          <li><a href="#">Vannes</a></li>
                        </ul> */}
                      </li>
                      <li><a href="/product">Matériels de filtration</a></li>
                      <li><a href="/product">Matériels de protection des cultures</a></li>
                      <li className="dropdown">
                        <a href="/product" onClick={toggleDeepDropdown3}>
                          <span>Outils professionnels</span> 
                          {/* <FaChevronDown /> */}
                        </a>
                        {/* <ul className={deepDropdownActive3 ? 'dropdown-active' : ''}>
                          <li><a href="#">Electrique</a></li>
                          <li><a href="#">Pneumatique</a></li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="/product" onClick={toggleDeepDropdown4}>
                          <span>Engrais et produits de fertilisation</span> 
                          {/* <FaChevronDown /> */}
                        </a>
                        {/* <ul className={deepDropdownActive4 ? 'dropdown-active' : ''}>
                          <li><a href="#">Activateurs phénologiques</a></li>
                          <li><a href="#">Activateurs pour fertirrigation</a></li>
                          <li><a href="#">Biostimulants</a></li>
                          <li><a href="#">Correcteurs de carences</a></li>
                          <li><a href="#">Correcteurs de pH</a></li>
                          <li><a href="#">Correcteurs de salinité</a></li>
                          <li><a href="#">Correcteurs nutritionnels</a></li>
                          <li><a href="#">Dynamisation des sols</a></li>
                          <li><a href="#">Engrais foliaires</a></li>
                          <li><a href="#">Engrais Organo-minéraux</a></li>
                          <li><a href="#">Engrais solubles et NPK liquides</a></li>
                          <li><a href="#">Microgranulés</a></li>
                          <li><a href="#">NPK granulés</a></li>
                          <li><a href="#">Technologies pour engrais de mélange</a></li>
                        </ul> */}
                      </li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#assistance" onClick={(e) => scrollToCenter('assistance', e)}>ASSISTANCE TECHNIQUE</a></li>

                  <li><Link className="nav-link" href="/galery">GALERIE</Link></li>
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
