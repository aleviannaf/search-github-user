import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";


const API_URL = 'https://api.github.com/users/'

const fetchData = async (user: string): AxiosPromise => {
    const response = await axios.get(API_URL + `${user}`)
    return response
}

export function useGitHubUserData(user: string) {


    const query = useQuery({
        queryFn: () => fetchData(user),
        queryKey: [user],
        enabled: !!user,
        retry: false,
        staleTime: 1000 * 60 * 5
    })


    return {
        ...query,
        data: query.data
    }
}