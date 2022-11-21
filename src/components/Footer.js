import sealOfTransparency from "../images/transparency-seal.png"
import coatOfArms from "../images/coat-of-arms.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react"

const Footer = () => {
    const [ socmedLinks ] = useState([
        {
            logo: faFacebookF,
            link: "https://www.facebook.com/CCCPhl/",
        },
        {
            logo: faTwitter,
            link: "https://twitter.com/CCCPhl",
        },
        {
            logo: faInstagram,
            link: "https://www.instagram.com/cccphl/",
        },
    ])

    const [ govLinks ] = useState([
        {
            name:"Office of the President",
            link: "http://op-proper.gov.ph/",
        },
        {
            name:"Office of the Vice President",
            link: "http://ovp.gov.ph/",
        },
        {
            name:"Senate of the Philippines",
            link: "https://www.senate.gov.ph/",
        },
        {
            name:"House of Representatives",
            link: "http://www.congress.gov.ph/",
        },
        {
            name:"Court of Appeals",
            link: "https://ca2.judiciary.gov.ph/caws-war/",
        },
        {
            name:"Sandiganbayan",
            link: "http://sb.judiciary.gov.ph/",
        },

    ])
    
    return (
        <div className="w-screen px-6 md:px-12 desktop:px-16 2xl:px-72 py-10 md:py-16 bg-black-800 text-white break-normal">
            <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 desktop:gap-20">
                {/* Logos */}
                <div
                    className="desktop:w-1/5 xl:w-1/6 2xl:w-[13%] h-full desktop:h-32 flex flex-row lg:flex-col desktop:flex-row
                    justify-start lg:justify-between gap-4 lg:gap-8 desktop:gap-0">
                    <img
                        src={sealOfTransparency}
                        alt="the philippines' seal of transparency"
                        className="object-scale-down h-24 lg:h-32 desktop:h-auto"
                    />
                    <img
                        src={coatOfArms}
                        alt="the philippines' coat of arms"
                        className="object-scale-down h-24 lg:h-32 desktop:h-auto"
                    />
                </div>
                {/* Links */}
                <div className="w-full lg:w-4/5 flex flex-col gap-4 md:gap-6 grow text-sm text-black-600">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 desktop:gap-20">
                        <div className="w-full lg:w-3/4 flex flex-row gap-4 md:gap-10 lg:gap-4">
                            <div className="w-1/2 lg:w-2/3 flex flex-col lg:flex-row gap-4 md:gap-6">
                                <div className="w-full lg:w-1/2"><ContactSection/></div>
                                <div className="w-full lg:w-1/2"><SocmedLinksSection socmedLinks={socmedLinks}/></div>
                            </div>
                            <div className="w-1/2 lg:w-1/3"><GovLinksSection govLinks={govLinks}/></div>
                        </div>
                        <div className="w-full lg:w-1/4"><TimeSection/></div>
                    </div>
                    <GovSection/>
                </div>
            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4">
            <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="text-base text-white">Contact Us</h1>
                <p className="text-sm lg:text-base">
                    6th Floor, First Residences Bldg. 1557 J.P. Laurel Street, San Miguel, Manila, Philippines
                </p>
            </div>
            <p className="text-sm lg:text-base font-bold"> Email: 
                <span
                    className="inline-block pl-0 sm:pl-1 font-medium text-aqua-500 hover:text-aqua-600
                    active:text-aqua-500 duration-300 ease-in-out cursor-pointer"
                >
                    info@climate.gov.ph
                </span>
            </p>
            <p className="text-sm lg:text-base font-bold"> Phone: 
                <span
                    className="pl-1 font-medium text-aqua-500 hover:text-aqua-600
                    active:text-aqua-500 duration-300 ease-in-out cursor-pointer"
                >
                    (632) 8353 8494
                </span>
            </p>
        </div>
    )
}

const SocmedLinksSection = ({ socmedLinks }) => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4">            
            <h1 className="text-base text-white hover:text-aqua-500 active:text-aqua-600
                duration-300 ease-in-out cursor-pointer"
            >
                Glossary of Terms
            </h1>
            <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="text-base text-white">Connect With Us</h1>
                <div className="flex flex-row gap-4">
                    { socmedLinks.map(link => {
                        return (
                            <a href={link.link}>
                                <FontAwesomeIcon
                                    icon={link.logo}
                                    className="place-self-center text-sm text-black-500 hover:text-aqua-500
                                    active:text-aqua-600 duration-300 ease-in-out"
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const GovLinksSection = ({ govLinks }) => {
    return (
        <div className="flex flex-col gap-1 lg:gap-2">
            <h1 className="text-base text-white">Government Links</h1>
            { govLinks.map(link => {
                return (
                    <a 
                        href={link.link}
                        className="text-sm lg:text-base text-white hover:text-aqua-500 active:text-aqua-600 duration-300 ease-in-out"
                    >
                        {link.name}
                    </a>
                )
            })}
        </div>
    )
}

const GovSection = () => {
    return (
        <div className="flex flex-col gap-0 lg:gap-2 text-center lg:text-left">
            <div className="flex flex-row justify-center lg:justify-start gap-2 lg:gap-4 text-base text-white">
                <h1 className="text-xs xs:text-sm lg:text-base">Republic of the Philippines</h1>
                <h1 className="text-xs xs:text-sm lg:text-base">|</h1>
                <h1 className="text-xs xs:text-sm lg:text-base">GOV.PH</h1>
            </div>
            <p className="text-sm lg:text-base">All content is in the public domain unless otherwise stated.</p>
        </div>
    )
}

const TimeSection = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() { clearInterval(timer) }
    })
    return (
        <div className="flex flex-col gap-0 lg:gap-2 text-center lg:text-right">
            <p className="text-sm lg:text-base">Philippine Standard Time</p>
            <h1 className="text-2xl lg:text-4xl text-white">{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Footer