import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEyeLowVision } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="w-screen flex flex-row justify-between py-3 px-10 bg-mustard">
            <div className="flex flex-row gap-6 text-sm text-center">
                <p className="underline-effect break-all">
                    Home
                </p>
                <p className="underline-effect break-all">
                    Our Story
                </p>
                <p className="underline-effect break-all">
                    Our Programs
                </p>
                <p className="underline-effect break-all">
                    Knowledge
                </p>
                <p className="underline-effect break-all">
                    Events
                </p>
                <p className="underline-effect break-all">
                    Newsroom
                </p>
                <p className="underline-effect break-all">
                    Opportunities
                </p>
                <p className="underline-effect break-all">
                    GOVPH
                </p>
            </div>
            <div className="w-1/5 flex flex-row justify-between gap-4">
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
                        className="place-self-center text-black-800 hover:opacity-70 active:opacity-100 duration-100 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar