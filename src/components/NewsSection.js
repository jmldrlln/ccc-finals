import { useState } from "react"
import news from "../data/news.json"

const NewsSection = () => {
    const [ headlines ] = useState(
        news.filter(news => news.isHeadline)
    )

    const [ regularNews ] = useState(
        news.filter(news => !news.isHeadline)
    )

    const [isHover, setIsHover] = useState(false)

    return (
        <div className="relative w-full">
                <div className="w-full mb-6 flex flex-row justify-between">
                    <h1 className="text-2xl">Latest News</h1>
                    <p className="text-base text-aqua-500 hover:text-aqua-600 active:text-aqua-500 cursor-pointer self-center">
                        See All &gt;
                </p>
                </div>
            <div className="flex flex-row gap-4">
                {/* Headlines */}
                <div className="w-3/5 flex flex-col gap-4">
                    <Headlines headlines={headlines}/>
                </div>
                {/* Other news */}
                <div className="relative w-2/5">
                    {   isHover ? ""
                        :   <div
                                className="z-50 absolute bottom-0 right-0 w-full h-1/6 bg-gradient-to-b from-transparent to-[#f3f3f3]/100
                                duration-300 ease-in-out"
                                onMouseOver={() => setIsHover(true)}
                            >
                            </div>
                    }
                    <div className="relative w-full h-full overflow-y-scroll overflow-x-hidden">
                        <div className="absolute top-0 right-0">
                            <News regularNews={regularNews} setHoverFalse={() => setIsHover(false)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Headlines = ({ headlines }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-4">
            { headlines.map(article => {
                return (
                    <div
                        className="h-min rounded shadow-md bg-black-300 overflow-hidden
                        hover:shadow-lg duration-300 ease-in-out image-hover title-hover b-paragraph-hover cursor-pointer"
                    >
                        <img
                            src={require("../images" + article.img)}
                            className="w-full h-40 object-cover object-center duration-300 ease-in-out"
                            alt={article.alt}
                        />
                        <div className="flex flex-col gap-1 p-4">
                            <p className="text-sm text-aqua-500 duration-300 ease-in-out">{article.date}</p>
                            <h3 className="text-xl duration-300 ease-in-out line-clamp-2">{article.title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const News = ({ regularNews, setHoverFalse }) =>{
    return (
        <div className="w-full flex flex-col gap-4 px-1 items-center" onMouseLeave={setHoverFalse}>
            { regularNews.map((article, index) => {
                const isLast = regularNews.length-1 === index
                return (
                    <div 
                        className={`z-40 h-min p-4 flex flex-col gap-1 rounded shadow-md bg-black-300 overflow-hidden
                        hover:shadow-lg duration-300 ease-in-out title-hover b-paragraph-hover cursor-pointer
                        ${isLast ? "mb-5" : ""}`}
                    >
                        <p className="text-sm text-aqua-500 duration-300 ease-in-out">{article.date}</p>
                        <h3 className="text-lg duration-300 ease-in-out line-clamp-3">{article.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsSection