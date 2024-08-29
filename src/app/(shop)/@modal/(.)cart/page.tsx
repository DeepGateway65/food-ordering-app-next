"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

import { getCartDetails, clearCart } from "@/actions";

export default function CartModal() {
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

  const handleClose = () => {
    router.back();
  };

  const handleClearCart = async () => {
    await clearCart();
    updateCartCount(0);
    router.back();

    setCart([]);
  };

  return (
    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full text-black">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-4">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
