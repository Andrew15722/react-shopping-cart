import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// * Context API
import { ProductContext } from './contexts/ProductContext.js';
import { CartContext } from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [ products ] = useState(data);
	const [ cart, setCart ] = useState([]);

	const addItem = (item) => {
		setCart([ ...cart, item ]);
	};

	return (
		// * wrapping the Components and routes in the ProductContext component, giving it a value property.
		<ProductContext.Provider value={{ products, addItem }}>
			{/* ! was passing in the values with parens instead of curlies */}
			<CartContext.Provider value={{ cart, setCart }}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
