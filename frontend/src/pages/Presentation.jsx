import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHistory, FaBullseye, FaEye, FaStar, FaUsers, FaGlobe, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Presentation.css';

gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Scroll-triggered animations for sections
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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const values = [
    { icon: <FaStar />, title: 'Excellence', description: 'Viser les plus hauts standards de qualité dans l\'enseignement et la recherche.' },
    { icon: <FaUsers />, title: 'Inclusion', description: 'Créer un environnement où chaque étudiant peut s\'épanouir et se sentir valorisé.' },
    { icon: <FaGlobe />, title: 'Ouverture', description: 'Développer des partenariats stratégiques avec des institutions du monde entier.' },
    { icon: <FaBullseye />, title: 'Innovation', description: 'Encourager la créativité, la pensée critique et les solutions nouvelles.' }
  ];

  const strengths = [
    { title: 'Corps Professoral Qualifié', description: 'Nos enseignants sont des experts reconnus dans leur domaine.' },
    { title: 'Infrastructures Modernes', description: 'Un campus équipé pour une expérience d\'apprentissage optimale.' },
    { title: 'Partenariats Stratégiques', description: 'Des collaborations pour des opportunités de stage et d\'échange.' },
    { title: 'Accompagnement Personnalisé', description: 'Un suivi individualisé pour la réussite de chaque étudiant.' },
    { title: 'Recherche et Innovation', description: 'Des projets innovants en partenariat avec le secteur privé.' },
    { title: 'Forte Employabilité', description: 'Une formation orientée vers le marché du travail.' }
  ];

  return (
    <div className="presentation-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="presentation-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Au Cœur de l'Excellence</h1>
            <p className="hero-subtitle">Découvrez l'Université du Savoir Kongo</p>
          </div>
        </Container>
      </section>

      {/* Histoire Section */}
      <section className="history-section scroll-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="scroll-anim">
                <h2 className="section-title">Notre Histoire</h2>
                <p>
                  Fondée sur la vision d'un pôle d'excellence académique en Afrique centrale, l'Université du Savoir Kongo (USK) s'est engagée dès sa création à former des leaders compétents, éthiques et innovants.
                </p>
                <p>
                  Notre institution se distingue par une approche pédagogique moderne, alliant rigueur théorique et pertinence pratique, pour préparer nos étudiants à contribuer activement au développement socio-économique du continent.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="history-icon-container scroll-anim">
                <FaHistory className="history-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission et Vision Section */}
      <section className="mission-vision-section scroll-section bg-light py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="presentation-card scroll-anim">
                <div className="card-icon"><FaBullseye /></div>
                <h3>Notre Mission</h3>
                <p>
                  Former des professionnels hautement qualifiés et des citoyens responsables, capables de relever les défis du 21ème siècle grâce à une formation de qualité internationale, promouvant la recherche, l'innovation et l'esprit critique.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="presentation-card scroll-anim">
                <div className="card-icon"><FaEye /></div>
                <h3>Notre Vision</h3>
                <p>
                  Devenir une université de référence en Afrique, reconnue pour l'excellence de sa formation, l'impact de sa recherche et le leadership de ses diplômés sur la scène nationale et internationale.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Valeurs Section */}
      <section className="values-section scroll-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Nos Valeurs Fondamentales</h2>
            <p className="scroll-anim">Les piliers de notre identité.</p>
          </div>
          <Row>
            {values.map((value, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="value-card text-center scroll-anim">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Forces et Atouts Section */}
      <section className="strengths-section scroll-section bg-light py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Nos Atouts Majeurs</h2>
            <p className="scroll-anim">Ce qui nous distingue.</p>
          </div>
          <Row>
            {strengths.map((strength, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card className="strength-card h-100 scroll-anim">
                  <Card.Body>
                    <div className="strength-number">{(index + 1).toString().padStart(2, '0')}</div>
                    <Card.Title as="h4">{strength.title}</Card.Title>
                    <Card.Text>{strength.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section-presentation scroll-section py-5">
        <Container className="text-center">
          <div className="scroll-anim">
            <h2 className="cta-title">Prêt à nous rejoindre ?</h2>
            <p className="cta-subtitle">
              Explorez nos facultés ou commencez votre processus d'inscription dès aujourd'hui.
            </p>
            <div className="cta-buttons mt-4">
              <Link to="/facultes" className="btn-primary-custom btn-lg me-3">
                Découvrir les Facultés <FaArrowRight />
              </Link>
              <Link to="/inscription" className="btn-outline-custom btn-lg">
                S'inscrire
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Presentation;
