"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { setCartDetails, getCartDetails, clearCartOnReload } from "@/actions";
const CartContext = createContext();

export function CartProvider({ children, initialCount }) {
  const [cartCount, setCartCount] = useState(initialCount);

  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };

  // useEffect(() => {
  //   const handleBeforeUnload = async () => {
  //     await clearCartOnReload();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
