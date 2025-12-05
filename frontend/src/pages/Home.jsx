import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Rocket, Moon, Star, Users, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { rooms, amenities, testimonials, faqs, pricingPackages } from '../mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleBookNow = () => {
    navigate('/coming-soon');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    localStorage.setItem('contactForm', JSON.stringify(formData));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-hotel">
      {/* Header */}
      <header className="dark-header">
        <div className="dark-logo-text">
          <Star className="inline mr-2" size={32} />
          <span>STELLAR HAVEN</span>
        </div>
        <nav className="dark-nav">
          <a onClick={() => scrollToSection('rooms')} className="dark-nav-link">Rooms</a>
          <a onClick={() => scrollToSection('amenities')} className="dark-nav-link">Amenities</a>
          <a onClick={() => scrollToSection('pricing')} className="dark-nav-link">Pricing</a>
          <a onClick={() => scrollToSection('about')} className="dark-nav-link">About</a>
          <a onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</a>
          <Button onClick={handleBookNow} className="btn-primary">Book Now</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">EXPERIENCE LUXURY BEYOND EARTH</h1>
          <p className="hero-subtitle">The world's first orbital space hotel. Where dreams meet the cosmos.</p>
          <div className="hero-buttons">
            <Button onClick={handleBookNow} className="btn-primary">
              Reserve Your Journey
              <ArrowRight size={20} />
            </Button>
            <Button onClick={() => scrollToSection('rooms')} className="btn-secondary">
              Explore Suites
            </Button>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollToSection('rooms')}>
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section-container">
        <div className="section-header">
          <h2 className="section-title">OUR SUITES</h2>
          <p className="section-description">Accommodations designed for the ultimate space experience</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-header">
                <h3 className="room-name">{room.name}</h3>
                <div className="room-price">
                  <span className="price-amount">{room.price}</span>
                  <span className="price-duration">/{room.duration}</span>
                </div>
              </div>
              <p className="room-description">{room.description}</p>
              <ul className="room-features">
                {room.features.map((feature, idx) => (
                  <li key={idx}>
                    <Star size={16} className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button onClick={handleBookNow} className="btn-secondary w-full">Select Suite</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="section-container section-dark">
        <div className="section-header">
          <h2 className="section-title">AMENITIES</h2>
          <p className="section-description">World-class facilities for an extraordinary stay</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="amenity-card">
              <Rocket size={40} className="amenity-icon" />
              <h3 className="amenity-title">{amenity.title}</h3>
              <p className="amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-container">
        <div className="section-header">
          <h2 className="section-title">PACKAGES</h2>
          <p className="section-description">Choose your perfect cosmic adventure</p>
        </div>
        <div className="pricing-grid">
          {pricingPackages.map((pkg) => (
            <div key={pkg.id} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
              <h3 className="pricing-name">{pkg.name}</h3>
              <div className="pricing-price">
                <span className="price-amount">{pkg.price}</span>
                <span className="price-duration">/{pkg.duration}</span>
              </div>
              <ul className="pricing-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <Star size={16} className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button onClick={handleBookNow} className={pkg.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Choose Package
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container section-dark">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">OUR MISSION</h2>
            <p className="about-paragraph">
              Stellar Haven represents humanity's boldest venture into space tourism. We've transformed the dream of space travel into an accessible luxury experience.
            </p>
            <p className="about-paragraph">
              Located 400km above Earth in low orbit, our hotel offers unparalleled views, zero-gravity experiences, and the adventure of a lifetime. Every detail has been crafted to ensure safety, comfort, and wonder.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">400km</div>
                <div className="stat-label">Above Earth</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Guest Services</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">GUEST EXPERIENCES</h2>
          <p className="section-description">Hear from those who've journeyed beyond</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container section-dark">
        <div className="section-header">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-description">Everything you need to know about your space journey</p>
        </div>
        <div className="faq-container">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="faq-question">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="section-description">Have questions? We're here to help plan your journey</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} className="contact-icon" />
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Spaceport Alpha, Kennedy Space Center, FL</div>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} className="contact-icon" />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">reservations@stellarhaven.space</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} className="contact-icon" />
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+1 (555) SPACE-01</div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-textarea"
              rows={5}
            />
            <Button type="submit" className="btn-primary w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Star size={32} />
              <span>STELLAR HAVEN</span>
            </div>
            <p className="footer-tagline">Luxury beyond Earth's atmosphere</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <a onClick={() => scrollToSection('rooms')} className="footer-link">Rooms</a>
            <a onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</a>
            <a onClick={() => scrollToSection('about')} className="footer-link">About</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">reservations@stellarhaven.space</p>
            <p className="footer-text">+1 (555) SPACE-01</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Stellar Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
