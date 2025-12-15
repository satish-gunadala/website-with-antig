import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Cloud, Code2, Youtube, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/', icon: Cloud },
        { name: 'YouTube', path: '/youtube', icon: Youtube },
        { name: 'Courses', path: '/courses', icon: GraduationCap },
        { name: 'Projects', path: '/projects', icon: Code2 },
        { name: 'Contact', path: '/contact', icon: null },
    ];

    const activeLinkClass = "text-primary font-semibold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary rounded-md px-3 py-2 text-sm font-medium transition-colors";
    const inactiveLinkClass = "text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-colors";

    return (
        <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-32">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="DevOps Mastery by Satish Gunadala" className="h-28 w-auto object-contain" />
                        </Link>
                    </div>

                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                            >
                                <span className="flex items-center gap-2">
                                    {item.icon && <item.icon size={16} />}
                                    {item.name}
                                </span>
                            </NavLink>
                        ))}
                        <a
                            href="https://youtube.com/@TechWorldwithNana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors ml-4 shadow-sm"
                        >
                            Subscribe
                        </a>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-primary/10 text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                                    }
                                >
                                    {item.icon && <item.icon size={18} />}
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
