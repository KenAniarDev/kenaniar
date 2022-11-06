import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className=" shadow-sm border-b border-b-gray-200">
      <nav className="max-w-[1440px] px-5 mx-auto flex justify-between py-4">
        <div className="text-lg font-semibold">Nestor Kenneth Aniar</div>
        <ul className="flex gap-4">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/projects">About</Link>
          </li>
          <li>
            <Link href="/projects">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
