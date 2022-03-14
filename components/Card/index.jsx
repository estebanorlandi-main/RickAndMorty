import Image from 'next/image';

function Card({ character }) {
  const { image, name, species, status, origin } = character ?? {};
  return (
    <>
      <li className="bg-slate-50 p-5 rounded transition duration-300 shadow hover:shadow-md">
        <div className="img-container">
          {image ? (
            <Image width="300" height="300" src={image} alt="" />
          ) : undefined}
        </div>
        <div>
          <h1>{name}</h1>
          <div>
            <p>{species}</p>
            <p>{status}</p>
            {origin?.name}
          </div>
        </div>
      </li>
      <style jsx>{`
        li {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          width: 100%;
        }
        .img-container {
          display: block;
          width: 100%;
          max-width: 5rem;
        }
        @media (min-width: 30rem) {
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

export default Card;
