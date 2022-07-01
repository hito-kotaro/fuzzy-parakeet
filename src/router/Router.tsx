import React from 'react';
import { Route, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import ErrorPageTemplate from '../templates/ErrorPageTemplate';
import HomeTemplates from '../templates/HomeTemplates';
import LoginTemplate from '../templates/LoginTemplate';

const Router = () => {
  const location = useLocation();

  return (
    <SlideRoutes location={location} duration={500}>
      <Route path="/" element={<LoginTemplate title="login page" thema="light-color" />} />
      <Route path="/home" element={<HomeTemplates title="home page" />} />
      <Route path="*" element={<ErrorPageTemplate title="404 NotFound" />} />
    </SlideRoutes>
  );
};

export default Router;
