import { useGetNewReleases } from '@/newReleases/services/newReleasesService/useNewReleasesService';
import { useState } from 'react';

const ALL_ARTISTS = 'All Artists';

export const useNewReleases = () => {
  const { data: newReleasesResponse, isPending: isFetchingReleases } = useGetNewReleases();
  const [selectedArtistName, setSelectedArtistName] = useState(ALL_ARTISTS);

  const newReleases = newReleasesResponse?.items;
  const releaseArtists = newReleases?.map((release) => release?.artists?.[0]?.name);
  const filteredReleases = newReleases?.filter((release) => {
    if (selectedArtistName === ALL_ARTISTS) return release;

    return release?.artists?.[0].name.includes(selectedArtistName);
  });

  const handleArtistSelection = (artistName: string) => setSelectedArtistName(artistName);

  return {
    releaseArtists,
    filteredReleases,
    handleArtistSelection,
    isFetchingReleases
  }
}