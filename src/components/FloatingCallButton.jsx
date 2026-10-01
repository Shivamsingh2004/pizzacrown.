import { brand } from '../data/menu.js';
export default function FloatingCallButton({ count, onCart }) {
  return (
    <>
      <a className="fab call" href={`tel:${brand.phones[0]}`} aria-label={`Call ${brand.phones[0]}`}>📞</a>
      <button className="fab cartb" onClick={onCart} aria-label={`Open cart, ${count} items`}>🛒{count > 0 && <i>{count}</i>}</button>
    </>
  );
}
