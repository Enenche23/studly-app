import React, { useEffect } from 'react';
import './LandingPage.css';
import Header from './Header';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Mission from './Mission';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    // Add border effect to cards on hover
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--accent)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255,255,255,0.05)';
      });
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Neon pulse effect for headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
      heading.style.animation = 'neonPulse 4s infinite alternate';
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero-container">
          <Hero />
        </section>
        <WhyChoose />
        <Mission />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}