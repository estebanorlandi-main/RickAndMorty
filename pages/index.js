import Link from 'next/link';
import Container from '../components/Container';

function Landing() {
  return (
    <>
      <main>
        <Container className="flex py-10 items-end justify-center w-screen min-h-screen bg-[url('/images/img-ram-portal.png')] bg-center bg-no-repeat">
          <Link href="/characters/1" passHref>
            <a
              href="."
              className="bg-purple-500 p-5 px-8 rounded-full text-white font-bold text-2xl shadow-md shadow-purple-500 hover:shadow-lg"
            >
              Characters
            </a>
          </Link>
        </Container>
      </main>

      <style jsx>{`
        .img-container {
          width: 100%;
        }
        h1 {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          background: linear-gradient(0deg, #030303bb, transparent);
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;

          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Landing;
