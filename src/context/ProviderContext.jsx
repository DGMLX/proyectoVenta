import { useState } from "react"
import AppContext from "./AppContext"


const ProviderContext = ({children}) =>{


    const [cartProducts,setCartProducts] = useState([])

    const agregarAlCarro = () =>{
        
    }

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default ProviderContext