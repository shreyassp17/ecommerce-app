import { useState } from "react"
import { useSelector } from "react-redux"

export default function Header() {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const cart = useSelector((store) => store.cart)

    return (
        <header className="text-md text-stone-700">
            <div className="flex flex-col items-center px-6 py-2 
                            sm:flex-row sm:justify-between">
                <p className="cursor-pointer">Welcome to CHIC Fashion</p>
                <div className="flex gap-2">
                    <span className="hover:underline cursor-pointer">Help</span>
                    <span>|</span>
                    <span className="hover:underline cursor-pointer">Offers</span>
                    <span>|</span>
                    <span className="hover:underline cursor-pointer">Visit Stores</span>
                    <span>|</span>
                    <span className="hover:underline cursor-pointer">Track Order</span>
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center justify-between px-6 py-4 text-md border-t border-b border-slate-200 
                            sm:flex-row">
                <div className="hidden sm:flex gap-2 ">
                    <i className="fa-brands fa-facebook cursor-pointer"></i>
                    <i className="fa-brands fa-x-twitter cursor-pointer"></i>
                    <i className="fa-brands fa-youtube cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                </div>
                <div className="w-20">
                    <img className="w-20 object-cover" src="./logos/logo.png" alt="Logo" />
                </div>
                <div className="flex gap-2 ">
                    <div className="relative">
                        <input className="outline-none border-b border-slate-400 pb-1" type="search" placeholder="Search products" />
                        <i className="fa-solid fa-magnifying-glass absolute right-3 top-1 cursor-pointer"></i>
                    </div>
                    <div className="flex gap-3 items-center">
                        <i className="fa-solid fa-phone cursor-pointer" />
                        <i className="fa-solid fa-user cursor-pointer"></i>
                        <i className="fa-solid fa-cart-shopping cursor-pointer relative">
                            <div className="flex justify-center text-xs font-thin text-stone-50 items-center absolute w-4 h-4 rounded-full bg-red-700 top-0 right-0 translate-x-2 -translate-y-3">{cart.cart.length}</div>
                        </i>
                    </div>
                </div>
            </div>

            <div className="sm:hidden px-2 py-2">
                {!navBarOpen ? <i className="fa-solid fa-bars cursor-pointer sm:hidden" onClick={() => setNavBarOpen(true)}></i> :
                    <i className="fa-solid fa-xmark cursor-pointer sm:hidden" onClick={() => setNavBarOpen(false)}></i>}
                {navBarOpen && <nav>
                    <ul className="flex flex-col items-center gap-2 font-semibold">
                        <li className="cursor-pointer"><i className="fa-solid fa-house"></i></li>
                        <li className="cursor-pointer">Men&apos;s wear</li>
                        <li className="cursor-pointer">Women&apos;s wear</li>
                        <li className="cursor-pointer">Kid&apos;s wear</li>
                        <li className="cursor-pointer">Western wear</li>
                        <li className="cursor-pointer">Indian wear</li>
                        <li className="cursor-pointer">Bags</li>
                        <li className="cursor-pointer">Shoes</li>
                        <li className="cursor-pointer">Watches</li>
                    </ul>
                </nav>}
            </div>

            <div className="hidden  sm:flex sm:justify-center  px-2 py-2 shadow-md">
                <nav className="sm:min-w-[50%]">
                    <ul className="flex flex-wrap items-center justify-around gap-4 font-semibold ">
                        <li className="cursor-pointer"><i className="fa-solid fa-house"></i></li>
                        <li className="cursor-pointer">Men&apos;s wear</li>
                        <li className="cursor-pointer">Women&apos;s wear</li>
                        <li className="cursor-pointer">Kid&apos;s wear</li>
                        <li className="cursor-pointer">Western wear</li>
                        <li className="cursor-pointer">Indian wear</li>
                        <li className="cursor-pointer">Bags</li>
                        <li className="cursor-pointer">Shoes</li>
                        <li className="cursor-pointer">Watches</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
