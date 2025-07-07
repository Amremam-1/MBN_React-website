import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { GrSend } from "react-icons/gr"
import useFetchService from "../hooks/useFetchService"
import { useAddData } from "../hooks/useAddData"
import Toast from "./Toast"
import clsx from "clsx"

const Form = () => {
  const { t, i18n } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [showToast, setShowToast] = React.useState(false)

  const { items: services, isLoading } = useFetchService("services")
  const addDataMutation = useAddData("contactRequests")

  const onSubmit = (data) => {
    const palyod = {
      name: data.name,
      email: data.email,
      message: data.message,
      phone: data.phone,
      service_id: data.services,
    }

    addDataMutation.mutate(palyod, {
      onSuccess: () => {
        setShowToast(true)
        setTimeout(() => {
          setShowToast(false)
        }, 3000)
        reset()
      },
      onError: (error) => {
        console.error("Error adding data:", error)
      },
    })
  }

  if (isLoading) {
    return (
      <p className="text-xl text-blue-950 font-serif">
        {/* {i18n.language === "en" ? "Loading..." : "تحميل..."} */}
      </p>
    )
  }
  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-name")}
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border-style dark:text-lightText"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-email")}
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email",
              },
            })}
            className="border-style dark:text-lightText"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-phone")}
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="border-style dark:text-lightText"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-service")}
          </label>
          <select
            {...register("services", {
              required: "Please select a service",
            })}
            className="mt-1 p-2 mb-3 w-full bg-darkBg dark:bg-lightBg dark:text-grayText opacity-60 border-b border-gray-600 focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.data.map((serviceItem) => (
              <option key={serviceItem.id} value={serviceItem.id}>
                {i18n.language === "ar"
                  ? serviceItem.ar_name
                  : serviceItem.en_name}
              </option>
            ))}
          </select>
          {errors.services && (
            <p className="text-red-500 text-sm mt-1">
              {errors.services.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-message")}
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="border-style focus:outline-none dark:text-lightText"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="style-button flex items-center gap-3 justify-between dark:text-lightText"
          >
            {t("contact-form-send")}
            <span>
              <GrSend className="text-xl text-[#e65c00] dark:text-orangeText" />
            </span>
          </button>
        </div>
      </form>
      <div
        className={clsx(
          i18n.language === "en"
            ? "absolute bottom-0 right-0"
            : "absolute bottom-0 left-0"
        )}
      >
        {showToast && <Toast />}
      </div>
    </div>
  )
}

export default Form
