import React from 'react';
import collectionNameToId from '../helper/collectionNameToId';
import useCollectionList from '../hooks/useCollectionList';

const Context = React.createContext();

function ContextProvider({children}) {
  const [collectionList, setCollectionList] = useCollectionList();
  const [collectionId, setCollectionId] = React.useState('');

  const handleAddAnime = (idCollection, media) => {
    const newCollectionList = collectionList.map(item => {
      if (item.id === idCollection) {
        return {
          ...item,
          media: [...item.media, {...media}],
        };
      }

      return item;
    });
    setCollectionList(newCollectionList);
  };

  const handleRemoveAnime = (idCollection, media) => {
    const newCollectionList = collectionList.map(item => {
      if (item.id === idCollection) {
        return {
          ...item,
          media: item.media.filter(itemMedia => itemMedia.id !== media.id),
        };
      }

      return item;
    });
    setCollectionList(newCollectionList);
  };

  const handleAdd = collectionName => {
    setCollectionList([
      ...collectionList,
      {
        id: collectionNameToId(collectionName),
        name: collectionName,
        media: [],
      },
    ]);
  };

  const handleEdit = (id, collectionName) => {
    const newCollectionList = collectionList.map(collection => {
      if (collection.id === id) {
        return {
          ...collection,
          name: collectionName,
        };
      }

      return collection;
    });
    setCollectionList(newCollectionList);
  };

  const handleRemove = id => {
    setCollectionId('');
    setCollectionList(
      collectionList.filter(collection => collection.id !== id)
    );
  };

  return (
    <Context.Provider
      value={{
        collectionList,
        collectionId,
        handleAdd,
        handleEdit,
        handleRemove,
        handleAddAnime,
        handleRemoveAnime,
      }}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};
