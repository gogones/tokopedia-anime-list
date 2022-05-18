/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import {useQuery} from '@apollo/client';
import {useNavigate, useParams} from 'react-router-dom';
import styled from '@emotion/styled';
import {GET_ANIME_DETAIL} from '../../graphql/get-anime-detail';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import {Context} from '../../context/localStorageContext';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Remove from '../../components/Icons/Remove';
import CollectionListDialog from '../../components/CollectionListDialog';

const AnimeDetailContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 1rem;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #dedede;
  position: fixed;
  top: 0;
  left: 0;
`;

const Detail = () => {
  const [collectionModal, setCollectionModal] = React.useState(false);

  const {collectionList, handleRemoveAnime} = useContext(Context);
  const {animeId} = useParams();
  const navigate = useNavigate();
  const {loading, data} = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: animeId,
    },
  });

  return (
    <Box>
      <CollectionListDialog
        open={collectionModal}
        onClose={() => setCollectionModal(false)}
      />

      {!loading && data.Media ? (
        <>
          <ButtonContainer>
            <Button type="button" onClick={() => navigate(-1)}>
              &lt;
            </Button>
            <Button type="button" onClick={() => setCollectionModal(true)}>
              Add to Collection
            </Button>
          </ButtonContainer>

          <AnimeDetailContainer>
            <Box as="h1">{data.Media.title.romaji}</Box>
            <img
              src={data.Media.coverImage.large}
              alt={data.Media.title.romaji}
            />
            <Box
              as="p"
              dangerouslySetInnerHTML={{__html: data.Media.description}}
            />
          </AnimeDetailContainer>

          <h3>Collection Info</h3>
          <Box
            css={css`
              display: flex;
              overflow: auto;
            `}>
            {collectionList
              .filter(collection =>
                collection.media
                  .map(media => media.id)
                  .some(mediaId => mediaId === data.Media.id)
              )
              .map(collection => (
                <Card
                  key={collection.id}
                  css={css`
                    min-width: 80px;
                    width: 80px;
                    margin: 0 8px;
                  `}>
                  <CardHeader as="h4">{collection.name}</CardHeader>
                  <Button
                    css={css`
                      padding: 0;
                      background-color: transparent;
                      border: none;
                    `}
                    onClick={() =>
                      handleRemoveAnime(collection.id, data.Media)
                    }>
                    <Remove height="100%" />
                  </Button>
                </Card>
              ))}
          </Box>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
};

export default Detail;
