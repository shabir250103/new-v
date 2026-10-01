import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PopupModal } from './components';
import { Home, Services, Packages, About, Contact, Reviews, Gallery } from './pages';
import './index.css';
import Seo from './Seo.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <div className="app-container">
        <Navbar />
        <PopupModal />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<section className="container" style={{ padding: '10rem 2rem' }}><h1>Page not found</h1><p>The page you requested does not exist.</p><a href="/">Return to home</a></section>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
