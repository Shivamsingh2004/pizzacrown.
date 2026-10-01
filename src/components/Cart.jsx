import { brand } from '../data/menu.js';
export default function Cart({ open, onClose, cart, dispatch }) {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const send = () => {
    const lines = cart.map((x) => `• ${x.qty} × ${x.name}${x.size ? ` (${x.size})` : ''} – ₹${x.price * x.qty}`);
    const msg = `Hello The Pizza Crown! I'd like to order:\n${lines.join('\n')}\n\nTotal: ₹${total}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };
  return (
    <>
      {open && <div className="scrim" onClick={onClose} />}
      <aside className={open ? 'drawer open' : 'drawer'} aria-label="Your order" aria-hidden={!open}>
        <div className="drawer-h">
          <h2>Your Order</h2>
          <button className="x" onClick={onClose} aria-label="Close cart">✕</button>
        </div>
        <div className="drawer-b">
          {!cart.length && <p className="empty">Your cart is empty. Tap any price to add that item.</p>}
          {cart.map((x) => (
            <div className="line" key={x.key}>
              <div><b>{x.name}</b>{x.size && <small> · {x.size}</small>}<div className="price">₹{x.price * x.qty}</div></div>
              <div className="qty">
                <button onClick={() => dispatch({ type: 'dec', key: x.key })} aria-label={`Remove one ${x.name}`}>−</button>
                <span aria-live="polite">{x.qty}</span>
                <button onClick={() => dispatch({ type: 'inc', key: x.key })} aria-label={`Add one ${x.name}`}>+</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer-f">
            <div className="tot"><span>Total</span><span className="price big">₹{total}</span></div>
            <button className="btn wa full" onClick={send}>💬 Order on WhatsApp</button>
            <button className="link" onClick={() => dispatch({ type: 'clear' })}>Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
