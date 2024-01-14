import React from 'react';

function BotaoVoltar() {
  function handleClick() {
    window.history.back();
  }

  return (
    <button type="submit" onClick={handleClick}>Voltar</button>
  );
}

export default BotaoVoltar;