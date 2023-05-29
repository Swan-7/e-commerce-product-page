import { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { BsCart3 } from "react-icons/bs";
import menu from "../images/icon-menu.svg";
import { TiTimes } from "react-icons/ti";
import Cart from "./Cart";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    
    return (
        <>
            <header className="flex items-center justify-between py-5 px-5 lg:py-7 
            lg:px-0 border-b border-gray-200 max-w-[61.3rem] mx-auto relative">
                <div className="flex items-center justify-start gap-12">
                    <ul className="flex items-center justify-start gap-3">
                        {!isOpen && (
                            <button onClick={() => setIsOpen(true)}>
                            <li className="lg:hidden w-4"><img src={menu} alt="logo" /></li>
                        </button>
                        )}
                        {isOpen && (
                            <button onClick={() => setIsOpen(false)}>
                            <li className="lg:hidden close">
                                <TiTimes className="text-gray-500 text-xl"/></li>
                        </button>
                        )}
                        <li><img src={logo} alt="logo" className="w-28 lg:w-32" /></li>
                    </ul>

                    <nav className={isOpen ? "open" : undefined}>
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <ul className="flex items-center justify-start gap-3">
                        <li>
                            <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                                <BsCart3 className="text-xl lg:text-2xl text-gray-500" />
                            </button>
                        </li>
                        <li>
                            {cartIsOpen ? <Cart/> : undefined}
                        </li>
                        <li>
                            <img src={avatar} alt="" className="w-6 lg:w-12" />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}