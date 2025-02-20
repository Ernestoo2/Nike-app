import { useState } from "react";
import { hamburger } from "../assets/icons/";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full ${isOpen ? 'mb-[10px]' : ''} transition-all duration-300`}>
            <header className="z-10 w-full py-8 padding-x">
                <nav className="flex items-center justify-between max-container">
                    <a href="/">
                        <img src={headerLogo} width={130} height={29} alt="Logo" />
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center justify-center flex-1 gap-16">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-lg leading-normal font-montserrat text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Navigation Button */}
                    <div className="lg:hidden">
                        <button
                            className="text-lg leading-normal font-montserrat text-slate-gray"
                            onClick={toggleHamburger}
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            <img src={hamburger} width={24} height={24} alt="hamburger" />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div 
                    className={`
                        lg:hidden 
                        bg-white 
                        shadow-lg 
                        transition-all 
                        duration-300
                        max-h-0
                        overflow-hidden
                        ${isOpen ? 'max-h-[180px]' : ''}
                    `}
                >
                    <ul className="py-4 px-8 space-y-4">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={toggleHamburger}
                                    className="text-lg leading-normal font-montserrat text-slate-gray block hover:text-gray-900"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Nav;