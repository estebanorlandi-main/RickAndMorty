import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react/cjs/react.development';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

/*
"id": 1,
"name": "Rick Sanchez",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
"origin": {
  "name": "Earth (C-137)",
  "url": "https://rickandmortyapi.com/api/location/1"
},
"location": {
  "name": "Citadel of Ricks",
  "url": "https://rickandmortyapi.com/api/location/3"
},
"image": "https://rickandmortyapi.com/api/avatar/1.jpeg",
"episode": [
  "https://rickandmortyapi.com/api/episode/1"
],
"url": "https://rickandmortyapi.com/api/1",
"created": "2017-11-04T18:48:46.250Z"
*/

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const p = async () => {
      const { data } = await axios('https://rickandmortyapi.com/api/character');
      if (!data.results) return;
      setCharacters(data.results);
    };
    p();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <main>
          <h1 className="page-name">Characters</h1>
          <ul>
            {characters.map(
              ({ id, image, name, species, status, origin, location }) => (
                <li
                  className="bg-slate-50 p-5 rounded transition duration-300 shadow hover:shadow-md"
                  key={id}
                >
                  <div className="img-container">
                    <Image width="300" height="300" src={image} alt="" />
                  </div>
                  <div>
                    <h1>{name}</h1>
                    <div>
                      <p>{species}</p>
                      <p>{status}</p>
                      {origin.name}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </main>
      </Container>

      <style jsx>{`
        ul {
          display: flex;
          flex-flow: column;
          gap: 1rem;
        }

        li {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          width: 100%;
        }

        .img-container {
          display: block;
          height: 100%;
          max-width: 5rem;
        }

        .page-name {
          color: #aaa;
          margin: 1rem 0;
        }

        @media (min-width: 30rem) {
          ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
          }

          li {
            flex-flow: column;
            align-items: flex-start;
          }
          .img-container {
            display: block;
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Characters;
