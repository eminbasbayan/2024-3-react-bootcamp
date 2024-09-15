import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"


const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainLayout