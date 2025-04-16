import { SpotifyAlbum } from '@/newReleases/types/NewReleases.types';
import NewRelease from '../NewRelease/NewRelease';
import styles from './NewReleasesList.module.css';

interface NewReleasesProps {
  newReleases: SpotifyAlbum[];
}

export default function NewReleasesList({ newReleases }: NewReleasesProps) {
  return (
    <div className={styles.container}>
      {newReleases?.map((release) => (
        <NewRelease key={release?.id} release={release} />
      ))}
    </div>
  );
}
