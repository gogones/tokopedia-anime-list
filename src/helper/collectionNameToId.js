export default function collectionNameToId(collectionName) {
  return collectionName.replace(/ /g, '-');
}
