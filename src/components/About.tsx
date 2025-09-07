import React from "react";
import Image from "next/image";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-icon">👥</span>
            Meet Our Team
          </div>
          <h2 className="about-title">
            <span className="title-highlight">Pioneering</span> Healthcare
            Excellence
          </h2>
          <p className="about-subtitle">
            Led by visionary healthcare professionals with decades of combined
            experience in transforming medical institutions worldwide
          </p>
        </div>

        {/* Team Cards */}
        <div className="team-grid">
          {/* Dr. Stuti Sachan Card */}
          <div className="team-card">
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <Image
                    src="/stuti.jpeg"
                    alt="Dr. Stuti Sachan"
                    className="avatar-image"
                    width={120}
                    height={120}
                  />
                  <div className="avatar-ring"></div>
                </div>
                <div className="status-dot"></div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">Dr. Stuti Sachan</h3>
                <p className="profile-role">Chief Healthcare Strategist</p>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="section-title">
                <h4>Academic Excellence</h4>
              </div>

              <div className="expertise-showcase">
                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🎓</div>
                  </div>
                  <div className="expertise-details">
                    <h5>PhD in Hospital Management</h5>
                    <p>
                      Advanced Healthcare Systems and comprehensive hospital
                      administration
                    </p>
                    <ul className="expertise-points">
                      <li>Healthcare Systems</li>
                      <li>Strategic Planning</li>
                      <li>Research Excellence</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">📚</div>
                  </div>
                  <div className="expertise-details">
                    <h5>MBA Hospital Management</h5>
                    <p>
                      Healthcare Administration and business management
                      expertise
                    </p>
                    <ul className="expertise-points">
                      <li>Business Strategy</li>
                      <li>Operations Management</li>
                      <li>Financial Planning</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">⚕️</div>
                  </div>
                  <div className="expertise-details">
                    <h5>B.Tech Biomedical Engineering</h5>
                    <p>
                      Medical Technology Systems and biomedical device expertise
                    </p>
                    <ul className="expertise-points">
                      <li>Medical Devices</li>
                      <li>Technology Integration</li>
                      <li>System Design</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🏆</div>
                  </div>
                  <div className="expertise-details">
                    <h5>QM & AHO Certification</h5>
                    <p>Quality Management and AHA Organisation accreditation</p>
                    <ul className="expertise-points">
                      <li>Quality Systems</li>
                      <li>Accreditation Standards</li>
                      <li>Compliance Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="expertise-tags">
                <span className="tag">Hospital Management</span>
                <span className="tag">Quality Assurance</span>
                <span className="tag">Healthcare Systems</span>
              </div>
            </div>
          </div>

          {/* Dr. Neeraj Sachan Card */}
          <div className="team-card">
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <Image
                    src="/neeraj.jpeg"
                    alt="Dr. Neeraj Sachan"
                    className="avatar-image"
                    width={120}
                    height={120}
                  />
                  <div className="avatar-ring"></div>
                </div>
                <div className="status-dot"></div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">Dr. Neeraj Sachan</h3>
                <p className="profile-role">Pharmaceutical Solutions Expert</p>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">12+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Solutions Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="section-title">
                <h4>Core Expertise</h4>
              </div>

              <div className="expertise-showcase">
                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">💊</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Pharmaceutical Management</h5>
                    <p>
                      Strategic oversight of pharmaceutical operations and
                      supply chain optimization
                    </p>
                    <ul className="expertise-points">
                      <li>Supply Chain Strategy</li>
                      <li>Regulatory Compliance</li>
                      <li>Quality Management</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🔬</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Healthcare Innovation</h5>
                    <p>
                      Pioneering cutting-edge solutions for modern healthcare
                      challenges
                    </p>
                    <ul className="expertise-points">
                      <li>Digital Health Solutions</li>
                      <li>Process Innovation</li>
                      <li>Technology Integration</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">📈</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Process Optimization</h5>
                    <p>
                      Streamlining healthcare delivery through advanced
                      methodologies
                    </p>
                    <ul className="expertise-points">
                      <li>Workflow Analysis</li>
                      <li>Cost Reduction</li>
                      <li>Efficiency Improvement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="expertise-tags">
                <span className="tag">Pharmaceutical Management</span>
                <span className="tag">Healthcare Innovation</span>
                <span className="tag">Process Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-section">
          <div className="mission-card">
            <div className="mission-glow"></div>
            <div className="mission-content">
              <div className="mission-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize healthcare management through innovative
                solutions, expert guidance, and unwavering commitment to
                excellence in patient care and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
