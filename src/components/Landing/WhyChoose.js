import React from 'react';
import './LandingPage.css';

export default function WhyChoose() {
  return (
    <section className="why-choose" id="features">
      <h2 className="section-heading" data-aos="fade-up">Why Choose Studly?</h2>
      <div className="features-grid">
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Bite-sized notes</h3>
          <p>Condensed, easy-to-digest study material tailored for quick learning.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Interactive quizzes</h3>
          <p>Test your knowledge with fun, gamified quizzes that keep you engaged.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Community-driven</h3>
          <p>Join a vibrant community of learners sharing tips and resources.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
          <h3>AI-powered insights</h3>
          <p>Personalized study recommendations to maximize your efficiency.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
          <h3>Daily challenges</h3>
          <p>Stay motivated with streaks and rewards for consistent studying.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
          <h3>Custom playlists</h3>
          <p>Create study playlists tailored to your courses and goals.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="700">
          <h3>Progress tracking</h3>
          <p>Monitor your learning journey with detailed analytics.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="800">
          <h3>Offline access</h3>
          <p>Study anywhere with downloadable content for offline use.</p>
        </div>
      </div>
    </section>
  );
}