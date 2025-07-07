import React, { useContext } from "react"
import { FiArrowDownRight } from "react-icons/fi"
import Image from "../Image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import ThemeContext from "../ThemeContext"

const TestimonialHeader = () => {
  const { t, i18n } = useTranslation()
  const { darkMode } = useContext(ThemeContext)
  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="flex justify-between"
    >
      <div>
        <div className="flex gap-4 relative">
          <h1
            className={clsx(
              "text-unlock text-5xl text-[#F28C1E] dark:text-orangeText max-md:text-3xl",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("testmonial-title-one")}
          </h1>
          <span className="w-6 h-6 flex items-center justify-center rounded-md -rotate-12 bg-[#F28C1E] dark:bg-orangeText">
            <FiArrowDownRight className="text-xl text-black dark:text-white" />
          </span>

          <Image
            src={
              darkMode
                ? "../../images/starwhite.png"
                : "../../images/starbg.webp"
            }
            alt="starbg"
            className="absolute -right-0 -top-6 w-[40px] h-[40]"
          />

          <Image
            src={
              darkMode
                ? "../../images/starwhite.png"
                : "../../images/starbg.webp"
            }
            alt="starbg"
            className="absolute left-0 -bottom-20 w-[40px] h-[40]"
          />
        </div>
        <h1
          className={clsx(
            "text-unlock text-5xl text-[#F28C1E] dark:text-orangeText ms-20 max-md:ms-0 max-md:text-3xl",
            i18n.language === "ar" && "text-unlock-arbic"
          )}
        >
          {t("testmonial-title-two")}
        </h1>
      </div>

      <Image
        src={"../../../images/3.png"}
        alt="shape6"
        className={clsx("max-md:hidden w-[170px] h-[170px]" ,i18n.language === "ar" && "transform scale-x-[-1]")}
      />
    </div>
  )
}

export default TestimonialHeader
