function Manifesto() {
  const ref = useRef(null);
  // const words = "India has the talent. The world deserves to see it.IRIS Esports is on a mission to nurture talent, build world-class competitors and establish India's presence among the best in global esports..".split(" ");
  // const flame = new Set(["talent.", "iris esports.", "India's.", "competitors,", "best."]);
  const words = "India has the talent. The world deserves to see it. IRIS Esports is on a mission to nurture talent, build world-class competitors, and establish India's presence among the best in global esports.".split(" ");

const flame = new Set(["talent.", "it.", "competitors,", "India's", "esports."]);
  const [lit, setLit] = useState(0);
  useEffect(() => {
    const f = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
      setLit(Math.round(p * words.length * 1.15));
    };
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <p className="mani" ref={ref}>
      {words.map((w, i) => <span key={i} className={"w" + (i < lit ? " on" : "") + (flame.has(w) ? " f" : "")}>{w} </span>)}
    </p>
  );
}

function Divisions({ go }) {
  const G = window.IRIS.games;
  const [on, setOn] = useState(0);
  return (
    <div className="div-acc">
      {G.map((g, i) => (
        <div key={g.key} className={"dv spot" + (on === i ? " on" : "")} style={{ "--ac": g.ac }} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)}>
          <Ph label={`${g.name} key art`} />
          <div className="shade"></div>
          <i className="acc"></i>
          <span className="dv-n">0{i + 1} / 04</span>
          <span className="dv-v">{g.short || g.name}</span>
          <div className="dv-c">
            <h3>{g.name}</h3>
            <div className="mono pub">{g.full} · {g.pub} · {g.size}-stack</div>
            <p>{g.over}</p>
            <button className="btn btn-p clip-sm" onClick={(e) => { e.stopPropagation(); go("teams", g.key); }}><span>View Division</span><Arrow /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

function HomePage({ go, openT, openN }) {
  const D = window.IRIS;
  const cup = D.tournaments[0];
  const rest = D.tournaments.filter((t) => t.status !== "completed").slice(1, 4);
  return (
    <>
      <section className="hero" data-screen-label="Home Hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="wrap hero-main">
          <div>
            <div className="kick fadein">Multi-title esports · India</div>
            <h1 className="disp" style={{ marginTop: 26 }}>
              <span className="ln"><span style={{ animationDelay: ".15s" }}>Rise.</span></span>
              <span className="ln"><span className="fl" style={{ animationDelay: ".25s" }}>Conquer.</span></span>
              <span className="ln"><span className="outline" style={{ animationDelay: ".45s" }}>Dominate.</span></span>
            </h1>
            <div className="hero-sub fadein" style={{ animationDelay: ".75s" }}>
              <p>One organization. Four battlegrounds. A pathway for the talent nobody else is watching.</p>
            </div>
            <div className="hero-cta fadein" style={{ animationDelay: ".9s" }}>
              <button className="btn btn-p clip" onClick={() => go("teams")}><span>Explore Teams</span><Arrow /></button>
              <button className="btn btn-g clip" onClick={() => go("partners")}>Partner With Us</button>
            </div>
          </div>
          <div className="hero-iris fadein" style={{ animationDelay: ".4s" }}><IrisEye /></div>
        </div>
        <div className="wrap" style={{ padding: 0, maxWidth: "none" }}>
          <div className="hero-foot fadein" style={{ animationDelay: "1.1s" }}>
            {D.games.map((g, i) => (
              <a key={g.key} onClick={() => go("teams", g.key)}><span className="mono" style={{ color: "var(--dim)" }}>0{i + 1}</span><b>{g.short || g.name}</b></a>
            ))}
            <div className="sc mono"><i></i>Scroll</div>
          </div>
        </div>
      </section>

      <div style={{ position: "relative", overflow: "hidden", paddingBlock: 30 }}>
        <Marquee items={["Identify", "Develop", "Empower", "Compete", "Conquer"]} />
        <Marquee dark items={["BGMI", "Call of Duty", "VALORANT", "Free Fire", "IRIS Cup"]} />
      </div>

      <section className="sec" data-screen-label="Manifesto">
        <div className="wrap">
          <div className="kick rv" style={{ marginBottom: 40 }}>The IRIS Manifesto</div>
          <Manifesto />
          <div className="mani-meta">
            {[["Identify", "Scout raw talent from open qualifiers, community scrims and grassroots LANs."],
              ["Develop", "Coaching, VOD review, structured scrims and a culture of accountability."],
              ["Empower", "Exposure, contracts, content and a stage — the support underdogs never get."]].map(([t, p], i) => (
              <div key={t} className={"rv d" + (i + 1)}><span className="mono fl">0{i + 1}</span><b>{t}</b><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec coal" data-screen-label="Divisions">
        <div className="wrap">
          <div className="sec-h">
            <div><div className="kick rv">Our Divisions</div><h2 className="h2 rv d1">Four titles.<br /><span className="fl">One standard.</span></h2></div>
            <p className="lead rv d2" style={{ maxWidth: 420 }}>Every division is built to win, every player developed to dominate. Hover to open a division.</p>
          </div>
          <div className="rv d2"><Divisions go={go} /></div>
        </div>
      </section>

      <section className="sec" data-screen-label="Mission Vision">
        <div className="wrap">
          <div className="mv rv">
            <div><span className="big">M</span><div className="kick">Mission</div><h3 className="h3">Back the underdog.</h3>
              <p>Identify, develop and empower talented gamers who lack the platform, exposure and support to show what they can do.</p></div>
            <div><span className="big">V</span><div className="kick">Vision</div><h3 className="h3">Build a recognized Indian force.</h3>
              <p>Competitive teams, real opportunities for emerging talent, tournaments of our own, and partnerships that move the ecosystem forward.</p></div>
          </div>
        </div>
      </section>

      <section className="sec coal" data-screen-label="Pathway" style={{ paddingTop: 120 }}>
        <div className="wrap">
          <div className="sec-h">
            <div><div className="kick rv">The Underdog Pathway</div><h2 className="h2 rv d1">From open lobby<br />to <span className="fl">main stage.</span></h2></div>
            <button className="btn btn-g clip rv d2" onClick={() => go("contact")}>Apply for Trials <Arrow /></button>
          </div>
          <div className="path">
            <i className="path-bar"></i>
            {[["Compete", "Enter IRIS community scrims and open qualifiers. Every match is a tryout."],
              ["Get Scouted", "Our analysts track performance, comms and consistency across every event."],
              ["Trial", "Structured trials with coaching staff. Attitude weighs as much as aim."],
              ["Sign", "Join an IRIS roster with training, support, content and a real competitive calendar."]].map(([t, p], i) => (
              <div className={"st rv d" + (i + 1)} key={t}><div className="num">0{i + 1}</div><h4>{t}</h4><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" data-screen-label="Tournaments">
        <div className="wrap">
          <div className="sec-h">
            <div><div className="kick rv">Tournaments</div><h2 className="h2 rv d1">Our stage.<br /><span className="outline">Your shot.</span></h2></div>
            <a className="lnk rv d2" onClick={() => go("tournaments")} style={{ cursor: "pointer" }}>All Tournaments →</a>
          </div>
          <div className="tr-feat">
            <div className="cup spot rv" onClick={() => openT(cup)} style={{ cursor: "pointer" }}>
              <div className="ring"></div>
              <div style={{ position: "relative", display: "flex", gap: 8 }}><StatusTag s={cup.status} /><span className="tag">Hosted by IRIS</span></div>
              <div style={{ position: "relative" }}>
                <div className="mono fl" style={{ marginBottom: 14 }}>Flagship series</div>
                <h3>IRIS Cup<br /><span className="outline">Season 01</span></h3>
              </div>
              <div className="cup-meta">
                <div><span className="mono muted">Prize Pool</span><b>{cup.prize}</b></div>
                <div><span className="mono muted">Format</span><b>Open</b></div>
                <div><span className="mono muted">Registration</span><b>Soon</b></div>
              </div>
            </div>
            <div className="tr-list">
              {rest.map((t, i) => (
                <div key={t.id} className={"tr-row rv d" + (i + 1)} onClick={() => openT(t)}>
                  <div><div style={{ display: "flex", gap: 8 }}><StatusTag s={t.status} /><span className="tag">{gameLabel(t.game)}</span></div><h4>{t.name}</h4>
                    <div className="mono muted" style={{ marginTop: 10 }}>{t.date} · {t.loc}</div></div>
                  <span className="arr">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec coal" data-screen-label="News">
        <div className="wrap">
          <div className="sec-h">
            <div><div className="kick rv">Newsroom</div><h2 className="h2 rv d1">Latest from <span className="fl">IRIS</span></h2></div>
            <a className="lnk rv d2" onClick={() => go("news")} style={{ cursor: "pointer" }}>All News →</a>
          </div>
          <div className="nw-grid">
            {D.news.slice(0, 3).map((n, i) => (
              <article key={n.id} className={"nw rv d" + (i + 1)} onClick={() => openN(n)}>
                <div className="im"><Ph label={`${n.cat} cover`} /></div>
                <div className="nw-b"><div className="nw-m mono"><span className="c">{n.cat}</span><span>{n.date}</span></div><h4>{n.title}</h4><p>{n.ex}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" data-screen-label="Partners">
        <div className="wrap">
          <div className="pt">
            <div>
              <div className="kick rv">Partnerships</div>
              <h2 className="h2 rv d1" style={{ marginTop: 20 }}>Grow with<br />the <span className="fl">next wave.</span></h2>
              <p className="lead rv d2" style={{ marginTop: 28 }}>Put your brand alongside India's hungriest competitive talent — across four titles, community tournaments and original content.</p>
              <div className="rv d3" style={{ marginTop: 36 }}><button className="btn btn-p clip" onClick={() => go("partners")}><span>Become a Partner</span><Arrow /></button></div>
            </div>
            <div className="tiers rv d2">
              {D.tiers.map((t, i) => (
                <div key={t} className="tier" onClick={() => go("partners")}><span className="mono">{String(i + 1).padStart(2, "0")}</span><b>{t}</b><span className="ar">→</span></div>
              ))}
            </div>
          </div>
          <div className="slots rv">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="slot">PARTNER LOGO</div>)}
          </div>
        </div>
      </section>

      <JoinCTA go={go} />
    </>
  );
}

function JoinCTA({ go }) {
  return (
    <section className="join" data-screen-label="Join CTA">
      <div className="eye"></div>
      <div className="wrap">
        <div className="mono" style={{ fontWeight: 600 }}>● Recruitment open — all four titles</div>
        <h2 style={{ marginTop: 26 }}>Nobody's watching?<br />We are.</h2>
        <div className="row">
          <p>Trials, scrims and open qualifiers run year-round. Bring the aim, the comms and the hunger.</p>
          <button className="btn btn-d clip" onClick={() => go("contact")}><span>Join the Movement</span><Arrow /></button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage, JoinCTA });
