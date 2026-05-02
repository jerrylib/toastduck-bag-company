import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (href, anchor) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(anchor);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.route) {
      navigate(item.href);
      setIsMenuOpen(false);
    } else if (item.anchor) {
      handleAnchorClick(item.href, item.anchor);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home', anchor: 'home' },
    // { href: 'https://www.toastduck.com', label: 'Store', external: true },
    { href: '/', label: 'Services', anchor: 'services' },
    { href: '/', label: 'About', anchor: 'about' },
    { href: '/', label: 'Portfolio', anchor: 'gallery' },
    { href: '/', label: 'Team', anchor: 'team' },
    { href: '/', label: 'News', anchor: 'news' },
    { href: '/', label: 'Clients', anchor: 'clients' },
    { href: '/', label: 'Contacts', anchor: 'contacts' },
  ];

  return (
    <header
      className="page-header min-h-[70px] md:min-h-[80px] bg-white border-b border-gray-200 w-full m-0 p-0 fixed top-0 left-0 right-0 z-50"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="rd-navbar-wrap w-full h-[70px] md:h-[100px] flex items-center justify-between">
          {/* Logo */}
          <div className="rd-navbar-brand flex-shrink-0">
            <a className="brand-name block" href="/">
              <img
                src="/images/toastduck_banner_3x_black.png"
                alt="Toastduck Logo"
                width="120"
                height="60"
                className="max-h-[45px] md:max-h-[60px] w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="hidden text-2xl font-bold text-gray-800">
                Toastduck Logo
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <ul className="rd-navbar-nav flex m-0 p-0 gap-4 lg:gap-6">
              {navItems.map((item) => (
                <li key={item.label} className="flex">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black content-center hover:text-sky-700 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="text-black content-center hover:text-sky-400 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap bg-transparent border-0 p-0 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="rd-navbar-nav-wrap__element">
              <a className="btn btn-gray-light-outline rd-none text-sm whitespace-nowrap" href="#">Get a quote</a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ left: 'auto', right: 0, width: '280px' }}
          >
            <ul className="rd-navbar-nav flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.label} className="flex border-b border-gray-100 pb-3">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-sky-700 transition-colors duration-200 text-lg"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="text-black hover:text-sky-400 transition-colors duration-200 text-lg bg-transparent border-0 p-0 cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="flex pt-3">
                <a className="btn btn-gray-light-outline text-base" href="#">Get a quote</a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 top-[70px] bg-black/50 z-30"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
