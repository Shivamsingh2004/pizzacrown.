export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="q" className="sr">Search the menu</label>
      <input id="q" type="search" placeholder="🔍 Search pizza, paneer, mushroom…" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
