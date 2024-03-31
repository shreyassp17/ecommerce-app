
export default function Footer() {
    return (
        <footer>
            <div className="px-6 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <h3 className="uppercase text-md font-bold">Newsletter</h3>
                    <p className="text-sm text-stone-600">Receive our weekly newsletter. For dietary content, fashion insider and the best offer.</p>
                    <div className="flex h-10">
                        <input className="w-80 h-full py-2 px-4 text-sm outline-none border-2 border-stone-900" type="email" placeholder="E-mail Address" />
                        <button className="bg-stone-950 text-stone-50 w-20 h-full text-sm">Join</button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-stone-600">
                            We&apos;re available by phone <span className="text-md text-stone-950 font-bold">+91 98765 43210</span>
                        </p>
                        <p className="text-sm text-stone-600">info@chicfashion.in</p>
                        <p className="text-sm text-stone-600">Monday to Sunday</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase text-md font-bold">Get more reserved on:</h3>
                        <div className="flex gap-2">
                            <i className="fa-brands fa-facebook cursor-pointer"></i>
                            <i className="fa-brands fa-x-twitter cursor-pointer"></i>
                            <i className="fa-brands fa-youtube cursor-pointer"></i>
                            <i className="fa-brands fa-instagram cursor-pointer"></i>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase mb-2">Information</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-stone-600 text-sm">About Us</p>
                            <p className="text-stone-600 text-sm">Contact Us</p>
                            <p className="text-stone-600 text-sm">FAQ</p>
                            <p className="text-stone-600 text-sm">Careers</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase mb-2">My Account</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-stone-600 text-sm">Login</p>
                            <p className="text-stone-600 text-sm">Register</p>
                            <p className="text-stone-600 text-sm">My Wishlist</p>
                            <p className="text-stone-600 text-sm">Checkout</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase mb-2">Orders and returns</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-stone-600 text-sm">Shopping and Returns</p>
                            <p className="text-stone-600 text-sm">Track Orders</p>
                            <p className="text-stone-600 text-sm">Cancellation</p>
                            <p className="text-stone-600 text-sm">Returns</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase mb-2">Useful Links</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-stone-600 text-sm">Privacy Policy</p>
                            <p className="text-stone-600 text-sm">Terms & Conditions</p>
                            <p className="text-stone-600 text-sm">Blog</p>
                            <p className="text-stone-600 text-sm">Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-stone-900 h-20 w-full px-2 py-6">
                <p className="text-stone-200 font-light text-center">Copyright © 2024 Created by Shreyas S</p>
            </div>
        </footer >
    )
}
