import { useQuery } from "react-query"
import { fetchDataApi } from "../../api/api"

// استخدام هوك عام لجلب البيانات من API
const useFetchService = (endpoint) => {
  const {
    data: items = [],
    isLoading,
    error,
  } = useQuery([endpoint], () => fetchDataApi(endpoint), {
    retry: 1, // يمكن تحديد عدد المحاولات في حالة الفشل
    refetchOnWindowFocus: false, // تعطيل إعادة التحديث التلقائي عند التبديل بين النوافذ
  })

  return {
    items,
    isLoading,
    error,
  }
}

export default useFetchService
