import { createContext } from "react";

let initialSate = [
    {desc: "Book", amount: 800},
    {desc: "Cash", amount: -800},
]

export const contextData = createContext(initialSate);
