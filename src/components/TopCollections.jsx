import { Link } from "react-router-dom"

const categories = [
    { image: '/collections/male-model.jpg', title: "Male Model", caption: "Men", category: "men's clothing" },
    { image: '/collections/female-model.jpg', title: "Female Model", caption: "Women", category: "women's clothing" },
    { image: '/collections/kid-model.jpg', title: "Kid Model", caption: "Kids", category: "kid's clothing" },
    { image: '/collections/handbag.jpg', title: "Handbag", caption: "Bags", category: "bags" },
    { image: '/collections/shoes.jpg', title: "Shoes", caption: "Shoes", category: "shoes" },
    { image: '/collections/watches.jpg', title: "Watches", caption: "Watches", category: "watches" },
]

export default function TopCollections() {

    return (
        <section className="px-6 py-4 mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5 md:grid-cols-7">
            <div className="w-full h-45">
                <p className="text-3xl font-bold mb-2 text-fuchsia-800">2024</p>
                <p className="text-2xl font-semibold mb-2">Top Collection</p>
                <p className="text-sm font-extralight">Discover this week the latest pieces from our latest collection</p>
            </div>
            {categories.map((item, i) => {
                return (
                    <div className="w-full h-45" key={i}>
                        <Link to={`/products/category/${item.category}`}>
                            <img className="scale-100 hover:scale-95 transition-transform duration-300 h-[90%] w-full object-cover cursor-pointer rounded-md" src={item.image} alt={item.title} />
                            <span className="cursor-pointer text-md font-semibold">{item.caption}</span>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}
