import { Outlet } from "react-router-dom"
import Header from './Header'
const Buy = () =>{
    
    return(<>
            <Header />
            <Outlet />
          </>)
}

export default Buy;