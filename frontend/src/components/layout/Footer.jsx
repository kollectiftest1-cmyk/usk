import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/presentation', label: 'Présentation' },
    { path: '/facultes', label: 'Facultés' },
    { path: '/inscription', label: 'Inscription' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* À propos */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Université du Savoir Kongo</h5>
              <p className="footer-slogan">Ex Scientia Lux</p>
              <p className="footer-text">
                L'USK est une institution d'excellence dédiée à la formation de leaders
                compétents et engagés pour le développement du Congo et de l'Afrique.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Liens Rapides */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Liens Rapides</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Facultés */}
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Nos Facultés</h5>
              <ul className="footer-links">
                <li><Link to="/facultes/economie">Sciences Économiques</Link></li>
                <li><Link to="/facultes/gestion">Gestion</Link></li>
                <li><Link to="/facultes/informatique">Informatique</Link></li>
                <li><Link to="/facultes/droit">Droit</Link></li>
                <li><Link to="/facultes">Voir toutes les facultés</Link></li>
              </ul>
            </div>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Contact</h5>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>Kinshasa, République Démocratique du Congo</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+243850828027">+243 850 828 027</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@usk.ac.cd">info@usk.ac.cd</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="footer-bottom">
          <Col>
            <div className="copyright">
              <p>
                &copy; {currentYear} Université du Savoir Kongo. Tous droits réservés.
              </p>
              <div className="footer-bottom-links">
                <Link to="/mentions-legales">Mentions Légales</Link>
                <span className="separator">|</span>
                <Link to="/politique-confidentialite">Politique de Confidentialité</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
