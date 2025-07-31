import React from "react";
import "./LandingPage.css";
import Header from "./Header";
import Hero from "./Hero";
import Metrics from "./Metrics";
import WhyChoose from "./WhyChoose";
import Mission from "./Mission";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section with Metrics below */}
        <section className="hero-container">
          <Hero />
          <Metrics />
        </section>

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Mission Section */}
        <Mission />

        {/* FAQ Section */}
        <FAQ />

        {/* Call to Action */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
