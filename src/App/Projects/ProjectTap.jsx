import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectTap = (props) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Django", "Spring Boot", "React", "Ruby on Rails"];
  const tabFramework = ["", "Django", "Spring Boot", "React", "Ruby on Rails"];
  return (
    <>
      <nav className="nav justify-content-center">
        <ul className="tab-ul ">
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
      </nav>
    </>
  );
};
