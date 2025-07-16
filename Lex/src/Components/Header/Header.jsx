// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'


// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="/Images/Logo-final-1.png"
//                             className="mr-4 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to='/'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/about'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/archives'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Archives
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/editorial-board'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Editorial Board
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/submission-guidelines'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Submission Guidelines
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/ethical'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Ethical Policy
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to='/indexing'
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
//                                     }
//                                 >
//                                     Indexing
//                                 </NavLink>
//                             </li>
                            
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { HiMenu, HiX } from 'react-icons/hi'; // npm i react-icons

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { to: '/',            label: 'Home' },
//     { to: '/about',       label: 'About' },
//     { to: '/archives',    label: 'Archives' },
//     { to: '/editorial-board',   label: 'Editorial Board' },
//     { to: '/submission-guidelines',  label: 'Submission Guidelines' },
//     { to: '/indexing',    label: 'Indexing' },
//   ];

//   /* link style reused on desktop + mobile */
//   const linkBase =
//     'block px-4 py-2 md:px-5 md:py-0 text-[#900001] hover:text-black whitespace-nowrap';

//   return (
//     /* fixed header (remove fixed‑top classes if you prefer non‑sticky) */
//     <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="mx-auto flex items-center justify-between max-w-screen-xl p-4">
//         {/* ---- logo ---- */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="/Images/Logo-final-1.png"
//             alt="Lex Revolution"
//             className="h-14 w-auto"
//           />
//         </Link>

//         {/* ---- desktop nav ---- */}
//         <nav className="hidden md:flex gap-4 lg:gap-6">
//           {links.map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               className={({ isActive }) =>
//                 `${linkBase} ${isActive ? 'font-semibold underline' : ''}`
//               }
//             >
//               {label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* ---- hamburger (mobile) ---- */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-3xl text-[#900001] focus:outline-none"
//           aria-label="Toggle navigation menu"
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* ---- mobile slide‑down panel ---- */}
//       <div
//         /* height‑auto transition: max‑height animates from 0→screen */
//         className={`md:hidden overflow-hidden bg-white shadow-md transition-all duration-300 ${
//           open ? 'max-h-[400px] border-t' : 'max-h-0'
//         }`}
//       >
//         {links.map(({ to, label }) => (
//           <NavLink
//             key={to}
//             to={to}
//             onClick={() => setOpen(false)}           /* close on click */
//             className={({ isActive }) =>
//               `${linkBase} text-lg border-b border-gray-200 ${
//                 isActive ? 'font-semibold underline' : ''
//               }`
//             }
//           >
//             {label}
//           </NavLink>
//         ))}
//       </div>
//     </header>
//   );
// }

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/Images/Logo-final-1.png"
                            className="mr-4 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Navigation menu */}
                    <div
                        className={`${
                            isMenuOpen ? 'flex' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/archives'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Archives
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/editorial-board'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Editorial Board
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/submission-guidelines'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Submission Guidelines
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/ethical'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Ethical Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/indexing'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#900001]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#900001] lg:p-0`
                                    }
                                >
                                    Indexing
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
