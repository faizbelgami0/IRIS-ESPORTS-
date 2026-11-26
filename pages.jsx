function AboutPage({ go }) {
  return (
    <>
      <PageHead idx="02 / ABOUT" meta="EST. 2026 · INDIA" kick="About" title={<>We back<br /><span className="fl">the underdog.</span></>}
        lead="IRIS Esports is a multi-title competitive organization built on one belief — raw talent is everywhere, opportunity is not." />
      <section className="sec">
        <div className="wrap story">
          {/* <Ph label="Team photo / bootcamp shot" className="rv" /> */}
<img
  src="IRIS TEAM.jpg"
  alt="IRIS Esports Team"
  className="rv team-photo"
/>
          
          <div>
            <div className="kick rv">Our Story</div>
            <h2 className="h2 rv d1" style={{ marginTop: 20, fontSize: "clamp(44px,5vw,80px)" }}>Named for the eye<br />that <span className="fl">sees talent.</span></h2>
            <p className="rv d2">The iris decides what the eye lets in. We named the organization after it because <strong>that is the job</strong>: to notice the player grinding in an open lobby at 2am, the squad that keeps placing top-five with no coach, no sponsor and no audience.</p>
            <p className="rv d3">IRIS fields teams in <strong>BGMI, Call of Duty, VALORANT and Free Fire</strong>, runs its own tournaments, and builds partnerships that put real resources behind emerging Indian talent.</p>
          </div>
        </div>
      </section>
      <section className="sec coal">
        <div className="wrap">
          <div className="sec-h"><div><div className="kick rv">Brand DNA</div><h2 className="h2 rv d1">What we <span className="fl">play like.</span></h2></div></div>
          <div className="vals rv">
            {[["Aggressive", "We take space. In-game and out of it."], ["Fearless", "No reputation is too big to challenge."], ["Professional", "Contracts, structure and standards from day one."], ["Competitive", "Every scrim is a final. Every final is a statement."],
              ["Premium", "World-class presentation for every player we sign."], ["Futuristic", "Data-led scouting, modern content, new formats."], ["Innovative", "Building pathways the scene doesn't have yet."], ["Underdog", "We remember where our players came from."]].map(([t, p]) => (
              <div className="val spot" key={t}><span className="mono fl">◆</span><div><b>{t}</b><p>{p}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* IRIS LEADERSHIP */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-h">
            <div>
              <div className="kick rv">The People Behind IRIS</div>
              <h2 className="h2 rv d1">
                THE <span className="fl">LEADERSHIP.</span>
              </h2>
            </div>
          </div>

          <div className="leadership-grid">

            <div className="leader-card rv">
              <div className="leader-image">
                <img src="Founder.123" alt="Founder of IRIS Esports" />
                <span className="leader-tag">FOUNDER</span>
              </div>
              <div className="leader-info">
                <h3>MOHAMMED FAIZ BELGAMI</h3>
                <span className="leader-role">FOUNDER & CEO</span>
                <p>
                  Building IRIS Esports with a vision to discover talent,
                  create opportunities and put Indian esports on the global stage.
                </p>
              </div>
            </div>

            <div className="leader-card rv">
              <div className="leader-image">
                <img src="CoFounderPhoto.jpg" alt="Co-Founder of IRIS Esports" />
                <span className="leader-tag">CO-FOUNDER</span>
              </div>
              <div className="leader-info">
                <h3>SYEDA UMME SALMA</h3>
                <span className="leader-role">CO-FOUNDER</span>
                <p>
                  Driving the mission forward through leadership, strategy
                  and building a competitive organization for the future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="sec coal">
        <div className="wrap">
          <div className="sec-h"><div><div className="kick rv">Roadmap</div><h2 className="h2 rv d1">The road <span className="outline">ahead.</span></h2></div></div>
          <div className="road">
            {[["Phase 01", "Foundation", ["Brand launch", "Division leads", "Community Discord"], true],
              ["Phase 02", "Rosters", ["Open trials", "Four-title rosters", "Bootcamp block"]],
              ["Phase 03", "IRIS Cup", ["Season 1 open series", "Broadcast & content", "First partners"]],
              ["Phase 04", "National Stage", ["Tier-1 qualifiers", "Offline events", "Academy program"]]].map(([p, t, l, now], i) => (
              <div key={p} className={"rd rv d" + (i + 1) + (now ? " now" : "")}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span className="mono fl">{p}</span>{now && <span className="tag live">Now</span>}</div>
                <h4>{t}</h4><ul>{l.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JoinCTA go={go} />
    </>
  );
}

function TeamsPage({ go, sub }) {
  const D = window.IRIS;
  const [g, setG] = useState(sub || "bgmi");
  useEffect(() => { if (sub) setG(sub); }, [sub]);
  const game = D.games.find((x) => x.key === g);
  const roles = D.roles[g];
  return (
    <>
      <PageHead idx="03 / TEAMS" meta="4 DIVISIONS · ROSTERS TBA" kick="Teams" title={<>The <span className="fl">divisions.</span></>}
        lead="Roster builds are in progress across all four titles. Official line-ups are revealed here first." />
      <section className="sec" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="gtabs">
            {D.games.map((x, i) => (
              <button key={x.key} className={"gtab" + (g === x.key ? " on" : "")} style={{ "--ac": x.ac }} onClick={() => setG(x.key)}>
                <span className="mono" style={{ color: "var(--dim)" }}>0{i + 1} · {x.pub}</span><b>{x.short || x.name}</b>
              </button>
            ))}
          </div>
          <div key={g} style={{ "--ac": game.ac }}>
            <div className="team-hd fadein">
              <h2>{game.short || game.name}</h2>
              <div><div className="mono" style={{ color: game.ac }}>{game.full} · {game.size}-stack</div><p className="lead" style={{ marginTop: 14 }}>{game.over}</p></div>
            </div>
            <div className="roster">
              {Array.from({ length: game.size + 1 }).map((_, i) => (
                <div key={i} className="pc fadein spot" style={{ animationDelay: i * 0.07 + "s" }} onClick={() => toast("Roster reveal coming soon")}>
                  <div className="ph"><div className="sil"></div><span className="q">?</span><span className="no">{String(i + 1).padStart(2, "0")}</span></div>
                  <div className="pc-b"><b>IRIS Player {i + 1}</b><span className="mono">{roles[i] || "Coach"} · TBA</span></div>
                </div>
              ))}
            </div>
            <div className="roles">
              <div><div className="kick">Trials open</div><h3 className="h3" style={{ marginTop: 20 }}>Think you belong<br />on this roster?</h3></div>
              <div>
                <p className="lead">We're scouting for the following roles in {game.short || game.name}. Submit your profile and clips — every application is reviewed.</p>
                <div className="role-l">{roles.map((r) => <span key={r} className="tag up">{r}</span>)}</div>
                <div style={{ marginTop: 30 }}><button className="btn btn-p clip" onClick={() => go("contact")}><span>Apply for Trials</span><Arrow /></button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TournamentsPage({ openT }) {
  const D = window.IRIS;
  const [f, setF] = useState("all");
  const list = D.tournaments.filter((t) => f === "all" || t.status === f);
  return (
    <>
      <PageHead idx="04 / TOURNAMENTS" meta="HOSTED · PARTICIPATING" kick="Tournaments" title={<>Enter the<br /><span className="fl">arena.</span></>}
        lead="IRIS-hosted events and the competitions our divisions take part in. Prize pools and dates are confirmed with each announcement." />
      <section className="sec" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="chips" style={{ marginBottom: 40 }}>
            {[["all", "All"], ["upcoming", "Upcoming"], ["ongoing", "Live"], ["completed", "Completed"]].map(([k, l]) => (
              <button key={k} className={"chip" + (f === k ? " on" : "")} onClick={() => setF(k)}>{l}</button>
            ))}
          </div>
          <div className="th mono"><span>Status</span><span>Event</span><span className="hm">Game</span><span className="hm">Dates</span><span className="hm">Prize Pool</span><span></span></div>
          <div className="tbl" style={{ borderTop: 0 }}>
            {list.map((t) => (
              <div key={t.id} className="trow" onClick={() => openT(t)}>
                <span className="hm-s"><StatusTag s={t.status} /></span>
                <div><h4>{t.name}</h4>{t.host && <div className="mono fl" style={{ marginTop: 8 }}>Hosted by IRIS</div>}</div>
                <span className="mono hm">{gameLabel(t.game)}</span>
                <span className="mono hm">{t.date}</span>
                <span className="mono hm">{t.prize}</span>
                <span className="arr">→</span>
              </div>
            ))}
            {!list.length && <div className="empty mono">No tournaments in this view</div>}
          </div>
        </div>
      </section>
    </>
  );
}

function TournamentDetail({ t }) {
  if (!t) return null;
  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}><StatusTag s={t.status} /><span className="tag">{gameLabel(t.game)}</span></div>
      <h3>{t.name}</h3>
      <dl className="kv">
        {[["Prize pool", t.prize], ["Format", t.format], ["Schedule", t.date], ["Location", t.loc], ["Registration", t.reg], ["Teams", "TBA"], ["Results", "TBA"]].map(([k, v]) => (
          <React.Fragment key={k}><dt className="mono">{k}</dt><dd>{v}</dd></React.Fragment>
        ))}
      </dl>
      <p className="body">{t.body}</p>
      <div style={{ marginTop: 32 }}>
        <button className="btn btn-p clip" disabled={t.status === "completed"} style={t.status === "completed" ? { opacity: .4, pointerEvents: "none" } : null}
          onClick={() => toast("We'll notify you when registration opens")}><span>{t.status === "ongoing" ? "Join on Discord" : "Notify Me"}</span><Arrow /></button>
      </div>
    </div>
  );
}

function NewsPage({ openN }) {
  const D = window.IRIS;
  const [c, setC] = useState("All");
  const list = D.news.filter((n) => c === "All" || n.cat === c);
  const [feat, ...rest] = list;
  return (
    <>
      <PageHead idx="05 / NEWS" meta="ANNOUNCEMENTS · UPDATES" kick="News" title={<>News<span className="fl">room.</span></>}
        lead="Organization announcements, roster news, tournament results and behind-the-scenes from every division." />
      <section className="sec" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="chips" style={{ marginBottom: 40 }}>
            {D.newsCats.map((k) => <button key={k} className={"chip" + (c === k ? " on" : "")} onClick={() => setC(k)}>{k}</button>)}
          </div>
          {feat ? (
            <>
              <article className="nw-feat nw fadein" key={feat.id + c} onClick={() => openN(feat)}>
                {/* <div className="im"><Ph label="Featured story cover" /></div> */}

<div className="im">
  <img src="IRIS-Jersey.png" alt="IRIS Esports"
    style={{width:"100%",height:"100%",objectFit:"cover"}} />
</div>
                
                <div className="nw-b"><div className="nw-m mono"><span className="c">{feat.cat}</span><span>{feat.date}</span></div><h4>{feat.title}</h4><p style={{ flex: "none" }}>{feat.ex}</p><span className="lnk" style={{ alignSelf: "flex-start", marginTop: 10 }}>Read story →</span></div>
              </article>
              <div className="nw-grid">
                {rest.map((n, i) => (
                  <article key={n.id + c} className="nw fadein" style={{ animationDelay: i * 0.08 + "s" }} onClick={() => openN(n)}>
                    {/* <div className="im"><Ph label={`${n.cat} cover`} /></div> */}

<div className="im">
  <img
    src="./IRISCUP.png"
    alt={n.cat}
    style={{width:"100%",height:"100%",objectFit:"cover"}}
  />
</div>
                    
                    <div className="nw-b"><div className="nw-m mono"><span className="c">{n.cat}</span><span>{n.date}</span></div><h4>{n.title}</h4><p>{n.ex}</p></div>
                  </article>
                ))}
              </div>
            </>
          ) : <div className="empty mono">No stories in {c} yet — check back soon</div>}
        </div>
      </section>
    </>
  );
}

function NewsDetail({ n }) {
  if (!n) return null;
  return (
    <div>
      <div className="nw-m mono" style={{ display: "flex", gap: 16 }}><span className="fl">{n.cat}</span><span className="muted">{n.date}</span></div>
      <h3>{n.title}</h3>
      {/* <Ph label="Article hero image" style={{ aspectRatio: "16/9" }} /> */}
      
<div style={{aspectRatio:"16/9", width:"100%"}}>
  <img src="GameTitlesLaunch.png" alt="IRIS Esports"
    style={{width:"100%",height:"100%",objectFit:"cover"}} />
</div>
      
      <p className="body">{n.body}</p>
      <div className="soc" style={{ marginTop: 32 }}>{["Copy link"].map((s) => <a key={s} href="#" onClick={(e) => { e.preventDefault(); navigator.clipboard?.writeText(window.location.href); toast("Link copied"); }}>{s}</a>)}</div>
    </div>
  );
}

function Form({ fields, submit, done, subject }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    const values = {};
    fields.forEach(([id, label]) => {
      const el = e.currentTarget.elements.namedItem(id);
      if (el) values[label] = el.value.trim();
    });
    try {
      await submitIrisForm(values, subject);
      setSent(true);
    } catch (err) {
      setError(err.message || "Your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };
  if (sent) return (
    <div className="ok fadein"><span className="mono fl">● Received</span><b>{done}</b><p className="muted">Our team responds within 3–5 working days.</p>
      <div><button className="lnk" onClick={() => setSent(false)}>Send another →</button></div></div>
  );
  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(([id, label, type, opts, full]) => (
        <div key={id} className={"fld" + (full ? " full" : "")}>
          <label htmlFor={id}>{label}</label>
          {type === "select" ? <select id={id} name={id} required defaultValue="">{<option value="" disabled>Select…</option>}{opts.map((o) => <option key={o}>{o}</option>)}</select>
            : type === "area" ? <textarea id={id} name={id} required />
            : <input id={id} name={id} type={type} required />}
        </div>
      ))}
      {error && <div className="fld full" role="alert" style={{ color: "#ff7777" }}>{error}</div>}
      <div className="fld full" style={{ marginTop: 8 }}><button type="submit" disabled={sending} className="btn btn-p clip" style={{ alignSelf: "flex-start" }}><span>{sending ? "Sending…" : submit}</span><Arrow /></button></div>
    </form>
  );
}

function PartnersPage() {
  const D = window.IRIS;
  return (
    <>
      <PageHead idx="06 / PARTNERS" meta="8 PARTNERSHIP TIERS" kick="Partnerships" title={<>Fuel the<br /><span className="fl">next wave.</span></>}
        lead="Partner with an organization built on hunger, discipline and a growing community across India's four biggest competitive titles." />
      <section className="sec">
        <div className="wrap">
          <div className="sec-h"><div><div className="kick rv">Why IRIS</div><h2 className="h2 rv d1">What partners <span className="fl">get.</span></h2></div></div>
          <div className="vals rv">
            {[["Four titles", "One deal, reach across BGMI, COD, VALORANT and Free Fire audiences."], ["Own events", "Naming and presence across IRIS-hosted tournaments."], ["Content", "Integrated YouTube, Instagram and stream content."], ["Grassroots", "Authentic association with India's emerging talent."]].map(([t, p]) => (
              <div className="val spot" key={t}><span className="mono fl">◆</span><div><b>{t}</b><p>{p}</p></div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec coal">
        <div className="wrap two">
          <div>
            <div className="kick rv">Partnership Tiers</div>
            <div className="tiers rv d1" style={{ marginTop: 30 }}>
              {D.tiers.map((t, i) => <div key={t} className="tier"><span className="mono">{String(i + 1).padStart(2, "0")}</span><b>{t}</b><span className="ar">→</span></div>)}
            </div>
          </div>
          <div className="rv d2">
            <div className="kick">Enquiry</div>
            <h3 className="h3" style={{ margin: "20px 0 32px" }}>Start the conversation.</h3>
            <Form subject="New Partnership Enquiry – IRIS Esports" submit="Send Enquiry" done="Enquiry received."
              fields={[["pn", "Your name", "text"], ["pc", "Company", "text"], ["pe", "Work email", "email"], ["pp", "Phone", "tel"], ["pt", "Partnership type", "select", D.tiers, true], ["pm", "Tell us about your goals", "area", null, true]]} />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const D = window.IRIS;
  const [tab, setTab] = useState("trial");
  return (
    <>
      <PageHead idx="07 / CONTACT" meta="RESPONSE · 3–5 DAYS" kick="Contact" title={<>Get in<br /><span className="fl">the game.</span></>}
        lead="Trials, partnerships, press or just a question — reach the right team directly." />
      <section className="sec">
        <div className="wrap two">
          <div className="cbox rv">
            {[["Email", "faiz@irisesports.in", "mailto:faiz@irisesports.in"], ["Community", "discord.gg/Tb93xZGAv", "https://discord.gg/Tb93xZGAv"]].map(([k, v, href]) => (
              <a key={k} href={href} target={k === "Community" ? "_blank" : undefined} rel={k === "Community" ? "noopener noreferrer" : undefined}><span className="mono muted">{k}</span><b>{v}</b></a>
            ))}
            <SocialLinks style={{ marginTop: 30 }} />
          </div>
          <div className="rv d1">
            <div className="chips" style={{ marginBottom: 32 }}>
              {[["trial", "Player Trials"], ["general", "General"]].map(([k, l]) => <button key={k} className={"chip" + (tab === k ? " on" : "")} onClick={() => setTab(k)}>{l}</button>)}
            </div>
            {tab === "trial" ? (
              <Form key="t" subject="New Player Application – IRIS Esports" submit="Submit Application" done="Application in."
                fields={[["tn", "Full name", "text"], ["ti", "In-game name", "text"], ["te", "Email", "email"], ["tg", "Game", "select", D.games.map((g) => g.short || g.name)], ["tr", "Preferred role", "text"], ["tx", "Age", "number"], ["tl", "Clips / profile link", "url", null, true], ["tm", "Competitive history", "area", null, true]]} />
            ) : (
              <Form key="g" subject="New General Enquiry – IRIS Esports" submit="Send Message" done="Message sent."
                fields={[["gn", "Name", "text"], ["ge", "Email", "email"], ["gs", "Subject", "select", ["General", "Press & Media", "Tournaments", "Other"], true], ["gm", "Message", "area", null, true]]} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { AboutPage, TeamsPage, TournamentsPage, TournamentDetail, NewsPage, NewsDetail, PartnersPage, ContactPage });
