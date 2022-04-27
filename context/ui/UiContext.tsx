import { createContext } from "react";

export interface UiContextProps {
    isMenuOpen: boolean;

    //Methods
    toggleSideMenu: () => void;
}

export const UiContext = createContext({} as UiContextProps);
