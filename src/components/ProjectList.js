import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {/* In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects. For each object in the array, render one ProjectItem component with the correct props. Use the id of the project for the key prop. */}
        <ProjectItem key={projects[0].id} name={projects[0].name} about={projects[0].about} technologies={projects[0].technologies} />
        <ProjectItem key={projects[1].id} name={projects[1].name} about={projects[1].about} technologies={projects[1].technologies} />
        <ProjectItem key={projects[2].id} name={projects[2].name} about={projects[2].about} technologies={projects[2].technologies} />
      </div>
    </div>
  );
}

export default ProjectList;
