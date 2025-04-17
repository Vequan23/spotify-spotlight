import { useGetNewReleaseArtist, useGetNewReleases } from '@/newReleases/services/newReleasesService/useNewReleasesService';
import { useState } from 'react';
import { ALL_ARTISTS_ID } from '../constants/constants';


export const useNewReleases = () => {
  const { data: newReleasesResponse, isPending: isFetchingReleases } = useGetNewReleases();
  const [selectedArtistId, setSelectedArtistId] = useState(ALL_ARTISTS_ID);
  const { data: selectedArtistDetails, isPending: isFetchingSelectingArtistsDetails } = useGetNewReleaseArtist(selectedArtistId);

  const newReleases = newReleasesResponse?.items;
  const releaseArtists = newReleases?.map((release) => release?.artists?.[0]);
  const filteredReleases = newReleases?.filter((release) => {
    if (selectedArtistId === ALL_ARTISTS_ID) return release;

    return release?.artists?.[0].id === selectedArtistId;
  });

  const handleArtistSelection = (artistName: string) => setSelectedArtistId(artistName);

  return {
    releaseArtists,
    filteredReleases,
    handleArtistSelection,
    selectedArtistDetails,
    isFetchingReleases,
    isFetchingSelectingArtistsDetails
  }
}