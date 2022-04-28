import { FC, ReactNode, useReducer } from "react";
import { ICartProduct } from "../../interfaces/cart";
import { CartContext, cartReducer } from "./";

export interface CartState {
    cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
};

type CartProps = { children?: ReactNode };

export const CartProvider: FC<CartProps> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    return (
        <CartContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
