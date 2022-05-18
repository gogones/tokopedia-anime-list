import React, {Fragment, useContext} from 'react';
import {Transition} from '@headlessui/react';
import styled from '@emotion/styled';
import Button from '../Button';
import DialogPanel from '../DialogPanel';
import DialogBackdrop from '../DialogBackdrop';
import DialogContent from '../DialogContent';
import Dialog from '../Dialog';
import useCollectionDetail from '../../hooks/useCollectionDetail';
import {Context} from '../../context/localStorageContext';
import checkSpecialCharInString from '../../helper/checkSpecialCharInString';
import DialogTitle from '../DialogTitle';
import Box from '../Box';

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

const HelperText = styled(Box)`
  color: red;
  margin-top: 0.5rem;
`;

const CollectionDialog = ({open, onClose, collectionId}) => {
  const {name: initCollectionName} = useCollectionDetail(collectionId);
  const {handleAdd, handleEdit, collectionList} = useContext(Context);

  const [collectionName, setCollectionName] = React.useState('');

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (initCollectionName) {
      setCollectionName(initCollectionName);
    }
  }, [initCollectionName]);

  React.useEffect(() => {
    if (
      (initCollectionName !== collectionName &&
        collectionList
          .map(collection => collection.name)
          .includes(collectionName)) ||
      checkSpecialCharInString(collectionName)
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [collectionName, collectionList, initCollectionName]);

  React.useEffect(
    () => () => {
      setCollectionName('');
    },
    []
  );

  const handleSubmit = () => {
    if (collectionId) {
      handleEdit(collectionId, collectionName);
    } else {
      handleAdd(collectionName);
    }
    setCollectionName('');
    onClose();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog open={open} onClose={() => {}}>
        <DialogBackdrop />

        <DialogContent>
          <DialogPanel>
            <DialogTitle>Input Collection Name</DialogTitle>
            <FormContainer>
              <input
                placeholder="Input Collection Name"
                value={collectionName}
                onChange={e => setCollectionName(e.target.value)}
              />

              {error && (
                <HelperText>
                  Collection name is already exist or contain special character
                </HelperText>
              )}

              <DialogAction>
                <Button
                  disabled={
                    error ||
                    collectionName === '' ||
                    initCollectionName === collectionName
                  }
                  onClick={handleSubmit}>
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </DialogAction>
            </FormContainer>
          </DialogPanel>
        </DialogContent>
      </Dialog>
    </Transition>
  );
};

export default CollectionDialog;
