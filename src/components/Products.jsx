/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


export default function Products({ title, category }) {

    const { categoryName } = useParams()
    const [productsData, setProductsData] = useState([])

    console.log(categoryName, category)

    function fetchData() {
        fetch(`https://fakestoreapi.com/products/category/${categoryName || category}`)
            .then(res => res.json())
            .then(data => setProductsData(data))
            .catch(err => {
                console.log(err)
                setProductsData([])
            })
    }

    console.log(productsData)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="my-4">
            <div className="flex items-center justify-center gap-2">
                <div className="w-20  h-[1px] bg-stone-700 sm:w-40"></div>
                <span className="capitalize text-sm sm:text-xl font-bold">{title || categoryName}</span>
                <div className="w-20  h-[1px] bg-stone-700 sm:w-40"></div>
            </div>
            <div className="px-6 py-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {productsData?.map((item) => {
                    const { title, price, image, id } = item
                    return (
                        <div className={"scale-100 hover:scale-95 transition-transform duration-300 w-full h-80"} key={id}>
                            <Link to={`/products/${id}`}>
                                <img className="h-[85%] w-full object-cover cursor-pointer rounded-md" src={image} alt={title} />
                                <div className="mt-1">
                                    <h3 className="cursor-pointer w-full whitespace-nowrap overflow-hidden truncate text-md font-semibold text-stone-800">{title}</h3>
                                    <div className="flex gap-1 items-center my-1">
                                        <h3 className="text-md font-bold text-stone-800">₹ {price}</h3>
                                        <span className="line-through text-sm text-stone-600">₹ 3399</span>
                                        <span className="text-sm font-bold text-red-600">(30% OFF)</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
