import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Calendar, MapPin, Clock, Star, Mail, ChevronRight,
  Menu, X, Heart, Stethoscope, Baby, Scissors, Activity,
  Microscope, Syringe, Ambulance, Pill, Database, AlertCircle,
  MessageCircle, ChevronLeft, CheckCircle, Shield, Award, Users, Building2
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  { id: 1, name: 'General Medicine', icon: Stethoscope, description: 'Comprehensive primary care for all ages with preventive health checkups.', department: 'Medicine', color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Vascular Surgery', icon: Activity, description: 'Advanced treatment for blood vessel conditions using minimally invasive techniques.', department: 'Surgery', color: 'from-rose-500 to-pink-500' },
  { id: 3, name: 'Gynecology', icon: Baby, description: "Expert care for women's reproductive health, pregnancy, and childbirth.", department: "Women's Health", color: 'from-purple-500 to-violet-500' },
  { id: 4, name: 'General Surgery', icon: Scissors, description: 'Minimally invasive surgical procedures with advanced laparoscopic equipment.', department: 'Surgery', color: 'from-amber-500 to-orange-500' },
  { id: 5, name: 'Cardiology', icon: Heart, description: 'Complete heart care including diagnostics, interventions, and rehabilitation.', department: 'Cardiac Sciences', color: 'from-red-500 to-rose-500' },
  { id: 6, name: 'Orthopedics', icon: Activity, description: 'Bone, joint, and muscle treatments including joint replacement surgery.', department: 'Orthopedics', color: 'from-green-500 to-emerald-500' },
  { id: 7, name: 'Neurology', icon: Microscope, description: 'Advanced care for brain, spine, and nervous system disorders.', department: 'Neurosciences', color: 'from-indigo-500 to-blue-500' },
  { id: 8, name: 'Pediatrics', icon: Baby, description: 'Specialized healthcare for infants, children, and adolescents.', department: 'Pediatrics', color: 'from-teal-500 to-cyan-500' },
];

