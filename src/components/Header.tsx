import Link from "next/link";
import CartButton from "./CartButton";
import { FaPizzaSlice } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold flex items-center hover:text-yellow-300 transition duration-300"
        >
          <FaPizzaSlice className="mr-2 text-yellow-400" />
          <span>Slice of Heaven</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                href="/menu"
                className="text-lg font-semibold hover:text-yellow-300 transition duration-300"
              >
                Our Menu
              </Link>
            </li>

            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
