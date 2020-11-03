import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import api from '../services/api';

interface IPokemon {
  name: string
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemon>({name: ''});
  const [pokeIndex, setPokeIndex] = useState<number>(1);

  useEffect(() => {
    api.get(`pokemon/${pokeIndex}`)
    .then(result => {
      setPokemon(result.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [pokeIndex]);

  return (
    <div className="App">
      <h1>{pokemon.name}</h1>

      <Button type="primary" onClick={() => {
        if(pokeIndex > 1) {
          setPokeIndex(pokeIndex - 1);
        }
      }}>Anterior</Button>
      <Button type="primary" onClick={() => setPokeIndex(pokeIndex + 1)}>Próximo</Button>
    </div>
  );
}

export default App;
