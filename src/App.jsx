 
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Menu,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbggonkr";

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Turn repetitive work into intelligent workflows with practical AI integrations and automation systems.",
    tags: ["AI integration", "Workflow automation"],
  },
  {
    number: "02",
    icon: Blocks,
    title: "Blockchain Solutions",
    description:
      "Explore smart contracts and blockchain applications designed around your product and business needs.",
    tags: ["Smart contracts", "Web3"],
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Build a more reliable technology foundation with cloud configuration, deployment workflows and infrastructure support.",
    tags: ["Microsoft Azure", "CI/CD"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Security-Focused Technology",
    description:
      "Bring security considerations into application design, technical workflows and system planning.",
    tags: ["Secure development", "Risk awareness"],
  },
  {
    number: "05",
    icon: Code2,
    title: "Web & Software",
    description:
      "Develop modern digital experiences and tailored software solutions for emerging business needs.",
    tags: ["Web applications", "Integrations"],
  },
  {
    number: "06",
    icon: Zap,
    title: "Technical Consulting",
    description:
      "Identify practical technology opportunities and map a clear path from an idea to a working prototype.",
    tags: ["Solution planning", "Prototyping"],
  },
];

const principles = [
  [
    "01",
    "Start with the problem",
    "Understand the business challenge before choosing the technology.",
  ],
  [
    "02",
    "Build with purpose",
    "Focus on useful, maintainable solutions rather than complexity for its own sake.",
  ],
  [
    "03",
    "Think about security",
    "Consider reliability, access and security throughout the development process.",
  ],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "AI & Automation",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");

  const closeMenu = () => setMenuOpen(false);

  function updateField(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (formStatus !== "sending") {
      setFormStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formStatus === "sending") return;

    setFormStatus("sending");

    const data = new FormData();
    data.set("name", form.name.trim());
    data.set("email", form.email.trim());
    data.set("service", form.service);
    data.set("message", form.message.trim());
    data.set(
      "_subject",
      `Madriq BlockProp enquiry — ${form.service}`
    );

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission was not accepted.");
      }

      setForm({
        name: "",
        email: "",
        service: "AI & Automation",
        message: "",
      });

      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Madriq BlockProp home"
        >
          <span className="brand-mark">
            <Blocks size={23} />
          </span>
          <span className="brand-name">
            MADRIQ <strong>BLOCKPROP</strong>
            <small>INTELLIGENT TECHNOLOGY</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
        >
          {[
            ["Home", "#home"],
            ["Services", "#services"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              INDEPENDENT TECHNOLOGY & INNOVATION
            </div>

            <h1>
              Make technology
              <br />
              work <span className="gradient-text">smarter.</span>
            </h1>

            <p className="hero-description">
              Practical AI. Thoughtful engineering. New possibilities.
              We explore and build digital solutions that help businesses
              move forward with confidence.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#services">
                Explore our services <ArrowRight size={17} />
              </a>
              <a className="button-quiet" href="#about">
                Discover Madriq <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="hero-footnote">
              <span>
                <CheckCircle2 size={15} /> Built around your needs
              </span>
              <span>
                <CheckCircle2 size={15} /> Security-minded approach
              </span>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Abstract digital network artwork"
          >
            <div className="art-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="art-core">
              <div className="core-inner">
                <BrainCircuit size={65} strokeWidth={1.15} />
              </div>
            </div>

            <div className="floating-chip chip-ai">
              <BrainCircuit size={17} />
              <span>AI SYSTEMS</span>
            </div>
            <div className="floating-chip chip-chain">
              <Blocks size={17} />
              <span>BLOCKCHAIN</span>
            </div>
            <div className="floating-chip chip-cloud">
              <Cloud size={17} />
              <span>CLOUD</span>
            </div>

            <div className="art-caption">
              IDEAS INTO DIGITAL SOLUTIONS <span>✳</span>
            </div>
          </div>

          <a className="scroll-cue" href="#services">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-band">
          <div className="section-wrap intro-inner">
            <p>THE NEXT STEP ISN'T MORE TECHNOLOGY.</p>
            <h2>
              It's the <span className="gradient-text">right technology.</span>
            </h2>
            <span className="intro-line" />
            <p className="intro-note">
              From early-stage ideas to established operations, find a practical
              way to bring your next digital project to life.
            </p>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2>
                Technology built for{" "}
                <span className="gradient-text">what's next.</span>
              </h2>
            </div>
            <p>
              Explore a range of technology services that can be shaped around
              your goals, resources and stage of growth.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="card-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon">
                      <Icon size={23} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="tag-list">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="card-link"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Discuss a project <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-visual">
              <div className="about-grid-lines" />
              <div className="about-orb">
                <Blocks size={66} strokeWidth={1} />
              </div>
              <div className="about-label label-top">
                IDEAS <span>→</span> ENGINEERING
              </div>
              <div className="about-label label-bottom">
                <span className="status-dot" /> A PRACTICAL APPROACH TO
                INNOVATION
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">ABOUT MADRIQ BLOCKPROP</span>
              <h2>
                Big ideas deserve{" "}
                <span className="gradient-text">solid foundations.</span>
              </h2>
              <p>
                Madriq BlockProp is a technology brand focused on exploring
                practical solutions across AI, blockchain, cloud infrastructure
                and modern software.
              </p>
              <p>
                Our approach starts with understanding the challenge, choosing
                the right tools and creating a clear path toward a useful
                outcome. We believe emerging technology should solve real
                problems—not add unnecessary complexity.
              </p>
              <a className="button-primary" href="#contact">
                Start a conversation <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="section-wrap principles">
            {principles.map(([number, title, description]) => (
              <article className="principle" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let's build something{" "}
              <span className="gradient-text">meaningful.</span>
            </h2>
            <p>
              Tell us what you're working on, what you'd like to improve,
              or which technology you'd like to explore. Start with a simple
              project enquiry.
            </p>

            <div className="contact-note">
              <span className="note-icon">
                <ArrowRight size={18} />
              </span>
              <span>
                <strong>No idea is too early to discuss.</strong>
                <br />
                Share your goals and outline your next step.
              </span>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-busy={formStatus === "sending"}
          >
            <div className="form-heading">
              <span>PROJECT ENQUIRY</span>
              <span className="form-indicator">
                <span className="status-dot" /> GET STARTED
              </span>
            </div>

            <label>
              Your name
              <input
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="How should we address you?"
                disabled={formStatus === "sending"}
              />
            </label>

            <label>
              Email address
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                disabled={formStatus === "sending"}
              />
            </label>

            <label>
              What are you interested in?
              <select
                name="service"
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                disabled={formStatus === "sending"}
              >
                {services.map((service) => (
                  <option key={service.number} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </label>

            <label>
              Tell us about your project
              <textarea
                name="message"
                required
                rows="4"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="What would you like to build or improve?"
                disabled={formStatus === "sending"}
              />
            </label>

            <button
              className="button-primary submit-button"
              type="submit"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending"
                ? "Sending enquiry..."
                : "Send enquiry"}
              <ArrowRight size={17} />
            </button>

            <div className="form-disclaimer" aria-live="polite">
              {formStatus === "success" && (
                <p role="status">
                  Thank you! Formspree accepted your enquiry. Please check the
                  form dashboard to confirm it was received.
                </p>
              )}

              {formStatus === "error" && (
                <p role="alert">
                  We couldn't submit your enquiry. Please try again. If the
                  problem continues, check your Formspree form settings.
                </p>
              )}

              {formStatus === "sending" && (
                <p role="status">Submitting your enquiry securely...</p>
              )}

              {formStatus === "idle" && (
                <p>
                  Your enquiry will be submitted through our online form
                  provider.
                </p>
              )}
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <Blocks size={21} />
            </span>
            <span className="brand-name">
              MADRIQ <strong>BLOCKPROP</strong>
              <small>INTELLIGENT TECHNOLOGY</small>
            </span>
          </a>

          <p>Practical technology. Thoughtful innovation.</p>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Madriq BlockProp</span>
            <a href="#home">Back to top ↑</a>
            <span>AI · BLOCKCHAIN · CLOUD</span>
          </div>
        </div>
      </footer>
    </>
  );
}
