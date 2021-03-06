import { createContext } from "react";
import { ICartProduct } from "../../interfaces/cart";

export interface CartContextProps {
    cart: ICartProduct[];
}

export const CartContext = createContext({} as CartContextProps);
