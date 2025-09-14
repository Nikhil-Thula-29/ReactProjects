import { createContext, useState } from "react"
import { food_items } from "../../food";


let userContext=createContext();
export default userContext;



export function UserContext({children}) {

    let[input,setInput]=useState("");
    let[cat,setCat]=useState(food_items);//by default it will load all the elements
    let[cart,setCart]=useState(false);
  return (
    <div>
        <userContext.Provider value={{input,setInput,cat,setCat,cart,setCart}}>  
            {children}
        </userContext.Provider>
    </div>
  )
}

