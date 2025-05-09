// EducationList.js
import React, { useEffect, useState } from "react";
import database from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const EducationList = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const eduRef = ref(database, "education");

    const unsubscribe = onValue(eduRef, (snapshot) => {
      const data = snapshot.val();
      if (Array.isArray(data)) {
        setEducationList(data);
      } else {
        setEducationList([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Education List</h2>
      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>
            <strong>{edu.college}</strong> – {edu.course}
            <br />
            <em>Class: {edu.class} | CGPA: {edu.cgpa}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationList;
