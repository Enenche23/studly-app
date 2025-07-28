// src/components/Landing/LandingPage.js
import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <img src="C:/Users/USER/Downloads/studly_new_logo-removebg-preview.png" alt="Studly Logo" className="logo" />
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQs</a>
        </nav>
        <div className="header-buttons">
          <a href="Auth.html?action=signin">
            <button className="btn btn-outline">Login</button>
          </a>
          <a href="Auth.html">
            <button className="btn btn-primary">Register</button>
          </a>
        </div>
      </header>

      <section className="hero" id="hero">
        <h1 data-aos="fade-up">Study Chaos?</h1>
        <h1 data-aos="fade-up" data-aos-delay="200">Studly Solves!</h1>
        <p className="subtext" data-aos="fade-up" data-aos-delay="400">
          Tap in. Learn fast. Level up.
        </p>
        <div className="actions" data-aos="fade-up" data-aos-delay="600">
          <a href="Auth.html">
            <button className="btn btn-primary">Get Started</button>
          </a>
          <a href="https://t.me/studly_official">
            <button className="btn btn-outline">Join Telegram</button>
          </a>
        </div>
        <div className="scroll-hint">
          <i className="fas fa-chevron-down"></i>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="metrics">
        <div className="metric-card" data-aos="fade-up"><h2>20,000+</h2><p>Active Users</p></div>
        <div className="metric-card" data-aos="fade-up" data-aos-delay="100"><h2>50+</h2><p>Countries</p></div>
        <div className="metric-card" data-aos="fade-up" data-aos-delay="200"><h2>1,000+</h2><p>Districts Helped</p></div>
      </section>

      <section className="why-choose" id="features">
        <h2 className="section-title" data-aos="fade-up">Why Choose Studly?</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up"><h3>Interactive Learning</h3><p>Scroll through study like it's your feed - quick, clean, and built the way you'll actually learn.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100"><h3>Built by Students</h3><p>Created by students who get the struggle, no stress, just smart support to help you pass with ease.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200"><h3>Study Smarter</h3><p>Flash summaries, fast quizzes, everything you need to learn more in less time (and still have a life).</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300"><h3>Studlygram</h3><p>Turn your scroll sessions into study wins, learn on the go, whenever, wherever.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="400"><h3>Free Forever</h3><p>The essentials stay free, no paywalls, no catches, just pure student support.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="500"><h3>No More Info Overload</h3><p>We break down the tough stuff so you don't have to scroll through 100 slides to get it.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="600"><h3>Everything in One Place</h3><p>Notes, quizzes, flashcards, all synced to your course. No chaos, just click and go.</p></div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="700"><h3>Built for the Hustle</h3><p>Whether you're cramming at 2 AM or revising on the move, Studly's got your back 24/7.</p></div>
        </div>
      </section>

      <section className="mission" id="about">
        <h2 className="section-title" data-aos="fade-up">Our Mission</h2>
        <p data-aos="fade-up" data-aos-delay="100">We're flipping the script on boring education. Studly blends social media vibes with game-like learning to make studying feel less like work and more like a scroll you actually enjoy.</p>
      </section>

      <section className="faq" id="faq">
        <h2 className="section-title" data-aos="fade-up">FAQs</h2>
        <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
          <details><summary>What exactly is Studly?</summary><p>Studly is a revolutionary learning platform offering notes, quizzes, summaries, and gamified study tools - all designed to make education as engaging as your favorite social media.</p></details>
          <details><summary>Is there any cost to use Studly?</summary><p>Absolutely not! We believe education should be accessible to all, so our core features will always remain completely free.</p></details>
          <details><summary>How does Studly keep me motivated?</summary><p>Through streaks, points systems, and daily challenges that turn consistent studying into a rewarding habit.</p></details>
          <details><summary>Can I contribute my own content?</summary><p>Yes! Become a verified curator to upload helpful material for your department while earning rewards for quality contributions.</p></details>
          <details><summary>Mobile app availability?</summary><p>Currently accessible via web and Discord, with native mobile apps launching soon for even more convenient learning.</p></details>
          <details><summary>What sets Studly apart?</summary><p>Built entirely by students for students, we focus on bite-sized, personalized content that fits how Gen Z naturally consumes information.</p></details>
          <details><summary>Registration requirements?</summary><p>Browse freely without an account, but register to save progress, earn rewards, and unlock premium features.</p></details>
        </div>
      </section>

      <section className="cta">
        <h2 className="section-title" data-aos="zoom-in">Ready To Start Cooking?</h2>
        <p data-aos="zoom-in" data-aos-delay="100">Join thousands of students transforming their study habits with our interactive platform and endless learning opportunities.</p>
        <a href="Auth.html">
          <button className="btn btn-primary">Let's Go!</button>
        </a>
      </section>

      <footer>
        <strong>Studly</strong><br />
        &copy; 2025 Studly. Redefining the future of student learning.
      </footer>
    </div>
  );
}

export default LandingPage;
