import React from "react";
import "./LandingPage.css";

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <h2 data-aos="fade-up">FAQs</h2>
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
  );
}
