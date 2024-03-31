
/* eslint-disable react/prop-types */

export default function StarRating({ rating }) {
    return (
        <div className="flex gap-1 ml-1">
            {
                Array.from({ length: rating }, (_, i) => {
                    return <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                })
            }
        </div>
    )
}
