import React, { useState, useEffect } from 'react';
import { Button, Image, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import api from '../services/api';
import '../styles/Landing.css';

 

interface IPokemon {
  sprites: any;
  name: string;
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
    <>
    <header>
      <Row justify='center' align='middle'>
      <Image width={400} src= '../Images/Logo2.png' />
      </Row>
    </header>
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
    </>
  );
}

export default App;
