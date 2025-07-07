import React, { useContext, useEffect, useMemo, useState } from "react"
import { FiArrowDownRight } from "react-icons/fi"
import { FaMousePointer } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import ThemeContext from "./ThemeContext"
import useFetchData from "../hooks/useFetchData"
import Skeleton from "../components/Skeleton"

const Services = () => {
  const { data, isLoading } = useFetchData("services")
  const { t, i18n } = useTranslation()
  const { darkMode } = useContext(ThemeContext)

  const services = useMemo(() => {
    return data?.status === "Success" ? data?.data : []
  }, [data])

  const [toggles, setToggles] = useState({})
  const [showAll, setShowAll] = useState(false)

  const displayedServices = useMemo(() => {
    return showAll ? services : services.slice(0, 6)
  }, [showAll, services])

  useEffect(() => {
    if (services.length > 0) {
      const initialToggles = services.reduce(
        (acc, service) => ({
          ...acc,
          [service.id]: false,
        }),
        {}
      )
      initialToggles[services[0].id] = true
      setToggles(initialToggles)
    }
  }, [services])

  const handleToggle = (id) => {
    setToggles((prevToggles) => ({
      [id]: !prevToggles[id],
    }))
  }

  return (
    <section
      id="service"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={clsx("bg-darkBg pb-20", darkMode && "bg-lightBg")}
    >
      <div className="py-16 container flex justify-between min-[769px]:items-center max-[768px]:flex-col items-start">
        <div className="w-[35%] max-[991px]:w-[45%] max-md:w-full">
          <h1
            className={clsx(
              "mb-6 flex items-center gap-4 text-unlock text-5xl text-[#F28C1E] max-sm:text-4xl dark:text-orangeText",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("service-title")}
            <span className="w-6 h-6 flex items-center justify-center rounded-md -rotate-12 bg-[#F28C1E] dark:bg-orangeText">
              <FiArrowDownRight className="text-2xl text-black dark:text-white" />
            </span>
          </h1>

          <div className="w-full">
            {isLoading ? (
              <Skeleton />
            ) : (
              displayedServices.map((item) => (
                <div key={item.id} className="flex items-center gap-3 mb-6">
                  <div className="w-full border border-[#A0A0A0] rounded-2xl p-3 flex items-center text-xl font-light white justify-between">
                    <span
                      className={clsx(
                        toggles[item.id] ? "opacity-100" : "opacity-50",
                        "dark:text-lightText dark:font-normal"
                      )}
                    >
                      {i18n.language === "en" ? item.en_name : item.ar_name}
                    </span>
                    <button
                      onClick={() => handleToggle(item.id)}
                      className={clsx(
                        "relative inline-flex items-center h-6 w-12 rounded-full p-1 transition-colors duration-300",
                        toggles[item.id]
                          ? "bg-[#F28C1E] dark:bg-orangeText"
                          : ""
                      )}
                      style={{ border: "1px solid #F28C1E" }}
                    >
                      <span
                        className={`inline-block w-4 h-4 transform rounded-full bg-[#F28C1E] transition-transform ${
                          toggles[item.id]
                            ? i18n.language === "ar"
                              ? "-translate-x-6 bg-white"
                              : "translate-x-6 bg-white"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-[50%] p-4 max-md:w-full">
          {isLoading ? (
            <div className="pt-12">
              <Skeleton />
            </div>
          ) : (
            services.map(
              (item) =>
                toggles[item.id] && (
                  <div key={item.id}>
                    <h2 className="text-3xl white mb-2 dark:text-lightText">
                      {i18n.language === "en" ? item.en_name : item.ar_name}
                    </h2>
                    <p className="text-[#A0A0A0] font-light w-3/4 max-[991px]:w-full dark:text-grayText dark:font-normal">
                      {i18n.language === "en"
                        ? item.en_description
                        : item.ar_description}
                    </p>

                    <div className="w-3/5 max-[991px]:w-full">
                      <h4 className="text-base white my-3 dark:text-lightText">
                        {t("service-tool")}
                      </h4>
                      <div className="flex flex-row gap-4 flex-wrap">
                        {JSON.parse(item.tools).map((tool, index) => (
                          <p
                            key={index}
                            className="p-2 border border-[#F28C1E] dark:border-none dark:bg-orangeText/90 dark:opacity-100 text-sm opacity-50 rounded-xl text-[#F28C1E] dark:text-white"
                          >
                            {tool}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>

      <div className="m-auto w-fit style-button px-5 py-3 flex items-center justify-between gap-2 cursor-pointer">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-l text-[#E8E8E8] font-medium dark:text-lightText"
        >
          {t("service-view-more")}
        </button>
        <span>
          <FaMousePointer className="text-xl text-[#E8E8E8] -rotate-12 dark:text-grayText" />
        </span>
      </div>
    </section>
  )
}

export default Services
