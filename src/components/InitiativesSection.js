import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/navigation"

const InitiativesSection = () => {
    const [ initiatives ] = useState([
        {
            img: require("../images/initiatives/updates.gif"),
            title: "Updates and Advisories",
            description: "Always stay up-to-date and connected with the new events and happenings from the CCC.",
            alt: "logo of the updates and advisories initiative",
        },
        {
            img: require("../images/initiatives/anti-plastic.png"),
            title: "Anti Single Use Plastic Campaign",
            description: "The CCC has been advocating for the banning of non-essential and single-use plastics (SUPs) as a way to address the growing problem on plastic pollution.",
            alt: "logo of the anti single use plastic campaign",
        },
        {
            img: require("../images/initiatives/products.png"),
            title: "Knowledge Products",
            description: "All knowledge products produced by the CCC are available through this page, including briefers, brochures, modules, researches, speeches and messages. Climate laws, policies, and press releases can also be accessed through this page.",
            alt: "logo of the knowledge products initiative",
        },
        {
            img: require("../images/initiatives/foi.png"),
            title: "Freedom of Information",
            description: "Operationalizing in the Executive Branch the People’s constitutional right to information and state policies to full public disclosure and transparency in public service.",
            alt: "logo of freedom of information philippines",
        },
        {
            img: require("../images/initiatives/finance.png"),
            title: "Climate Finance",
            description: "Through green banking and financing, climate change adaptation and mitigation will be mainstreamed. In this section, updates on the People's Survival Fund (PSF) and the Green Climate Fund (GCF) will be found.",
            alt: "logo of the climate finance initiative",
        },
        {
            img: require("../images/initiatives/core.png"),
            title: "Communities for Resilience",
            description: "The CORE Initiative aims to build a healthy, sustainable, climate-smart and resilient communities and ecosystems by strengthening the planning capacity and overall resilience of local government units (LGUs) nationwide.",
            alt: "logo of the communities for resilience initiative",
        },
        {
            img: require("../images/initiatives/news.png"),
            title: "Climate News",
            description: "This page contains archive of news articles, opinion pieces, commentaries, journals, and other climate-related information from both local and international publications.",
            alt: "logo of the climate news initiative",
        },
        {
            img: require("../images/initiatives/niccdies.jpg"),
            title: "National Integrated Climate Change Database Information and Exchange System",
            description: "To track the actions necessary to address these climate change issues, the National Integrated Climate Change Database Information and Exchange System (NICCDIES) serves as the integrated climate information portal of the CCC.",
            alt: "logo of the national integrated climate change database information and exchange system",
        },
        {
            img: require("../images/initiatives/psf.jpeg"),
            title: "People's Survival Fund",
            description: "The People’s Survival Fund (PSF) was created pursuant to Section 18 of Republic Act (RA) No. 9729 known as the Climate Change Act of 2009, as amended by RA No. 10174.",
            alt: "logo of the people's survival fund",
        },
        {
            img: require("../images/initiatives/reports.png"),
            title: "Accomplishment Reports",
            description: "Accomplishment reports are submitted annually to account the performance of an office within a specified year, and to inform both internal and external stakeholders of its outputs vis-à-vis its targets.",
            alt: "logo of the accomplishment reports initiative",
        },
    ])

    return (
        <div className="w-screen px-32 bg-aqua-500 py-16 text-white">
            <h1 className="text-3xl text-center mb-8">Our Initiatives</h1>
            <div className="w-full">
                <Swiper
                    style={{
                        "display": "flex",
                        "--swiper-navigation-color": "white",
                        "--swiper-navigation-size": "25px",
                    }}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={50}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="initiatives-carousel"
                >
                    { initiatives.map(initiative => {
                        return (
                            <SwiperSlide
                                style={{
                                    "place-self": "center",
                                    "display": "flex",
                                    "justify-content": "center",
                                }}
                            >
                                {({isActive}) => (
                                    <div
                                        className={`flex flex-col h-120 bg-black-400 rounded overflow-hidden shadow-lg duration-300 ease-in-out text-black-500
                                        ${isActive ? "w-full cursor-pointer" : "w-4/5 opacity-30 pointer-events-none"}`}
                                    >  
                                        <div className="w-full px-12 py-6 flex justify-center bg-white rounded shadow-md">
                                            <img
                                                src={initiative.img}
                                                alt={initiative.alt}
                                                className={`object-scale-down object-center ${isActive ? "h-32" : "h-24"}`}
                                            />
                                        </div>
                                        <div className="grow flex flex-col justify-between p-8">
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-sm text-aqua-500">{initiative.title}</h1>
                                                <p className={`text-black-800 ${isActive ? "text-base" : "text-sm"}`}>
                                                    {initiative.description}
                                                </p>
                                            </div>
                                            <button
                                                className="self-end px-4 py-1 bg-aqua-500 text-white rounded-full font-bold
                                                hover:bg-aqua-600 active:bg-aqua-500 duration-300 ease-in-out cursor-pointer"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default InitiativesSection