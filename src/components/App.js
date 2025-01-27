import React, { useState } from 'react';
import dishes from './data';
import './styles/App.css';

const App = () => {
  const [category, setCategory] = useState('all');

  const filterDishes = (category) => {
    setCategory(category);
  };

  const filteredDishes = category === 'all' ? dishes : dishes.filter(dish => dish.category === category);

  return (
    <div className="App">
      <h1>Dish Reviews</h1>
      <div className="categories">
        <button onClick={() => filterDishes('all')}>All</button>
        <button onClick={() => filterDishes('breakfast')}>Breakfast</button>
        <button onClick={() => filterDishes('lunch')}>Lunch</button>
        <button onClick={() => filterDishes('shakes')}>Shakes</button>
      </div>
      <div className="dishes">
        {filteredDishes.map(dish => (
          <div key={dish.id} className="dish">
            <img src={dish.img} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.desc}</p>
            <p className="price">${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


