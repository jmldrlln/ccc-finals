import CalendarSection from "./CalendarSection"
import NewsSection from "./NewsSection"

const ContentLayout = () => {
    return (
        <div className="w-screen my-16 px-32 flex flex-row gap-8">
            <div className="w-2/3">
                <NewsSection/>
            </div>
            <div className="w-1/3">
                <CalendarSection/>
            </div>
        </div>
    )
}

export default ContentLayout