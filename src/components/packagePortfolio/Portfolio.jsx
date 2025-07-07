

import { useState, useContext } from "react"
import useFetchData from "../../hooks/useFetchData"
import Skeleton from "../Skeleton"
import PortfolioHeader from "./PortfolioHeader"
import Image from "../Image"
import Pagination from "./Pagination"
import { useTranslation } from "react-i18next"
import ThemeContext from "../ThemeContext"
import clsx from "clsx"

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const [selectedServiceId, setSelectedServiceId] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const { data, isLoading } = useFetchData("projects")
  const { data: servicesData, isLoading: serviceLoading } =
    useFetchData("services")

  const projects = data?.status === "Success" ? data?.data : []
  const services = servicesData?.status === "Success" ? servicesData?.data : []

  const filteredProjects = selectedServiceId
    ? projects.filter(
        (project) => project.service_id === String(selectedServiceId)
      )
    : projects

  // Pagination Logic
  const totalSlides = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const goToNextSlide = () => {
    if (currentPage < totalSlides - 1) setCurrentPage(currentPage + 1)
  }

  const goToPrevSlide = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  const scrollToTop = () => {
    const gallery = document.getElementById("gallery")
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const handleServiceSelect = (serviceId) => {
    setSelectedServiceId(serviceId)
    setCurrentPage(0)
    scrollToTop()
  }

  return (
    <div
      id="gallery"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={clsx(
        "bg-darkBg text-white py-10 px-5 relative",
        darkMode && "bg-lightBg"
      )}
    >
      <PortfolioHeader
        services={services}
        onServiceSelect={handleServiceSelect}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-14 max-sm:px-0 gap-5">
        {isLoading || serviceLoading ? (
          Array(6)
            .fill("")
            .map((_, index) => <Skeleton key={index} />)
        ) : paginatedProjects.length > 0 ? (
          paginatedProjects.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden mt-8 rounded-lg w-[350px] md:w-full mx-auto z-20"
            >
              <a href={item.link} className="w-full h-full block">
                <Image
                  src={item.image}
                  alt={item.en_name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black">
                  <h3 className="text-white text-xl font-bold p-4">
                    {i18n.language === "en" ? item.en_name : item.ar_name}
                  </h3>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300 dark:text-lightText">{t("portfolio-no-projects")}</p>
        )}
      </div>

      {/* Pagination */}
      {filteredProjects.length > itemsPerPage && (
        <Pagination
          activeIndex={currentPage}
          totalSlides={totalSlides}
          goToPrevSlide={goToPrevSlide}
          goToNextSlide={goToNextSlide}
        />
      )}
      <Image
        src={"../../../images/shape5.webp"}
        alt="star"
        className="absolute -left-5 -bottom-20 w-[387px] h-full -z-0"
      />
    </div>
  )
}

export default Portfolio
