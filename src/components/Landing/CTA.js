import React from 'react';
import './LandingPage.css';

const CTA = () => {
  return (
    <section className="cta card" data-aos="zoom-in">
      <h2 className="section-heading" data-aos="zoom-in">Ready To Start Cooking?</h2>
      <p data-aos="zoom-in" data-aos-delay="100">
        Join thousands of students transforming their study habits with our interactive platform and endless learning opportunities.
      </p>
      <div className="cta-actions" data-aos="zoom-in" data-aos-delay="200">
        <a href="/auth">
          <button className="btn btn-primary">Let's Go!</button>
        </a>
      </div>
    </section>
  );
};

export default CTA;