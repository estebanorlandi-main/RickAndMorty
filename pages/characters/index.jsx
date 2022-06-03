import axios from 'axios';

import getCharacters from '../../graphql/getCharacters';

import Container from '../../components/Container';
import Cards from '../../components/Cards';

function Characters({ data: { characters } }) {
  return (
    <>
      <Container>
        <main>
          <h1 className="page-name">Characters</h1>
          <Cards characters={characters} />
        </main>
      </Container>
      <style jsx>{`
        .page-name {
          color: #aaa;
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { characters, info } = await getCharacters({});

  return {
    props: {
      data: {
        characters,
        info,
      },
    },
  };
}

export default Characters;
