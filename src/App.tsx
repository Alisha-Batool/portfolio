import type { FormEvent, ReactNode } from "react";
import profilePic from "./assets/profile.jfif";

type IconName = "arrow" | "github" | "linkedin" | "mail" | "code" | "external";

function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <path d="M14 5h5v5M19 5l-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
    github: <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.4-1.77 7.4-8A6.25 6.25 0 0 0 19.64 3c.16-.4.7-2.07-.16-4.3 0 0-1.36-.44-4.48 1.7a15.4 15.4 0 0 0-8.16 0C3.72-1.74 2.36-1.3 2.36-1.3 1.5.93 2.04 2.6 2.2 3A6.25 6.25 0 0 0 .54 7.5c0 6.22 3.8 7.6 7.4 8-.62.54-1 1.3-1.08 2.12-.97.44-3.44 1.2-4.96-1.42 0 0-.9-1.64-2.62-1.76 0 0-1.68-.02-.12 1.04 0 0 1.12.52 1.9 2.48 0 0 1 3.3 5.76 2.18V22" />,
    linkedin: <><path d="M6 9v10M6 5.5v.01M10.5 19v-5.5a4 4 0 0 1 8 0V19M10.5 9v10" /><circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const tags = (items: string[]) => (
  <div className="tag-list">
    {items.map((item) => <span className="tag" key={item}>{item}</span>)}
  </div>
);

const skillGroups = [
  { id: "01", title: "Languages", items: ["Python", "C++", "TypeScript", "JavaScript", "SQL"] },
  { id: "02", title: "AI / ML & Agents", items: ["LangChain", "LlamaIndex", "PyTorch", "Multi-Agent Workflows", "RAG"] },
  { id: "03", title: "Web & Backend", items: ["Next.js", "React", "Node.js", "Express", "FastAPI", "REST APIs"] },
  { id: "04", title: "Data & Infrastructure", items: ["MongoDB", "PostgreSQL", "Docker", "Git", "Linux", "CI/CD"] },
];

const timeline = [
  {
    date: "2025 — PRESENT",
    role: "AI / ML Engineering Intern",
    company: "DevelopersHub Corporation",
    copy: "Building applied machine learning systems and translating research concepts into testable, product-minded implementations.",
    points: ["Developing retrieval-augmented AI workflows and evaluation pipelines", "Prototyping task-focused intelligent systems in Python"],
  },
  {
    date: "2024 — PRESENT",
    role: "Research Ambassador",
    company: "University Research Community",
    copy: "Supporting peer research culture through technical knowledge sharing, collaborative exploration, and student-led initiatives.",
    points: ["Facilitating accessible conversations around emerging AI research", "Connecting student builders with research opportunities and resources"],
  },
  {
    date: "2023 — 2025",
    role: "Hackathon Builder & Competitor",
    company: "National Engineering Competitions",
    copy: "Shipping focused prototypes under constraint across responsible AI, healthcare access, and developer productivity.",
    points: ["Built and presented end-to-end demos in cross-functional teams", "Competed on technical execution, relevance, and real-world impact"],
  },
];

function SectionTitle({ number, children, aside }: { number: string; children: ReactNode; aside?: string }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{number} / SYSTEM</span>
        <h2>{children}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </div>
  );
}

function AgentDiagram() {
  return (
    <div className="diagram agent-diagram" aria-label="Agent orchestration architecture diagram">
      <div className="diagram-topline"><span>ORCHESTRATION_GRAPH</span><span>LIVE</span></div>
      <div className="agent-map">
        <div className="agent-node input">INPUT</div>
        <div className="connector horizontal c1" />
        <div className="agent-node router">ROUTER<span>01</span></div>
        <div className="connector branch" />
        <div className="agent-node mini researcher">RESEARCH</div>
        <div className="agent-node mini planner">PLAN</div>
        <div className="agent-node mini executor">EXECUTE</div>
        <div className="connector horizontal c2" />
        <div className="agent-node output">OUTPUT</div>
      </div>
      <div className="diagram-log">
        <span><i /> agent.router</span>
        <span>latency 186ms</span>
        <span>confidence .94</span>
      </div>
    </div>
  );
}

function TriageDiagram() {
  return (
    <div className="diagram triage-diagram" aria-label="Multilingual triage system architecture">
      <div className="diagram-topline"><span>TRIAGE_PIPELINE</span><span>URDU / EN</span></div>
      <div className="wave-row"><span>00:04</span><div className="wave">{[8,14,20,11,25,17,30,13,21,9,27,18,11,23,15,8].map((h, i) => <i key={i} style={{height: h}} />)}</div></div>
      <div className="pipeline">
        <div><b>01</b><span>TRANSCRIBE</span></div><i />
        <div><b>02</b><span>RETRIEVE</span></div><i />
        <div><b>03</b><span>TRIAGE</span></div>
      </div>
      <div className="risk-line"><span>RISK CLASSIFICATION</span><strong>HUMAN REVIEW</strong></div>
    </div>
  );
}

