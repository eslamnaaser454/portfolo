"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [photoMode, setPhotoMode] = useState("wide"); // 'wide' or 'focused'
  const [copied, setCopied] = useState(false);

  const email = "eslam.nasser.ezzat@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const togglePhotoMode = () => {
    setPhotoMode((prev) => (prev === "wide" ? "focused" : "wide"));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Toast Notification */}
      {copied && (
        <div className={styles.toast} role="status">
          <span>✓</span>
          <span>Email copied to clipboard!</span>
        </div>
      )}

      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#hero" className={styles.logo} id="nav-logo">
            <span className={styles.logoBadge}>EN</span>
            <span>Eslam Nasser</span>
          </a>

          <ul className={styles.navLinks}>
            <li>
              <a href="#hero" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#depi" className={styles.navLink}>
                DEPI Journey
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>

          <div className={styles.navRight}>
            <div className={styles.statusPill}>
              <span className={styles.statusDot}></span>
              <span>Available for Hire</span>
            </div>
            <a href="#contact" className={styles.btnConnect} id="nav-contact-btn">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.heroSection} id="hero">
        <div className={styles.heroBackgroundAura}></div>

        <div className={`container ${styles.heroGrid}`}>
          {/* Left Column: Introductions & Bio */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadgeRow}>
              <div className={styles.badgeIntro}>
                <span>👋</span>
                <span>Welcome to my Portfolio</span>
              </div>
              <div className={styles.badgeDepiHighlight}>
                <span>🏛️</span>
                <span>DEPI Trainee</span>
              </div>
            </div>

            <h1 className={styles.heroHeading}>
              Hi, I am <br />
              <span className={styles.heroName}>Eslam Nasser Ezzat</span>
            </h1>

            <div className={styles.heroRoleTagline}>
              <span className={styles.roleHighlight}>Software Engineer</span>
              <span>&</span>
              <span className={styles.depiHighlight}>Trainee at DEPI</span>
            </div>

            <p className={styles.heroDescription}>
              Passionate Software Engineer dedicated to crafting modern, performant, and
              scalable web applications. Currently honing elite engineering expertise as a
              trainee in the prestigious <strong>Digital Egypt Pioneers Initiative (DEPI)</strong>.
              Focused on clean code, intuitive architectures, and delivering real-world value.
            </p>

            <div className={styles.heroActions}>
              <a href="#projects" className={styles.btnPrimary} id="hero-projects-btn">
                <span>Explore My Work</span>
                <span>↓</span>
              </a>

              <a href="#contact" className={styles.btnSecondary} id="hero-contact-btn">
                <span>Contact Me</span>
                <span>→</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className={styles.btnCopyEmail}
                id="hero-copy-email-btn"
                title="Copy Email"
              >
                <span>📋</span>
                <span>Copy Email</span>
              </button>
            </div>

            {/* Quick Stats Highlights */}
            <div className={styles.heroHighlightsRow}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightTitle}>
                  <span>🏛️</span> Initiative
                </div>
                <div className={styles.highlightValue}>DEPI Trainee</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightTitle}>
                  <span>💻</span> Core Domain
                </div>
                <div className={styles.highlightValue}>Software Eng.</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightTitle}>
                  <span>⚡</span> Tech Stack
                </div>
                <div className={styles.highlightValue}>Next.js & .NET</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo Card */}
          <div className={styles.heroVisualContainer}>
            <div className={styles.imageOuterFrame}>
              <div className={styles.imageInnerCard}>
                {/* Top Card Floating Badges */}
                <div className={styles.cardTopBar}>
                  <div className={styles.msLocationPill}>
                    <div className={styles.msSquareIcon}>
                      <span className={styles.msRed}></span>
                      <span className={styles.msGreen}></span>
                      <span className={styles.msBlue}></span>
                      <span className={styles.msYellow}></span>
                    </div>
                    <span>Tech Hub Session</span>
                  </div>

                  <button
                    onClick={togglePhotoMode}
                    className={styles.viewModeToggle}
                    id="toggle-photo-mode-btn"
                    title="Switch between wide scene and portrait focus"
                  >
                    {photoMode === "wide" ? "🔍 Focus Portrait" : "🌐 Wide Scene"}
                  </button>
                </div>

                {/* Personal Image Component */}
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/personal-image.jpeg"
                    alt="Eslam Nasser Ezzat - Software Engineer & DEPI Trainee"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    className={`${styles.personalImage} ${
                      photoMode === "wide"
                        ? styles.personalImageWide
                        : styles.personalImageFocused
                    }`}
                  />
                  <div className={styles.imageOverlaySheen}></div>
                </div>

                {/* Bottom Card Title Details */}
                <div className={styles.cardBottomInfo}>
                  <div className={styles.cardBottomLeft}>
                    <div className={styles.cardTitle}>Eslam Nasser Ezzat</div>
                    <div className={styles.cardSubtitle}>
                      <span>●</span> Software Engineer | DEPI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Outer Glass Pill */}
            <div className={styles.floatingBadge1}>
              <div className={styles.badgeIconBox}>🚀</div>
              <div className={styles.badgeText}>
                <span className={styles.badgeTextMain}>Ready for Impact</span>
                <span className={styles.badgeTextSub}>Digital Egypt Pioneers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH TICKER / PILLS STRIP */}
      <section className={styles.techTickerSection}>
        <div className="container">
          <div className={styles.tickerTitle}>
            Core Technologies & Engineering Foundations
          </div>
          <div className={styles.techPillsWrapper}>
            <span className={styles.techPill}>⚛️ React / Next.js</span>
            <span className={styles.techPill}>🌐 JavaScript (ES6+)</span>
            <span className={styles.techPill}>💻 Software Architecture</span>
            <span className={styles.techPill}>🚀 Node.js</span>
            <span className={styles.techPill}>⚙️ C# / .NET</span>
            <span className={styles.techPill}>🗄️ SQL & Databases</span>
            <span className={styles.techPill}>🔀 Git & GitHub</span>
            <span className={styles.techPill}>🧩 Problem Solving</span>
            <span className={styles.techPill}>🏛️ DEPI Certified Track</span>
          </div>
        </div>
      </section>

      {/* DEPI SPOTLIGHT SECTION */}
      <section className={styles.sectionWrapper} id="depi">
        <div className="container">
          <div className={styles.depiCard}>
            <div className={styles.depiGrid}>
              <div>
                <div className={styles.depiTag}>Professional Training</div>
                <h2 className={styles.depiCardTitle}>
                  Digital Egypt Pioneers Initiative (DEPI)
                </h2>
                <p className={styles.depiCardText}>
                  DEPI is a flagship national initiative by Egypt’s Ministry of Communications
                  and Information Technology (MCIT), designed to empower top aspiring software
                  engineers with international-grade technical mastery, soft skills, and hands-on
                  industry projects.
                </p>
                <div className={styles.depiTrackList}>
                  <div className={styles.depiTrackItem}>
                    <span className={styles.depiCheckIcon}>✓</span>
                    <span>Rigorous software engineering practices & clean code standards</span>
                  </div>
                  <div className={styles.depiTrackItem}>
                    <span className={styles.depiCheckIcon}>✓</span>
                    <span>Modern full-stack web architectures and scalable application design</span>
                  </div>
                  <div className={styles.depiTrackItem}>
                    <span className={styles.depiCheckIcon}>✓</span>
                    <span>Collaborative agile team delivery, code reviews, and problem solving</span>
                  </div>
                </div>
              </div>

              <div className={styles.depiStatsColumn}>
                <div className={styles.depiStatBox}>
                  <div className={styles.depiStatNumber}>100%</div>
                  <div className={styles.depiStatLabel}>Commitment to Excellence</div>
                </div>
                <div className={styles.depiStatBox}>
                  <div className={styles.depiStatNumber}>MCIT</div>
                  <div className={styles.depiStatLabel}>National Initiative Sponsor</div>
                </div>
                <div className={styles.depiStatBox}>
                  <div className={styles.depiStatNumber}>Modern</div>
                  <div className={styles.depiStatLabel}>Full-Stack Curriculum</div>
                </div>
                <div className={styles.depiStatBox}>
                  <div className={styles.depiStatNumber}>Active</div>
                  <div className={styles.depiStatLabel}>Trainee Cohort Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & EXPERTISE SECTION */}
      <section className={styles.sectionWrapper} id="skills">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Capabilities</div>
            <h2 className={styles.sectionTitle}>Technical Skills & Competencies</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive toolkit focused on writing clean, maintainable, and high-performance software.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryIcon}>🎨</div>
              <h3 className={styles.skillCategoryTitle}>Frontend Development</h3>
              <p className={styles.skillCategoryDesc}>
                Building modern, responsive, and intuitive user interfaces with state-of-the-art web frameworks.
              </p>
              <div className={styles.skillItemsList}>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>JavaScript (ES6+)</span>
                <span className={styles.skillTag}>HTML5 & CSS3</span>
                <span className={styles.skillTag}>Responsive Design</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryIcon}>⚙️</div>
              <h3 className={styles.skillCategoryTitle}>Backend & Architecture</h3>
              <p className={styles.skillCategoryDesc}>
                Designing robust APIs, data workflows, and backend logic with an emphasis on performance and clean structure.
              </p>
              <div className={styles.skillItemsList}>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>C#</span>
                <span className={styles.skillTag}>.NET Core</span>
                <span className={styles.skillTag}>RESTful APIs</span>
                <span className={styles.skillTag}>SQL Databases</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryIcon}>🛠️</div>
              <h3 className={styles.skillCategoryTitle}>Tools & Practices</h3>
              <p className={styles.skillCategoryDesc}>
                Adhering to professional developer workflows, version control, and algorithmic problem solving.
              </p>
              <div className={styles.skillItemsList}>
                <span className={styles.skillTag}>Git & GitHub</span>
                <span className={styles.skillTag}>VS Code</span>
                <span className={styles.skillTag}>Clean Code</span>
                <span className={styles.skillTag}>Data Structures</span>
                <span className={styles.skillTag}>Agile Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className={styles.sectionWrapper} id="projects">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Portfolio</div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              Highlighted projects demonstrating full-stack engineering, performance, and modern design.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div>
                <div className={styles.projectMeta}>
                  <span className={styles.projectBadge}>Next.js / Full-Stack</span>
                </div>
                <h3 className={styles.projectTitle}>Modern Personal Portfolio</h3>
                <p className={styles.projectDesc}>
                  Engineered using Next.js App Router, Turbopack, and custom CSS glassmorphism. Featuring responsive layouts, dynamic theme touches, and performance optimization.
                </p>
                <div className={styles.projectTechStack}>
                  <span className={styles.projectTechBadge}>Next.js</span>
                  <span className={styles.projectTechBadge}>React</span>
                  <span className={styles.projectTechBadge}>CSS Modules</span>
                  <span className={styles.projectTechBadge}>SEO Optimized</span>
                </div>
              </div>
              <div className={styles.projectLinks}>
                <a href="#hero" className={styles.projectLinkBtn}>
                  <span>Live Preview</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div>
                <div className={styles.projectMeta}>
                  <span className={styles.projectBadge}>Software Engineering</span>
                </div>
                <h3 className={styles.projectTitle}>DEPI Enterprise Solutions</h3>
                <p className={styles.projectDesc}>
                  Scalable software solutions developed as part of DEPI training tracks, practicing clean architecture, database modeling, and end-to-end service integration.
                </p>
                <div className={styles.projectTechStack}>
                  <span className={styles.projectTechBadge}>.NET / Node</span>
                  <span className={styles.projectTechBadge}>SQL</span>
                  <span className={styles.projectTechBadge}>REST APIs</span>
                  <span className={styles.projectTechBadge}>Clean Architecture</span>
                </div>
              </div>
              <div className={styles.projectLinks}>
                <a href="#contact" className={styles.projectLinkBtn}>
                  <span>Inquire Details</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.sectionWrapper} id="contact">
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.sectionBadge}>Connect</div>
            <h2 className={styles.contactTitle}>Let’s Build Something Amazing Together</h2>
            <p className={styles.contactDesc}>
              Whether you have an upcoming project, an engineering role, or would like to discuss DEPI and tech collaboration, I would love to connect!
            </p>

            <div className={styles.contactMethods}>
              <button
                onClick={handleCopyEmail}
                className={styles.contactMethodItem}
                id="contact-copy-email"
              >
                <span>📧</span>
                <span>{email}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>(Click to copy)</span>
              </button>

              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20Eslam%20Nasser%20Ezzat`}
                className={styles.contactMethodItem}
                id="contact-send-email"
              >
                <span>✉️</span>
                <span>Send Direct Email</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMethodItem}
                id="contact-github"
              >
                <span>🐙</span>
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMethodItem}
                id="contact-linkedin"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerText}>
            © {new Date().getFullYear()} <strong>Eslam Nasser Ezzat</strong>. All rights reserved.
          </div>
          <div className={styles.footerText}>
            Software Engineer & Trainee at DEPI • Built with Next.js
          </div>
        </div>
      </footer>
    </div>
  );
}
