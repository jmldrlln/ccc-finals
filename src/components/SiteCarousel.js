import { useState } from "react"
import news from "../data/news.json"

const SiteCarousel = () => {
    const [ headlines ] = useState(
        news.filter(news => news.isHeadline)
    )

    return (
        <div
            id="carousel"
            className="carousel slide carousel-fade relative h-112 text-white"
            data-bs-ride="carousel"
        >
            {/* Carousel slides */}
            { headlines.map(report => {
                return (
                    <div class="carousel-inner relative w-full h-full overflow-hidden">
                        <div class="carousel-item active float-left w-full h-full">
                            <div className="absolute w-full h-full bg-black-0/50"></div>
                            <div className="absolute w-3/5 h-full px-28 flex flex-col gap-4 justify-center">
                                <h1 className="text-3xl">{report.title}</h1>
                                <p className="text-lg">{report.blurb}</p>
                            </div>
                            <img
                                src={require("../images" + report.img)}
                                class="block w-full h-full object-cover object-center"
                                alt={report.alt}
                            />
                        </div>
                    </div>    
                )
            })}
            {/* Carousel controls - hide */}
            {/* <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            </button> */}
        </div>
    )
}

export default SiteCarousel