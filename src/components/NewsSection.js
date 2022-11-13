import { useState } from "react"
import news from "../data/news.json"

const NewsSection = () => {
    const [ headlines ] = useState(
        news.filter(news => news.isHeadline)
    )

    const [ regularNews ] = useState(
        news.filter(news => !news.isHeadline)
    )

    return (
        <div className="relative w-full">
                <div className="w-full mb-6 flex flex-row justify-between">
                    <h1 className="text-2xl">Latest News</h1>
                    <p className="text-base text-aqua-500 hover:text-aqua-600 active:text-aqua-500 cursor-pointer self-center">
                        See All &gt;
                </p>
                </div>
            <div className="flex flex-row gap-8">
                {/* Headlines */}
                <div className="w-3/5 flex flex-col gap-4">
                    <Headlines headlines={headlines}/>
                </div>
                {/* Other news */}
                <div className="w-2/5">
                    <News regularNews={regularNews}/>
                </div>
            </div>
        </div>
    )
}

const Headlines = ({ headlines }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-4">
            { headlines.map(report => {
                return (
                    <div
                        className="h-min rounded shadow-md bg-black-300 overflow-hidden
                        hover:shadow-lg duration-300 ease-in-out image-hover title-hover b-paragraph-hover cursor-pointer"
                    >
                        <img
                            src={require("../images" + report.img)}
                            className="w-full h-40 object-cover object-center duration-300 ease-in-out"
                            alt={report.alt}
                        />
                        <div className="flex flex-col gap-1 p-4">
                            <p className="text-sm text-aqua-500 duration-300 ease-in-out">{report.date}</p>
                            <h3 className="text-xl duration-300 ease-in-out line-clamp-2">{report.title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const News = ({ regularNews }) =>{
    return (
        <div className="w-full flex flex-col gap-4">
            { regularNews.map(report => {
                return (
                    <div 
                        className="h-min p-4 flex flex-col gap-1 rounded shadow-md bg-black-300 overflow-hidden
                        hover:shadow-lg duration-300 ease-in-out title-hover b-paragraph-hover cursor-pointer"
                    >
                        <p className="text-sm text-aqua-500 duration-300 ease-in-out">{report.date}</p>
                        <h3 className="text-lg duration-300 ease-in-out line-clamp-3">{report.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsSection