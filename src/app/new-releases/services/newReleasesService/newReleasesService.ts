import { SpotifyArtistDetails, SpotifyNewReleasesResponse } from '@/newReleases/types/NewReleases.types';
import { apiController } from '@/lib/http/apiController';
import { ENDPOINTS } from "@/lib/http/endpoints"

const getNewReleases = async () => {
  const { data: response } = await apiController.get<SpotifyNewReleasesResponse>(ENDPOINTS.NEW_ALBUM_RELEASES);

  return response?.albums;
}
const getNewReleaseArtists = async (id: string) => {
  const endpoint = ENDPOINTS.NEW_ALBUM_RELEASE_ARTISTS(id);

  const { data: response } = await apiController.get<SpotifyArtistDetails>(endpoint);

  return response;
}

export const newReleasesService = {
  getNewReleases,
  getNewReleaseArtists
}

