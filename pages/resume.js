import React, { useState } from "react";
import styles from "../styles/Resume.module.css";

export default function Resume() {
  const [filteredData, setFilteredData] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [visibleEntries, setVisibleEntries] = useState({});

  const data = [
    {
      name: "UX design @Google @Coursera",
      type: "dev-cv",
      category: "Certifications",
      date: ["2023", "Ongoing"],
      description:
        "Foundations of UX design, UX design processs: empathise, define, ideate, prototype, test.",
      skillsAcquired: [
        "Accessibility",
        "Competitor analysis",
        "Design sprints",
        "Design systems",
        "Figma",
        "Key Performance Indicators",
        "Personas",
        "Prototyping",
        "Typography",
        "Usability testing",
        "User flows",
        "User Journeys",
        "User stories",
        "UX research",
        "Value proposition",
        "Wireframing",
      ],
    },
    {
      name: "Front-end dev @Gokstad akademiet",
      type: "dev-cv",
      category: "Education",
      date: ["2022", "2024"],
      description:
        "Fundamentals of front-end development, working in groups, I was student representative for the class. ",
      skillsAcquired: [
        "Ux design",
        "HTML",
        "CSS",
        "Javascript",
        "Version control",
        "Agile methodologies",
        "Accessibility",
        "Version control",
      ],
      grades: [
        { Subject: "UX UI Design", Grade: "A" },
        { Subject: "HTML CSS", Grade: "A" },
        { Subject: "Javascript 1", Grade: "A" },
        { Subject: "Work methodologies", Grade: "A" },
        { Subject: "Javascript 2", Grade: "B" },
      ],
    },
    {
      name: "ESMA",
      type: "non-dev",
      category: "Education",
      date: ["2001", "2005"],
      description: "Learning 3d animation.",
      skillsAcquired: ["3d Modeling", "Animation", "Rigging"],
    },
    {
      name: "Complete React developer in 2023",
      type: "dev-cv",
      category: "Courses",
      date: ["2001", "2005"],
      description: "Learning 3d animation.",
      skillsAcquired: ["3d Modeling", "Animation", "Rigging"],
    },
    {
      name: "Complete NodeJS developer in 2023",
      type: "dev-cv",
      category: "Courses",
      date: ["2023", "ongoing"],
      description: "NodeJS in depth, down to the internals.",
      skillsAcquired: [
        "Web servers",
        "Async IO",
        "libuv",
        "Module system",
        "Package management",
        "Express.js",
        "Node Performance",
        "Node and databases",
        "Semantic versioning",
      ],
    },
  ];

  const applyFilter = (type) => {
    setFilterType(type);
  };

  const toggleVisibility = (name) => {
    setVisibleEntries({ ...visibleEntries, [name]: !visibleEntries[name] });
  };

  const filterData = (type) => {
    const sortedFilteredData = data
      .filter((item) => item.type === type)
      .sort((a, b) => b.date[0].localeCompare(a.date[0]));

    setFilteredData(sortedFilteredData);
    setActiveButton(type);
  };

  filteredData.sort((a, b) => b.date[1].localeCompare(a.date[1]));

  const categories = [
    "Education",
    "Work Experience",
    "Courses",
    "Certifications",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.buttonsContainer}>
        <button
          className={
            activeButton === "dev-cv" ? styles.buttonActive : styles.button
          }
          onClick={() => filterData("dev-cv")}
        >
          Dev
          <br />
          Resume
        </button>
        <p className={styles.equation}>+</p>
        <button
          className={
            activeButton === "non-dev" ? styles.buttonActive : styles.button
          }
          onClick={() => filterData("non-dev")}
        >
          Non-dev
          <br />
          Resume
        </button>
        <p className={styles.equation}>=</p>
        <button
          className={
            activeButton === "all" ? styles.buttonActive : styles.button
          }
          onClick={() => {
            setFilteredData(data);
            setActiveButton("all");
          }}
        >
          Full
          <br />
          Resume
        </button>
      </div>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => {
          const categoryData = filteredData.filter(
            (item) => item.category === category
          );

          if (categoryData.length === 0) {
            return null; // Skip rendering this category if there are no items
          }

          return (
            <div key={category}>
              <h2 className={styles.categories}>{category}</h2>
              <ul className={styles.categoryList}>
                {categoryData.map((entry) => (
                  <li key={entry.name} className={styles.entry}>
                    <div
                      className={styles.headerItemResume}
                      onClick={() => toggleVisibility(entry.name)}
                    >
                      <div className={styles.nameDateContainer}>
                        <div className={styles.entryName}>{entry.name}</div>
                        <div className={styles.entryDate}>
                          {entry.date.join(" - ")}
                        </div>
                      </div>
                      <div className={styles.dropDownIcon}>⬇️</div>
                    </div>
                    <div
                      className={
                        visibleEntries[entry.name]
                          ? `${styles.entryDetails} ${styles.visible}`
                          : `${styles.entryDetails} ${styles.hidden}`
                      }
                    >
                      <div className={styles.entryDescription}>
                        {entry.description}
                      </div>
                      <div className={styles.skillsContainer}>
                        {entry.skillsAcquired && (
                          <div className={styles.skillsAcquired}>
                            <div className={styles.skillsTitle}>
                              Skills Acquired:
                            </div>
                            <div className={styles.skillsHighlight}>
                              {entry.skillsAcquired.map((skill, index) => (
                                <span key={index} className={styles.skill}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {entry.category === "Education" && entry.grades && (
                          <div className={styles.grades}>
                            <div className={styles.skillsTitle}>Grades:</div>
                            <div className={styles.skillsHighlight}>
                              {entry.grades.map((grade, index) => (
                                <span key={index} className={styles.grade}>
                                  {`${grade.Subject}: ${grade.Grade}`}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
