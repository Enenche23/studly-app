import React from 'react';
import './LandingPage.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1 data-aos="fade-up">Study Chaos?</h1>
      <h1 data-aos="fade-up" data-aos-delay="200">Studly Solves!</h1>
      <p className="subtext" data-aos="fade-up" data-aos-delay="400">
        Tap in. Learn fast. Level up.
      </p>
      <div className="actions" data-aos="fade-up" data-aos-delay="600">
        <a href="/auth">
          <button className="btn btn-primary">Get Started</button>
        </a>
        <a href="https://t.me/studly_official">
          <button className="btn btn-outline">Join Telegram</button>
        </a>
      </div>
      <div className="scroll-hint" data-aos="fade-up" data-aos-delay="800">
        <i className="fas fa-chevron-down"></i>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}