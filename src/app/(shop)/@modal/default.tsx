"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { getCartDetails, clearCart } from "@/actions";
import Link from "next/link";

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const { updateCartCount } = useCart();

  useEffect(() => {
    const getDetails = async () => {
      const data = await getCartDetails();
      setCart(data);
    };
    getDetails();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClearCart = async () => {
    await clearCart();
    updateCartCount(0);
    setCart([]);
  };

  return null;
}
