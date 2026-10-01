export default function ItemList({ cat, onAdd }) {
  return (
    <ul className="ilist">
      {cat.items.map((i) => (
        <li key={i.name}>
          <span className="vg" role="img" aria-label="Pure vegetarian" />
          <b>{i.name}</b>
          <span className="dots" aria-hidden="true" />
          <button className="price" onClick={() => onAdd(cat, i, 'P')} aria-label={`Add ${i.name}, ₹${i.prices.P} to cart`}>₹{i.prices.P}</button>
        </li>
      ))}
    </ul>
  );
}
