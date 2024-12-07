import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params
import "../css/titleservice.css";
import titleserviceData from "../data/titleserviceData";

const Titleservice = () => {
  // Get the id from the URL (e.g., "featured-tasks")
  const { id } = useParams();

  // Find the category that matches the URL parameter
  const category = titleserviceData.find(
    (cat) => cat.id.toLowerCase() === id.toLowerCase()
  );

  console.log("id from useParams:", id);
  console.log("Category found:", category); // Now log after category is defined

  return (
    <div>
      {category ? (
        <div className="service-category">
          <div
            className={`service-category ${category.title
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          <div className="task-list">
            {/* Map through tasks specific to the current category */}
            {category.tasks.map((task) => (
              <div key={task.taskId} className="task">
                <img src={task.image} alt={task.alt} />
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
};

export default Titleservice;
