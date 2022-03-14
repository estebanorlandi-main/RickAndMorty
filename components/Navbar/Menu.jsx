import Link from 'next/link';

function Menu() {
  return (
    <ul className="flex items-center gap-x-2 sm:gap-x-2 md:gap-x-5 lg:gap-x-7">
      <li>
        <Link href="/characters" passHref>
          <a href=".">Characters</a>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
