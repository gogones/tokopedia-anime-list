/** @jsxImportSource @emotion/react */
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import useCollectionDetail from '../../hooks/useCollectionDetail';
import Card from '../../components/Card';
import Box from '../../components/Box';
import Edit from '../../components/Icons/Edit';
import Button from '../../components/Button';
import CollectionDialog from '../../components/CollectionDialog/CollectionDialog';

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CollectionDetail = () => {
  const {collectionId} = useParams();
  const {name, media} = useCollectionDetail(collectionId);
  const [editModal, setEditModal] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Box as="h1">{name}</Box>
        <Button
          css={css`
            padding: 0;
          `}
          onClick={() => setEditModal(true)}>
          <Edit height="100%" />
        </Button>
      </Container>

      <CollectionDialog
        open={editModal}
        onClose={() => setEditModal(false)}
        collectionId={collectionId}
      />

      {media.length === 0 && (
        <Box
          as="p"
          css={css`
            text-align: center;
            height: 100%;
          `}>
          No media in this collection :(
        </Box>
      )}

      {media.map(anime => (
        <Card
          key={anime.id}
          onClick={() => navigate(`/${anime.id}`)}
          css={css`
            margin: 20px;
            padding: 0;
            overflow: auto;
          `}>
          <Image src={anime.coverImage.large} alt={anime.title.romaji} />
          <Box as="h3">{anime.title.romaji}</Box>
        </Card>
      ))}
    </div>
  );
};

export default CollectionDetail;
