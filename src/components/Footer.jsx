import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import ThemeContext from "./ThemeContext"
import clsx from "clsx"

const Footer = () => {
  const { darkMode } = useContext(ThemeContext)
  const { i18n } = useTranslation()
  return (
    <div
      className={clsx(
        "p-2 mt-10 bg-darkBg w-full  flex items-center justify-center",
        darkMode && "dark:bg-lightBg"
      )}
    >
      <p className="text-[#E8E8E8] dark:text-lightText dark:font-semibold">
        {i18n.language === "ar"
          ? "© 2023 MBN جميع الحقوق محفوظة"
          : "© 2023 MBN All rights reserved"}
      </p>
    </div>
  )
}

export default Footer
