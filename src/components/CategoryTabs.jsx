import { groups } from '../data/menu.js';
export default function CategoryTabs({ active, onSelect }) {
  const all = [{ id: 'all', label: 'All', icon: '👑' }, ...groups];
  return (
    <div className="tabs" role="tablist" aria-label="Filter menu">
      {all.map((g) => (
        <button key={g.id} role="tab" aria-selected={active === g.id} className={active === g.id ? 'tab on' : 'tab'} onClick={() => onSelect(g.id)}>
          <span aria-hidden="true">{g.icon}</span> {g.label}
        </button>
      ))}
    </div>
  );
}
