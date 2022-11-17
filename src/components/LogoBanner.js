import banner from "../images/logo-banner.png"

const LogoBanner = () => {
    return (
        <div className="w-screen py-2 lg:py-1 flex justify-center bg-white">
            <img
                src={banner}
                className="object-fit w-5/6 lg:w-3/4 desktop:w-auto"
                alt="Climate Change Commission"
            />
        </div>
    )
}

export default LogoBanner