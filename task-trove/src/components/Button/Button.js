import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <button onClick={handleClick}>
      Clique-me
    </button>
  );
};

export default Button;