import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { question: 'What exactly is Studly?', answer: 'Studly is a revolutionary learning platform offering notes, quizzes, summaries, and gamified study tools - all designed to make education as engaging as your favorite social media.' },
    { question: 'Is there any cost to use Studly?', answer: 'Absolutely not! We believe education should be accessible to all, so our core features will always remain completely free.' },
    { question: 'How does Studly keep me motivated?', answer: 'Through streaks, points systems, and daily challenges that turn consistent studying into a rewarding habit.' },
    { question: 'Can I contribute my own content?', answer: 'Yes! Become a verified curator to upload helpful material for your department while earning rewards for quality contributions.' },
    { question: 'Mobile app availability?', answer: 'Currently accessible via web and Discord, with native mobile apps launching soon for even more convenient learning.' },
    { question: 'What sets Studly apart?', answer: 'Built entirely by students for students, we focus on bite-sized, personalized content that fits how Gen Z naturally consumes information.' },
    { question: 'Registration requirements?', answer: 'Browse freely without an account, but register to save progress, earn rewards, and unlock premium features.' },
  ];

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="section-heading" data-aos="fade-up">FAQs</h2>
      <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className={`arrow ${expanded === index ? 'expanded' : ''}`}>
                {expanded === index ? '▲' : '▼'}
              </span>
            </div>
            {expanded === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}