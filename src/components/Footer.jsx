import { brand } from '../data/menu.js';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div>
          <p className="flogo">👑 {brand.name}</p>
          <p className="tagline">{brand.tagline}</p>
          <p>📍 {brand.address}</p>
          <p>{brand.phones.map((p) => <a key={p} href={`tel:${p}`}>📞 {p}</a>)}</p>
        </div>
        <div className="qr" aria-label="QR code placeholder">
          <div className="qr-box" aria-hidden="true" />
          <b>Scan to Order</b>
          <small>ORDER NOW MENU</small>
        </div>
      </div>
      <ul className="badges" aria-label="Highlights">{brand.badges.map((b) => <li key={b}>{b}</li>)}</ul>
      <p className="copy">© {new Date().getFullYear()} The Pizza Crown. All rights reserved.</p>
    </footer>
  );
}
