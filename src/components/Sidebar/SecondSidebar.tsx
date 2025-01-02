import React from "react";
import { Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

interface Project {
  name: string;
  link: string;
}

interface SecondProps {
  projects: Project[];
}

const Second: React.FC<SecondProps> = ({ projects }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <Button
            key={index}
            component={NavLink}
            to={project.link}
            sx={{
              color: location.pathname === project.link ? 'Blue' : 'black',
              fontWeight: location.pathname === project.link ? 'bold' : 'normal',
            }} >
            {project.name}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Second;
