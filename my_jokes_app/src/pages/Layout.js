import { Outlet, Link } from "react-router-dom";
import Nav from "../component/Navbar"

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};

export default Layout;