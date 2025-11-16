import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Faculties from './pages/Faculties';
import FacultyDetail from './pages/FacultyDetail';
import Inscription from './pages/Inscription';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Bourses from './pages/Bourses';
import Contact from './pages/Contact';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/facultes" element={<Faculties />} />
          <Route path="/facultes/:slug" element={<FacultyDetail />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/bourses" element={<Bourses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
