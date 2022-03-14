import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const p = async () => {
      const { data } = await axios('https://rickandmortyapi.com/api/location');
      if (!data.results) return;
      setLocations(data.results);
    };
    p();
  }, []);

  return (
    <>
      <Navbar />

      <Container>
        <main>
          <ul>
            {locations.map((location) => (
              <li className="m-2 p-2 bg-purple-100" key={location.id}>
                <h2>{location.name}</h2>
                <h3>{location.dimension}</h3>
                <p>{location.type}</p>
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
}

export default Locations;
