/* eslint-disable @next/next/no-img-element */
import { SpotifyAlbum } from '@/newReleases/types/NewReleases.types';
import React from 'react';
import styles from './NewRelease.module.css';

interface NewReleaseProps {
  release: SpotifyAlbum;
}

export default function NewRelease({ release }: NewReleaseProps) {
  const { name, artists, images, release_date } = release;
  const formattedDate = new Date(release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div>
      <img className={styles.artwork} src={images[0].url}></img>
      <div className={styles.metadataContainer}>
        <p className={styles.name}>{name}</p>
        <button className={styles.artistButton}>{artists[0].name}</button>
        <p className={styles.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
