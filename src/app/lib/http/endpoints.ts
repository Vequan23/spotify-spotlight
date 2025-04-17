export const ENDPOINTS = {
  // the pagination params should be passed at the service layer so that they are dynamic
  // leaving here for demo purposes
  NEW_ALBUM_RELEASES: 'browse/new-releases?limit=15&offset=0',
  NEW_ALBUM_RELEASE_ARTISTS: (id: string) => `/artists/${id}`
}