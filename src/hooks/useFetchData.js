import { fetchDataApi } from "../../api/api"
import { useQuery } from "react-query"

const useFetchData = (endpoint) => {
  return useQuery([endpoint], () => fetchDataApi(endpoint), {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    retry: 2,
  })
}

export default useFetchData
