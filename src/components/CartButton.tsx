"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "@/context/CartContext";
export default function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {cartCount}
      </span>
    </Link>
  );
}
