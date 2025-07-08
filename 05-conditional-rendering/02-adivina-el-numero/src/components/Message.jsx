// src/components/Message.jsx
import React from 'react';

const Message = ({ pista, intentos }) => {
  return (
    <>
      <p>{pista ? pista : 'Intenta adivinar el número.'}</p>
      {intentos > 0 && <p>Intentos: {intentos}</p>}
    </>
  );
};

export default Message;