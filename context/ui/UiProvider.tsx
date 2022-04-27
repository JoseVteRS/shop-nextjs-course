import { FC, ReactNode, useReducer } from "react";
import { UiContext, uiReducer } from "./";
export interface UiState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
};

type UiProps = { children?: ReactNode };

export const UiProvider: FC<UiProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: "[UI] - ToogleMenu" });
    };

    return (
        <UiContext.Provider
            value={{
                ...state,

                //Methods
                toggleSideMenu,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};
