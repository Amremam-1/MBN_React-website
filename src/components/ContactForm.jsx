import { MdOutlineMailOutline } from "react-icons/md"
import { MdOutlineLocalPhone } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Image from "./Image"
import Form from "./Form"
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { FaSnapchat } from "react-icons/fa6"
import { PiTiktokLogoLight } from "react-icons/pi"
import Footer from "./Footer"
import { FaXTwitter } from "react-icons/fa6"
import ThemeContext from "./ThemeContext"
import { useContext } from "react"

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()

  return (
    <div
      id="contact"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={clsx(
        "bg-darkBg text-white py-12 relative overflow-hidden",
        darkMode && "bg-lightBg"
      )}
    >
      <div
        className={clsx(
          "absolute top-[80px] z-20",
          i18n.language === "ar" ? "-left-[150px]" : "-right-[180px]"
        )}
      >
        {/* <Image
          src={"/images/241.svg"}
          alt="icon"
          className="h-[580px] opacity-25"
        /> */}
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div className="sm:w-[80%] w-[100%]">
          <div className="flex justify-between items-center">
            <h2
              className={clsx(
                "text-4xl font-bold text-orange-500 dark:text-orangeText mb-4 text-unlock",
                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              {t("contact-title-one")}
            </h2>

            <Image src={"/images/Frame.svg"} alt={"icon"} />
          </div>
          <h2
            className={clsx(
              "text-4xl font-bold text-orange-500 dark:text-orangeText mb-8 text-unlock",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("contact-title-two")}
          </h2>
          <p
            className={clsx(
              "text-gray-300 mb-6 dark:text-grayText dark:font-medium",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("contact-subtitle")}
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <MdOutlineLocalPhone className="text-xl me-4 text-[rgba(242,140,30,1)]" />
              <span className="dark:text-lightText">920006943</span>
            </li>
            <li className="flex items-center">
              <MdOutlineMailOutline className="text-xl me-4 text-[rgba(242,140,30,1)]" />
              <span className="dark:text-lightText">info@mahercp.net</span>
            </li>
            <li className="flex items-center">
              <IoLocationOutline className="text-xl me-4 text-[rgba(242,140,30,1)]" />
              <span className="dark:text-lightText">Saudi Arabia</span>
            </li>
          </ul>

          <ul className="flex items-center gap-2">
            {/* <li className="border border-[#E8E8E8] rounded-full p-[5px] flex items-center justify-center">
              <a href="">
                <FiFacebook className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li> */}
            <li className="border border-[#E8E8E8]  rounded-full p-[5px] flex items-center justify-center">
              <a href="https://instagram.com/mbn_cp?igshid=YmMyMTA2M2Y=">
                <FaInstagram className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li>
            <li className="border border-[#E8E8E8] rounded-full p-[5px] flex items-center justify-center">
              <a href="https://www.linkedin.com/feed/">
                <CiLinkedin className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li>
            <li className="border border-[#E8E8E8] rounded-full p-[5px] flex items-center justify-center">
              <a href="https://www.snapchat.com/add/mbn_cp?share_id=nSHsRYPML3Y&locale=ar-SA">
                <FaSnapchat className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li>
            <li className="border border-[#E8E8E8]  rounded-full p-[5px] flex items-center justify-center">
              <a href="https://www.tiktok.com/@mbn_cp?_t=8sTl18jExrc&_r=1">
                <PiTiktokLogoLight className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li>
            <li className="border border-[#E8E8E8]  rounded-full p-[5px] flex items-center justify-center">
              <a href="https://x.com/mbn_cp?s=11&t=70EW0_0tTyEyVdhw_ohacQ">
                <FaXTwitter className="text-xl text-[#E8E8E8] dark:text-orangeText" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative z-30">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactForm
