import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    )
}

export default AppRouter