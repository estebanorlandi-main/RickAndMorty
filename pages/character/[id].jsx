import Image from 'next/image';

import Container from '../../components/Container';
import getCharacter from '../../graphql/getCharacter';

const colors = {
  death: '#f55',
  unknown: '#1e2025',
  alive: '#0f0',
};

function Character({ character }) {
  return (
    <>
      <Container>
        <main>
          <div className="img-container">
            <Image
              width="300"
              height="300"
              src={character.image}
              alt={character.name}
            />
          </div>

          <h2>Name: {character.name}</h2>

          <div className="info">
            <span className="status">Status: {character.status}</span>
            <p>Specie: {character.species}</p>
          </div>
        </main>
      </Container>

      <style jsx>{`
        h2 {
          margin: 2rem 0 0 0;
          text-align: center;
          font-weight: 500;
          font-size: 2rem;
        }
        .img-container {
          width: max-content;
          height: max-content;
          margin: 0 auto;
          border-radius: 100%;
          overflow: hidden;
        }

        .info {
          width: max-content;
          margin: 0 auto;
        }
        .status {
          display: block;
          box-sizing: border-box;
          padding: 0.5rem 1rem;
          font-weight: 500;
          background: ${colors[character.status.toLowerCase()]};
          color: ${character.status.toLowerCase() === 'unknown'
            ? '#fff'
            : '#000'};
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const { character } = await getCharacter({ id: Number(id) });

  return {
    props: {
      character,
    },
  };
}

export default Character;
