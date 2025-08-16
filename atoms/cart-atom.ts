import { atom } from "jotai";

interface Cart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

export const cartAtom = atom<Cart[]>([]);
