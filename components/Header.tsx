import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll';
import Button from './Button';

const NAV_LINKS = [
  { to: '/#pricing', text: 'Pricing' },
  { to: '/feature-packs', text: 'Feature Packs' },
  { to: '/process', text: 'Process' },
  { to: '/our-story', text: 'Our Story' },
  { to: '/studio', text: 'Studio' },
  { to: '/security', text: 'Security' },
];

const Header: React.FC = () => {
  const scrolled = useScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.substring(2);
      const element = document.getElementById(id);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img className="h-10 w-auto" src="./logo.svg" alt="BlackWeaver Logo" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
                link.to.startsWith('/#') ?
                <a 
                    href={link.to} 
                    key={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="text-sm font-semibold text-[#111] hover:text-gray-600 transition-colors"
                >
                    {link.text}
                </a> :
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        `text-sm font-semibold hover:text-gray-600 transition-colors ${
                        isActive ? 'text-[#111] underline' : 'text-[#111]'
                        }`
                    }
                >
                    {link.text}
                </NavLink>
            ))}
             <Button to="/configurator" variant="primary">Start Configurator</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;