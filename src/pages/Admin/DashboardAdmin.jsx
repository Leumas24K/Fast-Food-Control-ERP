import SideBar from "../../components/DashboardAdmin/SideBar";
import { Outlet } from 'react-router'

export default function DashboardAdmin() {
  return (
    <header className="flex">
      <SideBar />


      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </header>
  )
}


