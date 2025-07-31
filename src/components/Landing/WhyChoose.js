import React from 'react';
import './WhyChoose.css';

export default function WhyChoose() {
  return (
    <section className="why-choose" id="features">
      <h2 className="section-heading" data-aos="fade-up">Why Choose Studly?</h2>
      <div className="features-grid">
        <FeatureCard title="Interactive Learning" text="Scroll through study like it's your feed - quick, clean, and built the way you'll actually learn." delay="0" />
        <FeatureCard title="Built by Students" text="Created by students who get the struggle, no stress, just smart support to help you pass with ease." delay="100" />
        <FeatureCard title="Study Smarter" text="Flash summaries, fast quizzes, everything you need to learn more in less time (and still have a life)." delay="200" />
        <FeatureCard title="Studlygram" text="Turn your scroll sessions into study wins, learn on the go, whenever, wherever." delay="300" />
        <FeatureCard title="Free Forever" text="The essentials stay free, no paywalls, no catches, just pure student support." delay="400" />
        <FeatureCard title="No More Info Overload" text="We break down the tough stuff so you don't have to scroll through 100 slides to get it." delay="500" />
        <FeatureCard title="Everything in One Place" text="Notes, quizzes, flashcards, all synced to your course. No chaos, just click and go." delay="600" />
        <FeatureCard title="Built for the Hustle" text="Whether you're cramming at 2 AM or revising on the move, Studly's got your back 24/7." delay="700" />
      </div>
    </section>
  );
}

function FeatureCard({ title, text, delay }) {
  return (
    <div className="feature-card" data-aos="fade-up" data-aos-delay={delay}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}