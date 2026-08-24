export default function Home() {
  return (
    <main className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span>&lt;</span>Vinay<span>/&gt;</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let&apos;s Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            <span className="status-dot" />
            Executive — Infrastructure Services
          </p>

          <h1>
            Building reliable
            <br />
            <span>infrastructure</span> &amp; systems.
          </h1>

          <p className="hero-description">
            I&apos;m Vinay Pandey, an Infrastructure Services professional
            with 1.9+ years of experience across enterprise Linux and Windows
            environments, production support, high availability, monitoring,
            and infrastructure automation.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="primary-button">
              View Experience <span>↗</span>
            </a>

            <a href="#projects" className="secondary-button">
              View Project
            </a>
          </div>

          <div className="hero-socials">
            <span>Focus</span>
            <a href="#skills">Linux</a>
            <a href="#skills">Infrastructure</a>
            <a href="#skills">Automation</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-title">engineer.ts</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">engineer</span> = {"{"}
              </p>

              <p className="indent">
                <span className="code-property">name</span>:{" "}
                <span className="code-string">&quot;Vinay Pandey&quot;</span>,
              </p>

              <p className="indent">
                <span className="code-property">role</span>:{" "}
                <span className="code-string">
                  &quot;Executive - Infrastructure Services&quot;
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-property">linux</span>:{" "}
                <span className="code-string">
                  &quot;SLES / RHEL / Ubuntu&quot;
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-property">windows</span>:{" "}
                <span className="code-string">
                  &quot;Production Support&quot;
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-property">highAvailability</span>:{" "}
                <span className="code-string">
                  &quot;SUSE HA / Pacemaker / Corosync&quot;
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-property">automation</span>:{" "}
                <span className="code-string">
                  &quot;Shell / Ansible / Python&quot;
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-property">cloud</span>:{" "}
                <span className="code-string">
                  &quot;AWS Fundamentals&quot;
                </span>
                ,
              </p>

              <p>{"};"}</p>
            </div>
          </div>

          <div className="floating-badge badge-one">
            <span>✦</span>
            Linux Infrastructure
          </div>

          <div className="floating-badge badge-two">
            <span>◈</span>
            Automation &amp; Cloud
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="section-heading">
          <span>01</span>
          <p>About Me</p>
        </div>

        <div className="about-content">
          <h2>
            Infrastructure
            <br />
            <span>that works.</span>
          </h2>

          <div className="about-text">
            <p>
              I&apos;m Vinay Pandey, currently working in Infrastructure
              Services, with 1.9+ years of hands-on experience across
              enterprise Linux and Windows environments.
            </p>

            <p>
              My experience includes Linux administration, Windows production
              support, SUSE High Availability clusters, server deployment,
              monitoring, troubleshooting, patch management, and production
              incident support.
            </p>

            <p>
              I also work with Shell scripting, PowerShell, basic Ansible,
              Python, and AWS fundamentals, while continuing to build my
              expertise in DevOps, cloud technologies, and infrastructure
              automation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-heading">
          <span>02</span>
          <p>Technical Expertise</p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>

            <h3>Linux Administration</h3>

            <p>
              Enterprise Linux administration across SLES, RHEL, and Ubuntu
              environments.
            </p>

            <div className="skill-tags">
              <span>SLES</span>
              <span>RHEL</span>
              <span>Ubuntu</span>
              <span>Systemd</span>
              <span>Zypper</span>
              <span>YUM</span>
              <span>APT</span>
              <span>Log Analysis</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>

            <h3>Windows Production Support</h3>

            <p>
              Production support, monitoring, troubleshooting, access
              management, and incident response in Windows environments.
            </p>

            <div className="skill-tags">
              <span>Windows Server</span>
              <span>Event Logs</span>
              <span>Monitoring</span>
              <span>Performance</span>
              <span>User Access</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>

            <h3>High Availability</h3>

            <p>
              Supporting highly available Linux services through SUSE HA
              cluster deployment, monitoring, failover testing, and
              troubleshooting.
            </p>

            <div className="skill-tags">
              <span>SUSE HA</span>
              <span>Pacemaker</span>
              <span>Corosync</span>
              <span>Failover</span>
              <span>Cluster Resources</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>

            <h3>Automation &amp; Scripting</h3>

            <p>
              Automating repetitive infrastructure and administration tasks
              using scripting and configuration automation tools.
            </p>

            <div className="skill-tags">
              <span>Shell</span>
              <span>PowerShell</span>
              <span>Ansible</span>
              <span>YAML</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>

            <h3>Cloud &amp; Infrastructure</h3>

            <p>
              Foundational AWS knowledge combined with enterprise networking,
              server, and infrastructure concepts.
            </p>

            <div className="skill-tags">
              <span>AWS EC2</span>
              <span>IAM</span>
              <span>VPC</span>
              <span>Security Groups</span>
              <span>SSH</span>
              <span>TCP/IP</span>
              <span>DNS</span>
              <span>DHCP</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>

            <h3>Monitoring &amp; Support</h3>

            <p>
              Monitoring production systems, investigating incidents, and
              supporting enterprise applications and infrastructure teams.
            </p>

            <div className="skill-tags">
              <span>CCPulse</span>
              <span>Pulse</span>
              <span>Git</span>
              <span>RCA</span>
              <span>Incident Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience-section">
        <div className="section-heading">
          <span>03</span>
          <p>Experience</p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-meta">
              <span>01</span>
              <span>Current Role</span>
            </div>

            <div className="experience-content">
              <h3>Executive — Infrastructure Services</h3>

              <p>
                Currently working in Infrastructure Services, building on
                hands-on experience across enterprise systems, production
                environments, infrastructure operations, and technical
                support.
              </p>

              <div className="skill-tags">
                <span>Infrastructure</span>
                <span>Linux</span>
                <span>Windows</span>
                <span>Production Support</span>
                <span>Operations</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-meta">
              <span>02</span>
              <span>Jan 2026 — Present</span>
            </div>

            <div className="experience-content">
              <h3>System Support Apprentice</h3>

              <p>
                Provided L1/L2 support for Windows production environments,
                monitored production systems, supported Genesys applications,
                investigated incidents, managed access requests, and
                coordinated with application, infrastructure, and network
                teams.
              </p>

              <div className="skill-tags">
                <span>Windows</span>
                <span>Genesys</span>
                <span>CCPulse</span>
                <span>Monitoring</span>
                <span>Incident Support</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-meta">
              <span>03</span>
              <span>Oct 2023 — Jan 2025</span>
            </div>

            <div className="experience-content">
              <h3>System Engineer — Trainee</h3>

              <p>
                Deployed and administered SUSE Linux Enterprise Server,
                supported SUSE High Availability clusters using Pacemaker and
                Corosync, performed Linux administration, patching, monitoring,
                troubleshooting, Shell scripting, and basic Ansible automation.
              </p>

              <div className="skill-tags">
                <span>SLES</span>
                <span>SUSE HA</span>
                <span>Pacemaker</span>
                <span>Corosync</span>
                <span>Shell</span>
                <span>Ansible</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <span>04</span>
          <p>Selected Projects</p>
        </div>

        <div className="featured-project">
          <div className="project-top">
            <span className="project-number">01</span>
            <span className="project-type">FEATURED PROJECT</span>
          </div>

          <div className="featured-project-content">
            <div>
              <h3>Enterprise Server Health Dashboard</h3>

              <p>
                A centralized server health monitoring dashboard built for
                Windows infrastructure environments. The project automates
                server health collection and reporting to help infrastructure
                teams monitor system status more efficiently.
              </p>

              <p>
                The system securely connects to remote Windows servers using
                WinRM and PowerShell to collect CPU, memory, disk utilization,
                uptime, and operating system information. The collected data is
                presented through a web interface and automated Excel reports.
              </p>
            </div>

            <div className="skill-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>PowerShell</span>
              <span>WinRM</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>OpenPyXL</span>
            </div>
          </div>
        </div>

        {/* Portfolio Project */}
        <div className="featured-project portfolio-project">
          <div className="project-top">
            <span className="project-number">02</span>
            <span className="project-type">PERSONAL PROJECT</span>
          </div>

          <div className="featured-project-content">
            <div>
              <h3>Portfolio</h3>

              <p>
                A modern personal portfolio website designed to showcase my
                infrastructure, Linux, production support, automation, and
                DevOps experience through a clean and developer-focused
                interface.
              </p>

              <p>
                Built with a responsive dark UI, interactive sections, modern
                typography, reusable components, and a focus on presenting
                technical experience in a clear and professional way.
              </p>
            </div>

            <div className="skill-tags">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Responsive UI</span>
              <span>Git</span>
              <span>Deployment</span>
            </div>
          </div>
        </div>

        <div className="section-heading learning-heading">
          <span>—</span>
          <p>Hands-on Labs &amp; Learning</p>
        </div>

        <div className="learning-grid">
          <article className="learning-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">LAB / PRACTICE</span>
            </div>

            <h3>Infrastructure Automation</h3>

            <p>
              Hands-on practice automating routine Linux administration tasks
              using Shell scripting and basic Ansible playbooks. Focused on
              improving consistency and reducing repetitive operational work.
            </p>

            <div className="skill-tags">
              <span>Shell</span>
              <span>Ansible</span>
              <span>YAML</span>
              <span>Linux</span>
            </div>
          </article>

          <article className="learning-card">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">LAB / PRACTICE</span>
            </div>

            <h3>SUSE High Availability Lab</h3>

            <p>
              Hands-on practice with SUSE Linux Enterprise Server and
              High Availability technologies, including Pacemaker and
              Corosync. Worked with cluster resources, failover testing,
              monitoring, and troubleshooting.
            </p>

            <div className="skill-tags">
              <span>SLES</span>
              <span>Pacemaker</span>
              <span>Corosync</span>
              <span>Failover</span>
              <span>SUSE HA</span>
            </div>
          </article>
        </div>
      </section>


      {/* Resume */}
      <section id="resume" className="about-section">
        <div className="section-heading">
          <span>05</span>
          <p>Resume</p>
        </div>

        <div className="about-content">
          <h2>
            My technical
            <br />
            <span>journey.</span>
          </h2>

          <div className="about-text">
            <p>
              A concise overview of my infrastructure experience, technical
              skills, projects, and professional journey.
            </p>

            <div className="hero-actions">
              <a
                href="/resume/Vinay-Pandey-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                View Resume <span>↗</span>
              </a>

              <a
                href="/resume/Vinay-Pandey-Resume.pdf"
                download
                className="secondary-button"
              >
                Download PDF <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="about-section">
        <div className="section-heading">
          <span>06</span>
          <p>Contact</p>
        </div>

        <div className="about-content">
          <h2>
            Let&apos;s build
            <br />
            <span>something reliable.</span>
          </h2>

          <div className="about-text">
            <p>
              Interested in infrastructure, Linux, production support,
              automation, DevOps, or cloud technologies?
            </p>

            <div className="hero-actions">
              <a
                href="mailto:vp9349874@gmail.com"
                className="primary-button"
              >
                Get In Touch <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vinay-ac-pandey"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <span>Email</span>
              <a
                href="mailto:vp9349874@gmail.com"
                className="primary-button"
              >
                Email Me <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}