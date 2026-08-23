import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, MapPin, Calendar, Users, SearchIcon, Clock, Leaf, Shield, Heart, PhoneIcon, InstagramIcon, FacebookIcon } from './components';

const AnimatedNumber = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export function Home() {
  const categoryBoxes = [
    { title: "India Tour Packages", image: "/images/kerala.jpg", link: "/packages", tab: "India" },
    { title: "International", image: "/images/bali.jpg", link: "/packages", tab: "International" },
    { title: "Wildlife Adventures in India", image: "/images/jim-corbett-safari.jpg", link: "/packages", tab: "Wildlife" }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up" style={{ fontSize: '4rem', lineHeight: '1.2' }}>Discover The World.<br /><span>Discover Yourself.</span></h1>
          <div className="hero-desc animate-fade-in-up delay-100" style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <p>Travel is more than just destinations—it’s a journey within, where you leave behind the ordinary, embrace the experience, and return with a new perspective on life.</p>
            <p style={{ marginTop: '1rem', fontWeight: '600' }}>Hassle-free tours, thoughtfully planned, just for you.</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ margin: '5rem auto' }}>
        <span className="section-subtitle animate-fade-in-up">Our Categories</span>
        <h2 className="section-title animate-fade-in-up delay-100">Explore Tour Packages</h2>
        <div className="grid-3">
          {categoryBoxes.map((cat, idx) => (
            <div className={`dest-card animate-fade-in-up delay-${(idx + 1) * 100}`} key={idx} style={{ padding: 0, overflow: 'hidden' }}>
              <div className="dest-img-container">
                <img src={cat.image} alt={cat.title} className="dest-img" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="dest-info" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 className="dest-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{cat.title}</h3>
                <Link to={cat.link} state={{ activeTab: cat.tab }} className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>View Tour Packages</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ margin: '5rem auto' }}>
        <span className="section-subtitle animate-fade-in-up">Our Promise</span>
        <h2 className="section-title animate-fade-in-up delay-100" style={{ marginBottom: '1rem' }}>Why Choose Us?</h2>
        <p className="animate-fade-in-up delay-100" style={{ textAlign: 'center', color: 'var(--slate-gray)', fontSize: '1.1rem', marginBottom: '3rem' }}>You enjoy the journey; we'll take care of the rest.</p>
        
        <div className="grid-3" style={{ marginTop: '2rem' }}>
          {[
            { text: "Personalized travel planning", icon: <Users /> },
            { text: "Budget-friendly Domestic and international tour packages", icon: <MapPin /> },
            { text: "Trusted travel guidance and support", icon: <Shield /> },
            { text: "Carefully selected stays and experiences", icon: <Heart /> },
            { text: "Hassle-free bookings and arrangements", icon: <Calendar /> },
            { text: "Dedicated service from start to finish", icon: <Clock /> }
          ].map((point, idx) => (
            <div 
              key={idx} 
              className={`animate-fade-in-up delay-${(idx % 3 + 1) * 100}`}
              style={{
                background: 'var(--white)',
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(139, 195, 74, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-12px)'; 
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; 
                e.currentTarget.style.borderColor = 'var(--nature-green)'; 
                const iconWrapper = e.currentTarget.querySelector('.icon-wrapper');
                if (iconWrapper) {
                  iconWrapper.style.background = 'var(--nature-green)';
                  iconWrapper.style.color = 'var(--white)';
                  iconWrapper.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; 
                e.currentTarget.style.borderColor = 'rgba(139, 195, 74, 0.1)'; 
                const iconWrapper = e.currentTarget.querySelector('.icon-wrapper');
                if (iconWrapper) {
                  iconWrapper.style.background = 'rgba(139, 195, 74, 0.1)';
                  iconWrapper.style.color = 'var(--nature-green)';
                  iconWrapper.style.transform = 'scale(1)';
                }
              }}
            >
              <div 
                className="icon-wrapper"
                style={{ 
                  width: '75px', height: '75px', 
                  borderRadius: '22px', 
                  background: 'rgba(139, 195, 74, 0.1)', 
                  color: 'var(--nature-green)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.8rem',
                  transition: 'all 0.4s ease'
                }}
              >
                {point.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-forest-green)', lineHeight: '1.6', fontWeight: '600', margin: 0 }}>{point.text}</h3>
            </div>
          ))}
        </div>
      </section>


      <section className="cta-section animate-fade-in-up" style={{ margin: '5rem auto' }}>
        <h2 className="cta-title">Ready for your next adventure?</h2>
        <p className="cta-desc">Join us in exploring the world's most beautiful destinations with our carefully crafted, sustainable travel packages.</p>
        <button 
          className="btn-secondary" 
          style={{ padding: '1rem 3rem', fontSize: '1.1rem', position: 'relative', zIndex: 10, cursor: 'pointer' }}
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
        >
          Start Planning
        </button>
      </section>
    </>
  );
}

export function Services() {
  const services = [
    { title: "Customized Domestic Tour Itineraries", image: "/images/domestic_tours.png", desc: "Tailor-made journeys across incredible India matching your exact preferences." },
    { title: "Customized International Tour Itineraries", image: "/images/international_tours.png", desc: "Seamless global travel experiences designed exclusively for you." },
    { title: "Group Tours", image: "/images/group_tours.png", desc: "Travel with like-minded explorers on our carefully curated group adventures." },
    { title: "Hotel Bookings", image: "/images/hotel_bookings.png", desc: "Premium, comfortable, and eco-friendly stays verified by our team." },
    { title: "Transportation", image: "/images/transportation.png", desc: "Safe and reliable transfers, cabs, and coaches for a smooth ride." },
    { title: "Sightseeing", image: "/images/sightseeing.png", desc: "Immersive local experiences, guided tours, and hidden gems." },
    { title: "Flight Tickets", image: "/images/flight_tickets.png", desc: "Hassle-free flight bookings with the best routes and rates." },
    { title: "Visa Arrangements", image: "/images/visa_arrangements.png", desc: "Expert assistance for swift and smooth visa processing." }
  ];

  return (
    <>
      <PageHeader title="Our Services" subtitle="Everything you need for a seamless journey." image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600" />
      <section className="container" style={{ minHeight: '50vh', textAlign: 'center', padding: '6rem 2rem' }}>
        <span className="section-subtitle animate-fade-in-up">What We Offer</span>
        <h2 className="section-title animate-fade-in-up delay-100">Comprehensive Travel Solutions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {services.map((srv, idx) => (
            <div key={idx} className={`animate-fade-in-up delay-${(idx % 4 + 1) * 100}`} style={{
              background: 'var(--white)',
              padding: '0',
              overflow: 'hidden',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--light-gray)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--nature-green)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--light-gray)'; }}
            >
              <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-forest-green)', fontWeight: '700', lineHeight: '1.4', margin: 0 }}>{srv.title}</h3>
                <p style={{ color: 'var(--slate-gray)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Packages() {
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState(location.state?.activeTab || 'India');

  const indiaPackages = [
    { title: 'Andaman – Havelock and Neil Island', duration: '5 Nights and 6 Days', image: '/images/andaman-islands.jpg' },
    { title: 'Chikmagalur', duration: '2 Nights and 3 Days', image: '/images/chikmagalur.jpg' },
    { title: 'Costal Karnataka – Mangalore – Udupi – Gokarna', duration: '5 Nights and 6 Days', image: '/images/costal-karnataka.jpg' },
    { title: 'Golden Triangle Tour – Delhi – Agra – Jaipur', duration: '5 Nights and 6 Days', image: '/images/agra.jpg' },
    { title: 'Goa', duration: '3 Nights and 4 Days', image: '/images/goa.jpg' },
    { title: 'Gujarat – Rann Utsav', duration: '4 Nights and 5 Days', image: '/images/rann-utsav.jpg' },
    { title: 'Himachal – Manali, Shimla, Dalhousie, Dharamshala', duration: 'Varying', image: '/images/himachal-pradesh.jpg' },
    { title: 'Kashmir', duration: '4 Nights and 5 Days', image: '/images/kashmir.jpg' },
    { title: 'Kerala – Kochi - Munnar – Allepey – Thekkady', duration: '4 Nights and 5 Days', image: '/images/kerala.jpg' },
    { title: 'Kodaikanal', duration: '3 Nights and 4 Days', image: '/images/kodaikanal.jpg' },
    { title: 'Meghalaya', duration: '4 Nights and 5 Days', image: '/images/meghalaya.jpg' },
    { title: 'Bangalore - Mysore - Coorg', duration: '4 Nights and 5 Days', image: '/images/bangalore.jpg' },
    { title: 'Ooty', duration: '2 Nights and 3 Days', image: '/images/ooty.jpg' },
    { title: 'Rajasthan - Jaipur – Jodhpur – Jaisalmar', duration: '7 Nights and 8 Days', image: '/images/rajasthan.jpg' },
    { title: 'Sikkim and Darjeeling', duration: '5 Nights and 6 Days', image: '/images/sikkim.jpg' },
    { title: 'Uttrakhand - Mussoorie and Nainital', duration: '5 Nights and 6 Days', image: '/images/uttrakhand.jpg' },
    { title: 'Varanasi – Ayodhya', duration: '4 Nights and 5 Days', image: '/images/varanasi.jpg' }
  ];

  const internationalPackages = [
    { title: 'Australia', duration: '6 Nights and 7 Days', image: '/images/australia.jpg' },
    { title: 'Bali – Indonesia - Nusa Penida – Gili Islands', duration: '7 Nights and 8 Days', image: '/images/bali.jpg' },
    { title: 'China', duration: '7 Nights and 8 Days', image: '/images/china.jpg' },
    { title: 'Dubai – Abu Dhabi', duration: '5 Nights and 6 Days', image: '/images/dubai.jpg' },
    { title: 'Hong Kong', duration: '5 Nights and 6 Days', image: '/images/hong-kong.jpg' },
    { title: 'Japan', duration: '7 Nights and 8 Days', image: '/images/japan.jpg' },
    { title: 'London', duration: '4 Nights and 5 Days', image: '/images/london.jpg' },
    { title: 'Malaysia', duration: '2 Nights and 3 Days', image: '/images/malaysia.jpg' },
    { title: 'Maldives', duration: '4 Nights and 5 Days', image: '/images/maldives.jpg' },
    { title: 'Phu Quoc', duration: '3 Nights and 4 Days', image: '/images/phu-quoc.jpg' },
    { title: 'Singapore', duration: '4 Nights and 5 Days', image: '/images/singapore.jpg' },
    { title: 'Sri Lanka', duration: '4 Nights and 5 Days', image: '/images/sri-lanka.jpg' },
    { title: 'Switzerland', duration: '6 Nights and 7 Days', image: '/images/switzerland.jpg' },
    { title: 'Thailand – Bangkok – Pattaya – Phuket – Krabi', duration: '6 Nights and 7 Days', image: '/images/thailand.jpg' },
    { title: 'Thailand – Chiang Mai', duration: '3 Nights and 4 Days', image: '/images/chiang-mai.jpg' },
    { title: 'Turkey', duration: '5 Nights and 6 Days', image: '/images/turkey.jpg' },
    { title: 'Vietnam', duration: '7 Nights and 8 Days', image: '/images/vietnam.jpg' }
  ];

  const wildlifePackages = [
    { title: 'Bandipur National Park', duration: 'Wildlife Safari', image: '/images/bandipur-national-park.jpg' },
    { title: 'Gir Forest National Park', duration: 'Wildlife Safari', image: '/images/gir-forest-national-park.jpg' },
    { title: 'Jim Corbett National Park', duration: 'Wildlife Safari', image: '/images/jim-corbett-national-park.jpg' },
    { title: 'Kabini National Park', duration: 'Wildlife Safari', image: '/images/kabina-national-park.jpg' },
    { title: 'Kaziranga National Park', duration: 'Wildlife Safari', image: '/images/kaziranga-national-park.jpg' },
    { title: 'Manas National Park', duration: 'Wildlife Safari', image: '/images/manas-national-park.jpg' },
    { title: 'Mudumalai Tiger Reserve', duration: 'Wildlife Safari', image: '/images/mudumalai-tiger-reserve.jpg' },
    { title: 'Parambikulam Tiger Reserve', duration: 'Wildlife Safari', image: '/images/parambikulam-tiger-reserve.jpg' },
    { title: 'Ranthambore National Park', duration: 'Wildlife Safari', image: '/images/ranthambore-national-park.jpg' },
    { title: 'Tadoba-Andhari Tiger Reserve', duration: 'Wildlife Safari', image: '/images/tadoba-andhari-tiger-reserve.jpg' },
    { title: 'Thekkady – Gavi Wildlife Safari', duration: 'Wildlife Safari', image: '/images/thekkady-gavi-wildlife-safari.jpg' }
  ];

  const getActivePackages = () => {
    if (activeTab === 'India') return indiaPackages;
    if (activeTab === 'International') return internationalPackages;
    return wildlifePackages;
  };

  const getTabStyle = (tabName) => ({
    padding: '0.8rem 2rem',
    margin: '0.5rem',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: activeTab === tabName ? 'var(--nature-green)' : 'var(--white)',
    color: activeTab === tabName ? 'var(--white)' : 'var(--deep-forest-green)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)'
  });

  return (
    <>
      <PageHeader title="Tour Packages" subtitle="Thoughtfully planned itineraries for everyone." image="/images/tour_packages_header.png" />
      <section className="container" style={{ minHeight: '50vh', textAlign: 'center', paddingTop: '5rem' }}>
        <h2 className="animate-fade-in-up">Find Your Perfect Package</h2>
        <p style={{ marginTop: '1rem', color: 'var(--slate-gray)' }} className="animate-fade-in-up delay-100">Explore our comprehensive list of destinations designed just for you.</p>
        
        <div style={{ marginTop: '2rem', marginBottom: '3rem' }} className="animate-fade-in-up delay-200">
          <button style={getTabStyle('India')} onClick={() => setActiveTab('India')}>India Packages</button>
          <button style={getTabStyle('International')} onClick={() => setActiveTab('International')}>International Packages</button>
          <button style={getTabStyle('Wildlife')} onClick={() => setActiveTab('Wildlife')}>Wildlife Adventures</button>
        </div>

        <div key={activeTab} className="grid-3 animate-fade-in-up delay-300" style={{ textAlign: 'left' }}>
          {getActivePackages().map((pkg, idx) => (
            <div className="feature-card" key={idx} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--deep-forest-green)' }}>{pkg.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sky-turquoise)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <Clock /> {pkg.duration}
                </div>
                <div style={{ flexGrow: 1 }}></div>
                <a href={`https://wa.me/919840636358?text=Hello%20NewV%20Tours%20and%20Travels!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', padding: '0.5rem', fontSize: '0.9rem', textAlign: 'center', display: 'inline-block', boxSizing: 'border-box', textDecoration: 'none' }}>Enquire Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Discover The World. Discover Yourself." image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1600" />
      <section className="container" style={{ minHeight: '60vh', padding: '6rem 2rem' }}>
        <div className="about-grid">
          <div className="about-img-wrapper animate-fade-in-up">
            <img src="/images/logo.png" alt="NewV Tours and Travels Logo" className="about-main-img" style={{ objectFit: 'contain', padding: '2rem', background: 'var(--white)' }} />
            <div className="about-quote-box">
              <p className="quote-text">"We create experiences that inspire."</p>
              <div className="quote-author" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span>— Jeevapriya MS, Founder</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.instagram.com/jeevapriya_ms?utm_source=qr&igsi=MWttYTVxaXB0a3dvZw==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--deep-forest-green)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nature-green)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--deep-forest-green)'}>
                    <InstagramIcon />
                  </a>
                  <a href="https://www.facebook.com/share/1CEbcLUFms/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--deep-forest-green)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nature-green)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--deep-forest-green)'}>
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: '1rem' }}>
            <span className="section-subtitle animate-fade-in-up delay-100" style={{ textAlign: 'left', marginBottom: '1rem' }}>Our Story</span>
            <h2 className="section-title animate-fade-in-up delay-200" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '3rem' }}>Journey Within</h2>
            <div className="animate-fade-in-up delay-300" style={{ color: 'var(--slate-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>At <strong>NewV Tours and Travels</strong>, we believe that travel is more than just destinations—it’s a journey within, where you leave behind the ordinary, embrace the experience, and return with a new perspective on life.</p>
              <p style={{ marginBottom: '1.5rem' }}>Founded by <strong>Jeevapriya MS</strong>, with a passion for exploration and a commitment to exceptional service, we specialize in crafting seamless travel experiences that are tailored to your preferences, budget, and travel style.</p>
              <p style={{ marginBottom: '1.5rem' }}>Whether it's a family trip, a romantic getaway, a wildlife adventure, a group tour, or an international vacation, we take care of every detail so you can focus on enjoying the journey.</p>
              <p style={{ marginBottom: '1.5rem' }}>Our goal is simple: to make travel easy, meaningful, and unforgettable. From planning and bookings to on-trip support, we ensure that every journey is smooth, comfortable, and filled with memorable moments.</p>
              <p style={{ marginBottom: '1.5rem' }}>At <strong>NewV Tours and Travels</strong>, we don't just plan trips—we create experiences that inspire, connect, and stay with you long after you return home.</p>
              <div className="animate-fade-in-up delay-400" style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}><AnimatedNumber end={100} duration={2000} suffix="+" /></h4>
                  <p style={{ color: 'var(--nature-green)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Destinations</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}><AnimatedNumber end={24} duration={2000} />/<AnimatedNumber end={7} duration={2000} /></h4>
                  <p style={{ color: 'var(--nature-green)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Trip Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    date: '',
    destination: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', phone: '', date: '', destination: '' });
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We're here to help you plan your dream vacation." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" />
      <section className="container" style={{ minHeight: '60vh', padding: '6rem 2rem' }}>
        <div className="contact-grid">
          
          {/* Office Details */}
          <div className="animate-fade-in-up" style={{ background: 'var(--charcoal)', color: 'var(--white)', padding: '3.5rem', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--nature-green)', opacity: '0.2', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>
            
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--white)', fontWeight: '700' }}>Get in Touch</h2>
            <p style={{ color: 'var(--light-gray)', marginBottom: '3rem', lineHeight: '1.8', fontSize: '1.1rem' }}>Whether you have a question about our packages, need help with planning, or just want to say hello, our team is ready to answer all your questions.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="contact-info-card animate-fade-in-up delay-100">
                <div className="contact-icon-wrapper"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)', fontSize: '1.1rem' }}>Our Office</h4>
                  <p style={{ color: 'var(--light-gray)', lineHeight: '1.6' }}>31A, Chelliamman Koil St,<br/>Chelliamman Nagar, Athipet, Ambattur,<br/>Chennai, Tamil Nadu, India - 600058</p>
                </div>
              </div>
              <div className="contact-info-card animate-fade-in-up delay-200">
                <div className="contact-icon-wrapper"><PhoneIcon size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)', fontSize: '1.1rem' }}>Phone</h4>
                  <p style={{ color: 'var(--light-gray)', fontSize: '1.1rem' }}>+91 9840636358</p>
                </div>
              </div>
              <div className="contact-info-card animate-fade-in-up delay-300">
                <div className="contact-icon-wrapper"><Heart size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)', fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ color: 'var(--light-gray)', fontSize: '1.1rem' }}>newvtoursandtravels@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200" style={{ padding: '3.5rem', background: 'var(--white)', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '2.5rem', color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}>Plan Your Trip</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="animate-fade-in-up delay-300">
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="promax-input" />
              </div>
              <div className="animate-fade-in-up delay-400">
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="promax-input" />
              </div>
              <div className="animate-fade-in-up delay-500" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Travel Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="promax-input" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Destination</label>
                  <input required type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. Kerala, Bali" className="promax-input" />
                </div>
              </div>
              <button type="submit" className="btn-primary animate-fade-in-up delay-500" style={{ marginTop: '2rem', padding: '1.2rem', fontSize: '1.1rem', width: '100%', borderRadius: '12px', fontWeight: '600', boxShadow: '0 10px 20px rgba(139, 195, 74, 0.3)' }}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function Reviews() {
  const reviews = [
    { name: "Arun Kumar", location: "Chennai", rating: 5, text: "The customized Kerala trip was fantastic! Everything from the houseboat to the sightseeing was perfectly arranged. Highly recommend!" },
    { name: "Priya Rajan", location: "Bangalore", rating: 5, text: "We took a group tour to Bali and the experience was seamless. The itinerary was perfectly balanced." },
    { name: "Sarah & John", location: "Mumbai", rating: 5, text: "Our honeymoon in Switzerland was a dream come true, thanks to the meticulous planning by Jeevapriya and her team." },
    { name: "Mohammed Tariq", location: "Delhi", rating: 5, text: "Great wildlife safari experience at Jim Corbett. The resorts and guides were very professional and helpful." }
  ];

  return (
    <>
      <PageHeader title="Customer Reviews" subtitle="See what our travelers have to say about their journeys." image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600" />
      <section className="container" style={{ minHeight: '60vh', padding: '6rem 2rem' }}>
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Happy Travelers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={`animate-fade-in-up delay-${(idx % 4 + 1) * 100}`} style={{ background: 'var(--white)', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--light-gray)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--warm-golden)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ opacity: i < rev.rating ? 1 : 0.3 }}>★</span>
                ))}
              </div>
              <p style={{ color: 'var(--slate-gray)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>"{rev.text}"</p>
              <div>
                <h4 style={{ color: 'var(--deep-forest-green)', fontSize: '1.2rem', fontWeight: '700' }}>{rev.name}</h4>
                <p style={{ color: 'var(--nature-green)', fontSize: '0.9rem' }}>{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
