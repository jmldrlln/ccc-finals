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
        <div className="z-50 absolute w-screen -mt-12 xs:-mt-16 mobile:-mt-20">
            <div className="w-full flex flex-row gap-2 md:gap-4 desktop:gap-8 place-content-center px-4 md:px-6 lg:px-12 desktop:px-8">
                {   features.map((feature, index) => {
                    return (
                        <div
                            className="w-1/3 lg:w-1/4 2xl:w-1/5 h-auto md:h-40 lg:h-56 xl:h-64 2xl:h-72 py-2 xs:py-4 md:py-0 flex flex-col gap-2 justify-center items-center bg-black-300 text-center
                            rounded shadow-lg hover:bg-aqua-500 active:bg-aqua-600 hover:text-white duration-300 ease-in-out w-paragraph-hover cursor-pointer"
                            onMouseOver={e => (e.currentTarget.firstChild.src = feature.imgHover)}
                            onMouseLeave={e => (e.currentTarget.firstChild.src = feature.img)}
                        >
                            <img
                                id={index}
                                src={feature.img}
                                alt={feature.alt}
                                className="w-1/2 md:w-1/4"
                            />
                        <h3 className="hidden md:inline text-base lg:text-xl px-2">
                            {feature.title}
                        </h3>
                        <p className="hidden md:inline text-xs lg:text-sm text-black-700 italic whitespace-pre-line duration-300 ease-in-out">
                            {/* {feature.description} */}
                            Learn more
                        </p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="bg-black-400 h-6 xs:h-12 md:h-32 lg:h-52 xl:h-60 2xl:h-72"></div>
        </>
    )
}

export default LandingFeature