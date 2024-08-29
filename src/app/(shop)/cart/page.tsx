"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
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

  const handleClearCart = async () => {
    await clearCart();
    updateCartCount(0);
    router.back();

    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold leading-6 text-gray-900">
            Your Cart
          </h1>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {cart.length === 0 ? (
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Items</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Your cart is empty.
                </dd>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-medium text-gray-500">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.quantity} x ${item.price.toFixed(2)} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </dd>
                  </div>
                ))}
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                  <dt className="text-sm font-medium text-gray-500">Total</dt>
                  <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
          <Link
            href="/menu"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
