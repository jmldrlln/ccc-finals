import challenge from "../images/challenge.png"
import projections from "../images/projections.png"
import actions from "../images/actions.png"

const LandingFeature = () => {
    return (
        <div className="w-screen px-8 py-10 bg-aqua-600 text-white">
            <div className="w-full flex flex-row justify-evenly">
                <div className="w-1/3 flex flex-col gap-2 justify-center items-center border border-black-0">
                    <img
                        src={challenge}
                        alt="vector graphic of earth with a thermometer above"
                        className="w-2/5"
                    />
                    <h3 className="text-2xl font-bold jakarta-sans">
                        Climate Challenge
                    </h3>
                    <h4 className="text-lg">
                        Understanding Global Warming of 1.5°C
                    </h4>
                </div>
                <div className="w-1/3 flex place-content-center border border-black-0">
                    <img
                        src={projections}
                        alt="vector graphic of earth with a thermometer above"
                        className="h-48"
                    />
                </div>
                <div className="w-1/3 flex place-content-center border border-black-0">
                    <img
                        src={actions}
                        alt="vector graphic of earth with a thermometer above"
                        className="h-48"
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingFeature