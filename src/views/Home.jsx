import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ProjectTable from "../components/ProjectTable/ProjectTable";
import SubHeader from "../components/SubHeader/SubHeader";
import { useLocation } from "react-router-dom";
import Createproject from "../components/CreateProject/Createproject";
import Pagination from "../components/Pagination/Pagination";
import { connect, useDispatch } from "react-redux";
import Modal from "../components/Modal/Modal";
import { InputContainer, Wrapper } from "./Styles";
import { useResize } from "../Hooks/useResize";
import { filterProject } from "../store/actions/projectActions";
import { Input } from "../share/Input";

const Home = ({ filtered, showModal, id, editProject }) => {
  const location = useLocation();
  const { isPhone } = useResize();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const totalProjects = filtered.length;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const filterProjects = filtered.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <Wrapper showModal={showModal}>
      <Header />
      <SubHeader />
      {isPhone && (
        <InputContainer>
          <Input
            placeholder="Search..."
            variant="primary"
            type="text"
            onChange={(e) => dispatch(filterProject(e.target.value))}
          />
        </InputContainer>
      )}
      {showModal && <Modal />}
      {location.pathname === "/add" || location.pathname === "/edit" ? (
        <Createproject />
      ) : (
        <ProjectTable projects={filterProjects} />
      )}
      {filtered.length > 0 && location.pathname === "/" && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProjects={totalProjects}
          projectsPerPage={projectsPerPage}
        />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  project: state.project.newProject,
  filtered: state.project.filtered,
  showModal: state.showModal.showModal,
  id: state.project.id,
  editProject: state.project.editProject,
});

export default connect(mapStateToProps)(Home);
