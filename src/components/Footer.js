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
        <div className="w-screen p-16 bg-black-800 text-white">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row gap-20">
                    <div className="w-1/5 h-32 flex flex-row justify-between">
                        <img
                            src={sealOfTransparency}
                            alt="the philippines' seal of transparency"
                            className="object-scale-down"
                        />
                        <img
                            src={coatOfArms}
                            alt="the philippines' coat of arms"
                            className="object-scale-down"
                        />
                    </div>
                    <div className="w-4/5 flex flex-col gap-4 grow text-sm text-black-600">
                        <div className="flex flex-row gap-20">
                            <ContactSection/>
                            <SocmedLinksSection socmedLinks={socmedLinks}/>
                            <GovLinksSection govLinks={govLinks}/>
                            <TimeSection/>
                        </div>
                        <GovSection/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-base text-white">Contact Us</h1>
                <p>
                    6th Floor, First Residences Bldg.<br/>
                    1557 J.P. Laurel Street,<br/>
                    San Miguel, Manila<br/>
                    Philippines<br/>
                </p>
            </div>
            <p className="font-bold"> Email: 
                <span
                    className="pl-1 font-medium text-aqua-500 hover:text-aqua-600
                    active:text-aqua-500 duration-300 ease-in-out cursor-pointer"
                >
                    info@climate.gov.ph
                </span>
            </p>
            <p className="font-bold"> Phone: 
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
        <div className="flex flex-col gap-4">            
            <h1 className="text-base text-white hover:text-aqua-500 active:text-aqua-600
                duration-300 ease-in-out cursor-pointer"
            >
                Glossary of Terms
            </h1>
            <div className="flex flex-col gap-2">
                <h1 className="text-base text-white">Connect With Us</h1>
                <div className="flex flex-row gap-4">
                    { socmedLinks.map(link => {
                        return (
                            <a href={link.link}>
                                <FontAwesomeIcon
                                    icon={link.logo}
                                    className="place-self-center text-sm text-black-500 hover:text-aqua-500
                                    active:text-black-500 duration-300 ease-in-out"
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
        <div className="flex flex-col gap-2">
            <h1 className="text-base text-white">Government Links</h1>
            { govLinks.map(link => {
                return (
                    <a 
                        href={link.link}
                        className="text-white hover:text-aqua-500 active:text-white duration-300 ease-in-out"
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
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 text-base text-white">
                <h1>Republic of the Philippines</h1>
                <h1>|</h1>
                <h1>GOV.PH</h1>
            </div>
            <p>All content is in the public domain unless otherwise stated.</p>
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
        <div className="flex flex-col gap-2 text-right">
            <p>Philippine Standard Time</p>
            <h1 className="text-4xl text-white">{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Footer