
export default function PopularSearches() {
    return (
        <section className="mb-6">
            <div className="px-6 flex flex-col gap-2">
                <div className="flex w-full items-baseline gap-1">
                    <p className="text-nowrap uppercase font-bold">Popular Searches</p>
                    <div className="w-full h-[1px] bg-stone-400 -translate-y-1"></div>
                </div>
                <div>
                    <p className="cursor-pointer text-gray-500">
                        <span className="hover:underline">Wool Sweater | </span>
                        <span className="hover:underline">Women Sweaters | </span>
                        <span className="hover:underline">Winter Caps | </span>
                        <span className="hover:underline">Men Blazers | </span>
                        <span className="hover:underline">Women Coats | </span>
                        <span className="hover:underline">Thermal Clothing | </span>
                        <span className="hover:underline">Sweater | </span>
                        <span className="hover:underline">Dresses | </span>
                        <span className="hover:underline">Kids Winter Wear | </span>
                        <span className="hover:underline">Women Winter Wear | </span>
                        <span className="hover:underline">Men Winter Wear | </span>
                        <span className="hover:underline">Woodland Jacket | </span>
                    </p>
                </div>
                <div className="w-full h-[1px] mt-4 bg-stone-400"></div>
            </div>
        </section>
    )
}
