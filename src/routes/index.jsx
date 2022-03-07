import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import SearchLayout from '../components/SearchLayout';
import Home from './Home';
import Images from './Images';
import News from './News';
import Search from './Search';
import Videos from './Videos';

const Routes = () => (
    <ReactRoutes>
        <Route path="/" element={<SearchLayout />}>
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />
            <Route path="news" element={<News />} />
            <Route path="search" element={<Search />} />
        </Route>

        <Route index element={<Home />} />
    </ReactRoutes>
);

export default Routes;
