import Link from 'next/link';

function Menu() {
  return (
    <ul className="flex items-center gap-x-2 sm:gap-x-2 md:gap-x-5 lg:gap-x-7">
      <li>
        <Link href="/episodes">Episodes</Link>
      </li>
      <li>
        <Link href="/characters">Characters</Link>
      </li>
      <li>
        <Link href="/locations">Locations</Link>
      </li>
    </ul>
  );
}

export default Menu;
