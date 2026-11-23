 "use client";

import { useMemo, useState } from "react";
import { Search, ChevronRight, ShieldCheck, Zap, Globe2, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { categories, tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function HomeClient() {
  const [active, setActive] = useState<string>("All Tools");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleTools = useMemo(() => tools.filter((tool) => {
    const categoryMatch = active === "All Tools" || tool.category === active;
    const q = query.trim().toLowerCase();
    const searchMatch = !q || `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  }), [active, query]);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="PDF Point home">
            <span className="brand-mark"><span /></span>
            <span>PDF <b>Point</b></span>
          </Link>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-inner">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR DOCUMENT WORKSPACE</span>
            <h1>PDF Work<br /><span>Made Easy.</span></h1>
            <p className="hero-subtitle">All your PDF tools in one place.</p>
            <div className="search-shell">
              <Search size={22} />
              <input
                aria-label="Search PDF tools"
                placeholder="What would you like to do with your PDF?"
                value={query}
                onChange={(event) => { setQuery(event.target.value); setActive("All Tools"); }}
              />
              <span className="search-hint">22 TOOLS</span>
            </div>
            <div className="hero-footnote"><ShieldCheck size={15} /> Simple tools. Clear workflows. Built with privacy in mind.</div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="tools-section" id="tools">
          <div className="container">
            <div className="category-scroller" aria-label="Tool categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-pill ${active === category ? "active" : ""}`}
                  onClick={() => setActive(category)}
                  aria-pressed={active === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="section-heading">
              <div>
                <span className="section-kicker">THE TOOLKIT</span>
                <h2>{active === "All Tools" ? "All PDF Tools" : active}</h2>
                <p>Everything you need to work with documents, in one simple place.</p>
              </div>
              <span className="tool-count">{visibleTools.length} {visibleTools.length === 1 ? "tool" : "tools"}</span>
            </div>

            {visibleTools.length ? (
              <div className="tools-grid">
                {visibleTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
              </div>
            ) : (
              <div className="empty-state">No tools match “{query}”. Try another search.</div>
            )}
          </div>
        </section>

        <section className="popular-section">
          <div className="container">
            <div className="section-heading compact">
              <div><span className="section-kicker">GET STARTED</span><h2>Popular tools</h2></div>
            </div>
            <div className="popular-grid">
              {["merge-pdf", "compress-pdf", "pdf-to-word", "jpg-to-pdf"].map((slug) => {
                const tool = tools.find((item) => item.slug === slug)!;
                return <Link href={`/${tool.slug}`} className="popular-link" key={slug}><span>{tool.name}</span><ArrowRight size={17} /></Link>;
              })}
            </div>
          </div>
        </section>

        <section className="why-section" id="about">
          <div className="container why-layout">
            <div className="why-copy">
              <span className="section-kicker">WHY PDF POINT</span>
              <h2>Make document work feel effortless.</h2>
              <p>PDF Point brings everyday document tasks into a clear, approachable workspace. Find the tool you need, understand what it does, and follow a straightforward workflow.</p>
            </div>
            <div className="benefit-grid">
              <article className="benefit"><span><Zap size={20} /></span><h3>Simple by design</h3><p>Focused tools with clear steps and no unnecessary clutter.</p></article>
              <article className="benefit"><span><ShieldCheck size={20} /></span><h3>Privacy-conscious</h3><p>We are building secure document handling into the platform from the start.</p></article>
              <article className="benefit"><span><Globe2 size={20} /></span><h3>Made for everyone</h3><p>A responsive experience with international languages planned.</p></article>
              <article className="benefit"><span><ChevronRight size={20} /></span><h3>One useful place</h3><p>Twenty-two focused tools organized around everyday PDF tasks.</p></article>
            </div>
          </div>
        </section>

        <section className="how-section">
          <div className="container">
            <div className="section-heading centered"><div><span className="section-kicker">A CLEAR WORKFLOW</span><h2>How it works</h2><p>Three simple steps to get started.</p></div></div>
            <div className="steps-grid">
              <article><span className="step-number">01</span><h3>Choose a tool</h3><p>Search or browse the categories to find the right tool.</p></article>
              <article><span className="step-number">02</span><h3>Add your file</h3><p>Follow the tool’s instructions and select a supported document.</p></article>
              <article><span className="step-number">03</span><h3>Get your result</h3><p>Download your processed file when the tool is available.</p></article>
            </div>
            <p className="phase-note">PDF processing is being implemented in stages. Tool pages currently explain the planned workflow and do not claim to process files yet.</p>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-layout">
            <div><span className="section-kicker">GOOD TO KNOW</span><h2>Frequently asked questions</h2></div>
            <div className="faq-list">
              <details><summary>Is PDF Point free to use?</summary><p>The initial platform is being developed around a useful free experience. Any future paid features will be clearly identified.</p></details>
              <details><summary>Are my documents uploaded right now?</summary><p>No document-processing backend is connected in this initial foundation. Do not upload sensitive files to this development version.</p></details>
              <details><summary>Which tools are planned?</summary><p>PDF Point is planned to launch with 20 PDF tools and two QR code tools, each with its own page.</p></details>
              <details><summary>Will PDF Point support other languages?</summary><p>Yes. English is the first language, with Urdu, Hindi, Brazilian Portuguese and Bengali planned for later releases.</p></details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand brand-light"><span className="brand-mark"><span /></span><span>PDF <b>Point</b></span></Link>
            <p>PDF Work Made Easy.</p>
            <span className="footer-small">A clearer way to work with documents.</span>
          </div>
          <div className="footer-links"><h3>Explore</h3><a href="#tools">All Tools</a><a href="#about">About Us</a><a href="mailto:hello@pdfpoint.example">Contact</a></div>
          <div className="footer-links"><h3>Information</h3><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} PDF Point. All rights reserved.</span><span>PDF Work Made Easy.</span></div>
      </footer>
    </>
  );
}
