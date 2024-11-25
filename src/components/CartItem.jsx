import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <div className="controls">
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <span>{item.count}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
      </div>
    </div>
  );
};


export default CartItem;