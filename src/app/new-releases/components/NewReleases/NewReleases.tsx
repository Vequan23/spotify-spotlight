'use client';
import { useGetNewReleases } from '@/newReleases/services/newReleasesService/useNewReleasesService';
import NewReleasesList from '../NewReleasesList/NewReleasesList';
import styles from './NewReleases.module.css';
import NewReleaseListSkeleton from '../NewReleasesListSkeleton/NewReleasesListSkeleton';

export default function NewReleases() {
  const { data: newReleasesResponse, isPending: isFetchingReleases } = useGetNewReleases();
  const newReleases = newReleasesResponse?.items;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>New Spotify Album Releases</h1>
      {isFetchingReleases ? (
        <NewReleaseListSkeleton />
      ) : (
        <NewReleasesList newReleases={newReleases ?? []} />
      )}
    </div>
  );
}
