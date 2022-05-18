import {useContext} from 'react';
import {Context} from '../context/localStorageContext';

export default function useCollectionDetail(collectionId) {
  const {collectionList} = useContext(Context);
  const collection = collectionList.find(
    collectionItem => collectionItem.id === collectionId
  );
  if (collection)
    return {id: collection.id, name: collection.name, media: collection.media};

  return {};
}
