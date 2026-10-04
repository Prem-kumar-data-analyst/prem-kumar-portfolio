"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "Gujarat Engineering College Data Analysis",
    description:
      "Collected Gujarat Engineering College data from multiple public sources and built an interactive Power BI dashboard covering NAAC accreditation, placement, internship, research, university and district-wise insights.",
    tech: ["Python", "SQL", "Excel", "Power BI"],
    image: "/project/gujarat-colleges.png",
    github: "https://github.com/Prem-kumar-data-analyst/Gujarat-colleges-data-analysis",
  },
  {
    title: "India Exam Paper Leak Analysis",
    description:
      "Analyzed India's exam paper leak incidents using Python and Power BI, with KPI cards, year-wise trends, geographical analysis and NDA vs UPA comparisons.",
    tech: ["Python", "SQL", "Power BI"],
    image: "/project/exam-paper-leak.png",
    github: "https://github.com/Prem-kumar-data-analyst/Exam-Paper-Leak-Analysis",
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Analyzed customer data to identify purchasing patterns and high-value customer segments, then presented the findings through an interactive Power BI dashboard.",
    tech: ["Python", "SQL", "Power BI"],
    image: "/project/customer-behavior.png",
    github: "https://github.com/Prem-kumar-data-analyst/Customer_Behavior_Analysis",
  },
];

