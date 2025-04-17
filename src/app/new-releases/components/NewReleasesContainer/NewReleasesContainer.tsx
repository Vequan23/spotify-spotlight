'use client';
import NewReleasesList from '@/newReleases/components/NewReleasesList/NewReleasesList';
import styles from './NewReleasesContainer.module.css';
import NewReleaseListSkeleton from '@/newReleases/components/NewReleasesListSkeleton/NewReleasesListSkeleton';
import NewReleaseArtistFilter from '@/newReleases/components/NewReleaseArtistFilter/NewReleaseArtistFilter';
import { useNewReleases } from '@/newReleases/hooks/useNewReleases';
import ArtistDetails from '../ArtistDetails/ArtistDetails';

export default function NewReleasesContainer() {
  const {
    releaseArtists,
    filteredReleases,
    selectedArtistDetails,
    isFetchingReleases,
    handleArtistSelection,
  } = useNewReleases();

  return (
    <div className={styles.container}>
      <div>
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
      {selectedArtistDetails && <ArtistDetails artist={selectedArtistDetails} />}
    </div>
  );
}
