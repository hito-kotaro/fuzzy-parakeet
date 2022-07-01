import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import CategoryTemplate from '../components/templates/CategoryTemplate';
import ErrorPageTemplate from '../components/templates/ErrorPageTemplate';
import HomeTemplates from '../components/templates/HomeTemplates';
import LoginTemplate from '../components/templates/LoginTemplate';
import TestPage from '../components/templates/TestPage';
import { questData } from '../testData/QuestTestData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';

const Router = () => {
  const location = useLocation();

  const questList = questData.map((quest) => {
    const item: primaryListItem = {
      iconName: quest.owner,
      topText: quest.title,
      bottomText: quest.description,
      righetUpText: quest.date,
      rightBottomText: `${quest.point}point`,
    };
    return item;
  });

  return (
    <SlideRoutes location={location} duration={500}>
      <Route path="/" element={<LoginTemplate title="login page" thema="light-color" />} />
      <Route path="/home" element={<HomeTemplates title="home page" />} />
      <Route
        path="/questboard"
        element={<CategoryTemplate title="Quest Board" ListData={questList} />}
      />
      <Route
        path="/approverequest"
        element={<CategoryTemplate title="Approve Request" ListData={questData} />}
      />
      <Route
        path="/timeline"
        element={<CategoryTemplate title="TimeLine" ListData={questData} />}
      />
      <Route path="/teams" element={<CategoryTemplate title="Teams" ListData={questData} />} />
      <Route path="/users" element={<CategoryTemplate title="Users" ListData={questData} />} />
      <Route path="/jobs" element={<CategoryTemplate title="Jobs" ListData={questData} />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPageTemplate title="404 NotFound" />} />
    </SlideRoutes>
  );
};

export default Router;
