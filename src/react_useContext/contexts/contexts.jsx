import { createContext } from "react";
import { setStorage } from "../storage/storage";


export const ProductsContext = createContext(setStorage())