const skills = [
  "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn",
  "SQL", "MySQL", "PostgreSQL", "Power BI", "DAX", "Power Query",
  "MS Excel", "Tableau", "Data Visualization", "Data Cleaning", "EDA",
  "KPI Tracking", "Dashboard Development", "Business Reporting",
  "Jupyter", "Data Storytelling"
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "Analytics Career Connect (ACC)",
    date: "06/2026 – Present",
    bullets: [
      "Delivering end-to-end analytics/BI outputs in a structured 90-day build-in-public challenge.",
      "Authored a 14-page HR employment market research report with comparison charts and an interactive clickable TOC.",
      "Produced business-domain research across Insurance, Healthcare and Pharmaceuticals.",
      "Built 10+ Power BI dashboards and stakeholder decks with consistent branding."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Bluestock Fintech",
    date: "04/2026 – 05/2026",
    bullets: [
      "Collected, cleaned and preprocessed 1000+ rows of financial data for stock-market analysis.",
      "Performed EDA to identify pricing trends and behavioral patterns.",
      "Created reports and visualizations to present key insights.",
      "Built Python- and Excel-based automated workflows, reducing manual reporting time by 50%."
    ]
  },
  {
    role: "Summer Trainee – Data Analytics (6 Weeks)",
    company: "ThinkNEXT Technologies Pvt. Ltd.",
    date: "06/2025 – 07/2025",
    bullets: [
      "Completed intensive training in Python, SQL, Power BI and Excel.",
      "Performed data cleaning, preprocessing and EDA on real-world datasets.",
      "Developed interactive dashboards and KPI reports using Power BI and DAX."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    school: "Global Group of Institute, Amritsar, Punjab",
    date: "08/2023 – 06/2027"
  },
  {
    degree: "Senior Secondary (Science Stream) — 64%",
    school: "R Jha College, Sitamarhi, Bihar",
    date: "2020 – 2022"
  },
  {
    degree: "Matriculation (10th Standard) — 79%",
    school: "T.R. High School Kharsan, Sitamarhi, Bihar",
    date: "2019 – 2020"
  }
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const current = ids.findLast((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 180;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand">PK<span>.</span></a>
        <div className="navLinks">
          {["home","about","experience","projects","skills","education","contact"].map((item) => (
            <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <button className="themeBtn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? "☀" : "☾"}
        </button>
      </nav>

      <section id="home" className="hero section">
        <div className="heroCopy">
          <div className="eyebrow">DATA ANALYST • PYTHON • SQL • POWER BI</div>
          <h1>Hi, I'm <span>Prem Kumar</span>.</h1>
          <h2>I turn raw data into clear, actionable insights.</h2>
          <p>
            Aspiring Data Analyst skilled in Python, SQL, Power BI (DAX), and Excel,
            with internship experience and hands-on analytics projects.
          </p>
          <div className="actions">
            <a className="primaryBtn" href="#contact">Let's Connect ↗</a>
            <a className="secondaryBtn" href="/Prem_Kumar_DA_Resume.pdf" target="_blank">Download CV ↓</a>
          </div>
          <div className="socials">
            <a href="https://linkedin.com/in/premkumardataanalyst" target="_blank">LinkedIn ↗</a>
            <a href="https://github.com/Prem-kumar-data-analyst" target="_blank">GitHub ↗</a>
            <a href="mailto:prem33672@gmail.com">Email ↗</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="blob"></div>
          <div className="photoFrame">
            <img src="/profile.jpg" alt="Prem Kumar" />
          </div>
          <div className="floatCard">
            <strong>3+</strong>
            <span>Analytics<br/>Experiences</span>
          </div>
        </div>
      </section>

      <section id="about" className="section narrow">
        <div className="sectionLabel">01 — ABOUT</div>
        <div className="aboutGrid">
          <h2>Data with purpose,<br/><em>insights with impact.</em></h2>
          <div>
            <p>
              I'm an aspiring Data Analyst with a strong foundation in Python, SQL,
              Power BI (DAX), and Excel. I enjoy cleaning messy data, exploring patterns,
              building dashboards, and communicating insights in a way stakeholders can use.
            </p>
            <p>
              My hands-on experience spans analytics internships, business-domain research,
              financial data analysis, and a live build-in-public program where I have
              developed multiple dashboards and reports.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section alt">
        <div className="sectionLabel">02 — EXPERIENCE</div>
        <h2>Where I've <em>worked</em>.</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <article className="timelineItem" key={i}>
              <div className="dot"></div>
              <div className="jobHead">
                <div><h3>{job.role}</h3><p>{job.company}</p></div>
                <span>{job.date}</span>
              </div>
              <ul>{job.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionLabel">03 — PROJECTS</div>
        <div className="sectionTop">
          <h2>Selected <em>work</em>.</h2>
          <p>Real-world dashboards and analysis built with a focus on clarity and decision-making.</p>
        </div>
        <div className="projects">
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="projectImage">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="projectInfo">
                <span className="projectNo">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                <a className="projectLink" href={p.github} target="_blank">View on GitHub ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="sectionLabel">04 — SKILLS</div>
        <div className="sectionTop">
          <h2>Tools I <em>work with</em>.</h2>
          <p>From data preparation to dashboards, reporting and storytelling.</p>
        </div>
        <div className="skillCloud">{skills.map(s => <span key={s}>{s}</span>)}</div>
      </section>

      <section id="education" className="section narrow">
        <div className="sectionLabel">05 — EDUCATION</div>
        <h2>My <em>education</em>.</h2>
        <div className="educationList">
          {education.map((e, i) => (
            <div className="edu" key={i}>
              <div><h3>{e.degree}</h3><p>{e.school}</p></div>
              <span>{e.date}</span>
            </div>
          ))}
        </div>
        <div className="certs">
          <h3>Certifications & Achievements</h3>
          <div className="certGrid">
            <a href="https://github.com/Prem-kumar-data-analyst/Certificates/blob/main/Deloitte%20Job%20Simulation.jpeg" target="_blank">Deloitte — Data Analytics Job Simulation ↗</a>
            <a href="https://github.com/Prem-kumar-data-analyst/Certificates/blob/main/TATA%20Job%20Simulation.jpeg" target="_blank">Tata Group — GenAI Powered Data Analytics Job Simulation ↗</a>
            <a href="https://github.com/Prem-kumar-data-analyst/Certificates/blob/main/Thinknext%20technologies.jpeg" target="_blank">ThinkNEXT — Data Analyst Training ↗</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contactCard">
          <div>
            <div className="sectionLabel">06 — CONTACT</div>
            <h2>Let's work with <em>data.</em></h2>
            <p>Have a project, opportunity or collaboration in mind? I'd love to hear from you.</p>
          </div>
          <div className="contactLinks">
            <a href="mailto:prem33672@gmail.com"><small>Email</small><strong>prem33672@gmail.com ↗</strong></a>
            <a href="https://linkedin.com/in/premkumardataanalyst" target="_blank"><small>LinkedIn</small><strong>/in/premkumardataanalyst ↗</strong></a>
            <a href="https://github.com/Prem-kumar-data-analyst" target="_blank"><small>GitHub</small><strong>@Prem-kumar-data-analyst ↗</strong></a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Prem Kumar</span>
        <span>Built with Next.js</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
