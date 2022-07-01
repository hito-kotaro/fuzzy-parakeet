import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import CategoryTemplate from '../components/templates/CategoryTemplate';
import ErrorPageTemplate from '../components/templates/ErrorPageTemplate';
import HomeTemplates from '../components/templates/HomeTemplates';
import LoginTemplate from '../components/templates/LoginTemplate';
import TestPage from '../components/templates/TestPage';

const Router = () => {
  const location = useLocation();

  return (
    <SlideRoutes location={location} duration={500}>
      <Route path="/" element={<LoginTemplate title="login page" thema="light-color" />} />
      <Route path="/home" element={<HomeTemplates title="home page" />} />
      <Route path="/questboard" element={<CategoryTemplate title="Quest Board" />} />
      <Route path="/approverequest" element={<CategoryTemplate title="Approve Request" />} />
      <Route path="/timeline" element={<CategoryTemplate title="TimeLine" />} />
      <Route path="/teams" element={<CategoryTemplate title="Teams" />} />
      <Route path="/users" element={<CategoryTemplate title="Users" />} />
      <Route path="/jobs" element={<CategoryTemplate title="Jobs" />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPageTemplate title="404 NotFound" />} />
    </SlideRoutes>
  );
};

export default Router;
