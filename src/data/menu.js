export const brand = {
  name: 'THE PIZZA CROWN',
  tagline: 'TASTE ABOVE ALL',
  highlight: 'Pizza Starting @ ₹69',
  address: 'Mamura, Gali No. 02, Sector-66, Noida (Near by Evergreen Sweets)',
  phones: ['7217843839', '9953623166'],
  whatsapp: '917217843839',
  badges: ['100% PURE VEG', 'HOT', 'FRESH', 'DELICIOUS', 'MADE WITH LOVE ♥'],
};

export const offers = [
  { title: 'SPECIAL OFFER', text: 'BUY 2 MEDIUM PIZZA, GET 1 REGULAR PIZZA FREE' },
  { title: 'SPECIAL OFFER', text: 'BUY 2 LARGE PIZZA, GET 1 MEDIUM PIZZA FREE' },
];

export const sizeLabels = { R: 'Regular', M: 'Medium', L: 'Large', S: 'Small', HALF: 'Half', FULL: 'Full', P: 'Price' };

export const groups = [
  { id: 'pizzas', label: 'Pizzas', icon: '🍕' },
  { id: 'exotic', label: 'Exotic', icon: '🌶' },
  { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'snacks', label: 'Snacks', icon: '🍟' },
  { id: 'shakes', label: 'Shakes', icon: '🥤' },
  { id: 'dessert', label: 'Dessert', icon: '🍰' },
  { id: 'combos', label: 'Combos', icon: '🎁' },
];

const RML = (R, M, L) => ({ R, M, L });
const it = (name, prices, ingredients, spicy) => ({ name, prices, ...(ingredients && { ingredients }), ...(spicy && { spicy }) });
const P = (name, price) => ({ name, prices: { P: price } });

