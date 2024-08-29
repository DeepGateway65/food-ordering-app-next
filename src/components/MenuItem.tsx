"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { addToCart, getCartItemCount, removeFromCart } from "@/actions";
import { useCart } from "@/context/CartContext";
import { ICartItem } from "@/lib/types";

interface MenuItemProps {
  item: ICartItem;
}
const MenuItem = ({ item }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity ?? 0);
  const [prevQuantity, setPrevQuantity] = useState(item.quantity ?? 0);
  const { updateCartCount } = useCart();

  const loadCartDetails = async () => {};
  useEffect(() => {
    if (quantity !== prevQuantity) {
      manageCart();
      setPrevQuantity(quantity);
    }
    loadCartDetails();
  }, [quantity]);

  const manageCart = async () => {
    if (quantity > prevQuantity) {
      const addedQuantity = quantity - prevQuantity;
      await addToCart(item, addedQuantity);
      const count = await getCartItemCount();
      updateCartCount(count);
    } else if (quantity < prevQuantity) {
      const removedQuantity = prevQuantity - quantity;
      await removeFromCart(item, removedQuantity);

      const count = await getCartItemCount();
      updateCartCount(count);
    }
  };

  const updateItemCount = (newQuantity: number) => {
    setQuantity(Math.max(0, newQuantity));
  };

  return (
    <div className="border border-black bg-gradient-to-br from-yellow-400 to-red-600 p-4 rounded-lg mb-8">
      <Image src={item.image} height={300} width={300} alt="pizza-image" />

      <div className="p-4">
        <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-blue-900 ">
            $ {item.price.toFixed(2)}
          </p>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              onClick={() => updateItemCount(quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              min="0"
              value={quantity}
              onChange={(e) => updateItemCount(parseInt(e.target.value) || 0)}
              className="w-12 px-2 py-1 text-center text-gray-700 focus:outline-none"
            />
            <button
              className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
              onClick={() => updateItemCount(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
