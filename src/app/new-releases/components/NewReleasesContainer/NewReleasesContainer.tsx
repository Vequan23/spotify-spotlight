'use client';
import { useGetNewReleases } from '@/newReleases/services/newReleasesService/useNewReleasesService';
import NewReleasesList from '../NewReleasesList/NewReleasesList';
import styles from './NewReleasesContainer.module.css';
import NewReleaseListSkeleton from '../NewReleasesListSkeleton/NewReleasesListSkeleton';
import NewReleaseArtistFilter from '../NewReleaseArtistFilter/NewReleaseArtistFilter';
import { useState } from 'react';

const ALL_ARTISTS = 'All Artists';

export default function NewReleasesContainer() {
  const { data: newReleasesResponse, isPending: isFetchingReleases } = useGetNewReleases();
  const [selectedArtistName, setSelectedArtistName] = useState(ALL_ARTISTS);

  const newReleases = newReleasesResponse?.items;
  const releaseArtists = newReleases?.map((release) => release?.artists?.[0]?.name);
  const filteredReleases = newReleases?.filter((release) => {
    if (selectedArtistName === ALL_ARTISTS) return release;

    return release?.artists?.[0].name.includes(selectedArtistName);
  });

  const handleArtistSelection = (artistName: string) => setSelectedArtistName(artistName);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>2024 Spotify Album Releases</h1>
        <NewReleaseArtistFilter
          releaseArtists={releaseArtists ?? []}
          onArtistSelection={handleArtistSelection}
        />
      </div>
      {isFetchingReleases ? (
        <NewReleaseListSkeleton />
      ) : (
        <NewReleasesList newReleases={filteredReleases ?? []} />
      )}
    </div>
  );
}
