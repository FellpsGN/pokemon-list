import { useState, useEffect} from 'react'
import { PokeCards } from './components/PokeCard';
import { Flex, Box, Grid } from '@chakra-ui/react';
import axios from 'axios';
import LogoPoke from '../public/Logo.svg';
import './App.css'

function App() {

  const [pokemons, setPokemon] = useState([])

  useEffect( () => { 
    getPokemon();
   }, [])

    const getPokemon = () => {
      var endpoints = [];
      for (var i = 1; i < 250; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      console.log(endpoints)
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {setPokemon(res)
      console.log(res)});
      return response
      // axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
      // .then( (res) => {
      //   setPokemon(res.data.results)
      // })
      // .catch((err) => { console.error(err)})
    }


  return (
    <div className="App">

      <Flex className="header" justifyContent={'space-between'}>
        <Box>
          <img src={LogoPoke} alt="pokemon" />
        </Box>
      </Flex>

      <Flex p={8}>
        <Grid templateColumns='repeat(13, 1fr)' gap={6}>
          {pokemons.map( (pokemon, index) => (
            <PokeCards key={index} name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
          ))}
        </Grid>
      </Flex>
    </div>
    
  )
}

export default App
