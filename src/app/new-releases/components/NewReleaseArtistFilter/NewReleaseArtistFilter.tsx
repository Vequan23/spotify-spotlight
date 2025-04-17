import { ALL_ARTISTS_ID } from '@/newReleases/constants/constants';
import { SpotifyArtist } from '@/newReleases/types/NewReleases.types';

interface NewReleaseArtistFilterProps {
  releaseArtists: SpotifyArtist[];
  onArtistSelection: (artistName: string) => void;
}

export default function NewReleaseArtistFilter({
  releaseArtists,
  onArtistSelection,
}: NewReleaseArtistFilterProps) {
  if (releaseArtists.length === 0) return null;

  return (
    <select onChange={(e) => onArtistSelection(e.target.value)}>
      <option value={ALL_ARTISTS_ID}>All Artists</option>
      {releaseArtists?.map((artist, index) => (
        <option key={index} value={artist.id}>
          {artist.name}
        </option>
      ))}
    </select>
  );
}
