import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faEyeLowVision } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const Links = [
        "Home",
        "Our Story",
        "Our Programs",
        "Knowledge",
        "Events",
        "Newsroom",
        "Opportunities",
        "GOVPH",
    ]

    return (
        <div className="z-100 sticky top-0 w-screen flex flex-row md:justify-between gap-8 md:gap-0 py-3 px-4 md:px-10 lg:px-6 desktop:px-10 xl:px-28 2xl:px-48 bg-mustard shadow-lg">
            <div className='inline-block lg:hidden flex'>
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-xl md:text-2xl place-self-end hover:opacity-70 active:opacity-100 cursor-pointer"
                />
            </div>
            <div className="hidden lg:flex flex-row gap-4 desktop:gap-6 text-sm text-center">
                {
                    Links.map(link => {
                        return(
                            <p className="underline-effect break-all h-full flex items-center">
                                {link}
                            </p>
                        )
                    })
                }
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 desktop:w-1/5 flex flex-row justify-between gap-8 md:gap-4">
                <div className="w-full relative">
                    <div className="h-full absolute left-0 top-0 flex pl-2">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="place-self-center text-sm text-black-500"
                        />
                    </div>
                    <input
                        type="text"
                        className="pl-7 pr-2 w-full h-full text-sm rounded appearance-none border border-black-500 focus:border-0 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                </div>
                <div className="h-full flex">
                    <FontAwesomeIcon
                        icon={faEyeLowVision}
                        className="place-self-center text-black-800 hover:opacity-70 active:opacity-70 active:opacity-100 duration-100 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar