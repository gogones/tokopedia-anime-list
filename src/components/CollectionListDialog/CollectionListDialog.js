/** @jsxImportSource @emotion/react */
import React, {Fragment, useContext} from 'react';
import {Transition} from '@headlessui/react';
import styled from '@emotion/styled';
import {useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';
import {css} from '@emotion/react';
import {Context} from '../../context/localStorageContext';
import checkSpecialCharInString from '../../helper/checkSpecialCharInString';
import Dialog from '../Dialog';
import DialogBackdrop from '../DialogBackdrop';
import DialogContent from '../DialogContent';
import DialogPanel from '../DialogPanel';
import DialogTitle from '../DialogTitle';
import Button from '../Button';
import Box from '../Box';
import Card from '../Card';
import {GET_ANIME_DETAIL} from '../../graphql/get-anime-detail';

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const DialogAction = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 3rem;
`;

const CloseButton = styled(Button)`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
`;

const CollectionListDialog = ({open, onClose}) => {
  const {collectionList, handleAdd, handleAddAnime} = useContext(Context);
  const [collectionName, setCollectionName] = React.useState('');
  const [error, setError] = React.useState(false);

  const {animeId} = useParams();
  const {data} = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: animeId,
    },
  });

  React.useEffect(() => {
    if (checkSpecialCharInString(collectionName)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [collectionName]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog open={open} onClose={() => {}}>
        <DialogBackdrop />

        <DialogContent>
          <DialogPanel
            css={css`
              max-height: 70vh;
            `}>
            <DialogTitle>Select Collection</DialogTitle>
            {collectionList.length === 0 && (
              <>
                <Box>
                  There is no collection list yet. Create a new collection list
                </Box>

                <FormContainer>
                  <input
                    placeholder="Input Collection Name"
                    value={collectionName}
                    onChange={e => setCollectionName(e.target.value)}
                  />

                  <DialogAction>
                    <Button
                      disabled={error || collectionName === ''}
                      onClick={() => handleAdd(collectionName)}>
                      Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </DialogAction>
                </FormContainer>
              </>
            )}

            {collectionList.length > 0 && (
              <>
                <Box
                  css={css`
                    height: 50vh;
                    overflow: auto;
                    display: flex;
                    flex-direction: column;
                  `}>
                  {collectionList.map(collection => (
                    <Card
                      key={collection.id}
                      css={css`
                        margin-bottom: 16px;
                      `}>
                      <h2>{collection.name}</h2>
                      <Button
                        onClick={() =>
                          handleAddAnime(collection.id, data.Media)
                        }>
                        Add
                      </Button>
                    </Card>
                  ))}
                </Box>
                <Footer>
                  <CloseButton onClick={onClose}>Close</CloseButton>
                </Footer>
              </>
            )}
          </DialogPanel>
        </DialogContent>
      </Dialog>
    </Transition>
  );
};

export default CollectionListDialog;
