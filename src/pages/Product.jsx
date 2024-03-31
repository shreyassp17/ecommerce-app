import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import StarRating from "../components/StarRating";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../features/cart/cartSlice";

export default function Product() {

    const [data, setData] = useState([])
    const { id } = useParams()

    const cart = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    function handleAdd() {
        dispatch(addProduct(data))
    }
    function handleRemove() {
        dispatch(removeProduct(data.id))
    }

    function fetchData() {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err)
                setData([])
            })
    }

    function productInCart(productId) {
        return Boolean(cart.cart.find(item => item.id === productId))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="px-6 py-2">
            <div className="mb-4">
                <h3 className="text-lg font-semibold capitalize">{data.category}</h3>
                <p className="text-stone-600 text-sm">Home/ {data.category}/ {data.title}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                    <img className="w-full scale-100 hover:scale-150 transition-transform duration-300" src={data.image} alt={data.title} />
                </div>
                <div className="">
                    <span className="text-sm font-medium text-green-600">In Stock</span>
                    <h3 className="text-md font-semibold text-stone-800">{data.title}</h3>
                    <span className="text-sm text-stone-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    <div className="flex gap-1 items-center my-2">
                        <h3 className="text-md font-bold text-stone-800">₹ {data.price}</h3>
                        <span className="line-through text-sm text-stone-600">₹ 3399</span>
                        <span className="text-sm font-bold text-red-600">(30% OFF)</span>
                        <StarRating rating={Math.round(data.rating?.rate)} />
                    </div>
                    <h3 className="mb-1 text-md font-semibold text-stone-800">Quick Overview</h3>
                    <p className="text-sm text-stone-600">{data.description}</p>
                    <div className="w-full h-[1px] bg-stone-600 my-4"></div>

                    <div>
                        <span className="mr-6 text-md font-semibold text-stone-800">Select Size</span>
                        <span className="text-md font-semibold text-red-600">Size Chart</span>
                        <div className="flex gap-4 my-4">
                            <button className="w-8 h-8 text-center font-semibold border border-stone-400 rounded-full">S</button>
                            <button className="w-8 h-8 text-center  font-semibold border border-stone-400 rounded-full">M</button>
                            <button className="w-8 h-8 text-center font-semibold border border-stone-400 rounded-full">L</button>
                            <button className="w-8 h-8 text-center font-semibold border border-stone-400 rounded-full">XL</button>
                        </div>
                        <div className="flex gap-6 my-4">
                            <div className="flex gap-2 items-center">
                                <span className="text-md text-stone-800 font-semibold">Quantity</span>
                                <button className="cursor-pointer flex items-center justify-center w-4 h-4 font-bold border border-stone-400 rounded-full">-</button>
                                <span className="font-semibold">1</span>
                                <button className=" cursor-pointer flex items-center justify-center w-4 h-4 font-bold border border-stone-400 rounded-full">+</button>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span className="font-semibold">Color</span>
                                <div className="flex gap-2">
                                    <div className="cursor-pointer w-4 h-4 rounded-full border bg-green-600 border-stone-800"></div>
                                    <div className="cursor-pointer w-4 h-4 rounded-full border bg-red-600 border-stone-800"></div>
                                    <div className="cursor-pointer w-4 h-4 rounded-full border bg-yellow-600 border-stone-800"></div>
                                    <div className="cursor-pointer w-4 h-4 rounded-full border bg-stone-600 border-stone-800"></div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <h3 className="font-semibold">Delivery Details</h3>
                            <div className="flex border-b border-b-stone-600">
                                <input className="w-40 text-sm py-2 outline-none" placeholder="Enter Pincode" />
                                <button className="text-sm font-semibold text-blue-800">Check</button>
                            </div>
                        </div>

                        <div className="flex gap-2 my-6">
                            {!productInCart(data.id) ? <button className="w-35 cursor-pointer bg-red-600 px-4 py-1 font-semibold text-stone-50 uppercase" onClick={handleAdd}>Add to Bag</button> :
                                <button className="w-35 cursor-pointer bg-red-600 px-4 py-1 font-semibold text-stone-50 uppercase" onClick={handleRemove}>Remove from Bag</button>}
                            <button className="w-35 cursor-pointer bg-green-600 px-4 py-1 font-semibold text-stone-50 uppercase">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="my-4 flex gap-4 w-auto overflow-auto text-nowrap font-semibold">
                    <h3 className="underline">Returns And Exchange</h3>
                    <h3>Description</h3>
                    <h3>Specifications</h3>
                    <h3>Reviews</h3>
                </div>
                <div className="w-full h-[1px] bg-stone-400 my-4"></div>
                <p className="text-sm font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta pariatur, veritatis deleniti reiciendis dolorem velit, sed non nisi autem quam quos. Molestiae temporibus illo, soluta consequuntur cupiditate suscipit expedita.</p>
                <div className="w-full h-[1px] bg-stone-400 my-4"></div>
            </div>

            <Products title={"Similar Products"} category={data.category} />
            <Products title={"People also Viewed"} category={data.category} />
        </div>
    )
}
