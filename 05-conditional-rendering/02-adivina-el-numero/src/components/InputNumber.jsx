// src/components/InputNumber.jsx
import React from 'react';

const InputNumber = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Ingresa un número"
    />
  );
};

export default InputNumber;