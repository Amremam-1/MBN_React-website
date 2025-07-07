import { useTranslation } from "react-i18next"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Pagination = ({
  activeIndex,
  totalSlides,
  goToPrevSlide,
  goToNextSlide,
}) => {
  const { i18n } = useTranslation() // Correct placement of the hook

  return (
    <div
      dir={i18n.language === "ar" ? "ltr" : "rt"}
      className="container flex justify-between max-[768px]:flex-col m-auto mt-5 relative"
    >
      <div className="flex items-center justify-center m-auto gap-4">
        <button onClick={goToPrevSlide} className="pagination-arrow">
          {i18n === "en" ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
        <div className="flex items-center mx-4">
          <span className="dark:text-lightText">{activeIndex + 1}</span>
          <div className="progress-bar-container mx-2 w-24 bg-gray-700 h-2 rounded-full">
            <div
              className="progress-bar bg-orange-500 h-full rounded-full"
              style={{
                width: `${((activeIndex + 1) / totalSlides) * 100}%`,
              }}
            />
          </div>
          <span className="dark:text-lightText">{totalSlides}</span>
        </div>
        <button onClick={goToNextSlide} className="pagination-arrow">
          {i18n === "en" ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
    </div>
  )
}

export default Pagination
