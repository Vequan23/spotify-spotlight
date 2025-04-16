import { SpotifyAlbum } from '@/newReleases/types/NewReleases.types';
import React from 'react';
import styles from './NewRelease.module.css';

interface NewReleaseProps {
  release: SpotifyAlbum;
}

export default function NewRelease({ release }: NewReleaseProps) {
  const { name, artists, images } = release;
  return (
    <div>
      <img className={styles.release} src={images[0].url}></img>
      <p>{name}</p>
      <p>{artists[0].name}</p>
      <p>{release.release_date}</p>
    </div>
  );
}
