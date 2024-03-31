import Carousel from "../components/Carousel";
import Collections from "../components/Collections";
import Occassions from "../components/Occassions";
import TopCollections from "../components/TopCollections";

const slidesData = [
    { image: '/carousel/image-1.jpg', title: 'Slide 1' },
    { image: '/carousel/image-2.jpg', title: 'Slide 2' },
    { image: '/carousel/image-3.jpg', title: 'Slide 3' },
]

export default function Home() {
    return (
        <>
            <Carousel slides={slidesData} />
            <TopCollections />
            <Collections title={"Exclusive Offers"} type={"exclusive"} />
            <Collections title={"Men's Collections"} type={"collection"} />
            <Collections title={"Women's Collections"} type={"collection"} />
            <Occassions />
            <Collections title={"Amazing Offers on Top Brands"} type={"collection"} />
        </>

    )
}
