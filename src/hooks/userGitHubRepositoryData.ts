import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useStoreSelector } from "./hooks";


const API_URL = 'https://api.github.com/users/'

const fetchData = async (user: string) => {
    const response = await axios.get(API_URL + `${user}/repos?sort=created&direction=desc`)
    return response.data
}

export function useGitHubRepositoryData() {
    const user: string = useStoreSelector((state) => state.search.value)

    const query = useQuery({
        queryFn: () => fetchData(user),
        queryKey: [user + 'repository'],
        enabled: !!user,
        retry: false,
        staleTime: 1000 * 60 * 5
    })

    return {
        ...query,
        data: query.data
    }
}