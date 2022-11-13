import { useState } from "react"

const LandingFeature = () => {
    const [ features ] = useState([
        {
            img: require("../images/challenge.png"),
            imgHover: require("../images/challenge-hover.png"),
            title: "Climate Challenge",
            description: "Understanding Global Warming of 1.5°C",
            alt: "vector graphic of earth with a thermometer above",
        },
        {
            img: require("../images/projections.png"),
            imgHover: require("../images/projections-hover.png"),
            title: "Climate Change Projections",
            description: "",
            alt: "vector graphic of the philippines encircled",
        },
        {
            img: require("../images/actions.png"),
            imgHover: require("../images/actions-hover.png"),
            title: "Climate Action",
            description: "The National Strategic Framework\non Climate Change",
            alt: "vector graphic of a windmill",
        },
    ])

    return (
        <>
        <div className="z-50 absolute w-screen -mt-20">
            <div className="w-full flex flex-row gap-8 place-content-center px-8">
                {   features.map((feature, index) => {
                    return (
                        <div
                            className="w-1/4 h-56 flex flex-col gap-2 justify-center items-center bg-black-300 rounded shadow-lg
                            hover:bg-aqua-500 active:bg-aqua-600 hover:text-white duration-300 ease-in-out w-paragraph-hover cursor-pointer"
                            onMouseOver={e => (e.currentTarget.firstChild.src = feature.imgHover)}
                            onMouseLeave={e => (e.currentTarget.firstChild.src = feature.img)}
                        >
                            <img
                                id={index}
                                src={feature.img}
                                alt={feature.alt}
                                className="w-1/4"
                            />
                        <h3 className="text-xl">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-black-700 italic whitespace-pre-line duration-300 ease-in-out">
                            {/* {feature.description} */}
                            Learn more
                        </p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="bg-black-400 h-52"></div>
        </>
    )
}

export default LandingFeature