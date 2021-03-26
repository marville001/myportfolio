import React, { useState } from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const filerCategory = (name) => {
    const new_projects = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_projects);
  };
  return (
    <div className="container projects">
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => filerCategory("react.js")}>React Js</div>
        <div onClick={() => filerCategory("mongoDB")}>MongoDb</div>
        <div onClick={() => filerCategory("node.js")}>Node Js</div>
        <div onClick={() => filerCategory("vanilla")}>Vanilla Js</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
