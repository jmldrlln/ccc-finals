import CalendarSection from "./CalendarSection"
import NewsSection from "./NewsSection"

const ContentLayout = () => {
    return (
        <div className="w-screen my-6 md:my-10 lg:mt-16 lg:mb-40 px-2 mobile:px-8 lg:px-12 desktop:px-32 2xl:px-72 flex flex-col lg:flex-row gap-8 xl:gap-20 2xl:gap-40">
            <div className="w-full lg:w-2/3">
                <NewsSection/>
            </div>
            <div className="w-full lg:w-1/3">
                <CalendarSection/>
            </div>
        </div>
    )
}

export default ContentLayout