import { SpotifyNewReleasesResponse } from './../../types/NewReleases.types';
import { apiController } from '@/lib/http/apiController';
import { ENDPOINTS } from "@/lib/http/endpoints"

const getNewReleases = async () => {
  const { data: response } = await apiController.get<SpotifyNewReleasesResponse>(ENDPOINTS.NEW_ALBUM_RELEASES);

  return response?.albums;
}

export const newReleasesService = {
  getNewReleases
}

