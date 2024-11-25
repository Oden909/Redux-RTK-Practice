import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="cart-list">
    {cart.map((item) => (
        <CartItem key={item.id} item={item} />
    ))}
    </div>
  );
};



export default CartList;