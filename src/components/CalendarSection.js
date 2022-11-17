import events from "../data/events.json"

const CalendarSection = () => {
    return (
        <div className="h-auto md:h-132 lg:h-140 w-full">
            <div className="w-full mb-4 lg:mb-6 flex flex-row justify-between">
                <h1 className="text-xl lg:text-2xl">Calendar of Events</h1>
                <p className="text-sm lg:text-base text-aqua-500 hover:text-aqua-600 active:text-aqua-500 cursor-pointer self-center">
                    See All &gt;
                </p>
            </div>
            <div className="bg-black-300 rounded shadow-md overflow-hidden">
            { events.map(event => {
                return (
                    <div className="w-full flex flex-col">
                        <div 
                            className="pb-4 hover:bg-aqua-500 active:bg-aqua-600 hover:text-white duration-300 ease-in-out hide-image-hover w-paragraph-hover cursor-pointer"
                        >
                            <img
                                src={require("../images" + event.img)}
                                className="block w-full object-cover object-center duration-500 ease-in-out mb-4"
                                alt={event.alt}
                            />
                            <div className="flex flex-col lg:gap-1 px-4">
                                <p className="text-xs lg:text-sm text-aqua-500 duration-300 ease-in-out">{event.date}</p>
                                <h3 className="text-base lg:text-xl line-clamp-2">{event.title}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default CalendarSection