import { atom } from "jotai";

interface Cart {
  id: string;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

export const cartAtom = atom<Cart[]>([]);
