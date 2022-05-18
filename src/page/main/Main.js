/** @jsxImportSource @emotion/react */
import React from 'react';
import {useQuery} from '@apollo/client';
import {useNavigate} from 'react-router-dom';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {GET_ANIME_LIST} from '../../graphql/get-anime-list';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import PaginationButton from '../../components/PaginationButton';
import Box from '../../components/Box';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Main = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const {loading, data} = useQuery(GET_ANIME_LIST, {
    variables: {
      page,
      perPage: 10,
    },
  });

  return (
    <Box>
      {!loading &&
        data.Page.media.map(media => (
          <Card
            key={media.id}
            onClick={() => navigate(`../${media.id}`)}
            css={css`
              margin: 20px;
              padding: 0;
              overflow: auto;
            `}>
            <Image src={media.coverImage.large} alt={media.title.romaji} />
            <Box as="h3">{media.title.romaji}</Box>
          </Card>
        ))}
      <Pagination>
        {[...new Array(5)].map((_, i) => (
          <PaginationButton key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </PaginationButton>
        ))}
      </Pagination>
    </Box>
  );
};

export default Main;
