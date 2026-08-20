import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, MapPin, Calendar, Users, SearchIcon, Clock, Leaf, Shield, Heart } from './components';

export function Home() {
  const popularDestinations = [
    { title: "Kerala Backwaters", duration: "4 Nights / 5 Days", desc: "Kochi - Munnar - Allepey - Thekkady. Experience the serene backwaters and lush tea gardens.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", badge: "India" },
    { title: "Bali, Indonesia", duration: "7 Nights / 8 Days", desc: "Nusa Penida - Gili Islands. Tropical paradise with pristine beaches and vibrant culture.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", badge: "International" },
    { title: "Jim Corbett Safari", duration: "3 Nights / 4 Days", desc: "Immerse yourself in nature and witness majestic tigers in their natural habitat.", image: "https://images.unsplash.com/photo-1571569426707-1e8c61bb69ed?auto=format&fit=crop&q=80&w=800", badge: "Wildlife" }
  ];

  const ecoPackages = [
    { title: "Andaman Islands", duration: "5 Nights / 6 Days", desc: "Havelock & Neil Island. Coral reefs and eco-friendly beachfront stays.", image: "https://images.unsplash.com/photo-1589394815804-964ce0ff96c7?auto=format&fit=crop&q=80&w=800", badge: "Eco-Friendly" },
    { title: "Meghalaya Escapade", duration: "4 Nights / 5 Days", desc: "Explore living root bridges and the wettest place on earth.", image: "https://images.unsplash.com/photo-1569974459379-ec0a1e127393?auto=format&fit=crop&q=80&w=800", badge: "Nature" },
    { title: "Switzerland Alpine", duration: "6 Nights / 7 Days", desc: "Pristine lakes, mountain trails, and sustainable rail travel.", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800", badge: "Premium" }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">Explore <span>Nature.</span><br />Discover Yourself.</h1>
          <p className="hero-desc animate-fade-in-up delay-100">Travel is more than just destinations—it’s a journey within. Leave behind the ordinary, embrace the eco-friendly experience, and return with a new perspective on life.</p>
          <div className="animate-fade-in-up delay-200">
            <Link to="/packages" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'inline-block', textDecoration: 'none' }}>Explore Destinations</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <span className="section-subtitle animate-fade-in-up">Top Choices</span>
        <h2 className="section-title animate-fade-in-up delay-100">Popular Destinations</h2>
        <div className="grid-3">
          {popularDestinations.map((dest, idx) => (
            <div className={`dest-card animate-fade-in-up delay-${(idx + 1) * 100}`} key={idx}>
              <div className="dest-img-container">
                <img src={dest.image} alt={dest.title} className="dest-img" />
                <span className="dest-badge">{dest.badge}</span>
              </div>
              <div className="dest-info">
                <h3 className="dest-title">{dest.title}</h3>
                <div className="dest-duration"><Clock /> {dest.duration}</div>
                <p className="dest-desc">{dest.desc}</p>
                <div className="dest-footer" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <Link to="/packages" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem', textDecoration: 'none' }}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ background: 'var(--white)', borderRadius: '24px', padding: '4rem', marginTop: '2rem' }}>
        <span className="section-subtitle animate-fade-in-up">Sustainable Tourism</span>
        <h2 className="section-title animate-fade-in-up delay-100">Eco Travel Packages</h2>
        <div className="grid-3">
          {ecoPackages.map((dest, idx) => (
            <div className={`dest-card animate-fade-in-up delay-${(idx + 1) * 100}`} key={idx}>
              <div className="dest-img-container">
                <img src={dest.image} alt={dest.title} className="dest-img" />
                <span className="dest-badge" style={{ background: 'var(--sky-turquoise)', color: 'white' }}>{dest.badge}</span>
              </div>
              <div className="dest-info">
                <h3 className="dest-title">{dest.title}</h3>
                <div className="dest-duration"><Clock /> {dest.duration}</div>
                <p className="dest-desc">{dest.desc}</p>
                <div className="dest-footer" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <Link to="/packages" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem', textDecoration: 'none' }}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <span className="section-subtitle animate-fade-in-up">Our Promise</span>
        <h2 className="section-title animate-fade-in-up delay-100">Why Choose Us?</h2>
        <div className="grid-3">
          <div className="feature-card animate-fade-in-up delay-200">
            <div className="feature-icon"><Leaf /></div>
            <h3 className="feature-title">Eco-Friendly Travel</h3>
            <p className="feature-desc">Carefully selected stays and experiences that respect nature and local communities.</p>
          </div>
          <div className="feature-card animate-fade-in-up delay-300">
            <div className="feature-icon"><Heart /></div>
            <h3 className="feature-title">Personalized Planning</h3>
            <p className="feature-desc">Tailored itineraries designed around your preferences, budget, and travel style.</p>
          </div>
          <div className="feature-card animate-fade-in-up delay-400">
            <div className="feature-icon"><Shield /></div>
            <h3 className="feature-title">Trusted Guidance</h3>
            <p className="feature-desc">Hassle-free bookings and dedicated support from start to finish. You enjoy the journey.</p>
          </div>
        </div>
      </section>


      <section className="cta-section animate-fade-in-up">
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
    { title: "Group Tours", icon: <Users />, desc: "Travel with like-minded explorers on our carefully curated group adventures." },
    { title: "Customized Domestic Tour Itineraries", icon: <MapPin />, desc: "Tailor-made journeys across incredible India matching your exact preferences." },
    { title: "Customized International Tour Itineraries", icon: <Shield />, desc: "Seamless global travel experiences designed exclusively for you." },
    { title: "Hotel Bookings", icon: <Heart />, desc: "Premium, comfortable, and eco-friendly stays verified by our team." },
    { title: "Transportation", icon: <Clock />, desc: "Safe and reliable transfers, cabs, and coaches for a smooth ride." },
    { title: "Sightseeing", icon: <SearchIcon />, desc: "Immersive local experiences, guided tours, and hidden gems." },
    { title: "Flight Tickets", icon: <Leaf />, desc: "Hassle-free flight bookings with the best routes and rates." },
    { title: "Visa Arrangements", icon: <Calendar />, desc: "Expert assistance for swift and smooth visa processing." }
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
              padding: '2.5rem 2rem',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--light-gray)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--nature-green)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--light-gray)'; }}
            >
              <div style={{ 
                width: '60px', height: '60px', 
                borderRadius: '16px', 
                background: 'rgba(139, 195, 74, 0.1)', 
                color: 'var(--nature-green)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-forest-green)', fontWeight: '700', lineHeight: '1.4' }}>{srv.title}</h3>
              <p style={{ color: 'var(--slate-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Packages() {
  const [activeTab, setActiveTab] = React.useState('India');

  const indiaPackages = [
    { title: 'Andaman – Havelock and Neil Island', duration: '5 Nights and 6 Days' },
    { title: 'Chikmagalur', duration: '2 Nights and 3 Days' },
    { title: 'Costal Karnataka – Mangalore – Udupi – Gokarna', duration: '5 Nights and 6 Days' },
    { title: 'Golden Triangle Tour – Delhi – Agra – Jaipur', duration: '5 Nights and 6 Days' },
    { title: 'Goa', duration: '3 Nights and 4 Days' },
    { title: 'Gujarat – Rann Utsav', duration: '4 Nights and 5 Days' },
    { title: 'Himachal – Manali, Shimla, Dalhousie, Dharamshala', duration: 'Varying' },
    { title: 'Kashmir', duration: '4 Nights and 5 Days' },
    { title: 'Kerala – Kochi - Munnar – Allepey – Thekkady', duration: '4 Nights and 5 Days' },
    { title: 'Kodaikanal', duration: '3 Nights and 4 Days' },
    { title: 'Meghalaya', duration: '4 Nights and 5 Days' },
    { title: 'Bangalore - Mysore - Coorg', duration: '4 Nights and 5 Days' },
    { title: 'Ooty', duration: '2 Nights and 3 Days' },
    { title: 'Rajasthan - Jaipur – Jodhpur – Jaisalmar', duration: '7 Nights and 8 Days' },
    { title: 'Sikkim and Darjeeling', duration: '5 Nights and 6 Days' },
    { title: 'Uttrakhand - Mussoorie and Nainital', duration: '5 Nights and 6 Days' },
    { title: 'Varanasi – Ayodhya', duration: '4 Nights and 5 Days' }
  ];

  const internationalPackages = [
    { title: 'Australia', duration: '6 Nights and 7 Days' },
    { title: 'Bali – Indonesia - Nusa Penida – Gili Islands', duration: '7 Nights and 8 Days' },
    { title: 'China', duration: '7 Nights and 8 Days' },
    { title: 'Dubai – Abu Dhabi', duration: '5 Nights and 6 Days' },
    { title: 'Hong Kong', duration: '5 Nights and 6 Days' },
    { title: 'Japan', duration: '7 Nights and 8 Days' },
    { title: 'London', duration: '4 Nights and 5 Days' },
    { title: 'Malaysia', duration: '2 Nights and 3 Days' },
    { title: 'Maldives', duration: '4 Nights and 5 Days' },
    { title: 'Phu Quoc', duration: '3 Nights and 4 Days' },
    { title: 'Singapore', duration: '4 Nights and 5 Days' },
    { title: 'Sri Lanka', duration: '4 Nights and 5 Days' },
    { title: 'Switzerland', duration: '6 Nights and 7 Days' },
    { title: 'Thailand – Bangkok – Pattaya – Phuket – Krabi', duration: '6 Nights and 7 Days' },
    { title: 'Thailand – Chiang Mai', duration: '3 Nights and 4 Days' },
    { title: 'Turkey', duration: '5 Nights and 6 Days' },
    { title: 'Vietnam', duration: '7 Nights and 8 Days' }
  ];

  const wildlifePackages = [
    { title: 'Bandipur National Park', duration: 'Wildlife Safari' },
    { title: 'Gir Forest National Park', duration: 'Wildlife Safari' },
    { title: 'Jim Corbett National Park', duration: 'Wildlife Safari' },
    { title: 'Kabini National Park', duration: 'Wildlife Safari' },
    { title: 'Kaziranga National Park', duration: 'Wildlife Safari' },
    { title: 'Manas National Park', duration: 'Wildlife Safari' },
    { title: 'Mudumalai Tiger Reserve', duration: 'Wildlife Safari' },
    { title: 'Parambikulam Tiger Reserve', duration: 'Wildlife Safari' },
    { title: 'Ranthambore National Park', duration: 'Wildlife Safari' },
    { title: 'Tadoba-Andhari Tiger Reserve', duration: 'Wildlife Safari' },
    { title: 'Thekkady – Gavi Wildlife Safari', duration: 'Wildlife Safari' }
  ];

  const getImageForPackage = (title) => {
    const t = title.toLowerCase();

    // 1. Beaches & Islands
    if (t.includes('andaman') || t.includes('goa') || t.includes('maldives') || t.includes('bali') || t.includes('phu quoc') || t.includes('sri lanka') || t.includes('australia')) {
      return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600';
    }
    
    // 2. Snow & Mountains
    if (t.includes('switzerland') || t.includes('himachal') || t.includes('kashmir') || t.includes('sikkim') || t.includes('uttrakhand')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/800px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg';
    }

    // 3. Wildlife & Safaris
    if (t.includes('national park') || t.includes('tiger') || t.includes('safari') || t.includes('corbett') || t.includes('kabini') || t.includes('gir') || t.includes('bandipur')) {
      return 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=600'; 
    }

    // 4. Lush Green / Hill Stations
    if (t.includes('kerala') || t.includes('chikmagalur') || t.includes('meghalaya') || t.includes('coorg') || t.includes('ooty') || t.includes('kodaikanal') || t.includes('vietnam') || t.includes('thailand') || t.includes('karnataka')) {
      return 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600';
    }

    // 5. City, Culture & Heritage
    if (t.includes('dubai') || t.includes('singapore') || t.includes('london') || t.includes('hong kong') || t.includes('japan') || t.includes('china') || t.includes('malaysia') || t.includes('turkey')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Marina_Bay_Sands%2C_Singapore_-_Dec_2009.jpg/800px-Marina_Bay_Sands%2C_Singapore_-_Dec_2009.jpg';
    }

    // 6. Desert & Historic India
    if (t.includes('rajasthan') || t.includes('gujarat') || t.includes('golden triangle')) {
      return 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600';
    }

    // 7. Spiritual / River
    if (t.includes('varanasi') || t.includes('ayodhya')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg';
    }

    // Default beautiful travel placeholder for anything else
    return 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600';
  };

  const getActivePackages = () => {
    let pkgs = [];
    if (activeTab === 'India') pkgs = indiaPackages;
    else if (activeTab === 'International') pkgs = internationalPackages;
    else pkgs = wildlifePackages;

    return pkgs.map((p) => ({ ...p, image: getImageForPackage(p.title) }));
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
      <PageHeader title="Tour Packages" subtitle="Thoughtfully planned itineraries for everyone." image="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=1600" />
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" alt="Travel Journey" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
            <div style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', background: 'var(--white)', padding: '1.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)', maxWidth: '280px' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--deep-forest-green)', fontWeight: '600', marginBottom: '0.5rem' }}>"We create experiences that inspire."</p>
              <span style={{ color: 'var(--slate-gray)', fontSize: '0.9rem' }}>— Jeevapriya MS, Founder</span>
            </div>
          </div>
          <div style={{ paddingLeft: '1rem' }}>
            <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1rem' }}>Our Story</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '3rem' }}>Journey Within</h2>
            <div style={{ color: 'var(--slate-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>At <strong>NewV Tours and Travels</strong>, we believe that travel is more than just destinations—it’s a journey within, where you leave behind the ordinary, embrace the experience, and return with a new perspective on life.</p>
              <p style={{ marginBottom: '1.5rem' }}>Founded by <strong>Jeevapriya MS</strong>, with a passion for exploration and a commitment to exceptional service, we specialize in crafting seamless travel experiences that are tailored to your preferences, budget, and travel style.</p>
              <p style={{ marginBottom: '1.5rem' }}>Whether it's a family trip, a romantic getaway, a wildlife adventure, a group tour, or an international vacation, we take care of every detail so you can focus on enjoying the journey. Our goal is simple: to make travel easy, meaningful, and unforgettable.</p>
              <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}>100+</h4>
                  <p style={{ color: 'var(--nature-green)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Destinations</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}>24/7</h4>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Office Details */}
          <div style={{ background: 'var(--charcoal)', color: 'var(--white)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--white)' }}>Get in Touch</h2>
            <p style={{ color: 'var(--light-gray)', marginBottom: '3rem', lineHeight: '1.6' }}>Whether you have a question about our packages, need help with planning, or just want to say hello, our team is ready to answer all your questions.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--nature-green)' }}><MapPin /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)' }}>Our Office</h4>
                  <p style={{ color: 'var(--light-gray)', lineHeight: '1.5' }}>31A, Chelliamman Koil St,<br/>Chelliamman Nagar, Athipet, Ambattur,<br/>Chennai, Tamil Nadu, India - 600058</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--nature-green)' }}><Clock /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem', color: 'var(--white)' }}>Phone</h4>
                  <p style={{ color: 'var(--light-gray)' }}>+91 9840636358</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--nature-green)' }}><Heart /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem', color: 'var(--white)' }}>Email</h4>
                  <p style={{ color: 'var(--light-gray)' }}>newvtoursandtravels@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--light-gray)' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--deep-forest-green)', fontSize: '1.5rem' }}>Plan Your Trip</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', background: '#f8fafc', fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', background: '#f8fafc', fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Travel Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', background: '#f8fafc', fontSize: '1rem', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--slate-gray)' }}>Destination</label>
                  <input required type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. Kerala, Bali" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--light-gray)', background: '#f8fafc', fontSize: '1rem', boxSizing: 'border-box' }} />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.1rem', width: '100%', borderRadius: '8px' }}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
