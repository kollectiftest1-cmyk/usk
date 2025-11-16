import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.jpeg';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/presentation', label: 'Présentation' },
    { path: '/facultes', label: 'Facultés' },
    { path: '/bourses', label: 'Bourses et Offres' },
    { path: '/blog', label: 'Blog & Actualités' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <Navbar
      expand="lg"
      className={`header-navbar ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <div className="logo-container">
            <img src={logo} alt="USK Logo" className="logo-image" />
            <div className="brand-text">
              <span className="brand-name">Université du Savoir Kongo</span>
              <span className="brand-slogan">Ex Scientia Lux</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Link
              to="/inscription"
              className="btn-primary-custom ms-lg-3"
              onClick={() => setExpanded(false)}
            >
              S'INSCRIRE
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
