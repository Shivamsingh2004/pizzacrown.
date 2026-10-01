export default function ComboCard({ combo, onAdd }) {
  return (
    <article className="combo">
      <span className="save">SAVE ₹{combo.save}</span>
      <h3>Combo {combo.id}</h3>
      <p>{combo.contents}</p>
      <div className="combo-f">
        <span className="price big">₹{combo.price}</span>
        <button className="btn gold" onClick={() => onAdd(combo)} aria-label={`Add Combo ${combo.id} to cart`}>Add</button>
      </div>
    </article>
  );
}
