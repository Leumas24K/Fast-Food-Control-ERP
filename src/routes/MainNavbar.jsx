import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function MainNavbar() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}
