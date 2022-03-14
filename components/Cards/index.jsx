import Card from '../Card';

function Cards({ characters }) {
  return (
    <>
      <ul>
        {characters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          flex-flow: column;
          gap: 1rem;
        }
        @media (min-width: 30rem) {
          ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
          }
        }
      `}</style>
    </>
  );
}

export default Cards;
