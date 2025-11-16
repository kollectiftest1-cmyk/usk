import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
    <div className="contact-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Contactez-Nous</h1>
            <p className="hero-subtitle">Nous sommes à votre écoute. N'hésitez pas à nous joindre.</p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-form-section scroll-section py-5">
        <Container>
          <Row>
            {/* Contact Info */}
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="contact-info-wrapper">
                <h2 className="section-title scroll-anim">Nos Coordonnées</h2>
                <p className="scroll-anim">
                  Pour toute question ou demande d'information, vous pouvez nous contacter via les canaux suivants. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <div className="contact-details">
                  <div className="contact-item scroll-anim">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <strong>Adresse</strong>
                      <p>123 Avenue de l'Université, Kinshasa, RDC</p>
                    </div>
                  </div>
                  <div className="contact-item scroll-anim">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <strong>Email</strong>
                      <p>contact@usk.ac</p>
                    </div>
                  </div>
                  <div className="contact-item scroll-anim">
                    <FaPhone className="contact-icon" />
                    <div>
                      <strong>Téléphone</strong>
                      <p>+243 850 828 027</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={7}>
              <div className="contact-form-wrapper scroll-anim">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Votre Nom</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Votre Email</Form.Label>
                        <Form.Control type="email" placeholder="john.doe@example.com" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGroupSubject">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control type="text" placeholder="Demande d'information" required />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupMessage">
                    <Form.Label>Votre Message</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Écrivez votre message ici..." required />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="btn-primary-custom w-100">
                    Envoyer le Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section scroll-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.423699551435!2d15.26667591526685!3d-4.33333304753514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a30f1a7cb3333%3A0x4b7f7a7b7b7b7b7b!2sUniversité%20de%20Kinshasa!5e0!3m2!1sfr!2scd!4v1634204765432!5m2!1sfr!2scd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Carte de l'Université du Savoir Kongo"
          className="scroll-anim"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
