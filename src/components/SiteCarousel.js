import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import news from "../data/news.json"

const SiteCarousel = () => {
    const [ headlines ] = useState(
        news.filter(news => news.isBanner)
    )

    return (
    <Swiper
        style={{
            "display": "flex",
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "25px",
        }}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="main-carousel"
      >
        {/* Carousel slides */}
        { headlines.map(article => {
            return (                 
                <SwiperSlide className="h-28 mobile:h-44 md:h-72 lg:h-112 xl:h-144 2xl:h-160 text-white">
                    <div className="absolute w-full h-full bg-black-0/50"></div>
                    <div
                        className="absolute left-16 md:left-20 lg:left-24 desktop:left-32 h-full w-3/4 desktop:w-2/3 xl:w-1/2
                        flex flex-col gap-2 lg:gap-4 justify-center">
                        <h1 className="hidden md:inline text-xl lg:text-3xl">{article.title}</h1>
                        <p className="hidden lg:inline text-base">{article.blurb}</p>
                    </div>
                    <img
                        src={require("../images" + article.img)}
                        class="block w-full h-full object-cover object-center"
                        alt={article.alt}
                    />       
                </SwiperSlide>
            )
        })}
      </Swiper>
    )
}

export default SiteCarousel