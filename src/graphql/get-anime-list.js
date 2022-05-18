import {gql} from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        description
        episodes
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        genres
        averageScore
        studios {
          nodes {
            name
            siteUrl
          }
        }
      }
    }
  }
`;
