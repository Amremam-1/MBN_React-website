import { useMutation, useQueryClient } from "react-query"
import { addNewData } from "../../api/api"

export const useAddData = (endpoint) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (newItem) => {
      return await addNewData(endpoint, newItem)
    },
    {
      onSuccess: () => {
        // تحديث البيانات بعد الإضافة
        queryClient.invalidateQueries([endpoint])
      },
      onError: (error) => {
        console.error("Error adding data:", error)
      },
    }
  )
}
