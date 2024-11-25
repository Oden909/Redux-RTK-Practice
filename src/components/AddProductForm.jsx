import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (productName.trim()) {
      dispatch(addProduct(productName));
      setProductName('');
    }
  };

  return (
    <div className="add-product-form">
      <input
        type="text"
        placeholder="Имя нового продукта....."
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleAddProduct}>Добавить</button>
    </div>
  );
};



export default AddProductForm;