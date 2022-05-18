/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import {useNavigate} from 'react-router-dom';
import styled from '@emotion/styled';
import {Context} from '../../context/localStorageContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import Box from '../../components/Box';
import EmptyCollection from '../../asset/img/empty-collection.png';
import Remove from '../../components/Icons/Remove';
import Edit from '../../components/Icons/Edit';
import CollectionDialog from '../../components/CollectionDialog/CollectionDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Collections = () => {
  const navigate = useNavigate();
  const {collectionList, handleRemove} = useContext(Context);
  const [openModal, setOpenModal] = React.useState(false);
  const [confirmation, setConfirmation] = React.useState(false);
  const [collectionId, setCollectionId] = React.useState('');

  const handleClose = () => {
    setOpenModal(false);
    setConfirmation(false);
    setCollectionId('');
  };

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Add a Collection</Button>
      {openModal && (
        <CollectionDialog
          open={openModal}
          onClose={handleClose}
          collectionId={collectionId}
        />
      )}

      <ConfirmationDialog
        open={confirmation}
        onClose={handleClose}
        onConfirm={() => {
          handleRemove(collectionId);
          handleClose();
        }}
      />

      {collectionList.length === 0 && (
        <Box
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}>
          <h3>You don&apos;t have any collection yet</h3>
        </Box>
      )}

      {collectionList.map(collection => (
        <Card
          key={collection.id}
          css={css`
            margin: 1rem 0;
            padding: 0;
            overflow: auto;
          `}
          onClick={() => navigate(`./${collection.id}`)}>
          <Image
            src={collection.media[0]?.bannerImage || EmptyCollection}
            alt={collection.media[0]?.title.romaji || 'empty-collection'}
          />
          <Box
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
            `}>
            <CardHeader as="h4">{collection.name}</CardHeader>

            <Box>
              <Button
                css={css`
                  padding: 0;
                `}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCollectionId(collection.id);
                  setConfirmation(true);
                }}>
                <Remove height="100%" />
              </Button>
              <Button
                css={css`
                  padding: 0;
                `}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCollectionId(collection.id);
                  // setEditModal(true);
                  setOpenModal(true);
                }}>
                <Edit height="100%" />
              </Button>
            </Box>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default Collections;
