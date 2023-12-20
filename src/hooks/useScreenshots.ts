import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot"
import APIClient from "../services/api-client"

const useScreenshots = (gameSlug: string) => {
    const apiClient = new APIClient<Screenshot>(`games/${gameSlug}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameSlug],
        queryFn: apiClient.getAll
    })

}

export default useScreenshots;