const doctors = [
  { id: 1, name: 'Dr. Priya Sharma', specialization: 'Interventional Cardiologist', experience: 12, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80', available: true, education: 'MBBS, MD, DM (Cardiology)' },
  { id: 2, name: 'Dr. Rajesh Kumar', specialization: 'Vascular & Endovascular Surgeon', experience: 15, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80', available: true, education: 'MBBS, MS, MCh (Vascular Surgery)' },
  { id: 3, name: 'Dr. Anjali Mehta', specialization: 'Obstetrician & Gynecologist', experience: 10, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80', available: false, education: 'MBBS, MD, DNB (OBG)' },
  { id: 4, name: 'Dr. Sanjay Reddy', specialization: 'General & Laparoscopic Surgeon', experience: 18, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80', available: true, education: 'MBBS, MS, FMAS' },
  { id: 5, name: 'Dr. Meera Krishnan', specialization: 'Senior Cardiologist', experience: 20, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&q=80', available: true, education: 'MBBS, MD, DM (Cardiology)' },
  { id: 6, name: 'Dr. Vikram Singh', specialization: 'Orthopedic Surgeon', experience: 14, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80', available: true, education: 'MBBS, MS (Ortho), DNB' },
];

const testimonials = [
  { id: 1, name: 'Ramesh Patel', rating: 5, text: "Excellent care and compassionate staff. The doctors took time to explain everything. My father's heart surgery was successful beyond expectations.", date: '2024-02-15', location: 'Chennai' },
  { id: 2, name: 'Sneha Gupta', rating: 5, text: 'State-of-the-art facilities and very professional service. The maternity ward was exceptional with caring nurses and modern equipment. Highly recommended!', date: '2024-02-10', location: 'Bangalore' },
  { id: 3, name: 'Amit Singh', rating: 4, text: 'Good experience overall. The emergency response was quick and efficient. The doctors are very knowledgeable and treatment was effective.', date: '2024-02-05', location: 'Hyderabad' },
  { id: 4, name: 'Lakshmi Nair', rating: 5, text: "Best hospital in the city! The vascular surgery department is top-notch. Dr. Rajesh Kumar performed my husband's surgery with great care.", date: '2024-01-28', location: 'Chennai' },
];

const facilities = [
  { name: 'Intensive Care Unit', icon: Database, description: '24/7 critical care monitoring with advanced life support systems', specs: '40+ Beds' },
  { name: 'Modern Laboratory', icon: Microscope, description: 'Advanced diagnostic equipment for accurate test results', specs: 'NABL Accredited' },
  { name: '24/7 Pharmacy', icon: Pill, description: 'Full-service pharmacy with genuine medicines', specs: 'Free Home Delivery' },
  { name: 'Emergency Services', icon: Ambulance, description: 'Rapid response team with advanced life support ambulances', specs: 'Response: 10 mins' },
  { name: 'Cath Lab', icon: Heart, description: 'Advanced cardiac catheterization laboratory', specs: '24/7 Available' },
  { name: 'Operation Theatres', icon: Scissors, description: 'Modular OTs with laminar airflow', specs: '8 Modular OTs' },
];

const blogPosts = [
  { id: 1, title: 'Understanding Heart Health: Prevention Tips', excerpt: 'Learn about lifestyle changes that can significantly reduce your risk of heart disease and improve longevity.', date: '2024-02-20', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80', category: 'Cardiology' },
  { id: 2, title: 'Advances in Minimally Invasive Surgery', excerpt: 'Discover how laparoscopic techniques are reducing recovery time and improving patient outcomes dramatically.', date: '2024-02-15', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&q=80', category: 'Surgery' },
  { id: 3, title: "Women's Health: Annual Checkups Matter", excerpt: 'Regular gynecological screenings can detect issues early. Here is what you need to know about your health.', date: '2024-02-10', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop&q=80', category: "Women's Health" },
];

const stats = [
  { value: '18+', label: 'Years of Excellence', icon: Award },
  { value: '500K+', label: 'Patients Served', icon: Users },
  { value: '200+', label: 'Expert Doctors', icon: Stethoscope },
  { value: '98%', label: 'Patient Satisfaction', icon: Heart },
];

/* ─────────────────────────────────────────────
   SCROLL ANIMATION HOOK
───────────────────────────────────────────── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', s);
    return () => window.removeEventListener('scroll', s);
  }, []);

  const links = ['Home', 'About', 'Services', 'Doctors', 'Appointment', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-7 sm:h-8 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className={`relative font-medium text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>
            <Phone className="w-4 h-4" /> Emergency
          </a>
          <a href="#appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-200">
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'} bg-white border-t border-gray-100 shadow-xl`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors block py-1">{l}</a>
            </li>
          ))}
          <li><a href="tel:+919876543210" className="flex items-center gap-2 text-emerald-600 font-semibold"><Phone className="w-4 h-4" /> Call Emergency</a></li>
          <li><a href="#appointment" onClick={() => setOpen(false)} className="block text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2.5 rounded-full font-semibold">Book Appointment</a></li>
        </ul>
      </div>
    </header>
  );
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&q=80" alt="Hospital" className="w-full h-full object-cover scale-105" style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-teal-900/75" />
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" /> NABH & NABL Accredited Institution
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
            Dharani<br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Hospital</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-light">Multi-Speciality Care with Compassion & Excellence</p>
          <p className="text-base text-blue-200/80 mb-10">24/7 Emergency Services • Advanced Medical Technology • 200+ Expert Doctors</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#appointment" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-300">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" /> Book Appointment
            </a>
            <a href="tel:+919876543210" className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> +91 98765 43210
            </a>
          </div>

          {/* Emergency pill */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold animate-pulse">
              <AlertCircle className="w-4 h-4" /> Emergency: 102
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm border border-white/20">
              <Ambulance className="w-4 h-4 text-teal-300" /> Ambulance: 108
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 0.5s' }}>
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 cursor-default group">
              <Icon className="w-6 h-6 text-teal-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="text-xs text-blue-200 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-teal-400 rounded-full" style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <Reveal>
          <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">About Us</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Welcome to<br />
            <span className="text-blue-600">Dharani Hospital</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Founded in 2005, Dharani Hospital has grown to become one of the most trusted healthcare institutions in the region. With a commitment to excellence and compassion, we have served over <strong className="text-blue-600">500,000+ patients</strong> across all specialties.
          </p>

          <div className="space-y-5 mb-8">
            {[
              { icon: Heart, title: 'Our Mission', text: 'To provide accessible, high-quality healthcare with empathy and integrity, ensuring every patient receives the best possible treatment.' },
              { icon: Award, title: 'Our Vision', text: 'To be the most trusted healthcare institution in India, setting new standards in medical excellence and patient experience.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 group">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center p-4 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl text-white hover:scale-105 transition-transform duration-200 cursor-default">
                <div className="text-2xl font-black">{value}</div>
                <div className="text-xs text-blue-100 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&h=600&fit=crop&q=80" alt="Hospital Interior" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Float cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">NABH & NABL</div>
                <div className="text-xs text-gray-500">Accredited Hospital</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl shadow-xl px-5 py-4 text-white">
              <div className="font-black text-2xl">18+</div>
              <div className="text-xs text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
const Services = () => {
  const [dept, setDept] = useState('all');
  const departments = ['all', ...new Set(services.map(s => s.department))];
  const filtered = dept === 'all' ? services : services.filter(s => s.department === dept);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Medical Specialities</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Comprehensive care across all major medical disciplines with advanced technology and expert specialists</p>
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map(d => (
            <button key={d} onClick={() => setDept(d)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${dept === d ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'}`}>
              {d === 'all' ? 'All Specialities' : d}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.id} delay={i * 0.07}>
                <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-blue-100 h-full flex flex-col">
                  <div className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{svc.department}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   DOCTORS
───────────────────────────────────────────── */
const Doctors = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Experienced specialists dedicated to providing exceptional patient care</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <Reveal key={doc.id} delay={i * 0.08}>
              <div className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100 hover:border-blue-100 flex flex-col h-full">
                <div className="relative overflow-hidden h-64">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${doc.available ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                    {doc.available ? '✓ Available Today' : 'Next: Tomorrow'}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{doc.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">{doc.specialization}</p>
                  <p className="text-gray-500 text-sm mb-1">{doc.experience}+ yrs experience</p>
                  <p className="text-gray-400 text-xs mb-5">{doc.education}</p>
                  <button onClick={() => setSelected(doc)}
                    className="mt-auto w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl" onClick={e => e.stopPropagation()}
            style={{ animation: 'modalIn 0.3s ease' }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-black text-gray-900">{selected.name}</h3>
                <p className="text-blue-600 font-semibold">{selected.specialization}</p>
              </div>
              <button onClick={() => setSelected(null)} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name *" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
              <input type="tel" placeholder="Phone Number *" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
              <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-gray-600">
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 8 PM)</option>
              </select>
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3.5 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-300/40 transition-all">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ─────────────────────────────────────────────
   FACILITIES
───────────────────────────────────────────── */
const Facilities = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-400 font-bold text-sm uppercase tracking-widest">Infrastructure</span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">World-Class Facilities</h2>
        <p className="text-blue-200 max-w-xl mx-auto">State-of-the-art equipment and infrastructure for the best patient outcomes</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map(({ name, icon: Icon, description, specs }, i) => (
          <Reveal key={name} delay={i * 0.08}>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
              <p className="text-blue-200 text-sm mb-4 leading-relaxed">{description}</p>
              <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs px-3 py-1.5 rounded-full font-semibold">{specs}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const Testimonials = () => {
  const [cur, setCur] = useState(0);
  const next = () => setCur(p => (p + 1) % testimonials.length);
  const prev = () => setCur(p => (p - 1 + testimonials.length) % testimonials.length);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, []);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Patient Stories</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2">What Our Patients Say</h2>
        </Reveal>

        <Reveal delay={0.1} className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center border border-gray-100 relative overflow-hidden">
            {/* Quote decor */}
            <div className="absolute top-6 left-8 text-8xl text-blue-100 font-serif leading-none select-none">"</div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonials[cur].rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <p className="text-gray-700 text-lg sm:text-xl italic leading-relaxed mb-8 relative z-10">
              "{testimonials[cur].text}"
            </p>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-sm">{testimonials[cur].name[0]}</span>
            </div>
            <p className="font-bold text-gray-900 text-lg">{testimonials[cur].name}</p>
            <p className="text-gray-400 text-sm">{testimonials[cur].location} · {new Date(testimonials[cur].date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
          </div>

          {/* Controls */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all border border-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all border border-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCur(i)}
                className={`h-2 rounded-full transition-all duration-300 ${cur === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   BLOG
───────────────────────────────────────────── */
const Blog = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Health Blog</span>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2">Latest Health Articles</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.1}>
            <article className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <time className="text-gray-400 text-xs mb-2">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <button className="flex items-center gap-1.5 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   APPOINTMENT
───────────────────────────────────────────── */
const Appointment = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' });
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.department && form.date) {
      setDone(true);
      setTimeout(() => setDone(false), 5000);
      setForm({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' });
    }
  };

  const Field = ({ label, required, children }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label} {required && <span className="text-red-500">*</span>}</label>
      {children}
    </div>
  );

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white";

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-300 font-bold text-sm uppercase tracking-widest">Schedule a Visit</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">Book an Appointment</h2>
          <p className="text-blue-100 max-w-xl mx-auto">Fill out the form and our team will contact you within 30 minutes</p>
        </Reveal>

        <Reveal delay={0.15} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {done && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-semibold">Appointment request sent! We'll confirm via SMS shortly.</span>
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <Field label="Full Name" required>
                <input type="text" name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Enter your full name" required />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone" required>
                  <input type="tel" name="phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+91 XXXXX XXXXX" required />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@email.com" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Department" required>
                  <select name="department" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} className={inputCls} required>
                    <option value="">Select Department</option>
                    {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Doctor">
                  <select name="doctor" value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} className={inputCls}>
                    <option value="">Any Available Doctor</option>
                    {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Preferred Date" required>
                  <input type="date" name="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className={inputCls} required />
                </Field>
                <Field label="Preferred Time">
                  <select name="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className={inputCls}>
                    <option value="">Select Time</option>
                    <option>9:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 1:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                  </select>
                </Field>
              </div>
              <Field label="Additional Message">
                <textarea name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className={inputCls} placeholder="Describe your symptoms or special requests..." />
              </Field>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-200">
                Confirm Appointment
              </button>
              <p className="text-center text-gray-400 text-xs">* Required fields. We'll contact you within 30 minutes.</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   EMERGENCY BANNER
───────────────────────────────────────────── */
const EmergencyBanner = () => (
  <section className="py-16 bg-gradient-to-r from-red-600 to-rose-700 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Ambulance className="w-10 h-10 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-black">24/7 Emergency & Trauma Care</h2>
      </div>
      <p className="text-lg mb-8 text-red-100 max-w-2xl mx-auto">Immediate medical attention when you need it most. Our emergency team is always ready to respond.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <Phone className="w-6 h-6" /> Emergency: +91 98765 43210
        </a>
        <a href="#appointment" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-red-600 transition-all duration-200 hover:-translate-y-1">
          Non-Emergency Consultation
        </a>
      </div>
      <p className="text-sm mt-6 text-red-200">Available 24 hours · Ambulance service within 10 minutes</p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
const Contact = () => (
  <section id="contact" className="py-20 lg:py-28 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Get in Touch</span>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2">Contact Us</h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Reveal className="space-y-4">
          {[
            { icon: MapPin, title: 'Address', content: '123, Hospital Road, Annanagar, Chennai – 600040, Tamil Nadu, India' },
            { icon: Phone, title: 'Phone Numbers', content: 'Appointments: +91 44 1234 5678\nEmergency: 102 / +91 98765 43210\nAmbulance: 108' },
            { icon: Clock, title: 'Working Hours', content: 'Emergency: 24/7\nOP: 8:00 AM – 8:00 PM (Mon–Sat)\nSunday: 9:00 AM – 2:00 PM' },
            { icon: Mail, title: 'Email', content: 'General: care@dharanihospital.com\nAppointments: appointments@dharanihospital.com' },
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="group flex gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-200 border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{content}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="h-96 lg:h-full min-h-72 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.3204284816857!2d81.7739433!3d17.007945699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a544c995fa65%3A0xac3d96bbd21b5040!2sDharani%20Vascular%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1775554336378!5m2!1sen!2sin"
            className="w-full h-full"
            title="Hospital Location"
            allowFullScreen
            loading="lazy"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-500">Compassionate care, medical excellence, and patient-first approach since 2005.</p>
          <div className="flex gap-3 mt-5">
            {['f', 't', 'in', 'ig'].map(s => (
              <a key={s} href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200 text-xs font-bold text-gray-400 hover:text-white">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Services', 'Doctors', 'Appointment', 'Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-teal-400 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map(s => (
              <li key={s.id}><a href="#services" className="hover:text-teal-400 transition-colors">{s.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Subscribe for health tips and hospital updates.</p>
          <div className="flex rounded-xl overflow-hidden border border-gray-700">
            <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2.5 bg-gray-800 text-sm text-gray-300 outline-none placeholder-gray-600" />
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 px-4 text-white text-xs font-bold hover:opacity-90 transition-opacity">Go</button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
            <Shield className="w-4 h-4 text-teal-500" />
            <span>NABH & NABL Accredited</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Dharani Hospital. All rights reserved. &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Terms of Use
      </div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────────
   WHATSAPP BUTTON
───────────────────────────────────────────── */
const WAButton = () => (
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group">
    <div className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-400/40 hover:scale-110 transition-all duration-300">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">1</span>
    </div>
    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us!
    </span>
  </a>
);

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes kenBurns {
          from { transform: scale(1.05) translate(0, 0); }
          to   { transform: scale(1) translate(-1%, 0.5%); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(8px); opacity: 0.4; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Facilities />
        <Testimonials />
        <Blog />
        <Appointment />
        <EmergencyBanner />
        <Contact />
      </main>
      <Footer />
      <WAButton />
    </>
  );
}