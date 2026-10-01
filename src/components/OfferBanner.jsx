import { offers } from '../data/menu.js';
export default function OfferBanner() {
  return (
    <section className="wrap offers" aria-label="Special offers">
      {offers.map((o) => (
        <div className="offer" key={o.text}>
          <span>🎉 {o.title}</span>
          <strong>{o.text}</strong>
        </div>
      ))}
    </section>
  );
}
