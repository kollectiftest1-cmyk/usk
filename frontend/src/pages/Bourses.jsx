import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaPaintBrush, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Bourses.css';

gsap.registerPlugin(ScrollTrigger);

const boursesData = [
  {
    icon: <FaAward />,
    title: 'Bourses d\'Excellence Académique',
    description: 'Nous récompensons les étudiants exceptionnels avec des bourses couvrant jusqu\'à 75% des frais de scolarité. La sélection est basée sur le mérite académique.',
    badge: 'Mérite'
  },
  {
    icon: <FaUsers />,
    title: 'Réduction pour Inscription Hâtive',
    description: 'Bénéficiez d\'une réduction de 20% sur vos frais d\'inscription pour toute inscription validée avant le 31 Juillet.',
    badge: 'Offre Limitée'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Bourses pour Talents Artistiques et Sportifs',
    description: 'Des bourses spéciales sont disponibles pour les étudiants démontrant un talent exceptionnel dans les domaines artistiques ou sportifs.',
    badge: 'Talent'
  }
];

const testimonialsData = [
  {
    quote: "L'USK a été un véritable tremplin pour ma carrière. La qualité de l'enseignement et le soutien des professeurs m'ont permis de décrocher le poste de mes rêves.",
    author: 'Grace N.',
    role: 'Alumni 2022, Analyste Financière'
  },
  {
    quote: "Les projets pratiques et les stages proposés par l'université m'ont donné une expérience inestimable. Je me suis senti prêt à affronter le marché du travail dès ma sortie.",
    author: 'David M.',
    role: 'Alumni 2021, Ingénieur Logiciel'
  }
];

const Bourses = () => {
  const pageRef = useRef(null);

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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bourses-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="bourses-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Bourses, Offres et Vie Étudiante</h1>
            <p className="hero-subtitle">Découvrez les avantages et l'expérience unique à l'USK.</p>
          </div>
        </Container>
      </section>

      {/* Bourses Section */}
      <section className="offers-section scroll-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Offres et Bourses Actuelles</h2>
            <p className="scroll-anim">Nous soutenons nos étudiants dans la poursuite de l'excellence.</p>
          </div>
          <Row>
            {boursesData.map((bourse, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card className="offer-card h-100 scroll-anim">
                  <Card.Body>
                    <div className="offer-badge">{bourse.badge}</div>
                    <div className="offer-icon">{bourse.icon}</div>
                    <Card.Title as="h3">{bourse.title}</Card.Title>
                    <Card.Text>{bourse.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section scroll-section bg-light py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Paroles d'Anciens</h2>
            <p className="scroll-anim">Ce que nos diplômés disent de leur expérience.</p>
          </div>
          <Row>
            {testimonialsData.map((testimonial, index) => (
              <Col key={index} lg={6} className="mb-4">
                <div className="testimonial-card scroll-anim">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="quote-text">"{testimonial.quote}"</p>
                  <div className="quote-author">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Student Life Section */}
      <section className="student-life-section scroll-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Une Vie de Campus Riche et Dynamique</h2>
            <p className="scroll-anim">Plus qu'une formation, une véritable expérience.</p>
          </div>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="student-life-image scroll-anim">
                 <img src="https://via.placeholder.com/500x350/27AEE4/FFFFFF?text=Vie+Étudiante" alt="Vie étudiante à l'USK" className="img-fluid rounded shadow" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="student-life-content">
                <p className="scroll-anim">
                  À l'USK, nous croyons que l'apprentissage se poursuit en dehors des salles de classe. Notre campus offre un environnement stimulant où les étudiants peuvent s'épanouir personnellement et professionnellement.
                </p>
                <ul className="student-life-list">
                  <li className="scroll-anim"><strong>Clubs et Associations :</strong> Sport, culture, entrepreneuriat... trouvez votre passion.</li>
                  <li className="scroll-anim"><strong>Événements et Conférences :</strong> Rencontrez des experts et élargissez vos horizons.</li>
                  <li className="scroll-anim"><strong>Infrastructures Modernes :</strong> Des espaces dédiés au sport, à la culture et au travail collaboratif.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section-bourses scroll-section py-5">
        <Container className="text-center">
          <div className="scroll-anim">
            <h2 className="cta-title">Prêt à Vivre l'Expérience USK ?</h2>
            <p className="cta-subtitle">
              Votre avenir commence ici. Postulez dès maintenant pour rejoindre notre communauté.
            </p>
            <Link to="/inscription" className="btn-primary-custom btn-lg mt-3">
              Commencer Mon Inscription <FaArrowRight />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Bourses;
