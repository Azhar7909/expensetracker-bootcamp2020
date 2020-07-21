import { createContext } from "react";

let initialSate = [
    {desc: "Cash", amount: 800},
    
]

export const TransactionsContext = createContext(initialSate);
