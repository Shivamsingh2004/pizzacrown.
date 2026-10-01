import { brand } from '../data/menu.js';
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div className="hero-crown" aria-hidden="true">👑</div>
        <p className="hero-the">THE</p>
        <h1>PIZZA CROWN</h1>
        <p className="tagline">{brand.tagline}</p>
        <p className="highlight">{brand.highlight}</p>
        <ul className="badges" aria-label="Highlights">
          {brand.badges.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="cta">
          {brand.phones.map((p) => <a key={p} className="btn gold" href={`tel:${p}`}>📞 Call {p}</a>)}
          <a className="btn wa" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        </div>
        <p className="addr">📍 {brand.address}</p>
      </div>
    </section>
  );
}
