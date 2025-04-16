'use client';
import { useGetNewReleases } from '@/newReleases/services/newReleasesService/useNewReleasesService';
import NewReleasesList from '../NewReleasesList/NewReleasesList';
import styles from './NewReleasea.module.css';

function LoadingFallback() {
  return <div>Loading new releases...</div>;
}

export default function NewReleases() {
  const { data: newReleasesResponse, isPending } = useGetNewReleases();
  const newReleases = newReleasesResponse?.items;

  return (
    <div className={styles.container}>
      <h1>New Releases</h1>
      {isPending ? <LoadingFallback /> : <NewReleasesList newReleases={newReleases ?? []} />}
    </div>
  );
}
