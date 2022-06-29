import React from "react";
import { connect } from "react-redux";
import { useResize } from "../../Hooks/useResize";
import Project from "../Project/Project";
import { NotResults, Wrapper } from "./Styles";
import { FiFilePlus } from "react-icons/fi";
import { Button } from "../../share/Button";
import { Link } from 'react-router-dom'

const ProjectTable = ({ filtered, projects }) => {
  const { isPhone } = useResize();

  return (
    <>
      {!filtered.length ? (
        <NotResults>
          <h3>No projects yet</h3>
          <div>
            <FiFilePlus fontSize={88} />
          </div>
          <Link to="/add"><Button variant="primary">Create a project</Button></Link>
        </NotResults>
      ) : (
        <Wrapper>
          {!isPhone && filtered.length > 0 && (
            <div>
              <span>Project Info</span>
              <span>Project Manager</span>
              <span>Assigned to</span>
              <span>Status</span>
              <span>Action</span>
            </div>
          )}
          {projects?.map((project, index) => (
            <Project data={project} key={index} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  filtered: state.project.filtered,
  currentsProjects: state.project.currentsProjects,
  totalProjects: state.project.totalProjects,
});

export default connect(mapStateToProps)(ProjectTable);
