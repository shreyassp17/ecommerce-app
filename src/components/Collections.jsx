/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const collections = [
    { image: '/collections/male-model.jpg', title: "Male Model", caption: "Men", category: "men's clothing" },
    { image: '/collections/female-model.jpg', title: "Female Model", caption: "Women", category: "women's clothing" },
    { image: '/collections/kid-model.jpg', title: "Kid Model", caption: "Kids", category: "kid's clothing" },
    { image: '/collections/handbag.jpg', title: "Handbag", caption: "Bags", category: "bags" },
    { image: '/collections/shoes.jpg', title: "Shoes", caption: "Shoes", category: "shoes" },
]

export default function Collections({ title, type }) {
    return (
        <section className="my-4">
            <div className="flex items-center justify-center gap-2">
                <div className="w-20  h-[1px] bg-stone-700 sm:w-40"></div>
                <span className="text-sm sm:text-xl font-bold">{title}</span>
                <div className="w-20  h-[1px] bg-stone-700 sm:w-40"></div>
            </div>
            <div className="px-6 py-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {collections.map((item, i) => {
                    return (<div className={`scale-100 hover:scale-95 transition-transform duration-300 w-full h-80 ${type === "exclusive" && "relative"}`} key={i}>
                        <img className={`${type === "exclusive" ? "h-80" : "h-[85%]"} w-full object-cover cursor-pointer rounded-md`} src={item.image} alt={item.title} />

                        {type === "collection" ? <div className="text-center">
                            <p className="text-sm">Clothing</p>
                            <Link to={`products/category/${item.category}`} className=" text-pink-500 uppercase font-semibold text-sm cursor-pointer">Shop Collection</Link>
                            <div className="w-[90%] m-auto h-[1px] bg-stone-500"></div>
                        </div> : type === "exclusive" ? <div className="absolute bottom-8 left-[50%] text-center translate-center w-full bg-pink-800 opacity-75 text-gray-50">
                            <p className="text-sm font-thin sm:text-md">{item.caption}</p>
                            <p className="text-sm  mb-2 font-semibold sm:text-xl">UP TO 15% OFF</p>
                            <Link to={`products/category/${item.category}`} className="text-sm block m-auto  px-2 py-2 font-bold bg-slate-50 text-pink-800 cursor-pointer">SHOP NOW</Link>
                        </div> : <></>}
                    </div>)
                })}
            </div>
        </section>
    )
}
