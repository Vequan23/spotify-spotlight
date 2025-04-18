/* eslint-disable @next/next/no-img-element */
import { SpotifyArtistDetails } from '@/newReleases/types/NewReleases.types';
import styles from './ArtistDetails.module.css';

interface ArtistDetailsProps {
  artist: SpotifyArtistDetails;
}

const formatNumberToReadable = (num: number): string => {
  return num.toLocaleString();
};

export default function ArtistDetails({ artist }: ArtistDetailsProps) {
  const imageUrl = artist.images[2].url;
  const name = artist.name;
  const followers = artist.followers.total;
  const popularity = artist.popularity;

  return (
    <div className={styles.container}>
      <img alt={name} className={styles.image} src={imageUrl}></img>
      <h2 className={styles.name}>{name}</h2>
      <p>Followers: {formatNumberToReadable(followers)}</p>
      <p>Popularity Score: {popularity}</p>
    </div>
  );
}
