import {gql} from '@apollo/client';

export const GET_ANIME_DETAIL = gql`
  query GetAnimeDetail($id: Int) {
    # Define which variables will be used in the query (id)
    Media(id: $id, type: ANIME) {
      # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
      status
      description
      episodes
      volumes
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      popularity
      siteUrl
      trending
    }
  }
`;
