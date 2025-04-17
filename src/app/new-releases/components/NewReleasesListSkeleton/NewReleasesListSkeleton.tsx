import styles from './NewReleasesListSkeleton.module.css';

export default function NewReleasesListSkeleton() {
  const mockReleases = new Array(25).fill(null);

  return (
    <div className={styles.container}>
      {mockReleases?.map((_release, index) => (
        <div className={styles.skeleton} key={index} />
      ))}
    </div>
  );
}
