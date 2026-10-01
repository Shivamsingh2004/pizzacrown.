import { sizeLabels } from '../data/menu.js';
import PizzaTable from './PizzaTable.jsx';
import ItemList from './ItemList.jsx';

export default function MenuSection({ cat, onAdd }) {
  const multi = cat.sizes.length > 1;
  return (
    <div className="section" id={cat.id}>
      <h2 className="ribbon"><span>{cat.title}</span></h2>
      {multi && <p className="legend">{cat.sizes.map((s) => `${s} = ${sizeLabels[s]}`).join('  •  ')}</p>}
      {multi ? <PizzaTable cat={cat} onAdd={onAdd} /> : <ItemList cat={cat} onAdd={onAdd} />}
    </div>
  );
}
