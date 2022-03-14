import Link from 'next/link';
import Cards from '../../components/Cards';
import Container from '../../components/Container';
import getCharacters from '../../graphql/getCharacters';

function Characters({ characters, info }) {
  return (
    <>
      <main>
        <Container>
          <h1>Characters</h1>

          <Cards characters={characters} />

          <div>
            {info.prev ? (
              <Link href={`/characters/${info.prev}`}>
                <a className="btn bg-purple-500 text-white p-2 px-3" href=".">
                  Prev
                </a>
              </Link>
            ) : undefined}
            {info.next ? (
              <Link href={`/characters/${info.next}`}>
                <a className="btn bg-purple-500 text-white p-2 px-3" href=".">
                  Next
                </a>
              </Link>
            ) : undefined}
          </div>
        </Container>
      </main>

      <style jsx>{`
        h1 {
          color: #888;
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
        .btn {
          display: block;
          max-width: max-content;
          margin: 0.5rem 0 1rem 0;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { page } = params;
  const { characters, info } = await getCharacters({ page: Number(page) });

  return {
    props: {
      characters,
      info,
    },
  };
}

export default Characters;
