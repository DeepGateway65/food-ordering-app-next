import { ReactNode, ReactElement } from "react";
import { getCartItemCount } from "@/actions";
import { CartProvider } from "@/context/CartContext";

interface CartInitializerProps {
  children: ReactNode;
}

export default async function CartInitializer({
  children,
}: CartInitializerProps): Promise<ReactElement> {
  const cartCount = await getCartItemCount();

  return <CartProvider initialCount={cartCount}>{children}</CartProvider>;
}
