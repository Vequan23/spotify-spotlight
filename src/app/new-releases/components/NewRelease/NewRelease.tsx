'use client';
/* eslint-disable @next/next/no-img-element */
import { SpotifyAlbum } from '@/newReleases/types/NewReleases.types';
import React from 'react';
import styles from './NewRelease.module.css';
import Link from 'next/link';

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
  const imageUrl = images[0].url;
  const artistName = artists[0].name;
  const artistLink = artists[0].external_urls.spotify;
  return (
    <div>
      <img alt="" className={styles.artwork} src={imageUrl}></img>
      <div className={styles.metadataContainer}>
        <p className={styles.name}>{name}</p>
        <Link href={artistLink} className={styles.artistName}>
          {artistName}
        </Link>
        <p className={styles.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
