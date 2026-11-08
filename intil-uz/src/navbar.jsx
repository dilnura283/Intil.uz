
import { useState } from "react";
import { Menu, X } from "lucide-react";

const ids = ["platforma", "maqsad", "yonalishlar", "imkoniyatlar", "faq"];

function Navbar({ t, language, setLanguage, onAction }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = t.nav.map((label, index) => ({ label, href: `#${ids[index]}` }));

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="INTIL.UZ home">
          <span>INTIL<span>.UZ</span></span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label={t.language}
            className="language-select"
          >
            <option value="UZ">UZ</option>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>
          <button className="button button-dark" onClick={onAction}>{t.login}</button>
          <button className="button button-primary" onClick={onAction}>{t.start}</button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.menuClose : t.menuOpen}
          aria-expanded={menuOpen}
          className="menu-toggle"
        >
          {menuOpen ? <X size={21} strokeWidth={2} /> : <Menu size={21} strokeWidth={2} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
          </div>
          <div className="mobile-actions">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t.language}
              className="language-select"
            >
              <option value="UZ">UZ</option>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
            <button className="button button-dark" onClick={onAction}>{t.login}</button>
            <button className="button button-primary" onClick={onAction}>{t.start}</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