export const categories = [
  { id: 'starting', group: 'pizzas', title: 'PIZZA STARTING @ ₹69', sizes: ['R', 'M', 'L'], items: [
    it('Onion', RML(69, 130, 229)),
    it('Tomato', RML(79, 130, 229)),
    it('Capsicum', RML(79, 130, 229)),
    it('Sweet Corn', RML(79, 130, 229)),
  ] },
  { id: 'simply-veg', group: 'pizzas', title: 'SIMPLY VEG', sizes: ['R', 'M', 'L'], items: [
    it('Lovers Bite', RML(130, 250, 380), ['Mushroom', 'Olives', 'Sweet Corn']),
    it('Spring Fling', RML(130, 250, 380), ['Capsicum', 'Sweet Corn', 'Paneer']),
    it('Country Side', RML(130, 250, 380), ['Capsicum', 'Jalapeno', 'Olives']),
    it('Garden Delight', RML(130, 250, 380), ['Onion', 'Tomato', 'Capsicum']),
  ] },
  { id: 'double', group: 'pizzas', title: 'DOUBLE TOPPING PIZZA', sizes: ['R', 'M', 'L'], items: [
    it('Onion Capsicum', RML(89, 149, 249)),
    it('Sweet Corn Tomato', RML(89, 149, 249)),
    it('Jalapenos Olive', RML(89, 149, 249)),
  ] },
  { id: 'three', group: 'pizzas', title: 'THREE TOPPING PIZZA', sizes: ['R', 'M', 'L'], items: [
    it('Three Topping Pizza', RML(110, 190, 299), ['Capsicum', 'Paneer', 'Red Paprika']),
  ] },
  { id: 'loaded', group: 'pizzas', title: 'VEG LOADED', sizes: ['R', 'M', 'L'], items: [
    it('Veg Loaded Pizza', RML(120, 229, 349), ['Sweet Corn', 'Tomato', 'Capsicum', 'Onion']),
  ] },
  { id: 'classic', group: 'pizzas', title: 'CLASSIC VEG', sizes: ['R', 'M', 'L'], items: [
    it('Cheese Pizza', RML(99, 190, 290)),
    it('Paneer Pizza', RML(99, 190, 290)),
    it('Cheese Paneer Pizza', RML(120, 230, 350)),
    it('Sweet Corn Delight', RML(120, 230, 350)),
    it('Onion Twist', RML(120, 230, 350)),
    it('Makhani Do Pyaza', RML(120, 230, 350)),
  ] },
  { id: 'exotic', group: 'exotic', title: 'EXOTIC VEG', sizes: ['R', 'M', 'L'], items: [
    it('Garden Special', RML(140, 270, 410), ['Capsicum', 'Mushroom', 'Onion', 'Fresh Tomato']),
    it('Burn To Hell', RML(140, 270, 410), ['Jalapeno', 'Mushroom', 'Olives', 'Capsicum', 'Hot Garlic'], true),
    it('Dip Farm Villa', RML(140, 270, 410), ['Capsicum', 'Fresh Tomato', 'Paneer', 'Red Paprika']),
    it('Paneer Tikka Butter Masala', RML(140, 270, 410), ['Paneer Tikka', 'Onion', 'Capsicum', 'Red Paprika']),
    it('Paneer 65', RML(140, 270, 410), ['Onion', 'Capsicum', 'Red Paprika', 'Paneer 65', 'Extra Cheese']),
    it('Sweet Heat', RML(140, 270, 410), ['Jalapeno', 'Olives', 'Sweet Corn', 'Red Paprika'], true),
    it('Plaza S.P.C Paneer', RML(140, 270, 410), ['Onion', 'Capsicum', 'Paneer', 'Sweet Corn', 'Olives', 'Mushroom', 'Cheese Dip']),
    it('Cheese Lover Pizza', RML(140, 270, 410), ['Onion', 'Capsicum', 'Paneer', 'Mushroom', 'Baby Corn', 'Cheese Dip']),
    it('Garlic To Pizza', RML(140, 270, 410), ['Hot Garlic Dip', 'Onion', 'Capsicum', 'Paneer', 'Mushroom', 'Jalapeno']),
  ] },
  { id: 'sandwiches', group: 'sandwiches', title: 'SANDWICHES', sizes: ['S', 'M'], items: [
    it('Veg Toast Sandwich', { S: 40, M: 60 }),
    it('Veg Cheese Sandwich', { S: 45, M: 85 }),
    it('Veg Loaded Sandwich', { S: 60, M: 110 }),
    it('Veg Paneer Sandwich', { S: 75, M: 139 }),
  ] },
  { id: 'burgers', group: 'burgers', title: 'BURGERS', sizes: ['P'], items: [
    P('Veg Toast Burger', 35), P('Veg Cheese Burger', 55), P('Veg Tikki Burger', 65),
    P('Veg Loaded Burger', 75), P('Special Cheese + Tikki Burger', 80), P('Veg Paneer Burger With Cutlet', 95),
  ] },
  { id: 'snacks', group: 'snacks', title: 'SNACKS', sizes: ['HALF', 'FULL'], items: [
    it('Chilli Potatoes', { HALF: 60, FULL: 100 }),
    it('Chowmein', { HALF: 50, FULL: 90 }),
    it('Paneer Chowmein', { HALF: 70, FULL: 120 }),
  ] },
  { id: 'dessert', group: 'dessert', title: 'DESSERT', sizes: ['P'], items: [P('Choco Lava Cake', 70)] },
  { id: 'shakes', group: 'shakes', title: 'SHAKES & BEVERAGES', sizes: ['P'], items: [
    P('Cold Coffee', 70), P('Cold Boost', 70), P('Oreo Shake', 80), P('Chocolate Shake', 90),
  ] },
];

export const combos = [
  { id: 1, contents: 'Double Topping Pizza + Cold Coffee', price: 139, save: 21 },
  { id: 2, contents: 'Double Topping Pizza with Cheese Extra + Cheese Burger + 400 ml Cold Drink', price: 180, save: 35 },
  { id: 3, contents: '2 Double Topping Pizza with Cheese Extra + 2 Cheese Burger + 1 Ltr Cold Drink', price: 399, save: 100 },
  { id: 4, contents: '1 Medium Classic Pizza with Cheese Extra + Veg Loaded Sandwich + 2 Cold Coffee', price: 459, save: 111 },
  { id: 5, contents: '5 Double Topping Pizza with Cheese Extra + 5 Cheese Burger + 5 Sandwich Toast + 2 Litre Cold Drink', price: 999, save: 376 },
];
