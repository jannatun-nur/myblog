import { Link } from 'react-router-dom';
import logo from '../../public/b.png'

const Navbar = () => {

    const links = <>
    <Link to='/paragraph'><button className='lg:px-4 lg:py-1 lg:text-xl text-gray-800 hover:bg-black hover:text-white font-serif rounded-md'>Paragraph</button></Link>
    <Link><button className='lg:px-4 lg:py-1 lg:text-xl text-gray-800 hover:bg-black hover:text-white font-serif rounded-md'>Story</button></Link>
    <Link><button className='lg:px-4 lg:py-1 lg:text-xl text-gray-800 hover:bg-black hover:text-white font-serif rounded-md'>Letter</button></Link>
    <Link><button className='lg:px-4 lg:py-1 lg:text-xl text-gray-800 hover:bg-black hover:text-white font-serif rounded-md'>Email</button></Link>
    </>
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img className='lg:h-14 lg:w-16 w-10 h-9' src={logo} alt="" />
          <p className='text-gray-800 font-serif font-bold'>EduTech</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
                  {links}
          </ul>
        </div>
        {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
      </div>
    </div>
  );
};

export default Navbar;
