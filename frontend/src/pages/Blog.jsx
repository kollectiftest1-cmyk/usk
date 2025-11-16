import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Badge, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '../data/blogData';
import './Blog.css';

gsap.registerPlugin(ScrollTrigger);

const featuredPost = blogPosts.find(p => p.featured);
const otherPosts = blogPosts.filter(p => !p.featured);

const Blog = () => {
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
    <div className="blog-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Blog & Actualités</h1>
            <p className="hero-subtitle">Restez informé des dernières nouvelles de l'USK.</p>
          </div>
        </Container>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="featured-post-section scroll-section py-5">
          <Container>
            <Card as={Link} to={`/blog/${featuredPost.slug}`} className="featured-post-card scroll-anim">
              <Row className="g-0">
                <Col lg={6}>
                  <img src={featuredPost.image.replace('1200x500', '800x400')} className="img-fluid rounded-start" alt={featuredPost.title} />
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <Badge bg="primary" className="mb-2">{featuredPost.category}</Badge>
                    <Card.Title as="h2">{featuredPost.title}</Card.Title>
                    <div className="post-meta">
                      <span><FaUser /> {featuredPost.author}</span>
                      <span><FaCalendarAlt /> {featuredPost.date}</span>
                    </div>
                    <Card.Text>{featuredPost.excerpt}</Card.Text>
                    <div className="card-link-arrow">
                      Lire la suite <FaArrowRight />
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </section>
      )}

      {/* Posts Grid Section */}
      <section className="posts-grid-section scroll-section py-5 bg-light">
        <Container>
          <Row>
            {otherPosts.map((post) => (
              <Col key={post.slug} lg={4} md={6} className="mb-4">
                <Card as={Link} to={`/blog/${post.slug}`} className="post-card h-100 scroll-anim">
                  <Card.Img variant="top" src={post.image.replace('1200x500', '400x250')} />
                  <Card.Body>
                    <Badge bg="secondary" className="mb-2">{post.category}</Badge>
                    <Card.Title as="h4">{post.title}</Card.Title>
                    <div className="post-meta-small">
                      <span><FaCalendarAlt /> {post.date}</span>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="card-link-arrow-small">
                      Lire la suite <FaArrowRight />
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          
          {/* Pagination (for future use) */}
          <div className="pagination-container mt-4 d-flex justify-content-center scroll-anim">
            <Pagination>
              <Pagination.Prev disabled />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
