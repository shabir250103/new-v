import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, MapPin, Calendar, Users, SearchIcon, Clock, Leaf, Shield, Heart, PhoneIcon, InstagramIcon, FacebookIcon, MailIcon } from './components';
import { reviewImages } from './reviewImages';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcgxoukscejpngmrnjjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZ3hvdWtzY2VqcG5nbXJuampsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNzEyODUsImV4cCI6MjEwMzc0NzI4NX0.xSMAbBTTb1QWpuScYeGJ16kdMgQ-k4Yb5xkd5AE4RV4';
const supabase = createClient(supabaseUrl, supabaseKey);

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
    { title: "India", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAT3giq7Afbau18i9ADt-lLKyFephPrv3vkIM5evsm7A&s=10", link: "/packages", tab: "India" },
    { title: "International", image: "/images/category_international.png", link: "/packages", tab: "International" },
    { title: "Wildlife Adventures in India", image: "/images/category_wildlife.png", link: "/packages", tab: "Wildlife" }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title hero-title-inline animate-fade-in-up">Discover the world.<br /><span>Discover the new you.</span></h1>
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
            <div className={`dest-card category-card animate-fade-in-up delay-${(idx + 1) * 100}`} key={idx} style={{ padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={cat.image} alt={cat.title} className="dest-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)', zIndex: 1 }}></div>
              <div className="dest-info" style={{ padding: '2rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <h3 className="dest-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--white)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{cat.title}</h3>
                <Link to={cat.link} state={{ activeTab: cat.tab }} className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', background: 'var(--nature-green)', color: 'white' }}>View Tour Packages</Link>
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
            { text: "Budget-friendly Domestic and International tour packages", icon: <MapPin /> },
            { text: "Trusted travel guidance and support", icon: <Shield /> },
            { text: "Carefully selected stays and experiences", icon: <Heart /> },
            { text: "Hassle-free bookings and arrangements", icon: <Calendar /> },
            { text: "Dedicated service from start to finish", icon: <Clock /> }
          ].map((point, idx) => (
            <div
              key={idx}
              className={`why-feature-box animate-fade-in-up delay-${(idx % 3 + 1) * 100}`}
              style={{
                background: 'skyblue',
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(135, 206, 235, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(135, 206, 235, 0.5)';
                e.currentTarget.style.background = '#00BFFF'; // Deep sky blue on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(135, 206, 235, 0.3)';
                e.currentTarget.style.background = 'skyblue';
              }}
            >
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', lineHeight: '1.6', fontWeight: '700', margin: 0 }}>{point.text}</h3>
            </div>
          ))}
        </div>
      </section>


      <section className="cta-section animate-fade-in-up" style={{ margin: '5rem auto' }}>
        <h2 className="cta-title">Ready for your next adventure?</h2>
        <p className="cta-desc"> Let our experts craft the perfect personalized itinerary for you.</p>
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
    { title: "Customized International Tour Itineraries", image: "/images/international_tours_new.png", desc: "Seamless global travel experiences designed exclusively for you." },
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
        <div className="services-grid">
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
    { title: 'Andaman – Havelock and Neil Island', duration: '5 Nights and 6 Days', image: '/images/Pictures/Andaman.jfif' },
    { title: 'Chikmagalur', duration: '2 Nights and 3 Days', image: '/images/Pictures/Chikmagalur.jpg' },
    { title: 'Costal Karnataka – Mangalore – Udupi – Gokarna', duration: '5 Nights and 6 Days', image: '/images/costal-karnataka.jpg' },
    { title: 'Golden Triangle Tour – Delhi – Agra – Jaipur', duration: '5 Nights and 6 Days', image: '/images/Pictures/Delhi.jpg' },
    { title: 'Goa', duration: '3 Nights and 4 Days', image: 'https://titosgoa.com/_next/image?url=%2Fapi%2Fuploads%2F1768282500728-why-tourists-visit-goa.png&w=1200&q=75' },
    { title: 'Gujarat – Rann Utsav', duration: '4 Nights and 5 Days', image: '/images/rann-utsav.jpg' },
    { title: 'Himachal - Manali, Shimla, Dalhousie, Dharamshala', duration: '8 Nights and 9 Days', image: 'https://assets.cntraveller.in/photos/66ab6453fe4fdad0450b3402/16:9/w_1920,c_limit/GettyImages-1580694292.jpg' },
    { title: 'Kashmir', duration: '4 Nights and 5 Days', image: '/images/kashmir.jpg' },
    { title: 'Kerala - Kochi - Munnar - Allepey - Thekkady', duration: '4 Nights and 5 Days', image: '/images/kerala_houseboat.png' },
    { title: 'Kodaikanal', duration: '3 Nights and 4 Days', image: '/images/kodaikanal.jpg' },
    { title: 'Meghalaya', duration: '4 Nights and 5 Days', image: '/images/Pictures/Meghalaya Nongriat.jpg' },
    { title: 'Bangalore - Mysore - Coorg', duration: '4 Nights and 5 Days', image: '/images/Pictures/Mysuru-Palace.jpeg' },
    { title: 'Ooty', duration: '2 Nights and 3 Days', image: '/images/ooty.jpg' },
    { title: 'Rajasthan - Jaipur – Jodhpur – Jaisalmar', duration: '7 Nights and 8 Days', image: '/images/rajasthan.jpg' },
    { title: 'Sikkim and Darjeeling', duration: '5 Nights and 6 Days', image: '/images/Pictures/Sikkim.jpg' },
    { title: 'Uttrakhand - Mussoorie and Nainital', duration: '5 Nights and 6 Days', image: '/images/Pictures/Uttrakhand.jfif' },
    { title: 'Varanasi – Ayodhya', duration: '4 Nights and 5 Days', image: '/images/varanasi.jpg' }
  ];

  const internationalPackages = [
    { title: 'Australia', duration: '6 Nights and 7 Days', image: '/images/Pictures/Australia.jpg' },
    { title: 'Bali – Indonesia - Nusa Penida – Gili Islands', duration: '7 Nights and 8 Days', image: '/images/Pictures/Bali.jpg' },
    { title: 'China', duration: '7 Nights and 8 Days', image: '/images/china.jpg' },
    { title: 'Dubai – Abu Dhabi', duration: '5 Nights and 6 Days', image: '/images/dubai.jpg' },
    { title: 'Hong Kong', duration: '5 Nights and 6 Days', image: '/images/Pictures/hong-kong.jpg' },
    { title: 'Japan', duration: '7 Nights and 8 Days', image: '/images/japan.jpg' },
    { title: 'London', duration: '4 Nights and 5 Days', image: '/images/london.jpg' },
    { title: 'Malaysia', duration: '2 Nights and 3 Days', image: '/images/malaysia_batu_caves.png' },
    { title: 'Maldives', duration: '4 Nights and 5 Days', image: '/images/maldives.jpg' },
    { title: 'Phu Quoc', duration: '3 Nights and 4 Days', image: '/images/Pictures/Phu Quoc.jpg' },
    { title: 'Singapore', duration: '4 Nights and 5 Days', image: '/images/Pictures/Singapore.jpg' },
    { title: 'Sri Lanka', duration: '4 Nights and 5 Days', image: '/images/Pictures/Sri Lanka.PNG' },
    { title: 'Switzerland', duration: '6 Nights and 7 Days', image: '/images/Pictures/Switzerland.jpg' },
    { title: 'Thailand – Bangkok – Pattaya – Phuket – Krabi', duration: '6 Nights and 7 Days', image: '/images/Pictures/Thailand.jpg' },
    { title: 'Thailand – Chiang Mai', duration: '3 Nights and 4 Days', image: '/images/Pictures/Chiang Mai.jpg' },
    { title: 'Turkey', duration: '5 Nights and 6 Days', image: '/images/Pictures/Turkey.jpg' },
    { title: 'Vietnam', duration: '7 Nights and 8 Days', image: '/images/Pictures/Vietnam.jpg' }
  ];

  const wildlifePackages = [
    { title: 'Bandipur National Park', duration: 'Wildlife Safari', image: '/images/bandipur-national-park.jpg' },
    { title: 'Gir Forest National Park', duration: 'Wildlife Safari', image: '/images/Pictures/Gir forest.jpg' },
    { title: 'Jim Corbett National Park', duration: 'Wildlife Safari', image: '/images/Pictures/Jim Corbett National Park.png' },
    { title: 'Kabini National Park', duration: 'Wildlife Safari', image: '/images/Pictures/Kabini.jfif' },
    { title: 'Kaziranga National Park', duration: 'Wildlife Safari', image: '/images/kaziranga_rhino.png' },
    { title: 'Manas National Park', duration: 'Wildlife Safari', image: '/images/Pictures/Manas.jpg' },
    { title: 'Mudumalai Tiger Reserve', duration: 'Wildlife Safari', image: '/images/mudhumalai_elephant.png' },
    { title: 'Parambikulam Tiger Reserve', duration: 'Wildlife Safari', image: '/images/parambikulam_deer.png' },
    { title: 'Ranthambore National Park', duration: 'Wildlife Safari', image: '/images/ranthambore_tiger.png' },
    { title: 'Tadoba-Andhari Tiger Reserve', duration: 'Wildlife Safari', image: '/images/tadoba_tiger.png' },
    { title: 'Thekkady – Gavi Wildlife Safari', duration: 'Wildlife Safari', image: '/images/Pictures/Gavi Forest.jpg' }
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
      <PageHeader title="Tour Packages" subtitle="Thoughtfully planned itineraries for everyone." image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000" />
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
            <div className="dest-card package-card" key={idx} style={{ padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '20px' }}>
              <img src={pkg.image} alt={pkg.title} className="dest-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)', zIndex: 1 }}></div>
              <div style={{ padding: '1.5rem', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--white)', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>{pkg.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fresh-lime)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                  <Clock /> {pkg.duration}
                </div>
                <a href={`https://wa.me/919840636358?text=Hello%20NewV%20Tours%20and%20Travels!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '1rem', textAlign: 'center', display: 'inline-block', boxSizing: 'border-box', textDecoration: 'none', background: 'var(--nature-green)', border: 'none', color: 'var(--white)' }}>Enquire Now</a>
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
      <PageHeader title="About Us" subtitle="Discover the world. Discover the new you." image="/images/about_bg.png" />
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
          <div className="about-text-col" style={{ paddingLeft: '1rem' }}>
            <span className="section-subtitle animate-fade-in-up delay-100" style={{ textAlign: 'left', marginBottom: '1rem' }}>Our Story</span>
            <h2 className="section-title animate-fade-in-up delay-200" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '3rem' }}>Travel to find your new self.</h2>
            <div className="animate-fade-in-up delay-300" style={{ color: 'var(--slate-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>At <strong>NewV Tours and Travels</strong>, we believe that travel is more than just destinations—it’s a journey within, where you leave behind the ordinary, embrace the experience, and return with a new perspective on life.</p>
              <p style={{ marginBottom: '1.5rem' }}>Founded by <strong>Jeevapriya MS</strong>, with a passion for exploration and a commitment to exceptional service, we specialize in crafting seamless travel experiences that are tailored to your preferences, budget, and travel style.</p>
              <p style={{ marginBottom: '1.5rem' }}>Whether it's a family trip, a romantic getaway, a wildlife adventure, a group tour, or an international vacation, we take care of every detail so you can focus on enjoying the journey.</p>
              <p style={{ marginBottom: '1.5rem' }}>Our goal is simple: to make travel easy, meaningful, and unforgettable. From planning and bookings to on-trip support, we ensure that every journey is smooth, comfortable, and filled with memorable moments.</p>
              <p style={{ marginBottom: '1.5rem' }}>At <strong>NewV Tours and Travels</strong>, we don't just plan trips—we create experiences that inspire, connect, and stay with you long after you return home.</p>
              <div className="about-stats-row animate-fade-in-up delay-400">
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
    const text = `Hello NewV Tours and Travels! I would like to enquire about a trip.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Travel Date:* ${formData.date}%0A*Destination:* ${formData.destination}`;
    window.open(`https://wa.me/919840636358?text=${text}`, '_blank', 'noopener,noreferrer');
    setFormData({ name: '', phone: '', date: '', destination: '' });
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We're here to help you plan your dream vacation." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" />
      <section className="container" style={{ minHeight: '60vh', padding: '6rem 2rem' }}>
        <div className="contact-grid">

          {/* Office Details */}
          <div className="contact-details-panel animate-fade-in-up" style={{ background: 'var(--charcoal)', color: 'var(--white)', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--nature-green)', opacity: '0.2', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>

            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--white)', fontWeight: '700' }}>Get in Touch</h2>
            <p style={{ color: 'var(--light-gray)', marginBottom: '3rem', lineHeight: '1.8', fontSize: '1.1rem' }}>Whether you have a question about our packages, need help with planning, or just want to say hello, our team is ready to answer all your questions.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="contact-info-card animate-fade-in-up delay-100">
                <div className="contact-icon-wrapper"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)', fontSize: '1.1rem' }}>Address</h4>
                  <p style={{ color: 'var(--light-gray)', lineHeight: '1.6' }}>31A, Chelliamman Koil Street,<br />Chelliamman Nagar, Athipet, Ambattur,<br />Chennai, Tamil Nadu,<br />India - 600058</p>
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
                <div className="contact-icon-wrapper"><MailIcon size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--white)', fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ color: 'var(--light-gray)', fontSize: '1.1rem' }}>newvtoursandtravels@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel animate-fade-in-up delay-200" style={{ background: 'var(--white)', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '2.5rem', color: 'var(--deep-forest-green)', fontSize: '2rem', fontWeight: '700' }}>Plan Your Trip</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="animate-fade-in-up delay-300">
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="promax-input" />
              </div>
              <div className="animate-fade-in-up delay-400">
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '0.95rem' }}>Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="promax-input" />
              </div>
              <div className="contact-form-row animate-fade-in-up delay-500">
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

const ReviewCard = ({ review, idx }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const text = review.text || '';
  const isLong = text.length > 150;

  return (
    <div style={{
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'; }}
    >
      {review.image_base64 && (
        <img src={`data:image/jpeg;base64,${review.image_base64}`} alt={`Client Review ${idx}`} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} loading="lazy" />
      )}
      <div style={{ padding: '24px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.client_name || 'Happy Traveler')}&background=random`} alt="Customer" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ lineHeight: '1.3' }}>
              <strong style={{ color: '#333', fontSize: '1.1rem' }}>{review.client_name || 'Happy Traveler'}</strong><br />
              <small style={{ color: '#777' }}>Google Review</small>
            </div>
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
        </div>

        <div style={{ color: '#fbbc04', fontSize: '24px', margin: '18px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>{'★'.repeat(Math.floor(review.rating || 5))}{'☆'.repeat(5 - Math.floor(review.rating || 5))}</span>
          <span style={{ color: '#555', fontSize: '16px', fontWeight: '500' }}>{Number(review.rating || 5).toFixed(1)}</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            maxHeight: isExpanded ? '120px' : 'none',
            overflowY: isExpanded ? 'auto' : 'visible',
            paddingRight: isExpanded ? '8px' : '0'
          }}>
            <p style={{ color: '#555', lineHeight: '1.6', margin: 0, fontSize: '1rem' }}>
              {isExpanded || !isLong ? text : `${text.slice(0, 150)}...`}
            </p>
          </div>
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ color: 'var(--nature-green)', background: 'none', border: 'none', padding: 0, marginTop: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', alignSelf: 'flex-start' }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export function Reviews() {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from('client_reviews')
        .select('*')
        .order('id', { ascending: false });

      if (data) {
        setReviews(data);
      }
    }
    fetchReviews();
  }, []);

  return (
    <>
      <PageHeader title="Client Reviews" subtitle="Real experiences from our happy travellers." image="/images/reviews_bg.png" />
      <section className="container" style={{ minHeight: '60vh', padding: '6rem 0' }}>
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Happy Travellers</h2>

        <div className="reviews-grid animate-fade-in-up delay-200">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} idx={idx} />
          ))}
        </div>
      </section>
    </>
  );
}

