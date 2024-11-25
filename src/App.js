import React from 'react';
import CartList from './components/CartList';
import AddProductForm from './components/AddProductForm';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <AddProductForm />
      <CartList />
    </div>
  );
};



export default App;