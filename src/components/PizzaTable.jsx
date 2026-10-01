import { sizeLabels } from '../data/menu.js';
export default function PizzaTable({ cat, onAdd }) {
  return (
    <table className="ptable">
      <thead>
        <tr>
          <th scope="col" className="sr">Item</th>
          {cat.sizes.map((s) => <th key={s} scope="col" title={sizeLabels[s]}>{s}</th>)}
        </tr>
      </thead>
      <tbody>
        {cat.items.map((i) => (
          <tr key={i.name}>
            <td className="nm">
              <span className="vg" role="img" aria-label="Pure vegetarian" />
              <span className="nmt">
                <b>{i.name}{i.spicy && <span aria-label="Spicy"> 🌶</span>}</b>
                {i.ingredients && <em>{i.ingredients.join(' • ')}</em>}
              </span>
            </td>
            {cat.sizes.map((s) => (
              <td key={s} className="pc">
                <button className="price" onClick={() => onAdd(cat, i, s)} aria-label={`Add ${i.name}, ${sizeLabels[s]}, ₹${i.prices[s]} to cart`}>₹{i.prices[s]}</button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
