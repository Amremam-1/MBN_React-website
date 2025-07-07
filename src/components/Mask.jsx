"use client"
import React, { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { mask } from "../constants"
import Image from "./Image"
import { register } from "swiper/element/bundle"
import ThemeContext from "./ThemeContext"
import clsx from "clsx"

// Register the modules
register()

const Mask = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <section
      className={clsx(
        "bg-[#3e2d20] h-[140px] max-md:h-[120px] max-sm:h-[80px] flex mt-auto justify-center items-center",
        darkMode && "bg-grayText/20"
      )}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
        }}
        // loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3, // Show 1 slide
          },

          768: {
            slidesPerView: 3, // Show 3 slides
          },
          991: {
            slidesPerView: 5, // Show 3 slides
          },
        }}
      >
        {mask.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative
               flex
              justify-center items-center dark:border-orangeText"
            >
              <Image
                src={item.imageUrl}
                alt={item.id}
                className="rounded-full h-[210px] max-sm:h-[140px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Mask
