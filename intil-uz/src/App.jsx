import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { translations } from "./translations/translations";
import { ArrowRight, BookOpen, ChevronDown, Globe2, Info, Network, Pencil, Send, Users, X } from "lucide-react";

const socialLinks = {
  linkedin: null,
  telegram: null,
  facebook: null
};

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("intil-language") || "UZ");
  const [notice, setNotice] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem("intil-language", language);
    document.documentElement.lang = language === "UZ" ? "uz-Latn" : language.toLowerCase();
  }, [language]);

  const action = () => setNotice(true);

  return (
    <div className="app">
      <Navbar t={t} language={language} setLanguage={setLanguage} onAction={action} />
      {notice && (
        <div className="notice-backdrop" role="dialog" aria-modal="true" aria-labelledby="notice-title" onClick={() => setNotice(false)}>
          <div className="notice" onClick={(event) => event.stopPropagation()}>
            <button aria-label="Close" className="notice-close" onClick={() => setNotice(false)}><X size={18} strokeWidth={2} /></button>
            <span className="notice-icon"><Info size={22} strokeWidth={2} /></span>
            <h2 id="notice-title">{t.actionTitle}</h2>
            <p>{t.actionText}</p>
            <button className="button button-primary" onClick={() => setNotice(false)}>OK</button>
          </div>
        </div>
      )}
      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <span className="eyebrow">{t.heroBrand}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#platforma">{t.explore}</a>
              <button className="button button-outline button-large" onClick={action}>{t.register}</button>
            </div>
          </div>
          <div className="hero-logo-stage" aria-label="INTIL.UZ brand">
            <div className="hero-logo-lockup" aria-label="INTIL.UZ">INTIL<span>.UZ</span></div>
          </div>
        </section>

        <section className="section section-shell" id="platforma">
          <div className="section-heading heading-grid">
            <div><span className="eyebrow">{t.platformLabel}</span><h2>{t.platformTitle}</h2></div>
            <p>{t.platformText}</p>
          </div>
          <div className="platform-grid">
            {t.platformCards.map(([title, text], index) => (
              <article className="platform-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="mini-illustration" aria-hidden="true"><span>{index === 0 ? <BookOpen size={44} strokeWidth={1.7} /> : index === 1 ? <Pencil size={44} strokeWidth={1.7} /> : <Globe2 size={44} strokeWidth={1.7} />}</span></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section purpose-section" id="maqsad">
          <div className="section-shell">
            <div className="section-heading"><span className="eyebrow">{t.purposeLabel}</span><h2>{t.purposeTitle}</h2><p>{t.purposeIntro}</p></div>
            <div className="purpose-grid">
              {t.problems.map(([number, title, text]) => (
                <article className="purpose-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-shell" id="yonalishlar">
          <div className="section-heading"><span className="eyebrow">{t.directionsLabel}</span><h2>{t.directionsTitle}</h2></div>
          <div className="direction-grid">
            {t.directions.map(([code, title, text, link], index) => (
              <article className={`direction-card direction-${index}`} key={code}>
                <span className="direction-code">{code}</span>
                <div className="direction-art" aria-hidden="true"><span>{index === 0 ? <BookOpen size={72} strokeWidth={1.5} /> : index === 1 ? <Pencil size={72} strokeWidth={1.5} /> : <Globe2 size={72} strokeWidth={1.5} />}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <button onClick={action}>{link} <ArrowRight size={18} strokeWidth={2} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="section features-section" id="imkoniyatlar">
          <div className="section-shell">
            <div className="features-layout">
              <div className="section-heading"><span className="eyebrow">{t.featuresLabel}</span><h2>{t.featuresTitle}</h2><p>{t.featuresNote}</p></div>
              <div className="feature-grid">
                {t.features.map((feature, index) => <article key={feature}><span>0{index + 1}</span><h3>{feature}</h3></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-shell" id="faq">
          <div className="faq-layout">
            <div className="section-heading"><span className="eyebrow">{t.faqLabel}</span><h2>{t.faqTitle}</h2></div>
            <div className="faq-list">
              {t.faqs.map(([question, answer], index) => (
                <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                  <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{question}</span><span className="faq-toggle"><ChevronDown size={18} strokeWidth={2} className={openFaq === index ? "rotated" : ""} /></span>
                  </button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-grid">
          <div><a className="brand footer-brand" href="#home"><span>INTIL<span>.UZ</span></span></a><p>{t.footerText}</p></div>
          <div className="footer-links"><strong>{t.directionsLabel}</strong><a href="#yonalishlar">LEARN</a><a href="#yonalishlar">TEACH</a><a href="#yonalishlar">DISCOVER</a></div>
          <div className="footer-links"><strong>{t.platformLabel}</strong><a href="#platforma">{t.platformLabel}</a><a href="#maqsad">{t.purposeLabel}</a><a href="#faq">FAQ</a></div>
          <div className="social-section">
            <strong>{language === "UZ" ? "Bizni kuzatib boring" : language === "EN" ? "Follow us" : "Подписывайтесь"}</strong>
            <div className="social-links">
              {[{ name: "LinkedIn", url: socialLinks.linkedin, Icon: Network }, { name: "Telegram", url: socialLinks.telegram, Icon: Send }, { name: "Facebook", url: socialLinks.facebook, Icon: Users }].map(({ name, url, Icon }) => (
                url ? <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} profile`}><Icon size={18} strokeWidth={2} /></a> : <span key={name} className="social-disabled" aria-label={`${name} profile link unavailable`} title={`${name} profile link unavailable`}><Icon size={18} strokeWidth={2} /></span>
              ))}
            </div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={t.language} className="language-select footer-language">
              <option value="UZ">UZ</option>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
          </div>
        </div>
        <div className="section-shell footer-bottom">© 2026 INTIL.UZ. {t.copyright}</div>
      </footer>
    </div>
  );
}

export default App;
