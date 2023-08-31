import React, { useState } from "react";
import styles from "./button.module.css";

export default function Button() {
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {
      name: "UX design @Google @Coursera",
      type: "dev-cv",
      category: "Certifications",
      date: ["2022", "2023"],
      description: "Learning everything UX.",
      skillsAcquired: ["Personas", "User Journeys", "UX research"],
    },
    {
      name: "Front-end Development @Gokstad akademiet",
      type: "dev-cv",
      category: "Education",
      date: ["2022", "2024"],
      description: "Learning all the full stuff.",
      skillsAcquired: ["Ux design", "MEAN Stack"],
      grades: [
        { Subject: "Math", Grade: "A" },
        { Subject: "Science", Grade: "B+" },
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
  ];

  const applyFilter = (type) => {
    setFilterType(type);
  };

  const filterData = (type) => {
    const sortedFilteredData = data
      .filter((item) => item.type === type)
      .sort((a, b) => b.date[0].localeCompare(a.date[0]));

    setFilteredData(sortedFilteredData);
  };

  filteredData.sort((a, b) => b.date[1].localeCompare(a.date[1]));

  const categories = [
    "Education",
    "Work Experience",
    "Courses",
    "Certifications",
  ];

  return (
    <div>
      <button className={styles.button} onClick={() => filterData("dev-cv")}>
        Dev CV
      </button>
      <button className={styles.button} onClick={() => filterData("non-dev")}>
        Non Dev
      </button>
      <button className={styles.button} onClick={() => setFilteredData(data)}>
        All
      </button>

      <div>
        {categories.map((category) => {
          const categoryData = filteredData.filter(
            (item) => item.category === category
          );

          if (categoryData.length === 0) {
            return null; // Skip rendering this category if there are no items
          }

          return (
            <div key={category}>
              <h2>{category}</h2>
              <ul className={styles.categoryList}>
                {categoryData.map((entry, index) => (
                  <li key={index} className={styles.entry}>
                    <div className={styles.entryName}>{entry.name}</div>
                    <div className={styles.entryDate}>
                      {entry.date.join(" - ")}
                    </div>
                    <div className={styles.entryDescription}>
                      {entry.description}
                    </div>
                    <div className={styles.skillsAcquired}>
                      Skills Acquired: {entry.skillsAcquired.join(", ")}
                    </div>
                    {entry.category === "Education" && entry.grades && (
                      <div className={styles.grades}>
                        Grades:
                        <div>
                          {entry.grades.map((grade, index) => (
                            <span key={index} className={styles.grade}>
                              {`${grade.Subject}: ${grade.Grade}`}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
