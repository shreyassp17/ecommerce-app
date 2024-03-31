
export default function Banner() {
    return (
        <section className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:px-20 bg-orange-100 py-6 px-4 gap-4">
                <div className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-truck-fast"></i>
                    <p><span className="font-bold">Free Shipping:</span> on all US order or orders above ₹999 </p>
                </div>
                <div className="hidden xl:block w-[2px] h-10 bg-stone-600 m-auto"></div>
                <div className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-phone"></i>
                    <p><span className="font-bold">Support 24/7:</span> contact us 24 hours a day, 7 days a week </p>
                </div>
                <div className="hidden xl:block w-[2px] h-10 bg-stone-600 m-auto"></div>
                <div className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-right-left"></i>
                    <p><span className="font-bold">10 Days Return:</span> simply return it within 10 days for an exchange </p>
                </div>
            </div>
        </section>
    )
}
