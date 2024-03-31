import { Link } from "react-router-dom";

export default function Occassions() {
    return (
        <section className="px-6 mb-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="relative sm:w-50 h-80">
                    <img className="h-full w-full object-cover" src="/occassions/sherwani.jpg" alt="Sherwani" />
                    <div className="hidden sm:block w-40 h-[2px] bg-pink-500 absolute top-10  right-0 translate-x-full"></div>
                </div>

                <div className="relative flex flex-col justify-center text-center gap-2">
                    <p className="font-bold text-xl">Clothes for every Occassion</p>
                    <p className="text-stone-600 font-medium">Fresh from your pave fashion store</p>
                    <div className="flex gap-4 justify-center">
                        <Link to={`products/category/men's clothing`} className="bg-pink-500 px-2 py-1 text-gray-50 font-semibold">FOR HIM</Link>
                        <Link to={`products/category/women's clothing`} className="bg-pink-500 px-2 py-1 text-gray-50 font-semibold">FOR HER</Link>
                    </div>
                </div>

                <div className="relative sm:w-50 h-80">
                    <img className="h-full w-full object-cover" src="/occassions/saree.jpg" alt="Saree" />
                    <div className="hidden sm:block w-40 h-[2px] bg-pink-500 absolute bottom-10 -translate-x-full"></div>
                </div>
            </div>
        </section>
    )
}
