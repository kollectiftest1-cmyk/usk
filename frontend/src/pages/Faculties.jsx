import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { facultyData } from '../data/facultyData';
import './Faculties.css';

gsap.registerPlugin(ScrollTrigger);

const Faculties = () => {
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

      const facultyCards = gsap.utils.toArray('.faculty-card-item');
      gsap.set(facultyCards, { opacity: 0, y: 30 });

      ScrollTrigger.batch(facultyCards, {
        start: 'top 85%',
        once: true,
        onEnter: batch => gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: 'auto'
        }),
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="faculties-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="faculties-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Découvrez Nos Facultés</h1>
            <p className="hero-subtitle">Un éventail de formations pour construire votre avenir.</p>
          </div>
        </Container>
      </section>

      {/* Faculties List Section */}
      <section className="faculties-list-section py-5">
        <Container>
          <Row>
            {facultyData.map((faculty) => (
              <Col key={faculty.slug} lg={4} md={6} className="mb-4 faculty-card-item">
                <Card as={Link} to={`/facultes/${faculty.slug}`} className="faculty-card h-100">
                  <Card.Img variant="top" src={faculty.cardImage} className="faculty-card-img" />
                  <Card.Body>
                    <Card.Title as="h3">{faculty.name}</Card.Title>
                    <Card.Text>{faculty.description}</Card.Text>
                    <div className="programs-list">
                      <strong>Programmes clés :</strong>
                      <ul>
                        {faculty.programs.slice(0, 3).map(prog => <li key={prog.name}>{prog.name}</li>)}
                        {faculty.programs.length > 3 && <li>et plus...</li>}
                      </ul>
                    </div>
                    <div className="card-link-arrow">
                      Voir les détails <FaArrowRight />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Faculties;
