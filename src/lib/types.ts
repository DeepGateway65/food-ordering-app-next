export interface IFood {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ICartItem extends IFood {
  quantity: number;
}
