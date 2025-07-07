import React, { useContext } from "react"
import { FaPlay } from "react-icons/fa"
import { MdArrowOutward } from "react-icons/md"
import Image from "./Image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import ThemeContext from "./ThemeContext"

const Intro = () => {
  const { t, i18n } = useTranslation()
  const { darkMode } = useContext(ThemeContext)
  return (
    <section
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      id="home"
      className={clsx("container py-16 bg-darkBg", darkMode && "bg-lightBg")}
    >
      <div className="flex justify-between w-11/12">
        <div className="relative">
          <div className="relative max-w-fit">
            <Image
              src={
                darkMode
                  ? "../../images/starwhite.png"
                  : "../../images/starbg.webp"
              }
              alt="starbg"
              className="absolute -right-0 -top-6 w-[40px] h-[40px]"
            />
            <h1
              className={clsx(
                "text-orange-500 text-unlock text-7xl max-[900px]:text-[60px] max-[758px]:text-[70px] max-[573px]:text-[40px] dark:text-orangeText",
                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              {i18n.language === "en"
                ? "Technical & marketing"
                : "الخدمات التقنية"}
              <br />

              {i18n.language === "en" ? "services" : "والتسويقية"}
              <span
                className="cursor-pointer ms-8 border border-orange-500 rounded-3xl w-80 h-14 max-md:w-48 max-sm:w-40 max-md:h-11 max-[375px]:ms-0
            bg-[url('../../images/bgvideo.webp')] bg-cover bg-center inline-flex items-center mt-8"
              >
                {/* <p className="w-9 h-9 ms-4 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaPlay className="text-white text-xl" />
                </p> */}
              </span>
            </h1>
          </div>

          <div className="relative max-w-fit">
            <Image
              src={
                darkMode
                  ? "../../images/starwhite.png"
                  : "../../images/starbg.webp"
              }
              alt="starbg"
              className="absolute left-28 w-[30px] h-[30px]"
            />
            <p
              className={clsx(
                "w-2/3 pt-11 text-base font-normal gray-dark max-md:w-full dark:text-grayText",
                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              {t("intro-subtitle")}
            </p>
          </div>

          <div
            className="mt-8 w-fit rounded-full border border-orange-500
           py-4 px-6 max-[573px]:px-3 max-[573px]:py-2 flex items-center
            justify-between gap-4 cursor-pointer dark:bg-orangeText dark:border-orangeText"
          >
            <a
              href="https://api.whatsapp.com/message/C6R4P5DHJQBSC1?autoload=1&app_absent=0"
              className={clsx(
                "text-xl orange font-medium dark:text-white",
                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              {t("intro-lets-get-started")}
            </a>
            <span
              className="w-6 h-6 flex items-center justify-center 
            rounded-md -rotate-12 bg-orange-500 dark:bg-white"
            >
              <MdArrowOutward className="text-xl text-black" />
            </span>
          </div>
        </div>

        <div className="text-center m-auto relative max-sm:hidden">
          {/* <Image
            src={"../../images/shape1.webp"}
            alt="shape1"
            className="max-md:hidden"
          /> */}
          <Image
            src={"../../images/241.gif"}
            alt="shape1"
            className="max-md:hidden w-[350px]"
          />
          <Image
            src={
              darkMode
                ? "../../images/starwhite.png"
                : "../../images/starbg.webp"
            }
            alt="star"
            className="absolute left-0 -bottom-11 w-[30px] h-[30px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
