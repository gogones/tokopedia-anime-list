import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../page/main';
import Detail from '../../page/detail';
import Layout from '../Layout';
import Collections from '../../page/collections';
import CollectionDetail from '../../page/collection-detail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path=":animeId" element={<Detail />} />
        <Route path="collections">
          <Route index element={<Collections />} />
          <Route path=":collectionId" element={<CollectionDetail />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
