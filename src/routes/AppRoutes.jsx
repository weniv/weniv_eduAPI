import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../page/Main";
import Landing from "../page/Landing";
import PageLayout from "../components/pagecontrol/PageLayout";
import Notfound from "../page/Notfound";
import menuData from "../data/menu/eduAPI.json";

const flattenMenuLinks = (menu) => {
  const links = [];

  const traverseSections = (sections) => {
    sections.forEach((section) => {
      links.push(section.link);
      if (section.sections) {
        traverseSections(section.sections);
      }
    });
  };

  links.push(menu.link);
  traverseSections(menu.sections);

  return links;
};

const AppRoutes = () => {
  const location = useLocation();
  const validLinks = flattenMenuLinks(menuData);
  const isValidPath =
    validLinks.includes(location.pathname) || location.pathname === "/";

  return (
    <Routes>
      {isValidPath ? (
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/eduAPI" element={<Main />}>
            <Route index element={<PageLayout />} />
            <Route path=":contentId/*" element={<PageLayout />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </>
      ) : (
        <Route path="*" element={<Notfound />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
