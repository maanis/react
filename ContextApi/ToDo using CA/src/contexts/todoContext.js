import { createContext, useContext } from "react";

export const todoContext = createContext()

export function useTodo() {
    return useContext(todoContext)
}

// export const todoProvider = todoContext.Provider