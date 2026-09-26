import Link from "next/link";

const Arrow = () => <span aria-hidden="true" className="arrow-icon">↗</span>;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="FarmFit home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
      <span>farmfit<span className="brand-dot">.</span></span>
    </Link>
  );
}

function Landscape() {
  return (
    <div className="landscape-card" aria-label="Illustration of a farm divided into crop and production areas" role="img">
      <div className="landscape-meta"><span><i className="live-dot" /> DECISION CANVAS</span><span>QATAR / 25°N</span></div>
      <svg viewBox="0 0 780 570" className="landscape-svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="#cdd3bf" strokeWidth=".8" /></pattern>
          <pattern id="rows" width="13" height="13" patternUnits="userSpaceOnUse"><path d="M 0 0 L 0 13" stroke="#afd687" strokeWidth="2" /></pattern>
          <clipPath id="land"><path d="M115 87 L503 55 L694 171 L653 469 L409 517 L105 397 Z" /></clipPath>
        </defs>
        <rect width="780" height="570" fill="#e6e9dc" />
        <rect width="780" height="570" fill="url(#grid)" />
        <path d="M-30 480 C160 438 181 518 356 540 S616 536 800 497" fill="none" stroke="#cad2c6" strokeWidth="23" />
        <path d="M46 -20 C68 154 41 215 -40 284" fill="none" stroke="#cad2c6" strokeWidth="13" />
        <g clipPath="url(#land)">
          <path d="M0 0 H425 V320 H0 Z" fill="#afce95" />
          <path d="M0 0 H425 V320 H0 Z" fill="url(#rows)" opacity=".65" />
          <path d="M425 0 H800 V303 H425 Z" fill="#477a62" />
          <path d="M440 0 V303 M465 0 V303 M490 0 V303 M515 0 V303 M540 0 V303 M565 0 V303 M590 0 V303 M615 0 V303 M640 0 V303 M665 0 V303 M690 0 V303 M715 0 V303" stroke="#81a991" strokeWidth="9" opacity=".5" />
          <path d="M0 318 H790 V600 H0 Z" fill="#d4bd8c" />
          <path d="M0 318 H790 V600 H0 Z" fill="url(#rows)" opacity=".3" />
          <path d="M415 0 V330 H800 M0 325 H800" fill="none" stroke="#f7f5eb" strokeWidth="18" />
        </g>
        <path d="M115 87 L503 55 L694 171 L653 469 L409 517 L105 397 Z" fill="none" stroke="#244b3c" strokeWidth="5" strokeLinejoin="round" />
        <circle cx="115" cy="87" r="7" fill="#faf9f1" stroke="#244b3c" strokeWidth="3" />
        <circle cx="694" cy="171" r="7" fill="#faf9f1" stroke="#244b3c" strokeWidth="3" />
        <circle cx="409" cy="517" r="7" fill="#faf9f1" stroke="#244b3c" strokeWidth="3" />
        <g fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.3">
          <rect x="178" y="185" width="168" height="45" rx="22" fill="#f7f5eb" /><text x="198" y="213" fill="#244b3c">01 / OPEN FIELD</text>
          <rect x="477" y="177" width="171" height="45" rx="22" fill="#f7f5eb" /><text x="499" y="205" fill="#244b3c">02 / GREENHOUSE</text>
          <rect x="233" y="392" width="165" height="45" rx="22" fill="#f7f5eb" /><text x="252" y="420" fill="#244b3c">03 / RESERVE</text>
        </g>
      </svg>
      <div className="landscape-footer"><span>Illustrative allocation</span><span>Actual plans use selected cadastral plots <Arrow /></span></div>
      <div className="float-note"><span className="eyebrow">DESIGNED FOR REAL CONSTRAINTS</span><strong>Every square metre<br />has a reason.</strong></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header-inner"><Brand /><nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#method">The method</a><a href="https://github.com/ammarfariss/farmfit" target="_blank" rel="noreferrer">Open source <Arrow /></a></nav><Link href="/planner" className="header-cta">Open the planner <Arrow /></Link></div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><div className="hero-kicker"><span className="kicker-line" /> AGRICULTURAL DECISION INTELLIGENCE / QATAR</div><h1 id="hero-title">A better future<br />starts <em>on the land.</em></h1><p className="hero-lede">Know what your land can support. Explore crops and growing systems against your real water, energy and investment limits—then see the plan take shape inside your plot.</p><div className="hero-actions"><Link className="action-primary" href="/planner">Plan your farm <Arrow /></Link><a className="action-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div><div className="hero-proof"><span className="proof-icon" aria-hidden="true">✳</span><p>Built with official cadastral boundaries and traceable open data.<br /><strong>No imaginary plots. No invented inputs.</strong></p></div></div>
          <div className="hero-visual"><Landscape /></div>
        </section>

        <div className="signal-bar" aria-label="Product capabilities"><span>ONE REAL PLOT</span><span className="signal-cross">✳</span><span>YOUR ACTUAL LIMITS</span><span className="signal-cross">✳</span><span>AN EXPLAINABLE PLAN</span><span className="signal-cross">✳</span><span>OPEN SOURCE</span></div>

        <section className="story-section" id="how-it-works"><div className="section-intro"><span className="section-label">01 / THE WORKFLOW</span><h2>From a boundary<br />to a <em>better decision.</em></h2><p>FarmFit connects the decisions that usually live in separate spreadsheets, reports and maps. Start with land; leave with a plan you can question and refine.</p></div><div className="step-grid"><article className="step-card"><span className="step-index">01 <span>↗</span></span><div className="step-glyph glyph-boundary" aria-hidden="true"><span /></div><h3>Choose your land</h3><p>Select one or more real Qatar cadastral plots. FarmFit uses the official boundary and registered area as the starting point.</p></article><article className="step-card"><span className="step-index">02 <span>↗</span></span><div className="step-glyph glyph-layers" aria-hidden="true"><span /><span /><span /></div><h3>Set what matters</h3><p>Choose crops and production systems, then enter your budget, water, electricity and expected selling prices.</p></article><article className="step-card"><span className="step-index">03 <span>↗</span></span><div className="step-glyph glyph-chart" aria-hidden="true"><span /><span /><span /><span /></div><h3>Explore your plan</h3><p>See a feasible portfolio, resource use, projected finances and the constraint that limits further expansion.</p></article></div></section>

        <section className="principle-section" id="method"><div className="principle-copy"><span className="section-label light-label">02 / THE PRINCIPLE</span><h2>Clarity is a<br /><em>competitive advantage.</em></h2><p>Every important input has a status. We show what came from an official dataset, what came from a scientific model, what you supplied and what remains an estimate.</p><p>When a required figure cannot be supported, FarmFit flags it and excludes the affected option. The result stays inspectable from source to decision.</p><Link href="/planner" className="text-link">Explore the planner <Arrow /></Link></div><div className="principle-stack"><div className="source-card"><span className="source-symbol">◉</span><div><strong>Verified</strong><span>Qatar cadastral data, climate and soil sources</span></div><span className="source-indicator">SOURCED</span></div><div className="source-card"><span className="source-symbol">◇</span><div><strong>Provided by you</strong><span>Budget, resource limits and selling prices</span></div><span className="source-indicator">INPUT</span></div><div className="source-card"><span className="source-symbol">△</span><div><strong>Estimate or unavailable</strong><span>Clearly labelled assumptions or excluded options</span></div><span className="source-indicator">VISIBLE</span></div></div></section>

        <section className="technology-section"><div><span className="section-label">03 / BUILT IN THE OPEN</span><h2>Rigorous beneath.<br /><em>Useful on the surface.</em></h2></div><div className="technology-copy"><p>FarmFit combines Qatar cadastral and agricultural data with NASA POWER, SoilGrids, FAO AquaCrop where supported, and OR-Tools optimization. The calculation is mathematical optimization, with assumptions and limitations visible to the user.</p><div className="tech-tags"><span>Qatar cadastre</span><span>NASA POWER</span><span>SoilGrids</span><span>FAO AquaCrop</span><span>Google OR-Tools</span><span>MIT licensed</span></div><a className="text-link dark-link" href="https://github.com/ammarfariss/farmfit" target="_blank" rel="noreferrer">Explore the source code <Arrow /></a></div></section>

        <section className="final-cta"><div><span className="section-label light-label">MAKE THE NEXT DECISION COUNT</span><h2>Put your land<br /><em>in perspective.</em></h2></div><Link href="/planner" className="action-primary final-button">Launch FarmFit <Arrow /></Link></section>
      </main>
      <footer className="site-footer"><Brand light /><span>Evidence-led planning for water-scarce agriculture.</span><span>Open source · Built for Qatar</span></footer>
    </div>
  );
}
