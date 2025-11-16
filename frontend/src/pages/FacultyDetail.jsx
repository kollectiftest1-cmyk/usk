import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaUserTie, FaBook, FaBriefcase, FaArrowLeft } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { facultyData } from '../data/facultyData';
import './FacultyDetail.css';

gsap.registerPlugin(ScrollTrigger);

const FacultyDetail = () => {
  const { slug } = useParams();
  const faculty = facultyData.find(f => f.slug === slug);
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;
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
  }, [faculty]);

  if (!faculty) {
    return (
      <Container className="py-5 text-center">
        <h2>Faculté non trouvée</h2>
        <p>La faculté que vous cherchez n'existe pas.</p>
        <Link to="/facultes" className="btn btn-primary">Retour à la liste des facultés</Link>
      </Container>
    );
  }

  return (
    <div className="faculty-detail-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="faculty-detail-hero" style={{ backgroundImage: `url(${faculty.image})` }}>
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">{faculty.name}</h1>
            <p className="hero-subtitle">{faculty.description}</p>
          </div>
        </Container>
      </section>

      {/* Dean's Message Section */}
      <section className="dean-message-section scroll-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <div className="dean-photo scroll-anim">
                <FaUserTie size={80} />
              </div>
              <h4 className="dean-name mt-3 scroll-anim">{faculty.dean}</h4>
              <p className="dean-title scroll-anim">Doyen de la faculté</p>
            </Col>
            <Col lg={8}>
              <div className="dean-message scroll-anim">
                <h2 className="section-title">Message du Doyen</h2>
                <p>"{faculty.deanMessage}"</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="programs-section scroll-section bg-light py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Programmes d'Études</h2>
            <p className="scroll-anim">Explorez les filières spécialisées que nous proposons.</p>
          </div>
          <Row>
            {faculty.programs.map((program, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="program-card h-100 scroll-anim">
                  <Card.Body>
                    <div className="program-icon"><FaBook /></div>
                    <Card.Title as="h4">{program.name}</Card.Title>
                    <Card.Text>{program.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-section scroll-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title scroll-anim">Débouchés Professionnels</h2>
            <p className="scroll-anim">Une formation qui ouvre les portes du marché du travail.</p>
          </div>
          <div className="career-tags text-center scroll-anim">
            {faculty.careerOpportunities.map((career, index) => (
              <Badge key={index} pill bg="primary" className="career-tag">
                <FaBriefcase className="me-2" /> {career}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-4">
        <Link to="/facultes" className="btn btn-outline-secondary">
          <FaArrowLeft className="me-2" />
          Retour à toutes les facultés
        </Link>
      </Container>
    </div>
  );
};

export default FacultyDetail;
