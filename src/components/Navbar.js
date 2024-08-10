// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // For routing
// import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu and close button

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="text-lg font-bold">
//           <Link to="/" className="hover:text-gray-400">Chit Fund Management</Link>
//         </div>
//         <div className="block lg:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:space-x-4">
//           <Link to="/users" className="hover:text-gray-400">Add User</Link>
//           <Link to="/chit-funds" className="hover:text-gray-400">Add Chit Fund</Link>
//           <Link to="/tran" className="hover:text-gray-400">Transactions</Link>
//           <Link to="/all-chit" className="hover:text-gray-400">Chit Funds</Link>
//         </div>
//         <div
//           className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out ${
//             isOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:hidden`}
//         >
//           <div className="flex flex-col items-center pt-12 space-y-4">
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-white"
//             >
//               <FaTimes size={24} />
//             </button>
//             <Link to="/users" className="hover:text-gray-400" onClick={toggleMenu}>Add User</Link>
//             <Link to="/chit-funds" className="hover:text-gray-400" onClick={toggleMenu}>Add Chit Fund</Link>
//             <Link to="/tran" className="hover:text-gray-400" onClick={toggleMenu}>Transactions</Link>
//             <Link to="/all-chit" className="hover:text-gray-400" onClick={toggleMenu}>Chit Funds</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu and close button
import { useAuth } from '../components/auth/AuthContext'; // Import the auth context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Use auth context

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-400">Chit Fund Management</Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex lg:space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/users" className="hover:text-gray-400">Add User</Link>
              <Link to="/chit-funds" className="hover:text-gray-400">Add Chit Fund</Link>
              <Link to="/tran" className="hover:text-gray-400">Transactions</Link>
              <Link to="/all-chit" className="hover:text-gray-400">Chit Funds</Link>
              <button onClick={logout} className="hover:text-gray-400">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          )}
        </div>
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col items-center pt-12 space-y-4">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={24} />
            </button>
            {isAuthenticated ? (
              <>
                <Link to="/users" className="hover:text-gray-400" onClick={toggleMenu}>Add User</Link>
                <Link to="/chit-funds" className="hover:text-gray-400" onClick={toggleMenu}>Add Chit Fund</Link>
                <Link to="/tran" className="hover:text-gray-400" onClick={toggleMenu}>Transactions</Link>
                <Link to="/all-chit" className="hover:text-gray-400" onClick={toggleMenu}>Chit Funds</Link>
                <button onClick={() => { logout(); toggleMenu(); }} className="hover:text-gray-400">Logout</button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-400" onClick={toggleMenu}>Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
