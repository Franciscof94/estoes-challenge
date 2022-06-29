import React from "react";
import { Button } from "../../share/Button";
import { Wrapper } from "./Styles";
import { MdAdd } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { filterProject } from "../../store/actions/projectActions";
import { Input } from "../../share/Input";
import { useResize } from "../../Hooks/useResize";

const SubHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const { isPhone } = useResize()


  return (
    <Wrapper>
      <div>
        <div>
          {location.pathname === "/add" || location.pathname === "/edit" ? (
            <Link to="/">
              <RiArrowLeftLine fontSize={28} color="#595959" />
              <span>Back</span>
            </Link>
          ) : null}
          <h2>
            {location.pathname === "/add"
              ? "Add project"
              : location.pathname === "/edit"
              ? "Edit project"
              : "My projects"}
          </h2>
        </div>
        {location.pathname === "/" && !isPhone && (
          <div>
            <Input placeholder="Search..." variant="primary" type="text" onChange={(e) => dispatch(filterProject(e.target.value))} />
          </div>
        )}
        {location.pathname === "/" ? (
          <Link to="/add">
            <Button variant="primary">
              <MdAdd color="white" fontSize={21} /> Add project
            </Button>
          </Link>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default SubHeader;
