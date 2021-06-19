import React from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <header id="top" className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l z-10">
            <nav id="site-menu"
                 className="flex flex-col py-4 sm:flex-row w-full justify-between items-center px-4 sm:px-6 sm:py-1 bg-white shadow-none sm:shadow">
                <div
                    className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                    <button id="menuBtn" className={"hamburger block sm:hidden focus:outline-none" + (navbarOpen ? " open" : "")} type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                        <span className="hamburger__top-bun"></span>
                        <span className="hamburger__bottom-bun"></span>
                    </button>
                    <a href="#" className="no-underline py-1">
                        <h1 className="font-bold text-lg tracking-widest">GROUP MARKET</h1>
                    </a>
                </div>
                <div id="menu"
                     className={
                         "w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0" +
                         (navbarOpen ? " flex" : " hidden")
                     }>
                    <a className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
                       href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank">About</a>
                    <a className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
                       href="#bottom">Features</a>
                </div>
            </nav>
        </header>
    );
}