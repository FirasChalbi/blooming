"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

function Menu() {
  useEffect(() => {
    const siteNav = document.querySelector('.js-site-nav');
    const menu = document.querySelector('.js-menu');
    const menuButton = document.querySelector('.js-menu-button');
    const navCurtain = document.querySelector('.js-nav-curtain');

    function mobileNavToggler() {
      const state = {
        isOpen: false,
      };

      function showMenu() {
        siteNav.classList.add('site-nav--is-open');
        menu.classList.remove('fade-out');
        menu.classList.add('fade-in');
      }

      function hideMenu() {
        siteNav.classList.remove('site-nav--is-open');
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
      }

      function curtainUp() {
        navCurtain.classList.remove('curtain-down');
        navCurtain.classList.add('curtain-up');
      }

      function curtainDown() {
        navCurtain.classList.remove('curtain-up');
        navCurtain.classList.add('curtain-down');
      }

      function unfocusButton(event) {
        menuButton.classList.remove('menu-button__lines--open');
        menuButton.setAttribute('aria-expanded', 'false');
      }

      function focusButton(event) {
        menuButton.classList.add('menu-button__lines--open');
        menuButton.setAttribute('aria-expanded', 'true');
      }

      function handleMenuButtonClick() {
        if (state.isOpen) {
          hideMenu();
          unfocusButton();
          curtainDown();
          state.isOpen = false;
          return;
        }

        focusButton();
        curtainUp();
        state.isOpen = true;
      }

      function handleCurtainAnimationEnd() {
        if (state.isOpen) {
          showMenu();
        }
      }

      return {
        handleEvent(event) {
          if (event.type === 'click') {
            handleMenuButtonClick();
            return;
          }

          if (event.type === 'animationend') {
            handleCurtainAnimationEnd();
          }
        },

        init() {
          menuButton.addEventListener('click', this);
          navCurtain.addEventListener('animationend', this);
        },
      };
    }

    mobileNavToggler().init();
  }, []); // Empty dependency array to run only once after initial render

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
  }, [scrolled]);

  return (
    <nav className={`js-site-nav ${scrolled ? 'scrolled' : ''}`}  role="navigation" aria-label="navigation">
      <div className="site-nav__curtain js-nav-curtain"></div>
      <div className="wrapper wrapper--nav-area">
        <button
          className="menu-button js-menu-button"
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Menu button"
        >
          <span className="menu-button__lines" >
            <span className={`menu-button__line ${scrolled ? 'blue' : ''}`}></span>
            <span className={`menu-button__line ${scrolled ? 'blue' : ''}`}></span>
            <span className={`menu-button__line ${scrolled ? 'blue' : ''}`}></span>
          </span>
          
        </button>
        <ul className="site-nav__menu u-list-reset js-menu" id="menu">
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/propos">A PROPOS</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/">PRODUITS</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/">ASSISTANCE TECHNIQUE</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/">PARTENAIRES</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/service">SERVICES</Link>
          </li>
          <li>
            <Link className={`site-nav__link ${scrolled ? 'black' : ''}`} href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
