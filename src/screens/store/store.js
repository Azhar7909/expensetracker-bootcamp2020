import { createContext } from "react";

let initialSate = [
    {desc: "Cash", amount: 500}
]

export const contextData = createContext(initialSate);
