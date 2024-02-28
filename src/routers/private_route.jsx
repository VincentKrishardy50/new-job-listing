import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute({children}){
    if(!localStorage.getItem("isLogin")){
        console.log("masuk")
        return <Navigate to='/login'/>
    }
    
    return (
        <div>
            {children ? children : <Outlet/>}
        </div>
    )
}