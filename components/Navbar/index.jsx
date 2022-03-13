import Link from 'next/link';
import Container from '../Container';
import Menu from './Menu';

function Brand({ children }) {
  return (
    <Link href="/" passHref>
      <a className="font-bold text-purple-800" href=".">
        {children}
      </a>
    </Link>
  );
}

function Navbar() {
  return (
    <header>
      <Container className="py-3">
        <nav className="flex flex-row content-center justify-between">
          <Brand>RickAndMorty</Brand>
          <Menu />
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
