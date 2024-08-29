export const dynamic = "force-dynamic";

import Foods from "@/lib/menuData";
import MenuItem from "@/components/MenuItem";
import { getCartDetails } from "@/actions";
export default async function MenuPage() {
  const cartDetails = await getCartDetails();
  const cartMap = new Map(cartDetails.map((item) => [item.id, item.quantity]));
  const menuItems = Foods.map((food) => ({
    ...food,
    quantity: cartMap.get(food.id) || 0,
  }));

  return (
    <div className="flex flex-wrap gap-5 justify-evenly p-20 bg-gradient-to-br from-red-500 to-yellow-400">
      {menuItems.map((food) => (
        <MenuItem item={food} key={food.id} />
      ))}
    </div>
  );
}
