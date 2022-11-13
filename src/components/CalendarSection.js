import events from "../data/events.json"

const CalendarSection = () => {
    return (
        <div className="w-full">
            <div className="w-full mb-6 flex flex-row justify-between">
                <h1 className="text-2xl">Calendar of Events</h1>
                <p className="text-base text-aqua-500 hover:text-aqua-600 active:text-aqua-500 cursor-pointer self-center">
                    See All &gt;
                </p>
            </div>
            { events.map(event => {
                return (
                    <div className="w-full flex flex-col rounded shadow-md bg-black-300 overflow-hidden">
                        <div 
                            className="pb-4 hover:bg-aqua-500 active:bg-aqua-600 hover:text-white duration-300 ease-in-out hide-image-hover w-paragraph-hover cursor-pointer"
                        >
                            <img
                                src={require("../images" + event.img)}
                                className="block w-full object-cover object-center duration-500 ease-in-out mb-4"
                                alt={event.alt}
                            />
                            <div className="flex flex-col gap-1 px-4">
                                <p className="text-sm text-aqua-500 duration-300 ease-in-out">{event.date}</p>
                                <h3 className="text-xl line-clamp-2">{event.title}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarSection