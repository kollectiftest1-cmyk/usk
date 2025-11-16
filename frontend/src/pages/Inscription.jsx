import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, ProgressBar, Card, Alert } from 'react-bootstrap';
import { FaUser, FaGraduationCap, FaFileUpload, FaCreditCard } from 'react-icons/fa';
import gsap from 'gsap';
import './Inscription.css';

const STEPS = [
  { name: 'Filière', icon: <FaGraduationCap /> },
  { name: 'Informations', icon: <FaUser /> },
  { name: 'Documents', icon: <FaFileUpload /> },
  { name: 'Paiement', icon: <FaCreditCard /> },
];

const Inscription = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    faculty: '',
    program: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    diploma: null,
    idCard: null,
  });
  const [error, setError] = useState('');
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
      gsap.from('.inscription-wrapper', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const nextStep = () => {
    // Basic validation
    if (step === 1 && (!formData.faculty || !formData.program)) {
      setError('Veuillez sélectionner une faculté et une filière.');
      return;
    }
    if (step === 2 && (!formData.firstName || !formData.lastName || !formData.email)) {
      setError('Veuillez remplir tous les champs personnels.');
      return;
    }
    setError('');
    if (step < STEPS.length) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Choix de la Faculté</Form.Label>
                <Form.Select name="faculty" value={formData.faculty} onChange={handleInputChange}>
                  <option>Sélectionner...</option>
                  <option value="eco">Sciences Économiques</option>
                  <option value="droit">Droit</option>
                  <option value="tech">Sciences et Technologies</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Choix de la Filière</Form.Label>
                <Form.Select name="program" value={formData.program} onChange={handleInputChange}>
                  <option>Sélectionner...</option>
                  <option value="gestion">Gestion Financière</option>
                  <option value="marketing">Marketing</option>
                  <option value="genie-logiciel">Génie Logiciel</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        );
      case 2:
        return (
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Prénom</Form.Label><Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Nom</Form.Label><Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Téléphone</Form.Label><Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Date de Naissance</Form.Label><Form.Control type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} /></Form.Group></Col>
          </Row>
        );
      case 3:
        return (
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Copie du Diplôme d'État</Form.Label>
                <Form.Control type="file" name="diploma" onChange={handleFileChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Copie de la Carte d'Identité</Form.Label>
                <Form.Control type="file" name="idCard" onChange={handleFileChange} />
              </Form.Group>
            </Col>
          </Row>
        );
      case 4:
        return (
          <div className="summary-wrapper">
            <h4>Récapitulatif de votre inscription</h4>
            <p><strong>Filière :</strong> {formData.faculty} - {formData.program}</p>
            <p><strong>Nom complet :</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Email :</strong> {formData.email}</p>
            <hr />
            <h4>Frais d'inscription</h4>
            <p>Les frais d'inscription s'élèvent à <strong>100 USD</strong>. Vous serez redirigé vers une page de paiement sécurisée après avoir soumis votre demande.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="inscription-page" ref={pageRef}>
      <section className="inscription-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center" style={{marginTop:15}}>
            <h1 className="hero-title" style={{marginTop:15}}>Rejoignez l'USK</h1>
            <p className="hero-subtitle">Commencez votre parcours vers l'excellence académique.</p>
          </div>
        </Container>
      </section>

      <section className="inscription-form-section py-5">
        <Container>
          <div className="inscription-wrapper">
            <div className="progress-bar-container">
              {STEPS.map((s, index) => (
                <div key={index} className={`step-item ${step > index ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}>
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-name">{s.name}</div>
                </div>
              ))}
            </div>

            <Card className="form-card">
              <Card.Body>
                <Card.Title as="h3" className="text-center mb-4">
                  Étape {step}: {STEPS[step - 1].name}
                </Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>{renderStep()}</Form>
              </Card.Body>
            </Card>

            <div className="form-navigation">
              {step > 1 && <Button variant="secondary" onClick={prevStep}>Précédent</Button>}
              <div style={{ flex: 1 }}></div>
              {step < STEPS.length && <Button variant="primary" onClick={nextStep}>Suivant</Button>}
              {step === STEPS.length && <Button variant="success">Soumettre et Payer 100 USD</Button>}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Inscription;
