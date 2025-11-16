import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaAward, FaGlobe, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { facultyData } from '../data/facultyData';
import logo from '../assets/logo.jpeg';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homePageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      const sections = gsap.utils.toArray('.scroll-section');
      sections.forEach((section) => {
        const elementsToAnimate = section.querySelectorAll('.scroll-anim');
        gsap.set(elementsToAnimate, { opacity: 0, y: 30 });

        ScrollTrigger.create({
          trigger: section,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(elementsToAnimate, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          },
        });
      });
    }, homePageRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <FaGraduationCap />, number: '10+', label: 'Facultés' },
    { icon: <FaUsers />, number: '5000+', label: 'Étudiants' },
    { icon: <FaAward />, number: '98%', label: 'Taux de Réussite' },
    { icon: <FaGlobe />, number: '20+', label: 'Partenariats' }
  ];

  const promotions = [
    {
      title: 'Frais de Scolarité Réduits',
      description: 'Réduction de 30% pour les nouveaux étudiants inscrits avant le 31 août',
      discount: '-30%'
    },
    {
      title: 'Bourses d\'Excellence',
      description: 'Bourses complètes pour les meilleurs étudiants',
      discount: 'NEW'
    }
  ];

  return (
    <div className="home-page" ref={homePageRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">
              Bienvenue à l'<span className="highlight">Université du Savoir Kongo</span>
            </h1>
            <p className="hero-subtitle">
              Ex Scientia Lux - De la connaissance jaillit la lumière
            </p>
            <p className="hero-description">
              Formez-vous dans une institution d'excellence et devenez les leaders de demain.
              L'USK vous offre une formation de qualité internationale dans un environnement
              stimulant et innovant.
            </p>
            <div className="hero-buttons">
              <Link to="/inscription" className="btn-primary-custom btn-lg">
                S'INSCRIRE MAINTENANT
              </Link>
              <Link to="/presentation" className="btn-outline-custom btn-lg">
                DÉCOUVRIR L'USK
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section scroll-section">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="stat-item scroll-anim">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section scroll-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-image scroll-anim">
                <img src={logo} alt="USK Logo" className="logo-image-question" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h2 className="scroll-anim">Pourquoi Choisir l'USK ?</h2>
                <p className="scroll-anim">
                  L'Université du Savoir Kongo est une institution universitaire privée
                  reconnue pour son excellence académique et son engagement envers la
                  formation de leaders compétents.
                </p>
                <ul className="about-list scroll-anim">
                  <li>✓ Formation de qualité internationale</li>
                  <li>✓ Corps professoral hautement qualifié</li>
                  <li>✓ Infrastructures modernes et équipées</li>
                  <li>✓ Partenariats avec des universités internationales</li>
                  <li>✓ Accompagnement personnalisé des étudiants</li>
                  <li>✓ Forte employabilité des diplômés</li>
                </ul>
                <div className="scroll-anim">
                  <Link to="/presentation" className="btn-secondary-custom">
                    EN SAVOIR PLUS
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Faculties Section */}
      <section className="faculties-section scroll-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="scroll-anim">Nos Facultés</h2>
            <p className="scroll-anim">Découvrez nos programmes d'études variés et de qualité</p>
          </div>
          <Row>
            {facultyData.slice(0, 4).map((faculty) => (
              <Col key={faculty.slug} lg={3} md={6} className="mb-4">
                <Link to={`/facultes/${faculty.slug}`} className="faculty-card-link">
                  <Card className="faculty-card h-100 scroll-anim">
                    <Card.Img variant="top" src={faculty.cardImage} className="faculty-card-img-home" />
                    <Card.Body>
                      <h4 className="faculty-title-home">{faculty.name}</h4>
                      <div className="card-arrow">
                        <FaArrowRight />
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4 scroll-anim">
            <Link to="/facultes" className="btn-outline-custom">
              VOIR TOUTES LES FACULTÉS
            </Link>
          </div>
        </Container>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section scroll-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="scroll-anim">Bourses et Offres</h2>
            <p className="scroll-anim">Profitez de nos offres exceptionnelles</p>
          </div>
          <Row>
            {promotions.map((promo, index) => (
              <Col key={index} lg={6} className="mb-4">
                <div className="promo-card scroll-anim">
                  <div className="promo-badge">{promo.discount}</div>
                  <h4>{promo.title}</h4>
                  <p>{promo.description}</p>
                  <Link to="/bourses" className="promo-link">
                    En savoir plus <FaArrowRight />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section scroll-section">
        <Container>
          <div className="cta-content text-center">
            <h2 className="scroll-anim">Prêt à Rejoindre l'USK ?</h2>
            <p className="scroll-anim">
              Inscrivez-vous dès maintenant et bénéficiez de nos promotions exceptionnelles
            </p>
            <div className="scroll-anim">
              <Link to="/inscription" className="btn-primary-custom btn-lg">
                COMMENCER VOTRE INSCRIPTION
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
