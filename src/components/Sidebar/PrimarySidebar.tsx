import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { ListItem, ListItemButton, Collapse } from "@mui/material";
import companyDataRaw from "./companyData.json"; // Adjust the path as necessary
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Second from './SecondSidebar';
import Card from '@mui/material/Card';
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation

interface Project {
  name: string;
  link: string;
}

interface Company {
  name: string;
  secondar_navigation: string;
  projects?: Project[];
  link?: string;
}

interface CompanyData {
  companies: Company[];
}

const Sidebar = () => {
  const [openCompany, setOpenCompany] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [data, setData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      const companyData: CompanyData = {
        companies: companyDataRaw.companies.map(company => ({
          ...company,
          secondar_navigation: company.secondar_navigation || ""
        }))
      };
      setData(companyData);
      setLoading(false);
    }, 0);
  }, []);

  const handleClick = (company: string) => {
    setOpenCompany((prev) => (prev === company ? null : company));
  };

  const handleProjectClick = (project: string) => {
    setActiveProject(project);
  };

  const isSecondaryItemActive = (projects: Project[] | undefined) => {
    return projects?.some(project => location.pathname === project.link);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const companies = data?.companies || [];

  return (
    <Card className="sidebar" style={{ overflow: 'auto' }}>
      {companies.length === 0 ? (
        <div>No data available. Please try again.</div>
      ) : (
        companies.map((company, index) => (
          <div
            key={index}
            className="sidebar-item"
            onClick={() => {
              if (company.secondar_navigation === "false") {
                handleProjectClick(company.name);
              } else {
                handleClick(company.name);
                handleProjectClick(company.name);
              }
            }}
          >
            {company.secondar_navigation === "false" ? (
              /* If secondary navigation is false, the company name will act as a link */
              <ListItemButton component={NavLink} to={company.link || "#"}>
                <ListItem>
                  {company.name}
                </ListItem>
              </ListItemButton>
            ) : (
              <>
                {/* If the company has secondary navigation enabled (true) */}
                <ListItemButton selected={activeProject === company.name || isSecondaryItemActive(company.projects)}>
                  <ListItem>
                    {company.name}
                    {company.secondar_navigation === "true" && (
                      openCompany === company.name ? <ExpandLess /> : <ExpandMore />
                    )}
                  </ListItem>
                </ListItemButton>
                {/* Render projects if available */}
                {company.secondar_navigation === "true" && (
                  <Collapse in={openCompany === company.name} timeout="auto" unmountOnExit>
                    <Second projects={company.projects || []} /> {/* Pass projects to Second */}
                  </Collapse>
                )}
              </>
            )}
          </div>
        ))
      )}
    </Card>
  );
};

export default Sidebar;