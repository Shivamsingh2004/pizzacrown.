import { brand, groups } from '../data/menu.js';
export default function Header({ onNav }) {
  return (
    <header className="header">
      <div className="wrap header-in">
        <a className="logo" href="#top" aria-label="The Pizza Crown home">
          <span className="crown" aria-hidden="true">👑</span>
          <span><small>THE</small><b>PIZZA CROWN</b></span>
        </a>
        <nav className="nav" aria-label="Menu categories">
          {groups.map((g) => (
            <a key={g.id} href="#menu" onClick={(e) => { e.preventDefault(); onNav(g.id); }}>{g.label}</a>
          ))}
        </nav>
        <a className="btn gold" href={`tel:${brand.phones[0]}`} aria-label={`Order now, call ${brand.phones[0]}`}>📞 Order Now</a>
      </div>
    </header>
  );
}
