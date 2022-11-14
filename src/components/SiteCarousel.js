import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import news from "../data/news.json"

const SiteCarousel = () => {
    const [ headlines ] = useState(
        news.filter(news => news.isHeadline)
    )

    return (
    <Swiper
        style={{
            "display": "flex",
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "25px",
        }}
        spaceBetween={30}
        centeredSlides={true}
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
                <SwiperSlide className="h-112 text-white">
                    <div className="absolute w-full h-full bg-black-0/50"></div>
                    <div className="absolute w-3/5 h-full px-28 flex flex-col gap-4 justify-center">
                        <h1 className="text-3xl line-clamp-3">{article.title}</h1>
                        <p className="text-lg">{article.blurb}</p>
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