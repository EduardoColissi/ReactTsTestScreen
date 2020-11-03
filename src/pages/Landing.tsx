import React, { useState, useEffect } from 'react';
import { Button, Image } from 'antd';
import 'antd/dist/antd.css';
import api from '../services/api';

interface IPokemon {
  sprites: any;
  name: string
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemon>({name: '', sprites:''});
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
    <div className="Main">
      <h1>{pokemon.name}</h1>
      <Image width={500} src= {pokemon?.sprites?.front_default}/>
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
