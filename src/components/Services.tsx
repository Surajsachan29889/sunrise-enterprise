import React from "react";
import "./Services.css";

const services = [
  {
    icon: "🏥",
    title: "Hospital Management Consulting",
    description:
      "Strategic planning and operational improvement for hospitals and healthcare facilities.",
    features: [
      "Strategic Planning",
      "Operational Excellence",
      "Cost Optimization",
    ],
    highlight: "Transform Operations",
  },
  {
    icon: "🏆",
    title: "Quality Management & Accreditation",
    description:
      "Comprehensive assistance with NABH, JCI, and international healthcare accreditations.",
    features: ["NABH Accreditation", "JCI Standards", "Quality Systems"],
    highlight: "Excellence Certified",
  },
  {
    icon: "⚕️",
    title: "Biomedical Equipment Planning",
    description:
      "Expert guidance on medical equipment procurement, installation, and lifecycle management.",
    features: [
      "Equipment Planning",
      "Procurement Support",
      "Lifecycle Management",
    ],
    highlight: "Technology Integration",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* Background Elements */}
      <div className="services-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-icon">🎯</span>
            <span className="badge-text">Our Expertise</span>
          </div>

          <div className="title-container">
            <h2 className="services-title">
              <span className="title-main">Comprehensive Healthcare</span>
              <span className="title-accent">Solutions</span>
            </h2>

            <div className="title-ornament">
              <div className="ornament-dot"></div>
              <div className="ornament-dot"></div>
              <div className="ornament-dot"></div>
            </div>
          </div>

          <p className="services-subtitle">
            Transforming healthcare delivery through strategic consulting,
            quality management, and innovative technology solutions that drive
            measurable results for your organization
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-index={index}>
              <div className="card-glow"></div>
              <div className="card-border"></div>

              <div className="service-header">
                <div className="service-icon">
                  <span className="icon-main">{service.icon}</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="service-highlight">{service.highlight}</div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <button className="learn-more-btn">
                  Learn More
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Healthcare Operations?</h3>
            <p>
              Let&apos;s discuss how our expert solutions can elevate your
              organization
            </p>
            <button className="cta-button">
              Get Started Today
              <span className="cta-sparkle">✨</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
