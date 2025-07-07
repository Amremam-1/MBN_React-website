import React, { useContext, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/grid"
import useFetchData from "../../hooks/useFetchData"
import TestimonialHeader from "./TestimonialHeader"
import Skeleton from "./Skeleton"
import Image from "../Image"
import { useTranslation } from "react-i18next"
import ThemeContext from "../ThemeContext"
import clsx from "clsx"

const Testimonial = () => {
  const { darkMode } = useContext(ThemeContext)
  const swiperRef = useRef(null)
  const { t } = useTranslation()

  const { data, isLoading } = useFetchData("comments")

  const testimonials = data?.status === "Success" ? data?.data : []

  return (
    <section
      className={clsx("container bg-darkBg py-14", darkMode && "bg-lightBg")}
    >
      <TestimonialHeader />

      {isLoading ? (
        <div className="flex justify-between flex-col items-center md:flex-row gap-2 mt-3">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <Skeleton key={index} />
            ))}
        </div>
      ) : testimonials.length > 0 ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          // loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
          ref={swiperRef}
          breakpoints={{
            320: {
              slidesPerView: 1, // عند الشاشات الأصغر من 640px، يتم عرض شريحة واحدة
            },
            768: {
              slidesPerView: 2, // عند الشاشات من 768px أو أكبر، يتم عرض شريحتين
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 shadow-lg flex flex-col w-full">
                <p className="text-[#A0A0A0] font-light mb-6 w-3/4 max-md:w-full dark:text-[#333]">
                  {testimonial.comment}
                </p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold white dark:text-lightText">
                      {testimonial.name}
                    </p>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#BB554B] dark:text-orangeText"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927a1 1 0 011.902 0l1.518 3.076 3.396.494a1 1 0 01.554 1.705l-2.457 2.395.58 3.382a1 1 0 01-1.451 1.054L10 13.347l-3.039 1.598a1 1 0 01-1.451-1.054l.58-3.382-2.457-2.395a1 1 0 01.554-1.705l3.396-.494 1.518-3.076z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>

                <Image
                  src={"../../../images/Ornament.webp"}
                  alt="shape7"
                  className="mt-5 w-[300px] h-[100]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-white dark:text-lightText">
          {t("testmonial-no-comment")}
        </p>
      )}
    </section>
  )
}

export default Testimonial
