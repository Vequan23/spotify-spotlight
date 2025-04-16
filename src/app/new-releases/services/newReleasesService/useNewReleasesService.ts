import { useQuery } from "@tanstack/react-query";
import { newReleasesService } from "./newReleasesService";

export const useGetNewReleases = () => {
  return useQuery({ queryKey: ['new-releases'], queryFn: newReleasesService.getNewReleases })
}