import { useQuery } from "@tanstack/react-query";
import { newReleasesService } from "./newReleasesService";
import { ALL_ARTISTS_ID } from "@/newReleases/constants/constants";

export const useGetNewReleases = () => {
  return useQuery({ queryKey: ['new-releases'], queryFn: newReleasesService.getNewReleases })
}

export const useGetNewReleaseArtist = (id: string) => {
  return useQuery({
    queryKey: ['new-release-artist', id],
    queryFn: () => newReleasesService.getNewReleaseArtists(id),
    enabled: id !== ALL_ARTISTS_ID
  })
}