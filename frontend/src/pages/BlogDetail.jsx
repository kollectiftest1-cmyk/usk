import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import gsap from 'gsap';
import { blogPosts } from '../data/blogData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
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
      gsap.from('.blog-content, .sidebar', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, pageRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h2>Article non trouvé</h2>
        <p>L'article que vous cherchez n'existe pas.</p>
        <Link to="/blog" className="btn btn-primary">Retour au blog</Link>
      </Container>
    );
  }

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="blog-detail-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="blog-detail-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <Badge bg="light" text="dark" className="hero-category">{post.category}</Badge>
            <h1 className="hero-title">{post.title}</h1>
            <div className="hero-meta">
              <span><FaUser /> {post.author}</span>
              <span><FaCalendarAlt /> {post.date}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="blog-content-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="blog-content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <hr className="my-5" />
              <Link to="/blog" className="btn btn-outline-secondary">
                <FaArrowLeft className="me-2" />
                Retour à la liste des articles
              </Link>
            </Col>
            <Col lg={4} className="sidebar">
              <div className="sidebar-widget">
                <h4>Autres Articles</h4>
                <ul className="list-unstyled">
                  {otherPosts.map(otherPost => (
                    <li key={otherPost.slug}>
                      <Link to={`/blog/${otherPost.slug}`} className="sidebar-post">
                        <img src={otherPost.image.replace('1200x500', '100x70')} alt={otherPost.title} />
                        <span>{otherPost.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetail;
