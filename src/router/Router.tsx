import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import ApproveRequestPage from '../components/pages/ApproveRequestPage';

import PenaltyPage from '../components/pages/PenaltyPage';
import QuestBoardPage from '../components/pages/QuestBoardPage';
import TeamsPage from '../components/pages/TeamsPage';
import TimelinePage from '../components/pages/TimelinePage';
import UsersPage from '../components/pages/UsersPage';
import ErrorPageTemplate from '../components/templates/ErrorPageTemplate';
import HomeTemplates from '../components/templates/HomeTemplates';
import LoginTemplate from '../components/templates/LoginTemplate';
import TestPage from '../components/templates/TestPage';

const Router = () => {
  const location = useLocation();
  return (
    <SlideRoutes location={location} duration={500}>
      <Route
        path="/"
        element={<LoginTemplate title="login page" thema="light-color" />}
      />
      <Route path="/home" element={<HomeTemplates title="home page" />} />
      <Route path="/questboard" element={<QuestBoardPage />} />
      <Route path="/approverequest" element={<ApproveRequestPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/penalty" element={<PenaltyPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPageTemplate title="404 NotFound" />} />
    </SlideRoutes>
  );
};

export default Router;