function PortraitPlaceholder({ candid = false }: { candid?: boolean }) {
  return (
    <div className={`portrait-placeholder ${candid ? "portrait-candid" : ""}`} role="img" aria-label={candid ? "Portrait photo" : "Professional portrait photo"}>
      <img src={profilePic} alt={candid ? "Candid portrait" : "Professional portrait"} className="profile-image" />
      {!candid && <div className="portrait-caption"><i /><div><strong>Alisha</strong><span>Software &amp; AI Engineer</span></div></div>}
    </div>
  );
}

export default function App() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    try {
      const response = await fetch("https://formsubmit.co/ajax/alishabatool812@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio inquiry from ${name}`,
          _replyto: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      event.currentTarget.reset();
      window.alert("Your message has been sent successfully.");
    } catch (error) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
      window.location.href = `mailto:alishabatool812@gmail.com?subject=${subject}&body=${body}`;
    }
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Alisha home">
            <span className="brand-bracket">[</span>ALISHA<span className="brand-bracket">]</span>
          </a>
          <div className="availability"><span className="status-dot" /> Open to Opportunities</div>
          <div className="nav-links">
            <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-kicker"><span>SOFTWARE ENGINEER</span><i /><span>AI / ML SPECIALIST</span></div>
              <h1>Building intelligent <span>agentic systems</span> &amp; scalable full-stack applications.</h1>
              <p className="hero-copy">Software Engineer | AI/ML Specialist focusing on autonomous multi-agent orchestration, RAG architectures, and intelligent web solutions.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View Projects <Icon name="arrow" /></a>
                <a className="button button-secondary" href="https://github.com/Alisha-Batool" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub <Icon name="external" size={13} /></a>
                <a className="button button-secondary" href="http://linkedin.com/in/alisha-batool-9235ba293/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn <Icon name="external" size={13} /></a>
                <a className="button button-icon" href="mailto:alishabatool812@gmail.com" aria-label="Email Alisha"><Icon name="mail" /></a>
              </div>
            </div>
            <div className="hero-portrait"><PortraitPlaceholder /></div>
          </div>
          <div className="hero-meta">
            <div><span className="meta-label">CURRENTLY</span><strong>Exploring reliable AI agents</strong></div>
            <div><span className="meta-label">BASED IN</span><strong>Islamabad, PK <span className="remote">/ REMOTE</span></strong></div>
            <div><span className="meta-label">FOCUS</span><strong>AI Systems · Full Stack</strong></div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="about-grid">
            <div className="about-portrait"><PortraitPlaceholder candid /></div>
            <div className="about-content">
              <span className="eyebrow">01 / PROFILE</span>
              <h2>About Me</h2>
              <p className="about-lead">I&apos;m Alisha, a Software Engineering student at COMSATS University Islamabad, building at the intersection of intelligent systems and thoughtful product engineering.</p>
              <p>I care about the full journey from a promising model or architecture to software that is observable, dependable, and genuinely useful. My work blends applied AI research with strong backend foundations and precise frontend execution.</p>
              <div className="focus-list">
                <div><span>01</span><strong>Autonomous Agent Orchestration</strong><p>Coordinated, tool-using workflows with clear state and guardrails.</p></div>
                <div><span>02</span><strong>Quantized / RAG LLM Workflows</strong><p>Efficient retrieval systems grounded in trusted context.</p></div>
                <div><span>03</span><strong>Full-Stack Engineering</strong><p>Scalable services paired with fast, considered interfaces.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="work">
          <SectionTitle number="02" aside="Selected systems engineered for utility, reliability, and measurable impact.">Featured Architecture &amp; Projects</SectionTitle>
          <div className="featured-grid">
            <article className="project-card featured-card">
              <div className="project-number">FEATURED / 01</div>
              <AgentDiagram />
              <div className="project-content">
                <div className="project-title-row"><h3>AgentFlow</h3><span>2024</span></div>
                <p className="project-subtitle">AI Agent Orchestration Platform</p>
                <p className="project-description">A modular platform for composing, observing, and deploying collaborative AI agents across complex, tool-driven workflows.</p>
                {tags(["Python", "FastAPI", "Multi-Agent", "LLMs", "React"])}
                <div className="project-highlights">
                  <span><i /> Graph-based routing</span><span><i /> Traceable decisions</span><span><i /> Human checkpoints</span>
                </div>
                <div className="card-links"><a href="https://github.com" target="_blank" rel="noreferrer"><Icon name="github" /> Source</a><a href="#contact">Case Study <Icon name="arrow" /></a></div>
              </div>
            </article>

            <article className="project-card featured-card">
              <div className="project-number">FEATURED / 02</div>
              <TriageDiagram />
              <div className="project-content">
                <div className="project-title-row"><h3>Sehat Awaaz</h3><span>2024</span></div>
                <p className="project-subtitle">Multilingual AI Triage Assistant</p>
                <p className="project-description">A voice-first care navigation system that makes preliminary health guidance accessible across language and literacy barriers.</p>
                {tags(["AI/ML", "NLP", "Healthcare", "Python", "RAG"])}
                <div className="case-flow">
                  <div><span>PROBLEM</span><p>Language-fragmented access to care</p></div>
                  <div><span>SYSTEM</span><p>Speech + verified retrieval + triage</p></div>
                  <div><span>IMPACT</span><p>Clear, safety-aware next steps</p></div>
                </div>
                <div className="card-links"><a href="https://github.com" target="_blank" rel="noreferrer"><Icon name="github" /> Source</a><a href="#contact">Case Study <Icon name="arrow" /></a></div>
              </div>
            </article>
          </div>

          <div className="secondary-grid" />
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionTitle number="03" aside="A pragmatic stack selected for shipping dependable, intelligent products.">Technical Toolkit</SectionTitle>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.id}>
                  <div className="skill-icon"><Icon name="code" size={18} /></div>
                  <span className="skill-number">{group.id}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionTitle number="04" aside="A timeline of building, learning, and creating under real constraints.">Experience &amp; Milestones</SectionTitle>
          <div className="experience-layout">
            <div className="timeline">
              {timeline.map((item, index) => (
                <article className="timeline-item" key={item.date}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3><h4>{item.company}</h4><p>{item.copy}</p>
                    <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container">
            <SectionTitle number="05" aside="Formal foundations strengthened through continuous technical learning.">Education &amp; Recognitions</SectionTitle>
            <div className="education-layout">
              <aside className="education-card">
              <div className="education-top"><span>EDUCATION.LOG</span><span className="blinking-dot" /></div>
              <span className="degree-type">BACHELOR OF SCIENCE</span>
              <h3>Software Engineering</h3>
              <p>COMSATS University Islamabad</p>
              <div className="education-detail"><span>CORE</span><strong>Algorithms, AI, Distributed Systems</strong></div>
              <div className="education-detail"><span>STATUS</span><strong className="mint">Degree program</strong></div>
              <div className="recognition">
                <span>RECOGNITIONS</span>
                <ul><li>Merit-based academic standing</li><li>Academic scholarship recognition</li><li>National engineering competitions</li></ul>
              </div>
              </aside>
              <div className="certification-panel">
                <span className="eyebrow">CONTINUOUS LEARNING</span>
                <h3>Technical Certifications</h3>
                <div className="cert-list">
                  <div><span>01</span><p><strong>Applied Machine Learning</strong><small>Models, evaluation &amp; production workflows</small></p><i>VERIFIED</i></div>
                  <div><span>02</span><p><strong>Generative AI &amp; RAG Systems</strong><small>Grounded generation and agent frameworks</small></p><i>VERIFIED</i></div>
                  <div><span>03</span><p><strong>Full-Stack Web Engineering</strong><small>Modern frontend and backend architecture</small></p><i>VERIFIED</i></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">06 / INITIATE</span>
              <h2>Let&apos;s build something <span>exceptional.</span></h2>
              <p>Have a complex product, an ambitious AI idea, or an engineering challenge? I&apos;d love to hear what you&apos;re working on.</p>
              <a className="email-link" href="mailto:alishabatool812@gmail.com"><span><Icon name="mail" /></span><div><small>DIRECT EMAIL</small>alishabatool812@gmail.com</div><Icon name="arrow" /></a>
              <div className="social-row">
                <a href="https://github.com/Alisha-Batool" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
                <a href="http://linkedin.com/in/alisha-batool-9235ba293/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label><span>NAME</span><input name="name" placeholder="Your name" required /></label>
                <label><span>EMAIL</span><input name="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <label><span>MESSAGE</span><textarea name="message" placeholder="Tell me about your project, problem, or idea..." rows={6} required /></label>
              <button className="button button-primary submit-button" type="submit">Send Message <Icon name="arrow" /></button>
              <p className="form-note"><span className="status-dot" /> Typical response time: 1–2 business days</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div><span className="brand-bracket">[</span>ALISHA<span className="brand-bracket">]</span></div>
          <p>© 2025 Alisha. All rights reserved.</p>
          <p>Designed for precision. <span className="footer-cursor">_</span></p>
        </div>
      </footer>
    </div>
  );
}