export function Gallery() {
  const [reviews, setReviews] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    async function fetchReviews() {
      const { data } = await supabase
        .from('client_reviews')
        .select('*')
        .order('id', { ascending: false });

      if (data) {
        setReviews(data);
      }
    }
    fetchReviews();
  }, []);

  const allImages = React.useMemo(() => [
    ...reviews.filter(r => r.image_base64).map(r => `data:image/jpeg;base64,${r.image_base64}`),
    ...reviewImages.map(imgName => `/images/clientreviews/${imgName}`)
  ], [reviews]);

  React.useEffect(() => {
    if (allImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [allImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  return (
    <>
      <PageHeader title="Photo Gallery" subtitle="Memories captured by our travellers." image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1600" />
      <section style={{ minHeight: '60vh', padding: '6rem 0', overflow: 'hidden', width: '100%' }}>
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>Travel Highlights</h2>

        <div className="animate-fade-in-up delay-200" style={{ padding: '0', maxWidth: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
          {allImages.length > 0 ? (
            <div className="gallery-carousel">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="gallery-nav-btn gallery-nav-prev"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="gallery-nav-btn gallery-nav-next"
              >
                &#10095;
              </button>

              {/* Coverflow Track */}
              {allImages.map((src, idx) => {
                let offset = idx - currentIndex;
                const half = Math.floor(allImages.length / 2);

                if (allImages.length > 3) {
                  if (offset > half) offset -= allImages.length;
                  else if (offset < -half) offset += allImages.length;
                }

                const isCenter = offset === 0;
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 2;

                const scale = isCenter ? 1 : Math.max(1 - (absOffset * 0.25), 0.4);
                const translateX = offset * 65;
                const zIndex = 100 - absOffset;
                const opacity = isVisible ? (isCenter ? 1 : Math.max(1 - (absOffset * 0.4), 0.2)) : 0;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isCenter && isVisible) setCurrentIndex(idx);
                    }}
                    style={{
                      position: 'absolute',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                      visibility: isVisible ? 'visible' : 'hidden',
                      pointerEvents: isVisible ? 'auto' : 'none',
                      cursor: isCenter ? 'default' : 'pointer',
                      height: '100%',
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery highlight ${idx + 1}`}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '85vw',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '24px',
                        boxShadow: isCenter ? '0 25px 50px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.15)',
                        transition: 'box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                      }}
                      loading="lazy"
                    />
                  </div>
                )
              })}

              {/* Indicators */}
              <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10, flexWrap: 'wrap', justifyContent: 'center', width: '90%' }}>
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: currentIndex === idx ? '24px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      background: currentIndex === idx ? 'var(--nature-green)' : 'var(--light-gray)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--slate-gray)' }}>Loading gallery...</p>
          )}
        </div>
      </section>
    </>
  );
}
