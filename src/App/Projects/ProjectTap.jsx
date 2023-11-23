import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectTap = (props) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Django", "Spring Boot", "React", "Ruby on Rails"];
  const tabFramework = ["", "Django", "Spring Boot", "React", "Ruby on Rails"];

  return (
    <>
      <nav className="nav justify-content-center">
        {/* larger to extra large screens */}
        <ul className="tab-ul d-none d-lg-flex">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={selectedTab === tab ? "selected tab-list" : "tab-list"}
              onClick={() => {
                setSelectedTab(tab);
                props.changeFramework(tabFramework[tabs.indexOf(tab)]);
              }}
            >
              {tab}
              {tab === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
        {/* medium to smaller screens */}
        <ul className="tab-ul d-block d-lg-none">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={
                selectedTab === tab
                  ? "selected tab-list-mobile"
                  : "tab-list-mobile"
              }
              onClick={() => {
                setSelectedTab(tab);
                props.changeFramework(tabFramework[tabs.indexOf(tab)]);
                props.scrollToProjectCard();
              }}
            >
              {tab}
              {tab === selectedTab ? (
                <motion.div className="underline-mobile" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
