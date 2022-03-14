import Image from 'next/image';

import Container from '../../components/Container';
import getCharacter from '../../graphql/getCharacter';

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
          <h1>{character.name}</h1>
        </main>
      </Container>

      <style jsx>{`
        h1 {
          margin: 2rem 0 0 0;
          text-align: center;
        }
        .img-container {
          width: max-content;
          height: max-content;
          margin: 0 auto;
          border-radius: 100%;
          overflow: hidden;
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
