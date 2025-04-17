interface NewReleaseArtistFilterProps {
  releaseArtists: string[];
  onArtistSelection: (artistName: string) => void;
}

export default function NewReleaseArtistFilter({
  releaseArtists,
  onArtistSelection,
}: NewReleaseArtistFilterProps) {
  if (releaseArtists.length === 0) return null;

  return (
    <select onChange={(e) => onArtistSelection(e.target.value)}>
      <option value="">All Artists</option>
      {releaseArtists?.map((artist, index) => (
        <option key={index} value={artist}>
          {artist}
        </option>
      ))}
    </select>
  );
}
