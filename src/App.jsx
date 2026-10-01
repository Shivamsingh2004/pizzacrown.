import { useReducer, useState } from 'react';
import { categories, combos, sizeLabels } from './data/menu.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import OfferBanner from './components/OfferBanner.jsx';
import CategoryTabs from './components/CategoryTabs.jsx';
import SearchBar from './components/SearchBar.jsx';
import MenuSection from './components/MenuSection.jsx';
import ComboCard from './components/ComboCard.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import FloatingCallButton from './components/FloatingCallButton.jsx';

function reducer(state, a) {
  switch (a.type) {
    case 'add': {
      const found = state.find((x) => x.key === a.item.key);
      return found ? state.map((x) => (x.key === a.item.key ? { ...x, qty: x.qty + 1 } : x)) : [...state, { ...a.item, qty: 1 }];
    }
    case 'inc': return state.map((x) => (x.key === a.key ? { ...x, qty: x.qty + 1 } : x));
    case 'dec': return state.map((x) => (x.key === a.key ? { ...x, qty: x.qty - 1 } : x)).filter((x) => x.qty > 0);
    case 'clear': return [];
    default: return state;
  }
}

export default function App() {
  const [tab, setTab] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [cart, dispatch] = useReducer(reducer, []);

  const q = query.trim().toLowerCase();
  const match = (i) => !q || i.name.toLowerCase().includes(q) || (i.ingredients || []).some((g) => g.toLowerCase().includes(q));
  const cats = categories
    .filter((c) => q || tab === 'all' || c.group === tab)
    .map((c) => ({ ...c, items: c.items.filter(match) }))
    .filter((c) => c.items.length);
  const shownCombos = q || tab === 'all' || tab === 'combos'
    ? combos.filter((c) => !q || c.contents.toLowerCase().includes(q))
    : [];

  const add = (cat, item, size) => {
    const label = size === 'P' ? '' : sizeLabels[size];
    dispatch({ type: 'add', item: { key: `${cat.id}|${item.name}|${size}`, name: item.name, size: label, price: item.prices[size] } });
  };
  const addCombo = (c) => dispatch({ type: 'add', item: { key: `combo|${c.id}`, name: `Combo ${c.id}`, size: '', price: c.price } });
  const go = (id) => {
    setTab(id); setQuery('');
    setTimeout(() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }), 30);
  };
  const count = cart.reduce((n, x) => n + x.qty, 0);

  return (
    <>
      <Header onNav={go} />
      <main>
        <Hero />
        <OfferBanner />
        <section id="menu" className="wrap" aria-label="Menu">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryTabs active={q ? 'all' : tab} onSelect={(id) => { setQuery(''); setTab(id); }} />
          {cats.map((c) => <MenuSection key={c.id} cat={c} onAdd={add} />)}
          {shownCombos.length > 0 && (
            <div className="section">
              <h2 className="ribbon"><span>🎁 COMBOS</span></h2>
              <div className="combos">{shownCombos.map((c) => <ComboCard key={c.id} combo={c} onAdd={addCombo} />)}</div>
            </div>
          )}
          {!cats.length && !shownCombos.length && <p className="empty">No items match “{query}”. Try another name or ingredient.</p>}
        </section>
      </main>
      <Footer />
      <FloatingCallButton count={count} onCart={() => setOpen(true)} />
      <Cart open={open} onClose={() => setOpen(false)} cart={cart} dispatch={dispatch} />
    </>
  );
}
