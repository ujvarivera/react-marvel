import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container, Grid } from '@mui/material';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const URL = import.meta.env.VITE_MARVEL_API

  useEffect(() => {
    const getCharacters = async (url) => {
      const { data } = await axios.get(url);
      setCharacters(data.data.results)
      setLoading(false)
    }
    getCharacters(URL)
  }, [])

  return (
    <Container>
      {
        loading ?
          <p>Loading...</p> :
          <Grid container direction={"row"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {
              characters?.map((character) => (
                <Grid item xs={2} sm={4} md={4} key={character.id}>
                  <CharacterCard character={character} />
                </Grid>
              ))
            }
          </Grid>
      }
    </Container>
  )
}

export default App
