import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MapPin = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
export const Calendar = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
export const Users = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
export const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
export const Clock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
export const Leaf = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>;
export const Shield = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
export const Heart = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;

export const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
export const XIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export function Navbar() {
  const location = useLocation();
  const isInner = location.pathname !== '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className={`navbar ${isInner ? 'navbar-inner' : ''}`}>
      <Link to="/" className="nav-brand">
        <img src="/images/logo-white.png" alt="NewV Tours and Travels Logo" className="brand-logo" />
      </Link>
      
      <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
        <li><Link to="/packages" onClick={() => setIsMobileMenuOpen(false)}>Our Packages</Link></li>
        <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        <li className="mobile-btn-container">
          <a href="https://wa.me/919840636358?text=Hello%20NewV%20Tours%20and%20Travels!%20I%20would%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Book Now</a>
        </li>
      </ul>
      <a href="https://wa.me/919840636358?text=Hello%20NewV%20Tours%20and%20Travels!%20I%20would%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer" className="btn-primary desktop-btn">Book Now</a>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>NewV Tours & Travels</h3>
          <p>Founded by Jeevapriya MS. Travel is more than just destinations—it’s a journey within.</p>
        </div>

        <div>
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li><MapPin /> <span>31A, Chelliamman Koil St, Athipet, Ambattur, Chennai - 600058</span></li>
            <li><Clock /> <span>+91 9840636358</span></li>
            <li><Heart /> <span>newvtoursandtravels@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VIYANISTIC - NewV Tours and Travels. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PopupModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpenContactModal = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpenContactModal);
    
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    let timer;
    if (!hasSeenModal) {
      timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenModal', 'true');
      }, 1000); // show after 1 second
    }
    
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('open-contact-modal', handleOpenContactModal);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: 'var(--white)', borderRadius: '24px', padding: '2.5rem', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
        <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--light-gray)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--slate-gray)' }}>✕</button>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--deep-forest-green)', fontSize: '1.8rem', textAlign: 'center' }}>Plan Your Dream Trip</h3>
        <p style={{ textAlign: 'center', color: 'var(--slate-gray)', marginBottom: '2rem' }}>Leave your details and we'll craft the perfect itinerary for you.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you soon.'); setIsOpen(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Full Name</label>
            <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Phone Number</label>
            <input required type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Travel Date</label>
              <input required type="date" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Destination</label>
              <input required type="text" placeholder="e.g. Kerala, Bali" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.1rem', borderRadius: '8px', width: '100%' }}>Send Enquiry</button>
        </form>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle, image }) {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${image || '/hero.png'})` }}>
      <div className="page-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
