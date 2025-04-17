export const ENDPOINTS = {
  NEW_ALBUM_RELEASES: 'browse/new-releases?limit=25&offset=0',
  NEW_ALBUM_RELEASE_ARTISTS: (id: string) => `/artists/${id}`
}