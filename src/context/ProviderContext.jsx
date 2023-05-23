import AppContext from "./AppContext"


const ProviderContext = ({children}) =>{
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default ProviderContext