import useLocalStorage from './useLocalStorage';

export default function useCollectionList() {
  const [collectionList, setCollectionList] = useLocalStorage(
    'collections',
    []
  );

  // console.log('use', collectionList);

  return [collectionList, setCollectionList];
}
