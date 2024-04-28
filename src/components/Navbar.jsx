import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {logout, user} = useAuth()
  const navlinks = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
</>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to="/"><img className="w-14 h-14" src="https://i.ibb.co/0cn7PrF/jm.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end gap-3">
   {
    user? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
        <div className="w-12 rounded-full">
            <img src={user.photoURL} alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button className="btn btn-sm btn-ghost">{user.displayName}</button>
        </li>
        <li>
          <button onClick={logout} className="btn btn-sm btn-ghost hover:text-red-500">Logout</button>
        </li>
      </ul>
      </div>
      :
      <div className="flex gap-2">
        <div>
            <NavLink to="/login" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Login</span>
</NavLink>
        </div>
        <div>
        <NavLink to="/register"  className="relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Register</span>
</NavLink>
        </div>
      </div>

   }
  </div>
</div>
        </div>
    );
};

export default Navbar;