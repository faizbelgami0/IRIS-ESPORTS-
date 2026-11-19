const { useState, useEffect, useRef, useCallback } = React;

const NAV = [
  ["home", "Home"], ["about", "About"], ["teams", "Teams"], ["tournaments", "Tournaments"],
  ["news", "News"], ["partners", "Partners"], ["contact", "Contact"],
];

/* reveal-on-scroll for any .rv in the document */
function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".rv:not(.in), .path:not(.in)");
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

/* global spotlight cursor tracking */
function useSpotlight() {
  useEffect(() => {
    const h = (e) => {
      const t = e.target.closest && e.target.closest(".spot");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", e.clientX - r.left + "px");
      t.style.setProperty("--my", e.clientY - r.top + "px");
    };
    window.addEventListener("pointermove", h);
    return () => window.removeEventListener("pointermove", h);
  }, []);
}

function Ph({ label, style, className = "" }) {
  return <div className={"ph " + className} style={style}>{label && <span className="ph-l">{label}</span>}</div>;
}

function Arrow() { return <span className="ar">→</span>; }

function Nav({ page, go }) {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSc(window.scrollY > 30);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const nav = (p) => { setOpen(false); go(p); };
  return (
    <>
      <header className={"nav" + (sc ? " sc" : "")}>
        <div className="wrap nav-in">
          <a className="brand" onClick={() => nav("home")} style={{ cursor: "pointer" }}>
            <img src="IRISLogoWhiteShade.png" alt="IRIS Esports" />
            <b>IRIS<span></span>ESPORTS</b>
          </a>
          <nav className="nav-l">
            {NAV.map(([k, l]) => <a key={k} className={page === k ? "on" : ""} onClick={() => nav(k)}>{l.toUpperCase()}</a>)}
          </nav>
          <button className="btn btn-p clip-sm" onClick={() => nav("contact")}><span>Join IRIS</span></button>
          <button className={"burger" + (open ? " x" : "")} onClick={() => setOpen(!open)} aria-label="Menu"><i></i><i></i></button>
        </div>
      </header>
      <div className={"mob" + (open ? " open" : "")}>
        {NAV.map(([k, l], i) => <a key={k} className={page === k ? "on" : ""} onClick={() => nav(k)}><span className="mono" style={{ color: "var(--dim)", marginRight: 18, verticalAlign: "middle" }}>0{i + 1}</span>{l}</a>)}
      </div>
    </>
  );
}

function IrisEye() {
  const disc = useRef(null);
  const pupil = useRef(null);
  useEffect(() => {
    let raf, a = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    const mv = (e) => {
      const el = disc.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1, m = Math.min(d / 18, r.width * 0.07);
      tx = (dx / d) * m; ty = (dy / d) * m;
    };
    const loop = () => {
      a += 0.06; cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      if (disc.current) disc.current.style.transform = `translate(${cx}px,${cy}px) rotate(${a}deg)`;
      if (pupil.current) pupil.current.style.transform = `translate(${cx * 1.4}px,${cy * 1.4}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", mv); loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", mv); };
  }, []);
  const txt = "Identify · Develop · Empower · Compete · Identify · Develop · Empower · Compete · ";
  return (
    <div className="iris">
      <div className="ir-ticks"></div>
      <div className="ir-arc"></div>
      <div className="ir-dash"></div>
      <div className="ir-text">
        <svg viewBox="0 0 300 300"><defs><path id="cp" d="M150,150 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" /></defs>
          <text><textPath href="#cp">{txt}</textPath></text></svg>
      </div>
      <div className="ir-disc" ref={disc}></div>
      <div className="ir-pupil" ref={pupil}></div>
      <span className="ir-lbl" style={{ left: "2%", top: "8%" }}>[ SCAN ] <b>TALENT</b></span>
      <span className="ir-lbl" style={{ right: "0%", bottom: "10%" }}>LOCK-ON <b>●</b> INDIA</span>
    </div>
  );
}

function Marquee({ items, dark }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={"mq" + (dark ? " dark" : "")}>
      <div className="mq-t">{row.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

function PageHead({ idx, kick, title, lead, meta }) {
  return (
    <section className="ph-hd">
      <div className="hero-grid"></div>
      <div className="wrap" style={{ position: "relative" }}>
        <div className="mono crumb fadein">IRIS / <b>{kick}</b></div>
        <h1 className="disp fadein" style={{ animationDelay: ".1s" }}>{title}</h1>
        {lead && <p className="lead fadein" style={{ animationDelay: ".25s" }}>{lead}</p>}
      </div>
      <div className="bg-n">{idx}<br />{meta}</div>
    </section>
  );
}

function Drawer({ open, onClose, children }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <>
      <div className={"ov" + (open ? " open" : "")} onClick={onClose}></div>
      <aside className={"drw" + (open ? " open" : "")}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        {children}
      </aside>
    </>
  );
}

let _toast = () => {};
function Toast() {
  const [m, setM] = useState(""); const [on, setOn] = useState(false);
  useEffect(() => { let t; _toast = (s) => { setM(s); setOn(true); clearTimeout(t); t = setTimeout(() => setOn(false), 2600); }; }, []);
  return <div className={"toast" + (on ? " on" : "")}>{m}</div>;
}
const toast = (s) => _toast(s);

function StatusTag({ s }) {
  const map = { upcoming: ["up", "Upcoming"], ongoing: ["live", "Live"], completed: ["done", "Completed"] };
  const [c, l] = map[s];
  return <span className={"tag " + c}>{l}</span>;
}

function gameLabel(k) {
  if (k === "iris") return "IRIS Cup";
  if (k === "multi") return "Multi-title";
  const g = window.IRIS.games.find((x) => x.key === k);
  return g ? (g.short || g.name) : k;
}

function Footer({ go }) {
  const [email, setEmail] = useState("");
  const D = window.IRIS;
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div>
            <div className="brand"><img src="assets/iris-logo.png" alt="" /><b>IRIS<span>·</span>ESPORTS</b></div>
            <p className="muted" style={{ marginTop: 20, maxWidth: 380, fontSize: 18 }}>Built to compete. Born to conquer. A multi-title Indian esports organization backing the underdog.</p>
            <form className="nl" onSubmit={(e) => { e.preventDefault(); if (email) { toast("You're on the list"); setEmail(""); } }}>
              <input type="email" placeholder="Email for drops & roster reveals" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button>SUBSCRIBE</button>
            </form>
          </div>
          <div><h5>Explore</h5><ul>{NAV.slice(0, 4).map(([k, l]) => <li key={k}><a onClick={() => go(k)}>{l}</a></li>)}</ul></div>
          <div><h5>Organization</h5><ul>{NAV.slice(4).map(([k, l]) => <li key={k}><a onClick={() => go(k)}>{l}</a></li>)}</ul></div>
          <div><h5>Divisions</h5><ul>{D.games.map((g) => <li key={g.key}><a onClick={() => go("teams", g.key)}>{g.short || g.name}</a></li>)}</ul></div>
        </div>
        <div className="ft-word">IRIS ESPORTS</div>
        <div className="ft-bot">
          <span className="mono">© 2026 IRIS Esports · India</span>
          <div className="soc">{D.socials.map((s) => <a key={s} href="#" onClick={(e) => e.preventDefault()}>{s}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, useSpotlight, Ph, Arrow, Nav, IrisEye, Marquee, PageHead, Drawer, Toast, toast, StatusTag, gameLabel, Footer, NAV });
