import React, { memo } from "react";

import DashboardSection from "pages/Home/sections/dashboard/DashboardSection";
import PortfolioSection from "pages/Home/sections/portfolio/PortfolioSection";
import ExperienceSection from "pages/Home/sections/experience/ExperienceSection";
import SkillsSection from "pages/Home/sections/skills/SkillsSection";
import AboutMeSection from "pages/Home/sections/about/AboutMeSection";
import ContactSection from "pages/Home/sections/contact/ContactSection";

import Header from "UI/organisms/Header";
import PageTemplate from "UI/templates/PageTemplate";

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Header zIndex="layer2" />

    <DashboardSection />
    <PortfolioSection />
    <ExperienceSection />
    <SkillsSection />
    <AboutMeSection />
    <ContactSection />
  </PageTemplate>
);

export default memo(HomePage);
