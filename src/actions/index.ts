"use server";

import { ICartItem, IFood } from "@/lib/types";

let cart: ICartItem[] = [];

export async function addToCart(item: IFood, quantity: number) {
  const existingItem = cart.find((existingItem) => existingItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  return getCartItemCount();
}

export async function getCartDetails() {
  return cart;
}

export async function removeFromCart(item: IFood, quantity: number) {
  const existingItem = cart.find((existingItem) => existingItem.id === item.id);
  if (existingItem) {
    existingItem.quantity -= quantity;
    if (existingItem.quantity === 0) {
      cart = cart.filter((existingItem) => existingItem.id !== item.id);
    }
  }
  return getCartItemCount();
}

export async function setCartDetails(data: ICartItem) {
  cart.push(data);
}

export async function clearCart() {
  cart = [];
  return getCartItemCount();
}

export async function getCartItemCount() {
  const totalCartValue = cart.reduce((sum, item) => sum + item.quantity, 0);
  return totalCartValue;
}
