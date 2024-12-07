import React from "react";
import { Link } from "react-router-dom";
import "../css/services.css";
import serviceData from "../data/serviceData"; // Assuming serviceData contains the list of service categories

const Services = () => {
  return (
    <div>
      <div className="serviceline">
        <h1>Simplify life with services just a click away.</h1>
      </div>

      <section className="services-section">
        <h2>Your Task, Our Priority</h2>
        <div className="service-category">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.alt} />
              <h3>
                {/* Link to TitleService.js for the category */}
                <Link
                  to={`/title-service/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {service.title}
                </Link>
              </h3>
              <p>{service.description}</p>
              <hr />
              <ul>
                {/* Loop through tasks and create links to ServiceDetails.js */}
                {service.tasks.map((task) => (
                  <li key={task.taskId}>
                    <Link
                      to={`/service-details/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${task.taskId}`}
                    >
                      {task.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
