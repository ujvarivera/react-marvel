import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const URL = import.meta.env.VITE_MARVEL_API

  useEffect(() => {
    const getCharacters = async (url) => {
      const { data } = await axios.get(url);
      setCharacters(data.data.results)
      console.log(data.data.results)
      setLoading(false)
    }
    getCharacters(URL)
  }, [])

  return (
    <div>
      {
        loading ?
          <p>Loading...</p> :
          <div>
            {
              characters?.map((character) => (
                <div>
                  <img key={character.id} src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={character?.name} />
                  <p>{character?.name}</p>
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}

export default App
