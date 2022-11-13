import banner from "../images/logo-banner.png"

const LogoBanner = () => {
    return (
        <div className="w-screen py-1 flex justify-center bg-white">
            <img
                src={banner}
                className="object-fit"
                alt="Climate Change Commission"
            />
        </div>
    )
}

export default LogoBanner