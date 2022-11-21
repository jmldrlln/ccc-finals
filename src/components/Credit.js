import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceMehBlank } from '@fortawesome/free-regular-svg-icons'
import { motion, AnimatePresence } from "framer-motion"

const Credit = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)

    return (
        <div className="z-120 relative">
            <div
                className={`fixed bottom-4 right-4 w-16 h-16 flex justify-center rounded-full
                shadow-lg cursor-pointer ${isModalOpen ? "bg-black-500" : "bg-mustard animate-bounce"}`}
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                {   isModalOpen
                    ?   <FontAwesomeIcon icon={faFaceMehBlank} className="text-black-300 h-full w-full"/>
                    :   <FontAwesomeIcon icon={faFaceSmile} className="text-black-300 h-full w-full"/>
                }
            </div>
            <AnimatePresence>
            {   isModalOpen
                ?   <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Modal toggle={() => setIsModalOpen(!isModalOpen)}/>
                    </motion.div>
                : ""}
            </AnimatePresence>
        </div>
    )
}

const Modal = ({ toggle }) => {
    return (
        <div
            className="z-110 fixed w-screen h-screen bg-black-0/50"
            onClick={toggle}
        >
            <motion.div
                className="fixed w-11/12 md:w-3/4 lg:w-1/2 desktop:w-2/5 xl:w-1/3 2xl:w-1/4 h-2/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                bg-black-300 rounded-lg shadow-lg overflow-hidden flex flex-col"
                initial={{ x: 0, y: 0, translateX: "-50%", translateY: "50%" }}
                animate={{ x: 0, y: 0, translateX: "-50%", translateY: "-50%" }}
                exit={{ x: 0, y: 0, translateX: "-50%", translateY: "50%" }}
            >
                <div className="w-full md:h-4/5 h-5/6 bg-gradient-to-b from-aqua-500 to-aqua-600 text-black-300">
                    <h6 className="w-full py-4 font-extrabold text-xs text-center">IACADEMY・ITELEC11</h6>
                    <div className="absolute top-12 desktop:top-16 left-1/2 -translate-x-1/2 rounded-full w-36 h-36 mobile:w-40 mobile:h-40 md:w-44 md:h-44 border-8 border-black-300 bg-black-500 flex place-content-center">
                        <h1 className="self-center w-full text-8xl md:text-9xl text-center font-extrabold dm-sans">J</h1>
                    </div>
                </div>
                <div className="w-full h-full py-8 flex flex-col place-content-end">
                    <div className="flex flex-col mobile:flex-row place-content-center gap-2 md:gap-4 text-center">
                        <h1 className="flex flex-col gap-0 text-sm md:text-base font-medium">
                            Jeanela Ladrillano
                            <span className="text-mustard text-xs md:text-sm font-extrabold">BSCS-SE・2SSEWD5</span>
                        </h1>
                        <h1 className="hidden mobile:inline place-self-center text-black-500 text-base md:text-xl font-extrabold">・</h1>
                        <h1 className="flex flex-col gap-0 text-sm md:text-base font-medium">
                            Jacob Hans Cruz
                            <span className="text-mustard text-xs md:text-sm font-extrabold">BSIT-WD・WEB31</span>
                        </h1>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Credit